/* ============================================================
   FEAZEL CALCULATOR - Revenue Forecast (V5 LOCKED, Python shell)
   ----------------------------------------------------------------
   This calculator does NOT re-implement the V5 math.
   It shells out to the locked Python implementation:
     1. refresh_v5.py        (the V5 model)
     2. build_dashboard_v5.py (Greg's dashboard builder, used as a sanity check)
     3. lib/v5_to_json.py    (companion script that emits REVENUE_FORECAST JSON)
   See inputs/revenue-forecast/RULES.md for full methodology.

   ───────────────────────────────────────────────────────────────
   STATUS: SHELL WRAPPER · METHODOLOGY V5 LOCKED 2026-04-19
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

const PROJECT_ID = 'revenue-forecast';
const VERSION = 'V5-locked-2026-04-19-shell-1.0';
const REPO_ROOT = path.join(__dirname, '..');
// Defaults point at residential. Pipeline overrides via opts.inputDir + opts.snapshotPath per LOB.
const DEFAULT_INPUT_DIR = path.join(REPO_ROOT, 'inputs', 'residential', PROJECT_ID);
const DEFAULT_SNAPSHOT_PATH = path.join(REPO_ROOT, 'redesign', 'residential', 'shared', 'extracted-data.json');
const LIB_DIR = path.join(__dirname, 'lib');

// Python source lives outside the repo (Greg's Forecasting Process folder).
// The wrapper looks here first; if missing, the workspace mount may also expose it.
const PYTHON_SOURCE_DIR_CANDIDATES = [
  '/sessions/confident-affectionate-turing/mnt/Forecasting Process',
  process.env.FEAZEL_FORECAST_SRC || '',
  path.join(os.homedir(), 'Documents', 'Claude', 'Projects', 'Forecasting Process'),
].filter(Boolean);

const REQUIRED_PY_FILES = ['refresh_v5.py', 'build_dashboard_v5.py'];
const OPTIONAL_PY_FILES = ['wip_reference.pkl', 'v4_forecast_detail.pkl'];

// ────────────────────────────────────────────────────────────
// V5 LOCKED CONSTANTS (mirrored for reference, source of truth = Python)
// Do not change without explicit sign-off from Greg + Mahlet.
// Rationale for any change MUST be recorded in RULES.md and the PR.
// ────────────────────────────────────────────────────────────
const V5_CONSTANTS = {
  cycleHierarchy: {
    'Insurance':           { medianDays: 27, meanDays: 76 },
    'Retail-Financing':    { medianDays:  3, meanDays: 20 },
    'Retail-No Financing': { medianDays:  4, meanDays: 20 },
    'Repair':              { medianDays:  2, meanDays: 11 }
  },
  conversionCurves: {
    'Insurance':           [0.10, 0.30, 0.35, 0.25],
    'Retail-Financing':    [0.45, 0.40, 0.10, 0.05],
    'Retail-No Financing': [0.50, 0.35, 0.10, 0.05],
    'Repair':              [0.85, 0.10, 0.05, 0.00]
  },
  budgetAnnual: 125_600_000,
  wipFactor: 0.18,
  // MMU split (cost-of-revenue assumptions, locked)
  costSplit: {
    materialPct: 0.35,
    laborPct: 0.22,
    pctNew: 0.75,
    pctPrior: 0.90,
    margin: 0.40
  },
  branchRemap: { 'NOVA': 'DC Metro' },
  lockedOn: '2026-04-19'
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
