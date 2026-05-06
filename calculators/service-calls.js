/* ============================================================
   FEAZEL CALCULATOR · Service Calls YTD (Service-v1)
   ----------------------------------------------------------------
   Parses Salesforce "Service Appointments" XLSX export. Builds
   the headline KPIs, tech rollups, branch / account splits,
   appointment-aging analysis, productivity ratios, and a list
   of stuck / disproportionate WOs that need a second look.

   Schema (column index in input):
     0  Primary Resource: Name
     1  Work Order Number
     2  Appointment Number
     3  Account: Account Name
     4  Actual Start
     5  Actual End
     6  Actual Duration (Minutes)
     7  Billable Time           (man-hours billed = laborers × hours)
     8  Service Type            (Repair, ...)
     9  Job: Final Contract Amount
     10 Job
     11 # Laborers
     12 Work Order: Work Order Number  (often duplicate of col 1)
     13 Branch Location to Service
   ============================================================ */
const path = require('path');
const fs = require('fs');
const io = require('./lib/io');

const PROJECT_ID = 'service-calls';
const VERSION = 'Service-Calls-v1.0-2026-05-06';
const FY = 2026;

const BRANCH_REMAP = { 'detroit metro': 'Detroit', 'nova': 'DC Metro' };
function normBranch(loc) {
  if (!loc) return '(unassigned)';
  const k = String(loc).trim().toLowerCase();
  return BRANCH_REMAP[k] || String(loc).trim();
}

function parseDt(v) {
  if (v == null) return null;
  if (v instanceof Date) return isNaN(v.getTime()) ? null : v;
  const s = String(v).trim(); if (!s) return null;
  const m = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})(?:\s+(\d{1,2}):(\d{2})(?:\s*(AM|PM))?)?/i);
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
function parseNumber(v) {
  if (v == null) return 0;
  if (typeof v === 'number') return isNaN(v) ? 0 : v;
  const n = parseFloat(String(v).replace(/[$,\s"]/g, ''));
  return isNaN(n) ? 0 : n;
}
function fmtMoney(v) {
  if (!v && v !== 0) return '$0';
  if (v >= 1e6) return '$' + (v / 1e6).toFixed(2).replace(/\.?0+$/, '') + 'M';
  if (v >= 1e3) return '$' + (v / 1e3).toFixed(0) + 'K';
  return '$' + Math.round(v).toLocaleString();
}
function round(v) { return Math.round(v * 100) / 100; }
function round1(v) { return Math.round(v * 10) / 10; }

function findFile(inputDir) {
  if (!fs.existsSync(inputDir)) return null;
  const files = io.listInputs(inputDir);
  return files.find(f => /service appointments/i.test(f.name) && /\.xlsx?$/i.test(f.name)) || null;
}

// Sibling-folder lookup: the Jobs/WOs/SAs file lives in inputs/service/
// revenue-forecast/ (same as the install↔service overlap analysis). It has
// Work Order Status, Sub-Status, and Days in Status — needed for the Aging
// tab's "in progress 60+ days" and "not started" warnings.
function findJobsWosFile(inputDir) {
  const sibling = path.join(inputDir, '..', 'revenue-forecast');
  if (!fs.existsSync(sibling)) return null;
  const files = fs.readdirSync(sibling)
    .filter(n => /jobs with wos/i.test(n) && /\.xlsx?$/i.test(n))
    .map(n => ({ name: n, fullPath: path.join(sibling, n) }));
  return files[0] || null;
}

// Parse the Jobs with WOs and SAs file just enough to pull Repair WO status
// info. Returns one entry per WO (deduped by Work Order Number).
function parseWoStatuses(file) {
  if (!file) return null;
  const xlsx = require('xlsx');
  const wb = xlsx.readFile(file.fullPath, { cellDates: false });
  const sheet = wb.Sheets[wb.SheetNames[0]];
  const raw = xlsx.utils.sheet_to_json(sheet, { header: 1, defval: null });
  if (!raw.length) return null;
  // Header row + index lookup
  const headers = raw[0].map(h => String(h || '').trim());
  const idx = (name) => headers.findIndex(h => h.toLowerCase() === name.toLowerCase());
  const cAccount = idx('Account: Account Name');
  const cDays = idx('Days in Status');
  const cStatus = idx('Status');
  const cSubStatus = idx('Sub-Status');
  const cServiceType = idx('Service Type');
  const cTrade = idx('Service Object');
  const cWO = idx('Work Order Number');
  const cBranch = idx('Branch Location to Service');
  const cAmount = idx('Final Contract Amount');
  const cSAStart = idx('Service Appointment Start Date/Time');
  const cContractSigned = idx('Contract Signed On Date');

  const woMap = new Map();
  for (let i = 1; i < raw.length; i++) {
    const r = raw[i] || [];
    const stype = String(r[cServiceType] || '').trim();
    if (stype !== 'Repair') continue;
    const wo = String(r[cWO] || '').trim();
    if (!wo) continue;
    if (!woMap.has(wo)) {
      woMap.set(wo, {
        wo,
        account: String(r[cAccount] || '').trim(),
        branch: normBranch(r[cBranch]),
        trade: String(r[cTrade] || '').trim(),
        status: String(r[cStatus] || '').trim(),
        subStatus: String(r[cSubStatus] || '').trim(),
        days: parseNumber(r[cDays]),
        contract: parseNumber(r[cAmount]),
        contractSigned: r[cContractSigned] || null,
        hasSA: !!r[cSAStart]
      });
    } else {
      // Carry the highest Days in Status seen across rows for this WO; mark
      // hasSA true if any row has an SA start
      const m = woMap.get(wo);
      const d = parseNumber(r[cDays]);
      if (d > m.days) m.days = d;
      if (r[cSAStart]) m.hasSA = true;
    }
  }
  return Array.from(woMap.values());
}

function run(opts) {
  opts = opts || {};
  const inputDir = opts.inputDir || path.join(__dirname, '..', 'inputs', 'service', PROJECT_ID);

  const file = findFile(inputDir);
  if (!file) {
    console.log('  [service-calls] no Service Appointments XLSX found.');
    return emptyShape('Service Appointments file not found.');
  }

  const xlsx = require('xlsx');
  const wb = xlsx.readFile(file.fullPath, { cellDates: false });
  const sheet = wb.Sheets[wb.SheetNames[0]];
  const raw = xlsx.utils.sheet_to_json(sheet, { header: 1, defval: null });

  // Skip header row
  const rows = raw.slice(1).filter(r => Array.isArray(r) && r.some(c => c != null));
  console.log('  [service-calls] parsed ' + rows.length + ' service appointments from ' + file.name);

  // Normalize records
  const apts = rows.map(r => {
    const start = parseDt(r[4]);
    const end = parseDt(r[5]);
    const minutes = parseNumber(r[6]);
    return {
      tech: String(r[0] || '(unassigned)').trim() || '(unassigned)',
      wo: String(r[1] || '').trim(),
      apptNum: String(r[2] || '').trim(),
      account: String(r[3] || '').trim(),
      start, end,
      minutes,
      hours: minutes / 60,
      billable: parseNumber(r[7]),                  // man-hours billed
      serviceType: String(r[8] || '').trim(),
      contract: parseNumber(r[9]),
      jobNumber: String(r[10] || '').trim(),
      laborers: parseNumber(r[11]) || 1,
      branch: normBranch(r[13])
    };
  });

  // ─────────────────────────────────────────────────────────────
  // Headline totals
  // ─────────────────────────────────────────────────────────────
  const totalAppts = apts.length;
  const totalMin = apts.reduce((s, a) => s + a.minutes, 0);
  const totalBill = apts.reduce((s, a) => s + a.billable, 0);
  const totalContract = apts.reduce((s, a) => s + a.contract, 0);
  const uniqTechs = new Set(apts.map(a => a.tech)).size;
  const uniqWOs = new Set(apts.map(a => a.wo).filter(Boolean)).size;
  const uniqAccts = new Set(apts.map(a => a.account).filter(Boolean)).size;
  const uniqJobs = new Set(apts.map(a => a.jobNumber).filter(Boolean)).size;
  const networkBillRatio = totalMin > 0 ? (totalBill * 60) / totalMin : 0;
  const aptsWithEnd = apts.filter(a => a.end && a.start);
  const aptsCompleted = aptsWithEnd.length;
  const aptsOpen = totalAppts - aptsCompleted;

  // Monthly volume
  const byMonth = new Map();
  apts.forEach(a => {
    if (!a.start) return;
    const k = a.start.getFullYear() + '-' + String(a.start.getMonth() + 1).padStart(2, '0');
    if (!byMonth.has(k)) byMonth.set(k, { key: k, count: 0, minutes: 0, billable: 0, contract: 0 });
    const m = byMonth.get(k);
    m.count++; m.minutes += a.minutes; m.billable += a.billable; m.contract += a.contract;
  });
  const monthly = Array.from(byMonth.values()).sort((a, b) => a.key.localeCompare(b.key));

  // ─────────────────────────────────────────────────────────────
  // By Tech (Primary Resource)
  // ─────────────────────────────────────────────────────────────
  const techMap = new Map();
  apts.forEach(a => {
    if (!techMap.has(a.tech)) techMap.set(a.tech, {
      tech: a.tech, count: 0, minutes: 0, billable: 0, contract: 0,
      jobs: new Set(), accounts: new Set(), branches: new Set()
    });
    const t = techMap.get(a.tech);
    t.count++; t.minutes += a.minutes; t.billable += a.billable; t.contract += a.contract;
    if (a.jobNumber) t.jobs.add(a.jobNumber);
    if (a.account) t.accounts.add(a.account);
    if (a.branch) t.branches.add(a.branch);
  });
  const techRows = Array.from(techMap.values()).map(t => {
    const hrs = t.minutes / 60;
    return {
      tech: t.tech,
      count: t.count,
      hours: round1(hrs),
      billHours: round1(t.billable),
      billRatio: hrs > 0 ? round1(t.billable / hrs * 100) / 100 : 0,
      avgMinPerAppt: t.count > 0 ? Math.round(t.minutes / t.count) : 0,
      contract: round(t.contract),
      avgContract: t.count > 0 ? Math.round(t.contract / t.count) : 0,
      jobs: t.jobs.size,
      accounts: t.accounts.size,
      branches: Array.from(t.branches).sort().join(', ')
    };
  }).sort((a, b) => b.count - a.count);

  // ─────────────────────────────────────────────────────────────
  // By Branch
  // ─────────────────────────────────────────────────────────────
  const branchMap = new Map();
  apts.forEach(a => {
    if (!branchMap.has(a.branch)) branchMap.set(a.branch, {
      branch: a.branch, count: 0, minutes: 0, billable: 0, contract: 0,
      techs: new Set(), accounts: new Set()
    });
    const b = branchMap.get(a.branch);
    b.count++; b.minutes += a.minutes; b.billable += a.billable; b.contract += a.contract;
    if (a.tech) b.techs.add(a.tech);
    if (a.account) b.accounts.add(a.account);
  });
  const branchRows = Array.from(branchMap.values()).map(b => ({
    branch: b.branch,
    count: b.count,
    techs: b.techs.size,
    accounts: b.accounts.size,
    hours: round1(b.minutes / 60),
    billHours: round1(b.billable),
    contract: round(b.contract),
    avgMinPerAppt: b.count > 0 ? Math.round(b.minutes / b.count) : 0
  })).sort((a, b) => b.count - a.count);

  // ─────────────────────────────────────────────────────────────
  // By Account (top 25)
  // ─────────────────────────────────────────────────────────────
  const acctMap = new Map();
  apts.forEach(a => {
    if (!a.account) return;
    if (!acctMap.has(a.account)) acctMap.set(a.account, {
      account: a.account, count: 0, minutes: 0, billable: 0, contract: 0,
      jobs: new Set(), branches: new Set()
    });
    const x = acctMap.get(a.account);
    x.count++; x.minutes += a.minutes; x.billable += a.billable; x.contract += a.contract;
    if (a.jobNumber) x.jobs.add(a.jobNumber);
    if (a.branch) x.branches.add(a.branch);
  });
  const acctRows = Array.from(acctMap.values()).map(x => ({
    account: x.account,
    count: x.count,
    jobs: x.jobs.size,
    hours: round1(x.minutes / 60),
    billHours: round1(x.billable),
    contract: round(x.contract),
    branches: Array.from(x.branches).join(', ')
  })).sort((a, b) => b.count - a.count);

  // ─────────────────────────────────────────────────────────────
  // WO-level rollup (multi-appointment WOs and aging)
  // ─────────────────────────────────────────────────────────────
  const woMap = new Map();
  apts.forEach(a => {
    if (!a.wo) return;
    if (!woMap.has(a.wo)) woMap.set(a.wo, {
      wo: a.wo, count: 0, minutes: 0, billable: 0,
      contract: 0, account: a.account, branch: a.branch,
      tech: a.tech, dates: []
    });
    const w = woMap.get(a.wo);
    w.count++; w.minutes += a.minutes; w.billable += a.billable;
    if (!w.contract) w.contract = a.contract;
    if (a.start) w.dates.push(a.start);
  });
  const woStats = Array.from(woMap.values()).map(w => {
    const hours = w.minutes / 60;
    let oldest = null, newest = null, spanDays = 0;
    if (w.dates.length) {
      oldest = new Date(Math.min.apply(null, w.dates));
      newest = new Date(Math.max.apply(null, w.dates));
      spanDays = Math.round((newest - oldest) / 86400000);
    }
    const ratio = (w.contract > 0 && hours > 0) ? (hours * 100) / w.contract : 0;
    return {
      wo: w.wo, account: w.account, branch: w.branch, tech: w.tech,
      appointments: w.count,
      hours: round1(hours),
      billHours: round1(w.billable),
      contract: round(w.contract),
      hoursPer100: round1(ratio),
      oldest: oldest ? oldest.toISOString().slice(0, 10) : null,
      newest: newest ? newest.toISOString().slice(0, 10) : null,
      spanDays
    };
  });

  // Stuck WOs: 60+ day span across multiple appointments (legacy proxy)
  const stuckWOs = woStats
    .filter(w => w.appointments >= 2 && w.spanDays >= 60)
    .sort((a, b) => b.spanDays - a.spanDays)
    .slice(0, 25);

  // ─────────────────────────────────────────────────────────────
  // Pull WO Status info from the sibling Jobs/WOs/SAs file. Use it
  // for two cleaner Aging warnings: WOs literally In Progress 60+
  // days, and WOs not yet started but aged in their current status.
  // ─────────────────────────────────────────────────────────────
  const woStatusList = parseWoStatuses(findJobsWosFile(inputDir)) || [];
  const NOT_STARTED_STATUSES = new Set([
    'New',
    'Ready to Schedule',
    'Scheduled',
    'Pending Estimate Approval',
    'On Hold',
    'Pending Insurance Claim',
    'Pending Sales'
  ]);
  // Status tone for the "Not Started" pill
  function notStartedTone(status) {
    if (status === 'On Hold' || status === 'Pending Insurance Claim') return 'warn';
    if (status === 'New' || status === 'Ready to Schedule') return 'info';
    if (status === 'Scheduled') return 'success';
    return 'navy';
  }

  // Aging threshold: 14 days. Service work moves fast; anything in 'In
  // Progress' status more than two weeks is past the normal cycle.
  const IN_PROGRESS_DAY_THRESHOLD = 14;
  const inProgress60Plus = woStatusList
    .filter(w => /^in progress$/i.test(w.status) && w.days >= IN_PROGRESS_DAY_THRESHOLD)
    .sort((a, b) => b.days - a.days);

  const notStartedAged = woStatusList
    .filter(w => NOT_STARTED_STATUSES.has(w.status))
    .sort((a, b) => b.days - a.days)
    .slice(0, 25);

  // Quick rollup of not-started by status for KPI summary
  const notStartedSummary = {};
  woStatusList.forEach(w => {
    if (!NOT_STARTED_STATUSES.has(w.status)) return;
    if (!notStartedSummary[w.status]) notStartedSummary[w.status] = { status: w.status, count: 0, totalDays: 0, maxDays: 0 };
    const s = notStartedSummary[w.status];
    s.count++; s.totalDays += w.days;
    if (w.days > s.maxDays) s.maxDays = w.days;
  });
  const notStartedByStatus = Object.values(notStartedSummary)
    .map(s => ({ status: s.status, count: s.count,
                 avgDays: round1(s.totalDays / Math.max(1, s.count)),
                 maxDays: round1(s.maxDays) }))
    .sort((a, b) => b.count - a.count);
  const notStartedTotal = notStartedByStatus.reduce((s, r) => s + r.count, 0);

  // Multi-touch WOs: 3+ appointments
  const multiTouch = woStats
    .filter(w => w.appointments >= 3)
    .sort((a, b) => b.appointments - a.appointments)
    .slice(0, 25);

  // Disproportionate hours-to-contract: small contract eating big hours
  const disproportionate = woStats
    .filter(w => w.contract >= 200 && w.hours >= 5 && w.hoursPer100 >= 3)
    .sort((a, b) => b.hoursPer100 - a.hoursPer100)
    .slice(0, 25);

  // ─────────────────────────────────────────────────────────────
  // Long single appointments (>4h on-site)
  // ─────────────────────────────────────────────────────────────
  const longAppts = apts.filter(a => a.minutes >= 240)
    .sort((a, b) => b.minutes - a.minutes)
    .slice(0, 25)
    .map(a => ({
      apptNum: a.apptNum, wo: a.wo, account: a.account, tech: a.tech, branch: a.branch,
      hours: round1(a.hours),
      contract: round(a.contract),
      laborers: a.laborers,
      start: a.start ? a.start.toISOString().slice(0, 16).replace('T', ' ') : null
    }));

  // ─────────────────────────────────────────────────────────────
  // Hours-per-appointment distribution
  // ─────────────────────────────────────────────────────────────
  const buckets = { '<30m': 0, '30-60m': 0, '1-2h': 0, '2-4h': 0, '4-8h': 0, '>8h': 0 };
  apts.forEach(a => {
    if (a.minutes < 30) buckets['<30m']++;
    else if (a.minutes < 60) buckets['30-60m']++;
    else if (a.minutes < 120) buckets['1-2h']++;
    else if (a.minutes < 240) buckets['2-4h']++;
    else if (a.minutes < 480) buckets['4-8h']++;
    else buckets['>8h']++;
  });

  // ─────────────────────────────────────────────────────────────
  // Tech outliers / warnings
  // ─────────────────────────────────────────────────────────────
  // Network averages, used to flag outliers
  const techSamples = techRows.filter(t => t.count >= 30);
  const avgBillRatio = techSamples.length
    ? techSamples.reduce((s, t) => s + t.billRatio, 0) / techSamples.length : 0;
  const avgMinPerAppt = techSamples.length
    ? techSamples.reduce((s, t) => s + t.avgMinPerAppt, 0) / techSamples.length : 0;

  const findings = {
    concerns: [],
    watch: [],
    positives: []
  };

  // Concern: techs with bill ratio significantly above network avg (over-billing
  // or oversized crews — needs a look)
  techSamples.forEach(t => {
    if (avgBillRatio > 0 && t.billRatio > avgBillRatio * 1.4) {
      findings.concerns.push(t.tech + ' bills ' + t.billRatio.toFixed(2) + 'x actual hours (network avg ' + avgBillRatio.toFixed(2) + 'x). Review crew sizing or labor allocation.');
    }
  });
  // Concern: techs with significantly longer avg appointment than peers
  techSamples.forEach(t => {
    if (avgMinPerAppt > 0 && t.avgMinPerAppt > avgMinPerAppt * 1.5 && t.count >= 50) {
      findings.concerns.push(t.tech + ' averages ' + t.avgMinPerAppt + 'min per appointment vs network ' + Math.round(avgMinPerAppt) + 'min. Heavy skew on this tech\'s book.');
    }
  });
  // Watch: in-progress 14+ day WOs (status-based aging warning)
  if (inProgress60Plus.length) {
    findings.watch.push(inProgress60Plus.length + ' work orders are In Progress 14+ days. Oldest: WO ' + inProgress60Plus[0].wo + ' (' + inProgress60Plus[0].days.toFixed(0) + ' days, ' + inProgress60Plus[0].account + '). Should be closed or escalated.');
  }
  // Watch: not-started aging (slow scheduling)
  if (notStartedAged.length) {
    var oldestNS = notStartedAged[0];
    findings.watch.push(notStartedTotal + ' Repair WOs are not yet started; the oldest has been in "' + oldestNS.status + '" for ' + oldestNS.days.toFixed(0) + ' days (WO ' + oldestNS.wo + ', ' + oldestNS.account + '). Slow-scheduling backlog.');
  }
  if (disproportionate.length) {
    findings.watch.push(disproportionate.length + ' work orders are eating disproportionate hours vs their contract value. Top offender: WO ' + disproportionate[0].wo + ' (' + disproportionate[0].hours + 'h on $' + disproportionate[0].contract + ' contract).');
  }
  if (aptsOpen > 0) {
    findings.watch.push(aptsOpen + ' appointments have no Actual End — either still in progress or never closed out. Likely a data hygiene problem in Salesforce.');
  }
  // Positive: high-volume techs maintaining short appointments
  techSamples.forEach(t => {
    if (t.count >= 200 && t.avgMinPerAppt > 0 && t.avgMinPerAppt < avgMinPerAppt * 0.85) {
      findings.positives.push(t.tech + ' runs ' + t.count + ' appointments at just ' + t.avgMinPerAppt + 'min avg — efficient dispatch density.');
    }
  });
  if (uniqWOs > 0 && totalAppts / uniqWOs < 1.3) {
    findings.positives.push('Most service tickets close in a single visit (' + (totalAppts / uniqWOs).toFixed(2) + ' appointments per WO on average). Low return-trip rate.');
  }

  return {
    _source: 'calculator/service-calls.js ' + VERSION,
    title: 'Service Calls YTD',
    subtitle: 'Service Appointments · ' + totalAppts.toLocaleString() + ' calls across ' + uniqTechs + ' techs · ' +
      (monthly.length ? monthly[0].key + ' through ' + monthly[monthly.length - 1].key : ''),
    sourceFile: file.name,
    headerMeta: {
      totalAppts,
      uniqTechs,
      uniqWOs,
      uniqAccounts: uniqAccts,
      uniqJobs,
      totalHours: round1(totalMin / 60),
      totalBillable: round1(totalBill),
      networkBillRatio: round1(networkBillRatio * 100) / 100,
      totalContract: round(totalContract),
      avgMinPerAppt: totalAppts > 0 ? Math.round(totalMin / totalAppts) : 0,
      aptsCompleted, aptsOpen,
      monthsCovered: monthly.length
    },
    kpis: [
      { label: 'Appointments YTD',      value: totalAppts.toLocaleString(),                     sub: monthly.length + ' months · ' + uniqWOs.toLocaleString() + ' work orders', tone: 'info' },
      { label: 'Service Techs',         value: uniqTechs.toLocaleString(),                      sub: 'distinct primary resources',                                              tone: 'info' },
      { label: 'Total Hours',           value: round1(totalMin / 60).toLocaleString() + ' h',   sub: 'avg ' + (totalAppts > 0 ? Math.round(totalMin / totalAppts) : 0) + ' min/appt', tone: 'info' },
      { label: 'Billable Man-Hours',    value: round1(totalBill).toLocaleString() + ' h',       sub: round1(networkBillRatio).toFixed(2) + 'x actual (laborers × time)',         tone: 'info' },
      { label: 'Contract $ on Calls',   value: fmtMoney(totalContract),                         sub: uniqAccts.toLocaleString() + ' unique accounts',                            tone: 'good' },
      { label: 'Open Appointments',     value: aptsOpen.toLocaleString(),                       sub: 'no Actual End in Salesforce',                                              tone: aptsOpen > 0 ? 'warn' : 'good' }
    ],
    monthly: monthly.map(m => ({
      key: m.key,
      label: m.key,
      count: m.count,
      hours: round1(m.minutes / 60),
      billable: round1(m.billable),
      contract: round(m.contract)
    })),
    techRows,
    branchRows,
    accountRows: acctRows.slice(0, 25),
    woStats: {
      stuck: stuckWOs,                 // legacy: WOs with multi-appt 60+ day span
      inProgress60Plus,                // WOs literally Status=In Progress, ≥60 days
      notStarted: notStartedAged,      // WOs in pre-execution statuses, sorted by Days in Status
      notStartedByStatus,              // status rollup for the KPI card
      notStartedTotal,
      multiTouch,
      disproportionate
    },
    longAppts,
    buckets,
    findings,
    benchmarks: {
      avgBillRatio: round1(avgBillRatio * 100) / 100,
      avgMinPerAppt: Math.round(avgMinPerAppt)
    },
    tabs: [
      { id: 'index',        label: 'Dashboard Home',     short: 'Home' },
      { id: 'appointments', label: 'Service Appointments', short: 'Appointments' },
      { id: 'techs',        label: 'Techs',              short: 'Techs' },
      { id: 'branches',     label: 'Branches',           short: 'Branches' },
      { id: 'accounts',     label: 'Accounts',           short: 'Accounts' },
      { id: 'aging',        label: 'Aging & Warnings',   short: 'Aging' },
      { id: 'findings',     label: 'Findings',           short: 'Findings' }
    ]
  };
}

function emptyShape(reason) {
  return {
    _source: 'calculator/service-calls.js ' + VERSION + ' (stub)',
    title: 'Service Calls YTD',
    subtitle: reason,
    headerMeta: { totalAppts: 0, uniqTechs: 0, uniqWOs: 0, uniqAccounts: 0, totalHours: 0, totalBillable: 0, networkBillRatio: 0, totalContract: 0, avgMinPerAppt: 0, aptsCompleted: 0, aptsOpen: 0 },
    kpis: [],
    monthly: [], techRows: [], branchRows: [], accountRows: [],
    woStats: { stuck: [], multiTouch: [], disproportionate: [] },
    longAppts: [], buckets: {}, findings: { concerns: [], watch: [], positives: [] },
    benchmarks: { avgBillRatio: 0, avgMinPerAppt: 0 },
    tabs: []
  };
}

function validate(out) {
  const errors = [];
  if (!out) errors.push('output is null');
  return errors;
}

module.exports = { id: PROJECT_ID, version: VERSION, run, validate };
