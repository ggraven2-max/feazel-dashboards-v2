/* ============================================================
   FEAZEL CALCULATOR - Sales Overview
   Reads inputs/sales-overview/*.xlsx (Turned In YTD + Completed Jobs YTD)
   and produces the SALES_OVERVIEW JSON shape that the dashboard consumes.

   Rules are documented in inputs/sales-overview/RULES.md.
   ============================================================ */
const path = require('path');
const fs = require('fs');
const io = require('./lib/io');
const agg = require('./lib/aggregate');

const PROJECT_ID = 'sales-overview';
const VERSION = '1.0-rules-encoded';
// Defaults point at residential. Pipeline overrides via opts.inputDir + opts.snapshotPath
// when running per-LOB. Direct invocation falls back to residential paths.
const DEFAULT_INPUT_DIR = path.join(__dirname, '..', 'inputs', 'residential', PROJECT_ID);
const DEFAULT_SNAPSHOT_PATH = path.join(__dirname, '..', 'redesign', 'residential', 'shared', 'extracted-data.json');
const FY = 2026;

// RULE-002: Stage to bucket mapping
const STAGE_BUCKETS = {
  'Closed - Sold': 'Sold',
  'Pending PM/Financial Review': 'Production Review',
  'Ops Review': 'Production Review',
  'Contracted': 'Production Review',
  'CMT': 'Production Review',
  'Claim Filed': 'Production Review',
  'Sales Action Required': 'Sales Action',
  'No Show': 'Sales Action',
  'Kicked Back to Salesperson': 'Kicked Back'
};

const REQUIRED_SALES_COLS = [
  'Branch Location to Service', 'Opportunity Name', 'Opportunity Owner',
  'Stage', 'Sold job type', 'Sold Job Service Type',
  'Date Created', 'Contract signed on', 'Amount $'
];

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

// ────────────────────────────────────────────────────────────
// Locked plan constants (RULE-018) - sourced from Revenue
// Forecast V5 model dated 2026-04-19. Update only when the
// budget plan changes, not on a daily refresh.
// ────────────────────────────────────────────────────────────
const PLAN_WEEKLY_TARGETS = {
  avgWeeklyNeed: 2672228,
  byJobType: [
    { type: 'Retail-No Financing', perWeek: 1148847, mix: 43.0 },
    { type: 'Insurance',           perWeek: 1098205, mix: 41.1 },
    { type: 'Retail-Financing',    perWeek: 425175,  mix: 15.9 }
  ],
  byTrade: [
    { trade: 'Roofing', perWeek: 1681438, mix: 62.9 },
    { trade: 'Gutters', perWeek: 792458,  mix: 29.7 },
    { trade: 'Siding',  perWeek: 60871,   mix: 2.3 }
  ],
  byMarket: [
    { market: 'Columbus',      total: 743805, retNoFin: 292428, ins: 352071, retFin: 99306,  deals: 77.6 },
    { market: 'Detroit Metro', total: 482937, retNoFin: 331878, ins: 45067,  retFin: 105992, deals: 30.9 },
    { market: 'Nashville',     total: 274827, retNoFin: 101518, ins: 89300,  retFin: 84008,  deals: 19.8 },
    { market: 'DC Metro',      total: 249809, retNoFin: 143958, ins: 101508, retFin: 4342,   deals: 16.5 },
    { market: 'Dayton',        total: 177987, retNoFin: 50851,  ins: 102425, retFin: 24710,  deals: 10.9 },
    { market: 'Cincinnati',    total: 158777, retNoFin: 49568,  ins: 89449,  retFin: 19760,  deals: 10.1 },
    { market: 'Richmond',      total: 137413, retNoFin: 22286,  ins: 108672, retFin: 6455,   deals: 7.1  },
    { market: 'Cleveland',     total: 121677, retNoFin: 60088,  ins: 35216,  retFin: 26373,  deals: 16.2 },
    { market: 'Raleigh',       total: 118023, retNoFin: 13029,  ins: 98208,  retFin: 6786,   deals: 7.7  },
    { market: 'Knoxville',     total: 115116, retNoFin: 59627,  ins: 48658,  retFin: 6831,   deals: 6.5  },
    { market: 'Greenville',    total: 79373,  retNoFin: 21025,  ins: 17738,  retFin: 40611,  deals: 3.3  }
  ],
  weekSchedule: [
    { wk: '04/19/2026', mo: 'Apr', target: 1959782 },
    { wk: '04/26/2026', mo: 'Apr', target: 2619633 },
    { wk: '05/03/2026', mo: 'May', target: 4269260 },
    { wk: '05/10/2026', mo: 'May', target: 4269260 },
    { wk: '05/17/2026', mo: 'May', target: 4269260 },
    { wk: '05/24/2026', mo: 'May', target: 4269260 },
    { wk: '05/31/2026', mo: 'May', target: 3489371 },
    { wk: '06/07/2026', mo: 'Jun', target: 3359390 },
    { wk: '06/14/2026', mo: 'Jun', target: 3359390 },
    { wk: '06/21/2026', mo: 'Jun', target: 3359390 },
    { wk: '06/28/2026', mo: 'Jun', target: 2757071 },
    { wk: '07/05/2026', mo: 'Jul', target: 2305332 },
    { wk: '07/12/2026', mo: 'Jul', target: 2305332 },
    { wk: '07/19/2026', mo: 'Jul', target: 2305332 },
    { wk: '07/26/2026', mo: 'Jul', target: 2465088 },
    { wk: '08/02/2026', mo: 'Aug', target: 3423621 },
    { wk: '08/09/2026', mo: 'Aug', target: 3423621 },
    { wk: '08/16/2026', mo: 'Aug', target: 3423621 },
    { wk: '08/23/2026', mo: 'Aug', target: 3423621 },
    { wk: '08/30/2026', mo: 'Aug', target: 3007788 },
    { wk: '09/06/2026', mo: 'Sep', target: 2841454 },
    { wk: '09/13/2026', mo: 'Sep', target: 2841454 },
    { wk: '09/20/2026', mo: 'Sep', target: 2841454 },
    { wk: '09/27/2026', mo: 'Sep', target: 2918633 },
    { wk: '10/04/2026', mo: 'Oct', target: 3021539 },
    { wk: '10/11/2026', mo: 'Oct', target: 3021539 },
    { wk: '10/18/2026', mo: 'Oct', target: 3021539 },
    { wk: '10/25/2026', mo: 'Oct', target: 3021539 },
    { wk: '11/01/2026', mo: 'Nov', target: 1925810 },
    { wk: '11/08/2026', mo: 'Nov', target: 1925810 },
    { wk: '11/15/2026', mo: 'Nov', target: 1925810 },
    { wk: '11/22/2026', mo: 'Nov', target: 1925810 },
    { wk: '11/29/2026', mo: 'Nov', target: 1038196 },
    { wk: '12/06/2026', mo: 'Dec', target: 683150 },
    { wk: '12/13/2026', mo: 'Dec', target: 683150 },
    { wk: '12/20/2026', mo: 'Dec', target: 683150 },
    { wk: '12/27/2026', mo: 'Dec', target: 487965 }
  ]
};

const PLAN_BUDGET_RECOVERY = {
  fullYearBudget: 126105724,
  totalToRecover: 5948966,
  upliftPct: 6.9,
  q1Budget: 16900198,
  q1Actual: 16409511,
  q1Shortfall: 490687,
  aprilGap: 5458279,
  aprilBudget: 12344293,
  aprilFcst: 6886014,
  adjWeeklySalesAvg: 2849800,
  origWeeklySalesAvg: 2672228,
  salesDeltaPerWeek: 177572,
  adjWeeklyProdAvg: 2853097,
  origWeeklyProdAvg: 2751323,
  prodDeltaPerWeek: 101774,
  monthlyBridge: [
    { mo: 'Jan 2026', origBudget: 4269114,  fcst: 4747192,  recovTarget: 4747192,  catchUp: 0,      status: 'Actual'   },
    { mo: 'Feb 2026', origBudget: 4505158,  fcst: 3778526,  recovTarget: 3536393,  catchUp: 0,      status: 'Actual'   },
    { mo: 'Mar 2026', origBudget: 8125926,  fcst: 4932169,  recovTarget: 8125926,  catchUp: 0,      status: 'Actual'   },
    { mo: 'Apr 2026', origBudget: 12344293, fcst: 6886014,  recovTarget: 6886014,  catchUp: 0,      status: 'Forecast' },
    { mo: 'May 2026', origBudget: 14292330, fcst: 13455265, recovTarget: 15170128, catchUp: 877798, status: 'Recovery' },
    { mo: 'Jun 2026', origBudget: 14833760, fcst: 14345614, recovTarget: 15744811, catchUp: 911051, status: 'Recovery' },
    { mo: 'Jul 2026', origBudget: 10752016, fcst: 12035648, recovTarget: 11412377, catchUp: 660361, status: 'Recovery' },
    { mo: 'Aug 2026', origBudget: 14513476, fcst: 13517193, recovTarget: 15404856, catchUp: 891380, status: 'Recovery' },
    { mo: 'Sep 2026', origBudget: 12228745, fcst: 12920784, recovTarget: 12979803, catchUp: 751058, status: 'Recovery' },
    { mo: 'Oct 2026', origBudget: 13652917, fcst: 13110876, recovTarget: 14491444, catchUp: 838527, status: 'Recovery' },
    { mo: 'Nov 2026', origBudget: 10772169, fcst: 10505376, recovTarget: 11433768, catchUp: 661599, status: 'Recovery' },
    { mo: 'Dec 2026', origBudget: 5815820,  fcst: 6302469,  recovTarget: 6173013,  catchUp: 357193, status: 'Recovery' }
  ],
  adjSalesByMarket: [
    { market: 'Columbus',      recovTarget: 264411, original: 247935, delta: 16476 },
    { market: 'Detroit Metro', recovTarget: 171676, original: 160979, delta: 10697 },
    { market: 'Nashville',     recovTarget: 97696,  original: 91609,  delta: 6088  },
    { market: 'DC Metro',      recovTarget: 88803,  original: 83270,  delta: 5533  },
    { market: 'Dayton',        recovTarget: 63271,  original: 59329,  delta: 3942  },
    { market: 'Cincinnati',    recovTarget: 56442,  original: 52926,  delta: 3517  },
    { market: 'Richmond',      recovTarget: 48848,  original: 45804,  delta: 3044  },
    { market: 'Cleveland',     recovTarget: 43254,  original: 40559,  delta: 2695  },
    { market: 'Raleigh',       recovTarget: 41955,  original: 39341,  delta: 2614  },
    { market: 'Knoxville',     recovTarget: 40922,  original: 38372,  delta: 2550  },
    { market: 'Greenville',    recovTarget: 28216,  original: 26458,  delta: 1758  },
    { market: 'Grand Rapids',  recovTarget: 6657,   original: 6242,   delta: 415   }
  ],
  adjProdByMarket: [
    { market: 'Columbus',      recovTarget: 273284, pct: 29.9 },
    { market: 'DC Metro',      recovTarget: 116716, pct: 12.8 },
    { market: 'Detroit Metro', recovTarget: 115017, pct: 12.6 },
    { market: 'Nashville',     recovTarget: 96986,  pct: 10.6 },
    { market: 'Cincinnati',    recovTarget: 74119,  pct: 8.1 },
    { market: 'Richmond',      recovTarget: 57007,  pct: 6.2 },
    { market: 'Cleveland',     recovTarget: 42408,  pct: 4.6 },
    { market: 'Dayton',        recovTarget: 40967,  pct: 4.5 },
    { market: 'Raleigh',       recovTarget: 35135,  pct: 3.8 },
    { market: 'Knoxville',     recovTarget: 30491,  pct: 3.3 },
    { market: 'Greenville',    recovTarget: 14251,  pct: 1.6 },
    { market: 'Grand Rapids',  recovTarget: 10020,  pct: 1.1 },
    { market: 'Indianapolis',  recovTarget: 4781,   pct: 0.5 },
    { market: 'Greensboro',    recovTarget: 1469,   pct: 0.2 },
    { market: 'Winston-Salem', recovTarget: 63,     pct: 0   }
  ]
};

// ────────────────────────────────────────────────────────────
// Helpers
// ────────────────────────────────────────────────────────────
function parseDate(v) {
  if (!v) return null;
  if (v instanceof Date) return isNaN(v.getTime()) ? null : v;
  // Handle "M/D/YYYY" or "M/D/YYYY H:MM AM" strings, plus ISO.
  const s = String(v).trim();
  if (!s) return null;
  // Try native parse first (handles ISO and many US-formatted strings).
  let d = new Date(s);
  if (!isNaN(d.getTime())) return d;
  // Fall back to manual M/D/YYYY parse.
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
  return Math.round((b - a) / (1000 * 60 * 60 * 24));
}

function monthKey(d) {
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0');
}

function monthLabel(key) {
  const m = parseInt(key.split('-')[1], 10);
  return MONTH_NAMES[m - 1];
}

// Mirror the original dashboard's week-of-year (matches the JS `weekOfYear` in index.html)
function weekOfYear(d) {
  const start = new Date(d.getFullYear(), 0, 1);
  const diff = (d - start) / (1000 * 60 * 60 * 24);
  return Math.ceil((diff + start.getDay() + 1) / 7);
}

function median(arr) {
  if (!arr.length) return 0;
  const s = arr.slice().sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
}

function mean(arr) {
  return arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;
}

function sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

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

function fmtNum(v) {
  return Math.round(v || 0).toLocaleString('en-US');
}

function fmtPct(v) {
  return (v || 0).toFixed(1) + '%';
}

function fmtDate(d) {
  if (!d) return null;
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return y + '-' + m + '-' + day;
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

  // Match inputs by leading text (RULE: filename-flexible)
  const turnedFile = inputs.find(f => /turned/i.test(f.name) && /\.xlsx?$/i.test(f.name));
  const completedFile = inputs.find(f => /completed/i.test(f.name) && /\.xlsx?$/i.test(f.name));

  if (!turnedFile) {
    console.log('  [' + PROJECT_ID + '] no Turned-In XLSX found, falling back to existing extracted-data.json');
    return readFromExtracted(snapshotPath);
  }

  const salesRaw = readFirstSheet(turnedFile.fullPath);
  validateColumns(salesRaw, REQUIRED_SALES_COLS, turnedFile.name);

  const completedRaw = completedFile ? readFirstSheet(completedFile.fullPath) : [];

  return buildOutput(salesRaw, completedRaw, snapshotPath);
}

function readFirstSheet(filePath) {
  const wb = io.readXlsx(filePath);
  // readXlsx returns {sheetName: rows[]} when no sheet specified
  if (Array.isArray(wb)) return wb;
  const names = Object.keys(wb);
  if (!names.length) return [];
  return wb[names[0]] || [];
}

function validateColumns(rows, required, filename) {
  if (!rows.length) {
    throw new Error('VAL-001: ' + filename + ' is empty');
  }
  const cols = new Set(Object.keys(rows[0]));
  const missing = required.filter(c => !cols.has(c));
  if (missing.length) {
    throw new Error('VAL-001: ' + filename + ' is missing required column(s): ' + missing.join(', '));
  }
}

// ────────────────────────────────────────────────────────────
// Build the SALES_OVERVIEW output shape
// ────────────────────────────────────────────────────────────
function buildOutput(salesRaw, completedRaw, snapshotPath) {
  // Normalize sales rows (RULE-001)
  const rows = salesRaw.map(r => {
    const market = String(r['Branch Location to Service'] || '').trim();
    const stage = String(r['Stage'] || '').trim();
    return {
      market: market,
      opp: String(r['Opportunity Name'] || ''),
      owner: String(r['Opportunity Owner'] || '').trim(),
      stage: stage,
      jobType: String(r['Sold job type'] || '').trim(),
      serviceType: String(r['Sold Job Service Type'] || '').trim(),
      created: parseDate(r['Date Created']),
      signed: parseDate(r['Contract signed on']),
      amount: parseMoney(r['Amount $']),
      bucket: STAGE_BUCKETS[stage] || 'Other',
      daysToClose: null
    };
  }).filter(r => {
    if (!r.signed) return false;
    if (r.signed.getFullYear() !== FY) return false;
    if (!r.market) return false;
    const m = r.market.toLowerCase();
    if (m.includes('confidential') || m.includes('copyright')) return false;
    return true;
  }).map(r => {
    if (r.created && r.signed) r.daysToClose = dayDiff(r.created, r.signed);
    return r;
  });

  if (!rows.length) {
    throw new Error('VAL-002: Total signed YTD = 0 after RULE-001 filter');
  }

  const markets = Array.from(new Set(rows.map(r => r.market)));
  if (!markets.length) {
    throw new Error('VAL-003: Zero unique markets after RULE-001');
  }

  // Top-level aggregates (RULE-002, RULE-003)
  const buckets = groupBucket(rows);
  const sold = buckets['Sold']               || { count: 0, amount: 0 };
  const prodRev = buckets['Production Review'] || { count: 0, amount: 0 };
  const kicked = buckets['Kicked Back']        || { count: 0, amount: 0 };
  const salesAct = buckets['Sales Action']      || { count: 0, amount: 0 };
  const otherBucket = buckets['Other']         || { count: 0, amount: 0 };

  const total = sum(rows.map(r => r.amount));
  const avgDeal = total / rows.length;
  const medDeal = median(rows.map(r => r.amount));

  const installs = rows.filter(r => r.serviceType === 'Install');
  const repairs = rows.filter(r => r.serviceType === 'Repair');
  const installTotal = sum(installs.map(r => r.amount));
  const installAvg = installs.length ? installTotal / installs.length : 0;
  const repairAvg = repairs.length ? sum(repairs.map(r => r.amount)) / repairs.length : 0;

  const uniqueReps = new Set(rows.map(r => r.owner).filter(Boolean)).size;
  const uniqueMkts = markets.length;

  // RULE-004: annualized
  const today = new Date();
  const jan1 = new Date(FY, 0, 1);
  const ytdDays = Math.max(1, dayDiff(jan1, today));
  const annualRate = (total / ytdDays) * 365;

  // RULE-020: last signed
  const lastSigned = fmtDate(rows.reduce((max, r) => (!max || r.signed > max) ? r.signed : max, null));

  // Pipeline buckets (RULE-016)
  const orderedBuckets = ['Sold', 'Production Review', 'Kicked Back', 'Sales Action', 'Other'];
  const pipelineBuckets = orderedBuckets
    .filter(k => buckets[k] && buckets[k].count > 0)
    .map(k => ({ label: k, count: buckets[k].count, amount: round(buckets[k].amount) }));

  // Monthly aggregations (RULE-009)
  const monthly = buildMonthly(rows);

  // Job type mix by month (RULE-015)
  const jobTypeMixByMonth = buildJobTypeMix(rows, monthly);

  // Job type totals (RULE-007)
  const jobTypeTotals = buildJobTypeTotals(rows);

  // Weekly trend (RULE-010)
  const weeklyTrend = buildWeeklyTrend(rows);

  // Market scorecard (RULE-011)
  const marketScorecard = buildMarketScorecard(rows);

  // Market kickbacks (RULE-012)
  const marketKickbacks = buildMarketKickbacks(rows);

  // marketJobTypeChart (chart hint, used by dashboard chart code)
  const marketJobTypeChart = {
    _description: 'Stacked horizontal bar; sales-by-job-type per branch.',
    branches: marketScorecard.rows.map(r => r[0])
  };

  // People (RULE-006, RULE-013)
  const peopleAgg = buildPeople(rows);

  // Sales cycle (RULE-014)
  const salesCycle = buildSalesCycle(rows);

  // Completed billing (RULE-017)
  const completedBilling = buildCompletedBilling(completedRaw);

  // Weekly targets and budget recovery (RULE-018)
  const weeklyTargets_BUDGET = buildWeeklyTargets(rows);
  const budgetRecovery = buildBudgetRecovery(monthly);

  // Commentary (RULE-019)
  const commentary = buildCommentary({
    rows, total, sold, prodRev, kicked, salesAct,
    avgDeal, medDeal, installAvg, repairAvg, installs, repairs,
    annualRate, monthly, jobTypeTotals, marketKickbacks,
    completedBilling, peopleAgg
  });

  // KPIs (used for the executive overview cards)
  const kpis = [
    { label: 'Signed Contracts YTD', value: fmtMoneyShort(total),
      sub: fmtNum(rows.length) + ' signed contracts across ' + uniqueMkts + ' markets' },
    { label: 'Sold', value: fmtMoneyShort(sold.amount),
      sub: fmtNum(sold.count) + ' deals | ' + fmtPct(sold.count / rows.length * 100) + ' of signed contracts' },
    { label: 'Production Review', value: fmtMoneyShort(prodRev.amount),
      sub: fmtNum(prodRev.count) + ' deals | Ops Review, PM Review, Contracted' },
    { label: 'Kicked Back', value: fmtMoneyShort(kicked.amount),
      sub: fmtNum(kicked.count) + ' deals | ' + fmtPct(kicked.count / rows.length * 100) + ' of signed contracts',
      trend: 'negative' },
    { label: 'Sales Action', value: fmtMoneyShort(salesAct.amount),
      sub: fmtNum(salesAct.count) + ' deals requiring sales follow-up', trend: 'neutral' },
    { label: 'Avg Deal Size', value: fmtDollars(avgDeal),
      sub: 'Median: ' + fmtDollars(medDeal) + ' | Install avg: ' + fmtDollars(installAvg) },
    { label: 'Organization', value: fmtNum(uniqueReps) + ' Reps',
      sub: uniqueMkts + ' active markets' },
    { label: 'Annualized Sales Rate', value: '~' + fmtMoneyShort(annualRate),
      sub: 'Based on ' + ytdDays + ' days YTD' },
    { label: 'Install vs Repair',
      value: fmtPct(installs.length / rows.length * 100) + ' / ' + fmtPct(repairs.length / rows.length * 100),
      sub: fmtNum(installs.length) + ' installs | ' + fmtNum(repairs.length) + ' repairs' }
  ];

  // VAL-005: drift check (warn-only if no prior, fail on > 25 percent drift)
  driftCheck(total, snapshotPath);

  return {
    _source: 'calculator/sales-overview.js v' + VERSION,
    title: 'Residential Sales Overview',
    subtitle: 'YTD ' + FY,
    lastSigned: lastSigned,
    ytdDays: ytdDays,
    rowCount: rows.length,
    tabs: [
      { id: 'overview',   label: 'Executive Overview' },
      { id: 'trends',     label: 'Trends & Momentum' },
      { id: 'market',     label: 'Market Deep Dive' },
      { id: 'people',     label: 'People & Productivity' },
      { id: 'jobtype',    label: 'Job Type & Service Mix' },
      { id: 'salescycle', label: 'Sales Cycle Analysis' },
      { id: 'risks',      label: 'Risks & Red Flags' },
      { id: 'good',       label: 'Build on the Good' },
      { id: 'weak',       label: 'Fix the Weak Areas' },
      { id: 'action',     label: 'Action Plan' },
      { id: 'targets',    label: 'Weekly Sales Targets' },
      { id: 'recovery',   label: 'Budget Recovery' },
      { id: 'billing',    label: 'Completed → Billing' }
    ],
    kpis: kpis,
    pipelineBuckets: pipelineBuckets,
    stageBuckets: STAGE_BUCKETS,
    monthly: monthly,
    jobTypeMixByMonth: jobTypeMixByMonth,
    jobTypeTotals: jobTypeTotals,
    weeklyTrend: weeklyTrend,
    marketScorecard: marketScorecard,
    marketKickbacks: marketKickbacks,
    marketJobTypeChart: marketJobTypeChart,
    topPeople: peopleAgg.top20,
    speedSellers: peopleAgg.speedSellers,
    repairHeavy: peopleAgg.repairHeavy,
    salesCycle: salesCycle,
    completedBilling: completedBilling,
    weeklyTargets_BUDGET: weeklyTargets_BUDGET,
    budgetRecovery: budgetRecovery,
    commentary: commentary
  };
}

// ────────────────────────────────────────────────────────────
// Per-section builders
// ────────────────────────────────────────────────────────────
function groupBucket(rows) {
  const out = {};
  rows.forEach(r => {
    const k = r.bucket;
    if (!out[k]) out[k] = { count: 0, amount: 0 };
    out[k].count++;
    out[k].amount += r.amount;
  });
  return out;
}

function buildMonthly(rows) {
  const map = new Map();
  rows.forEach(r => {
    const k = monthKey(r.signed);
    if (!map.has(k)) map.set(k, { key: k, label: monthLabel(k), count: 0, amount: 0, installs: 0, repairs: 0, _ia: 0, _ic: 0, _ra: 0, _rc: 0 });
    const m = map.get(k);
    m.count++;
    m.amount += r.amount;
    if (r.serviceType === 'Install') { m.installs++; m._ia += r.amount; m._ic++; }
    if (r.serviceType === 'Repair')  { m.repairs++;  m._ra += r.amount; m._rc++; }
  });
  return Array.from(map.values()).sort((a, b) => a.key.localeCompare(b.key)).map(m => ({
    key: m.key,
    label: m.label,
    count: m.count,
    amount: round(m.amount),
    installs: m.installs,
    repairs: m.repairs,
    avgDeal: Math.round(m.amount / m.count),
    repairPct: round1(m.repairs / m.count * 100),
    installAvg: m._ic ? Math.round(m._ia / m._ic) : 0,
    repairAvg: m._rc ? Math.round(m._ra / m._rc) : 0
  }));
}

function buildJobTypeMix(rows, monthly) {
  const targets = ['Retail-No Financing', 'Insurance', 'Retail-Financing'];
  const out = {};
  targets.forEach(jt => {
    out[jt] = {};
    monthly.forEach(m => {
      const subset = rows.filter(r => monthKey(r.signed) === m.key && r.jobType === jt);
      out[jt][m.key] = round(sum(subset.map(r => r.amount)));
    });
  });
  return out;
}

function buildJobTypeTotals(rows) {
  const map = new Map();
  rows.forEach(r => {
    if (!r.jobType) return;
    if (!map.has(r.jobType)) map.set(r.jobType, { jobType: r.jobType, count: 0, amount: 0 });
    const j = map.get(r.jobType);
    j.count++;
    j.amount += r.amount;
  });
  return Array.from(map.values())
    .sort((a, b) => b.amount - a.amount)
    .map(j => ({
      jobType: j.jobType,
      count: j.count,
      amount: round(j.amount),
      avg: Math.round(j.amount / j.count)
    }));
}

function buildWeeklyTrend(rows) {
  const map = new Map();
  rows.forEach(r => {
    const w = weekOfYear(r.signed);
    if (!map.has(w)) map.set(w, { w: w, count: 0, amount: 0 });
    const x = map.get(w);
    x.count++;
    x.amount += r.amount;
  });
  return Array.from(map.values())
    .sort((a, b) => a.w - b.w)
    .map(x => ({ w: x.w, count: x.count, amount: round(x.amount) }));
}

function buildMarketScorecard(rows) {
  const headers = ['Branch', 'Sales', 'Deals', 'Avg Deal', 'Installs', 'Repairs', 'Repair %', 'Median Days'];
  const map = new Map();
  rows.forEach(r => {
    if (!map.has(r.market)) map.set(r.market, []);
    map.get(r.market).push(r);
  });
  const arr = Array.from(map.entries()).map(([market, rs]) => {
    const installs = rs.filter(r => r.serviceType === 'Install').length;
    const reps = rs.filter(r => r.serviceType === 'Repair').length;
    const totalAmt = sum(rs.map(r => r.amount));
    const avg = Math.round(totalAmt / rs.length);
    const days = rs.filter(r => r.daysToClose != null && r.daysToClose >= 0).map(r => r.daysToClose);
    const medD = Math.round(median(days));
    return [market, round(totalAmt), rs.length, avg, installs, reps, round1(reps / rs.length * 100), medD];
  }).sort((a, b) => b[1] - a[1]);
  return { headers: headers, rows: arr };
}

function buildMarketKickbacks(rows) {
  const map = new Map();
  rows.forEach(r => {
    if (r.bucket !== 'Kicked Back') return;
    if (!map.has(r.market)) map.set(r.market, { market: r.market, kicked: 0, kickedAmount: 0 });
    const m = map.get(r.market);
    m.kicked++;
    m.kickedAmount += r.amount;
  });
  return Array.from(map.values())
    .sort((a, b) => b.kicked - a.kicked)
    .slice(0, 6)
    .map(m => ({ market: m.market, kicked: m.kicked, kickedAmount: round(m.kickedAmount) }));
}

function buildPeople(rows) {
  const map = new Map();
  rows.forEach(r => {
    if (!r.owner) return;
    if (!map.has(r.owner)) map.set(r.owner, []);
    map.get(r.owner).push(r);
  });

  const people = Array.from(map.entries()).map(([owner, rs]) => {
    const totalAmt = sum(rs.map(r => r.amount));
    const days = rs.filter(r => r.daysToClose != null && r.daysToClose >= 0).map(r => r.daysToClose);
    const jt = {};
    rs.forEach(r => { if (r.jobType) jt[r.jobType] = (jt[r.jobType] || 0) + 1; });
    const installs = rs.filter(r => r.serviceType === 'Install').length;
    const reps = rs.filter(r => r.serviceType === 'Repair').length;
    return {
      name: owner,
      amount: round(totalAmt),
      count: rs.length,
      avg: Math.round(totalAmt / rs.length),
      medDays: Math.round(median(days)),
      jt: jt,
      installs: installs,
      repairs: reps
    };
  });

  people.sort((a, b) => b.amount - a.amount);

  const top20 = people.slice(0, 20);
  const speedSellers = people
    .filter(p => p.count >= 10 && p.medDays <= 3)
    .sort((a, b) => a.medDays - b.medDays || b.count - a.count)
    .slice(0, 8)
    .map(p => ({ name: p.name, medDays: p.medDays }));
  const repairHeavy = people
    .filter(p => p.repairs >= 5)
    .sort((a, b) => (b.repairs / b.count) - (a.repairs / a.count))
    .slice(0, 3)
    .map(p => ({ name: p.name, repairs: p.repairs, deals: p.count, pct: round1(p.repairs / p.count * 100) }));

  return { top20: top20, speedSellers: speedSellers, repairHeavy: repairHeavy };
}

function buildSalesCycle(rows) {
  const withDays = rows.filter(r => r.daysToClose != null && r.daysToClose >= 0 && r.daysToClose < 2000);
  const allDays = withDays.map(r => r.daysToClose);
  const overallMed = Math.round(median(allDays));
  const overallMean = Math.round(mean(allDays));

  const retail = withDays.filter(r => r.jobType && r.jobType.toLowerCase().includes('retail'));
  const retailMed = Math.round(median(retail.map(r => r.daysToClose)));

  const insurance = withDays.filter(r => r.jobType === 'Insurance');
  const insMed = Math.round(median(insurance.map(r => r.daysToClose)));
  const insMean = Math.round(mean(insurance.map(r => r.daysToClose)));

  const repairs = withDays.filter(r => r.serviceType === 'Repair');
  const repMed = Math.round(median(repairs.map(r => r.daysToClose)));

  const kpis = [
    { label: 'Overall Median', value: overallMed + ' days', sub: 'Mean: ' + overallMean + ' days (skewed by insurance)' },
    { label: 'Retail',         value: retailMed + ' days',  sub: 'All retail job types' },
    { label: 'Insurance',      value: insMed + ' days',     sub: 'Median | Mean: ' + insMean + ' days' },
    { label: 'Repair',         value: repMed + ' days',     sub: 'Fast turn, low value' }
  ];

  const byJobTypeKeys = ['Retail-No Financing', 'Retail-Financing', 'Insurance'];
  const byJobType = byJobTypeKeys.map(k => {
    const subset = withDays.filter(r => r.jobType === k);
    const ds = subset.map(r => r.daysToClose);
    const label = k === 'Retail-No Financing' ? 'Retail-No Fin' : k === 'Retail-Financing' ? 'Retail-Fin' : k;
    return { label: label, median: Math.round(median(ds)), mean: Math.round(mean(ds)), count: subset.length };
  });
  const repairsCycle = withDays.filter(r => r.serviceType === 'Repair');
  byJobType.push({
    label: 'Repair',
    median: Math.round(median(repairsCycle.map(r => r.daysToClose))),
    mean: Math.round(mean(repairsCycle.map(r => r.daysToClose))),
    count: repairsCycle.length
  });
  const installsCycle = withDays.filter(r => r.serviceType === 'Install');
  byJobType.push({
    label: 'Install',
    median: Math.round(median(installsCycle.map(r => r.daysToClose))),
    mean: Math.round(mean(installsCycle.map(r => r.daysToClose))),
    count: installsCycle.length
  });

  // byMarket: count >= 5, sort ascending by median
  const mktMap = new Map();
  withDays.forEach(r => {
    if (!mktMap.has(r.market)) mktMap.set(r.market, []);
    mktMap.get(r.market).push(r.daysToClose);
  });
  const byMarket = Array.from(mktMap.entries())
    .map(([market, ds]) => ({ market: market, median: Math.round(median(ds)), mean: Math.round(mean(ds)), count: ds.length }))
    .filter(m => m.count >= 5)
    .sort((a, b) => a.median - b.median);

  // Star insurance closers: count >= 3, median <= 5, top 5 ascending
  const insMap = new Map();
  withDays.filter(r => r.jobType === 'Insurance' && r.owner).forEach(r => {
    if (!insMap.has(r.owner)) insMap.set(r.owner, []);
    insMap.get(r.owner).push(r.daysToClose);
  });
  const starInsuranceClosers = Array.from(insMap.entries())
    .map(([name, ds]) => ({ name: name, medDays: Math.round(median(ds)), count: ds.length }))
    .filter(p => p.count >= 3 && p.medDays <= 5)
    .sort((a, b) => a.medDays - b.medDays)
    .slice(0, 5);

  return { kpis: kpis, byJobType: byJobType, byMarket: byMarket, starInsuranceClosers: starInsuranceClosers };
}

function buildCompletedBilling(completedRaw) {
  if (!completedRaw || !completedRaw.length) {
    return { totalUnbilled: 0, totalJobs: 0, avgAge: 0, medAge: 0, tiers: [], bySubStatus: [], byMarket: [], byRepTop15: [], fullJobList: [] };
  }
  const today = new Date();

  // Detect schema. Legacy "Completed Awaiting Billing" report has Job Status / Job Sub Status / Account Name / Age.
  // Current "Residential Completed Jobs YTD" report has Date Moved to Completed / Date Moved to Invoiced / etc.
  const sample = completedRaw[0];
  const hasLegacy = ('Job Sub Status' in sample) || ('Account Name' in sample);

  const norm = completedRaw
    .filter(r => {
      const bl = String(r['Branch Location'] || r['Branch Location to Service'] || '').toLowerCase();
      if (!bl) return false;
      if (bl.includes('confidential') || bl.includes('copyright') || bl.includes('salesforce')) return false;
      return true;
    })
    .map(r => {
      const market = String(r['Branch Location'] || r['Branch Location to Service'] || '').trim();
      const job = String(r['Job: Job Number'] || r['Job Number'] || '').trim();
      const acct = String(r['Account Name'] || '').trim();
      const rep = String(r['Opportunity Owner'] || r['Salesperson: Full Name'] || '').trim();
      const subStatus = String(r['Job Sub Status'] || '').trim();
      const status = String(r['Job Status'] || '').trim();
      const jobType = String(r['Job Type'] || r['Service Object'] || '').trim();
      const amt = parseMoney(r['Final Contract Amount']);
      let age;
      if (hasLegacy && r['Age'] != null && r['Age'] !== '') {
        age = parseFloat(r['Age']) || 0;
      } else {
        const completedDate = parseDate(r['Date Moved to Completed']);
        age = completedDate ? Math.max(0, dayDiff(completedDate, today)) : 0;
      }
      const invoicedDate = parseDate(r['Date Moved to Invoiced']);
      const isUnbilled = hasLegacy ? !!job : (job && !invoicedDate);
      return { market, job, acct, rep, subStatus, status, jobType, amt, age, isUnbilled };
    })
    .filter(r => r.job && r.isUnbilled);

  // Dedupe by job number (the YTD export has multiple work-order rows per job)
  const seen = new Map();
  norm.forEach(r => {
    if (!seen.has(r.job)) seen.set(r.job, r);
    else {
      // Keep the one with the larger amount as the canonical row.
      if (r.amt > seen.get(r.job).amt) seen.set(r.job, r);
    }
  });
  const jobs = Array.from(seen.values());

  const totalUnbilled = round(sum(jobs.map(j => j.amt)));
  const ages = jobs.map(j => j.age);
  const avgAge = round1(mean(ages));
  const medAge = Math.round(median(ages));

  const tier = (j) => j.age >= 60 ? 'Critical (60+ days)'
                 : j.age >= 30 ? 'Warning (30-59 days)'
                 : j.age >= 14 ? 'Watch (14-29 days)'
                 : 'Fresh (0-13 days)';
  const colorFor = (label) => label.startsWith('Critical') ? 'red'
                            : label.startsWith('Warning')  ? 'orange'
                            : label.startsWith('Watch')    ? 'blue'
                            : 'green';
  const tierMap = new Map();
  jobs.forEach(j => {
    const t = tier(j);
    if (!tierMap.has(t)) tierMap.set(t, { label: t, count: 0, amount: 0, color: colorFor(t) });
    const x = tierMap.get(t);
    x.count++;
    x.amount += j.amt;
  });
  const tierOrder = ['Critical (60+ days)', 'Warning (30-59 days)', 'Watch (14-29 days)', 'Fresh (0-13 days)'];
  const tiers = tierOrder
    .filter(k => tierMap.has(k))
    .map(k => ({ label: k, count: tierMap.get(k).count, amount: round(tierMap.get(k).amount), color: tierMap.get(k).color }));

  // bySubStatus (only meaningful when legacy schema present)
  const subMap = new Map();
  jobs.forEach(j => {
    const ss = j.subStatus || (hasLegacy ? 'No Sub Status' : null);
    if (ss == null) return;
    if (!subMap.has(ss)) subMap.set(ss, { subStatus: ss, count: 0, amount: 0, _age: 0 });
    const x = subMap.get(ss);
    x.count++;
    x.amount += j.amt;
    x._age += j.age;
  });
  const actionFor = (ss) => {
    if (ss === 'Pending Supplement') return 'Follow up with insurance carrier on supplement approval. Escalate if >30 days.';
    if (ss === 'Accounting Kickback') return 'Review kickback reason, correct documentation or pricing, resubmit to accounting.';
    if (ss === 'Ready to Invoice') return 'No blockers, submit invoice immediately. This is free cash waiting.';
    return 'Review job, identify what is blocking billing, assign owner.';
  };
  const bySubStatus = Array.from(subMap.values())
    .sort((a, b) => b.amount - a.amount)
    .map(x => ({
      subStatus: x.subStatus,
      count: x.count,
      amount: round(x.amount),
      avgAge: Math.round(x._age / x.count),
      action: actionFor(x.subStatus)
    }));

  // byMarket
  const mktMap = new Map();
  jobs.forEach(j => {
    if (!mktMap.has(j.market)) mktMap.set(j.market, { market: j.market, count: 0, amount: 0, _age: 0 });
    const x = mktMap.get(j.market);
    x.count++;
    x.amount += j.amt;
    x._age += j.age;
  });
  const byMarket = Array.from(mktMap.values())
    .sort((a, b) => b.amount - a.amount)
    .map(x => {
      const avg = Math.round(x._age / x.count);
      const urgency = avg >= 30 ? 'HIGH' : avg >= 15 ? 'MEDIUM' : 'LOW';
      return { market: x.market, count: x.count, amount: round(x.amount), avgAge: avg, urgency: urgency };
    });

  // byRepTop15
  const repMap = new Map();
  jobs.forEach(j => {
    if (!j.rep) return;
    if (!repMap.has(j.rep)) repMap.set(j.rep, { rep: j.rep, count: 0, amount: 0, oldest: 0 });
    const x = repMap.get(j.rep);
    x.count++;
    x.amount += j.amt;
    if (j.age > x.oldest) x.oldest = Math.round(j.age);
  });
  const byRepTop15 = Array.from(repMap.values())
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 15)
    .map(x => ({ rep: x.rep, count: x.count, amount: round(x.amount), oldest: x.oldest }));

  // fullJobList
  const fullJobList = jobs
    .slice()
    .sort((a, b) => b.age - a.age)
    .map(j => [j.job, j.acct, j.rep, j.market, j.subStatus, round(j.amt), Math.round(j.age), j.jobType]);

  return {
    totalUnbilled: totalUnbilled,
    totalJobs: jobs.length,
    avgAge: avgAge,
    medAge: medAge,
    tiers: tiers,
    bySubStatus: bySubStatus,
    byMarket: byMarket,
    byRepTop15: byRepTop15,
    fullJobList: fullJobList
  };
}

function buildWeeklyTargets(rows) {
  // Live actuals: most recent 4 ISO weeks
  const wkMap = new Map();
  rows.forEach(r => {
    const w = weekOfYear(r.signed);
    wkMap.set(w, (wkMap.get(w) || 0) + r.amount);
  });
  const sortedWeeks = Array.from(wkMap.entries()).sort((a, b) => b[0] - a[0]);
  const last4 = sortedWeeks.slice(0, 4);
  const recent4WkAvg = last4.length ? mean(last4.map(w => w[1])) : 0;

  return Object.assign({}, PLAN_WEEKLY_TARGETS, { recent4WkAvg: round(recent4WkAvg) });
}

function buildBudgetRecovery(monthly) {
  // Live monthly actuals merged into the locked monthlyBridge where available.
  const liveByKey = {};
  monthly.forEach(m => { liveByKey[m.label + ' ' + m.key.split('-')[0]] = m.amount; });
  const monthlyBridge = PLAN_BUDGET_RECOVERY.monthlyBridge.map(b => {
    const live = liveByKey[b.mo];
    return Object.assign({}, b, live != null ? { liveActual: live } : {});
  });
  return Object.assign({}, PLAN_BUDGET_RECOVERY, { monthlyBridge: monthlyBridge });
}

// ────────────────────────────────────────────────────────────
// Commentary generator (RULE-019)
// All callouts pull names from the live rows. No hand-edits.
// ────────────────────────────────────────────────────────────
function buildCommentary(d) {
  const monthly = d.monthly;
  const firstMo = monthly[0];
  const lastMo = monthly[monthly.length - 1];
  const growth = (firstMo && lastMo && firstMo.amount)
    ? Math.round((lastMo.amount - firstMo.amount) / firstMo.amount * 100) : 0;

  const insT = d.jobTypeTotals.find(j => j.jobType === 'Insurance');
  const finT = d.jobTypeTotals.find(j => j.jobType === 'Retail-Financing');
  const rnfT = d.jobTypeTotals.find(j => j.jobType === 'Retail-No Financing');
  const insAvg = insT ? insT.avg : 0;
  const finAvg = finT ? finT.avg : 0;
  const rnfAvg = rnfT ? rnfT.avg : 0;

  const soldPct = (d.sold.count / d.rows.length * 100);
  const repairPct = (d.repairs.length / d.rows.length * 100);

  const topKick = d.marketKickbacks[0];

  // Risks - completed billing references
  const cb = d.completedBilling;
  const critTier = (cb.tiers || []).find(t => t.label.startsWith('Critical'));
  const supSub = (cb.bySubStatus || []).find(s => s.subStatus === 'Pending Supplement');
  const ackSub = (cb.bySubStatus || []).find(s => s.subStatus === 'Accounting Kickback');

  const whatsWorking = [
    firstMo && lastMo
      ? 'Sales Trajectory: Monthly sales moved from ' + firstMo.label + ' ' + fmtMoneyShort(firstMo.amount)
        + ' to ' + lastMo.label + ' ' + fmtMoneyShort(lastMo.amount) + ' ('
        + (growth >= 0 ? '+' : '') + growth + '%). Annualized run rate: ' + fmtMoneyShort(d.annualRate) + '.'
      : null,
    (insT && finT && rnfT)
      ? 'Premium Deal Types: Insurance averages ' + fmtDollars(insAvg) + ' per deal. Retail-Financing averages '
        + fmtDollars(finAvg) + ' (highest per-deal value). Retail-No Financing averages ' + fmtDollars(rnfAvg)
        + ' (the volume engine).'
      : null,
    'Sold Conversion: ' + fmtNum(d.sold.count) + ' of ' + fmtNum(d.rows.length) + ' signed contracts ('
      + fmtPct(soldPct) + ') have made it to Sold status for ' + fmtMoneyShort(d.sold.amount) + ' in confirmed sales.'
  ].filter(Boolean);

  const whatNeedsAttention = [
    topKick
      ? 'Kickback Concentration: ' + topKick.market + ' has the most kickbacks ('
        + topKick.kicked + ', ' + fmtMoneyShort(topKick.kickedAmount) + '). Total company kickbacks: '
        + d.kicked.count + ' worth ' + fmtMoneyShort(d.kicked.amount) + '.'
      : null,
    d.prodRev.count > 0
      ? 'Production Review Queue: ' + fmtNum(d.prodRev.count) + ' deals worth '
        + fmtMoneyShort(d.prodRev.amount) + ' sitting in Production Review. Watch for backlog growth, it delays revenue recognition.'
      : null,
    repairPct > 15
      ? 'Repair Rate Elevated: ' + fmtPct(repairPct) + ' of all deals are repairs ('
        + fmtNum(d.repairs.length) + ' of ' + fmtNum(d.rows.length) + '). Repairs average ~'
        + fmtDollars(d.repairAvg) + ', low value relative to installs at ' + fmtDollars(d.installAvg) + '.'
      : null
  ].filter(Boolean);

  const criticalRisks = [
    topKick ? topKick.market + ' Kickback Concentration drives the company\'s largest single-market rework volume.' : null,
    cb.totalUnbilled > 0
      ? fmtMoneyShort(cb.totalUnbilled) + ' sitting unbilled in Completed Jobs ('
        + cb.totalJobs + ' jobs averaging ' + Math.round(cb.avgAge) + ' days'
        + (critTier ? '; ' + critTier.count + ' jobs are 60+ days/' + fmtMoneyShort(critTier.amount) : '') + ').'
      : null,
    supSub ? 'Pending Supplements aging: ' + supSub.count + ' supplement jobs ('
      + fmtMoneyShort(supSub.amount) + '), avg ' + supSub.avgAge + ' days.' : null,
    ackSub ? 'Accounting Kickbacks blocking ' + fmtMoneyShort(ackSub.amount) + ' (' + ackSub.count + ' completed jobs).' : null,
    'Pipeline kickbacks company-wide: ' + d.kicked.count + ' kickbacks totaling ' + fmtMoneyShort(d.kicked.amount) + '.',
    d.prodRev.count > 0 ? 'Production Review backlog: ' + fmtNum(d.prodRev.count) + ' deals (' + fmtMoneyShort(d.prodRev.amount) + ').' : null
  ].filter(Boolean);

  // Strengths
  const scoreboard = d.rows; // already filtered
  const strengthsToAmplify = [];
  // Lift retail velocity headline
  const retail = scoreboard.filter(r => r.jobType && r.jobType.toLowerCase().includes('retail') && r.daysToClose != null && r.daysToClose >= 0);
  if (retail.length) {
    const retailMed = Math.round(median(retail.map(r => r.daysToClose)));
    strengthsToAmplify.push('Retail Velocity: ' + retailMed + 'd median close on ' + fmtNum(retail.length) + ' retail deals.');
  }
  if (insT) {
    const lift = round(insT.amount * 0.20);
    strengthsToAmplify.push('Insurance Density: ' + fmtDollars(insAvg) + ' avg on ' + fmtNum(insT.count) + ' deals = '
      + fmtMoneyShort(insT.amount) + '; +20% lift = ~' + fmtMoneyShort(lift) + '.');
  }
  if (lastMo && lastMo.repairPct < repairPct - 1) {
    strengthsToAmplify.push(lastMo.label + ' repair rate at ' + fmtPct(lastMo.repairPct)
      + ' vs YTD ' + fmtPct(repairPct) + ', correction in latest month.');
  }
  if (finT) {
    strengthsToAmplify.push('Financing Lifts Ticket: Retail-Financing averages ' + fmtDollars(finAvg) + ', highest per-deal value.');
  }

  const fixList = [];
  if (topKick) fixList.push(topKick.market + ' Pipeline Kickback Intervention, pull every kickback and categorize root cause.');
  if (supSub) fixList.push('Supplement Follow-Up Process, ' + supSub.count + ' supplement jobs (' + fmtMoneyShort(supSub.amount) + ').');
  if (ackSub) fixList.push('Accounting Kickback Root Causes, ' + ackSub.count + ' jobs (' + fmtMoneyShort(ackSub.amount) + '), need a Kickback Reason field.');
  if (d.prodRev.count > 0) fixList.push('Production Review Bottleneck, ' + fmtNum(d.prodRev.count) + ' deals; add temporary PM capacity.');
  if (finT && rnfT) {
    const finPct = (finT.count / d.rows.length * 100);
    fixList.push('Financing Push, ' + fmtNum(finT.count) + ' financing deals YTD ('
      + fmtPct(finPct) + ') at ' + fmtDollars(finAvg) + ' avg. Target 15% mix.');
  }

  // Action plan
  const readyToInvoice = (cb.bySubStatus || []).find(s => s.subStatus === 'Ready to Invoice');
  const thisWeek = [
    readyToInvoice ? 'Invoice Immediately: ' + fmtMoneyShort(readyToInvoice.amount) + ', ' + readyToInvoice.count + ' jobs marked Ready to Invoice.' : null,
    critTier ? 'Escalate 60+ Day Jobs: ' + fmtMoneyShort(critTier.amount) + ', ' + critTier.count + ' jobs are 60+ days unbilled.' : null,
    ackSub ? 'Accounting Kickback Blitz: ' + fmtMoneyShort(ackSub.amount) + ', ' + ackSub.count + ' jobs kicked back; cross-functional meeting w/ accounting + sales ops.' : null,
    topKick ? topKick.market + ' Pipeline Kickback Review, meet with branch leadership.' : null,
    d.prodRev.count > 0 ? 'Production Review Surge Plan, ' + fmtNum(d.prodRev.count) + ' deals (' + fmtMoneyShort(d.prodRev.amount) + ') in queue.' : null
  ].filter(Boolean);
  const thisMonth = [
    'Supplement Escalation SOP, 7/14/30 day cadence with carrier escalation.',
    'Completed-to-Billing SLA, 100% invoiced within 21 days.',
    'Repair Triage Pilot in markets where repair rate exceeds 25%.',
    'Financing Training, peer training led by top financing reps. Target 15% mix.'
  ];
  const thisQuarter = [
    'Add Kickback Reason field to accounting workflow.',
    d.repairs.length ? 'Repair Business Decision, ' + fmtNum(d.repairs.length) + ' repairs YTD at ~' + fmtDollars(d.repairAvg) + ' avg.' : null,
    lastMo ? 'Ops Capacity Planning, ' + lastMo.label + ' hit ' + fmtNum(lastMo.count) + ' deals; summer typically exceeds spring.' : null
  ].filter(Boolean);

  return {
    whatsWorking: whatsWorking,
    whatNeedsAttention: whatNeedsAttention,
    criticalRisks: criticalRisks,
    strengthsToAmplify: strengthsToAmplify,
    fixList: fixList,
    actionPlan: { thisWeek: thisWeek, thisMonth: thisMonth, thisQuarter: thisQuarter }
  };
}

// ────────────────────────────────────────────────────────────
// Drift check (VAL-005)
// ────────────────────────────────────────────────────────────
function driftCheck(currentTotal, snapshotPath) {
  if (process.env.FZ_SKIP_DRIFT_CHECK === '1') return;
  try {
    const prevPath = snapshotPath || DEFAULT_SNAPSHOT_PATH;
    if (!fs.existsSync(prevPath)) return;
    const prev = JSON.parse(fs.readFileSync(prevPath, 'utf8'));
    const prevSO = prev.SALES_OVERVIEW;
    if (!prevSO || !prevSO.kpis || !prevSO.kpis[0]) return;
    const prevValStr = prevSO.kpis[0].value || '';
    const m = prevValStr.match(/([\d.]+)\s*([MKB]?)/i);
    if (!m) return;
    const num = parseFloat(m[1]);
    const mult = m[2] === 'M' ? 1e6 : m[2] === 'K' ? 1e3 : m[2] === 'B' ? 1e9 : 1;
    const prevTotal = num * mult;
    if (!prevTotal) return;
    const drift = Math.abs(currentTotal - prevTotal) / prevTotal;
    if (drift > 0.25) {
      throw new Error('VAL-005: Total signed YTD drifted ' + (drift * 100).toFixed(0)
        + '% from previous build (was ' + fmtMoneyShort(prevTotal) + ', now ' + fmtMoneyShort(currentTotal)
        + '). Set FZ_SKIP_DRIFT_CHECK=1 to bypass.');
    }
  } catch (e) {
    // Re-throw VAL errors only; swallow IO/parse errors so the pipeline still runs on first build.
    if (e && e.message && e.message.startsWith('VAL-')) throw e;
  }
}

function round(v)  { return Math.round((v || 0) * 100) / 100; }
function round1(v) { return Math.round((v || 0) * 10) / 10; }

// Fallback to existing snapshot when no inputs are dropped.
function readFromExtracted(snapshotPath) {
  const p = snapshotPath || DEFAULT_SNAPSHOT_PATH;
  try {
    const extracted = JSON.parse(fs.readFileSync(p, 'utf8'));
    if (extracted.SALES_OVERVIEW) return extracted.SALES_OVERVIEW;
  } catch (err) { /* fall through to stub */ }
  console.log('  [' + PROJECT_ID + '] no SALES_OVERVIEW in snapshot ' + p + '; returning stub.');
  return emptyShape();
}

function emptyShape() {
  // Schema-shaped stub so the dashboard renders cleanly before the first real build.
  return {
    title: 'Residential Sales Overview',
    subtitle: 'No data uploaded yet — drop XLSX files in inputs/sales-overview/',
    lastSigned: null, ytdDays: 0, rowCount: 0,
    kpis: [
      { label: 'Signed Contracts YTD', value: '$0', sub: 'No data uploaded yet' },
      { label: 'Sold', value: '$0', sub: '' },
      { label: 'Production Review', value: '$0', sub: '' },
      { label: 'Kicked Back', value: '$0', sub: '' },
      { label: 'Avg Deal Size', value: '$0', sub: '' }
    ],
    pipelineBuckets: [],
    stageBuckets: {},
    monthly: [{ key: '2026-01', label: 'January', count: 0, amount: 0, installs: 0, repairs: 0, avgDeal: 0, repairPct: 0, installAvg: 0, repairAvg: 0 }],
    jobTypeMixByMonth: { Insurance: {}, 'Retail-Financing': {}, 'Retail-No Financing': {} },
    jobTypeTotals: [],
    weeklyTrend: [],
    marketScorecard: { headers: ['Branch','Sales','Deals','Avg Deal','Installs','Repairs','Repair %','Median Days'], rows: [] },
    marketKickbacks: [],
    marketJobTypeChart: { labels: [], datasets: [] },
    topPeople: [],
    speedSellers: [],
    repairHeavy: [],
    salesCycle: { kpis: [], byJobType: [], byMarket: [], starInsuranceClosers: [] },
    completedBilling: { headers: [], rows: [], totalJobs: 0, totalAmount: 0 },
    weeklyTargets_BUDGET: PLAN_WEEKLY_TARGETS,
    budgetRecovery: PLAN_BUDGET_RECOVERY,
    commentary: { whatsWorking: [], whatNeedsAttention: [], criticalRisks: [], strengthsToAmplify: [], fixList: [], actionPlan: { thisWeek: [], thisMonth: [], thisQuarter: [] } }
  };
}

function validate(out) {
  const errors = [];
  if (!out) errors.push('output is null');
  if (out && !out.kpis) errors.push('missing kpis');
  if (out && !out.monthly) errors.push('missing monthly key');
  if (out && !out.marketScorecard) errors.push('missing marketScorecard');
  if (out && !out.pipelineBuckets) errors.push('missing pipelineBuckets');
  return errors;
}

module.exports = { id: PROJECT_ID, version: VERSION, run, validate };
