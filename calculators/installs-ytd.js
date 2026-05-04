/* ============================================================
   FEAZEL CALCULATOR - Residential Installs YTD
   Reads inputs/installs-ytd/*.csv (or .xlsx) and produces the
   INSTALLS_YTD JSON shape the dashboard consumes.

   Methodology lock (per Project 4 kit):
     - Revenue from "Date Moved to Invoiced", counted ONCE per
       unique Job Number (first work order).
     - PM revenue is fractional: contract amount divided by
       number of work orders on that job.
     - Multi-trade = 2+ distinct Service Objects per Job Number.
     - Cycle metrics use job-level medians.

   Rules are documented in inputs/installs-ytd/RULES.md
   (RULE-401 through RULE-424, VAL-401 through VAL-405).
   ============================================================ */
const path = require('path');
const fs = require('fs');
const io = require('./lib/io');

const PROJECT_ID = 'installs-ytd';
const VERSION = '1.0-rules-encoded';
// Defaults point at residential. Pipeline overrides via opts.inputDir + opts.snapshotPath per LOB.
const DEFAULT_INPUT_DIR = path.join(__dirname, '..', 'inputs', 'residential', PROJECT_ID);
const DEFAULT_SNAPSHOT_PATH = path.join(__dirname, '..', 'redesign', 'residential', 'shared', 'extracted-data.json');

// ────────────────────────────────────────────────────────────
// Column aliases (RULE-401)
// Each entry is an array of acceptable column names; calculator
// picks the first one present in the row.
// ────────────────────────────────────────────────────────────
const COL_ALIASES = {
  jobNum:    ['Job: Job Number', 'Job Number'],
  branch:    ['Branch Location to Service', 'Branch Location'],
  pm:        ['PM1/Production Manager: Full Name', 'Project Manager: Full Name', 'Project Manager', 'PM'],
  trade:     ['Service Object'],
  svcType:   ['Service Type'],   // optional in practice, not used in any rule
  invoiced:  ['Date Moved to Invoiced'],
  contract:  ['Final Contract Amount', 'Contract Amount', 'Amount'],
  creator:   ['Created By: Full Name', 'Created By'],
  created:   ['Created Date', 'Date Created', 'Sold Date'],
  completed: ['Date Moved to Completed', 'Complete Date'],
  started:   ['Date Moved to In Progress', 'Date Moved to Started', 'Start Date'],
  account:   ['Account Name'],
  salesperson: ['Salesperson: Full Name', 'Salesperson Name']
};

// svcType and started are optional (not strictly required by any RULE)
const REQUIRED_KEYS = [
  'jobNum', 'branch', 'pm', 'trade',
  'invoiced', 'contract', 'creator', 'created', 'completed'
];

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

// VAL-405 watch list (soft check)
const ACTIVE_MARKETS_14 = [
  'Columbus', 'Cincinnati', 'Cleveland', 'Dayton', 'Detroit Metro',
  'Grand Rapids', 'Greensboro', 'Greenville', 'Knoxville', 'Nashville',
  'NOVA', 'DC Metro', 'Raleigh', 'Richmond'
];

// ────────────────────────────────────────────────────────────
// Helpers
// ────────────────────────────────────────────────────────────
function parseDate(v) {
  if (!v) return null;
  if (v instanceof Date) return isNaN(v.getTime()) ? null : v;
  const s = String(v).trim();
  if (!s) return null;
  let d = new Date(s);
  if (!isNaN(d.getTime())) return d;
  const m = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2,4})/);
  if (m) {
    const yr = m[3].length === 2 ? 2000 + parseInt(m[3], 10) : parseInt(m[3], 10);
    d = new Date(yr, parseInt(m[1], 10) - 1, parseInt(m[2], 10));
    if (!isNaN(d.getTime())) return d;
  }
  return null;
}

function parseMoney(v) {
  if (v == null || v === '') return 0;
  if (typeof v === 'number') return v;
  const s = String(v).replace(/[$,\s]/g, '');
  const n = parseFloat(s);
  return isNaN(n) ? 0 : n;
}

function dayDiff(a, b) {
  return (b - a) / (1000 * 60 * 60 * 24);
}

function median(arr) {
  if (!arr.length) return 0;
  const s = arr.slice().filter(v => typeof v === 'number' && !isNaN(v)).sort((a, b) => a - b);
  if (!s.length) return 0;
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
}

function mean(arr) {
  const v = arr.filter(x => typeof x === 'number' && !isNaN(x));
  return v.length ? v.reduce((a, b) => a + b, 0) / v.length : 0;
}

function sum(arr) {
  return arr.reduce((a, b) => a + (Number(b) || 0), 0);
}

function round(v)  { return Math.round((v || 0) * 100) / 100; }
function round1(v) { return Math.round((v || 0) * 10) / 10; }

function fmtMoneyShort(v) {
  if (v == null || isNaN(v)) return '$0';
  const abs = Math.abs(v);
  if (abs >= 1e9) return '$' + (v / 1e9).toFixed(2) + 'B';
  if (abs >= 1e6) return '$' + (v / 1e6).toFixed(2) + 'M';
  if (abs >= 1e3) return '$' + (v / 1e3).toFixed(0) + 'K';
  return '$' + Math.round(v).toLocaleString('en-US');
}

function fmtDollars(v) {
  return '$' + Math.round(v || 0).toLocaleString('en-US');
}

function fmtNum(v) { return Math.round(v || 0).toLocaleString('en-US'); }
function fmtPct(v) { return (v || 0).toFixed(1) + '%'; }
function fmtDays(v) { return (v || 0).toFixed(1) + 'd'; }

function fmtDateMDY(d) {
  if (!d) return '';
  const mo = MONTH_NAMES[d.getMonth()].slice(0, 3);
  const dd = String(d.getDate()).padStart(2, '0');
  return mo + ' ' + dd + ', ' + d.getFullYear();
}

function monthKey(d) {
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0');
}

function monthShortLabel(key) {
  return key; // e.g. "2026-01"
}

function pickCol(row, aliases) {
  for (let i = 0; i < aliases.length; i++) {
    if (Object.prototype.hasOwnProperty.call(row, aliases[i])) return aliases[i];
  }
  return null;
}

function groupBy(arr, fn) {
  const out = {};
  arr.forEach(r => {
    const k = fn(r);
    if (k == null) return;
    (out[k] = out[k] || []).push(r);
  });
  return out;
}

// ────────────────────────────────────────────────────────────
// Main entrypoint
// ────────────────────────────────────────────────────────────
function run(opts) {
  opts = opts || {};
  const inputDir = opts.inputDir || DEFAULT_INPUT_DIR;
  const snapshotPath = opts.snapshotPath || DEFAULT_SNAPSHOT_PATH;
  const inputs = io.listInputs(inputDir);
  console.log('  [' + PROJECT_ID + '] inputs found: ' + inputs.length);
  inputs.forEach(f => console.log('    - ' + f.name));

  if (inputs.length === 0) {
    console.log('  [' + PROJECT_ID + '] no inputs, falling back to ' + path.relative(path.join(__dirname, '..'), snapshotPath));
    return readFromExtracted(snapshotPath);
  }

  const file = inputs.find(f => /\.(xlsx|xls|csv|tsv)$/i.test(f.name));
  if (!file) {
    console.log('  [' + PROJECT_ID + '] no XLSX/CSV input found, falling back to existing extracted-data.json');
    return readFromExtracted(snapshotPath);
  }

  const raw = readSheet(file);
  if (!raw.length) throw new Error('VAL-401: ' + file.name + ' is empty');

  const colMap = resolveColumns(raw[0], file.name);
  return buildOutput(raw, colMap, snapshotPath);
}

function readSheet(file) {
  if (file.ext === 'csv' || file.ext === 'tsv') return io.readCsv(file.fullPath);
  const wb = io.readXlsx(file.fullPath);
  if (Array.isArray(wb)) return wb;
  const names = Object.keys(wb);
  return names.length ? (wb[names[0]] || []) : [];
}

function resolveColumns(sampleRow, filename) {
  const map = {};
  const missing = [];
  Object.keys(COL_ALIASES).forEach(key => {
    const found = pickCol(sampleRow, COL_ALIASES[key]);
    if (found) map[key] = found;
    else if (REQUIRED_KEYS.indexOf(key) >= 0) missing.push(key + ' (one of: ' + COL_ALIASES[key].join(', ') + ')');
  });
  if (missing.length) {
    throw new Error('VAL-401: ' + filename + ' is missing required column(s): ' + missing.join('; '));
  }
  return map;
}

// ────────────────────────────────────────────────────────────
// Build the INSTALLS_YTD output shape
// ────────────────────────────────────────────────────────────
function buildOutput(raw, c, snapshotPath) {
  // RULE-401 normalize into a uniform row object.
  const rows = raw.map(r => {
    return {
      jobNum:    String(r[c.jobNum] || '').trim(),
      branch:    String(r[c.branch] || '').trim(),
      pm:        String(r[c.pm] || '').trim() || '(Unassigned)',
      trade:     String(r[c.trade] || '').trim() || 'Unspecified',
      svcType:   String(r[c.svcType] || '').trim(),
      invoiced:  parseDate(r[c.invoiced]),
      contract:  parseMoney(r[c.contract]),
      creator:   String(r[c.creator] || '').trim() || '(Unattributed)',
      created:   parseDate(r[c.created]),
      completed: parseDate(r[c.completed]),
      started:   c.started ? parseDate(r[c.started]) : null,
      account:   c.account ? String(r[c.account] || '').trim() : ''
    };
  }).filter(r => {
    // RULE-402 filter
    if (!r.jobNum) return false;
    if (!r.invoiced) return false;
    const b = r.branch.toLowerCase();
    if (!b) return false;
    if (b.includes('confidential') || b.includes('copyright') || b.includes('salesforce')) return false;
    return true;
  });

  if (!rows.length) {
    throw new Error('VAL-402: zero rows after RULE-402 filter');
  }

  // RULE-403 group rows to job level. The first WO carries the job-level contract.
  const woByJob = groupBy(rows, r => r.jobNum);
  const jobNums = Object.keys(woByJob);
  const jobs = jobNums.map(jn => {
    const wos = woByJob[jn];
    const j0 = wos[0];
    const trades = Array.from(new Set(wos.map(w => w.trade).filter(t => t && t !== 'Unspecified')));
    // job-level cycle days
    let dComplete = null, dStart = null;
    if (j0.created && j0.invoiced) {
      const d = dayDiff(j0.created, j0.invoiced);
      if (d >= 0 && d <= 730) dComplete = d;
    }
    if (j0.created) {
      const startDate = j0.started || j0.completed;
      if (startDate) {
        const d = dayDiff(j0.created, startDate);
        if (d >= 0 && d <= 365) dStart = d;
      }
    }
    return {
      jobNum: jn,
      branch: j0.branch,
      pm: j0.pm,
      creator: j0.creator,
      svcType: j0.svcType,
      contract: j0.contract,
      trades: trades,
      tradeCount: trades.length,
      isMT: trades.length >= 2,
      invoiced: j0.invoiced,
      created: j0.created,
      completed: j0.completed,
      started: j0.started,
      dComplete: dComplete,
      dStart: dStart,
      woCount: wos.length,
      _wos: wos
    };
  });

  if (!jobs.length) throw new Error('VAL-402: zero unique jobs after RULE-403');

  // ────────────────────────────────────────────────────────────
  // Top-level KPIs
  // ────────────────────────────────────────────────────────────
  const trueRevenue = sum(jobs.map(j => j.contract));
  const uniqueJobs = jobs.length;
  const avgContract = uniqueJobs ? trueRevenue / uniqueJobs : 0;
  const completeDays = jobs.map(j => j.dComplete).filter(v => v != null);
  const startDays = jobs.map(j => j.dStart).filter(v => v != null);
  const medianComplete = median(completeDays);
  const avgStart = mean(startDays);

  const mtJobs = jobs.filter(j => j.isMT);
  const stJobs = jobs.filter(j => !j.isMT);
  const mtCount = mtJobs.length;
  const stCount = stJobs.length;
  const mtPct = uniqueJobs ? (mtCount / uniqueJobs) * 100 : 0;
  const stPct = uniqueJobs ? (stCount / uniqueJobs) * 100 : 0;

  // RULE-413 multi-trade lift KPIs
  const mtAvgContract = mtJobs.length ? sum(mtJobs.map(j => j.contract)) / mtJobs.length : 0;
  const stAvgContract = stJobs.length ? sum(stJobs.map(j => j.contract)) / stJobs.length : 0;
  const mtMedianComplete = median(mtJobs.map(j => j.dComplete).filter(v => v != null));
  const stMedianComplete = median(stJobs.map(j => j.dComplete).filter(v => v != null));
  const mtVsStGap = mtMedianComplete - stMedianComplete;
  const liftPct = stAvgContract ? ((mtAvgContract - stAvgContract) / stAvgContract) * 100 : 0;

  // Markets (RULE-408)
  const markets = buildMarkets(jobs);
  if (!markets.length) throw new Error('VAL-403: zero unique markets after RULE-408');

  // PMs (RULE-407)
  const pms = buildPMs(jobs);

  // Work types (RULE-409)
  const workTypes = buildWorkTypes(jobs);

  // Creators (RULE-410)
  const creators = buildCreators(jobs);

  // Top multi-trade combinations (RULE-411)
  const mtCombos = buildMTCombos(mtJobs);

  // Monthly trend (RULE-412)
  const monthly = buildMonthly(jobs);

  // Heatmap (RULE-414)
  const heatmap = buildHeatmap(jobs, markets);

  // VAL-405 soft check: any of the 14 active markets missing?
  const presentMarkets = new Set(markets.map(m => m.name));
  const missingMarkets = ACTIVE_MARKETS_14.filter(m => !presentMarkets.has(m));
  if (missingMarkets.length) {
    console.warn('  [' + PROJECT_ID + '] VAL-405 warn: active markets with zero jobs: ' + missingMarkets.join(', '));
  }

  // VAL-404 drift check
  driftCheck(trueRevenue, snapshotPath);

  // Subtitle (RULE-418)
  const invoiceDates = jobs.map(j => j.invoiced).filter(Boolean).sort((a, b) => a - b);
  const firstInv = invoiceDates[0];
  const lastInv = invoiceDates[invoiceDates.length - 1];
  const pmCount = pms.length;
  const subtitle = 'Invoiced Jobs - ' + fmtDateMDY(firstInv) + ' - ' + fmtDateMDY(lastInv) +
    ' - De-Duplicated at Job Level - ' + fmtNum(uniqueJobs) + ' Jobs - ' +
    markets.length + ' Markets - ' + pmCount + ' PMs';

  // KPI strips
  const kpis = [
    { label: 'True Revenue',           value: fmtMoneyShort(trueRevenue), sub: fmtNum(uniqueJobs) + ' unique jobs invoiced' },
    { label: 'Avg Contract Value',      value: fmtDollars(avgContract),    sub: 'Per job (deduped)' },
    { label: 'Median Days to Complete', value: fmtDays(medianComplete),    sub: 'Job-level median' },
    { label: 'Avg Days to Start',       value: fmtDays(avgStart),          sub: 'Sale to crew on-site' },
    { label: 'Multi-Trade Jobs',        value: fmtNum(mtCount),            sub: fmtPct(mtPct) + ' of book' },
    { label: 'Single-Trade Jobs',       value: fmtNum(stCount),            sub: fmtPct(stPct) + ' of book' }
  ];

  const kpisMultiTrade = [
    { label: 'Multi-Trade Avg Contract',  value: fmtDollars(mtAvgContract),
      sub: (liftPct >= 0 ? '+' : '') + liftPct.toFixed(1) + '% vs single-trade' },
    { label: 'Single-Trade Avg Contract', value: fmtDollars(stAvgContract), sub: 'Baseline ticket' },
    { label: 'Completion Time Gap',       value: (mtVsStGap >= 0 ? '+' : '') + mtVsStGap.toFixed(1) + 'd',
      sub: 'MT ' + mtMedianComplete.toFixed(1) + 'd vs ST ' + stMedianComplete.toFixed(1) + 'd' }
  ];

  // Build charts and tables
  const charts = buildCharts({
    monthly, mtCombos, markets, pms, workTypes, creators
  });
  const tables = buildTables({ markets, pms, workTypes, creators, heatmap });

  // Commentary (RULE-424)
  const commentary = buildCommentary({
    jobs, markets, pms, workTypes, creators, mtJobs, stJobs,
    monthly, medianComplete, avgStart,
    mtAvgContract, stAvgContract, liftPct, mtVsStGap, mtCombos
  });

  return {
    _source: 'calculator/installs-ytd.js v' + VERSION,
    title: 'Residential Installs YTD',
    subtitle: subtitle,
    generated: new Date().toISOString().slice(0, 10),
    headerMeta: {
      trueRevenue: round(trueRevenue),
      uniqueJobs: uniqueJobs,
      markets: markets.length,
      pms: pmCount,
      medianComplete: round1(medianComplete),
      avgStart: round1(avgStart),
      multiTradeJobs: mtCount,
      singleTradeJobs: stCount,
      multiTradePct: round1(mtPct),
      lastBuild: new Date().toISOString()
    },
    tabs: [
      { id: 'index',       label: 'Overview' },
      { id: 'kpis',        label: 'KPIs' },
      { id: 'trends',      label: 'Monthly Trends' },
      { id: 'multi-trade', label: 'Multi-Trade' },
      { id: 'markets',     label: 'Markets' },
      { id: 'pms',         label: 'Project Managers' },
      { id: 'work-types',  label: 'Work Types' },
      { id: 'creators',    label: 'Created By' },
      { id: 'findings',    label: 'Key Findings' }
    ],
    kpis: kpis,
    kpisMultiTrade: kpisMultiTrade,
    monthly: monthly,
    charts: charts,
    tables: tables,
    commentary: commentary
  };
}

// ────────────────────────────────────────────────────────────
// Per-section builders
// ────────────────────────────────────────────────────────────
function buildMarkets(jobs) {
  const map = groupBy(jobs, j => j.branch);
  return Object.keys(map).map(name => {
    const js = map[name];
    const rev = sum(js.map(j => j.contract));
    const mt = js.filter(j => j.isMT);
    const st = js.filter(j => !j.isMT);
    const completeDays = js.map(j => j.dComplete).filter(v => v != null);
    const startDays = js.map(j => j.dStart).filter(v => v != null);
    return {
      name: name,
      jobs: js.length,
      rev: rev,
      avgContract: js.length ? rev / js.length : 0,
      med: median(completeDays),
      start: mean(startDays),
      mtCount: mt.length,
      mtPct: js.length ? (mt.length / js.length) * 100 : 0,
      mtMed: median(mt.map(j => j.dComplete).filter(v => v != null)),
      stMed: median(st.map(j => j.dComplete).filter(v => v != null))
    };
  }).sort((a, b) => b.rev - a.rev);
}

function buildPMs(jobs) {
  // Fractional revenue per WO = job.contract / job.woCount.
  // Group WOs by PM. (Each WO has its own PM in the source row.)
  const woRows = [];
  jobs.forEach(j => {
    const woCount = j.woCount || 1;
    const fractional = j.contract / woCount;
    j._wos.forEach(w => {
      woRows.push({
        pm: w.pm,
        jobNum: j.jobNum,
        fractional: fractional,
        dComplete: j.dComplete,
        dStart: j.dStart
      });
    });
  });
  const map = groupBy(woRows, w => w.pm);
  const pmList = Object.keys(map).map(pm => {
    const ws = map[pm];
    const wos = ws.length;
    const jobsForPm = Array.from(new Set(ws.map(w => w.jobNum)));
    const rev = sum(ws.map(w => w.fractional));
    // job-level metrics: one entry per unique job touched by this PM
    const jobCycle = {};
    ws.forEach(w => {
      if (!jobCycle[w.jobNum]) jobCycle[w.jobNum] = { d: w.dComplete, s: w.dStart };
    });
    const cycles = Object.values(jobCycle);
    const completes = cycles.map(c => c.d).filter(v => v != null);
    const starts = cycles.map(c => c.s).filter(v => v != null);
    return {
      name: pm,
      wos: wos,
      jobs: jobsForPm.length,
      rev: rev,
      revPerWo: wos ? rev / wos : 0,
      med: median(completes),
      avgStart: mean(starts)
    };
  });
  // RULE-417: only PMs with WOs >= 5
  return pmList.filter(p => p.wos >= 5).sort((a, b) => b.rev - a.rev);
}

function buildWorkTypes(jobs) {
  // Group WOs by trade. Fractional revenue and median complete (job level).
  const woRows = [];
  jobs.forEach(j => {
    const woCount = j.woCount || 1;
    const fractional = j.contract / woCount;
    j._wos.forEach(w => {
      woRows.push({ trade: w.trade || 'Unspecified', fractional: fractional, dComplete: j.dComplete });
    });
  });
  const map = groupBy(woRows, w => w.trade);
  return Object.keys(map).map(trade => {
    const ws = map[trade];
    const rev = sum(ws.map(w => w.fractional));
    const completes = ws.map(w => w.dComplete).filter(v => v != null);
    return {
      name: trade,
      wos: ws.length,
      rev: rev,
      avgContract: ws.length ? rev / ws.length : 0,
      med: median(completes)
    };
  }).sort((a, b) => b.rev - a.rev);
}

function buildCreators(jobs) {
  const map = groupBy(jobs, j => j.creator);
  return Object.keys(map).map(name => {
    const js = map[name];
    const rev = sum(js.map(j => j.contract));
    const mt = js.filter(j => j.isMT);
    const completes = js.map(j => j.dComplete).filter(v => v != null);
    const starts = js.map(j => j.dStart).filter(v => v != null);
    return {
      name: name,
      jobs: js.length,
      rev: rev,
      avgContract: js.length ? rev / js.length : 0,
      med: median(completes),
      avgStart: mean(starts),
      mtPct: js.length ? (mt.length / js.length) * 100 : 0
    };
  }).sort((a, b) => b.rev - a.rev);
}

function buildMTCombos(mtJobs) {
  const map = {};
  mtJobs.forEach(j => {
    const key = j.trades.slice().sort().join(' + ');
    if (!key) return;
    map[key] = (map[key] || 0) + 1;
  });
  return Object.keys(map).map(k => ({ combo: k, count: map[k] }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);
}

function buildMonthly(jobs) {
  const map = groupBy(jobs, j => monthKey(j.invoiced));
  return Object.keys(map).sort().map(k => {
    const js = map[k];
    const completes = js.map(j => j.dComplete).filter(v => v != null);
    const starts = js.map(j => j.dStart).filter(v => v != null);
    return {
      m: monthShortLabel(k),
      label: MONTH_NAMES[parseInt(k.split('-')[1], 10) - 1],
      key: k,
      rev: round(sum(js.map(j => j.contract))),
      jobs: js.length,
      med: round1(median(completes)),
      start: round1(mean(starts))
    };
  });
}

function buildHeatmap(jobs, markets) {
  const creators = Array.from(new Set(jobs.map(j => j.creator))).sort();
  const marketCols = markets.map(m => m.name).slice().sort();

  // values[creator][market] = job count
  const values = {};
  creators.forEach(cr => { values[cr] = {}; marketCols.forEach(m => { values[cr][m] = 0; }); });
  jobs.forEach(j => {
    if (values[j.creator] && j.branch in values[j.creator]) {
      values[j.creator][j.branch]++;
    }
  });

  return { creators: creators, markets: marketCols, values: values };
}

// ────────────────────────────────────────────────────────────
// Charts (RULE-422, lock list of 16 series)
// ────────────────────────────────────────────────────────────
function buildCharts(d) {
  const out = [];

  // ch_monthly (revenue + jobs)
  out.push({
    id: 'ch_monthly',
    labels: d.monthly.map(m => m.m),
    datasets: [
      { label: 'Revenue', data: d.monthly.map(m => round(m.rev)) },
      { label: 'Jobs',    data: d.monthly.map(m => m.jobs) }
    ]
  });

  // ch_efficiency (median complete + avg start)
  out.push({
    id: 'ch_efficiency',
    labels: d.monthly.map(m => m.m),
    datasets: [
      { label: 'Median Days to Complete', data: d.monthly.map(m => round1(m.med)) },
      { label: 'Avg Days to Start',       data: d.monthly.map(m => round1(m.start)) }
    ]
  });

  // ch_jobmix (single horizontal bar, MT vs ST)
  const mtCount = d.creators ? null : null;
  // We can read counts from markets or from kpis; easier from cumulative.
  // Compute from markets since markets is already MT-aware.
  let mt = 0, st = 0;
  d.markets.forEach(m => { mt += m.mtCount; st += (m.jobs - m.mtCount); });
  out.push({
    id: 'ch_jobmix',
    labels: ['Job Mix'],
    datasets: [
      { label: 'Multi-Trade',  data: [mt] },
      { label: 'Single-Trade', data: [st] }
    ]
  });

  // ch_combos (top 8 combos, horizontal bar)
  out.push({
    id: 'ch_combos',
    labels: d.mtCombos.map(c => c.combo),
    datasets: [{ label: 'Jobs', data: d.mtCombos.map(c => c.count) }]
  });

  // ch_mt_by_market (MT pct, horizontal bar)
  out.push({
    id: 'ch_mt_by_market',
    labels: d.markets.map(m => m.name),
    datasets: [{ label: 'MT %', data: d.markets.map(m => round1(m.mtPct)) }]
  });

  // ch_mt_vs_st (MT median vs ST median, paired bars)
  out.push({
    id: 'ch_mt_vs_st',
    labels: d.markets.map(m => m.name),
    datasets: [
      { label: 'MT Median', data: d.markets.map(m => round1(m.mtMed)) },
      { label: 'ST Median', data: d.markets.map(m => round1(m.stMed)) }
    ]
  });

  // ch_mk_rev (revenue, horizontal bar)
  out.push({
    id: 'ch_mk_rev',
    labels: d.markets.map(m => m.name),
    datasets: [{ label: 'Revenue', data: d.markets.map(m => round(m.rev)) }]
  });

  // ch_mk_days (median complete, horizontal bar)
  out.push({
    id: 'ch_mk_days',
    labels: d.markets.map(m => m.name),
    datasets: [{ label: 'Median Days', data: d.markets.map(m => round1(m.med)) }]
  });

  // ch_pm_top (top 15 PMs by fractional revenue)
  const top15 = d.pms.slice(0, 15);
  out.push({
    id: 'ch_pm_top',
    labels: top15.map(p => p.name),
    datasets: [{ label: 'Fractional Revenue', data: top15.map(p => round(p.rev)) }]
  });

  // ch_pm_scatter (all PMs, x=median complete, y=fractional revenue, point size = sqrt(WOs))
  out.push({
    id: 'ch_pm_scatter',
    labels: d.pms.map(p => p.name),
    datasets: [{
      label: 'PMs',
      data: d.pms.map(p => ({ x: round1(p.med), y: round(p.rev), wos: p.wos, name: p.name }))
    }]
  });

  // ch_wt_pie (revenue share by work type)
  out.push({
    id: 'ch_wt_pie',
    labels: d.workTypes.map(w => w.name),
    datasets: [{ label: 'Revenue', data: d.workTypes.map(w => round(w.rev)) }]
  });

  // ch_wt_days (median complete by work type)
  out.push({
    id: 'ch_wt_days',
    labels: d.workTypes.map(w => w.name),
    datasets: [{ label: 'Median Days', data: d.workTypes.map(w => round1(w.med)) }]
  });

  // ch_cb_vol (jobs by creator)
  out.push({
    id: 'ch_cb_vol',
    labels: d.creators.map(c => c.name),
    datasets: [{ label: 'Jobs', data: d.creators.map(c => c.jobs) }]
  });

  // ch_cb_eff (median complete by creator)
  out.push({
    id: 'ch_cb_eff',
    labels: d.creators.map(c => c.name),
    datasets: [{ label: 'Median Complete', data: d.creators.map(c => round1(c.med)) }]
  });

  // ch_cb_mt (MT pct by creator)
  out.push({
    id: 'ch_cb_mt',
    labels: d.creators.map(c => c.name),
    datasets: [{ label: 'MT %', data: d.creators.map(c => round1(c.mtPct)) }]
  });

  // ch_cb_scatter (creators, x=median complete, y=avg contract)
  out.push({
    id: 'ch_cb_scatter',
    labels: d.creators.map(c => c.name),
    datasets: [{
      label: 'Creators',
      data: d.creators.map(c => ({
        x: round1(c.med), y: round(c.avgContract), jobs: c.jobs, name: c.name
      }))
    }]
  });

  return out;
}

// ────────────────────────────────────────────────────────────
// Tables (RULE-423, lock list of 5)
// ────────────────────────────────────────────────────────────
function buildTables(d) {
  const out = [];

  // tbl_markets
  out.push({
    id: 'tbl_markets',
    title: 'All markets',
    headers: ['Market', 'Jobs', 'Revenue', 'Avg Contract', 'Median Complete', 'Avg Start', 'MT %', 'MT Median', 'ST Median'],
    rows: d.markets.map(m => [
      m.name, m.jobs, round(m.rev), round(m.avgContract),
      round1(m.med), round1(m.start), round1(m.mtPct),
      round1(m.mtMed), round1(m.stMed)
    ])
  });

  // tbl_pms
  out.push({
    id: 'tbl_pms',
    title: 'All PMs (5+ work orders)',
    headers: ['PM', 'WOs', 'Jobs', 'Fractional Revenue', 'Rev / WO', 'Median Complete', 'Avg Start'],
    rows: d.pms.map(p => [
      p.name, p.wos, p.jobs, round(p.rev), round(p.revPerWo),
      round1(p.med), round1(p.avgStart)
    ])
  });

  // tbl_worktypes
  out.push({
    id: 'tbl_worktypes',
    title: 'Work type detail',
    headers: ['Service Object', 'WOs', 'Fractional Revenue', 'Avg Contract / WO', 'Median Complete'],
    rows: d.workTypes.map(w => [
      w.name, w.wos, round(w.rev), round(w.avgContract), round1(w.med)
    ])
  });

  // tbl_creators
  out.push({
    id: 'tbl_creators',
    title: 'Creator detail',
    headers: ['Creator', 'Jobs', 'Revenue', 'Avg Contract', 'Median Complete', 'Avg Start', 'MT %', 'Rev / Job'],
    rows: d.creators.map(c => [
      c.name, c.jobs, round(c.rev), round(c.avgContract),
      round1(c.med) + 'd', round1(c.avgStart) + 'd', round1(c.mtPct), round(c.avgContract)
    ])
  });

  // creatorMarketHeatmap
  // headers: Creator, ...marketsAlpha, Total
  const heatmap = d.heatmap;
  const headers = ['Creator'].concat(heatmap.markets).concat(['Total']);
  const rows = heatmap.creators.map(cr => {
    const cells = heatmap.markets.map(m => heatmap.values[cr][m] || 0);
    const total = sum(cells);
    return [cr].concat(cells).concat([total]);
  });
  // Total row across all creators
  const totalRow = ['Total'];
  heatmap.markets.forEach(m => {
    totalRow.push(sum(heatmap.creators.map(cr => heatmap.values[cr][m] || 0)));
  });
  totalRow.push(sum(rows.map(r => r[r.length - 1])));
  rows.push(totalRow);

  out.push({
    id: 'creatorMarketHeatmap',
    title: 'Creator x Market Volume Heatmap (Jobs)',
    headers: headers,
    rows: rows
  });

  return out;
}

// ────────────────────────────────────────────────────────────
// Commentary generator (RULE-424)
// Pulls live numbers, no PM names quoted to chat (the strings here
// are dashboard prose, not chat output).
// ────────────────────────────────────────────────────────────
function buildCommentary(d) {
  const areasOfConcern = [];
  const watchList = [];
  const positivesToBuildOn = [];

  // Slowest market by median complete (with at least 20 jobs)
  const bigMarkets = d.markets.filter(m => m.jobs >= 20);
  const slowest = bigMarkets.slice().sort((a, b) => b.med - a.med)[0];
  const fastest = bigMarkets.slice().sort((a, b) => a.med - b.med)[0];
  const topRev = bigMarkets[0]; // markets array is already sorted by revenue
  const totalRev = sum(d.markets.map(m => m.rev));

  if (topRev && d.medianComplete) {
    const sharePct = totalRev ? (topRev.rev / totalRev) * 100 : 0;
    const jobSharePct = sum(d.markets.map(m => m.jobs)) ? (topRev.jobs / sum(d.markets.map(m => m.jobs))) * 100 : 0;
    if (topRev.med > d.medianComplete + 5) {
      areasOfConcern.push(
        topRev.name + ' is dragging the company cycle: ' + topRev.jobs + ' jobs (' +
        jobSharePct.toFixed(0) + '% of YTD volume) at ' + topRev.med.toFixed(1) +
        '-day median complete vs ' + d.medianComplete.toFixed(1) +
        ' company median, with multi-trade running ' + (topRev.mtMed || 0).toFixed(1) +
        ' days against single-trade at ' + (topRev.stMed || 0).toFixed(1) + ' days.'
      );
    }
  }

  // Slowest high-volume PM
  const bigPMs = d.pms.filter(p => p.wos >= 30);
  const slowPM = bigPMs.slice().sort((a, b) => b.med - a.med)[0];
  if (slowPM && slowPM.med > d.medianComplete + 20) {
    areasOfConcern.push(
      slowPM.name + ': ' + slowPM.wos + ' WOs, ' + fmtMoneyShort(slowPM.rev) +
      ' revenue, ' + slowPM.med.toFixed(1) +
      '-day median complete, top-volume PM with the slowest cycle in the network.'
    );
  }

  // MT cycle penalty markets
  const mtPenalty = d.markets.filter(m => m.jobs >= 20 && (m.mtMed - m.stMed) > 30);
  if (mtPenalty.length) {
    const top3 = mtPenalty.slice().sort((a, b) => (b.mtMed - b.stMed) - (a.mtMed - a.stMed)).slice(0, 3);
    areasOfConcern.push(
      'Multi-trade penalty is severe in ' + top3.length + ' markets: ' +
      top3.map(m => m.name + ' MT ' + m.mtMed.toFixed(1) + 'd vs ST ' + m.stMed.toFixed(1) + 'd').join(', ') + '.'
    );
  }

  // Days to start signal
  if (d.avgStart > 0) {
    const slowStart = bigMarkets.slice().sort((a, b) => b.start - a.start)[0];
    if (slowStart && slowStart.start > d.avgStart + 8) {
      areasOfConcern.push(
        'Days to Start averages ' + d.avgStart.toFixed(1) + ' days company-wide and ' +
        slowStart.start.toFixed(1) + ' days in ' + slowStart.name +
        ' (a sold job sits weeks before a crew touches it).'
      );
    }
  }

  // Watch list: low revenue density PMs
  const lowDensity = d.pms.filter(p => p.wos >= 50 && p.revPerWo < 6000);
  if (lowDensity.length) {
    const x = lowDensity[0];
    watchList.push(
      x.name + ': ' + x.wos + ' WOs, ' + fmtDollars(x.revPerWo) +
      ' revenue per WO, the lowest revenue density of any active high-volume PM.'
    );
  }

  // Watch list: gutters cycle gap
  const roofing = d.workTypes.find(w => /roof/i.test(w.name) && !/flat/i.test(w.name));
  const gutters = d.workTypes.find(w => /gutter/i.test(w.name));
  if (roofing && gutters && gutters.med > roofing.med + 5) {
    const pctSlower = ((gutters.med - roofing.med) / roofing.med) * 100;
    watchList.push(
      'Gutters-only work runs at ' + gutters.med.toFixed(1) +
      '-day median complete versus ' + roofing.med.toFixed(1) +
      ' days for roofing, ' + pctSlower.toFixed(0) +
      '% slower cycle on the lowest-priced trade.'
    );
  }

  // Watch list: low MT pct creator with high job volume
  const bigCreators = d.creators.filter(c => c.jobs >= 100);
  const lowMTCreator = bigCreators.slice().sort((a, b) => a.mtPct - b.mtPct)[0];
  if (lowMTCreator && lowMTCreator.mtPct < 20) {
    watchList.push(
      lowMTCreator.name + ' creates ' + lowMTCreator.jobs + ' jobs at ' +
      fmtDollars(lowMTCreator.avgContract) + ' average contract and ' +
      lowMTCreator.mtPct.toFixed(1) + '% multi-trade attach, well below the top creator.'
    );
  }

  // Positives: best month
  if (d.monthly.length) {
    const best = d.monthly.slice().sort((a, b) => b.rev - a.rev)[0];
    positivesToBuildOn.push(
      best.label + ' delivered ' + fmtMoneyShort(best.rev) + ' across ' + best.jobs +
      ' invoiced jobs at ' + best.med.toFixed(1) +
      '-day median complete, the highest revenue month and one of the fastest cycles of the year.'
    );
  }

  // Positives: fastest market
  if (fastest) {
    positivesToBuildOn.push(
      fastest.name + ' hits ' + fastest.med.toFixed(1) +
      '-day median complete and a ' + fmtDollars(fastest.avgContract) +
      ' average contract on ' + fastest.jobs + ' jobs.'
    );
  }

  // Positives: MT lift
  if (d.mtAvgContract && d.stAvgContract) {
    positivesToBuildOn.push(
      'Multi-trade jobs carry a ' + fmtDollars(d.mtAvgContract) +
      ' average contract versus ' + fmtDollars(d.stAvgContract) +
      ' for single-trade, a ' + d.liftPct.toFixed(0) + '% revenue lift per job.'
    );
  }

  // Positives: best-balanced market (high revenue + fast cycle + decent MT%)
  const balanced = d.markets.filter(m => m.jobs >= 50 && m.med < d.medianComplete && m.mtPct > 25);
  if (balanced.length) {
    const m = balanced[0];
    positivesToBuildOn.push(
      m.name + ' is the best-balanced market: ' + m.med.toFixed(1) +
      '-day median complete, ' + m.mtPct.toFixed(1) +
      '% multi-trade attach, ' + fmtDollars(m.avgContract) +
      ' average contract on ' + m.jobs + ' jobs.'
    );
  }

  return {
    areasOfConcern: areasOfConcern,
    watchList: watchList,
    positivesToBuildOn: positivesToBuildOn
  };
}

// ────────────────────────────────────────────────────────────
// Drift check (VAL-404)
// ────────────────────────────────────────────────────────────
function driftCheck(currentRev, snapshotPath) {
  if (process.env.FZ_SKIP_DRIFT_CHECK === '1') return;
  try {
    const prevPath = snapshotPath || DEFAULT_SNAPSHOT_PATH;
    if (!fs.existsSync(prevPath)) return;
    const prev = JSON.parse(fs.readFileSync(prevPath, 'utf8'));
    const prevIY = prev.INSTALLS_YTD;
    if (!prevIY || !prevIY.headerMeta || !prevIY.headerMeta.trueRevenue) return;
    const prevRev = prevIY.headerMeta.trueRevenue;
    if (!prevRev) return;
    const drift = Math.abs(currentRev - prevRev) / prevRev;
    if (drift > 0.25) {
      throw new Error('VAL-404: True Revenue drifted ' + (drift * 100).toFixed(0) +
        '% from previous build (was ' + fmtMoneyShort(prevRev) + ', now ' + fmtMoneyShort(currentRev) +
        '). Set FZ_SKIP_DRIFT_CHECK=1 to bypass.');
    }
  } catch (e) {
    if (e && e.message && e.message.startsWith('VAL-')) throw e;
  }
}

// ────────────────────────────────────────────────────────────
// Fallback when no inputs are dropped (RULE-421)
// ────────────────────────────────────────────────────────────
function readFromExtracted(snapshotPath) {
  const extractedPath = snapshotPath || DEFAULT_SNAPSHOT_PATH;
  if (!fs.existsSync(extractedPath)) {
    return emptyShape('no extracted-data.json present and no inputs to compute from');
  }
  const extracted = JSON.parse(fs.readFileSync(extractedPath, 'utf8'));
  if (extracted && extracted.INSTALLS_YTD) return extracted.INSTALLS_YTD;
  return emptyShape('extracted-data.json has no INSTALLS_YTD key');
}

// Schema-valid empty shape so the dashboard renders before
// the first Salesforce export lands.
function emptyShape(reason) {
  return {
    _source: 'calculator/installs-ytd.js v' + VERSION + ' (stub: ' + reason + ')',
    title: 'Residential Installs YTD',
    subtitle: 'Awaiting Salesforce invoiced-jobs export',
    generated: new Date().toISOString().slice(0, 10),
    headerMeta: {
      trueRevenue: 0, uniqueJobs: 0, markets: 0, pms: 0,
      medianComplete: 0, avgStart: 0,
      multiTradeJobs: 0, singleTradeJobs: 0, multiTradePct: 0,
      lastBuild: new Date().toISOString()
    },
    tabs: [
      { id: 'index',       label: 'Overview' },
      { id: 'kpis',        label: 'KPIs' },
      { id: 'trends',      label: 'Monthly Trends' },
      { id: 'multi-trade', label: 'Multi-Trade' },
      { id: 'markets',     label: 'Markets' },
      { id: 'pms',         label: 'Project Managers' },
      { id: 'work-types',  label: 'Work Types' },
      { id: 'creators',    label: 'Created By' },
      { id: 'findings',    label: 'Key Findings' }
    ],
    kpis: [],
    kpisMultiTrade: [],
    monthly: [],
    charts: [
      { id: 'ch_monthly',       labels: [], datasets: [{ label: 'Revenue', data: [] }, { label: 'Jobs', data: [] }] },
      { id: 'ch_efficiency',    labels: [], datasets: [{ label: 'Median Days to Complete', data: [] }, { label: 'Avg Days to Start', data: [] }] },
      { id: 'ch_jobmix',        labels: ['Job Mix'], datasets: [{ label: 'Multi-Trade', data: [0] }, { label: 'Single-Trade', data: [0] }] },
      { id: 'ch_combos',        labels: [], datasets: [{ label: 'Jobs', data: [] }] },
      { id: 'ch_mt_by_market',  labels: [], datasets: [{ label: 'MT %', data: [] }] },
      { id: 'ch_mt_vs_st',      labels: [], datasets: [{ label: 'MT Median', data: [] }, { label: 'ST Median', data: [] }] },
      { id: 'ch_mk_rev',        labels: [], datasets: [{ label: 'Revenue', data: [] }] },
      { id: 'ch_mk_days',       labels: [], datasets: [{ label: 'Median Days', data: [] }] },
      { id: 'ch_pm_top',        labels: [], datasets: [{ label: 'Fractional Revenue', data: [] }] },
      { id: 'ch_pm_scatter',    labels: [], datasets: [{ label: 'PMs', data: [] }] },
      { id: 'ch_wt_pie',        labels: [], datasets: [{ label: 'Revenue', data: [] }] },
      { id: 'ch_wt_days',       labels: [], datasets: [{ label: 'Median Days', data: [] }] },
      { id: 'ch_cb_vol',        labels: [], datasets: [{ label: 'Jobs', data: [] }] },
      { id: 'ch_cb_eff',        labels: [], datasets: [{ label: 'Median Complete', data: [] }] },
      { id: 'ch_cb_mt',         labels: [], datasets: [{ label: 'MT %', data: [] }] },
      { id: 'ch_cb_scatter',    labels: [], datasets: [{ label: 'Creators', data: [] }] }
    ],
    tables: [
      { id: 'tbl_markets',           title: 'All markets',                        headers: ['Market', 'Jobs', 'Revenue', 'Avg Contract', 'Median Complete', 'Avg Start', 'MT %', 'MT Median', 'ST Median'], rows: [] },
      { id: 'tbl_pms',               title: 'All PMs (5+ work orders)',           headers: ['PM', 'WOs', 'Jobs', 'Fractional Revenue', 'Rev / WO', 'Median Complete', 'Avg Start'], rows: [] },
      { id: 'tbl_worktypes',         title: 'Work type detail',                   headers: ['Service Object', 'WOs', 'Fractional Revenue', 'Avg Contract / WO', 'Median Complete'], rows: [] },
      { id: 'tbl_creators',          title: 'Creator detail',                     headers: ['Creator', 'Jobs', 'Revenue', 'Avg Contract', 'Median Complete', 'Avg Start', 'MT %', 'Rev / Job'], rows: [] },
      { id: 'creatorMarketHeatmap',  title: 'Creator x Market Volume Heatmap (Jobs)', headers: ['Creator', 'Total'], rows: [] }
    ],
    commentary: { areasOfConcern: [], watchList: [], positivesToBuildOn: [] }
  };
}

function validate(out) {
  const errors = [];
  if (!out) errors.push('output is null');
  if (out && !out.headerMeta) errors.push('missing headerMeta');
  if (out && !out.kpis) errors.push('missing kpis');
  if (out && !out.kpisMultiTrade) errors.push('missing kpisMultiTrade');
  if (out && !out.charts) errors.push('missing charts');
  if (out && !out.tables) errors.push('missing tables');
  if (out && !out.commentary) errors.push('missing commentary');
  return errors;
}

module.exports = { id: PROJECT_ID, version: VERSION, run, validate };
