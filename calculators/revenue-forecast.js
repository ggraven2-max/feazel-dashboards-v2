/* ============================================================
   FEAZEL CALCULATOR - Revenue Forecast (V5 baseline, Python shell)
   ----------------------------------------------------------------
   This calculator does NOT re-implement the V5 math.
   It shells out to the locked Python implementation:
     1. refresh_v5.py        (the V5 model)
     2. build_dashboard_v5.py (Greg's dashboard builder, used as a sanity check)
     3. lib/v5_to_json.py    (companion script that emits REVENUE_FORECAST JSON)
   See inputs/residential/revenue-forecast/RULES.md for full methodology.

   ───────────────────────────────────────────────────────────────
   STATUS: SHELL WRAPPER · V5 BASELINE LOCKED 2026-04-19
            (cycle and same-month conversion UNLOCKED 2026-04-30,
             MMU REMOVED 2026-04-30, NetSuite invoicing LOCKED
             2026-05-04 — see V5_CONSTANTS.lockHistory below)
   ───────────────────────────────────────────────────────────────

   Behavior:
     - If inputs are present in inputs/revenue-forecast/ AND the
       Python source files are reachable, the wrapper stages the
       inputs in a working folder, writes forecast_config.json, runs
       refresh_v5.py, runs v5_to_json.py, and returns the parsed JSON.
     - If inputs are missing, OR Python is not on PATH, OR the
       refresh_v5.py source is unreachable, the wrapper falls back to
       readFromExtracted() so the dashboard never breaks.

   Locked constants are mirrored in V5_CONSTANTS below for reference
   only. The Python is the source of truth.
   ============================================================ */
const path = require('path');
const fs = require('fs');
const os = require('os');
const { spawnSync } = require('child_process');
const io = require('./lib/io');
const netsuite = require('./lib/netsuite-invoices');
const v5Crosscheck = require('./lib/v5-excel-crosscheck');

const PROJECT_ID = 'revenue-forecast';
// Version string format: V5-baseline-<YYYY-MM-DD of last lock change>-shell-<wrapper rev>
// Last lock change: 2026-05-04 (NetSuite invoicing canonical, closed-month auto-detection).
const VERSION = 'V5-baseline-2026-05-04-shell-1.1';
const REPO_ROOT = path.join(__dirname, '..');
// Defaults point at residential. Pipeline overrides via opts.inputDir + opts.snapshotPath per LOB.
const DEFAULT_INPUT_DIR = path.join(REPO_ROOT, 'inputs', 'residential', PROJECT_ID);
const DEFAULT_SNAPSHOT_PATH = path.join(REPO_ROOT, 'redesign', 'residential', 'shared', 'extracted-data.json');
const LIB_DIR = path.join(__dirname, 'lib');

// Python source lives outside the repo (Greg's Forecasting Process folder).
// Resolution order:
//   1. FEAZEL_FORECAST_SRC env var (use this in CI / shared dev environments).
//   2. <homedir>/Documents/Claude/Projects/Forecasting Process (Greg's mac).
//   3. <homedir>/Forecasting Process (alternate developer convention).
//   4. Cowork workspace mounts: any /sessions/*/mnt/Forecasting Process path
//      that happens to exist in the current sandbox. Discovered at runtime
//      so we don't ship a stale session ID in checked-in code.
function discoverWorkspaceMounts() {
  const mountsRoot = '/sessions';
  if (!fs.existsSync(mountsRoot)) return [];
  try {
    return fs.readdirSync(mountsRoot)
      .map(s => path.join(mountsRoot, s, 'mnt', 'Forecasting Process'))
      .filter(p => { try { return fs.existsSync(p); } catch (e) { return false; } });
  } catch (e) { return []; }
}
const PYTHON_SOURCE_DIR_CANDIDATES = [
  process.env.FEAZEL_FORECAST_SRC || '',
  path.join(os.homedir(), 'Documents', 'Claude', 'Projects', 'Forecasting Process'),
  path.join(os.homedir(), 'Forecasting Process'),
  ...discoverWorkspaceMounts()
].filter(Boolean);

const REQUIRED_PY_FILES = ['refresh_v5.py', 'build_dashboard_v5.py'];
const OPTIONAL_PY_FILES = ['wip_reference.pkl', 'v4_forecast_detail.pkl'];

// ────────────────────────────────────────────────────────────
// V5 METHODOLOGY REFERENCE (source of truth = Python refresh_v5.py)
//
// Lock state per FORECASTING_RULES.md (last revised 2026-05-04):
//   - Cycle hierarchy:      UNLOCKED 2026-04-30, recomputed each refresh
//                            (4-stage: Signed → Created → InProgress → Completed → Invoiced)
//   - Same-month conversion: UNLOCKED 2026-04-30, sales-cohort YTD recomputed each refresh
//   - MMU (material mark-up): REMOVED ENTIRELY 2026-04-30
//   - WIP percent-complete:  LOCKED at 0.75 (HTML dashboard proxy)
//   - Branch consolidation:  LOCKED, NOVA → DC Metro effective 2026-04
//   - Invoicing source:      NetSuite ResInvoicedYTDResults*.csv (adopted 2026-05-04)
//   - April invoiced overlay: LOCKED at NetSuite actuals
//   - wip_reference.pkl:     LOCKED, do not regenerate without approval
//
// The constants below are kept only as a reference for downstream consumers
// that want to know the locked values. Cycle hierarchy and conversion curves
// shown below are stale defaults from the 2026-04-19 lock; the Python
// recomputes them on every refresh and is authoritative.
// ────────────────────────────────────────────────────────────
const V5_CONSTANTS = {
  // STALE defaults from the 2026-04-19 lock. Python recomputes these per refresh.
  cycleHierarchy_stale_defaults: {
    'Insurance':           { medianDays: 27, meanDays: 76 },
    'Retail-Financing':    { medianDays:  3, meanDays: 20 },
    'Retail-No Financing': { medianDays:  4, meanDays: 20 },
    'Repair':              { medianDays:  2, meanDays: 11 }
  },
  conversionCurves_stale_defaults: {
    'Insurance':           [0.10, 0.30, 0.35, 0.25],
    'Retail-Financing':    [0.45, 0.40, 0.10, 0.05],
    'Retail-No Financing': [0.50, 0.35, 0.10, 0.05],
    'Repair':              [0.85, 0.10, 0.05, 0.00]
  },
  budgetAnnual: 125_600_000,
  // WIP percent-complete proxy used in the HTML dashboard's empirical WIP math.
  // V5 Excel model uses NetSuite 40003 GL movement instead (when available).
  // PCT_COMPLETE = 0.75 is the locked value from FORECASTING_RULES.md §4.6.
  pctComplete: 0.75,
  branchRemap: { 'NOVA': 'DC Metro' },
  lockHistory: {
    'locked':                   '2026-04-19',  // initial V5 lock
    'unlocked_methodology':     '2026-04-30',  // cycle, conversion, MMU
    'mmu_removed':              '2026-04-30',
    'pipeline_ownership_locked':'2026-04-30',  // build_refresh_v2.py canonical
    'netsuite_invoicing':       '2026-05-04'   // ResInvoicedYTDResults*.csv canonical
  }
};

// ────────────────────────────────────────────────────────────
// Helpers
// ────────────────────────────────────────────────────────────
function findPythonSourceDir() {
  for (const d of PYTHON_SOURCE_DIR_CANDIDATES) {
    if (!d) continue;
    const allPresent = REQUIRED_PY_FILES.every(f => {
      try { return fs.existsSync(path.join(d, f)); }
      catch (e) { return false; }
    });
    if (allPresent) return d;
  }
  return null;
}

function findPython() {
  // Prefer python3, fall back to python.
  for (const cmd of ['python3', 'python']) {
    const probe = spawnSync(cmd, ['-c', 'import sys; print(sys.version_info[0])'], { encoding: 'utf8' });
    if (probe.status === 0 && probe.stdout && probe.stdout.trim().startsWith('3')) {
      return cmd;
    }
  }
  return null;
}

function makeWorkDir() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'feazel-revfx-'));
  return dir;
}

function copyOrLink(srcDir, files, destDir) {
  files.forEach(name => {
    const src = path.join(srcDir, name);
    const dest = path.join(destDir, name);
    if (!fs.existsSync(src)) return;
    try {
      fs.symlinkSync(src, dest);
    } catch (e) {
      try { fs.copyFileSync(src, dest); } catch (e2) { /* ignore */ }
    }
  });
}

/**
 * Map files in inputs/revenue-forecast/ to the keys forecast_config.json expects.
 * The Python's find_file() pattern matching is the spec; we mirror it here so
 * we can pass explicit paths instead of relying on glob lookups.
 */
function classifyInputs(files) {
  const cfg = {};
  for (const f of files) {
    const lower = f.name.toLowerCase();
    const full = f.fullPath;
    if (lower.includes('forecasting report')) cfg.forecast_report = full;
    else if (lower.includes('sold not processed')) cfg.snp = full;
    else if (lower.includes('contracts signed')) cfg.contracts_ytd = full;
    else if (lower.includes('residential budget') || lower.includes('budget')) {
      cfg.budget = cfg.budget || full;
    }
    else if (lower.includes('profitability')) cfg.profitability = full;
  }
  return cfg;
}

function runPython(pythonCmd, scriptPath, cwd, extraEnv) {
  const env = Object.assign({}, process.env, extraEnv || {});
  const result = spawnSync(pythonCmd, [scriptPath], {
    cwd,
    env,
    encoding: 'utf8',
    maxBuffer: 64 * 1024 * 1024,
    timeout: 5 * 60 * 1000
  });
  return result;
}

// ────────────────────────────────────────────────────────────
// Main entry
// ────────────────────────────────────────────────────────────
function run(opts) {
  opts = opts || {};
  const inputDir = opts.inputDir || DEFAULT_INPUT_DIR;
  const snapshotPath = opts.snapshotPath || DEFAULT_SNAPSHOT_PATH;
  const lob = opts.lob || 'residential';

  // V5 is the residential methodology, locked 2026-04-19. Multi-family uses
  // its own job-by-job model (MF-v1) with monthly XLSX uploads. The MF
  // calculator is a separate file; we just delegate.
  if (lob === 'multi-family') {
    const mfCalc = require('./revenue-forecast-mf');
    return mfCalc.run({ inputDir, snapshotPath, lob });
  }
  if (lob === 'service') {
    const svcCalc = require('./revenue-forecast-service');
    return svcCalc.run({ inputDir, snapshotPath, lob });
  }

  const inputs = io.listInputs(inputDir);
  console.log('  [' + PROJECT_ID + '] inputs found: ' + inputs.length);
  inputs.forEach(f => console.log('    · ' + f.name));

  if (inputs.length === 0) {
    console.log('  [' + PROJECT_ID + '] no inputs, falling back to ' + path.relative(REPO_ROOT, snapshotPath));
    return readFromExtracted(snapshotPath);
  }

  // Classify inputs against the V5 file spec (RULES.md inputs section)
  const cfg = classifyInputs(inputs);
  if (!cfg.forecast_report || !cfg.snp || !cfg.contracts_ytd) {
    console.log('  [' + PROJECT_ID + '] missing one or more required inputs (Forecasting Report, SNP, Contracts Signed). Falling back to extracted-data.json.');
    return readFromExtracted(snapshotPath);
  }

  const sourceDir = findPythonSourceDir();

  // Budget is documented as "recommended" but refresh_v5.py crashes if it's None.
  // We refuse to invent a budget. Bail out cleanly with a clear ask.
  if (!cfg.budget) {
    console.log('  [' + PROJECT_ID + '] no Residential Budget XLSX uploaded.');
    console.log('    V5 needs a NetSuite Residential Budget export with rows for');
    console.log('    "40001 - Sales", "40003 - Work in Progress", and the 40000 total.');
    console.log('    Drop one in ' + path.relative(REPO_ROOT, inputDir) + '/ and rerun. Falling back to extracted snapshot.');
    return readFromExtracted(snapshotPath);
  }
  if (!sourceDir) {
    console.log('  [' + PROJECT_ID + '] V5 Python source folder not reachable. Falling back to extracted-data.json.');
    console.log('    (Set env FEAZEL_FORECAST_SRC to the path containing refresh_v5.py to enable.)');
    return readFromExtracted(snapshotPath);
  }

  const pythonCmd = findPython();
  if (!pythonCmd) {
    console.log('  [' + PROJECT_ID + '] no Python 3 on PATH. Falling back to extracted-data.json.');
    return readFromExtracted(snapshotPath);
  }

  // Stage a work directory: V5 Python source + a forecast_config.json pointing
  // at our uploaded inputs. The Python will read its inputs from the explicit
  // paths in the config rather than the mnt/uploads/ glob.
  const workDir = makeWorkDir();
  console.log('  [' + PROJECT_ID + '] staging work dir: ' + workDir);
  try {
    // Symlink the Python sources into the work dir so relative imports work.
    copyOrLink(sourceDir, REQUIRED_PY_FILES.concat(OPTIONAL_PY_FILES), workDir);

    // Symlink the v5_to_json.py emitter from this repo into the work dir.
    const emitterSrc = path.join(LIB_DIR, 'v5_to_json.py');
    if (!fs.existsSync(emitterSrc)) {
      throw new Error('Missing emitter at ' + emitterSrc + '. Cannot proceed.');
    }
    const emitterDest = path.join(workDir, 'v5_to_json.py');
    try { fs.symlinkSync(emitterSrc, emitterDest); }
    catch (e) { fs.copyFileSync(emitterSrc, emitterDest); }

    // Write forecast_config.json
    const configPayload = Object.assign({
      date: new Date().toISOString().slice(0, 10)
    }, cfg);
    fs.writeFileSync(path.join(workDir, 'forecast_config.json'), JSON.stringify(configPayload, null, 2));

    // refresh_v5.py has a Python gotcha: cfg.get(key, find_file('*pattern*'))
    // eagerly evaluates find_file() even when the key exists. find_file() does
    // sys.exit(1) when nothing matches the glob, so we MUST also populate
    // mnt/uploads/ with the same files to keep that side-effect safe.
    const fakeUploads = path.join(workDir, 'mnt', 'uploads');
    fs.mkdirSync(fakeUploads, { recursive: true });
    Object.values(cfg).forEach(srcPath => {
      if (!srcPath) return;
      const dest = path.join(fakeUploads, path.basename(srcPath));
      try { fs.symlinkSync(srcPath, dest); }
      catch (e) {
        try { fs.copyFileSync(srcPath, dest); } catch (e2) { /* ignore */ }
      }
    });

    // Step 1: run refresh_v5.py
    console.log('  [' + PROJECT_ID + '] running refresh_v5.py …');
    const refresh = runPython(pythonCmd, path.join(workDir, 'refresh_v5.py'), workDir);
    if (refresh.status !== 0) {
      console.error('  [' + PROJECT_ID + '] refresh_v5.py FAILED (exit ' + refresh.status + ')');
      if (refresh.stderr) console.error('    stderr:', refresh.stderr.slice(-2000));
      throw new Error('refresh_v5.py failed: ' + (refresh.stderr || 'no stderr'));
    }
    if (refresh.stdout) {
      // Pass-through of the model's structured logs (helpful for daily ops)
      refresh.stdout.split('\n').slice(-30).forEach(l => l && console.log('    ' + l));
    }

    // Sanity-check that the pickles got produced
    const dashPkl = path.join(workDir, 'v5_dashboard_data.pkl');
    const budgetPkl = path.join(workDir, 'v5_budget_solve.pkl');
    if (!fs.existsSync(dashPkl) || !fs.existsSync(budgetPkl)) {
      throw new Error('refresh_v5.py ran but did not produce expected pickles');
    }

    // Step 2: run v5_to_json.py to emit the REVENUE_FORECAST JSON
    console.log('  [' + PROJECT_ID + '] running v5_to_json.py …');
    const emit = runPython(pythonCmd, path.join(workDir, 'v5_to_json.py'), workDir);
    if (emit.status !== 0) {
      console.error('  [' + PROJECT_ID + '] v5_to_json.py FAILED (exit ' + emit.status + ')');
      if (emit.stderr) console.error('    stderr:', emit.stderr.slice(-2000));
      throw new Error('v5_to_json.py failed: ' + (emit.stderr || 'no stderr'));
    }

    const jsonPath = path.join(workDir, 'revenue_forecast.json');
    if (!fs.existsSync(jsonPath)) {
      throw new Error('v5_to_json.py ran but did not produce revenue_forecast.json');
    }

    const out = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    out._source = 'calculator/revenue-forecast.js ' + VERSION;
    console.log('  [' + PROJECT_ID + '] V5 model output OK. ' +
      'Annual model: $' + Math.round((out.execSummary && out.execSummary.modelAnnualInvoiced) || 0).toLocaleString() +
      ' vs budget $' + Math.round((out.execSummary && out.execSummary.budget) || 0).toLocaleString());

    // ---- NetSuite invoice override ----
    // V5 derives "Invoiced YTD" from Salesforce stage transitions. NetSuite AR
    // is the GAAP source of truth (booked invoices, not stage events). When a
    // NetSuite invoice CSV is present, override the Invoiced YTD KPI value
    // with the NetSuite total. Other V5 fields stay untouched.
    applyNetSuiteOverride(out, inputDir);

    // ---- V5 Excel cross-check ----
    // If Mahlet's "Revenue Forecast Model.xlsx" is in the inputs folder,
    // compare its headline KPIs against what we're emitting. Logs warnings
    // on divergence, attaches the report to the output for the dashboard.
    try {
      const xc = v5Crosscheck.crossCheck(out, inputDir);
      if (xc) out.v5ExcelCheck = xc;
    } catch (err) {
      console.log('  [' + PROJECT_ID + '] v5-crosscheck error: ' + err.message);
    }

    return out;

  } catch (err) {
    console.error('  [' + PROJECT_ID + '] V5 wrapper threw: ' + err.message);
    console.error('    Falling back to extracted-data.json snapshot.');
    return readFromExtracted(snapshotPath);
  } finally {
    // Cleanup: best-effort, do not block on failures.
    try {
      if (process.env.FEAZEL_KEEP_WORKDIR) {
        console.log('  [' + PROJECT_ID + '] keeping work dir (FEAZEL_KEEP_WORKDIR set): ' + workDir);
      } else {
        fs.rmSync(workDir, { recursive: true, force: true });
      }
    } catch (e) { /* ignore */ }
  }
}

function buildStub(reason) {
  return {
    _source: 'calculator/revenue-forecast.js ' + VERSION + ' (stub: ' + reason + ')',
    title: 'Residential Revenue Forecast',
    subtitle: 'V5 Model with Job Type Analysis',
    runDate: new Date().toISOString().slice(0, 10),
    kpis: [],
    tabs: [],
    execSummary: { budget: V5_CONSTANTS.budgetAnnual, modelAnnualInvoiced: 0, gap: 0, narrative: 'No data yet.' },
    monthRevenue: { april: { invoiced: 0, wipChange: 0, netRevenue: 0 }, may: { invoiced: 0, wipChange: 0, netRevenue: 0 } },
    weeklyTargetsHeader: { avgWeeklyNeed: 0, recent4WkAvg: 0, gap: 0, productionAvgWeeklyNeed: 0, productionCycleStart: 0, productionCycleComplete: 0, productionTotalCycle: 0 },
    budgetRecoveryHeader: { fullYearBudget: V5_CONSTANTS.budgetAnnual, gap: 0, upliftPct: 0, aprilGap: 0, q1OriginalBudget: 0, q1Actual: 0, q1Shortfall: 0 },
    profitabilitySummary: { combinedGP: 0, combinedGP_pct: 0, combinedRevenue: 0, y2025_GP_pct: 0, y2026_GP_pct: 0, y2025_revenue: 0, y2025_jobs: 0, materialCost: 0, laborCost: 0, commissions: 0, materialPctContract: 0, laborPctContract: 0, commissionPctContract: 0 },
    pipelineSnapshot: { stages: [] },
    commentary: { actionableRecommendations: [], strategyHighlights: [] },
    tables: [],
    charts: []
  };
}

// Replace V5's Salesforce-derived Invoiced YTD with NetSuite AR totals when
// a NetSuite invoice CSV is present in the input folder. Mutates `out`.
//
// Also computes the "actualMonths" lock list per FORECASTING_RULES.md §4.1
// (closed-month auto-detection): a month is closed when its month-end date is
// strictly before max(NetSuite Date). Closed-month invoiced is locked at the
// NetSuite total, never re-forecasted by V5.
function applyNetSuiteOverride(out, inputDir) {
  if (!out || !inputDir) return;
  let ns;
  try { ns = netsuite.parseInvoices(inputDir); }
  catch (err) {
    console.log('  [' + PROJECT_ID + '] NetSuite parse error: ' + err.message);
    return;
  }
  if (!ns) return;

  const fmtShort = function (v) {
    if (!v) return '$0';
    if (v >= 1e9) return '$' + (v / 1e9).toFixed(2).replace(/\.?0+$/, '') + 'B';
    if (v >= 1e6) return '$' + (v / 1e6).toFixed(2).replace(/\.?0+$/, '') + 'M';
    if (v >= 1e3) return '$' + (v / 1e3).toFixed(0) + 'K';
    return '$' + Math.round(v).toLocaleString('en-US');
  };

  if (ns.aggregatedOnly) {
    console.log('  [' + PROJECT_ID + '] NetSuite override (BRANCH ROLLUP): $' +
      Math.round(ns.totalInvoiced).toLocaleString() + ' across ' +
      Object.keys(ns.byBranch).length + ' branches from ' + ns.fileName);
    console.log('  [' + PROJECT_ID + '] NOTE: aggregated rollup has no Date column. ' +
      'Per-month chart locks and Q1 detail will be unavailable until a per-invoice export is provided.');
  } else {
    console.log('  [' + PROJECT_ID + '] NetSuite override: ' + ns.invoiceCount + ' invoices totaling $' +
      Math.round(ns.totalInvoiced).toLocaleString() + ' from ' + ns.fileName);
  }

  // Find the "Invoiced YTD" KPI and patch it
  if (Array.isArray(out.kpis)) {
    for (const k of out.kpis) {
      if (k && /invoiced ytd/i.test(k.label || '')) {
        k.value = fmtShort(ns.totalInvoiced);
        k.sub = ns.aggregatedOnly
          ? 'NetSuite AR · branch rollup'
          : 'NetSuite AR · ' + ns.invoiceCount + ' invoices booked';
      }
    }
  }

  // Closed-month auto-detection (FORECASTING_RULES.md §4.1, §7.2)
  // A month is closed when its month-end is strictly before max(NetSuite Date).
  const MONTHS_LONG = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const MONTHS_SHORT = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const FY = 2026;
  const actualMonths = [];
  if (ns.latestDate) {
    for (let m = 0; m < 12; m++) {
      const monthEnd = new Date(FY, m + 1, 0);   // last day of month m
      if (monthEnd < ns.latestDate && ns.monthly[m] > 0) {
        actualMonths.push({
          monthIdx: m,
          short: MONTHS_SHORT[m] + ' ' + FY,
          long: MONTHS_LONG[m] + ' ' + FY,
          invoiced: ns.monthly[m],
          source: 'NetSuite (locked)',
          locked: true
        });
      }
    }
  }
  if (actualMonths.length) {
    console.log('  [' + PROJECT_ID + '] Closed months locked at NetSuite actuals: ' +
      actualMonths.map(m => m.short + ' $' + Math.round(m.invoiced).toLocaleString()).join(', '));
  }

  // Patch the monthly arrays the dashboard charts read from. V5's revModel[]
  // and revFromKnown[] are the chart sources for "Net Revenue: Budget vs
  // Forecast" and similar; they need to show NetSuite actuals for closed
  // months instead of V5's raw forecast (which can run higher than actual).
  // monthRevenue.{month} also gets patched so the per-month detail panes
  // surface the locked figure.
  const MONTH_KEYS = ['january','february','march','april','may','june','july','august','september','october','november','december'];
  if (Array.isArray(out.revModel) && out.revModel.length === 12) {
    actualMonths.forEach(m => { out.revModel[m.monthIdx] = m.invoiced; });
  }
  if (Array.isArray(out.revFromKnown) && out.revFromKnown.length === 12) {
    actualMonths.forEach(m => { out.revFromKnown[m.monthIdx] = m.invoiced; });
  }
  if (out.monthRevenue && typeof out.monthRevenue === 'object') {
    actualMonths.forEach(m => {
      const key = MONTH_KEYS[m.monthIdx];
      if (out.monthRevenue[key]) {
        out.monthRevenue[key].invoiced = m.invoiced;
        // Recompute net revenue for the closed month if WIP change is present
        if ('wipChange' in out.monthRevenue[key]) {
          out.monthRevenue[key].netRevenue = m.invoiced + out.monthRevenue[key].wipChange;
        }
      }
    });
  }

  // Stash NetSuite numbers + lock list in a sub-object the dashboard can read
  out.netsuiteInvoiced = {
    source: ns.fileName,
    format: ns.format,
    aggregatedOnly: !!ns.aggregatedOnly,
    totalInvoiced: ns.totalInvoiced,
    invoiceCount: ns.invoiceCount,
    monthly: ns.monthly,
    byBranch: ns.byBranch,
    monthsWithData: ns.monthsWithData,
    latestInvoiceDate: ns.latestDate ? ns.latestDate.toISOString().slice(0, 10) : null,
    actualMonths: actualMonths   // each closed month with locked invoiced amount
  };
}

function readFromExtracted(snapshotPath) {
  const extractedPath = snapshotPath || DEFAULT_SNAPSHOT_PATH;
  if (!fs.existsSync(extractedPath)) {
    return buildStub('no extracted snapshot found');
  }
  let extracted;
  try {
    extracted = JSON.parse(fs.readFileSync(extractedPath, 'utf8'));
  } catch (e) {
    console.log('  [' + PROJECT_ID + '] extracted-data.json failed to parse: ' + e.message);
    return buildStub('extracted snapshot unparseable');
  }
  if (extracted && extracted.REVENUE_FORECAST) return extracted.REVENUE_FORECAST;
  console.log('  [' + PROJECT_ID + '] extracted-data.json has no REVENUE_FORECAST key; returning stub.');
  return buildStub('extracted snapshot has no REVENUE_FORECAST key');
}

function validate(out) {
  const errors = [];
  if (!out) errors.push('output is null');
  if (out && !out.kpis) errors.push('missing kpis');
  if (out && !out.execSummary) errors.push('missing execSummary');
  if (out && !out.pipelineSnapshot) errors.push('missing pipelineSnapshot');
  if (out && !out.tables) errors.push('missing tables array');
  if (out && !out.charts) errors.push('missing charts array');
  return errors;
}

module.exports = { id: PROJECT_ID, version: VERSION, run, validate, constants: V5_CONSTANTS };
