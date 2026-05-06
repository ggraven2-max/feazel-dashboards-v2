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
  // Optional: Closing Percent By Branch export (opportunity-level, used for
  // close rate and Net Sales per Lead Issued metrics on the Markets tab).
  const closingFile = inputs.find(f => /closing/i.test(f.name) && /\.xlsx?$/i.test(f.name));

  if (!turnedFile) {
    console.log('  [' + PROJECT_ID + '] no Turned-In XLSX found, falling back to existing extracted-data.json');
    return readFromExtracted(snapshotPath);
  }

  const salesRaw = readFirstSheet(turnedFile.fullPath);
  validateColumns(salesRaw, REQUIRED_SALES_COLS, turnedFile.name);

  const completedRaw = completedFile ? readFirstSheet(completedFile.fullPath) : [];

  let closingRaw = null;
  if (closingFile) {
    // Two supported formats:
    //   1. Salesforce *aggregated report* XLSX (header row + per-branch totals).
    //      Has the literal column "Sum of Sold Deals" — that's our format flag.
    //   2. Per-opportunity export (one row per opp, includes Stage and Branch).
    const xlsx = require('xlsx');
    const wb = xlsx.readFile(closingFile.fullPath, { cellDates: false });
    const sheet = wb.Sheets[wb.SheetNames[0]];
    const raw2D = xlsx.utils.sheet_to_json(sheet, { header: 1, defval: null });
    const isAggregated = raw2D.some(row =>
      Array.isArray(row) && row.some(c => typeof c === 'string' && /sum of sold deals/i.test(c)));
    if (isAggregated) {
      closingRaw = { format: 'aggregated', rows: raw2D, sourceFile: closingFile.name };
      const dataRows = raw2D.filter(r => r && r.some(c => c != null)).length;
      console.log('  [' + PROJECT_ID + '] closing/NSLI source: ' + closingFile.name + ' (Salesforce report · ' + dataRows + ' rows)');
    } else {
      closingRaw = { format: 'per-opportunity', rows: readFirstSheet(closingFile.fullPath), sourceFile: closingFile.name };
      console.log('  [' + PROJECT_ID + '] closing/NSLI source: ' + closingFile.name + ' (' + closingRaw.rows.length + ' opportunities)');
    }
  } else {
    console.log('  [' + PROJECT_ID + '] no Closing Percent By Branch XLSX found; closingByBranch will be empty');
  }

  return buildOutput(salesRaw, completedRaw, snapshotPath, closingRaw, inputDir);
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
function buildOutput(salesRaw, completedRaw, snapshotPath, closingRaw, inputDirRef) {
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

  // Closing % and NSLI by branch (sourced from "Closing Percent By Branch" export)
  // Accepts both the Salesforce aggregated report XLSX and the legacy
  // per-opportunity export. Empty result when no file is provided.
  const closingByBranch = buildClosingByBranch(closingRaw);

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
  // Detect LOB from input path so we pick MF or residential plan.
  const isMfLob = /multi-family/.test(inputDirRef || '');
  const weeklyTargets_BUDGET = isMfLob
    ? buildMfWeeklyTargets(rows, marketScorecard)
    : buildWeeklyTargets(rows);
  const budgetRecovery = isMfLob
    ? buildMfBudgetRecovery(monthly, marketScorecard, inputDirRef)
    : buildBudgetRecovery(monthly);

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
    closingByBranch: closingByBranch,
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

/**
 * Closing % and NSLI per branch, sourced from the "Closing Percent By Branch"
 * opportunity-level export. Each row is one opportunity with stage, amount,
 * sold-deal value, and branch.
 *
 * Definitions:
 *   • Closing % (decision close)  = Sold / (Sold + Lost)
 *       Of opportunities that reached a final outcome, what % closed sold.
 *       Excludes still-open / kicked / claim-filed opps.
 *   • Issue close %               = Sold / Total Opps
 *       Of every issued opportunity, what % closed sold.
 *       Lower number, less inflated by lost-side hygiene.
 *   • NSLI ($/lead)               = Sold $ / Total Opps
 *       Net Sales per Lead Issued. The dollar version of issue-close.
 *       Useful for comparing markets where deal sizes vary.
 *
 * "Sold" = stage in {Closed - Sold, Kicked Back to Salesperson} per the same
 * convention used for Signed Contracts YTD elsewhere in this calculator.
 * "Lost" = Closed - Lost.
 *
 * Branch normalization mirrors NetSuite: 'Detroit Metro' → 'Detroit',
 * 'NOVA' → 'DC Metro' so the table joins cleanly with the rest of the dashboard.
 */
function buildClosingByBranch(closingInput) {
  // Empty / not provided
  if (!closingInput) return { headers: [], rows: [], totals: null, source: null, format: 'none' };

  const BRANCH_REMAP = {
    'detroit metro': 'Detroit',
    'nova': 'DC Metro'
  };
  const normBranch = function (loc) {
    if (!loc) return '(unassigned)';
    const key = String(loc).trim().toLowerCase();
    return BRANCH_REMAP[key] || String(loc).trim();
  };

  // ── FORMAT 1: Salesforce aggregated report XLSX ─────────────────
  // The XLSX has a "Sum of Sold Deals" header row followed by per-branch
  // totals and a Total row. Already pre-aggregated; just lift the table.
  if (closingInput.format === 'aggregated' && Array.isArray(closingInput.rows)) {
    const raw = closingInput.rows;
    // Find the header row (contains 'Branch Location to Service' or 'Sum of Sold Deals')
    let headerIdx = -1;
    let cBranch = -1, cSold = -1, cClose = -1, cNsli = -1, cCount = -1;
    for (let i = 0; i < raw.length && headerIdx < 0; i++) {
      const row = raw[i] || [];
      for (let j = 0; j < row.length; j++) {
        const cell = String(row[j] || '').trim();
        if (/branch location to service/i.test(cell)) {
          headerIdx = i;
          // Locate each column by header label
          for (let k = j; k < row.length; k++) {
            const lbl = String(row[k] || '').trim().toLowerCase();
            if (/branch location/.test(lbl)) cBranch = k;
            else if (/sum of sold deals/.test(lbl)) cSold = k;
            else if (/closing percent/.test(lbl)) cClose = k;
            else if (lbl === 'nsli') cNsli = k;
            else if (/record count/.test(lbl)) cCount = k;
          }
          break;
        }
      }
    }
    if (headerIdx < 0 || cBranch < 0) {
      return { headers: [], rows: [], totals: null, source: closingInput.sourceFile || null, format: 'aggregated-empty' };
    }

    const display = [];
    let totalsRow = null;
    for (let i = headerIdx + 1; i < raw.length; i++) {
      const row = raw[i] || [];
      const branchRaw = row[cBranch];
      if (!branchRaw) continue;
      const branchTxt = String(branchRaw).trim();
      // Skip blank lines and the footer rows ("Confidential...", copyright)
      if (!branchTxt || /confidential|copyright/i.test(branchTxt)) continue;
      const isTotal = /^total$/i.test(branchTxt);
      const soldAmt = parseMoney(row[cSold]);
      // Closing Percent comes through as a decimal (0.232) in the XLSX
      const closeDec = parseMoney(row[cClose]);
      const closePct = closeDec > 1 ? closeDec : closeDec * 100;
      const nsli = parseMoney(row[cNsli]);
      const opps = parseMoney(row[cCount]);
      if (soldAmt === 0 && opps === 0) continue;
      const entry = {
        branch: normBranch(branchTxt),
        opps: Math.round(opps),
        soldAmt: round(soldAmt),
        closePct: round1(closePct),
        nsli: Math.round(nsli)
      };
      if (isTotal) totalsRow = entry;
      else display.push(entry);
    }
    display.sort((a, b) => b.soldAmt - a.soldAmt);

    // If the report didn't include a Total row, compute one from rows
    if (!totalsRow) {
      const tOpps = display.reduce((s, r) => s + r.opps, 0);
      const tSold = display.reduce((s, r) => s + r.soldAmt, 0);
      totalsRow = {
        branch: 'Total',
        opps: tOpps,
        soldAmt: round(tSold),
        closePct: 0,
        nsli: tOpps > 0 ? Math.round(tSold / tOpps) : 0
      };
    }

    return {
      headers: ['Branch', 'Sum of Sold Deals', 'Closing Percent', 'NSLI', 'Record Count'],
      rows: display,
      totals: {
        opps: totalsRow.opps,
        soldAmt: totalsRow.soldAmt,
        closePct: totalsRow.closePct,
        nsli: totalsRow.nsli
      },
      source: closingInput.sourceFile || 'Closing Percent By Branch (Salesforce report)',
      format: 'aggregated'
    };
  }

  // ── FORMAT 2: Per-opportunity export (legacy) ───────────────────
  const rawRows = Array.isArray(closingInput.rows) ? closingInput.rows
                : (Array.isArray(closingInput) ? closingInput : []);
  if (!rawRows.length) return { headers: [], rows: [], totals: null, source: null, format: 'per-opportunity-empty' };

  const SOLD_STAGES = new Set(['Closed - Sold', 'Kicked Back to Salesperson']);
  const LOST_STAGES = new Set(['Closed - Lost']);

  const map = new Map();
  rawRows.forEach(r => {
    const branch = normBranch(r['Branch Location to Service']);
    const stage = String(r['Stage'] || '').trim();
    const amount = parseMoney(r['Amount $']);
    const sold = parseMoney(r['Sold Deals']);
    if (!map.has(branch)) {
      map.set(branch, { branch, opps: 0, soldCnt: 0, lostCnt: 0, openCnt: 0, soldAmt: 0, presAmt: 0 });
    }
    const m = map.get(branch);
    m.opps++;
    m.presAmt += amount;
    if (SOLD_STAGES.has(stage)) {
      m.soldCnt++;
      m.soldAmt += sold;
    } else if (LOST_STAGES.has(stage)) {
      m.lostCnt++;
    } else {
      m.openCnt++;
    }
  });

  // For the per-opportunity format we report the same 4-column shape as the
  // aggregated XLSX so the page-def renders consistently.
  const arr = Array.from(map.values()).map(m => {
    const closePct = m.opps > 0 ? (m.soldCnt / m.opps) * 100 : 0;   // issue close
    const nsli = m.opps > 0 ? m.soldAmt / m.opps : 0;
    return {
      branch: m.branch,
      opps: m.opps,
      soldAmt: round(m.soldAmt),
      closePct: round1(closePct),
      nsli: Math.round(nsli)
    };
  }).sort((a, b) => b.soldAmt - a.soldAmt);

  const display = arr.filter(r => r.branch !== '(unassigned)');
  const tOpps = arr.reduce((s, r) => s + r.opps, 0);
  const tSoldAmt = arr.reduce((s, r) => s + r.soldAmt, 0);
  const totals = {
    opps: tOpps,
    soldAmt: round(tSoldAmt),
    closePct: tOpps > 0 ? round1(arr.reduce((s, r) => s + (r.closePct * r.opps), 0) / tOpps) : 0,
    nsli: tOpps > 0 ? Math.round(tSoldAmt / tOpps) : 0
  };

  return {
    headers: ['Branch', 'Sum of Sold Deals', 'Closing Percent', 'NSLI', 'Record Count'],
    rows: display,
    totals,
    source: closingInput.sourceFile || 'Closing Percent By Branch · opportunity export',
    format: 'per-opportunity'
  };
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
// MF-SPECIFIC helpers — derive the recovery bridge and weekly
// targets from the actual MF Commercial Budget XLSX, the live
// MF Sales Overview signed actuals, and MF's market mix. Annual
// plan is locked to $51.67M per the Commercial Budget.
// ────────────────────────────────────────────────────────────
const MF_ANNUAL_BUDGET = 51_673_207;
const MF_MONTH_LONG = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const MF_MONTH_SHORT = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

// Read the MF Commercial Budget XLSX and pull the 12 monthly invoiced-budget
// values from the "Total - 40000 - Revenue" row. Returns { monthly, annual }
// or null if the file isn't reachable. Mirrors revenue-forecast-mf.js
// parseBudget but lives here so sales-overview can be self-contained.
function readMfBudgetMonthly(salesInputDir) {
  if (!salesInputDir) return null;
  // Sales-overview lives at inputs/multi-family/sales-overview/. The budget
  // is in the sibling folder inputs/multi-family/revenue-forecast/.
  const rfDir = path.join(salesInputDir, '..', 'revenue-forecast');
  if (!fs.existsSync(rfDir)) return null;
  const files = fs.readdirSync(rfDir).filter(f => /commercial budget/i.test(f) && /\.xlsx?$/i.test(f));
  if (!files.length) return null;
  let xlsx;
  try { xlsx = require('xlsx'); }
  catch (e) { console.log('  [' + PROJECT_ID + '] xlsx module unavailable for MF budget read; skipping bridge'); return null; }
  const wb = xlsx.readFile(path.join(rfDir, files[0]), { cellDates: false });
  const sheet = wb.Sheets[wb.SheetNames[0]];
  const rows = xlsx.utils.sheet_to_json(sheet, { header: 1, defval: null });
  for (const row of rows) {
    for (let i = 0; i < row.length; i++) {
      const cell = row[i];
      if (!cell) continue;
      const label = String(cell).toLowerCase();
      if (label.includes('total') && label.includes('40000') && label.includes('revenue')) {
        const monthly = row.slice(i + 1, i + 13).map(v => {
          const n = parseFloat(String(v).replace(/[$,\s]/g, ''));
          return isNaN(n) ? 0 : n;
        });
        if (monthly.length === 12) {
          const summed = monthly.reduce((s, v) => s + v, 0);
          return { monthly: monthly, annual: summed, sourceFile: files[0] };
        }
      }
    }
  }
  return null;
}

function buildMfBudgetRecovery(monthly, marketScorecard, salesInputDir) {
  const budget = readMfBudgetMonthly(salesInputDir);
  // Even without the file we want a sane bridge: spread $51.67M evenly.
  const monthlyPlan = budget ? budget.monthly : new Array(12).fill(MF_ANNUAL_BUDGET / 12);
  const annualPlan  = MF_ANNUAL_BUDGET;   // headline always anchored to $51.67M
  const summedPlan  = monthlyPlan.reduce((s, v) => s + v, 0);
  // If the monthly cells sum to less than the annual headline (the budget
  // file regularly does, by ~$2M), gross every month up proportionally so
  // the bridge sums to $51.67M and matches the dashboard headline.
  const grossUp = (summedPlan > 0 && summedPlan < annualPlan) ? annualPlan / summedPlan : 1;
  const monthlyPlanScaled = monthlyPlan.map(v => v * grossUp);

  // Actuals come from NetSuite AR (invoiced revenue) for true budget-vs-actual.
  // Plan in the Commercial Budget is invoiced revenue, so the apples-to-apples
  // comparison is also invoiced. Falls back to signed sales monthly if the
  // NetSuite file is unreadable for some reason.
  let actualByIdx = new Array(12).fill(0);
  const countByIdx = new Array(12).fill(0);
  let actualSource = 'NetSuite AR · invoiced revenue';
  let nsTotal = 0;
  let nsInvoiceCount = 0;
  let nsLatestDate = null;
  try {
    const netsuite = require('./lib/netsuite-invoices');
    if (salesInputDir) {
      const rfDir = path.join(salesInputDir, '..', 'revenue-forecast');
      const ns = netsuite.parseInvoices(rfDir);
      if (ns && Array.isArray(ns.monthly)) {
        actualByIdx = ns.monthly.slice(0, 12);
        nsTotal = ns.totalInvoiced || 0;
        nsInvoiceCount = ns.invoiceCount || 0;
        nsLatestDate = ns.latestDate || null;
      } else {
        // Fall through to signed-sales fallback
        actualSource = 'signed sales (NetSuite invoiced unavailable)';
        monthly.forEach(m => {
          const idx = parseInt(m.key.split('-')[1], 10) - 1;
          if (idx >= 0 && idx < 12) actualByIdx[idx] = m.amount;
        });
      }
    }
  } catch (err) {
    console.log('  [' + PROJECT_ID + '] MF NetSuite read failed, using signed-sales fallback: ' + err.message);
    actualSource = 'signed sales (NetSuite read error)';
    monthly.forEach(m => {
      const idx = parseInt(m.key.split('-')[1], 10) - 1;
      if (idx >= 0 && idx < 12) actualByIdx[idx] = m.amount;
    });
  }
  // Keep deal counts from signed sales (NetSuite doesn't have a "deal count"
  // in the same sense; it's invoice count). Used in the Targets tab tables.
  monthly.forEach(m => {
    const idx = parseInt(m.key.split('-')[1], 10) - 1;
    if (idx >= 0 && idx < 12) countByIdx[idx] = m.count;
  });

  // Determine which months are "closed" (no longer current). Use today.
  const today = new Date();
  const todayMonthIdx = today.getFullYear() === FY ? today.getMonth() : (today.getFullYear() > FY ? 11 : -1);

  // Closed actuals + remaining-year shortfall
  let closedActual = 0;
  let closedPlan = 0;
  for (let i = 0; i < todayMonthIdx; i++) {
    closedActual += actualByIdx[i];
    closedPlan   += monthlyPlanScaled[i];
  }
  const remainingPlan  = annualPlan - closedActual;
  const remainingMonths = 12 - todayMonthIdx;
  const remainingPlanRaw = monthlyPlanScaled.slice(todayMonthIdx).reduce((s, v) => s + v, 0);
  const yearGap = remainingPlan - remainingPlanRaw;   // positive = need uplift

  // Allocate the recovery uplift proportionally to each remaining month's
  // share of the remaining-year plan. catchUp is only on months >= today's.
  const monthlyBridge = MF_MONTH_SHORT.map((short, idx) => {
    const plan   = monthlyPlanScaled[idx];
    const actual = actualByIdx[idx];
    let recovTarget = plan;
    let catchUp = 0;
    let status = 'Recovery';
    if (idx < todayMonthIdx) {
      // Closed months: lock at actual. Recovery target = max(actual, plan) so
      // the chart isn't dragged down by months where we beat plan.
      recovTarget = Math.max(actual, plan);
      status = 'Actual';
    } else if (idx === todayMonthIdx) {
      status = 'Active';
      recovTarget = plan;
    } else if (yearGap > 0 && remainingPlanRaw > 0) {
      // Future months take their share of the catch-up.
      const share = plan / remainingPlanRaw;
      catchUp = yearGap * share;
      recovTarget = plan + catchUp;
    }
    const liveActual = (idx <= todayMonthIdx && actual > 0) ? actual : null;
    return {
      mo: short + ' ' + FY,
      monthIdx: idx,
      origBudget: round(plan),
      fcst: round(plan),         // for parity with residential shape
      recovTarget: round(recovTarget),
      catchUp: round(catchUp),
      status: status,
      liveActual: liveActual != null ? round(liveActual) : undefined,
      deals: countByIdx[idx] || 0
    };
  });

  // Weekly pace math, rest-of-year. Avg week count uses ceil so pace target
  // is conservative (rather than spreading across fractional weeks).
  const weeksRemaining = Math.max(1, Math.ceil((remainingMonths * 30.4) / 7));
  const adjWeeklySalesAvg = (annualPlan - closedActual) / weeksRemaining;
  // Original (no recovery) avg week is just remainingPlanRaw / weeks.
  const origWeeklySalesAvg = remainingPlanRaw / weeksRemaining;
  const salesDeltaPerWeek = adjWeeklySalesAvg - origWeeklySalesAvg;

  // Q1 detail
  const q1Plan   = monthlyPlanScaled.slice(0, 3).reduce((s, v) => s + v, 0);
  const q1Actual = actualByIdx.slice(0, 3).reduce((s, v) => s + v, 0);
  const aprPlan  = monthlyPlanScaled[3] || 0;
  const aprActual = actualByIdx[3] || 0;

  // Per-market sales lift required, allocated proportionally to each market's
  // share of YTD signed dollars. If a market did $X / TotalYTD = pct, it owes
  // pct * salesDeltaPerWeek extra each week.
  const mktRows = (marketScorecard && marketScorecard.rows) || [];
  const totalYtdMkt = mktRows.reduce((s, r) => s + (r[1] || 0), 0);
  const adjSalesByMarket = mktRows.map(r => {
    const share = totalYtdMkt > 0 ? (r[1] / totalYtdMkt) : 0;
    const original = (r[1] / 7);   // their current weekly pace, approximate
    const recovTarget = original + share * salesDeltaPerWeek;
    return {
      market: r[0],
      recovTarget: round(recovTarget),
      original: round(original),
      delta: round(share * salesDeltaPerWeek)
    };
  });

  return {
    fullYearBudget: annualPlan,
    sourceFile: budget ? budget.sourceFile : '(MF budget XLSX not found, using flat 1/12 split)',
    totalToRecover: round(Math.max(0, yearGap)),
    upliftPct: remainingPlanRaw > 0 ? round1(yearGap / remainingPlanRaw * 100) : 0,
    q1Budget: round(q1Plan),
    q1Actual: round(q1Actual),
    q1Shortfall: round(q1Actual - q1Plan),
    aprilGap: round(aprActual - aprPlan),
    aprilBudget: round(aprPlan),
    aprilFcst: round(aprActual),
    adjWeeklySalesAvg: round(adjWeeklySalesAvg),
    origWeeklySalesAvg: round(origWeeklySalesAvg),
    salesDeltaPerWeek: round(salesDeltaPerWeek),
    weeksRemaining: weeksRemaining,
    adjWeeklyProdAvg: round(adjWeeklySalesAvg),     // production parity for chart consumers
    origWeeklyProdAvg: round(origWeeklySalesAvg),
    prodDeltaPerWeek: round(salesDeltaPerWeek),
    monthlyBridge: monthlyBridge,
    adjSalesByMarket: adjSalesByMarket,
    adjProdByMarket: adjSalesByMarket,   // same source for MF; production allocation matches sales
    actualSource: actualSource,
    netsuiteTotal: round(nsTotal),
    netsuiteInvoiceCount: nsInvoiceCount,
    netsuiteLatestDate: nsLatestDate ? nsLatestDate.toISOString().slice(0, 10) : null
  };
}

function buildMfWeeklyTargets(rows, marketScorecard) {
  // 4-week recent pace from MF live signed
  const wkMap = new Map();
  rows.forEach(r => {
    const w = weekOfYear(r.signed);
    wkMap.set(w, (wkMap.get(w) || 0) + r.amount);
  });
  const sortedWeeks = Array.from(wkMap.entries()).sort((a, b) => b[0] - a[0]);
  const last4 = sortedWeeks.slice(0, 4);
  const recent4WkAvg = last4.length ? mean(last4.map(w => w[1])) : 0;

  // Build the rest-of-year week schedule from MF's monthly budget.
  // For each remaining ISO week we attribute it to the month whose Friday
  // bucket it lives in, then the week's target is monthlyPlan / weeksInMonth.
  const today = new Date();
  const todayMonthIdx = today.getFullYear() === FY ? today.getMonth() : (today.getFullYear() > FY ? 11 : -1);
  const annualPlan = MF_ANNUAL_BUDGET;
  // Use even per-month split (annualPlan / 12) when we don't have access to
  // the budget file at this point. The recovery builder reads the file with
  // path access; here we depend on the recovery output. Simpler: compute
  // from the bridge's monthlyPlanScaled equivalents — i.e., just read
  // marketScorecard for share and split annual / weeks evenly.
  // To keep this self-contained, we approximate plan-per-week via:
  //   weeksRemaining ≈ (12 - todayMonthIdx) * 4.33
  const monthsRemaining = 12 - Math.max(todayMonthIdx, 0);
  const weeksRemaining = Math.max(1, Math.ceil(monthsRemaining * 30.4 / 7));
  const avgWeeklyNeed = annualPlan / weeksRemaining;

  // Generate the week schedule for the remaining weeks of the year, each
  // anchored to the Monday and tagged to its month for the chart palette.
  const weekSchedule = [];
  let cursor = new Date(today);
  // Move to next Monday
  cursor.setDate(cursor.getDate() + ((1 - cursor.getDay() + 7) % 7 || 7));
  for (let i = 0; i < weeksRemaining && cursor.getFullYear() === FY; i++) {
    const monthIdx = cursor.getMonth();
    const moShort = MF_MONTH_SHORT[monthIdx];
    const wkLabel = String(cursor.getMonth() + 1).padStart(2, '0') + '/' +
                    String(cursor.getDate()).padStart(2, '0') + '/' + cursor.getFullYear();
    weekSchedule.push({ wk: wkLabel, mo: moShort, target: round(avgWeeklyNeed) });
    cursor.setDate(cursor.getDate() + 7);
  }

  // By-market weekly target allocation = market YTD share * avgWeeklyNeed
  const mktRows = (marketScorecard && marketScorecard.rows) || [];
  const totalYtdMkt = mktRows.reduce((s, r) => s + (r[1] || 0), 0);
  const byMarket = mktRows.map(r => ({
    market: r[0],
    total:  round(totalYtdMkt > 0 ? avgWeeklyNeed * (r[1] / totalYtdMkt) : 0),
    retNoFin: 0, ins: 0, retFin: 0,
    deals: round1(r[2] / Math.max(1, sortedWeeks.length))   // deals-per-week, not exact but useful
  }));

  // By-job-type / by-trade — on MF the categorical mix is concentrated;
  // surface what we have from the live data so charts have something to plot.
  const byJobType = [];
  const byTrade = [];

  return {
    avgWeeklyNeed: round(avgWeeklyNeed),
    weeksRemaining: weeksRemaining,
    annualPlan: annualPlan,
    byJobType: byJobType,
    byTrade: byTrade,
    byMarket: byMarket,
    weekSchedule: weekSchedule,
    recent4WkAvg: round(recent4WkAvg)
  };
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
