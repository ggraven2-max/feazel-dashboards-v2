/* ============================================================
   FEAZEL CALCULATOR - Job Backlog & Production
   Reads inputs/backlog/*.xlsx (one Salesforce work-orders export)
   and produces the BACKLOG JSON shape the dashboard consumes.

   Rules are documented in inputs/backlog/RULES.md.
   ============================================================ */
const path = require('path');
const fs = require('fs');
const io = require('./lib/io');
const agg = require('./lib/aggregate');

const PROJECT_ID = 'backlog';
const VERSION = '1.0-rules-encoded';
const INPUT_DIR = path.join(__dirname, '..', 'inputs', PROJECT_ID);

// RULE-201: required input columns
const REQUIRED_COLS = [
  'Account: Account Name',
  'Job Type',
  'Job Status',
  'Days in Status',
  'Status',
  'Sub-Status',
  'Service Type',
  'Service Object',
  'Salesperson Name',
  'Job: Final Contract Amount',
  'Work Order Number',
  'Contract Signed On',
  'Branch Location to Service',
  'Job: Job Number'
];

// RULE-219: specialty trades on the watch list
const SPECIALTY_TRADES = ['Solar', 'Metal'];

// RULE-207: aging buckets
const AGE_BUCKETS = [
  { label: '<7d',    test: function (d) { return d < 7; } },
  { label: '7-14d',  test: function (d) { return d >= 7 && d < 14; } },
  { label: '14-30d', test: function (d) { return d >= 14 && d < 30; } },
  { label: '30-60d', test: function (d) { return d >= 30 && d < 60; } },
  { label: '60-90d', test: function (d) { return d >= 60 && d < 90; } },
  { label: '90+d',   test: function (d) { return d >= 90; } }
];

// ────────────────────────────────────────────────────────────
// Helpers
// ────────────────────────────────────────────────────────────
function parseMoney(v) {
  if (v == null || v === '') return 0;
  if (typeof v === 'number') return v;
  const s = String(v).replace(/[$,\s]/g, '');
  const n = parseFloat(s);
  return isNaN(n) ? 0 : n;
}

function parseNum(v) {
  if (v == null || v === '') return 0;
  if (typeof v === 'number') return v;
  const s = String(v).replace(/[$,\s]/g, '');
  const n = parseFloat(s);
  return isNaN(n) ? 0 : n;
}

function sum(arr) { return arr.reduce(function (a, b) { return a + (Number(b) || 0); }, 0); }
function mean(arr) { return arr.length ? sum(arr) / arr.length : 0; }

function fmtMoneyShort(v) {
  if (v == null || isNaN(v)) return '$0';
  const abs = Math.abs(v);
  if (abs >= 1e9) return '$' + (v / 1e9).toFixed(2) + 'B';
  if (abs >= 1e6) return '$' + (v / 1e6).toFixed(2) + 'M';
  if (abs >= 1e3) return '$' + (v / 1e3).toFixed(0) + 'K';
  return '$' + Math.round(v).toLocaleString('en-US');
}

function fmtNum(v) { return Math.round(v || 0).toLocaleString('en-US'); }
function fmtPct(num, den) {
  if (!den) return '0%';
  return ((num / den) * 100).toFixed(1) + '%';
}

function round(v)  { return Math.round((v || 0) * 100) / 100; }
function round1(v) { return Math.round((v || 0) * 10) / 10; }

// ────────────────────────────────────────────────────────────
// Main entrypoint
// ────────────────────────────────────────────────────────────
function run() {
  const inputs = io.listInputs(INPUT_DIR);
  console.log('  [' + PROJECT_ID + '] inputs found: ' + inputs.length);
  inputs.forEach(function (f) { console.log('    - ' + f.name); });

  if (inputs.length === 0) {
    console.log('  [' + PROJECT_ID + '] no inputs, falling back to existing extracted-data.json');
    return readFromExtracted();
  }

  // Pick the first .xlsx or .csv (RULE: filename-flexible)
  const woFile = inputs.find(function (f) { return /\.(xlsx|xls|csv)$/i.test(f.name); });
  if (!woFile) {
    console.log('  [' + PROJECT_ID + '] no XLSX/CSV input found, falling back to existing extracted-data.json');
    return readFromExtracted();
  }

  const raw = readSheet(woFile);
  validateColumns(raw, REQUIRED_COLS, woFile.name);

  return buildOutput(raw);
}

function readSheet(file) {
  if (file.ext === 'csv' || file.ext === 'tsv') return io.readCsv(file.fullPath);
  const wb = io.readXlsx(file.fullPath);
  if (Array.isArray(wb)) return wb;
  const names = Object.keys(wb);
  return names.length ? (wb[names[0]] || []) : [];
}

function validateColumns(rows, required, filename) {
  if (!rows.length) {
    throw new Error('VAL-202: ' + filename + ' has zero rows after parsing');
  }
  const cols = new Set(Object.keys(rows[0]));
  const missing = required.filter(function (c) { return !cols.has(c); });
  if (missing.length) {
    throw new Error('VAL-201: ' + filename + ' is missing required column(s): ' + missing.join(', '));
  }
}

// ────────────────────────────────────────────────────────────
// Build the BACKLOG output shape
// ────────────────────────────────────────────────────────────
function buildOutput(raw) {
  // RULE-201: normalize
  const rows = raw.map(function (r) {
    return {
      account:      String(r['Account: Account Name'] || '').trim(),
      jobType:      String(r['Job Type'] || '').trim(),
      jobStatus:    String(r['Job Status'] || '').trim(),
      daysInStatus: parseNum(r['Days in Status']),
      woStatus:     String(r['Status'] || '').trim(),
      subStatus:    String(r['Sub-Status'] || '').trim(),
      serviceType:  String(r['Service Type'] || '').trim(),
      trade:        String(r['Service Object'] || '').trim(),
      salesperson:  String(r['Salesperson Name'] || '').trim(),
      contract:     parseMoney(r['Job: Final Contract Amount']),
      woNumber:     String(r['Work Order Number'] || '').trim(),
      signed:       String(r['Contract Signed On'] || '').trim(),
      branch:       String(r['Branch Location to Service'] || '').trim(),
      jobNum:       String(r['Job: Job Number'] || '').trim()
    };
  }).filter(function (r) {
    if (!r.jobNum && !r.woNumber) return false;
    const b = r.branch.toLowerCase();
    if (b.includes('confidential') || b.includes('copyright')) return false;
    return true;
  });

  if (!rows.length) {
    throw new Error('VAL-202: zero rows after RULE-201 normalization');
  }

  // RULE-203: job-level dedupe
  const woByJob = groupBy(rows, function (r) { return r.jobNum; });
  const jobs = Object.keys(woByJob).map(function (k) { return woByJob[k][0]; });
  if (!jobs.length) {
    throw new Error('VAL-203: zero unique jobs after RULE-203');
  }

  const totalJobs = jobs.length;
  const totalWOs = rows.length;
  const portfolioValue = sum(jobs.map(function (j) { return j.contract; }));
  const inProgressJobs = jobs.filter(function (j) { return j.jobStatus === 'In Progress'; });
  const notStartedJobs = jobs.filter(function (j) { return j.jobStatus === 'Not Started'; });
  const completedJobs = jobs.filter(function (j) { return j.jobStatus === 'Completed'; });
  const avgDaysJob = mean(jobs.map(function (j) { return j.daysInStatus; }));

  // RULE-204 + RULE-205: partial vs zombie
  const partialJobs = [];
  const zombieJobs = [];
  Object.keys(woByJob).forEach(function (jn) {
    const wos = woByJob[jn];
    const j0 = wos[0];
    if (j0.jobStatus !== 'In Progress') return;
    const completedCount = wos.filter(function (w) { return w.woStatus === 'Completed'; }).length;
    if (completedCount === wos.length) {
      zombieJobs.push({ jobNum: jn, wos: wos, job: j0 });
    } else if (completedCount > 0) {
      partialJobs.push({ jobNum: jn, wos: wos, job: j0 });
    }
  });
  const partialJobNums = new Set(partialJobs.map(function (p) { return p.jobNum; }));
  const partialValue = sum(partialJobs.map(function (p) { return p.job.contract; }));

  // RULE-206: trailing trades
  const trailingByTrade = {};
  partialJobs.forEach(function (p) {
    p.wos.filter(function (w) { return w.woStatus !== 'Completed'; }).forEach(function (w) {
      const t = w.trade || '(unspecified)';
      if (!trailingByTrade[t]) {
        trailingByTrade[t] = { trade: t, openWos: 0, jobs: new Set(), days: [] };
      }
      trailingByTrade[t].openWos++;
      trailingByTrade[t].jobs.add(p.jobNum);
      trailingByTrade[t].days.push(w.daysInStatus);
    });
  });
  const trailingTrades = Object.keys(trailingByTrade).map(function (k) {
    const t = trailingByTrade[k];
    let value = 0;
    t.jobs.forEach(function (jn) {
      const wos = woByJob[jn];
      value += wos && wos[0] ? wos[0].contract : 0;
    });
    return {
      trade: t.trade,
      openWos: t.openWos,
      jobsBlocked: t.jobs.size,
      avgDays: mean(t.days),
      value: value
    };
  }).sort(function (a, b) { return b.openWos - a.openWos; });

  const topTrailing = trailingTrades[0] || { trade: '-', openWos: 0, jobsBlocked: 0, value: 0 };

  // RULE-211: RAS (both label variants)
  const rasWos = rows.filter(function (r) {
    return r.woStatus === 'Ready After Service' || r.woStatus === 'Requires Additional Service';
  });
  const rasMaxDays = rasWos.length ? Math.max.apply(null, rasWos.map(function (r) { return r.daysInStatus; })) : 0;

  // RULE-209: holds
  const holdWos = rows.filter(function (r) { return r.woStatus === 'On Hold'; });
  const holdsBySub = {};
  holdWos.forEach(function (w) {
    const k = w.subStatus || '(no sub-status)';
    if (!holdsBySub[k]) holdsBySub[k] = [];
    holdsBySub[k].push(w);
  });
  const holdsBySubArr = Object.keys(holdsBySub).map(function (k) {
    const arr = holdsBySub[k];
    return {
      subStatus: k,
      count: arr.length,
      avgAge: mean(arr.map(function (w) { return w.daysInStatus; })),
      oldest: Math.max.apply(null, arr.map(function (w) { return w.daysInStatus; }))
    };
  }).sort(function (a, b) { return b.count - a.count; });

  const pendingPermitWos = rows.filter(function (r) { return r.subStatus === 'Pending Permit'; });
  const pendingSalesWos = rows.filter(function (r) { return r.subStatus === 'Pending Sales'; });
  const avgHoldAge = mean(holdWos.map(function (w) { return w.daysInStatus; }));

  // RULE-208: WO status distribution
  const woStatusDist = countBy(rows, function (r) { return r.woStatus || '(unset)'; });

  // RULE-207 + woAging by status (avg + max)
  const woAging = {};
  rows.forEach(function (r) {
    const k = r.woStatus || '(unset)';
    if (!woAging[k]) woAging[k] = { status: k, count: 0, daysSum: 0, maxDays: 0 };
    woAging[k].count++;
    woAging[k].daysSum += r.daysInStatus;
    if (r.daysInStatus > woAging[k].maxDays) woAging[k].maxDays = r.daysInStatus;
  });
  const woAgingArr = Object.keys(woAging).map(function (k) {
    const x = woAging[k];
    return { status: x.status, count: x.count, avg: x.count ? x.daysSum / x.count : 0, maxDays: x.maxDays };
  }).sort(function (a, b) { return b.avg - a.avg; });

  // RULE-212: branch breakdown
  const byBranch = {};
  rows.forEach(function (r) {
    const b = r.branch || '(unset)';
    if (!byBranch[b]) {
      byBranch[b] = {
        branch: b, wos: 0, completed: 0, onHold: 0, rts: 0, scheduled: 0,
        inProg: 0, ras: 0, permits: 0, jobs: new Set(), value: 0
      };
    }
    const x = byBranch[b];
    x.wos++;
    if (r.woStatus === 'Completed') x.completed++;
    if (r.woStatus === 'On Hold') x.onHold++;
    if (r.woStatus === 'Ready to Schedule') x.rts++;
    if (r.woStatus === 'Scheduled') x.scheduled++;
    if (r.woStatus === 'In Progress') x.inProg++;
    if (r.woStatus === 'Ready After Service' || r.woStatus === 'Requires Additional Service') x.ras++;
    if (r.subStatus === 'Pending Permit') x.permits++;
    x.jobs.add(r.jobNum);
  });
  const branchArr = Object.keys(byBranch).map(function (k) {
    const b = byBranch[k];
    let value = 0;
    b.jobs.forEach(function (jn) {
      const wos = woByJob[jn];
      value += wos && wos[0] ? wos[0].contract : 0;
    });
    return {
      branch: b.branch, wos: b.wos, completed: b.completed, onHold: b.onHold,
      rts: b.rts, scheduled: b.scheduled, inProg: b.inProg, ras: b.ras,
      permits: b.permits, jobCount: b.jobs.size, value: value
    };
  }).sort(function (a, b) { return b.wos - a.wos; });

  if (!branchArr.length) {
    throw new Error('VAL-204: zero unique branches after RULE-212');
  }

  // RULE-213: trade breakdown
  const byTrade = {};
  rows.forEach(function (r) {
    const t = r.trade || '(unspecified)';
    if (!byTrade[t]) {
      byTrade[t] = {
        trade: t, wos: 0, completed: 0, open: 0, onHold: 0, rts: 0,
        jobs: new Set()
      };
    }
    const x = byTrade[t];
    x.wos++;
    if (r.woStatus === 'Completed') x.completed++;
    else x.open++;
    if (r.woStatus === 'On Hold') x.onHold++;
    if (r.woStatus === 'Ready to Schedule') x.rts++;
    x.jobs.add(r.jobNum);
  });
  const tradeArr = Object.keys(byTrade).map(function (k) {
    const t = byTrade[k];
    let value = 0;
    t.jobs.forEach(function (jn) {
      const wos = woByJob[jn];
      value += wos && wos[0] ? wos[0].contract : 0;
    });
    return {
      trade: t.trade, wos: t.wos, completed: t.completed, open: t.open,
      onHold: t.onHold, rts: t.rts, jobCount: t.jobs.size, value: value
    };
  }).sort(function (a, b) { return b.wos - a.wos; });

  // RULE-214: salesperson breakdown
  const bySales = {};
  rows.forEach(function (r) {
    const sp = r.salesperson || '(unassigned)';
    if (!bySales[sp]) {
      bySales[sp] = {
        salesperson: sp, wos: 0, stale: 0, pendingSales: 0,
        jobs: new Set(), branches: new Set(),
        staleValue: 0, pendingValue: 0
      };
    }
    const x = bySales[sp];
    x.wos++;
    x.jobs.add(r.jobNum);
    x.branches.add(r.branch || '');
    if (r.daysInStatus > 30) x.stale++;
    if (r.subStatus === 'Pending Sales') x.pendingSales++;
  });
  // Pending Sales value (deduped per job)
  const pendingSalesByJob = {};
  pendingSalesWos.forEach(function (r) {
    if (!pendingSalesByJob[r.jobNum]) pendingSalesByJob[r.jobNum] = r;
  });
  Object.keys(pendingSalesByJob).forEach(function (jn) {
    const r = pendingSalesByJob[jn];
    const sp = r.salesperson || '(unassigned)';
    if (bySales[sp]) bySales[sp].pendingValue += r.contract;
  });
  // Stale value (deduped per (sp, job))
  const staleByJobBySp = {};
  rows.filter(function (r) { return r.daysInStatus > 30; }).forEach(function (r) {
    const k = (r.salesperson || '(unassigned)') + '|' + r.jobNum;
    if (!staleByJobBySp[k]) staleByJobBySp[k] = r;
  });
  Object.keys(staleByJobBySp).forEach(function (k) {
    const r = staleByJobBySp[k];
    const sp = r.salesperson || '(unassigned)';
    if (bySales[sp]) bySales[sp].staleValue += r.contract;
  });
  const salesArr = Object.keys(bySales).map(function (k) {
    const s = bySales[k];
    return {
      salesperson: s.salesperson, wos: s.wos, jobCount: s.jobs.size,
      stale: s.stale, pendingSales: s.pendingSales,
      staleValue: s.staleValue, pendingValue: s.pendingValue,
      branchCount: s.branches.size
    };
  }).sort(function (a, b) { return b.staleValue - a.staleValue; });

  const repsWithStuck = salesArr.filter(function (s) { return s.staleValue > 0; }).length;
  const topStuckRep = salesArr[0] || { salesperson: '-', staleValue: 0 };

  // RULE-215: revenue at risk (deduped per job)
  const riskJobs = {};
  rows.filter(function (r) { return r.daysInStatus > 30; }).forEach(function (r) {
    if (!riskJobs[r.jobNum]) riskJobs[r.jobNum] = r;
  });
  const riskJobList = Object.keys(riskJobs).map(function (jn) { return riskJobs[jn]; });
  const revenueAtRisk = sum(riskJobList.map(function (r) { return r.contract; }));

  // RULE-216: backlog by branch (Not Started)
  const backlogByBranchMap = {};
  notStartedJobs.forEach(function (j) {
    const b = j.branch || '(unset)';
    if (!backlogByBranchMap[b]) backlogByBranchMap[b] = { branch: b, jobs: 0, value: 0, maxDays: 0 };
    const x = backlogByBranchMap[b];
    x.jobs++;
    x.value += j.contract;
    if (j.daysInStatus > x.maxDays) x.maxDays = j.daysInStatus;
  });
  const backlogArr = Object.keys(backlogByBranchMap).map(function (k) { return backlogByBranchMap[k]; })
    .sort(function (a, b) { return b.jobs - a.jobs; });
  const notStartedValue = sum(notStartedJobs.map(function (j) { return j.contract; }));
  const oldestNotStarted = notStartedJobs.length
    ? Math.max.apply(null, notStartedJobs.map(function (j) { return j.daysInStatus; })) : 0;

  // RULE-217: oldest 15 not started
  const oldest15 = notStartedJobs.slice().sort(function (a, b) {
    return b.daysInStatus - a.daysInStatus;
  }).slice(0, 15);

  // RULE-219: specialty watch
  const specialtyWatchRows = SPECIALTY_TRADES.map(function (t) {
    const x = byTrade[t];
    return { trade: t, wos: x ? x.wos : 0 };
  });

  // RULE-220: gutter status breakdown
  const gutterRows = rows.filter(function (r) { return r.trade === 'Gutters'; });
  const gutterStatusDist = countBy(gutterRows, function (r) { return r.woStatus || '(unset)'; });

  // RULE-210: permits by branch
  const permitsByBranch = branchArr
    .filter(function (b) { return b.permits > 0; })
    .map(function (b) { return { branch: b.branch, permits: b.permits }; })
    .sort(function (a, b) { return b.permits - a.permits; });

  // RTS WOs on partial jobs (referenced by Partial KPI strip)
  const rtsOnPartial = rows.filter(function (r) {
    return r.woStatus === 'Ready to Schedule' && partialJobNums.has(r.jobNum);
  });

  // Open WOs on partial jobs (status mix + age distribution charts)
  const openOnPartial = [];
  partialJobs.forEach(function (p) {
    p.wos.forEach(function (w) {
      if (w.woStatus !== 'Completed') openOnPartial.push(w);
    });
  });
  const openOnPartialStatus = countBy(openOnPartial, function (w) { return w.woStatus || '(unset)'; });
  const openOnPartialAge = AGE_BUCKETS.map(function (b) {
    return { label: b.label, count: openOnPartial.filter(function (w) { return b.test(w.daysInStatus); }).length };
  });

  // Top branch concentration (for backlog KPI)
  const topBacklogBranch = backlogArr[0] || { branch: '-', jobs: 0 };
  const backlogConcPct = notStartedJobs.length ? (topBacklogBranch.jobs / notStartedJobs.length) * 100 : 0;

  // Build the seven required charts
  const charts = buildCharts({
    woStatusDist: woStatusDist,
    branchArr: branchArr,
    woAgingArr: woAgingArr,
    tradeArr: tradeArr,
    openOnPartialStatus: openOnPartialStatus,
    openOnPartialAge: openOnPartialAge,
    backlogArr: backlogArr
  });

  // Build the nine required tables
  const tables = buildTables({
    branchArr: branchArr,
    holdsBySubArr: holdsBySubArr,
    trailingTrades: trailingTrades,
    gutterStatusDist: gutterStatusDist,
    tradeArr: tradeArr,
    specialtyWatchRows: specialtyWatchRows,
    salesArr: salesArr,
    backlogArr: backlogArr,
    oldest15: oldest15
  });

  // KPI strips (RULE-222)
  const kpisExecutive = [
    { label: 'Total Jobs',          value: fmtNum(totalJobs),       sub: fmtNum(totalWOs) + ' work orders',                           tone: 'info' },
    { label: 'In Progress',          value: fmtNum(inProgressJobs.length), sub: fmtPct(inProgressJobs.length, totalJobs) + ' of book', tone: 'info' },
    { label: 'Not Started',          value: fmtNum(notStartedJobs.length), sub: fmtPct(notStartedJobs.length, totalJobs) + ' of book', tone: 'info' },
    { label: 'Partially Complete',   value: fmtNum(partialJobs.length),    sub: fmtPct(partialJobs.length, inProgressJobs.length) + ' of In Progress', tone: 'crit' },
    { label: 'Avg Days in Status',   value: String(Math.round(avgDaysJob)), sub: 'Job-level average',                                  tone: 'warn' },
    { label: 'Total Portfolio Value', value: fmtMoneyShort(portfolioValue), sub: 'Sum of signed contracts in book',                    tone: 'good' }
  ];

  const kpisRiskOpportunity = [
    { label: 'Revenue at Risk',                value: fmtMoneyShort(revenueAtRisk), sub: 'Jobs with WOs >30 days in status', tone: 'crit' },
    { label: 'Immediate Throughput Opportunity', value: fmtMoneyShort(partialValue), sub: 'Partial-job value waiting on trailing trades', tone: 'good' }
  ];

  const kpisPartial = [
    { label: 'Partial Jobs',         value: fmtNum(partialJobs.length),  sub: fmtPct(partialJobs.length, inProgressJobs.length) + ' of In Progress', tone: 'warn' },
    { label: 'Trapped Value',        value: fmtMoneyShort(partialValue), sub: 'Recoverable contract value',                       tone: 'good' },
    { label: 'Open WOs on Partials', value: fmtNum(openOnPartial.length), sub: 'Across ' + partialJobs.length + ' jobs',           tone: 'info' },
    { label: 'RTS Ready Today',      value: fmtNum(rtsOnPartial.length), sub: 'No blocker, dispatch now',                          tone: 'good' },
    { label: 'Top Trailing Trade',   value: topTrailing.trade || '-',    sub: topTrailing.openWos + ' open WOs / ' + topTrailing.jobsBlocked + ' jobs', tone: 'warn' }
  ];

  const kpisHolds = [
    { label: 'Total Holds',     value: fmtNum(holdWos.length),         sub: 'WOs in On Hold status',                       tone: 'crit' },
    { label: 'Pending Permit',  value: fmtNum(pendingPermitWos.length), sub: fmtPct(pendingPermitWos.length, holdWos.length) + ' of all holds', tone: 'warn' },
    { label: 'Pending Sales',   value: fmtNum(pendingSalesWos.length),  sub: 'Awaiting sales disposition',                   tone: 'warn' },
    { label: 'Avg Hold Age',    value: Math.round(avgHoldAge) + 'd',    sub: 'Mean days in hold across all sub-statuses',   tone: 'info' }
  ];

  const kpisSales = [
    { label: 'Active Reps',          value: fmtNum(salesArr.length),  sub: 'Reps with at least one open WO',           tone: 'info' },
    { label: 'Stuck Value >30d',     value: fmtMoneyShort(sum(salesArr.map(function (s) { return s.staleValue; }))), sub: 'Sum of stale value across all reps',                  tone: 'crit' },
    { label: 'Reps with Stuck Work', value: fmtNum(repsWithStuck),    sub: 'Reps carrying any >30d WO',                tone: 'warn' },
    { label: 'Top Stuck Rep',        value: fmtMoneyShort(topStuckRep.staleValue), sub: 'Highest single-rep stuck value',                       tone: 'warn' }
  ];

  const kpisBacklog = [
    { label: 'Not Started Jobs',         value: fmtNum(notStartedJobs.length), sub: fmtPct(notStartedJobs.length, totalJobs) + ' of book', tone: 'info' },
    { label: 'Not Started Value',        value: fmtMoneyShort(notStartedValue), sub: 'Signed and waiting',                                  tone: 'good' },
    { label: 'Oldest Not Started',       value: Math.round(oldestNotStarted) + 'd', sub: 'Days in status, oldest job',                     tone: 'crit' },
    { label: 'Top Branch Concentration', value: topBacklogBranch.branch,        sub: topBacklogBranch.jobs + ' jobs (' + round1(backlogConcPct) + '% of backlog)', tone: 'warn' }
  ];

  // RULE-226: action plan (programmatic)
  const actionPlan = buildActionPlan({
    partialValue: partialValue, revenueAtRisk: revenueAtRisk,
    rtsOnPartial: rtsOnPartial.length, rasCount: rasWos.length, rasMaxDays: rasMaxDays,
    pendingPermitWos: pendingPermitWos.length, permitsByBranch: permitsByBranch,
    topTrailing: topTrailing,
    notStartedJobs: notStartedJobs.length, notStartedValue: notStartedValue,
    repsWithStuck: repsWithStuck, topStuckRep: topStuckRep,
    zombieCount: zombieJobs.length
  });

  // VAL-205: drift check
  driftCheck(totalWOs);

  return {
    _source: 'calculator/backlog.js v' + VERSION,
    title: 'Job Backlog & Production',
    subtitle: 'Live job-level backlog',
    headerMeta: {
      totalJobs: totalJobs,
      totalWOs: totalWOs,
      portfolioValue: round(portfolioValue),
      avgDaysInStatus: Math.round(avgDaysJob),
      lastBuild: new Date().toISOString()
    },
    tabs: [
      { id: 'index',       label: 'Overview' },
      { id: 'executive',   label: 'Executive Summary' },
      { id: 'partial',     label: 'Partially Complete' },
      { id: 'holds',       label: 'Holds & Blockers' },
      { id: 'trades',      label: 'Trade Analysis' },
      { id: 'branches',    label: 'Branch Drilldown' },
      { id: 'salespeople', label: 'Salesperson View' },
      { id: 'pipeline',    label: 'Backlog Pipeline' },
      { id: 'action-plan', label: 'Action Plan' }
    ],
    kpisExecutive: kpisExecutive,
    kpisRiskOpportunity: kpisRiskOpportunity,
    kpisPartial: kpisPartial,
    kpisHolds: kpisHolds,
    kpisSales: kpisSales,
    kpisBacklog: kpisBacklog,
    charts: charts,
    tables: tables,
    computedExtras: {
      permitsByBranch: permitsByBranch
    },
    actionPlan: actionPlan
  };
}

// ────────────────────────────────────────────────────────────
// Per-section builders
// ────────────────────────────────────────────────────────────
function buildCharts(d) {
  const out = [];

  // ch-wo-status (RULE-208 + RULE-223)
  out.push({
    id: 'ch-wo-status',
    labels: d.woStatusDist.map(function (x) { return x[0]; }),
    datasets: [{ label: 'Work Orders', data: d.woStatusDist.map(function (x) { return x[1]; }) }]
  });

  // ch-branch (stacked status by branch)
  const branchLabels = d.branchArr.map(function (b) { return b.branch; });
  out.push({
    id: 'ch-branch',
    labels: branchLabels,
    datasets: [
      { label: 'Completed', data: d.branchArr.map(function (b) { return b.completed; }) },
      { label: 'Open',      data: d.branchArr.map(function (b) { return b.wos - b.completed - b.onHold - b.rts - b.scheduled; }) },
      { label: 'On Hold',   data: d.branchArr.map(function (b) { return b.onHold; }) },
      { label: 'RTS',       data: d.branchArr.map(function (b) { return b.rts; }) },
      { label: 'Scheduled', data: d.branchArr.map(function (b) { return b.scheduled; }) }
    ]
  });

  // ch-wo-aging (avg + max days)
  out.push({
    id: 'ch-wo-aging',
    labels: d.woAgingArr.map(function (a) { return a.status; }),
    datasets: [
      { label: 'Avg Days', data: d.woAgingArr.map(function (a) { return Math.round(a.avg); }) },
      { label: 'Max Days', data: d.woAgingArr.map(function (a) { return Math.round(a.maxDays); }) }
    ]
  });

  // ch-trade (Completed vs Open by trade)
  out.push({
    id: 'ch-trade',
    labels: d.tradeArr.map(function (t) { return t.trade; }),
    datasets: [
      { label: 'Completed', data: d.tradeArr.map(function (t) { return t.completed; }) },
      { label: 'Open',      data: d.tradeArr.map(function (t) { return t.open; }) }
    ]
  });

  // ch-incomplete-status (open WO status mix on partial jobs)
  out.push({
    id: 'ch-incomplete-status',
    labels: d.openOnPartialStatus.map(function (x) { return x[0]; }),
    datasets: [{ label: 'WOs', data: d.openOnPartialStatus.map(function (x) { return x[1]; }) }]
  });

  // ch-incomplete-age (age buckets on partial-job WOs)
  out.push({
    id: 'ch-incomplete-age',
    labels: d.openOnPartialAge.map(function (x) { return x.label; }),
    datasets: [{ label: 'Open WOs', data: d.openOnPartialAge.map(function (x) { return x.count; }) }]
  });

  // ch-backlog (Not Started job count by branch)
  out.push({
    id: 'ch-backlog',
    labels: d.backlogArr.map(function (b) { return b.branch; }),
    datasets: [{ label: 'Jobs', data: d.backlogArr.map(function (b) { return b.jobs; }) }]
  });

  return out;
}

function buildTables(d) {
  const out = [];

  out.push({
    id: 'branchDetail',
    title: 'Branch detail',
    headers: ['Branch', 'WOs', 'Completed', 'On Hold', 'RTS', 'Scheduled', 'In Progress', 'RAS', 'Permits', 'Jobs', 'Value'],
    rows: d.branchArr.map(function (b) {
      return [b.branch, b.wos, b.completed, b.onHold, b.rts, b.scheduled, b.inProg, b.ras, b.permits, b.jobCount, round(b.value)];
    })
  });

  out.push({
    id: 'holdsBySubStatus',
    title: 'On-Hold sub-status breakdown',
    headers: ['Sub-Status', 'WOs', 'Avg Age (d)', 'Oldest (d)'],
    rows: d.holdsBySubArr.map(function (h) {
      return [h.subStatus, h.count, Math.round(h.avgAge), Math.round(h.oldest)];
    })
  });

  out.push({
    id: 'trailingTrades',
    title: 'Trailing trades on partial jobs',
    headers: ['Trade', 'Open WOs', 'Jobs Blocked', 'Trapped Value'],
    rows: d.trailingTrades.map(function (t) {
      return [t.trade, t.openWos, t.jobsBlocked, round(t.value)];
    })
  });

  out.push({
    id: 'gutterStatusBreakdown',
    title: 'Gutter WO status breakdown',
    headers: ['Status', 'Count'],
    rows: d.gutterStatusDist.map(function (x) { return [x[0], x[1]]; })
  });

  out.push({
    id: 'tradeDetail',
    title: 'Trade performance',
    headers: ['Trade', 'WOs', 'Completed', 'Open', 'Jobs', 'Value'],
    rows: d.tradeArr.map(function (t) {
      return [t.trade, t.wos, t.completed, t.open, t.jobCount, round(t.value)];
    })
  });

  out.push({
    id: 'specialtyWatch',
    title: 'Specialty trade watch',
    headers: ['Trade', 'WOs'],
    rows: d.specialtyWatchRows.map(function (s) { return [s.trade, s.wos]; })
  });

  out.push({
    id: 'salesTop15ByStuck',
    title: 'Top 15 salespeople by stuck value (>30d)',
    headers: ['Salesperson', 'WOs', 'Jobs', 'Stuck Value', 'Stale WOs', 'Branches'],
    rows: d.salesArr.slice(0, 15).map(function (s) {
      return [s.salesperson, s.wos, s.jobCount, round(s.staleValue), s.stale, s.branchCount];
    })
  });

  out.push({
    id: 'backlogByBranch',
    title: 'Backlog (not started) by branch',
    headers: ['Branch', 'Jobs', 'Value', 'Oldest (d)'],
    rows: d.backlogArr.map(function (b) {
      return [b.branch, b.jobs, round(b.value), Math.round(b.maxDays)];
    })
  });

  out.push({
    id: 'oldest15NotStarted',
    title: 'Oldest 15 not-started jobs',
    headers: ['Job #', 'Account', 'Branch', 'Trade', 'Sub-Status', 'Salesperson', 'Days', 'Contract'],
    rows: d.oldest15.map(function (j) {
      return [j.jobNum, j.account, j.branch, j.trade, j.subStatus, j.salesperson, Math.round(j.daysInStatus), round(j.contract)];
    })
  });

  return out;
}

// RULE-226: programmatic action plan
function buildActionPlan(d) {
  const strategicGoal = 'Convert ' + fmtMoneyShort(d.partialValue) + ' of trapped partial-job revenue into billable revenue, reduce '
    + fmtMoneyShort(d.revenueAtRisk) + ' of at-risk contract value, and clear the not-started backlog without adding headcount.';

  const immediate = [];
  if (d.rtsOnPartial > 0) {
    immediate.push('Dispatch the ' + d.rtsOnPartial + ' RTS WOs sitting on partial jobs. No blocker, no hold, just dispatch.');
  }
  if (d.rasCount > 0) {
    immediate.push('Re-dispatch the ' + d.rasCount + ' RAS WOs (oldest at ' + Math.round(d.rasMaxDays) + ' days). These are pure re-work fastballs.');
  }
  if (d.topTrailing && d.topTrailing.openWos > 0) {
    immediate.push(d.topTrailing.trade + ' sweep: ' + d.topTrailing.openWos + ' open WOs across '
      + d.topTrailing.jobsBlocked + ' partial jobs blocking ' + fmtMoneyShort(d.topTrailing.value)
      + '. Highest single-trade leverage in the book.');
  }
  if (d.permitsByBranch.length && d.permitsByBranch[0].permits > 0) {
    const top = d.permitsByBranch[0];
    immediate.push(top.branch + ' permit sweep: ' + top.permits + ' pending-permit WOs concentrated at one branch. AHJ-relations problem, not a company-wide one.');
  }
  if (d.zombieCount > 0) {
    immediate.push('Close out the ' + d.zombieCount + ' zombie jobs (all WOs Completed, parent still In Progress). Pure paperwork.');
  }

  const structural = [
    'Stand up a partial-job dispatch SLA: any job that crosses 14 days with at least one Completed WO and at least one open WO triggers a daily stand-up review.',
    'Add a Permit Aging escalation path: any pending-permit WO over 14 days routes to the branch GM with a daily AHJ touchpoint requirement.',
    'Trade-specific dispatch surge for the dominant trailing trade (currently ' + (d.topTrailing.trade || 'TBD') + '): evaluate whether sub-fleet expansion or schedule re-balance moves the number faster than headcount.',
    'Pending Sales disposition cadence: weekly meeting with the top stuck reps to triage. Most are dispositions, not deals to lose.',
    d.notStartedJobs > 0
      ? 'Not-Started intake review: ' + d.notStartedJobs + ' jobs (' + fmtMoneyShort(d.notStartedValue) + ') sit waiting. Audit the dispatch trigger so jobs do not languish post-signature.'
      : null
  ].filter(Boolean);

  const cadence = [
    'Weekly Monday Action Plan refresh: re-baseline the Immediate list every 7 days.',
    'Daily branch standup includes the Permit Aging report and any RAS WO over 30 days.',
    'Bi-weekly partial-job review: walk the trailing-trades table with the production scheduler.',
    'Monthly Salesperson View read: surface the top stuck reps to sales leadership for joint disposition.',
    'Quarterly Trade Analysis read: validate that Roofing-to-Gutters cadence still matches install volume.'
  ];

  const bottomLine = 'The book is healthy in volume terms. The drag is in the middle of the funnel: partial jobs trap '
    + fmtMoneyShort(d.partialValue) + ', holds are concentrated in permits, and the not-started cohort needs an intake audit. '
    + 'The fix list is operational, not strategic. The top three workstreams (RTS dispatch, RAS re-dispatch, permit sweep) move the number without adding headcount.';

  return {
    strategicGoal: strategicGoal,
    immediate: immediate,
    structural: structural,
    cadence: cadence,
    bottomLine: bottomLine
  };
}

// ────────────────────────────────────────────────────────────
// Drift check (VAL-205)
// ────────────────────────────────────────────────────────────
function driftCheck(currentWOs) {
  if (process.env.FZ_SKIP_DRIFT_CHECK === '1') return;
  try {
    const prevPath = path.join(__dirname, '..', 'redesign', 'shared', 'extracted-data.json');
    if (!fs.existsSync(prevPath)) return;
    const prev = JSON.parse(fs.readFileSync(prevPath, 'utf8'));
    const prevBL = prev.BACKLOG;
    if (!prevBL || !prevBL.headerMeta || !prevBL.headerMeta.totalWOs) return;
    const prevWOs = prevBL.headerMeta.totalWOs;
    if (!prevWOs) return;
    const drift = Math.abs(currentWOs - prevWOs) / prevWOs;
    if (drift > 0.30) {
      throw new Error('VAL-205: Total WO count drifted ' + (drift * 100).toFixed(0)
        + '% from previous build (was ' + prevWOs + ', now ' + currentWOs
        + '). Set FZ_SKIP_DRIFT_CHECK=1 to bypass.');
    }
  } catch (e) {
    if (e && e.message && e.message.startsWith('VAL-')) throw e;
  }
}

// ────────────────────────────────────────────────────────────
// Tiny utilities (kept local to avoid lib dependencies)
// ────────────────────────────────────────────────────────────
function groupBy(arr, fn) {
  const out = {};
  arr.forEach(function (r) {
    const k = fn(r);
    if (!out[k]) out[k] = [];
    out[k].push(r);
  });
  return out;
}

function countBy(arr, fn) {
  const out = {};
  arr.forEach(function (r) {
    const k = fn(r);
    out[k] = (out[k] || 0) + 1;
  });
  return Object.keys(out).map(function (k) { return [k, out[k]]; }).sort(function (a, b) { return b[1] - a[1]; });
}

// Fallback to existing snapshot when no inputs are dropped.
function readFromExtracted() {
  const extractedPath = path.join(__dirname, '..', 'redesign', 'shared', 'extracted-data.json');
  if (!fs.existsSync(extractedPath)) {
    return emptyShape('no extracted-data.json present and no inputs to compute from');
  }
  const extracted = JSON.parse(fs.readFileSync(extractedPath, 'utf8'));
  if (extracted && extracted.BACKLOG) return extracted.BACKLOG;
  return emptyShape('extracted-data.json has no BACKLOG key');
}

// Empty but schema-valid shape so the dashboard can render even before
// the first real Salesforce export lands.
function emptyShape(reason) {
  return {
    _source: 'calculator/backlog.js v' + VERSION + ' (stub: ' + reason + ')',
    title: 'Job Backlog & Production',
    subtitle: 'Awaiting Salesforce export',
    headerMeta: { totalJobs: 0, totalWOs: 0, portfolioValue: 0, avgDaysInStatus: 0, lastBuild: new Date().toISOString() },
    tabs: [
      { id: 'index',       label: 'Overview' },
      { id: 'executive',   label: 'Executive Summary' },
      { id: 'partial',     label: 'Partially Complete' },
      { id: 'holds',       label: 'Holds & Blockers' },
      { id: 'trades',      label: 'Trade Analysis' },
      { id: 'branches',    label: 'Branch Drilldown' },
      { id: 'salespeople', label: 'Salesperson View' },
      { id: 'pipeline',    label: 'Backlog Pipeline' },
      { id: 'action-plan', label: 'Action Plan' }
    ],
    kpisExecutive: [],
    kpisRiskOpportunity: [],
    kpisPartial: [],
    kpisHolds: [],
    kpisSales: [],
    kpisBacklog: [],
    charts: [],
    tables: [],
    computedExtras: { permitsByBranch: [] },
    actionPlan: { strategicGoal: 'No data yet.', immediate: [], structural: [], cadence: [], bottomLine: '' }
  };
}

function validate(out) {
  const errors = [];
  if (!out) errors.push('output is null');
  if (out && !out.headerMeta) errors.push('missing headerMeta');
  if (out && !out.kpisExecutive) errors.push('missing kpisExecutive');
  if (out && !out.charts) errors.push('missing charts');
  if (out && !out.tables) errors.push('missing tables');
  if (out && !out.actionPlan) errors.push('missing actionPlan');
  return errors;
}

module.exports = { id: PROJECT_ID, version: VERSION, run, validate };
