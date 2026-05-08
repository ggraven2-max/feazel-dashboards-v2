/* ============================================================
   FEAZEL CALCULATOR · Service Revenue Forecast (Service-v1)
   ----------------------------------------------------------------
   Parses three inputs from inputs/service/revenue-forecast/:
     1. 2026 Service Budget.xlsx           (annual + monthly plan)
     2. ServiceInvoicedYTDResults*.csv     (NetSuite per-invoice export)
     3. GregProfitabilityServiceResults*.csv  (cost mix per job)

   Emits the same REVENUE_FORECAST shape as MF (so page-defs can
   share most of the layout), with a service-specific narrative.
   No Commercial Forecasting Report, no Lisa monthly schedules: the
   Service book is a fee-for-service model with shorter cycle times,
   so the forecast is anchored on the annualized run-rate against
   the budget plan.
   ============================================================ */
const path = require('path');
const fs = require('fs');
const io = require('./lib/io');
const netsuite = require('./lib/netsuite-invoices');

const PROJECT_ID = 'revenue-forecast';
const SERVICE_VERSION = 'Service-v1.0-2026-05-06';
const FY = 2026;

const MONTH_LONG = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const MONTH_SHORT = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

// ---------- helpers ----------
function parseDate(v) {
  if (!v) return null;
  if (v instanceof Date) return isNaN(v.getTime()) ? null : v;
  const s = String(v).trim(); if (!s) return null;
  let d = new Date(s); if (!isNaN(d.getTime())) return d;
  const m = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2,4})/);
  if (m) {
    const yr = m[3].length === 2 ? 2000 + parseInt(m[3], 10) : parseInt(m[3], 10);
    d = new Date(yr, parseInt(m[1], 10) - 1, parseInt(m[2], 10));
    if (!isNaN(d.getTime())) return d;
  }
  return null;
}
function parseNumber(v) {
  if (v == null) return 0;
  if (typeof v === 'number') return isNaN(v) ? 0 : v;
  const s = String(v).replace(/[$,\s"]/g, '');
  const n = parseFloat(s);
  return isNaN(n) ? 0 : n;
}
function fmtMoney(v) {
  if (!v && v !== 0) return '$0';
  if (v >= 1e9) return '$' + (v / 1e9).toFixed(2).replace(/\.?0+$/, '') + 'B';
  if (v >= 1e6) return '$' + (v / 1e6).toFixed(2).replace(/\.?0+$/, '') + 'M';
  if (v >= 1e3) return '$' + (v / 1e3).toFixed(0) + 'K';
  return '$' + Math.round(v).toLocaleString();
}
function round(v) { return Math.round(v * 100) / 100; }
function round1(v) { return Math.round(v * 10) / 10; }

// ---------- input discovery ----------
function findFiles(inputDir) {
  // io.listInputs returns newest-first by mtime; take the FIRST match for
  // each role so a fresh upload supersedes yesterday's file.
  const all = io.listInputs(inputDir);
  const out = { budget: null, profitability: null, jobsWosSas: null };
  for (const f of all) {
    const lower = f.name.toLowerCase();
    if (!out.budget && lower.includes('budget') && /\.xlsx?$/i.test(lower)) out.budget = f;
    else if (!out.profitability && lower.includes('profitability') && /\.csv$/i.test(lower)) out.profitability = f;
    else if (!out.jobsWosSas && lower.includes('jobs with wos') && /\.xlsx?$/i.test(lower)) out.jobsWosSas = f;
  }
  return out;
}

// ---------- Jobs/WOs/SAs parser for the install↔service overlap analysis ----------
// Parses the Salesforce "Jobs with WOs and SAs" report. Each row is one Work
// Order + Service Appointment. We group by Account Name to find install jobs
// whose customer ALSO has Repair WOs (i.e. the install generated follow-up
// service work). The relationship is account-to-account, not job-to-job, since
// a single Salesforce Job Number is scoped to a single service type.
function parseJobsWosSas(file) {
  if (!file) return null;
  const xlsx = require('xlsx');
  const wb = xlsx.readFile(file.fullPath, { cellDates: false });
  const sheet = wb.Sheets[wb.SheetNames[0]];
  const rows = xlsx.utils.sheet_to_json(sheet, { header: 1, defval: null });
  if (!rows.length) return null;

  // Header row + index lookup
  const headers = rows[0].map(h => String(h || '').trim());
  const idx = (name) => headers.findIndex(h => h.toLowerCase() === name.toLowerCase());
  const cAccount = idx('Account: Account Name');
  const cJobType = idx('Job Type');
  const cServiceType = idx('Service Type');
  const cServiceObject = idx('Service Object');
  const cSalesperson = idx('Salesperson: Full Name');
  const cAmount = idx('Final Contract Amount');
  const cWO = idx('Work Order Number');
  const cSAStart = idx('Service Appointment Start Date/Time');
  const cSAEnd = idx('Service Appointment End Date/Time');
  const cBranch = idx('Branch Location to Service');
  const cJob = idx('Job Number');

  function parseDt(v) {
    if (!v) return null;
    if (v instanceof Date) return isNaN(v.getTime()) ? null : v;
    const s = String(v).trim(); if (!s) return null;
    // "M/D/YYYY h:MM AM/PM" or "M/D/YYYY HH:MM" or "M/D/YYYY"
    let m = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})(?:\s+(\d{1,2}):(\d{2})(?:\s*(AM|PM))?)?/i);
    if (!m) return null;
    const yr = +m[3], mo = +m[1] - 1, da = +m[2];
    let hr = m[4] ? +m[4] : 0, mi = m[5] ? +m[5] : 0;
    if (m[6]) {
      const ap = m[6].toUpperCase();
      if (ap === 'PM' && hr < 12) hr += 12;
      if (ap === 'AM' && hr === 12) hr = 0;
    }
    const d = new Date(yr, mo, da, hr, mi);
    return isNaN(d.getTime()) ? null : d;
  }
  function hours(s, e) {
    const ds = parseDt(s), de = parseDt(e);
    if (!ds || !de) return null;
    const h = (de - ds) / 3600000;
    return h > 0 ? h : null;
  }
  function num(v) {
    if (v == null) return 0;
    const n = parseFloat(String(v).replace(/[$,\s]/g, ''));
    return isNaN(n) ? 0 : n;
  }

  // Branch normalization same as everywhere else
  const BRANCH_REMAP = { 'detroit metro': 'Detroit', 'nova': 'DC Metro' };
  const normBranch = (loc) => {
    if (!loc) return '(unassigned)';
    const k = String(loc).trim().toLowerCase();
    return BRANCH_REMAP[k] || String(loc).trim();
  };

  // Walk the rows. Track per-account and per-job state.
  const accountInstalls = new Map();   // account → Set(jobNumber)
  const accountRepairs = new Map();    // account → array of repair WO records
  const jobMeta = new Map();           // jobNumber → { branch, trade, salesperson, account, amount }
  let totalRows = 0;

  for (let i = 1; i < rows.length; i++) {
    const r = rows[i];
    if (!r) continue;
    totalRows++;
    const account = String(r[cAccount] || '').trim();
    const stype = String(r[cServiceType] || '').trim();
    const trade = String(r[cServiceObject] || '').trim();
    const branch = normBranch(r[cBranch]);
    const jn = String(r[cJob] || '').trim();
    const sp = String(r[cSalesperson] || '').trim();
    const amt = num(r[cAmount]);
    if (!account || !jn) continue;

    if (!jobMeta.has(jn)) {
      jobMeta.set(jn, {
        jobNumber: jn,
        account,
        branch,
        trade,
        salesperson: sp,
        amount: amt,
        serviceType: stype,
        jobType: String(r[cJobType] || '').trim()
      });
    } else {
      // Carry the largest contract amount we've seen on this job (job-level rollup)
      const m = jobMeta.get(jn);
      if (amt > m.amount) m.amount = amt;
    }

    if (stype === 'Install') {
      if (!accountInstalls.has(account)) accountInstalls.set(account, new Set());
      accountInstalls.get(account).add(jn);
    } else if (stype === 'Repair') {
      if (!accountRepairs.has(account)) accountRepairs.set(account, []);
      const h = hours(r[cSAStart], r[cSAEnd]);
      accountRepairs.get(account).push({
        wo: r[cWO], jobNumber: jn, account, branch, trade,
        amount: amt, hours: h, salesperson: sp
      });
    }
  }

  // Build the headline metrics
  const allInstallJobs = new Set();
  accountInstalls.forEach(set => set.forEach(jn => allInstallJobs.add(jn)));
  const installAccountsSet = new Set(accountInstalls.keys());
  const repairAccountsSet = new Set(accountRepairs.keys());

  // Install jobs whose ACCOUNT also has repair WOs
  const overlapInstallJobs = [];
  installAccountsSet.forEach(acct => {
    if (repairAccountsSet.has(acct)) {
      accountInstalls.get(acct).forEach(jn => overlapInstallJobs.push(jn));
    }
  });

  // Repair WOs at install accounts
  const repairsAtInstallAccts = [];
  installAccountsSet.forEach(acct => {
    (accountRepairs.get(acct) || []).forEach(w => repairsAtInstallAccts.push(w));
  });

  const totalRepairWOs = repairsAtInstallAccts.length;
  const totalRepairAmt = repairsAtInstallAccts.reduce((s, w) => s + (w.amount || 0), 0);
  const wosWithHours = repairsAtInstallAccts.filter(w => w.hours != null);
  const totalHours = wosWithHours.reduce((s, w) => s + w.hours, 0);

  // Hours-per-WO distribution buckets
  const buckets = { '<1h': 0, '1-2h': 0, '2-4h': 0, '4-8h': 0, '>8h': 0 };
  wosWithHours.forEach(w => {
    if (w.hours < 1) buckets['<1h']++;
    else if (w.hours < 2) buckets['1-2h']++;
    else if (w.hours < 4) buckets['2-4h']++;
    else if (w.hours < 8) buckets['4-8h']++;
    else buckets['>8h']++;
  });

  // Branch breakdown
  const brAgg = new Map();
  function brEntry(b) {
    if (!brAgg.has(b)) brAgg.set(b, { branch: b, installJobs: 0, installJobsWithSvc: 0,
                                       repairWOs: 0, hours: 0, repairAmt: 0 });
    return brAgg.get(b);
  }
  installAccountsSet.forEach(acct => {
    const has = repairAccountsSet.has(acct);
    accountInstalls.get(acct).forEach(jn => {
      const m = jobMeta.get(jn);
      if (!m) return;
      const e = brEntry(m.branch);
      e.installJobs++;
      if (has) e.installJobsWithSvc++;
    });
    if (has) {
      (accountRepairs.get(acct) || []).forEach(w => {
        const e = brEntry(w.branch);
        e.repairWOs++;
        if (w.hours != null) e.hours += w.hours;
        e.repairAmt += (w.amount || 0);
      });
    }
  });
  const branchRows = Array.from(brAgg.values())
    .sort((a, b) => b.installJobsWithSvc - a.installJobsWithSvc);

  // Trade breakdown
  const trAgg = new Map();
  function trEntry(t) {
    if (!trAgg.has(t)) trAgg.set(t, { trade: t, installJobs: 0, installJobsWithSvc: 0,
                                       repairWOs: 0, hours: 0, repairAmt: 0 });
    return trAgg.get(t);
  }
  installAccountsSet.forEach(acct => {
    const has = repairAccountsSet.has(acct);
    accountInstalls.get(acct).forEach(jn => {
      const m = jobMeta.get(jn); if (!m) return;
      const e = trEntry(m.trade || '(unknown)');
      e.installJobs++;
      if (has) e.installJobsWithSvc++;
    });
    if (has) {
      (accountRepairs.get(acct) || []).forEach(w => {
        const e = trEntry(w.trade || '(unknown)');
        e.repairWOs++;
        if (w.hours != null) e.hours += w.hours;
        e.repairAmt += (w.amount || 0);
      });
    }
  });
  const tradeRows = Array.from(trAgg.values())
    .sort((a, b) => b.installJobsWithSvc - a.installJobsWithSvc);

  // Account-level rollup: how many service hours/$ at each account that has installs
  const acctRows = [];
  installAccountsSet.forEach(acct => {
    const installJobs = Array.from(accountInstalls.get(acct));
    const installAmt = installJobs.reduce((s, jn) => s + (jobMeta.get(jn) ? jobMeta.get(jn).amount : 0), 0);
    const repairs = accountRepairs.get(acct) || [];
    const acctHours = repairs.reduce((s, w) => s + (w.hours || 0), 0);
    const acctRepairAmt = repairs.reduce((s, w) => s + (w.amount || 0), 0);
    acctRows.push({
      account: acct,
      installJobs: installJobs.length,
      installAmt,
      repairWOs: repairs.length,
      hours: acctHours,
      repairAmt: acctRepairAmt
    });
  });
  acctRows.sort((a, b) => b.hours - a.hours);

  // Top install jobs by accompanying service hours at their account.
  // Groups the same account's hours across all its install jobs (so the 5 largest
  // Priestley install jobs each get the same 293h figure attached). Useful for
  // identifying which install dollars are tied to high-service-volume customers.
  const topInstallJobRows = [];
  installAccountsSet.forEach(acct => {
    const repairs = accountRepairs.get(acct) || [];
    if (!repairs.length) return;
    const acctHours = repairs.reduce((s, w) => s + (w.hours || 0), 0);
    const acctRepairAmt = repairs.reduce((s, w) => s + (w.amount || 0), 0);
    accountInstalls.get(acct).forEach(jn => {
      const m = jobMeta.get(jn); if (!m) return;
      topInstallJobRows.push({
        jobNumber: jn,
        account: acct,
        branch: m.branch,
        trade: m.trade,
        salesperson: m.salesperson,
        installAmt: m.amount,
        acctRepairWOs: repairs.length,
        acctHours,
        acctRepairAmt
      });
    });
  });
  topInstallJobRows.sort((a, b) => b.acctHours - a.acctHours);

  return {
    sourceFile: file.name,
    rowCount: totalRows,
    totals: {
      installJobs: allInstallJobs.size,
      installJobsWithSvc: overlapInstallJobs.length,
      installAccounts: installAccountsSet.size,
      installAccountsWithSvc: Array.from(installAccountsSet).filter(a => repairAccountsSet.has(a)).length,
      repairWOsAtInstallAccts: totalRepairWOs,
      hoursAtInstallAccts: Math.round(totalHours * 10) / 10,
      avgHoursPerWO: wosWithHours.length ? Math.round(totalHours / wosWithHours.length * 100) / 100 : 0,
      repairAmtAtInstallAccts: Math.round(totalRepairAmt)
    },
    buckets,
    branchRows,
    tradeRows,
    accountRows: acctRows.slice(0, 25),     // top 25 accounts
    installJobRows: topInstallJobRows.slice(0, 25)  // top 25 install jobs
  };
}



// ---------- budget parser (mirrors MF parseBudget) ----------
function parseBudget(file) {
  const xlsx = require('xlsx');
  const wb = xlsx.readFile(file.fullPath, { cellDates: false });
  const sheet = wb.Sheets[wb.SheetNames[0]];
  const rows = xlsx.utils.sheet_to_json(sheet, { header: 1, defval: null });
  for (const row of rows) {
    for (let i = 0; i < row.length; i++) {
      const cell = row[i];
      if (!cell) continue;
      const label = String(cell).toLowerCase();
      if (label.includes('total') && label.includes('40000') && label.includes('revenue')) {
        const monthly = row.slice(i + 1, i + 13).map(v => parseNumber(v));
        const explicitAnnual = parseNumber(row[i + 13]);
        if (monthly.length === 12) {
          const summed = monthly.reduce((s, v) => s + v, 0);
          let annual = summed;
          let discrepancy = 0;
          if (explicitAnnual && explicitAnnual > 0) {
            discrepancy = explicitAnnual - summed;
            if (Math.abs(discrepancy) / explicitAnnual <= 0.1) annual = explicitAnnual;
          }
          return { monthly, annual, summedMonthly: summed, explicitAnnual, discrepancy };
        }
      }
    }
  }
  return null;
}

// ---------- profitability parser (same shape as MF) ----------
function parseProfitability(file) {
  if (!file) return null;
  const text = fs.readFileSync(file.fullPath, 'utf8').replace(/^﻿/, '');
  const lines = text.split(/\r?\n/);
  if (!lines.length) return null;
  function splitCsv(line) {
    const out = []; let cur = ''; let q = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (q) {
        if (ch === '"') { if (line[i + 1] === '"') { cur += '"'; i++; } else q = false; }
        else cur += ch;
      } else {
        if (ch === '"') q = true;
        else if (ch === ',') { out.push(cur); cur = ''; }
        else cur += ch;
      }
    }
    out.push(cur);
    return out;
  }
  const headers = splitCsv(lines[0]).map(h => h.trim());
  const idx = (n) => headers.findIndex(h => h.toLowerCase() === n.toLowerCase());
  const cStatus = idx('Feazel Status');
  const cDate   = idx('Date');
  const cClass  = idx('Class');
  const cLoc    = idx('Location');
  const cTrade  = idx('Trade');
  const cContract = idx('Contract Amount');
  const cRev    = idx('Revenue (Stored)');
  const cExp    = idx('Total Expenses (Stored)');
  const cMat    = idx('Material Expenses (stored)');
  const cLab    = idx('Labor Expenses (stored)');
  const cOth    = idx('Other Expenses (stored)');
  const cCom1   = idx('Commission (Rep 1)');
  const cCom2   = idx('Commission (Rep 2)');
  const VALID = new Set(['invoiced', 'closed and capped out']);
  const jobs = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    if (!line || !line.trim()) continue;
    const cells = splitCsv(line);
    const status = (cells[cStatus] || '').trim().toLowerCase();
    if (!VALID.has(status)) continue;
    const dt = parseDate(cells[cDate]);
    const year = dt ? dt.getFullYear() : null;
    const cls = String(cells[cClass] || '').trim();
    const jobType = cls.includes(':') ? cls.split(':').slice(1).join(':').trim() : (cls || '(unclassified)');
    const branch = String(cells[cLoc] || '(unassigned)').trim();
    const trade  = String(cells[cTrade] || '(unassigned)').trim();
    const revenue = parseNumber(cells[cRev]);
    if (revenue <= 0) continue;
    jobs.push({
      year, jobType, branch, trade,
      contract: parseNumber(cells[cContract]),
      revenue,
      expenses: parseNumber(cells[cExp]),
      material: parseNumber(cells[cMat]),
      labor: parseNumber(cells[cLab]),
      other: parseNumber(cells[cOth]),
      commission: parseNumber(cells[cCom1]) + parseNumber(cells[cCom2]),
      grossProfit: revenue - parseNumber(cells[cExp])
    });
  }
  function aggregate(set) {
    const out = { jobs: set.length, revenue: 0, expenses: 0, gross_profit: 0,
                  material: 0, labor: 0, other: 0, commission: 0, contract: 0 };
    set.forEach(j => {
      out.revenue += j.revenue; out.expenses += j.expenses; out.gross_profit += j.grossProfit;
      out.material += j.material; out.labor += j.labor; out.other += j.other;
      out.commission += j.commission; out.contract += j.contract;
    });
    out.gp_pct = out.revenue > 0 ? (out.gross_profit / out.revenue * 100) : 0;
    return out;
  }
  function byKey(set, key) {
    const map = new Map();
    set.forEach(j => {
      const k = j[key] || '(unassigned)';
      if (!map.has(k)) map.set(k, []);
      map.get(k).push(j);
    });
    return Array.from(map.entries()).map(([k, set]) => Object.assign({ key: k }, aggregate(set)));
  }
  const overall = aggregate(jobs);
  const y2025 = aggregate(jobs.filter(j => j.year === 2025));
  const y2026 = aggregate(jobs.filter(j => j.year === FY));
  return {
    sourceFile: file.name,
    jobsParsed: jobs.length,
    invoiced: overall,
    invoiced_2025: y2025,
    invoiced_2026: y2026,
    byJobType_2026: byKey(jobs.filter(j => j.year === FY), 'jobType').sort((a, b) => b.revenue - a.revenue),
    byJobType_2025: byKey(jobs.filter(j => j.year === 2025), 'jobType').sort((a, b) => b.revenue - a.revenue),
    byMarket_2026:  byKey(jobs.filter(j => j.year === FY), 'branch').sort((a, b) => b.revenue - a.revenue),
    byMarket_2025:  byKey(jobs.filter(j => j.year === 2025), 'branch').sort((a, b) => b.revenue - a.revenue),
    byTrade_2026:   byKey(jobs.filter(j => j.year === FY), 'trade').sort((a, b) => b.revenue - a.revenue)
  };
}

// ---------- main ----------
function run(opts) {
  opts = opts || {};
  const inputDir = opts.inputDir || path.join(__dirname, '..', 'inputs', 'service', PROJECT_ID);

  const files = findFiles(inputDir);
  console.log('  [service-revenue] file scan:');
  console.log('    budget        : ' + (files.budget ? files.budget.name : 'MISSING'));
  console.log('    profitability : ' + (files.profitability ? files.profitability.name : 'optional, missing'));

  // ---- Jobs/WOs/SAs (install ↔ service overlap) ----
  const wos = files.jobsWosSas ? parseJobsWosSas(files.jobsWosSas) : null;
  if (wos) {
    console.log('  [service-revenue] install↔service: ' + wos.totals.installJobsWithSvc + ' of ' +
      wos.totals.installJobs + ' install jobs (' +
      (wos.totals.installJobs > 0 ? (wos.totals.installJobsWithSvc / wos.totals.installJobs * 100).toFixed(1) : '0') + '%) tied to repair WOs · ' +
      wos.totals.repairWOsAtInstallAccts + ' WOs / ' + wos.totals.hoursAtInstallAccts + ' hrs / ' +
      fmtMoney(wos.totals.repairAmtAtInstallAccts));
  }

  // ---- profitability ----
  const profit = files.profitability ? parseProfitability(files.profitability) : null;
  if (profit) {
    console.log('  [service-revenue] profitability: ' + profit.jobsParsed + ' invoiced/closed jobs · ' +
      'overall GM ' + profit.invoiced.gp_pct.toFixed(1) + '% · ' +
      '2026 GM ' + profit.invoiced_2026.gp_pct.toFixed(1) + '% (' + profit.invoiced_2026.jobs + ' jobs, ' +
      fmtMoney(profit.invoiced_2026.revenue) + ' revenue)');
  }

  // ---- budget ----
  const budget = files.budget ? parseBudget(files.budget) : null;
  const annualBudget = budget ? budget.annual : 6_800_000;
  const monthlyBudget = budget ? budget.monthly : new Array(12).fill(annualBudget / 12);
  if (budget && Math.abs(budget.discrepancy) > 1) {
    console.log('  [service-revenue] BUDGET WARNING: monthly cells sum to $' +
      Math.round(budget.summedMonthly).toLocaleString() +
      ' but "Total 2026" cell shows $' + Math.round(budget.explicitAnnual).toLocaleString() +
      ' (diff $' + Math.round(budget.discrepancy).toLocaleString() + ').');
  }

  // ---- NetSuite invoices ----
  const ns = netsuite.parseInvoices(inputDir);
  if (ns) {
    console.log('  [service-revenue] NetSuite override: ' + ns.invoiceCount + ' invoices totaling ' +
      fmtMoney(ns.totalInvoiced) + ' from ' + ns.fileName);
  } else {
    console.log('  [service-revenue] no NetSuite invoice CSV found; revenue will be zero');
  }

  // ---- monthly summary ----
  const monthlyActual = ns && ns.monthly ? ns.monthly.slice() : new Array(12).fill(0);
  const ytdInvoiced = ns ? ns.totalInvoiced : 0;
  const today = new Date();
  const monthsElapsed = today.getFullYear() === FY ? today.getMonth() + 1 : 12;

  // monthRevenue with month name keys (jan, feb, ...)
  const monthRevenue = {};
  MONTH_LONG.forEach((name, i) => {
    monthRevenue[name.toLowerCase()] = {
      label: name,
      invoiced: monthlyActual[i] || 0,
      budget: monthlyBudget[i] || 0,
      gap: (monthlyActual[i] || 0) - (monthlyBudget[i] || 0)
    };
  });

  // ---- Two annual projections ----
  const annualPace = monthsElapsed > 0 ? (ytdInvoiced / monthsElapsed) * 12 : 0;
  const remainingPlan = monthlyBudget.slice(monthsElapsed).reduce((s, v) => s + v, 0);
  const planRestForecast = ytdInvoiced + remainingPlan;
  const ytdPlan = monthlyBudget.slice(0, monthsElapsed).reduce((s, v) => s + v, 0);
  const ytdGap = ytdInvoiced - ytdPlan;
  const gapToBudget = annualPace - annualBudget;
  const upliftNeeded = (gapToBudget < 0 && annualBudget > 0) ? Math.abs(gapToBudget) / annualBudget : 0;

  // ---- KPIs ----
  const kpis = [
    { label: 'Invoiced YTD', value: fmtMoney(ytdInvoiced),
      sub: monthsElapsed + ' months elapsed · ' + (ns ? ns.invoiceCount + ' invoices' : 'no NetSuite data') },
    { label: 'YTD vs Plan', value: (ytdGap >= 0 ? '+' : '') + fmtMoney(ytdGap),
      sub: 'Plan YTD: ' + fmtMoney(ytdPlan), trend: ytdGap >= 0 ? 'positive' : 'negative' },
    { label: 'Annualized Pace', value: fmtMoney(annualPace),
      sub: 'YTD × 12/' + monthsElapsed, trend: annualPace >= annualBudget ? 'positive' : 'negative' },
    { label: 'Plan-Rest Forecast', value: fmtMoney(planRestForecast),
      sub: 'YTD actual + remaining-month plan' },
    { label: 'Annual Budget', value: fmtMoney(annualBudget),
      sub: '2026 Service plan' },
    { label: 'Forecast vs Budget', value: (gapToBudget >= 0 ? '+' : '') + fmtMoney(gapToBudget),
      sub: ((upliftNeeded * 100) || 0).toFixed(1) + '% uplift needed', trend: gapToBudget >= 0 ? 'positive' : 'negative' },
    { label: 'Last Month Revenue', value: monthsElapsed > 0 ? fmtMoney(monthlyActual[monthsElapsed - 1]) : '$0',
      sub: monthsElapsed > 0 ? MONTH_LONG[monthsElapsed - 1] + ' ' + FY : '' },
    { label: 'Last Month vs Plan', value: monthsElapsed > 0
        ? ((monthlyActual[monthsElapsed - 1] - monthlyBudget[monthsElapsed - 1] >= 0 ? '+' : '') +
           fmtMoney(monthlyActual[monthsElapsed - 1] - monthlyBudget[monthsElapsed - 1]))
        : '$0',
      sub: 'Plan: ' + (monthsElapsed > 0 ? fmtMoney(monthlyBudget[monthsElapsed - 1]) : '$0') }
  ];

  // ---- Tables ----
  const monthlyTable = {
    id: 'sv-monthly-rollup',
    title: 'Monthly Roll-Up',
    headers: ['Month',
      { label: 'Revenue', num: true },
      { label: 'Plan', num: true },
      { label: 'Gap', num: true },
      { label: '# Inv.', num: true }
    ],
    rows: MONTH_LONG.map((name, i) => {
      const rev = monthlyActual[i] || 0;
      const plan = monthlyBudget[i] || 0;
      const gap = rev - plan;
      const count = (ns && ns.byMonth && ns.byMonth[FY + '-' + String(i + 1).padStart(2, '0')]) ?
        ns.byMonth[FY + '-' + String(i + 1).padStart(2, '0')].count : 0;
      return [name, fmtMoney(rev), fmtMoney(plan), (gap >= 0 ? '+' : '') + fmtMoney(gap), count];
    })
  };

  // YTD by branch (from NetSuite invoiced)
  const branchTable = {
    id: 'sv-by-branch',
    title: 'YTD Invoiced by Branch',
    headers: ['Branch',
      { label: 'Invoiced', num: true },
      { label: '# Inv.', num: true }
    ],
    rows: ns && ns.byBranch
      ? Object.entries(ns.byBranch)
          .sort((a, b) => b[1].invoiced - a[1].invoiced)
          .map(([name, agg]) => [name, fmtMoney(agg.invoiced), agg.count])
      : []
  };

  // ---- Charts ----
  const charts = [
    {
      id: 'sv-rev-vs-plan',
      title: 'Monthly Revenue vs Plan',
      labels: MONTH_LONG.map(m => m.slice(0, 3) + ' ' + FY),
      datasets: [
        { type: 'bar', label: 'Invoiced',
          data: monthlyActual,
          backgroundColor: '#16a085' },
        { type: 'bar', label: 'Plan',
          data: monthlyBudget,
          backgroundColor: '#1f2d4b' }
      ],
      config: {
        type: 'bar',
        data: {
          labels: MONTH_LONG.map(m => m.slice(0, 3) + ' ' + FY),
          datasets: [
            { label: 'Invoiced', data: monthlyActual, backgroundColor: '#16a085', borderRadius: 4 },
            { label: 'Plan',     data: monthlyBudget, backgroundColor: '#1f2d4b', borderRadius: 4 }
          ]
        }
      }
    }
  ];

  return {
    _source: 'calculator/revenue-forecast-service.js ' + SERVICE_VERSION,
    title: 'Service Revenue Forecast',
    subtitle: 'Service-v1 · Budget-anchored forecast · Data through ' +
      (ns && ns.latestDate ? ns.latestDate.toISOString().slice(0, 10) : new Date().toISOString().slice(0, 10)),
    runDate: new Date().toISOString().slice(0, 10),
    methodologyLock: {
      version: SERVICE_VERSION,
      lockedOn: '2026-05-06',
      items: [
        'Annual budget $' + (annualBudget / 1e6).toFixed(2) + 'M (sourced from 2026 Service Budget XLSX)',
        'Revenue = NetSuite invoiced revenue (Type = Invoice, Date in FY)',
        'Annualized pace = (YTD revenue / months elapsed) × 12',
        'Plan-rest forecast = YTD actual + monthly plan for remaining months',
        'Profitability cost mix sourced from GregProfitabilityServiceResults*.csv'
      ]
    },
    kpis,
    execSummary: {
      budget: annualBudget,
      modelAnnualInvoiced: annualPace,
      gap: gapToBudget,
      narrative: monthsElapsed + ' months of FY' + FY + ' Service activity reported, ' +
        fmtMoney(ytdInvoiced) + ' invoiced YTD. Run-rate annualizes to ' +
        fmtMoney(annualPace) + ' against the ' + fmtMoney(annualBudget) + ' plan' +
        (gapToBudget < 0
          ? ', a ' + fmtMoney(Math.abs(gapToBudget)) + ' shortfall (' + (upliftNeeded * 100).toFixed(1) + '% uplift needed).'
          : ', a ' + fmtMoney(gapToBudget) + ' lead.')
    },
    monthRevenue,
    weeklyTargetsHeader: {
      avgWeeklyNeed: annualBudget / 52,
      recent4WkAvg: 0,
      gap: 0
    },
    budgetRecoveryHeader: {
      fullYearBudget: annualBudget,
      gap: gapToBudget < 0 ? Math.abs(gapToBudget) : 0,
      upliftPct: upliftNeeded * 100,
      aprilGap: monthsElapsed >= 4 ? (monthlyActual[3] - monthlyBudget[3]) : 0,
      q1OriginalBudget: monthlyBudget.slice(0, 3).reduce((s, v) => s + v, 0),
      q1Actual: monthlyActual.slice(0, 3).reduce((s, v) => s + v, 0),
      q1Shortfall: monthlyActual.slice(0, 3).reduce((s, v) => s + v, 0) -
                   monthlyBudget.slice(0, 3).reduce((s, v) => s + v, 0),
      recoveryRatio: 0
    },
    profitabilitySummary: profit ? {
      combinedGP: profit.invoiced.gross_profit,
      combinedGP_pct: profit.invoiced.gp_pct,
      combinedRevenue: profit.invoiced.revenue,
      y2025_GP_pct: profit.invoiced_2025.gp_pct,
      y2025_revenue: profit.invoiced_2025.revenue,
      y2025_jobs: profit.invoiced_2025.jobs,
      y2026_GP_pct: profit.invoiced_2026.gp_pct,
      y2026_revenue: profit.invoiced_2026.revenue,
      y2026_jobs: profit.invoiced_2026.jobs,
      materialCost: profit.invoiced.material,
      laborCost: profit.invoiced.labor,
      otherCost: profit.invoiced.other,
      commissions: profit.invoiced.commission,
      materialPctContract: profit.invoiced.revenue > 0 ? (profit.invoiced.material / profit.invoiced.revenue * 100) : 0,
      laborPctContract: profit.invoiced.revenue > 0 ? (profit.invoiced.labor / profit.invoiced.revenue * 100) : 0,
      otherPctContract: profit.invoiced.revenue > 0 ? (profit.invoiced.other / profit.invoiced.revenue * 100) : 0,
      commissionPctContract: profit.invoiced.revenue > 0 ? (profit.invoiced.commission / profit.invoiced.revenue * 100) : 0,
      sourceFile: profit.sourceFile,
      jobsParsed: profit.jobsParsed
    } : {
      combinedGP: 0, combinedGP_pct: 0, combinedRevenue: 0,
      y2025_GP_pct: 0, y2026_GP_pct: 0, y2025_revenue: 0, y2026_revenue: 0,
      y2025_jobs: 0, y2026_jobs: 0,
      materialCost: 0, laborCost: 0, otherCost: 0, commissions: 0,
      materialPctContract: 0, laborPctContract: 0, otherPctContract: 0, commissionPctContract: 0,
      _note: 'Service profitability CSV not found this refresh.'
    },
    profitabilityByJobType:     profit ? profit.byJobType_2026 : [],
    profitabilityByMarket:      profit ? profit.byMarket_2026 : [],
    profitabilityByJobType2025: profit ? profit.byJobType_2025 : [],
    profitabilityByMarket2025:  profit ? profit.byMarket_2025 : [],
    profitabilityByTrade:       profit ? profit.byTrade_2026 : [],
    pipelineSnapshot: { stages: [], totalJobs: 0, totalValue: 0 },
    commentary: {
      actionableRecommendations: gapToBudget < 0
        ? ['Annualized Service pace is ' + fmtMoney(Math.abs(gapToBudget)) + ' short of the ' + fmtMoney(annualBudget) + ' plan. ' + (upliftNeeded * 100).toFixed(1) + '% uplift needed on remaining months.']
        : ['Service tracking ahead of plan by ' + fmtMoney(gapToBudget) + '. Hold pace.'],
      strategyHighlights: []
    },
    tables: [monthlyTable, branchTable],
    charts,
    monthsLabel: MONTH_LONG.map(m => m.slice(0, 3) + ' ' + FY),
    budgetInv: monthlyBudget,
    revModel: monthlyActual,
    revFromKnown: monthlyActual,
    requiredSales: monthlyBudget,
    backlogData: new Array(12).fill(0),
    netsuiteInvoiced: ns ? {
      source: ns.fileName,
      format: ns.format,
      totalInvoiced: ns.totalInvoiced,
      invoiceCount: ns.invoiceCount,
      monthly: ns.monthly,
      byBranch: ns.byBranch,
      latestInvoiceDate: ns.latestDate ? ns.latestDate.toISOString().slice(0, 10) : null
    } : null,
    installServiceOverlap: wos,
    tabs: []
  };
}

function validate(out) {
  const errors = [];
  if (!out) errors.push('output is null');
  if (out && !out.kpis) errors.push('missing kpis');
  return errors;
}

module.exports = { id: PROJECT_ID, version: SERVICE_VERSION, run, validate };
