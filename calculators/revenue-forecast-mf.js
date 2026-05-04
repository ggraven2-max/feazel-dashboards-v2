/* ============================================================
   FEAZEL CALCULATOR — Revenue Forecast (MULTI-FAMILY, MF-v1)
   ----------------------------------------------------------------
   The MF revenue model is event-driven, not statistical. Each MF
   job has explicit date stamps in Salesforce for "moved to in
   progress" (start) and "moved to invoiced" (revenue recognition).
   This calculator reads those dates straight from the Commercial
   Forecasting Report, derives monthly revenue + WIP buckets,
   compares against the monthly plan from the Commercial Budget
   XLSX (row 6, "Total - 40000 - Revenue"), and emits the JSON
   shape the Revenue Forecast dashboard tabs consume.

   See inputs/multi-family/revenue-forecast/RULES.md for the spec.
   ============================================================ */
const fs = require('fs');
const path = require('path');
const io = require('./lib/io');

const PROJECT_ID = 'revenue-forecast';
const MF_VERSION = 'MF-v1-2026-05-04';
const FY = 2026;
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const MONTHS_LONG = ['January','February','March','April','May','June','July','August','September','October','November','December'];

// ---------- formatting helpers ----------
function fmtMoney(v, opts) {
  opts = opts || {};
  if (v == null || isNaN(v)) return '—';
  var abs = Math.abs(v);
  if (opts.short !== false) {
    if (abs >= 1e9) return '$' + (v / 1e9).toFixed(2).replace(/\.?0+$/, '') + 'B';
    if (abs >= 1e6) return '$' + (v / 1e6).toFixed(2).replace(/\.?0+$/, '') + 'M';
    if (abs >= 1e3) return '$' + (v / 1e3).toFixed(0) + 'K';
  }
  return '$' + Math.round(v).toLocaleString('en-US');
}
function pct(v, dp) { if (v == null || isNaN(v)) return '—'; return (v * 100).toFixed(dp == null ? 1 : dp) + '%'; }

function getCol(row, names) {
  if (!row) return null;
  const keys = Object.keys(row);
  for (const n of names) {
    const found = keys.find(k => k.toLowerCase() === n.toLowerCase());
    if (found) return row[found];
  }
  return null;
}

function parseNumber(v) {
  if (v == null || v === '') return 0;
  if (typeof v === 'number') return v;
  return parseFloat(String(v).replace(/[$,\s]/g, '')) || 0;
}

// Salesforce reports can render dates as Date objects (xlsx date) or strings
// like "10/29/2025" or "10/29/2025 4:45 AM". Return a Date or null.
function parseDate(v) {
  if (!v) return null;
  if (v instanceof Date) return isNaN(v.getTime()) ? null : v;
  // xlsx serial number (rare here but safe)
  if (typeof v === 'number') {
    if (v < 1) return null;
    const epoch = new Date(Date.UTC(1899, 11, 30));
    return new Date(epoch.getTime() + v * 86400 * 1000);
  }
  const s = String(v).trim();
  // Try US format M/D/YYYY [time]
  const m = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})/);
  if (m) {
    const d = new Date(parseInt(m[3], 10), parseInt(m[1], 10) - 1, parseInt(m[2], 10));
    return isNaN(d.getTime()) ? null : d;
  }
  // ISO fallback
  const d = new Date(s);
  return isNaN(d.getTime()) ? null : d;
}

function monthKeyOf(d) {
  if (!d) return null;
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0');
}

function endOfMonth(year, monthIdx) {
  // monthIdx is 0-based
  return new Date(year, monthIdx + 1, 0, 23, 59, 59);
}

// ---------- input discovery ----------
function findFiles(inputDir) {
  const all = io.listInputs(inputDir);
  const out = { forecast: null, budget: null, contracts: null, profitability: null };
  for (const f of all) {
    const lower = f.name.toLowerCase();
    if (lower.includes('forecasting report') && /\.xlsx?$/i.test(lower)) out.forecast = f;
    else if (lower.includes('budget') && /\.xlsx?$/i.test(lower)) out.budget = f;
    else if (lower.includes('contracts signed') && /\.xlsx?$/i.test(lower)) out.contracts = f;
    else if (lower.includes('profitability') && /\.csv$/i.test(lower)) out.profitability = f;
  }
  return out;
}

function readSheet(file) {
  const wb = io.readXlsx(file.fullPath);
  if (Array.isArray(wb)) return wb;
  const names = Object.keys(wb);
  return names.length ? wb[names[0]] || [] : [];
}

// ---------- budget parser ----------
// 2026 Commercial Budget format:
//   Row 2: header row "Multi Family", "Jan 2026", "Feb 2026", ..., "Dec 2026", "Total 2026"
//   Row 4: "40001 - Sales" with monthly amounts
//   Row 5: "40003 - Sales:Work in Progress" with monthly WIP adjustments
//   Row 6: "Total - 40000 - Revenue" — this is the row we want for the revenue plan
function parseBudget(file) {
  const xlsx = require('xlsx');
  const wb = xlsx.readFile(file.fullPath, { cellDates: false });
  const sheet = wb.Sheets[wb.SheetNames[0]];
  const rows = xlsx.utils.sheet_to_json(sheet, { header: 1, defval: null });
  // Find the row labeled "Total - 40000 - Revenue". The xlsx parser strips
  // leading-null columns so the label index varies. Scan each cell for the
  // label, then the next 12 cells are monthly amounts and the 13th is the
  // explicit "Total 2026" cell.
  for (const row of rows) {
    for (let i = 0; i < row.length; i++) {
      const cell = row[i];
      if (!cell) continue;
      const label = String(cell).toLowerCase();
      if (label.includes('total') && label.includes('40000') && label.includes('revenue')) {
        const monthly = row.slice(i + 1, i + 13).map(v => parseNumber(v));
        const explicitAnnual = parseNumber(row[i + 13]);   // "Total 2026" column, if present
        if (monthly.length === 12) {
          const summed = monthly.reduce((s, v) => s + v, 0);
          // Use the explicit annual when it's present and within 10% of the
          // summed months. If they diverge wildly, fall back to summed and
          // surface the discrepancy in the calculator log.
          let annual = summed;
          let discrepancy = 0;
          if (explicitAnnual && explicitAnnual > 0) {
            discrepancy = explicitAnnual - summed;
            if (Math.abs(discrepancy) / explicitAnnual <= 0.1) {
              annual = explicitAnnual;
            }
          }
          return { monthly: monthly, annual: annual, summedMonthly: summed, explicitAnnual: explicitAnnual, discrepancy: discrepancy };
        }
      }
    }
  }
  return null;
}

// ---------- main ----------
function run(opts) {
  opts = opts || {};
  const inputDir = opts.inputDir || path.join(__dirname, '..', 'inputs', 'multi-family', PROJECT_ID);
  const snapshotPath = opts.snapshotPath;

  const files = findFiles(inputDir);
  console.log('  [mf-revenue] file scan:');
  console.log('    forecast      : ' + (files.forecast ? files.forecast.name : 'MISSING'));
  console.log('    budget        : ' + (files.budget ? files.budget.name : 'MISSING'));
  console.log('    contracts     : ' + (files.contracts ? files.contracts.name : 'optional, missing'));
  console.log('    profitability : ' + (files.profitability ? files.profitability.name : 'optional, missing'));

  if (!files.forecast) {
    return emptyShape('Commercial Forecasting Report missing. Drop it in inputs/multi-family/revenue-forecast/');
  }

  // ---- budget ----
  const budget = files.budget ? parseBudget(files.budget) : null;
  const annualBudget = budget ? budget.annual : 51_673_207;
  const monthlyBudget = budget ? budget.monthly : new Array(12).fill(annualBudget / 12);
  if (budget && Math.abs(budget.discrepancy) > 1) {
    console.log('  [mf-revenue] BUDGET WARNING: monthly cells sum to $' +
      Math.round(budget.summedMonthly).toLocaleString() +
      ' but "Total 2026" cell shows $' + Math.round(budget.explicitAnnual).toLocaleString() +
      ' (diff $' + Math.round(budget.discrepancy).toLocaleString() + ').');
    console.log('    Using explicit annual for headline, monthly cells for per-month gaps.');
  }

  // ---- forecasting report ----
  const raw = readSheet(files.forecast);
  if (!raw.length) {
    return emptyShape('Commercial Forecasting Report is empty.');
  }

  // Per-job parse
  const jobs = raw.map(r => {
    const inProg = parseDate(getCol(r, ['Date Moved to In Progress']));
    const completed = parseDate(getCol(r, ['Date Moved to Completed']));
    const invoiced = parseDate(getCol(r, ['Date Moved to Invoiced']));
    const startDate = parseDate(getCol(r, ['Start Date']));
    const signed = parseDate(getCol(r, ['Contract Signed On Date']));
    const created = parseDate(getCol(r, ['Created Date']));
    return {
      jobNumber: getCol(r, ['Job Number']),
      account: getCol(r, ['Account Name']),
      dept: getCol(r, ['Department']),
      jobType: getCol(r, ['Job Type']),
      branch: getCol(r, ['Branch Location to Service']) || '(unassigned)',
      amount: parseNumber(getCol(r, ['Final Contract Amount'])),
      jobStatus: getCol(r, ['Job Status']),
      // Use the most defensible "start" date: prefer In Progress, fallback to Start Date
      startedOn: inProg || startDate,
      completedOn: completed,
      invoicedOn: invoiced,
      signedOn: signed,
      createdOn: created
    };
  });

  // ---- monthly aggregation across FY ----
  const monthly = MONTHS.map((label, idx) => ({
    key: FY + '-' + String(idx + 1).padStart(2, '0'),
    label: label,
    longLabel: MONTHS_LONG[idx],
    monthIdx: idx,
    revenue: 0,
    starts: 0,
    wipEnd: 0,           // computed below
    completedCount: 0,
    startedCount: 0,
    invoicedCount: 0,
    completingJobs: [],
    startingJobs: [],
    budget: monthlyBudget[idx]
  }));

  // Per-job: classify into the correct month bucket(s)
  jobs.forEach(j => {
    if (j.invoicedOn && j.invoicedOn.getFullYear() === FY) {
      const slot = monthly[j.invoicedOn.getMonth()];
      slot.revenue += j.amount;
      slot.invoicedCount++;
      slot.completingJobs.push({ name: j.account, jobNumber: j.jobNumber, branch: j.branch, jobType: j.jobType, amount: j.amount, invoicedOn: j.invoicedOn });
    }
    if (j.startedOn && j.startedOn.getFullYear() === FY) {
      const slot = monthly[j.startedOn.getMonth()];
      slot.starts += j.amount;
      slot.startedCount++;
      slot.startingJobs.push({ name: j.account, jobNumber: j.jobNumber, branch: j.branch, jobType: j.jobType, amount: j.amount, startedOn: j.startedOn });
    }
  });

  // ---- WIP balance evolution per month ----
  // WIP = jobs that have In Progress date <= month-end AND
  //       (Invoiced date is null OR Invoiced date > month-end)
  monthly.forEach((m, idx) => {
    const cutoff = endOfMonth(FY, idx);
    let wip = 0;
    jobs.forEach(j => {
      if (!j.startedOn) return;
      if (j.startedOn > cutoff) return;
      if (j.invoicedOn && j.invoicedOn <= cutoff) return;
      wip += j.amount;
    });
    m.wipEnd = wip;
  });

  // Currently in WIP (use today as cutoff)
  const today = new Date();
  const inWip = jobs.filter(j => {
    if (!j.startedOn) return false;
    if (j.startedOn > today) return false;
    if (j.invoicedOn && j.invoicedOn <= today) return false;
    return true;
  });
  const inWipValue = inWip.reduce((s, j) => s + j.amount, 0);

  // Annual aggregation
  const annualRevenue = monthly.reduce((s, m) => s + m.revenue, 0);
  const monthsWithRev = monthly.filter(m => m.revenue > 0).length;
  // Use today's month as "elapsed" for pace if we have data through today
  const todayMonthIdx = today.getFullYear() === FY ? today.getMonth() : (today.getFullYear() > FY ? 11 : -1);
  const monthsElapsed = todayMonthIdx >= 0 ? todayMonthIdx + 1 : monthsWithRev;

  // Two annual projections, both shown as KPIs:
  //   1. Naive pace = (YTD revenue / months elapsed) × 12
  //      Sensitive to lumpy months (e.g. one big April spike inflates the rest of year).
  //   2. Plan-rest projection = YTD actual + plan for the remaining months
  //      More honest for MF where job timing is lumpy and the budget already accounts for seasonality.
  const annualPace = monthsElapsed > 0 ? (annualRevenue / monthsElapsed) * 12 : 0;
  const remainingPlan = monthlyBudget.slice(monthsElapsed).reduce((s, v) => s + v, 0);
  const planRestForecast = annualRevenue + remainingPlan;

  const ytdPlan = monthlyBudget.slice(0, monthsElapsed).reduce((s, v) => s + v, 0);
  const ytdGap = annualRevenue - ytdPlan;

  const gapToBudget = planRestForecast - annualBudget;   // how YTD-actual + remaining-plan compares to plan
  const upliftNeeded = (gapToBudget < 0 && annualBudget > 0) ? Math.abs(gapToBudget) / annualBudget : 0;

  // Branch breakdown YTD
  const branchAgg = {};
  jobs.forEach(j => {
    if (!branchAgg[j.branch]) branchAgg[j.branch] = { branch: j.branch, completed: 0, wip: 0, jobs: 0 };
    if (j.invoicedOn && j.invoicedOn.getFullYear() === FY) {
      branchAgg[j.branch].completed += j.amount;
      branchAgg[j.branch].jobs++;
    } else if (j.startedOn && j.startedOn <= today && (!j.invoicedOn || j.invoicedOn > today)) {
      branchAgg[j.branch].wip += j.amount;
      branchAgg[j.branch].jobs++;
    }
  });
  const branchRows = Object.values(branchAgg).sort((a, b) => (b.completed + b.wip) - (a.completed + a.wip));

  // Job type breakdown YTD (revenue invoiced)
  const jobTypeAgg = {};
  jobs.forEach(j => {
    if (j.invoicedOn && j.invoicedOn.getFullYear() === FY) {
      const k = j.jobType || '(unspecified)';
      if (!jobTypeAgg[k]) jobTypeAgg[k] = { jobType: k, revenue: 0, count: 0 };
      jobTypeAgg[k].revenue += j.amount;
      jobTypeAgg[k].count++;
    }
  });
  const jobTypeRows = Object.values(jobTypeAgg).sort((a, b) => b.revenue - a.revenue);

  // ---- KPIs ----
  const lastMonthIdx = todayMonthIdx >= 1 ? todayMonthIdx - 1 : (todayMonthIdx === 0 ? 0 : 11);
  const lastMonth = monthly[lastMonthIdx];

  const kpis = [
    { label: 'Revenue Invoiced YTD', value: fmtMoney(annualRevenue), sub: monthsElapsed + (monthsElapsed === 1 ? ' month elapsed' : ' months elapsed') },
    { label: 'YTD vs Plan', value: (ytdGap < 0 ? '−' : '+') + fmtMoney(Math.abs(ytdGap)), sub: 'Plan YTD: ' + fmtMoney(ytdPlan), trend: ytdGap < 0 ? 'negative' : 'positive' },
    { label: 'Plan-Rest Forecast', value: fmtMoney(planRestForecast), sub: 'YTD actual + remaining-month plan' },
    { label: 'Naive Pace (×12)', value: fmtMoney(annualPace), sub: 'YTD ÷ months × 12 (sensitive to lumpy months)' },
    { label: 'Annual Budget', value: fmtMoney(annualBudget), sub: '2026 MF target (Total cell)' },
    { label: 'Forecast vs Budget', value: (gapToBudget < 0 ? '−' : '+') + fmtMoney(Math.abs(gapToBudget)), sub: gapToBudget < 0 ? pct(upliftNeeded) + ' uplift needed' : 'ahead of plan', trend: gapToBudget < 0 ? 'negative' : 'positive' },
    { label: 'Current WIP', value: fmtMoney(inWipValue), sub: inWip.length + ' jobs in flight today' },
    { label: 'Last Month Revenue', value: fmtMoney(lastMonth.revenue), sub: lastMonth.longLabel + ' ' + FY }
  ];

  // ---- charts ----
  const monthsLabel = monthly.map(m => m.label);
  const revData = monthly.map(m => m.revenue);
  const planData = monthly.map(m => m.budget);
  const wipEndData = monthly.map(m => m.wipEnd);
  const startData = monthly.map(m => m.starts);

  const charts = [
    {
      id: 'mf-rev-vs-plan',
      title: 'Monthly Revenue vs Plan',
      sub: 'Invoiced revenue per month against the Commercial Budget',
      config: {
        type: 'bar',
        data: {
          labels: monthsLabel,
          datasets: [
            { label: 'Invoiced', data: revData, backgroundColor: '#5e82bc' },
            { label: 'Plan',     data: planData, type: 'line', borderColor: '#b23a2c', borderDash: [6, 4], backgroundColor: 'transparent', pointRadius: 2 }
          ]
        }
      }
    },
    {
      id: 'mf-wip-balance',
      title: 'WIP Balance at Month-End',
      sub: 'Sum of contract values for jobs in flight (started, not yet invoiced)',
      config: {
        type: 'line',
        data: {
          labels: monthsLabel,
          datasets: [
            { label: 'WIP Balance', data: wipEndData, borderColor: '#1f2d4b', backgroundColor: 'rgba(31,45,75,0.12)', fill: true, tension: 0.3 }
          ]
        }
      }
    },
    {
      id: 'mf-starts-vs-completions',
      title: 'WIP Starts vs Completions per Month',
      sub: 'Are we adding to WIP faster than we drain it?',
      config: {
        type: 'bar',
        data: {
          labels: monthsLabel,
          datasets: [
            { label: 'New Starts', data: startData, backgroundColor: '#c77a1a' },
            { label: 'Completions', data: revData, backgroundColor: '#2e7d55' }
          ]
        }
      }
    }
  ];

  // ---- tables ----
  const monthlyTable = {
    id: 'mf-monthly-rollup',
    title: 'Monthly Roll-Up',
    headers: ['Month',
      { label: 'Revenue', num: true },
      { label: 'Plan', num: true },
      { label: 'Gap', num: true },
      { label: 'Starts', num: true },
      { label: 'WIP End', num: true },
      { label: '# Inv.', num: true },
      { label: '# Start', num: true }],
    rows: monthly.map(m => [
      m.longLabel,
      fmtMoney(m.revenue),
      fmtMoney(m.budget),
      fmtMoney(m.revenue - m.budget),
      fmtMoney(m.starts),
      fmtMoney(m.wipEnd),
      m.invoicedCount,
      m.startedCount
    ])
  };
  const branchTable = {
    id: 'mf-by-branch',
    title: 'By Branch (YTD)',
    headers: ['Branch', { label: 'Invoiced', num: true }, { label: 'WIP', num: true }, { label: '# Jobs', num: true }],
    rows: branchRows.map(b => [b.branch, fmtMoney(b.completed), fmtMoney(b.wip), b.jobs])
  };
  const jobTypeTable = {
    id: 'mf-by-jobtype',
    title: 'Revenue by Job Type (YTD)',
    headers: ['Job Type', { label: 'Revenue', num: true }, { label: '# Jobs', num: true }],
    rows: jobTypeRows.map(t => [t.jobType, fmtMoney(t.revenue), t.count])
  };
  const wipJobsTable = {
    id: 'mf-in-wip',
    title: 'Currently in WIP',
    headers: ['Job', 'Account', 'Branch', { label: 'Contract', num: true }, 'Started'],
    rows: inWip
      .sort((a, b) => b.amount - a.amount)
      .slice(0, 50)
      .map(j => [j.jobNumber || '—', j.account || '—', j.branch, fmtMoney(j.amount), j.startedOn ? (j.startedOn.toISOString().slice(0, 10)) : ''])
  };

  // ---- final shape ----
  return {
    _source: 'calculator/revenue-forecast-mf.js ' + MF_VERSION,
    title: 'Multi-Family Revenue Forecast',
    subtitle: 'MF-v1 · Job-by-job event model · Data through ' + today.toISOString().slice(0, 10),
    runDate: today.toISOString().slice(0, 10),
    methodologyLock: {
      version: MF_VERSION,
      lockedOn: '2026-05-04',
      items: [
        'Annual budget ' + fmtMoney(annualBudget) + ' (sourced from Commercial Budget XLSX)',
        'Revenue = Date Moved to Invoiced',
        'Start = Date Moved to In Progress (or Start Date if missing)',
        'WIP = jobs with start ≤ month-end AND no invoice (or invoice > month-end)'
      ]
    },
    kpis: kpis,
    execSummary: {
      budget: annualBudget,
      modelAnnualInvoiced: annualPace,
      gap: gapToBudget,
      narrative: monthsElapsed + ' month' + (monthsElapsed === 1 ? '' : 's') + ' of FY' + FY +
        ' MF activity reported, ' + fmtMoney(annualRevenue) + ' invoiced YTD. Run-rate annualizes to ' +
        fmtMoney(annualPace) + ' against the ' + fmtMoney(annualBudget) + ' plan, ' +
        (gapToBudget < 0 ? 'a ' + fmtMoney(Math.abs(gapToBudget)) + ' shortfall (' + pct(upliftNeeded) + ' uplift needed).' : 'a surplus.')
    },
    monthRevenue: (function () {
      const out = {};
      monthly.forEach(m => {
        out[m.label.toLowerCase()] = {
          invoiced: m.revenue,
          wipChange: m.starts - m.revenue,
          netRevenue: m.revenue,
          startingCount: m.startedCount,
          completingCount: m.invoicedCount,
          plan: m.budget,
          gap: m.revenue - m.budget
        };
      });
      return out;
    })(),
    weeklyTargetsHeader: {
      avgWeeklyNeed: annualBudget / 52,
      recent4WkAvg: 0,
      gap: 0,
      productionAvgWeeklyNeed: 0,
      productionCycleStart: 0,
      productionCycleComplete: 0,
      productionTotalCycle: 0
    },
    budgetRecoveryHeader: {
      fullYearBudget: annualBudget,
      gap: gapToBudget < 0 ? Math.abs(gapToBudget) : 0,
      upliftPct: upliftNeeded * 100,
      aprilGap: 0, q1OriginalBudget: 0, q1Actual: 0, q1Shortfall: 0, recoveryRatio: 0
    },
    profitabilitySummary: {
      combinedGP: 0, combinedGP_pct: 0, combinedRevenue: annualRevenue,
      y2025_GP_pct: 0, y2026_GP_pct: 0, y2025_revenue: 0, y2026_revenue: annualRevenue, y2025_jobs: 0,
      y2026_jobs: jobs.filter(j => j.invoicedOn && j.invoicedOn.getFullYear() === FY).length,
      materialCost: 0, laborCost: 0, commissions: 0,
      materialPctContract: 0, laborPctContract: 0, commissionPctContract: 0,
      _note: 'Cost mix and profitability for MF v1 not parsed yet. Profitability CSV is in folder; v2 will read it.'
    },
    pipelineSnapshot: {
      stages: [
        { stage: 'In WIP today', jobs: inWip.length, value: inWipValue }
      ],
      totalJobs: inWip.length,
      totalValue: inWipValue
    },
    commentary: {
      actionableRecommendations: [
        gapToBudget < 0
          ? 'Annualized pace is ' + fmtMoney(Math.abs(gapToBudget)) + ' short of the ' + fmtMoney(annualBudget) + ' plan. Push to invoice WIP balance ($' +
            (inWipValue / 1e6).toFixed(1) + 'M) faster, or accelerate starts.'
          : 'Tracking ahead of plan by ' + fmtMoney(gapToBudget) + '.'
      ],
      strategyHighlights: []
    },
    tables: [monthlyTable, branchTable, jobTypeTable, wipJobsTable],
    charts: charts,
    monthsLabel: monthsLabel,
    budgetInv: planData,
    revModel: revData,
    revFromKnown: revData,
    requiredSales: planData,
    backlogData: wipEndData,
    tabs: []
  };
}

function emptyShape(reason) {
  return {
    _source: 'calculator/revenue-forecast-mf.js ' + MF_VERSION + ' (stub)',
    title: 'Multi-Family Revenue Forecast',
    subtitle: 'MF-v1 · ' + reason,
    runDate: new Date().toISOString().slice(0, 10),
    methodologyLock: { version: MF_VERSION, lockedOn: '2026-05-04', items: [] },
    kpis: [
      { label: 'Revenue Invoiced YTD', value: '$0', sub: reason },
      { label: 'Annual Budget', value: '$51.67M', sub: '2026 multi-family target' },
      { label: 'Forecast vs Budget', value: '−$51.67M', sub: 'Awaiting first upload' },
      { label: 'WIP Balance', value: '$0', sub: 'No jobs reported yet' }
    ],
    execSummary: { budget: 51_673_207, modelAnnualInvoiced: 0, gap: -51_673_207, narrative: reason },
    monthRevenue: {},
    weeklyTargetsHeader: { avgWeeklyNeed: 51_673_207 / 52, recent4WkAvg: 0, gap: 0, productionAvgWeeklyNeed: 0, productionCycleStart: 0, productionCycleComplete: 0, productionTotalCycle: 0 },
    budgetRecoveryHeader: { fullYearBudget: 51_673_207, gap: 51_673_207, upliftPct: 100, aprilGap: 0, q1OriginalBudget: 0, q1Actual: 0, q1Shortfall: 0, recoveryRatio: 0 },
    profitabilitySummary: { combinedGP: 0, combinedGP_pct: 0, combinedRevenue: 0, y2025_GP_pct: 0, y2026_GP_pct: 0, y2025_revenue: 0, y2026_revenue: 0, y2025_jobs: 0, y2026_jobs: 0, materialCost: 0, laborCost: 0, commissions: 0, materialPctContract: 0, laborPctContract: 0, commissionPctContract: 0 },
    pipelineSnapshot: { stages: [], totalJobs: 0, totalValue: 0 },
    commentary: { actionableRecommendations: [reason], strategyHighlights: [] },
    tables: [], charts: [],
    monthsLabel: [], budgetInv: [], revModel: [], revFromKnown: [], requiredSales: [], backlogData: [],
    tabs: []
  };
}

function validate(out) {
  const errors = [];
  if (!out) errors.push('output is null');
  if (out && !out.kpis) errors.push('missing kpis');
  if (out && !out.execSummary) errors.push('missing execSummary');
  return errors;
}

module.exports = { id: PROJECT_ID, version: MF_VERSION, run, validate };
