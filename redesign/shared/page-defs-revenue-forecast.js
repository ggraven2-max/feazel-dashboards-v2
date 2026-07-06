/* ============================================================
   FEAZEL · Revenue Forecast Page Definitions
   Loaded after data.js / chart-theme.js / page-renderer.js.
   Each entry under FZ_PAGE_DEFS["revenue-forecast"][slug] is a page def.
   ============================================================ */
(function () {
  var D = window.FZ && window.FZ.data && window.FZ.data.REVENUE_FORECAST;
  if (!D) {
    console.error('[FZ] REVENUE_FORECAST data missing.');
    return;
  }
  var FZ = window.FZ;
  var pal = FZ.palette;
  var fmt = FZ.fmt;

  // ---------- shared chart helpers ----------
  var BASE_OPTS = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { intersect: false, mode: 'index' },
    plugins: { legend: { position: 'bottom' } }
  };
  function moneyAxis(short) {
    return {
      ticks: {
        callback: function (v) { return fmt.money(v, { short: short !== false }); }
      },
      beginAtZero: true
    };
  }
  function deepClone(o) { return JSON.parse(JSON.stringify(o)); }
  function withOpts(extra) { return Object.assign({}, deepClone(BASE_OPTS), extra || {}); }

  // ---------- table / chart lookups ----------
  // Both `tables` and `charts` are arrays in extracted-data.json. Build id-keyed maps.
  var T = {};
  (D.tables || []).forEach(function (t) { if (t && t.id) T[t.id] = t; });
  var C = {};
  (D.charts || []).forEach(function (c) { if (c && c.id) C[c.id] = c; });

  // ============================================================
  // MULTI-FAMILY BRANCH
  // The residential page-defs below assume V5-shaped data (chart IDs like
  // salesChart, monthlyChart). MF emits a different shape (mf-monthly-rollup,
  // mf-rev-vs-plan-vs-forecast, etc.). When MF data is loaded, build a
  // dedicated MF pages object and short-circuit the rest of this file.
  // ============================================================
  if (T['mf-monthly-rollup']) {
    window.FZ_PAGE_DEFS = window.FZ_PAGE_DEFS || {};
    window.FZ_PAGE_DEFS['revenue-forecast'] = buildMfPages(D, T, C, fmt, pal, BASE_OPTS, moneyAxis, withOpts);
    return;
  }

  // ============================================================
  // SERVICE BRANCH
  // Service Revenue Forecast is a fee-for-service line. Same data
  // shape as MF (KPIs, monthly rollup table, profitability) but
  // copy and benchmarks are Service-flavored. Build a dedicated
  // pages object that reads service data and short-circuits the
  // rest of this file.
  // ============================================================
  var lob = (window.FZ.data && window.FZ.data._meta && window.FZ.data._meta.lob) || 'residential';
  if (lob === 'service' || T['sv-monthly-rollup']) {
    window.FZ_PAGE_DEFS = window.FZ_PAGE_DEFS || {};
    window.FZ_PAGE_DEFS['revenue-forecast'] = buildServicePages(D, T, C, fmt, pal, BASE_OPTS, moneyAxis, withOpts);
    return;
  }

  // Convenience: quickly map a table's rows to renderer rows.
  function tableSection(opts) {
    var src = T[opts.id];
    if (!src) return null;
    return {
      kind: 'table',
      heading: opts.heading || src.title,
      caption: opts.caption,
      maxHeight: opts.maxHeight,
      headers: (src.headers || []).map(function (h, i) {
        return { label: h, num: opts.numCols ? opts.numCols.indexOf(i) >= 0 : i > 0 };
      }),
      rows: (opts.rowMap ? src.rows.map(opts.rowMap) : src.rows)
    };
  }

  // ============================================================
  // MULTI-FAMILY page builder
  // Returns a complete pages object for the MF revenue forecast tabs.
  // Uses MF-specific tables and charts (mf-* IDs).
  // ============================================================
  function buildMfPages (D, T, C, fmt, pal, BASE_OPTS, moneyAxis, withOpts) {
    var es = D.execSummary || {};
    var bdg = es.budget || 0;
    var actual = es.modelAnnualInvoiced || 0;
    var gap = es.gap || 0;
    var ps = D.profitabilitySummary || {};
    var pip = D.pipelineSnapshot || {};
    var wtH = D.weeklyTargetsHeader || {};
    var brH = D.budgetRecoveryHeader || {};
    var commentary = D.commentary || {};
    // Budget string for prose; derived from the payload so copy never goes stale.
    var bdgStr = bdg ? fmt.money(bdg, { short: true }) : '—';
    // Fiscal-year anchors derived from the reader's clock (FZ.timeContext).
    var fyCur = FZ.timeContext().year;
    var fyPrior = fyCur - 1;

    function kpisRow (slice, cols) {
      return { kind: 'kpi-row', cols: cols || 4, items: slice };
    }
    function kpiObj (k) {
      return {
        label: k.label, value: k.value, sub: k.sub || '',
        tone: k.trend === 'positive' ? 'success' : (k.trend === 'negative' ? 'danger' : 'navy')
      };
    }
    var allKpis = (D.kpis || []).map(kpiObj);

    function chartFromId (id, opts) {
      var c = C[id];
      if (!c) return null;
      opts = opts || {};
      return {
        title: opts.title || c.title,
        sub: opts.sub || c.sub,
        height: opts.height || 300,
        config: Object.assign({}, c.config, {
          options: withOpts(Object.assign({ scales: { y: moneyAxis() } }, opts.options || {}))
        })
      };
    }
    function tableFromId (id, opts) {
      var t = T[id];
      if (!t) return null;
      opts = opts || {};
      return {
        kind: 'table',
        heading: opts.heading || t.title,
        caption: opts.caption,
        maxHeight: opts.maxHeight,
        compact: opts.compact !== false,
        headers: t.headers,
        rows: t.rows
      };
    }

    var mfPages = {};

    // Pre-compute YTD numbers for KPI rows
    var ytdRev = (T['mf-monthly-rollup'] || { rows: [] }).rows
      .filter(function (r) { return r[1] && r[1] !== '—' && r[1] !== '$0'; })
      .length;
    var lastClosedKpi = allKpis.find(function (k) { return /last month revenue/i.test(k.label); });
    var ytdVsPlanKpi = allKpis.find(function (k) { return /ytd vs plan/i.test(k.label); });
    var ytdVsFcstKpi = allKpis.find(function (k) { return /ytd vs forecast/i.test(k.label); });
    var planRestKpi  = allKpis.find(function (k) { return /plan-rest forecast/i.test(k.label); });

    // ─────────────────────────────────────────────────────────────
    // INDEX / EXECUTIVE
    // ─────────────────────────────────────────────────────────────
    var indexPage = {
      eyebrow: D.subtitle || ('MF-v1 · ' + fyCur),
      title: 'Multi-Family Revenue Forecast',
      intro: es.narrative || ('MF revenue tracking against the ' + bdgStr + ' Commercial Budget. Actuals come from Salesforce invoiced dates (NetSuite cross-check available); forecast is Lisa\'s monthly schedule.'),
      tags: [
        { kind: 'info',    text: 'MF-v1 · locked ' + (D.methodologyLock ? D.methodologyLock.lockedOn : '2026-05-04') },
        { kind: gap >= 0 ? 'success' : 'warn', text: (gap >= 0 ? '+' : '') + fmt.money(gap, { short: true }) + ' vs plan' },
        { kind: 'info',    text: 'Plan ' + fmt.money(bdg, { short: true }) }
      ],
      sections: [
        kpisRow(allKpis.slice(0, 4)),
        kpisRow(allKpis.slice(4, 8)),
        {
          kind: 'chart-grid', cols: 1,
          heading: 'Forecast vs Actual vs Plan',
          caption: 'Forecast = Lisa\'s monthly schedule. Actual = Salesforce invoiced dates. Plan = Commercial Budget.',
          charts: [chartFromId('mf-rev-vs-plan-vs-forecast', { height: 320 })].filter(Boolean)
        },
        {
          kind: 'chart-grid', cols: 2,
          heading: 'WIP balance and forecast variance',
          charts: [
            chartFromId('mf-wip-balance', { height: 280 }),
            chartFromId('mf-variance', { height: 280 })
          ].filter(Boolean)
        },
        tableFromId('mf-variance', {
          heading: 'Forecast vs Actual (per month)',
          caption: 'Positive variance = actuals beat Lisa\'s pre-month schedule.'
        }),
        { kind: 'callout', tone: gap >= 0 ? 'success' : 'warn',
          title: gap >= 0 ? 'On pace to plan' : 'Below plan',
          body: gap >= 0
            ? 'Annualized run-rate of <strong>' + fmt.money(actual, { short: true }) + '</strong> clears the ' + bdgStr + ' plan with cushion. The bridge in Budget Recovery shows where the lead came from and the per-month pace required to hold it.'
            : 'Annualized run-rate of <strong>' + fmt.money(actual, { short: true }) + '</strong> projects <strong>' + fmt.money(gap, { short: true }) + '</strong> short of the ' + bdgStr + ' plan, a <strong>' + brH.upliftPct.toFixed(1) + '%</strong> uplift on remaining months. Push WIP through to invoice and accelerate starts in the top branches; see Recommendations for the specific moves.'
        }
      ].filter(Boolean)
    };
    mfPages.index = indexPage;
    mfPages.executive = indexPage;

    // ─────────────────────────────────────────────────────────────
    // PROJECTION (rest-of-year trajectory)
    // ─────────────────────────────────────────────────────────────
    mfPages.projection = {
      eyebrow: 'PROJECTION · MF',
      title: 'Annual Projection',
      intro: 'Where MF lands at year-end. Closed months are NetSuite invoiced revenue; remaining months come from Lisa\'s schedule for the next 1-2 months and Commercial Budget plan thereafter. The "Plan-Rest Forecast" KPI is the formal projection used in board materials.',
      tags: [
        { kind: 'info',    text: 'Annual plan ' + fmt.money(bdg, { short: true }) },
        { kind: gap >= 0 ? 'success' : 'warn', text: (gap >= 0 ? '+' : '') + fmt.money(gap, { short: true }) + ' vs plan' }
      ],
      sections: [
        kpisRow([
          allKpis.find(function (k) { return /annualized|annual forecast|annual budget/i.test(k.label); }) || { label: 'Annual Forecast', value: fmt.money(actual, { short: true }), sub: 'annualized run-rate' },
          planRestKpi || { label: 'Plan-Rest Forecast', value: fmt.money(actual, { short: true }), sub: 'YTD + remaining plan', tone: 'navy' },
          { label: 'Annual Budget', value: fmt.money(bdg, { short: true }), sub: fyCur + ' MF target', tone: 'navy' },
          { label: 'Forecast vs Plan', value: (gap >= 0 ? '+' : '') + fmt.money(gap, { short: true }), sub: brH.upliftPct ? brH.upliftPct.toFixed(1) + '% gap' : '', tone: gap >= 0 ? 'success' : 'warn' }
        ]),
        {
          kind: 'chart-grid', cols: 1,
          heading: 'Forecast vs Actual vs Plan',
          caption: 'The three views together: solid bars are actuals (closed months), the forecast line traces Lisa\'s monthly schedule, the plan line is the Commercial Budget.',
          charts: [chartFromId('mf-rev-vs-plan-vs-forecast', { height: 360 })].filter(Boolean)
        },
        tableFromId('mf-monthly-rollup', { heading: 'Monthly trajectory (revenue, plan, gap)' }),
        { kind: 'callout', tone: gap >= 0 ? 'success' : 'warn',
          title: 'Methodology read',
          body: 'Two annual projections to compare. <strong>Annualized run-rate</strong> = (YTD revenue / months elapsed) × 12, sensitive to lumpy months. <strong>Plan-rest</strong> = YTD actual + plan for remaining months, the more honest forecast for MF given seasonality. Run-rate currently shows ' + fmt.money(actual, { short: true }) + '; plan-rest shows ' + (planRestKpi ? planRestKpi.value : fmt.money(actual, { short: true })) + '.'
        }
      ].filter(Boolean)
    };

    // ─────────────────────────────────────────────────────────────
    // MONTHLY
    // ─────────────────────────────────────────────────────────────
    mfPages.monthly = {
      eyebrow: 'MONTHLY DETAIL · MF',
      title: 'Monthly Roll-Up',
      intro: 'Per-month revenue, starts, WIP movement, and forecast variance. Drill into branch-level detail on the Production tab.',
      tags: [
        lastClosedKpi ? { kind: 'success', text: lastClosedKpi.label + ' ' + lastClosedKpi.value } : null,
        ytdVsFcstKpi ? { kind: ytdVsFcstKpi.tone === 'danger' ? 'warn' : 'info', text: 'YTD vs forecast ' + ytdVsFcstKpi.value } : null
      ].filter(Boolean),
      sections: [
        kpisRow([
          lastClosedKpi || { label: 'Last Month', value: '—', sub: '' },
          ytdVsPlanKpi || { label: 'YTD vs Plan', value: '—', sub: '' },
          ytdVsFcstKpi || { label: 'YTD vs Forecast', value: '—', sub: '' },
          { label: 'Current WIP', value: allKpis.find(function (k) { return /current wip/i.test(k.label); }) ? allKpis.find(function (k) { return /current wip/i.test(k.label); }).value : fmt.money(pip.totalValue || 0, { short: true }), sub: (pip.totalJobs || 0) + ' jobs in flight today', tone: 'navy' }
        ]),
        {
          kind: 'chart-grid', cols: 1,
          heading: 'Monthly revenue: three views',
          charts: [chartFromId('mf-rev-vs-plan-vs-forecast', { height: 320 })].filter(Boolean)
        },
        tableFromId('mf-monthly-rollup', { heading: 'Monthly roll-up' }),
        tableFromId('mf-variance', { heading: 'Forecast vs Actual (per month)' }),
        {
          kind: 'chart-grid', cols: 1,
          heading: 'WIP starts vs completions',
          caption: 'When the green starts bar exceeds the gold completions bar, WIP grows for the month.',
          charts: [chartFromId('mf-starts-vs-completions', { height: 280 })].filter(Boolean)
        }
      ].filter(Boolean)
    };

    // ─────────────────────────────────────────────────────────────
    // BUDGET (annual plan detail)
    // ─────────────────────────────────────────────────────────────
    mfPages.budget = {
      eyebrow: 'PLAN · MF COMMERCIAL BUDGET',
      title: 'Annual Budget Detail',
      intro: 'Per-month invoiced-revenue plan from the Commercial Budget XLSX (Total - 40000 - Revenue row). The headline annual plan is ' + bdgStr + '; the bridge normalizes the monthly cells to tie to that headline.',
      tags: [
        { kind: 'info', text: 'Annual plan ' + fmt.money(bdg, { short: true }) },
        ytdVsPlanKpi ? { kind: ytdVsPlanKpi.tone === 'danger' ? 'warn' : 'success', text: 'YTD vs plan ' + ytdVsPlanKpi.value } : null
      ].filter(Boolean),
      sections: [
        kpisRow([
          { label: 'Annual Plan',      value: fmt.money(bdg, { short: true }),       sub: 'Commercial Budget · ' + fyCur,      tone: 'navy' },
          ytdVsPlanKpi || { label: 'YTD vs Plan', value: '—', sub: '' },
          { label: 'Forecast vs Plan', value: (gap >= 0 ? '+' : '') + fmt.money(gap, { short: true }), sub: brH.upliftPct ? brH.upliftPct.toFixed(1) + '% gap' : 'on plan', tone: gap >= 0 ? 'success' : 'warn' },
          { label: 'Uplift Needed',    value: (brH.upliftPct || 0).toFixed(1) + '%', sub: 'to recover plan on remaining months', tone: (brH.upliftPct || 0) > 10 ? 'danger' : (brH.upliftPct || 0) > 0 ? 'warn' : 'success' }
        ]),
        tableFromId('mf-monthly-rollup', { heading: 'Monthly plan vs actual' }),
        { kind: 'callout', tone: 'info', title: 'Plan source',
          body: 'Pulled directly from the Commercial Budget XLSX in <code>inputs/multi-family/revenue-forecast/</code>. The monthly cells are illustrative; the contract is the ' + bdgStr + ' annual headline. If the budget is re-planned mid-year, drop the new XLSX in the inputs folder and the bridge updates automatically.'
        }
      ].filter(Boolean)
    };

    // ─────────────────────────────────────────────────────────────
    // JOB TYPES (mf-by-jobtype)
    // ─────────────────────────────────────────────────────────────
    var jtTable = T['mf-by-jobtype'];
    var jtRows = (jtTable && jtTable.rows) || [];
    mfPages['job-types'] = {
      eyebrow: 'JOB TYPES · MF',
      title: 'Job Type Analysis',
      intro: 'How the MF book splits across job types. Insurance is a tiny share of the count but a meaningful share of the dollars per deal; retail-no-financing is the volume engine.',
      tags: [{ kind: 'info', text: jtRows.length + ' active job types' }],
      sections: [
        jtRows.length ? kpisRow(jtRows.map(function (r, i) {
          return {
            label: r[0],
            value: r[1],   // pre-formatted dollar string
            sub: r[2] + ' jobs',
            tone: i === 0 ? 'navy' : i === 1 ? 'success' : 'navy'
          };
        }), Math.min(jtRows.length, 4)) : null,
        jtTable ? {
          kind: 'chart-grid', cols: 2,
          charts: [
            {
              title: 'Revenue share by job type',
              height: 300,
              config: {
                type: 'doughnut',
                data: {
                  labels: jtRows.map(function (r) { return r[0]; }),
                  datasets: [{
                    data: jtRows.map(function (r) {
                      // Strip "$" + "M/K" suffix to get a numeric share weight.
                      var s = String(r[1]).replace(/[$,\s]/g, '');
                      var mult = 1;
                      if (/M$/i.test(s)) { mult = 1e6; s = s.slice(0, -1); }
                      else if (/K$/i.test(s)) { mult = 1e3; s = s.slice(0, -1); }
                      return parseFloat(s) * mult || 0;
                    }),
                    backgroundColor: [pal.navy, pal.success, pal.warning, pal.danger],
                    borderColor: '#fff', borderWidth: 2
                  }]
                },
                options: withOpts({
                  cutout: '60%',
                  plugins: { legend: { position: 'right' } }
                })
              }
            },
            {
              title: 'Job count by type',
              height: 300,
              config: {
                type: 'bar',
                data: {
                  labels: jtRows.map(function (r) { return r[0]; }),
                  datasets: [{ data: jtRows.map(function (r) { return r[2] || 0; }), backgroundColor: pal.navy, label: '# Jobs' }]
                },
                options: withOpts({ plugins: { legend: { display: false } } })
              }
            }
          ].filter(Boolean)
        } : null,
        tableFromId('mf-by-jobtype', { heading: 'Revenue and job count by job type' }),
        { kind: 'callout', tone: 'info', title: 'Where the leverage is',
          body: 'Insurance jobs are the smallest count but tend to carry the largest contracts on the MF book. A single large insurance contract can materially move a month. Retail-no-financing sets the volume baseline.'
        }
      ].filter(Boolean)
    };

    // ─────────────────────────────────────────────────────────────
    // PIPELINE / WIP
    // ─────────────────────────────────────────────────────────────
    mfPages.pipeline = {
      eyebrow: 'PIPELINE · MF WIP',
      title: 'WIP & Pipeline',
      intro: 'Jobs currently in WIP (started, not yet invoiced) and the forecasted WIP roll-forward from Lisa\'s monthly schedules.',
      tags: [
        { kind: 'info', text: (pip.totalJobs || 0) + ' jobs in WIP' },
        { kind: 'info', text: fmt.money(pip.totalValue || 0, { short: true }) + ' WIP value' }
      ],
      sections: [
        kpisRow([
          { label: 'WIP Today',  value: fmt.money(pip.totalValue || 0, { short: true }), sub: (pip.totalJobs || 0) + ' jobs in flight', tone: 'navy' },
          { label: 'Avg Job in WIP', value: pip.totalJobs ? fmt.money((pip.totalValue || 0) / pip.totalJobs, { short: true }) : '$0', sub: 'mean contract value', tone: 'navy' },
          allKpis.find(function (k) { return /current wip/i.test(k.label); }) || { label: 'Current WIP KPI', value: '—', sub: '' },
          ytdVsFcstKpi || { label: 'YTD vs Forecast', value: '—', sub: '' }
        ]),
        {
          kind: 'chart-grid', cols: 1,
          heading: 'WIP balance over time',
          caption: 'Month-end WIP balance. Spikes mean we started more than we completed.',
          charts: [chartFromId('mf-wip-balance', { height: 320 })].filter(Boolean)
        },
        {
          kind: 'chart-grid', cols: 1,
          heading: 'Starts vs completions per month',
          charts: [chartFromId('mf-starts-vs-completions', { height: 280 })].filter(Boolean)
        },
        tableFromId('mf-wip-schedule', { heading: 'Forecasted WIP schedule (Lisa\'s monthly forecasts)' }),
        tableFromId('mf-in-wip', { heading: 'Currently in WIP (Salesforce-derived)', maxHeight: '480px' })
      ].filter(Boolean)
    };

    // ─────────────────────────────────────────────────────────────
    // CYCLE (days from start to invoice)
    // ─────────────────────────────────────────────────────────────
    mfPages.cycle = {
      eyebrow: 'CYCLE · MF',
      title: 'Cycle Times',
      intro: 'How long MF jobs take from start (in-progress) to invoiced. The list below is jobs currently in WIP, sorted by days since start. Pull from this list to find slips.',
      tags: [
        { kind: 'info', text: (pip.totalJobs || 0) + ' jobs in WIP' }
      ],
      sections: [
        kpisRow([
          { label: 'WIP Jobs',          value: (pip.totalJobs || 0) + '', sub: 'currently in flight', tone: 'navy' },
          { label: 'WIP Value',         value: fmt.money(pip.totalValue || 0, { short: true }), sub: 'sum of contract values', tone: 'navy' },
          { label: 'Avg WIP Contract',  value: pip.totalJobs ? fmt.money((pip.totalValue || 0) / pip.totalJobs, { short: true }) : '$0', sub: 'mean contract size', tone: 'navy' },
          { label: 'See Installs YTD',  value: 'Cycle median', sub: 'click through for the median-days view', tone: 'navy' }
        ]),
        tableFromId('mf-in-wip', {
          heading: 'WIP detail · sortable',
          caption: 'Each row = a job that has started but is not yet invoiced. Started date drives cycle.',
          maxHeight: '520px'
        }),
        { kind: 'callout', tone: 'info', title: 'For full cycle analysis',
          body: 'The Installs YTD dashboard has the cycle medians by branch, PM, and trade based on completed (invoiced) MF jobs. This tab focuses on what is currently in flight; for the closed-job cycle picture, see <strong>Installs YTD → Trends</strong> and <strong>Installs YTD → PMs</strong>.'
        }
      ].filter(Boolean)
    };

    // ─────────────────────────────────────────────────────────────
    // WEEKLY TARGETS (re-presented as monthly for MF)
    // ─────────────────────────────────────────────────────────────
    var monthlyNeed = (wtH.avgWeeklyNeed || 0) * (52 / 12);
    mfPages['weekly-targets'] = {
      eyebrow: 'TARGETS · MF MONTHLY',
      title: 'Monthly Targets',
      intro: 'What MF needs each month to land the ' + bdgStr + ' plan. The MF book runs monthly (lumpy big-deal cadence), so we treat the weekly target as informational only and anchor on the per-month bridge.',
      tags: [
        { kind: 'info', text: 'Annual plan ' + fmt.money(bdg, { short: true }) },
        gap >= 0
          ? { kind: 'success', text: 'On pace, +' + fmt.money(gap, { short: true }) }
          : { kind: 'warn',    text: brH.upliftPct.toFixed(1) + '% uplift needed' }
      ],
      sections: [
        kpisRow([
          { label: 'Avg Weekly Need',  value: fmt.money(wtH.avgWeeklyNeed || 0, { short: true }), sub: bdgStr + ' / 52 weeks · informational', tone: 'navy' },
          { label: 'Avg Monthly Need', value: fmt.money(monthlyNeed, { short: true }),            sub: bdgStr + ' / 12 months',                tone: 'navy' },
          ytdVsPlanKpi || { label: 'YTD vs Plan', value: '—', sub: '' },
          { label: 'Uplift Needed',    value: (brH.upliftPct || 0).toFixed(1) + '%',              sub: 'on remaining months',                tone: (brH.upliftPct || 0) > 10 ? 'danger' : (brH.upliftPct || 0) > 0 ? 'warn' : 'success' }
        ]),
        tableFromId('mf-monthly-rollup', { heading: 'Monthly target schedule (plan, actual, gap, starts)' }),
        { kind: 'callout', tone: 'info', title: 'Why monthly, not weekly',
          body: 'MF deal sizes range from a few thousand for repairs to several hundred thousand for insurance jobs. Weekly cadence is too noisy for management; a single big contract can flip a week. The Sales Overview Monthly Targets tab has the deeper monthly view with per-market lift.'
        }
      ].filter(Boolean)
    };

    // ─────────────────────────────────────────────────────────────
    // PRODUCTION (per branch)
    // ─────────────────────────────────────────────────────────────
    var byBranchTbl = T['mf-by-branch'];
    var byBranchRows = (byBranchTbl && byBranchTbl.rows) || [];
    var topBranchRow = byBranchRows[0];
    mfPages.production = {
      eyebrow: 'BRANCH DETAIL · MF',
      title: 'Production by Branch',
      intro: 'Forecasted revenue per branch per month from Lisa\'s schedules, plus YTD invoiced totals per branch from Salesforce.',
      tags: byBranchRows.length ? [{ kind: 'info', text: byBranchRows.length + ' branches with MF activity' }] : [],
      sections: [
        topBranchRow ? kpisRow([
          { label: 'Top Branch',     value: topBranchRow[0],                sub: topBranchRow[1] + ' invoiced · ' + (topBranchRow[3] || 0) + ' jobs', tone: 'success' },
          { label: 'WIP at Top',     value: topBranchRow[2] || '$0',        sub: 'currently in flight',                                              tone: 'navy' },
          { label: 'Total Branches', value: byBranchRows.length + '',       sub: 'with YTD MF activity',                                            tone: 'navy' },
          allKpis.find(function (k) { return /invoiced ytd/i.test(k.label); }) ||
          { label: 'YTD Revenue',    value: '—',                            sub: 'invoiced through last closed month',                                            tone: 'navy' }
        ]) : null,
        tableFromId('mf-branch-forecast', { heading: 'Forecasted revenue by branch (per month, from Lisa)' }),
        tableFromId('mf-by-branch',       { heading: 'YTD invoiced by branch (Salesforce actuals)' }),
        tableFromId('mf-by-jobtype',      { heading: 'YTD revenue by job type' }),
        { kind: 'callout', tone: 'info', title: 'Reading the two tables',
          body: 'The first table is forward-looking: what each branch said it would invoice in the upcoming months. The second is backward-looking: what each branch actually invoiced YTD. Compare the trajectory between them to spot branches running ahead or behind their own forecast.'
        }
      ].filter(Boolean)
    };

    // ─────────────────────────────────────────────────────────────
    // PROFITABILITY (parses GregProfitabilityMFResults*.csv)
    // ─────────────────────────────────────────────────────────────
    var profParsed = (ps.combinedGP || 0) > 0 || (ps.materialCost || 0) > 0;
    var jtProf = (D.profitabilityByJobType || []);
    var mkProf = (D.profitabilityByMarket || []);
    var jtProf25 = (D.profitabilityByJobType2025 || []);
    var mkProf25 = (D.profitabilityByMarket2025 || []);
    var ytdGmDelta = (ps.y2026_GP_pct || 0) - (ps.y2025_GP_pct || 0);   // YoY margin change
    var bestMktGm = mkProf.slice().filter(function (r) { return r.jobs >= 3; }).sort(function (a, b) { return b.gp_pct - a.gp_pct; })[0];
    var worstMktGm = mkProf.slice().filter(function (r) { return r.jobs >= 3; }).sort(function (a, b) { return a.gp_pct - b.gp_pct; })[0];

    function profRow(r, year) {
      // Render a profitability row: key, jobs, revenue, GP, GP%, material%, labor%
      var rev = r.revenue || 0;
      return [
        { html: '<strong>' + r.key + '</strong>' },
        r.jobs,
        fmt.money(r.revenue || 0),
        fmt.money(r.gross_profit || 0),
        { html: r.gp_pct >= 35
            ? '<span class="pill pill-success">' + r.gp_pct.toFixed(1) + '%</span>'
            : r.gp_pct >= 25
              ? '<span class="pill pill-warn">' + r.gp_pct.toFixed(1) + '%</span>'
              : '<span class="pill pill-danger">' + r.gp_pct.toFixed(1) + '%</span>' },
        rev > 0 ? (r.material / rev * 100).toFixed(1) + '%' : '—',
        rev > 0 ? (r.labor / rev * 100).toFixed(1) + '%' : '—'
      ];
    }
    var profHeaders = [
      'Segment',
      { label: 'Jobs', num: true },
      { label: 'Revenue', num: true },
      { label: 'Gross Profit', num: true },
      { label: 'GM %', num: true },
      { label: 'Material %', num: true },
      { label: 'Labor %', num: true }
    ];

    mfPages.profitability = profParsed ? {
      eyebrow: 'PROFITABILITY · MF',
      title: 'Profitability',
      intro: 'Gross margin and cost mix on the MF book, sourced from <code>' + (ps.sourceFile || 'GregProfitabilityMFResults*.csv') + '</code>. Includes <strong>' + (ps.jobsParsed || 0) + '</strong> jobs marked Invoiced or Closed-and-Capped-Out across ' + fyPrior + ' and YTD ' + fyCur + '. Combined GM is the all-jobs blended margin; year-split tables underneath show the YoY trajectory and the per-segment view.',
      tags: [
        { kind: 'success', text: 'Combined GM ' + (ps.combinedGP_pct || 0).toFixed(1) + '%' },
        { kind: ytdGmDelta >= 0 ? 'success' : 'warn',
          text: 'YoY ' + (ytdGmDelta >= 0 ? '+' : '') + ytdGmDelta.toFixed(1) + ' pts vs 2025' },
        bestMktGm ? { kind: 'info', text: 'Top margin: ' + bestMktGm.key + ' (' + bestMktGm.gp_pct.toFixed(1) + '%)' } : null
      ].filter(Boolean),
      sections: [
        kpisRow([
          { label: 'Combined Revenue', value: fmt.money(ps.combinedRevenue || 0, { short: true }), sub: (ps.jobsParsed || 0) + ' invoiced/capped jobs in source', tone: 'navy' },
          { label: 'Combined GM',      value: (ps.combinedGP_pct || 0).toFixed(1) + '%',           sub: fmt.money(ps.combinedGP || 0, { short: true }) + ' gross profit', tone: 'success' },
          { label: 'FY' + fyCur + ' GM',   value: (ps.y2026_GP_pct || 0).toFixed(1) + '%',
            sub: (ps.y2026_jobs || 0) + ' jobs · ' + fmt.money(ps.y2026_revenue || 0, { short: true }) + ' revenue',
            tone: ytdGmDelta >= 0 ? 'success' : 'warn' },
          { label: 'FY' + fyPrior + ' GM', value: (ps.y2025_GP_pct || 0).toFixed(1) + '%',
            sub: (ps.y2025_jobs || 0) + ' jobs · ' + fmt.money(ps.y2025_revenue || 0, { short: true }) + ' revenue',
            tone: 'navy' }
        ]),
        kpisRow([
          { label: 'Material Cost',  value: fmt.money(ps.materialCost || 0, { short: true }),   sub: (ps.materialPctContract || 0).toFixed(1) + '% of revenue',   tone: (ps.materialPctContract || 0) > 35 ? 'warn' : 'navy' },
          { label: 'Labor Cost',     value: fmt.money(ps.laborCost || 0, { short: true }),      sub: (ps.laborPctContract || 0).toFixed(1) + '% of revenue',      tone: (ps.laborPctContract || 0) > 32 ? 'warn' : 'navy' },
          { label: 'Other Cost',     value: fmt.money(ps.otherCost || 0, { short: true }),      sub: (ps.otherPctContract || 0).toFixed(1) + '% of revenue',      tone: 'navy' },
          { label: 'Commissions',    value: fmt.money(ps.commissions || 0, { short: true }),    sub: (ps.commissionPctContract || 0).toFixed(1) + '% of revenue', tone: 'navy' }
        ], 4),
        {
          kind: 'chart-grid', cols: 2,
          charts: [
            jtProf.length ? {
              title: 'FY' + fyCur + ' Revenue by job type',
              sub: 'Mix of cost-tracked jobs YTD',
              height: 300,
              config: {
                type: 'doughnut',
                data: {
                  labels: jtProf.map(function (r) { return r.key; }),
                  datasets: [{
                    data: jtProf.map(function (r) { return r.revenue; }),
                    backgroundColor: [pal.navy, pal.success, pal.warning, pal.danger, '#7d3c98', '#16a085'],
                    borderColor: '#fff', borderWidth: 2
                  }]
                },
                options: withOpts({ cutout: '60%', plugins: { legend: { position: 'right' } } })
              }
            } : null,
            mkProf.length ? {
              title: 'FY' + fyCur + ' GM% by market',
              sub: '≥35% green · ≥25% amber · <25% red',
              height: 300,
              config: {
                type: 'bar',
                data: {
                  labels: mkProf.map(function (r) { return r.key; }),
                  datasets: [{
                    data: mkProf.map(function (r) { return r.gp_pct; }),
                    backgroundColor: mkProf.map(function (r) {
                      return r.gp_pct >= 35 ? pal.success : r.gp_pct >= 25 ? pal.warning : pal.danger;
                    }),
                    label: 'GM %'
                  }]
                },
                options: withOpts({
                  indexAxis: 'y',
                  scales: { x: { ticks: { callback: function (v) { return v + '%'; } }, beginAtZero: true } },
                  plugins: { legend: { display: false } }
                })
              }
            } : null
          ].filter(Boolean)
        },
        jtProf.length ? {
          kind: 'table',
          heading: 'FY' + fyCur + ' profitability by job type',
          caption: 'GM% pill: green ≥35%, amber ≥25%, red <25%',
          headers: profHeaders,
          rows: jtProf.map(function (r) { return profRow(r, fyCur); })
        } : null,
        mkProf.length ? {
          kind: 'table',
          heading: 'FY' + fyCur + ' profitability by market',
          caption: 'Branches with at least one cost-tracked job in ' + fyCur,
          headers: profHeaders,
          rows: mkProf.map(function (r) { return profRow(r, fyCur); })
        } : null,
        jtProf25.length ? {
          kind: 'table',
          heading: 'FY' + fyPrior + ' profitability by job type (comparison)',
          caption: 'Year-over-year baseline. Does this match what you expected?',
          headers: profHeaders,
          rows: jtProf25.map(function (r) { return profRow(r, fyPrior); })
        } : null,
        {
          kind: 'callout',
          tone: ytdGmDelta >= 0 ? 'success' : 'warn',
          title: ytdGmDelta >= 0 ? 'Margin trending up' : 'Margin trending down',
          body: ytdGmDelta >= 0
            ? 'FY' + fyCur + ' YTD GM is <strong>' + ytdGmDelta.toFixed(1) + ' points higher</strong> than FY' + fyPrior + ' (' + ps.y2026_GP_pct.toFixed(1) + '% vs ' + ps.y2025_GP_pct.toFixed(1) + '%). The lift is consistent with the mix shift toward Insurance jobs and the smaller share of low-ticket retail. Worth interrogating: whether material costs trended down because of MMU credits or because of project mix.'
            : 'FY' + fyCur + ' YTD GM is <strong>' + Math.abs(ytdGmDelta).toFixed(1) + ' points lower</strong> than FY' + fyPrior + ' (' + ps.y2026_GP_pct.toFixed(1) + '% vs ' + ps.y2025_GP_pct.toFixed(1) + '%). Drill into the per-market table above; concentrated weakness in 1-2 markets usually means a single under-priced job is dragging the average. Check material % first: if material crept above 35%, that is the lever to pull.'
        },
        bestMktGm && worstMktGm && bestMktGm.key !== worstMktGm.key ? {
          kind: 'callout', tone: 'info', title: 'Margin spread',
          body: '<strong>' + bestMktGm.key + '</strong> leads with <strong>' + bestMktGm.gp_pct.toFixed(1) + '%</strong> GM on ' + bestMktGm.jobs + ' jobs (' + fmt.money(bestMktGm.revenue, { short: true }) + ' revenue). <strong>' + worstMktGm.key + '</strong> trails at <strong>' + worstMktGm.gp_pct.toFixed(1) + '%</strong> on ' + worstMktGm.jobs + ' jobs. The spread is ' + (bestMktGm.gp_pct - worstMktGm.gp_pct).toFixed(1) + ' points; if it persists three months in a row, it is a structural issue (estimating, scope discipline, or material sourcing) not noise.'
        } : null
      ].filter(Boolean)
    } : {
      // Fallback: profitability CSV not present this refresh
      eyebrow: 'PROFITABILITY · MF',
      title: 'Profitability',
      intro: 'MF profitability CSV not parsed this refresh. Drop the latest <code>GregProfitabilityMFResults*.csv</code> into <code>inputs/multi-family/revenue-forecast/</code> and rerun the build.',
      tags: [{ kind: 'info', text: 'Awaiting cost data' }],
      sections: [
        kpisRow([
          { label: 'YTD Revenue', value: fmt.money(ps.combinedRevenue || 0, { short: true }), sub: (ps.y2026_jobs || 0) + ' jobs · revenue-only view', tone: 'navy' },
          { label: 'YTD Jobs',    value: (ps.y2026_jobs || 0) + '', sub: 'invoiced or closed YTD', tone: 'navy' },
          { label: 'GM (combined)', value: '—', sub: 'no cost data parsed', tone: 'navy' },
          { label: 'FY' + fyPrior + ' Comp', value: ps.y2025_jobs ? (ps.y2025_jobs + ' jobs') : '—', sub: ps.y2025_revenue ? fmt.money(ps.y2025_revenue, { short: true }) + ' revenue' : '', tone: 'navy' }
        ]),
        { kind: 'callout', tone: 'info', title: 'Profitability source',
          body: 'The MF profitability view reads <code>GregProfitabilityMFResults*.csv</code> exported from NetSuite. Each row carries Revenue (Stored), Total Expenses (Stored), Material Expenses, Labor Expenses, Other Expenses, and Commission columns. The calculator filters to <code>Feazel Status = Invoiced</code> or <code>Closed and Capped Out</code> and aggregates GM, cost mix, and per-market splits.' }
      ]
    };

    // ─────────────────────────────────────────────────────────────
    // BUDGET RECOVERY (variance)
    // ─────────────────────────────────────────────────────────────
    mfPages['budget-recovery'] = {
      eyebrow: 'RECOVERY · MF VARIANCE',
      title: 'Budget Recovery',
      intro: 'Per-month variance against plan and against Lisa\'s forecast. Tells you where to intervene before the month closes.',
      tags: [
        { kind: gap >= 0 ? 'success' : 'warn', text: 'Forecast vs Plan ' + (gap >= 0 ? '+' : '') + fmt.money(gap, { short: true }) },
        ytdVsPlanKpi ? { kind: ytdVsPlanKpi.tone === 'danger' ? 'warn' : 'success', text: 'YTD vs Plan ' + ytdVsPlanKpi.value } : null
      ].filter(Boolean),
      sections: [
        kpisRow([
          { label: 'Annual Plan',     value: fmt.money(bdg, { short: true }),    sub: 'Commercial Budget · ' + fyCur,              tone: 'navy' },
          ytdVsPlanKpi || { label: 'YTD vs Plan', value: '—', sub: '' },
          { label: 'Uplift Needed',   value: (brH.upliftPct || 0).toFixed(1) + '%', sub: 'on remaining months to recover plan',  tone: (brH.upliftPct || 0) > 10 ? 'danger' : (brH.upliftPct || 0) > 0 ? 'warn' : 'success' },
          { label: 'Forecast Gap',    value: (gap >= 0 ? '+' : '') + fmt.money(gap, { short: true }), sub: 'annualized run-rate vs plan', tone: gap >= 0 ? 'success' : 'warn' }
        ]),
        {
          kind: 'chart-grid', cols: 1,
          heading: 'Per-month forecast variance',
          caption: 'Bars above zero = beat Lisa\'s forecast that month. Bars below = missed.',
          charts: [chartFromId('mf-variance', { height: 320 })].filter(Boolean)
        },
        tableFromId('mf-variance', { heading: 'Forecast vs actual (per month)' }),
        tableFromId('mf-monthly-rollup', { heading: 'Monthly plan vs actual' }),
        { kind: 'callout', tone: gap >= 0 ? 'success' : 'warn',
          title: gap >= 0 ? 'On pace' : 'Recovery levers',
          body: gap >= 0
            ? 'Annualized run-rate clears the plan. The variance table shows where each month landed against Lisa\'s forecast; treat negative variance as an early warning even when the year is on track.'
            : 'Two levers to close the <strong>' + fmt.money(Math.abs(gap), { short: true }) + '</strong> gap: push WIP through to invoice (<strong>' + fmt.money(pip.totalValue || 0, { short: true }) + '</strong> currently sitting in WIP) and accelerate starts on the higher-margin job types. The Recommendations tab has the specific moves.'
        }
      ].filter(Boolean)
    };

    // ─────────────────────────────────────────────────────────────
    // RECOMMENDATIONS
    // ─────────────────────────────────────────────────────────────
    var actions = (commentary.actionableRecommendations || []).map(function (r) { return { text: r }; });
    var highlights = (commentary.strategyHighlights || []).map(function (r) { return { text: r }; });
    mfPages.recommendations = {
      eyebrow: 'STRATEGY · MF',
      title: 'Recommendations',
      intro: es.narrative || ('Where the MF book stands and the next moves to land the ' + bdgStr + ' plan.'),
      tags: actions.length ? [{ kind: 'info', text: actions.length + ' action item' + (actions.length === 1 ? '' : 's') }] : [],
      sections: [
        kpisRow([
          { label: 'Plan',            value: fmt.money(bdg, { short: true }),    sub: 'MF Commercial Budget',           tone: 'navy' },
          { label: 'Annual Forecast', value: fmt.money(actual, { short: true }), sub: 'annualized run-rate',            tone: gap >= 0 ? 'success' : 'warn' },
          { label: 'Forecast Gap',    value: (gap >= 0 ? '+' : '') + fmt.money(gap, { short: true }), sub: brH.upliftPct ? brH.upliftPct.toFixed(1) + '% uplift needed' : 'on plan', tone: gap >= 0 ? 'success' : 'warn' },
          { label: 'Current WIP',     value: fmt.money(pip.totalValue || 0, { short: true }), sub: (pip.totalJobs || 0) + ' jobs to push through', tone: 'navy' }
        ]),
        {
          kind: 'prose',
          cards: [
            {
              kind: 'navy',
              eyebrow: 'EXECUTIVE NARRATIVE',
              title: 'Where MF stands',
              body: '<p>' + (es.narrative || '') + '</p>'
            },
            actions.length ? {
              kind: 'tint',
              eyebrow: 'NEXT MOVES',
              title: 'Action items',
              list: actions
            } : null,
            highlights.length ? {
              eyebrow: 'STRATEGY',
              title: 'Highlights',
              list: highlights
            } : null
          ].filter(Boolean),
          cols: 2
        }
      ].filter(Boolean)
    };

    return mfPages;
  }

  // ============================================================
  // SERVICE page builder
  // Same shape as MF (KPIs, monthRevenue, profitabilitySummary,
  // tables, charts) so most rendering carries through. Service-
  // specific copy: fee-for-service line, no Lisa schedules, no
  // multi-trade lift; the model is annualized run-rate vs the
  // 2026 Service Budget.
  // ============================================================
  function buildServicePages (D, T, C, fmt, pal, BASE_OPTS, moneyAxis, withOpts) {
    var svcYr = (window.FZ && window.FZ.timeContext) ? window.FZ.timeContext().year : new Date().getFullYear();
    var svcYrPrior = svcYr - 1;
    var es = D.execSummary || {};
    var bdg = es.budget || 0;
    var actual = es.modelAnnualInvoiced || 0;
    var gap = es.gap || 0;
    var ps = D.profitabilitySummary || {};
    var brH = D.budgetRecoveryHeader || {};
    var commentary = D.commentary || {};
    var ns = D.netsuiteInvoiced || {};

    function kpisRow (slice, cols) {
      return { kind: 'kpi-row', cols: cols || 4, items: slice };
    }
    function kpiObj (k) {
      return {
        label: k.label, value: k.value, sub: k.sub || '',
        tone: k.trend === 'positive' ? 'success' : (k.trend === 'negative' ? 'danger' : 'navy')
      };
    }
    var allKpis = (D.kpis || []).map(kpiObj);
    function chartFromId (id, opts) {
      var c = C[id]; if (!c) return null;
      opts = opts || {};
      return {
        title: opts.title || c.title,
        sub: opts.sub || c.sub,
        height: opts.height || 300,
        config: c.config ? Object.assign({}, c.config, {
          options: withOpts(Object.assign({ scales: { y: moneyAxis() } }, opts.options || {}))
        }) : null
      };
    }
    function tableFromId (id, opts) {
      var t = T[id]; if (!t) return null;
      opts = opts || {};
      return {
        kind: 'table',
        heading: opts.heading || t.title,
        caption: opts.caption,
        maxHeight: opts.maxHeight,
        compact: opts.compact !== false,
        headers: t.headers,
        rows: t.rows
      };
    }

    var svcPages = {};

    var lastClosedKpi = allKpis.find(function (k) { return /last month revenue/i.test(k.label); });
    var lastVsPlanKpi = allKpis.find(function (k) { return /last month vs plan/i.test(k.label); });
    var ytdVsPlanKpi  = allKpis.find(function (k) { return /ytd vs plan/i.test(k.label); });
    var paceKpi       = allKpis.find(function (k) { return /annualized pace/i.test(k.label); });
    var planRestKpi   = allKpis.find(function (k) { return /plan-rest/i.test(k.label); });

    // ─────────────────────────────────────────────────────────────
    // INDEX / EXECUTIVE
    // ─────────────────────────────────────────────────────────────
    var indexPage = {
      eyebrow: D.subtitle || ('SERVICE-V1 · ' + svcYr),
      title: 'Service Revenue Forecast',
      intro: es.narrative || ('Service revenue tracking against the ' + svcYr + ' Service Budget. Actuals come from NetSuite invoiced revenue (per-invoice export, all ' + svcYr + ' dates). The forecast is the annualized run-rate compared against the budget plan; the Service book is fee-for-service, so cycle is short and projections lean heavily on the YTD pace.'),
      tags: [
        { kind: 'info',    text: 'Service-v1 · locked ' + (D.methodologyLock ? D.methodologyLock.lockedOn : '2026-05-06') },
        { kind: gap >= 0 ? 'success' : 'warn', text: (gap >= 0 ? '+' : '') + fmt.money(gap, { short: true }) + ' vs plan' },
        { kind: 'info',    text: 'Plan ' + fmt.money(bdg, { short: true }) }
      ],
      sections: [
        kpisRow(allKpis.slice(0, 4)),
        kpisRow(allKpis.slice(4, 8)),
        chartFromId('sv-rev-vs-plan') ? {
          kind: 'chart-grid', cols: 1,
          heading: 'Monthly revenue vs plan',
          caption: 'Green bars = NetSuite invoiced revenue per closed month. Navy bars = Service Budget plan.',
          charts: [chartFromId('sv-rev-vs-plan', { height: 320 })].filter(Boolean)
        } : null,
        tableFromId('sv-monthly-rollup', {
          heading: 'Monthly roll-up',
          caption: 'Plan = monthly cells from the ' + svcYr + ' Service Budget · Revenue = NetSuite booked invoices'
        }),
        tableFromId('sv-by-branch', {
          heading: 'YTD invoiced by branch',
          caption: 'Sorted by total invoiced · sourced from the NetSuite per-invoice export'
        }),
        { kind: 'callout', tone: gap >= 0 ? 'success' : 'warn',
          title: gap >= 0 ? 'On pace to plan' : 'Below plan',
          body: gap >= 0
            ? 'Annualized run-rate of <strong>' + fmt.money(actual, { short: true }) + '</strong> clears the ' + fmt.money(bdg, { short: true }) + ' Service plan. The bridge in Budget Recovery shows the per-month pace required to hold the lead.'
            : 'Annualized run-rate of <strong>' + fmt.money(actual, { short: true }) + '</strong> projects <strong>' + fmt.money(gap, { short: true }) + '</strong> short of the ' + fmt.money(bdg, { short: true }) + ' plan, a <strong>' + (brH.upliftPct || 0).toFixed(1) + '%</strong> uplift on remaining months. Service is fee-for-service, so the lever is volume, not ticket size.'
        }
      ].filter(Boolean)
    };
    svcPages.index = indexPage;
    svcPages.executive = indexPage;

    // ─────────────────────────────────────────────────────────────
    // PROJECTION
    // ─────────────────────────────────────────────────────────────
    svcPages.projection = {
      eyebrow: 'PROJECTION · SERVICE',
      title: 'Annual Projection',
      intro: 'Where Service lands at year-end. Two views: annualized run-rate (YTD × 12 / months elapsed) versus plan-rest forecast (YTD actual + plan for remaining months). Plan-rest is the more honest read for board materials.',
      tags: [
        { kind: 'info', text: 'Annual plan ' + fmt.money(bdg, { short: true }) },
        { kind: gap >= 0 ? 'success' : 'warn', text: (gap >= 0 ? '+' : '') + fmt.money(gap, { short: true }) + ' vs plan' }
      ],
      sections: [
        kpisRow([
          paceKpi || { label: 'Annualized Pace', value: fmt.money(actual, { short: true }), sub: 'YTD × 12/months', tone: gap >= 0 ? 'success' : 'warn' },
          planRestKpi || { label: 'Plan-Rest Forecast', value: fmt.money(actual, { short: true }), sub: 'YTD + remaining plan', tone: 'navy' },
          { label: 'Annual Budget', value: fmt.money(bdg, { short: true }), sub: svcYr + ' Service plan', tone: 'navy' },
          { label: 'Forecast Gap', value: (gap >= 0 ? '+' : '') + fmt.money(gap, { short: true }), sub: (brH.upliftPct || 0).toFixed(1) + '% uplift needed', tone: gap >= 0 ? 'success' : 'warn' }
        ]),
        chartFromId('sv-rev-vs-plan') ? {
          kind: 'chart-grid', cols: 1,
          charts: [chartFromId('sv-rev-vs-plan', { title: 'Revenue vs plan by month', height: 360 })].filter(Boolean)
        } : null,
        tableFromId('sv-monthly-rollup', { heading: 'Monthly trajectory' }),
        { kind: 'callout', tone: gap >= 0 ? 'success' : 'warn',
          title: 'How to read the projection',
          body: 'Service is short-cycle, so the annualized run-rate reflects sales pace pretty directly. <strong>Plan-rest</strong> is more honest because it assumes the rest of the year hits the budget plan, not that the current pace persists. Both are below ' + fmt.money(bdg, { short: true }) + ' currently; the lever is volume in the top branches (Columbus, Detroit, Raleigh).'
        }
      ].filter(Boolean)
    };

    // ─────────────────────────────────────────────────────────────
    // MONTHLY
    // ─────────────────────────────────────────────────────────────
    svcPages.monthly = {
      eyebrow: 'MONTHLY DETAIL · SERVICE',
      title: 'Monthly Roll-Up',
      intro: 'Per-month invoiced revenue against the Service Budget plan. Each row is a month; each cell is sourced from NetSuite for actuals and the budget XLSX for plan.',
      tags: [
        lastClosedKpi ? { kind: 'success', text: lastClosedKpi.label + ' ' + lastClosedKpi.value } : null,
        lastVsPlanKpi ? { kind: lastVsPlanKpi.tone === 'danger' ? 'warn' : 'info', text: lastVsPlanKpi.label + ' ' + lastVsPlanKpi.value } : null
      ].filter(Boolean),
      sections: [
        kpisRow([
          lastClosedKpi || { label: 'Last Month', value: '—', sub: '' },
          lastVsPlanKpi || { label: 'Last Month vs Plan', value: '—', sub: '' },
          ytdVsPlanKpi  || { label: 'YTD vs Plan', value: '—', sub: '' },
          paceKpi       || { label: 'Annualized Pace', value: '—', sub: '' }
        ]),
        chartFromId('sv-rev-vs-plan') ? {
          kind: 'chart-grid', cols: 1,
          charts: [chartFromId('sv-rev-vs-plan', { height: 320 })].filter(Boolean)
        } : null,
        tableFromId('sv-monthly-rollup', { heading: 'Monthly roll-up' })
      ].filter(Boolean)
    };

    // ─────────────────────────────────────────────────────────────
    // BUDGET (annual plan detail)
    // ─────────────────────────────────────────────────────────────
    svcPages.budget = {
      eyebrow: 'PLAN · ' + svcYr + ' SERVICE BUDGET',
      title: 'Annual Budget Detail',
      intro: 'Per-month invoiced-revenue plan from the ' + svcYr + ' Service Budget XLSX (Total - 40000 - Revenue row). Annual headline is ' + fmt.money(bdg, { short: true }) + '.',
      tags: [
        { kind: 'info', text: 'Annual plan ' + fmt.money(bdg, { short: true }) },
        ytdVsPlanKpi ? { kind: ytdVsPlanKpi.tone === 'danger' ? 'warn' : 'success', text: 'YTD vs plan ' + ytdVsPlanKpi.value } : null
      ].filter(Boolean),
      sections: [
        kpisRow([
          { label: 'Annual Plan',      value: fmt.money(bdg, { short: true }),       sub: 'Service Budget · ' + svcYr, tone: 'navy' },
          ytdVsPlanKpi || { label: 'YTD vs Plan', value: '—', sub: '' },
          { label: 'Forecast vs Plan', value: (gap >= 0 ? '+' : '') + fmt.money(gap, { short: true }), sub: (brH.upliftPct || 0).toFixed(1) + '% gap', tone: gap >= 0 ? 'success' : 'warn' },
          { label: 'Uplift Needed',    value: (brH.upliftPct || 0).toFixed(1) + '%', sub: 'on remaining months',  tone: (brH.upliftPct || 0) > 10 ? 'danger' : (brH.upliftPct || 0) > 0 ? 'warn' : 'success' }
        ]),
        tableFromId('sv-monthly-rollup', { heading: 'Monthly plan vs actual' }),
        { kind: 'callout', tone: 'info', title: 'Plan source',
          body: 'Sourced from <code>2026 Service Budget.xlsx</code> in <code>inputs/service/revenue-forecast/</code>. Drop a re-planned XLSX in the same folder and the bridge updates automatically.' }
      ].filter(Boolean)
    };

    // ─────────────────────────────────────────────────────────────
    // BUDGET RECOVERY (variance)
    // ─────────────────────────────────────────────────────────────
    svcPages['budget-recovery'] = {
      eyebrow: 'RECOVERY · SERVICE',
      title: 'Budget Recovery',
      intro: 'Where Service stands against plan and what the rest-of-year pace needs to be to land ' + fmt.money(bdg, { short: true }) + '.',
      tags: [
        { kind: gap >= 0 ? 'success' : 'warn', text: 'Forecast vs Plan ' + (gap >= 0 ? '+' : '') + fmt.money(gap, { short: true }) },
        ytdVsPlanKpi ? { kind: ytdVsPlanKpi.tone === 'danger' ? 'warn' : 'success', text: 'YTD vs Plan ' + ytdVsPlanKpi.value } : null
      ].filter(Boolean),
      sections: [
        kpisRow([
          { label: 'Annual Plan',     value: fmt.money(bdg, { short: true }),    sub: 'Service Budget',                            tone: 'navy' },
          ytdVsPlanKpi || { label: 'YTD vs Plan', value: '—', sub: '' },
          { label: 'Uplift Needed',   value: (brH.upliftPct || 0).toFixed(1) + '%', sub: 'on remaining months to recover plan',  tone: (brH.upliftPct || 0) > 10 ? 'danger' : (brH.upliftPct || 0) > 0 ? 'warn' : 'success' },
          { label: 'Forecast Gap',    value: (gap >= 0 ? '+' : '') + fmt.money(gap, { short: true }), sub: 'annualized run-rate vs plan', tone: gap >= 0 ? 'success' : 'warn' }
        ]),
        chartFromId('sv-rev-vs-plan') ? {
          kind: 'chart-grid', cols: 1,
          charts: [chartFromId('sv-rev-vs-plan', { title: 'Monthly revenue vs plan', height: 320 })].filter(Boolean)
        } : null,
        tableFromId('sv-monthly-rollup', { heading: 'Monthly plan vs actual' }),
        { kind: 'callout', tone: gap >= 0 ? 'success' : 'warn',
          title: gap >= 0 ? 'On pace' : 'Recovery levers',
          body: gap >= 0
            ? 'Annualized run-rate clears the plan. Watch for any single month dropping more than 25% below plan; service revenue is concentrated in the top three branches and a coverage gap there shows up immediately.'
            : 'To close the <strong>' + fmt.money(Math.abs(gap), { short: true }) + '</strong> gap, lift remaining-month invoiced revenue by <strong>' + (brH.upliftPct || 0).toFixed(1) + '%</strong>. The service book is fee-for-service so the lever is volume: more service tickets per branch per week, especially at the top branches that already carry the book.'
        }
      ].filter(Boolean)
    };

    // ─────────────────────────────────────────────────────────────
    // PROFITABILITY (full cost-mix view, mirrors MF)
    // ─────────────────────────────────────────────────────────────
    var profParsed = (ps.combinedGP || 0) > 0 || (ps.materialCost || 0) > 0;
    var jtProf  = (D.profitabilityByJobType || []);
    var mkProf  = (D.profitabilityByMarket || []);
    var jtProf25 = (D.profitabilityByJobType2025 || []);
    var ytdGmDelta = (ps.y2026_GP_pct || 0) - (ps.y2025_GP_pct || 0);
    var bestMktGm = mkProf.slice().filter(function (r) { return r.jobs >= 3; }).sort(function (a, b) { return b.gp_pct - a.gp_pct; })[0];
    var worstMktGm = mkProf.slice().filter(function (r) { return r.jobs >= 3; }).sort(function (a, b) { return a.gp_pct - b.gp_pct; })[0];

    function profRow(r) {
      var rev = r.revenue || 0;
      return [
        { html: '<strong>' + r.key + '</strong>' },
        r.jobs,
        fmt.money(r.revenue || 0),
        fmt.money(r.gross_profit || 0),
        { html: r.gp_pct >= 35
            ? '<span class="pill pill-success">' + r.gp_pct.toFixed(1) + '%</span>'
            : r.gp_pct >= 25
              ? '<span class="pill pill-warn">' + r.gp_pct.toFixed(1) + '%</span>'
              : '<span class="pill pill-danger">' + r.gp_pct.toFixed(1) + '%</span>' },
        rev > 0 ? (r.material / rev * 100).toFixed(1) + '%' : '—',
        rev > 0 ? (r.labor / rev * 100).toFixed(1) + '%' : '—'
      ];
    }
    var profHeaders = [
      'Segment',
      { label: 'Jobs', num: true },
      { label: 'Revenue', num: true },
      { label: 'Gross Profit', num: true },
      { label: 'GM %', num: true },
      { label: 'Material %', num: true },
      { label: 'Labor %', num: true }
    ];

    svcPages.profitability = profParsed ? {
      eyebrow: 'PROFITABILITY · SERVICE',
      title: 'Profitability',
      intro: 'Gross margin and cost mix on the Service book, sourced from <code>' + (ps.sourceFile || 'GregProfitabilityServiceResults*.csv') + '</code>. Service is a higher-margin line than installs (typical 45-60% GM) because fewer materials and more labor density per ticket.',
      tags: [
        { kind: 'success', text: 'Combined GM ' + (ps.combinedGP_pct || 0).toFixed(1) + '%' },
        { kind: ytdGmDelta >= 0 ? 'success' : 'warn',
          text: 'YoY ' + (ytdGmDelta >= 0 ? '+' : '') + ytdGmDelta.toFixed(1) + ' pts vs 2025' },
        bestMktGm ? { kind: 'info', text: 'Top margin: ' + bestMktGm.key + ' (' + bestMktGm.gp_pct.toFixed(1) + '%)' } : null
      ].filter(Boolean),
      sections: [
        kpisRow([
          { label: 'Combined Revenue', value: fmt.money(ps.combinedRevenue || 0, { short: true }), sub: (ps.jobsParsed || 0) + ' invoiced/closed jobs in source', tone: 'navy' },
          { label: 'Combined GM',      value: (ps.combinedGP_pct || 0).toFixed(1) + '%',           sub: fmt.money(ps.combinedGP || 0, { short: true }) + ' gross profit', tone: 'success' },
          { label: 'FY' + svcYr + ' GM',        value: (ps.y2026_GP_pct || 0).toFixed(1) + '%',
            sub: (ps.y2026_jobs || 0) + ' jobs · ' + fmt.money(ps.y2026_revenue || 0, { short: true }),
            tone: ytdGmDelta >= 0 ? 'success' : 'warn' },
          { label: 'FY' + svcYrPrior + ' GM',        value: (ps.y2025_GP_pct || 0).toFixed(1) + '%',
            sub: (ps.y2025_jobs || 0) + ' jobs · ' + fmt.money(ps.y2025_revenue || 0, { short: true }),
            tone: 'navy' }
        ]),
        kpisRow([
          { label: 'Material Cost',  value: fmt.money(ps.materialCost || 0, { short: true }),   sub: (ps.materialPctContract || 0).toFixed(1) + '% of revenue',   tone: (ps.materialPctContract || 0) > 35 ? 'warn' : 'navy' },
          { label: 'Labor Cost',     value: fmt.money(ps.laborCost || 0, { short: true }),      sub: (ps.laborPctContract || 0).toFixed(1) + '% of revenue',      tone: (ps.laborPctContract || 0) > 32 ? 'warn' : 'navy' },
          { label: 'Other Cost',     value: fmt.money(ps.otherCost || 0, { short: true }),      sub: (ps.otherPctContract || 0).toFixed(1) + '% of revenue',      tone: 'navy' },
          { label: 'Commissions',    value: fmt.money(ps.commissions || 0, { short: true }),    sub: (ps.commissionPctContract || 0).toFixed(1) + '% of revenue', tone: 'navy' }
        ], 4),
        {
          kind: 'chart-grid', cols: 2,
          charts: [
            jtProf.length ? {
              title: 'FY' + svcYr + ' Revenue by job type',
              sub: 'Mix of cost-tracked jobs YTD',
              height: 300,
              config: {
                type: 'doughnut',
                data: {
                  labels: jtProf.map(function (r) { return r.key; }),
                  datasets: [{
                    data: jtProf.map(function (r) { return r.revenue; }),
                    backgroundColor: [pal.navy, pal.success, pal.warning, pal.danger, '#7d3c98', '#16a085'],
                    borderColor: '#fff', borderWidth: 2
                  }]
                },
                options: withOpts({ cutout: '60%', plugins: { legend: { position: 'right' } } })
              }
            } : null,
            mkProf.length ? {
              title: 'FY' + svcYr + ' GM% by branch',
              sub: '≥35% green · ≥25% amber · <25% red',
              height: 300,
              config: {
                type: 'bar',
                data: {
                  labels: mkProf.map(function (r) { return r.key; }),
                  datasets: [{
                    data: mkProf.map(function (r) { return r.gp_pct; }),
                    backgroundColor: mkProf.map(function (r) {
                      return r.gp_pct >= 35 ? pal.success : r.gp_pct >= 25 ? pal.warning : pal.danger;
                    }),
                    label: 'GM %'
                  }]
                },
                options: withOpts({
                  indexAxis: 'y',
                  scales: { x: { ticks: { callback: function (v) { return v + '%'; } }, beginAtZero: true } },
                  plugins: { legend: { display: false } }
                })
              }
            } : null
          ].filter(Boolean)
        },
        jtProf.length ? {
          kind: 'table',
          heading: 'FY' + svcYr + ' profitability by job type',
          caption: 'GM% pill: green ≥35%, amber ≥25%, red <25%',
          headers: profHeaders,
          rows: jtProf.map(profRow)
        } : null,
        mkProf.length ? {
          kind: 'table',
          heading: 'FY' + svcYr + ' profitability by branch',
          caption: 'Branches with at least one cost-tracked Service job in ' + svcYr,
          headers: profHeaders,
          rows: mkProf.map(profRow)
        } : null,
        jtProf25.length ? {
          kind: 'table',
          heading: 'FY' + svcYrPrior + ' profitability by job type (comparison)',
          caption: 'Year-over-year baseline',
          headers: profHeaders,
          rows: jtProf25.map(profRow)
        } : null,
        {
          kind: 'callout',
          tone: ytdGmDelta >= 0 ? 'success' : 'warn',
          title: ytdGmDelta >= 0 ? 'Margin trending up' : 'Margin trending down',
          body: ytdGmDelta >= 0
            ? 'FY' + svcYr + ' YTD GM is <strong>' + ytdGmDelta.toFixed(1) + ' points higher</strong> than FY' + svcYrPrior + ' (' + ps.y2026_GP_pct.toFixed(1) + '% vs ' + ps.y2025_GP_pct.toFixed(1) + '%). Service GM is sensitive to dispatch density: fewer trucks per geo means higher labor% per ticket. Sustained gains usually come from route optimization.'
            : 'FY' + svcYr + ' YTD GM is <strong>' + Math.abs(ytdGmDelta).toFixed(1) + ' points lower</strong> than FY' + svcYrPrior + ' (' + ps.y2026_GP_pct.toFixed(1) + '% vs ' + ps.y2025_GP_pct.toFixed(1) + '%). Drill into the per-branch table; concentrated weakness in 1-2 branches usually means a coverage gap or under-pricing on small tickets.'
        },
        bestMktGm && worstMktGm && bestMktGm.key !== worstMktGm.key ? {
          kind: 'callout', tone: 'info', title: 'Margin spread',
          body: '<strong>' + bestMktGm.key + '</strong> leads with <strong>' + bestMktGm.gp_pct.toFixed(1) + '%</strong> GM on ' + bestMktGm.jobs + ' jobs (' + fmt.money(bestMktGm.revenue, { short: true }) + ' revenue). <strong>' + worstMktGm.key + '</strong> trails at <strong>' + worstMktGm.gp_pct.toFixed(1) + '%</strong> on ' + worstMktGm.jobs + ' jobs. The spread is ' + (bestMktGm.gp_pct - worstMktGm.gp_pct).toFixed(1) + ' points; if it persists three months, it is a structural issue not noise.'
        } : null
      ].filter(Boolean)
    } : {
      eyebrow: 'PROFITABILITY · SERVICE',
      title: 'Profitability',
      intro: 'Service profitability CSV not parsed this refresh. Drop the latest <code>GregProfitabilityServiceResults*.csv</code> into <code>inputs/service/revenue-forecast/</code> and rerun the build.',
      tags: [{ kind: 'info', text: 'Awaiting cost data' }],
      sections: [
        { kind: 'callout', tone: 'info', title: 'Profitability source',
          body: 'The Service profitability view reads <code>GregProfitabilityServiceResults*.csv</code> exported from NetSuite. Same column shape as residential and MF. Filter is Feazel Status in {Invoiced, Closed and Capped Out}.' }
      ]
    };

    // ─────────────────────────────────────────────────────────────
    // RECOMMENDATIONS
    // ─────────────────────────────────────────────────────────────
    var actions = (commentary.actionableRecommendations || []).map(function (r) { return { text: r }; });
    svcPages.recommendations = {
      eyebrow: 'STRATEGY · SERVICE',
      title: 'Recommendations',
      intro: es.narrative || 'Where the Service book stands and the next moves to land the plan.',
      tags: actions.length ? [{ kind: 'info', text: actions.length + ' action item' + (actions.length === 1 ? '' : 's') }] : [],
      sections: [
        kpisRow([
          { label: 'Plan',            value: fmt.money(bdg, { short: true }),    sub: svcYr + ' Service Budget',           tone: 'navy' },
          { label: 'Annual Forecast', value: fmt.money(actual, { short: true }), sub: 'annualized run-rate',           tone: gap >= 0 ? 'success' : 'warn' },
          { label: 'Forecast Gap',    value: (gap >= 0 ? '+' : '') + fmt.money(gap, { short: true }), sub: (brH.upliftPct || 0).toFixed(1) + '% uplift needed', tone: gap >= 0 ? 'success' : 'warn' },
          { label: 'Top Branch',      value: (function () {
              var rows = (T['sv-by-branch'] && T['sv-by-branch'].rows) || [];
              return rows[0] ? rows[0][0] : '—';
            })(), sub: (function () {
              var rows = (T['sv-by-branch'] && T['sv-by-branch'].rows) || [];
              return rows[0] ? rows[0][1] + ' · ' + rows[0][2] + ' invoices' : '';
            })(), tone: 'navy' }
        ]),
        actions.length ? {
          kind: 'prose',
          cards: [
            {
              kind: 'navy', eyebrow: 'EXECUTIVE NARRATIVE', title: 'Where Service stands',
              body: '<p>' + (es.narrative || '') + '</p>'
            },
            {
              kind: 'tint', eyebrow: 'NEXT MOVES', title: 'Action items',
              list: actions
            }
          ],
          cols: 2
        } : null
      ].filter(Boolean)
    };

    // ─────────────────────────────────────────────────────────────
    // INSTALL ↔ SERVICE OVERLAP
    // For each install job whose customer ALSO has repair WOs.
    // Sourced from the Salesforce "Jobs with WOs and SAs" report.
    // ─────────────────────────────────────────────────────────────
    var iso = D.installServiceOverlap;
    if (iso && iso.totals) {
      var t = iso.totals;
      var pctInst = t.installJobs > 0 ? (t.installJobsWithSvc / t.installJobs * 100) : 0;
      var pctAcct = t.installAccounts > 0 ? (t.installAccountsWithSvc / t.installAccounts * 100) : 0;

      // Top trade in repair-WO volume for the callout
      var topTradeBySvc = (iso.tradeRows || []).slice().sort(function (a, b) {
        return b.repairWOs - a.repairWOs;
      })[0];
      var topBranchBySvc = (iso.branchRows || []).slice().sort(function (a, b) {
        return b.installJobsWithSvc - a.installJobsWithSvc;
      })[0];
      var stickiestAcct = (iso.accountRows || [])[0];

      svcPages['install-service'] = {
        eyebrow: 'INSTALL ↔ SERVICE · MF + RES + SVC',
        title: 'Service on Installs',
        intro: 'How often a Feazel install pulls follow-up service work at the same property. This view groups WOs by Account Name (since a Salesforce Job Number is scoped to a single service type), then surfaces the install jobs whose customers also generated Repair WOs. Source: <code>' + (iso.sourceFile || '') + '</code> · ' + (iso.rowCount || 0) + ' WO rows.',
        tags: [
          { kind: 'info',    text: t.installJobs + ' total install jobs' },
          { kind: pctInst >= 15 ? 'warn' : 'info', text: t.installJobsWithSvc + ' with service (' + pctInst.toFixed(1) + '%)' },
          { kind: 'success', text: fmt.money(t.repairAmtAtInstallAccts, { short: true }) + ' service $' }
        ],
        sections: [
          { kind: 'kpi-row', cols: 4, items: [
              { label: 'Install Jobs',           value: t.installJobs.toLocaleString(),
                sub: 'with at least one Install WO',                                 tone: 'navy' },
              { label: 'Installs w/ Service',    value: t.installJobsWithSvc + ' (' + pctInst.toFixed(1) + '%)',
                sub: 'their account also has Repair WOs',                            tone: 'warn' },
              { label: 'Service Hours',          value: t.hoursAtInstallAccts.toLocaleString() + ' h',
                sub: 'sum of SA durations on those accounts',                        tone: 'navy' },
              { label: 'Avg Hours / Repair WO',  value: t.avgHoursPerWO.toFixed(2) + ' h',
                sub: t.repairWOsAtInstallAccts.toLocaleString() + ' repair WOs',     tone: 'navy' }
          ]},
          { kind: 'kpi-row', cols: 4, items: [
              { label: 'Repair $',               value: fmt.money(t.repairAmtAtInstallAccts, { short: true }),
                sub: 'sum of Repair WO contract value',                              tone: 'navy' },
              { label: 'Install Accounts',       value: t.installAccounts.toLocaleString(),
                sub: 'unique customer accounts with installs',                       tone: 'navy' },
              { label: 'Accounts w/ Service',    value: t.installAccountsWithSvc + ' (' + pctAcct.toFixed(1) + '%)',
                sub: 'install accounts that also bought service',                    tone: pctAcct >= 10 ? 'success' : 'navy' },
              { label: 'Top Trade (Service)',    value: topTradeBySvc ? topTradeBySvc.trade : '—',
                sub: topTradeBySvc ? topTradeBySvc.repairWOs + ' repair WOs · ' + topTradeBySvc.hours.toFixed(0) + ' h' : '',
                tone: 'navy' }
          ]},
          (iso.branchRows && iso.branchRows.length) ? {
            kind: 'chart-grid', cols: 2,
            charts: [
              {
                title: 'Service hours by branch',
                sub: 'Total SA hours at install accounts',
                height: 320,
                config: {
                  type: 'bar',
                  data: {
                    labels: iso.branchRows.map(function (r) { return r.branch; }),
                    datasets: [{
                      data: iso.branchRows.map(function (r) { return Math.round(r.hours); }),
                      backgroundColor: pal.warning,
                      label: 'Hours'
                    }]
                  },
                  options: withOpts({
                    indexAxis: 'y',
                    scales: { x: { ticks: { callback: function (v) { return v + ' h'; } }, beginAtZero: true } },
                    plugins: { legend: { display: false } }
                  })
                }
              },
              {
                title: 'Install jobs with service by branch',
                sub: 'Count of installs whose account has follow-up repair WOs',
                height: 320,
                config: {
                  type: 'bar',
                  data: {
                    labels: iso.branchRows.map(function (r) { return r.branch; }),
                    datasets: [{
                      data: iso.branchRows.map(function (r) { return r.installJobsWithSvc; }),
                      backgroundColor: pal.navy,
                      label: 'Installs w/ service'
                    }]
                  },
                  options: withOpts({
                    indexAxis: 'y',
                    plugins: { legend: { display: false } }
                  })
                }
              }
            ]
          } : null,
          (iso.buckets) ? {
            kind: 'chart-grid', cols: 1,
            charts: [{
              title: 'Hours per repair WO · distribution',
              sub: 'How long the typical follow-up service appointment runs',
              height: 280,
              config: {
                type: 'bar',
                data: {
                  labels: Object.keys(iso.buckets),
                  datasets: [{
                    data: Object.values(iso.buckets),
                    backgroundColor: ['#9aa6b8', pal.navy, pal.warning, pal.danger, '#7d3c98'],
                    label: 'Repair WOs'
                  }]
                },
                options: withOpts({ plugins: { legend: { display: false } } })
              }
            }]
          } : null,
          {
            kind: 'table',
            heading: 'By branch: install↔service overlap',
            caption: '% column = installs-with-service / total install jobs at branch',
            headers: [
              { label: 'Branch', num: false },
              { label: 'Install Jobs', num: true },
              { label: 'w/ Service', num: true },
              { label: '%', num: true },
              { label: 'Repair WOs', num: true },
              { label: 'Service Hours', num: true },
              { label: 'Repair $', num: true }
            ],
            rows: (iso.branchRows || []).map(function (r) {
              var pct = r.installJobs > 0 ? r.installJobsWithSvc / r.installJobs * 100 : 0;
              var pctPill = pct >= 20
                ? '<span class="pill pill-warn">' + pct.toFixed(1) + '%</span>'
                : pct >= 10
                  ? '<span class="pill pill-info">' + pct.toFixed(1) + '%</span>'
                  : pct.toFixed(1) + '%';
              return [
                { html: '<strong>' + r.branch + '</strong>' },
                r.installJobs.toLocaleString(),
                r.installJobsWithSvc.toLocaleString(),
                { html: pctPill },
                r.repairWOs.toLocaleString(),
                r.hours.toFixed(1) + ' h',
                fmt.money(r.repairAmt)
              ];
            })
          },
          (iso.tradeRows && iso.tradeRows.length) ? {
            kind: 'table',
            heading: 'By trade',
            caption: 'Service Object on the install · trailing service WO volume on those accounts',
            headers: [
              { label: 'Trade', num: false },
              { label: 'Install Jobs', num: true },
              { label: 'w/ Service', num: true },
              { label: '%', num: true },
              { label: 'Repair WOs', num: true },
              { label: 'Service Hours', num: true }
            ],
            rows: iso.tradeRows.map(function (r) {
              var pct = r.installJobs > 0 ? r.installJobsWithSvc / r.installJobs * 100 : 0;
              return [
                { html: '<strong>' + r.trade + '</strong>' },
                r.installJobs.toLocaleString(),
                r.installJobsWithSvc.toLocaleString(),
                pct.toFixed(1) + '%',
                r.repairWOs.toLocaleString(),
                r.hours.toFixed(1) + ' h'
              ];
            })
          } : null,
          (iso.accountRows && iso.accountRows.length) ? {
            kind: 'table',
            heading: 'Stickiest accounts · top 25 by service hours',
            caption: 'Accounts where a Feazel install was followed by sustained service work. These are property managers and commercial customers worth nurturing.',
            maxHeight: '520px',
            headers: [
              { label: 'Account', num: false },
              { label: 'Install Jobs', num: true },
              { label: 'Install $', num: true },
              { label: 'Repair WOs', num: true },
              { label: 'Service Hours', num: true },
              { label: 'Repair $', num: true }
            ],
            rows: iso.accountRows.map(function (r) {
              return [
                { html: '<strong>' + r.account + '</strong>' },
                r.installJobs.toLocaleString(),
                fmt.money(r.installAmt),
                r.repairWOs.toLocaleString(),
                r.hours.toFixed(1) + ' h',
                fmt.money(r.repairAmt)
              ];
            })
          } : null,
          (iso.installJobRows && iso.installJobRows.length) ? {
            kind: 'table',
            heading: 'Top 25 install jobs whose accounts have the most service work',
            caption: 'Service hours and repair $ shown are aggregated at the account level; multiple installs at the same account share the same account-level totals.',
            maxHeight: '520px',
            headers: [
              { label: 'Job #', num: false },
              { label: 'Account', num: false },
              { label: 'Branch', num: false },
              { label: 'Trade', num: false },
              { label: 'Install $', num: true },
              { label: 'Acct Repair WOs', num: true },
              { label: 'Acct Service Hours', num: true },
              { label: 'Acct Repair $', num: true }
            ],
            rows: iso.installJobRows.map(function (r) {
              return [
                { html: '<strong>' + r.jobNumber + '</strong>' },
                r.account,
                r.branch,
                r.trade,
                fmt.money(r.installAmt),
                r.acctRepairWOs.toLocaleString(),
                r.acctHours.toFixed(1) + ' h',
                fmt.money(r.acctRepairAmt)
              ];
            })
          } : null,
          { kind: 'callout', tone: 'info',
            title: stickiestAcct ? stickiestAcct.account + ' is the stickiest install↔service account' : 'How to read this tab',
            body: stickiestAcct
              ? '<strong>' + stickiestAcct.account + '</strong> has <strong>' + stickiestAcct.installJobs + '</strong> install job' + (stickiestAcct.installJobs === 1 ? '' : 's') + ' worth <strong>' + fmt.money(stickiestAcct.installAmt, { short: true }) + '</strong> in contract value, and the same account ran <strong>' + stickiestAcct.repairWOs + '</strong> repair WOs over <strong>' + stickiestAcct.hours.toFixed(0) + ' service hours</strong> for <strong>' + fmt.money(stickiestAcct.repairAmt, { short: true }) + '</strong>. ' + (topBranchBySvc ? topBranchBySvc.branch + ' is the most active install↔service branch with ' + topBranchBySvc.installJobsWithSvc + ' overlap installs and ' + topBranchBySvc.hours.toFixed(0) + ' service hours.' : '')
              : 'The relationship between install and service is account-level, not job-level. Salesforce Job Numbers are scoped to a single service type, so an install and a follow-up repair at the same property always have different Job Numbers but share the same Account Name. This view groups by account to find that overlap.'
          }
        ].filter(Boolean)
      };
    }

    return svcPages;
  }

  // ============================================================
  // INDEX (Revenue Forecast hub), RESIDENTIAL ONLY BELOW
  // ============================================================
  var pages = {};

  // ---------- shared residential derivations (payload-driven, no literals) ----------
  var tc = FZ.timeContext();
  var esR = D.execSummary || {};
  var wtH = D.weeklyTargetsHeader || {};
  var brH = D.budgetRecoveryHeader || {};
  var pip = D.pipelineSnapshot || {};
  var psR = D.profitabilitySummary || {};
  var commR = D.commentary || {};
  var lockedOn = (D.methodologyLock && D.methodologyLock.lockedOn) || '';
  var yNow = tc.year;
  var yPrev = yNow - 1;

  var bdg = esR.budget || 0;
  var modelInv = esR.modelAnnualInvoiced || 0;
  var signedGap = modelInv - bdg;
  var gapAbs = Math.abs(signedGap);
  var gapPctPlan = bdg > 0 ? (gapAbs / bdg * 100) : 0;
  var gapTone = signedGap >= 0 ? 'success' : 'warn';
  var gapText = (signedGap >= 0 ? '+' : '-') + fmt.money(gapAbs, { short: true });

  // Display rule (locked 2026-06-16): the rendered dashboard never names V5.
  // Payload prose may still carry the engine name; strip it before rendering.
  function noV5(s) {
    return String(s == null ? '' : s).replace(/\bV5\s*/gi, '').replace(/\s{2,}/g, ' ');
  }
  function stripYear(label) { return String(label || '').replace(/\s*\d{4}.*$/, ''); }
  var MONTH_SHORT_R = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var MONTH_KEYS_R = ['january', 'february', 'march', 'april', 'may', 'june', 'july',
                      'august', 'september', 'october', 'november', 'december'];
  function monthIdxFromLabel(label) {
    var m = String(label || '').slice(0, 3).toLowerCase();
    for (var mi = 0; mi < 12; mi++) { if (MONTH_SHORT_R[mi].toLowerCase() === m) return mi; }
    return -1;
  }
  function sumCol(rows, i) {
    return (rows || []).reduce(function (a, r) { return a + (typeof r[i] === 'number' ? r[i] : 0); }, 0);
  }

  // Month-revenue entries in calendar order; Actual vs Forecast comes off the clock.
  var monthRevEntries = [];
  Object.keys(D.monthRevenue || {}).forEach(function (k) {
    var idx = MONTH_KEYS_R.indexOf(String(k).toLowerCase());
    if (idx >= 0) monthRevEntries.push({ idx: idx, label: MONTH_SHORT_R[idx], data: D.monthRevenue[k] });
  });
  monthRevEntries.sort(function (a, b) { return a.idx - b.idx; });
  var mrFirst = monthRevEntries[0] || null;
  var mrLast = monthRevEntries.length > 1 ? monthRevEntries[monthRevEntries.length - 1] : null;
  function monthRevTile(entry, tone) {
    if (!entry || !entry.data) return null;
    var kind = entry.idx < tc.monthIdx ? 'Actual' : 'Forecast';
    var m = entry.data;
    var t = {
      label: entry.label + ' Revenue (' + kind + ')',
      value: fmt.money(m.netRevenue, { short: true }),
      sub: 'Invoiced ' + fmt.money(m.invoiced, { short: true }) + ' + WIP ' + fmt.money(m.wipChange, { short: true })
    };
    if (tone) t.tone = tone;
    return t;
  }

  // Pipeline totals
  var pipStages = pip.stages || [];
  var pipTotal = pipStages.reduce(function (a, s) { return a + (s.value || 0); }, 0);
  var pipJobs = pipStages.reduce(function (a, s) { return a + (s.jobs || 0); }, 0);

  // Job type impact, ranked by Rev/Day (rows: type, avg $, cycle d, rev/day, same-mo %, hist rev)
  var jtiRows = (T.jobTypeImpact && T.jobTypeImpact.rows) || [];
  var jtiSorted = jtiRows.slice().sort(function (a, b) { return (b[3] || 0) - (a[3] || 0); });

  // Monthly forecast rollup (rows: month, budget net, backlog, required sales, forecast net, variance)
  var mfRows = (T.monthlyForecast && T.monthlyForecast.rows) || [];
  var mfSpan = mfRows.length ? stripYear(mfRows[0][0]) + '–' + stripYear(mfRows[mfRows.length - 1][0]) : '';
  var mfForecastTotal = sumCol(mfRows, 4);
  var mfBudgetTotal = sumCol(mfRows, 1);
  var mfRemaining = mfRows.filter(function (r) { return monthIdxFromLabel(r[0]) >= tc.monthIdx; });
  var mfPinch = mfRemaining.slice().sort(function (a, b) { return (b[3] || 0) - (a[3] || 0); }).slice(0, 2);

  // Budget requirements rollup (rows: month, backlog, rev from backlog, gap, total sales needed)
  var fbRows = (T.forecastBacklog && T.forecastBacklog.rows) || [];
  var fbSpan = fbRows.length ? stripYear(fbRows[0][0]) + '–' + stripYear(fbRows[fbRows.length - 1][0]) : '';
  var fbNeedTotal = sumCol(fbRows, 4);
  var fbFromBacklog = sumCol(fbRows, 2);
  var fbGapTotal = sumCol(fbRows, 3);
  var fbHighest = fbRows.slice().sort(function (a, b) { return (b[4] || 0) - (a[4] || 0); })[0];

  // Trend projection rollup (rows: month, seasonal %, ytd actual, budget path, forecast path)
  var tbRows = (T.trendBasedAnnual && T.trendBasedAnnual.rows) || [];
  var tbActuals = tbRows.filter(function (r) { return /\[Actual\]/i.test(String(r[0])); });
  var tbForward = tbRows.filter(function (r) { return !/\[Actual\]/i.test(String(r[0])); });
  var tbYtdActual = sumCol(tbActuals, 2);
  var tbBudgetTotal = sumCol(tbRows, 3);
  var tbForecastTotal = sumCol(tbRows, 4);
  var tbPathGap = tbForecastTotal - tbBudgetTotal;
  var tbLastActualLabel = tbActuals.length ? stripYear(tbActuals[tbActuals.length - 1][0]) : '';
  var tbTop2 = tbForward.slice().sort(function (a, b) { return (b[3] || 0) - (a[3] || 0); }).slice(0, 2);

  // Branch revenue mix (chart data = % of YTD invoiced, sorted descending)
  var brLabels = (C.branchChart && C.branchChart.labels) || [];
  var brData = (C.branchChart && C.branchChart.datasets && C.branchChart.datasets[0].data) || [];
  function sumFirst(arr, n) { return arr.slice(0, n).reduce(function (a, v) { return a + (v || 0); }, 0); }

  // Weekly target context
  var wkGapPct = wtH.avgWeeklyNeed > 0 ? (wtH.gap / wtH.avgWeeklyNeed * 100) : 0;

  // Profitability context (payload keys are year-bound: y2026_*, y2025_*)
  var gmDelta = (psR.y2026_GP_pct || 0) - (psR.y2025_GP_pct || 0);
  function lastPct(r) { return parseFloat(String(r[r.length - 1]).replace('%', '')); }
  // Generic profitability row renderer: first cell bold, last cell GP% pill,
  // money formatting on numeric cost/revenue columns. Shape-agnostic so it
  // survives calculator column changes.
  function profCellsR(r) {
    return r.map(function (c, i) {
      if (i === 0) return { html: '<strong>' + c + '</strong>' };
      if (i === r.length - 1) {
        var v = parseFloat(String(c).replace('%', ''));
        var cls = v >= 45 ? 'pill-success' : v >= 38 ? 'pill-info' : v >= 30 ? 'pill-warn' : 'pill-danger';
        return { html: '<span class="pill ' + cls + '">' + (isNaN(v) ? c : v.toFixed(1) + '%') + '</span>' };
      }
      if (i === 1) return c;
      return (typeof c === 'number') ? fmt.money(c) : c;
    });
  }
  var pmRows = (T.profitabilityByMarket2026 && T.profitabilityByMarket2026.rows) || [];
  var pmNonTotal = pmRows.filter(function (r) { return r[0] !== 'TOTAL'; });
  var pmSorted = pmNonTotal.slice().sort(function (a, b) { return lastPct(a) - lastPct(b); });
  var pmWorst = pmSorted[0];
  var pmBest = pmSorted[pmSorted.length - 1];

  // Cycle table (rows: job type, created->IP, IP->complete, total days, count, avg $)
  var cjRows = ((T.cycleByJobType && T.cycleByJobType.rows) || []).filter(function (r) {
    return !/overall/i.test(String(r[0]));
  });
  var cjLongest = cjRows.slice().sort(function (a, b) { return (b[3] || 0) - (a[3] || 0); })[0];

  // Strategic best-markets table (rows: market, jobs, revenue, median days, $/day)
  var smRows = (T.strategicBestMarketsRevEff && T.strategicBestMarketsRevEff.rows) || [];

  pages.index = {
    eyebrow: 'Realistic vs Budget · Data as of ' + (D.runDate || FZ.formatBuiltAt({ dateOnly: true })),
    title: 'Residential Revenue Forecast',
    intro: 'A unified revenue picture: what we have invoiced, what is coming through the pipeline, and what we still need to sign each week to land the ' + fmt.money(bdg, { short: true }) + ' residential plan. The model translates today\'s sold-not-invoiced backlog into month-by-month revenue and surfaces the weekly sales targets that close the gap.',
    tags: [
      { kind: 'info',    text: 'Realistic vs Budget · locked ' + lockedOn },
      { kind: (brH.gap || 0) > 0 ? 'warn' : 'success', text: fmt.money(brH.gap || 0, { short: true }) + ' recovery gap' },
      { kind: (wtH.recent4WkAvg || 0) >= (wtH.avgWeeklyNeed || 0) ? 'success' : 'info', text: '4-wk avg ' + fmt.money(wtH.recent4WkAvg || 0, { short: true }) + '/wk' }
    ],
    sections: [
      {
        kind: 'kpi-row', cols: 4,
        items: FZ.kpiRow(D, ['YTD Sales (Created)', 'Invoiced YTD', '4-Week Avg Weekly Sales', 'Current Week (Projected)'], {
          'YTD Sales (Created)': 'navy',
          'Invoiced YTD': 'success',
          '4-Week Avg Weekly Sales': 'success',
          'Current Week (Projected)': 'warn'
        })
      },
      {
        kind: 'kpi-row', cols: 4,
        items: (function () {
          var row = FZ.kpiRow(D, ['Annual Forecast', 'Annual Budget', 'Forecast vs Budget', 'Active Pipeline'], {
            'Active Pipeline': 'navy'
          });
          row[2].tone = gapTone;
          return row;
        })()
      },
      {
        kind: 'chart-grid', cols: 1, heading: 'Weekly Sales Velocity',
        caption: 'Each Friday roll-up across ' + ((C.salesChart && C.salesChart.labels) || []).length + ' weeks · the 4-week average is what feeds the forecast model',
        charts: [
          {
            title: 'Weekly Signed Sales',
            sub: 'Bars = weekly $ · line = rolling 4-week average',
            height: 300,
            config: {
              type: 'bar',
              data: {
                labels: C.salesChart.labels,
                datasets: [
                  {
                    type: 'bar',
                    label: 'Weekly Sales',
                    data: C.salesChart.datasets[0].data,
                    backgroundColor: pal.blue,
                    borderRadius: 4
                  },
                  {
                    type: 'line',
                    label: '4-Week Avg',
                    data: (function () {
                      var arr = C.salesChart.datasets[0].data;
                      return arr.map(function (_, i) {
                        var s = Math.max(0, i - 3);
                        var win = arr.slice(s, i + 1);
                        return win.reduce(function (a, b) { return a + b; }, 0) / win.length;
                      });
                    })(),
                    borderColor: pal.navy,
                    backgroundColor: pal.navy,
                    tension: 0.3,
                    pointRadius: 2
                  }
                ]
              },
              options: withOpts({ scales: { y: moneyAxis() } })
            }
          }
        ]
      },
      {
        kind: 'chart-grid', cols: 2, heading: 'Budget vs Forecast (' + mfSpan + ')',
        caption: 'The model picks up coverage from known sales early, then leans on forward weekly velocity',
        charts: [
          {
            title: 'Net Revenue: Budget vs Forecast',
            sub: 'Monthly residential revenue, side-by-side',
            height: 300,
            config: {
              type: 'bar',
              data: {
                labels: C.monthlyChart.labels,
                datasets: [
                  { label: 'Budget Net Revenue',   data: C.monthlyChart.datasets[0].data, backgroundColor: pal.navy,  borderRadius: 4 },
                  { label: 'Forecast Net Revenue', data: C.monthlyChart.datasets[1].data, backgroundColor: pal.blue,  borderRadius: 4 }
                ]
              },
              options: withOpts({ scales: { y: moneyAxis() } })
            }
          },
          {
            title: 'Required Monthly Sales to Hit Budget',
            sub: 'What we have to sign each month through year-end',
            height: 300,
            config: {
              type: 'bar',
              data: {
                labels: C.budgetSalesChart.labels,
                datasets: [{
                  label: 'Required Sales',
                  data: C.budgetSalesChart.datasets[0].data,
                  backgroundColor: pal.warning,
                  borderRadius: 4
                }]
              },
              options: withOpts({ scales: { y: moneyAxis() }, plugins: { legend: { display: false } } })
            }
          }
        ]
      },
      {
        kind: 'two-col', heading: 'Pipeline & Branch Snapshot',
        items: [
          {
            kind: 'chart', span: 6,
            title: 'Active Revenue Pipeline',
            sub: fmt.money(pipTotal, { short: true }) + ' across ' + pipJobs + ' jobs · stage mix today',
            height: 280,
            config: {
              type: 'doughnut',
              data: {
                labels: D.pipelineSnapshot.stages.map(function (s) { return s.label + ' (' + s.subtitle + ')'; }),
                datasets: [{
                  data: D.pipelineSnapshot.stages.map(function (s) { return s.value; }),
                  backgroundColor: D.pipelineSnapshot.stages.map(function (s) { return s.color; }),
                  borderColor: '#fff', borderWidth: 2
                }]
              },
              options: withOpts({
                cutout: '62%',
                plugins: {
                  legend: { position: 'right' },
                  tooltip: { callbacks: { label: function (c) {
                    var s = D.pipelineSnapshot.stages[c.dataIndex];
                    return s.label + ': ' + fmt.money(s.value) + ' · ' + s.jobs + ' jobs';
                  } } }
                }
              })
            }
          },
          {
            kind: 'chart', span: 6,
            title: 'Branch Revenue Mix',
            sub: '% of YTD invoiced revenue across ' + brLabels.length + ' active markets',
            height: 280,
            config: {
              type: 'bar',
              data: {
                labels: C.branchChart.labels,
                datasets: [{
                  label: '% of Revenue',
                  data: C.branchChart.datasets[0].data,
                  backgroundColor: pal.navy
                }]
              },
              options: withOpts({
                indexAxis: 'y',
                scales: { x: { ticks: { callback: function (v) { return v + '%'; } }, beginAtZero: true } },
                plugins: { legend: { display: false } }
              })
            }
          }
        ]
      },
      {
        kind: 'prose', heading: 'Headlines',
        cards: [
          { kind: 'navy', eyebrow: 'THE MODEL READ', title: 'Timing, not volume', body: '<p>' + noV5(esR.narrative || ('The model projects <strong>' + fmt.money(modelInv, { short: true }) + '</strong> in annual invoiced revenue against a <strong>' + fmt.money(bdg, { short: true }) + '</strong> plan.')) + '</p>' },
          { kind: 'tint', eyebrow: 'WEEKLY TARGET', title: 'Sign ' + fmt.money(wtH.avgWeeklyNeed || 0, { short: true }) + '/wk to stay on plan', body: '<p>The locked weekly target is <strong>' + fmt.money(wtH.avgWeeklyNeed || 0, { short: true }) + '</strong>. Trailing four weeks landed at <strong>' + fmt.money(wtH.recent4WkAvg || 0, { short: true }) + '</strong>. The gap is <strong>' + fmt.money(wtH.gap || 0) + '/week</strong> (' + fmt.pct(wkGapPct) + ' of target); closing it means the top branches hold their current pace.</p>' },
          { eyebrow: 'WHAT TO WATCH', title: 'The recovery bridge', body: '<p>The Budget Recovery view re-allocates a <strong>' + fmt.money(brH.gap || 0, { short: true }) + '</strong> shortfall across the remaining months as a <strong>+' + (brH.upliftPct || 0) + '%</strong> uplift on each. Closed months are accepted as actuals (no catch-up).</p>' }
        ]
      }
    ]
  };

  // ============================================================
  // EXECUTIVE SUMMARY
  // ============================================================
  pages.executive = {
    eyebrow: 'EXECUTIVE BRIEF · REALISTIC VS BUDGET',
    title: 'Executive Summary',
    intro: 'The numbers that frame the residential revenue picture today, plus the budget vs forecast bridge through year-end.',
    tags: [
      { kind: gapTone, text: gapText + ' to plan' },
      { kind: 'info', text: 'Updated daily' }
    ],
    sections: [
      {
        kind: 'kpi-row', cols: 4,
        items: FZ.kpiRow(D, ['YTD Sales (Created)', 'Invoiced YTD', '4-Week Avg Weekly Sales', 'Current Week (Projected)'], {
          'YTD Sales (Created)': 'navy',
          'Invoiced YTD': 'success',
          '4-Week Avg Weekly Sales': 'success',
          'Current Week (Projected)': 'warn'
        })
      },
      {
        kind: 'kpi-row', cols: 4,
        items: (function () {
          var items = [monthRevTile(mrFirst, 'navy'), monthRevTile(mrLast)].filter(Boolean);
          items.push(FZ.kpi(D, 'Annual Forecast'));
          items.push({
            label: 'Forecast vs Budget',
            value: gapText,
            sub: fmt.pct(gapPctPlan) + (signedGap >= 0 ? ' over ' : ' under ') + fmt.money(bdg, { short: true }) + ' plan',
            tone: gapTone
          });
          return items;
        })()
      },
      {
        kind: 'chart-grid', cols: 1, heading: 'Budget vs Model Revenue (' + (function () {
          var ls = (C.execChart && C.execChart.labels) || [];
          return ls.length ? stripYear(ls[0]) + '–' + stripYear(ls[ls.length - 1]) : 'monthly';
        })() + ')',
        caption: 'Three reads: original budget, model revenue, and the slice that comes from sales already on the books',
        charts: [
          {
            title: 'Budget vs Model Revenue',
            sub: 'Stacked read of where each forecast dollar comes from',
            height: 320,
            config: {
              type: 'bar',
              data: {
                labels: C.execChart.labels,
                datasets: [
                  { label: 'Budget',          data: C.execChart.datasets[0].data, backgroundColor: pal.navy,    borderRadius: 4 },
                  { label: 'Model Revenue',   data: C.execChart.datasets[1].data, backgroundColor: pal.blue,    borderRadius: 4 },
                  { label: 'From Known Sales', data: C.execChart.datasets[2].data, backgroundColor: pal.success, borderRadius: 4 }
                ]
              },
              options: withOpts({ scales: { y: moneyAxis() } })
            }
          }
        ]
      },
      {
        kind: 'callout', tone: gapTone,
        title: 'The shape of the gap',
        body: noV5(esR.narrative)
      },
      {
        kind: 'prose', heading: 'Strategic context',
        cards: [
          { kind: 'tint', eyebrow: 'BEST JOB TYPES BY REV/DAY', body: '<p>' + (jtiSorted.length
              ? jtiSorted.map(function (r, i) {
                  return '<strong>' + r[0] + '</strong>' + (i === 0 ? ' leads at ' : ' at ') + '<strong>$' + Math.round(r[3]).toLocaleString('en-US') + '/day</strong>';
                }).join(', ') + '. The fastest revenue dollar today is a ' + jtiSorted[0][0] + ' job: ' + Math.round(jtiSorted[0][2]) + '-day cycle, ' + fmt.money(jtiSorted[0][1]) + ' average ticket.'
              : 'Job type efficiency data is not in this refresh.') + '</p>' },
          { eyebrow: 'WEEKLY NEED VS LIVE', body: '<p>Locked target: <strong>' + fmt.money(wtH.avgWeeklyNeed || 0) + '/wk</strong>. Trailing four weeks: <strong>' + fmt.money(wtH.recent4WkAvg || 0) + '/wk</strong>. Gap: <strong>' + fmt.money(wtH.gap || 0) + '/wk</strong> (' + fmt.pct(wkGapPct) + ' of target).</p>' }
        ],
        cols: 2
      }
    ]
  };

  // ============================================================
  // SALES PROJECTION
  // ============================================================
  pages.projection = {
    eyebrow: 'SALES PROJECTION · TREND-BASED',
    title: 'Sales Projection',
    intro: 'A trend-based annual sales projection using ' + yPrev + ' seasonality applied to today\'s YTD pace. Two paths: budget path (what we planned) and forecast path (what current velocity implies).',
    tags: [{ kind: 'info', text: 'Trend model · ' + yPrev + ' seasonality' }],
    sections: [
      {
        kind: 'kpi-row', cols: 4,
        items: [
          { label: 'YTD Actual' + (tbLastActualLabel ? ' (through ' + tbLastActualLabel + ')' : ''), value: fmt.money(tbYtdActual, { short: true }), sub: 'Sales created' + (tbLastActualLabel ? ' through ' + tbLastActualLabel : ''), tone: 'navy' },
          { label: 'Forecast Path', value: fmt.money(tbForecastTotal, { short: true }), sub: 'Trend-based annual projection', tone: 'success' },
          { label: 'Budget Path',   value: fmt.money(tbBudgetTotal, { short: true }),   sub: yPrev + ' seasonality on plan' },
          { label: 'Path Gap',      value: (tbPathGap >= 0 ? '+' : '-') + fmt.money(Math.abs(tbPathGap), { short: true }), sub: 'Forecast vs budget', tone: tbPathGap >= 0 ? 'success' : 'warn' }
        ]
      },
      {
        kind: 'chart-grid', cols: 1,
        charts: [
          {
            title: 'Trend-Based Annual Sales Projection',
            sub: 'YTD actual rolls into a forecast that uses ' + yPrev + ' seasonal mix · budget shown for reference',
            height: 320,
            config: {
              type: 'bar',
              data: {
                labels: T.trendBasedAnnual.rows.slice(0, 12).map(function (r) { return String(r[0]).replace(' [Actual]', ''); }),
                datasets: [
                  {
                    label: 'YTD Actual',
                    data: T.trendBasedAnnual.rows.slice(0, 12).map(function (r) { return r[2]; }),
                    backgroundColor: pal.success,
                    borderRadius: 4
                  },
                  {
                    label: 'Budget Path',
                    data: T.trendBasedAnnual.rows.slice(0, 12).map(function (r) { return r[3]; }),
                    backgroundColor: pal.navy,
                    borderRadius: 4
                  },
                  {
                    label: 'Forecast Path',
                    data: T.trendBasedAnnual.rows.slice(0, 12).map(function (r) { return r[4]; }),
                    backgroundColor: pal.blue,
                    borderRadius: 4
                  }
                ]
              },
              options: withOpts({ scales: { y: moneyAxis() } })
            }
          }
        ]
      },
      {
        kind: 'chart-grid', cols: 2,
        charts: [
          {
            title: yPrev + ' Seasonal Mix',
            sub: 'Share of annual revenue by month, the basis for the forecast curve',
            height: 280,
            config: {
              type: 'bar',
              data: {
                labels: T.trendBasedAnnual.rows.slice(0, 12).map(function (r) { return String(r[0]).replace(' [Actual]', ''); }),
                datasets: [{
                  label: '% of Year',
                  data: T.trendBasedAnnual.rows.slice(0, 12).map(function (r) { return r[1]; }),
                  backgroundColor: pal.slate
                }]
              },
              options: withOpts({
                scales: { y: { ticks: { callback: function (v) { return v + '%'; } }, beginAtZero: true } },
                plugins: { legend: { display: false } }
              })
            }
          },
          {
            title: 'Adjusted Weekly Sales Run Rate (Remaining Months)',
            sub: 'What each remaining month implies as a weekly target',
            height: 280,
            config: {
              type: 'bar',
              data: {
                labels: T.adjustedWeeklyRunRate.rows.map(function (r) { return r[0]; }),
                datasets: [{
                  label: 'Weekly Sales Needed',
                  data: T.adjustedWeeklyRunRate.rows.map(function (r) { return r[1]; }),
                  backgroundColor: pal.navy
                }]
              },
              options: withOpts({ scales: { y: moneyAxis() }, plugins: { legend: { display: false } } })
            }
          }
        ]
      },
      tableSection({
        id: 'trendBasedAnnual',
        heading: 'Trend-based annual projection · row detail',
        caption: 'YTD actual is locked · forward months blend ' + yPrev + ' seasonality with current velocity',
        rowMap: function (r) {
          return [
            { html: '<strong>' + r[0] + '</strong>' },
            r[1] + '%',
            r[2] != null ? fmt.money(r[2]) : ',',
            fmt.money(r[3]),
            fmt.money(r[4])
          ];
        }
      }),
      {
        kind: 'callout',
        title: 'Read the curve',
        body: tbTop2.length === 2
          ? stripYear(tbTop2[0][0]) + ' and ' + stripYear(tbTop2[1][0]) + ' are the make-or-break months. Combined budget path is <strong>' + fmt.money((tbTop2[0][3] || 0) + (tbTop2[1][3] || 0), { short: true }) + '</strong>; forecast path is <strong>' + fmt.money((tbTop2[0][4] || 0) + (tbTop2[1][4] || 0), { short: true }) + '</strong>. If we are still tracking close to plan going into them, those two months pull the year back into line.'
          : 'Forward months blend ' + yPrev + ' seasonality with current velocity; watch the largest remaining budget months, they decide the year.'
      }
    ].filter(Boolean)
  };

  // ============================================================
  // MONTHLY FORECAST
  // ============================================================
  pages.monthly = {
    eyebrow: 'MONTHLY FORECAST · ' + (mfRows.length ? stripYear(mfRows[0][0]).toUpperCase() + ' FORWARD' : 'MONTH BY MONTH'),
    title: 'Monthly Forecast',
    intro: 'The full month-by-month bridge: how much revenue the existing backlog will throw off, how much new sales we need on top, and where the gap to budget sits each month.',
    sections: [
      {
        kind: 'kpi-row', cols: 4,
        items: (function () {
          var items = [monthRevTile(mrFirst, 'navy'), monthRevTile(mrLast, 'warn')].filter(Boolean);
          var mfVar = mfForecastTotal - mfBudgetTotal;
          items.push({ label: mfSpan + ' Total', value: fmt.money(mfForecastTotal, { short: true }), sub: 'Forecast net revenue', tone: 'success' });
          items.push({ label: mfSpan + ' Budget', value: fmt.money(mfBudgetTotal, { short: true }), sub: 'Variance ' + (mfVar >= 0 ? '+' : '-') + fmt.money(Math.abs(mfVar), { short: true }) });
          return items;
        })()
      },
      {
        kind: 'chart-grid', cols: 1,
        charts: [
          {
            title: 'Net Revenue: Budget vs Forecast (' + mfSpan + ')',
            sub: 'Side-by-side monthly bars',
            height: 320,
            config: {
              type: 'bar',
              data: {
                labels: C.monthlyChart.labels,
                datasets: [
                  { label: 'Budget Net Revenue',   data: C.monthlyChart.datasets[0].data, backgroundColor: pal.navy, borderRadius: 4 },
                  { label: 'Forecast Net Revenue', data: C.monthlyChart.datasets[1].data, backgroundColor: pal.blue, borderRadius: 4 }
                ]
              },
              options: withOpts({ scales: { y: moneyAxis() } })
            }
          }
        ]
      },
      {
        kind: 'chart-grid', cols: 1,
        charts: [
          {
            title: 'Monthly Variance to Plan',
            sub: 'Forecast minus budget · positive bars are upside months',
            height: 280,
            config: {
              type: 'bar',
              data: {
                labels: T.monthlyForecast.rows.slice(0, 9).map(function (r) { return r[0]; }),
                datasets: [{
                  label: 'Variance',
                  data: T.monthlyForecast.rows.slice(0, 9).map(function (r) { return r[5]; }),
                  backgroundColor: T.monthlyForecast.rows.slice(0, 9).map(function (r) {
                    return (r[5] >= 0) ? pal.success : pal.danger;
                  })
                }]
              },
              options: withOpts({ scales: { y: moneyAxis() }, plugins: { legend: { display: false } } })
            }
          }
        ]
      },
      tableSection({
        id: 'monthlyForecast',
        heading: 'Monthly forecast: April forward',
        caption: 'Backlog drives revenue early; new sales velocity carries the back half',
        rowMap: function (r) {
          var vari = r[5];
          return [
            { html: '<strong>' + r[0] + '</strong>' },
            fmt.money(r[1]),
            (typeof r[2] === 'string') ? r[2] : fmt.money(r[2]),
            fmt.money(r[3]),
            fmt.money(r[4]),
            { html: vari >= 0
                ? '<span class="pill pill-success">+' + fmt.money(vari, { short: true }) + '</span>'
                : '<span class="pill pill-danger">' + fmt.money(vari, { short: true }) + '</span>' }
          ];
        }
      }),
      mfPinch.length === 2 ? {
        kind: 'callout', tone: 'warn',
        title: stripYear(mfPinch[0][0]) + ' and ' + stripYear(mfPinch[1][0]) + ' are the pinch months',
        body: stripYear(mfPinch[0][0]) + ' needs <strong>' + fmt.money(mfPinch[0][3], { short: true }) + '</strong> in signed sales (highest remaining) to land its ' + fmt.money(mfPinch[0][4], { short: true }) + ' revenue target. ' + stripYear(mfPinch[1][0]) + ' follows with <strong>' + fmt.money(mfPinch[1][3], { short: true }) + '</strong> needed. These are the two months where Sales and Production ops have to be operating hot at the same time.'
      } : {
        kind: 'callout', tone: 'info',
        title: 'Watch the largest remaining sales months',
        body: 'The months with the highest required-sales figures in the table above are where Sales and Production ops have to be operating hot at the same time.'
      }
    ].filter(Boolean)
  };

  // ============================================================
  // BUDGET REQUIREMENTS
  // ============================================================
  pages.budget = {
    eyebrow: 'BUDGET REQUIREMENTS · MONTHLY',
    title: 'Budget Requirements',
    intro: 'What the backlog throws off vs what we need new sales to deliver, month by month, to hit the original residential plan.',
    sections: [
      {
        kind: 'kpi-row', cols: 4,
        items: [
          { label: 'Total ' + fbSpan + ' Need', value: fmt.money(fbNeedTotal, { short: true }), sub: 'New sales required to hit plan', tone: 'navy' },
          { label: 'From Backlog',              value: fmt.money(fbFromBacklog, { short: true }), sub: 'Already on the books', tone: 'success' },
          { label: 'Revenue Gap to Cover',      value: fmt.money(fbGapTotal, { short: true }), sub: 'New sales that must arrive', tone: 'warn' },
          { label: 'Highest Month' + (fbHighest ? ' (' + stripYear(fbHighest[0]) + ')' : ''), value: fbHighest ? fmt.money(fbHighest[4], { short: true }) : '—', sub: 'Largest single-month sales need', tone: 'danger' }
        ]
      },
      {
        kind: 'chart-grid', cols: 1,
        charts: [
          {
            title: 'Required Monthly Sales to Hit Budget (' + fbSpan + ')',
            sub: 'Total sales needed each month, including backlog absorption',
            height: 320,
            config: {
              type: 'bar',
              data: {
                labels: C.budgetSalesChart.labels,
                datasets: [{
                  label: 'Required Sales',
                  data: C.budgetSalesChart.datasets[0].data,
                  backgroundColor: (function () {
                    var arr = C.budgetSalesChart.datasets[0].data || [];
                    var mx = Math.max.apply(null, arr.concat([0]));
                    return arr.map(function (v) {
                      return v >= mx * 0.9 ? pal.danger : v >= mx * 0.75 ? pal.warning : pal.navy;
                    });
                  })()
                }]
              },
              options: withOpts({ scales: { y: moneyAxis() }, plugins: { legend: { display: false } } })
            }
          }
        ]
      },
      {
        kind: 'chart-grid', cols: 1,
        charts: [
          {
            title: 'Backlog Absorption vs Net New Sales',
            sub: 'How much of each month\'s revenue gap is already covered by signed work',
            height: 300,
            config: {
              type: 'bar',
              data: {
                labels: T.forecastBacklog.rows.slice(0, 9).map(function (r) { return r[0]; }),
                datasets: [
                  { label: 'Revenue From Backlog', data: T.forecastBacklog.rows.slice(0, 9).map(function (r) { return r[2]; }), backgroundColor: pal.success, stack: 'r' },
                  { label: 'Revenue Gap (New Sales)', data: T.forecastBacklog.rows.slice(0, 9).map(function (r) { return r[3]; }), backgroundColor: pal.warning, stack: 'r' }
                ]
              },
              options: withOpts({ scales: { x: { stacked: true }, y: Object.assign({ stacked: true }, moneyAxis()) } })
            }
          }
        ]
      },
      tableSection({
        id: 'forecastBacklog',
        heading: 'Forecasted backlog vs required sales',
        caption: 'For each month: starting backlog, revenue thrown off by that backlog, the gap, and total sales needed',
        rowMap: function (r) {
          return [
            { html: '<strong>' + r[0] + '</strong>' },
            (typeof r[1] === 'string') ? r[1] : fmt.money(r[1]),
            fmt.money(r[2]),
            fmt.money(r[3]),
            fmt.money(r[4])
          ];
        }
      }),
      {
        kind: 'callout',
        title: 'How the gap shrinks',
        body: (function () {
          if (fbRows.length < 2) return 'The further out we look, the more every revenue dollar comes from sales we have to make this week.';
          var a = fbRows[0];
          var b = fbRows[Math.min(3, fbRows.length - 1)];
          var pa = a[4] > 0 ? (a[2] / a[4] * 100) : 0;
          var pb = b[4] > 0 ? (b[2] / b[4] * 100) : 0;
          return 'In ' + stripYear(a[0]) + ', backlog covers <strong>' + fmt.money(a[2], { short: true }) + '</strong> of the <strong>' + fmt.money(a[4], { short: true }) + '</strong> need (' + pa.toFixed(0) + '%). By ' + stripYear(b[0]) + ', backlog only covers <strong>' + fmt.money(b[2], { short: true }) + '</strong> of <strong>' + fmt.money(b[4], { short: true }) + '</strong> (' + pb.toFixed(0) + '%). The further out we look, the more every revenue dollar comes from sales we have to make this week.';
        })()
      }
    ].filter(Boolean)
  };

  // ============================================================
  // JOB TYPE ANALYSIS
  // ============================================================
  pages['job-types'] = {
    eyebrow: 'JOB TYPES · CYCLE & TICKET',
    title: 'Job Type Analysis',
    intro: 'How each of our job types converts to revenue: ticket size, cycle days, dollars per day, and how the same-month conversion drops over the M+0 to M+5 window.',
    sections: [
      {
        kind: 'kpi-row', cols: Math.max(1, Math.min(jtiSorted.length || 3, 4)),
        items: jtiSorted.map(function (r, i) {
          return {
            label: r[0],
            value: '$' + Math.round(r[3]).toLocaleString('en-US') + '/day',
            sub: fmt.money(r[1], { short: true }) + ' avg · ' + Math.round(r[2]) + 'd cycle · ' + fmt.pct(r[4]) + ' same-mo conv',
            tone: i === 0 ? 'navy' : i === 1 ? 'success' : undefined
          };
        })
      },
      {
        kind: 'chart-grid', cols: 2,
        charts: [
          {
            title: 'Revenue per Day by Job Type',
            sub: 'The single most important efficiency number',
            height: 280,
            config: {
              type: 'bar',
              data: {
                labels: T.jobTypeImpact.rows.map(function (r) { return r[0]; }),
                datasets: [{
                  label: 'Rev/Day',
                  data: T.jobTypeImpact.rows.map(function (r) { return parseFloat(String(r[3]).replace(/[^0-9.]/g, '')); }),
                  backgroundColor: [pal.navy, pal.success, pal.blue]
                }]
              },
              options: withOpts({ scales: { y: { ticks: { callback: function (v) { return '$' + v; } }, beginAtZero: true } }, plugins: { legend: { display: false } } })
            }
          },
          {
            title: 'Avg Job $ by Job Type',
            sub: (function () {
              var byTicket = jtiRows.slice().sort(function (a, b) { return (b[1] || 0) - (a[1] || 0); });
              return byTicket.length >= 2 ? byTicket[0][0] + ' leads ticket size · ' + byTicket[1][0] + ' close behind' : 'Average ticket by job type';
            })(),
            height: 280,
            config: {
              type: 'bar',
              data: {
                labels: T.jobTypeImpact.rows.map(function (r) { return r[0]; }),
                datasets: [{
                  label: 'Avg Job',
                  data: T.jobTypeImpact.rows.map(function (r) { return parseFloat(String(r[1]).replace(/[^0-9.]/g, '')); }),
                  backgroundColor: [pal.navy, pal.success, pal.blue]
                }]
              },
              options: withOpts({ scales: { y: moneyAxis(false) }, plugins: { legend: { display: false } } })
            }
          }
        ]
      },
      {
        kind: 'chart-grid', cols: 1,
        charts: [
          {
            title: 'Revenue Conversion by Job Type (M+0 → M+5)',
            sub: '% of a sold dollar that becomes invoiced revenue in each subsequent month',
            height: 320,
            config: {
              type: 'line',
              data: {
                labels: C.convChart.labels,
                datasets: C.convChart.datasets.map(function (ds, i) {
                  var colors = [pal.blue, pal.navy, pal.success, pal.warning];
                  return {
                    label: ds.label,
                    data: ds.data,
                    borderColor: colors[i % colors.length],
                    backgroundColor: colors[i % colors.length],
                    tension: 0.3,
                    fill: false
                  };
                })
              },
              options: withOpts({ scales: { y: { ticks: { callback: function (v) { return v + '%'; } }, beginAtZero: true } } })
            }
          }
        ]
      },
      tableSection({
        id: 'jobTypeImpact',
        heading: 'Job type impact on revenue',
        caption: 'Three pillars · ranked by Rev/Day',
        rowMap: function (r) {
          return [
            { html: '<strong>' + r[0] + '</strong>' },
            r[1], r[2], r[3], r[4], r[5]
          ];
        }
      }),
      tableSection({
        id: 'jobTypeXTradeRevEff',
        heading: 'Job type × trade count: revenue efficiency',
        caption: 'Single-trade jobs win on Rev/Day across the board',
        maxHeight: '420px',
        rowMap: function (r) {
          return [
            { html: '<strong>' + r[0] + '</strong>' },
            r[1] + ' trade' + (r[1] === 1 ? '' : 's'),
            fmt.money(r[2]),
            r[3],
            fmt.money(r[4]),
            r[5] + 'd',
            { html: '<strong>$' + r[6] + '/day</strong>' }
          ];
        }
      }),
      {
        kind: 'callout', tone: 'success',
        title: 'The Rev/Day playbook',
        body: 'Single-trade jobs dominate revenue per day across job types; multi-trade bundles stretch the cycle faster than they add ticket value. The bookings team should be steering toward simpler scopes whenever possible (same revenue, fewer days locked up).'
      }
    ].filter(Boolean)
  };

  // ============================================================
  // PIPELINE & BRANCH
  // ============================================================
  pages.pipeline = {
    eyebrow: 'PIPELINE · ' + pipStages.length + ' STAGES · ' + brLabels.length + ' MARKETS',
    title: 'Pipeline & Branch',
    intro: 'Where the active ' + fmt.money(pipTotal, { short: true }) + ' lives today, plus how it splits across the ' + brLabels.length + ' active branches.',
    tags: [{ kind: 'info', text: pipJobs + ' jobs in pipeline' }],
    sections: [
      {
        kind: 'kpi-row', cols: 4,
        items: D.pipelineSnapshot.stages.map(function (s, i) {
          var tones = ['navy', 'navy', 'warn', 'success'];
          return {
            label: s.label + ' · ' + s.subtitle,
            value: fmt.money(s.value, { short: true }),
            sub: s.jobs + ' jobs' + (s.avgDays != null ? ' · ' + s.avgDays + 'd avg' : ''),
            tone: tones[i] || 'navy'
          };
        })
      },
      {
        kind: 'chart-grid', cols: 2,
        charts: [
          {
            title: 'Active Pipeline Composition',
            sub: fmt.money(pipTotal, { short: true }) + ' across ' + pipStages.length + ' stages',
            height: 300,
            config: {
              type: 'doughnut',
              data: {
                labels: D.pipelineSnapshot.stages.map(function (s) { return s.label; }),
                datasets: [{
                  data: D.pipelineSnapshot.stages.map(function (s) { return s.value; }),
                  backgroundColor: D.pipelineSnapshot.stages.map(function (s) { return s.color; }),
                  borderColor: '#fff', borderWidth: 2
                }]
              },
              options: withOpts({
                cutout: '60%',
                plugins: {
                  legend: { position: 'right' },
                  tooltip: { callbacks: { label: function (c) {
                    var s = D.pipelineSnapshot.stages[c.dataIndex];
                    return s.label + ': ' + fmt.money(s.value) + ' · ' + s.jobs + ' jobs';
                  } } }
                }
              })
            }
          },
          {
            title: 'Branch Revenue Mix (% of YTD)',
            sub: brLabels.length >= 3
              ? brLabels[0] + ' and ' + brLabels[1] + ' lead · top three carry ' + fmt.pct(sumFirst(brData, 3))
              : 'Share of YTD invoiced revenue by branch',
            height: 300,
            config: {
              type: 'bar',
              data: {
                labels: C.branchChart.labels,
                datasets: [{
                  label: '% of Revenue',
                  data: C.branchChart.datasets[0].data,
                  backgroundColor: pal.navy
                }]
              },
              options: withOpts({
                indexAxis: 'y',
                scales: { x: { ticks: { callback: function (v) { return v + '%'; } }, beginAtZero: true } },
                plugins: { legend: { display: false } }
              })
            }
          }
        ]
      },
      {
        kind: 'chart-grid', cols: 2,
        charts: [
          {
            title: 'Backlog by Market (Not Started)',
            sub: 'Sold work waiting to start (fuel for the next 30 days)',
            height: 320,
            config: {
              type: 'bar',
              data: {
                labels: T.backlogByMarket.rows.map(function (r) { return r[0]; }),
                datasets: [{
                  label: 'Backlog $',
                  data: T.backlogByMarket.rows.map(function (r) { return r[2]; }),
                  backgroundColor: pal.blue
                }]
              },
              options: withOpts({ indexAxis: 'y', scales: { x: moneyAxis() }, plugins: { legend: { display: false } } })
            }
          },
          {
            title: 'In Progress by Market',
            sub: 'Work underway · the next 14-day invoicing engine',
            height: 320,
            config: {
              type: 'bar',
              data: {
                labels: T.inProgressByMarket.rows.map(function (r) { return r[0]; }),
                datasets: [{
                  label: 'In Progress $',
                  data: T.inProgressByMarket.rows.map(function (r) { return r[2]; }),
                  backgroundColor: pal.warning
                }]
              },
              options: withOpts({ indexAxis: 'y', scales: { x: moneyAxis() }, plugins: { legend: { display: false } } })
            }
          }
        ]
      },
      tableSection({
        id: 'branchTopRev',
        heading: 'Top job type × branch combos by revenue',
        caption: 'Where the biggest revenue concentrations sit',
        rowMap: function (r) {
          return [
            r[0],
            { html: '<strong>' + r[1] + '</strong>' },
            fmt.money(r[2]),
            r[3],
            r[4] + 'd',
            { html: '<strong>$' + r[5] + '/day</strong>' }
          ];
        }
      }),
      {
        kind: 'callout',
        title: 'The 80/20 view',
        body: (function () {
          var parts = [];
          if (brLabels.length >= 4) {
            parts.push('Top 4 markets (' + brLabels.slice(0, 4).join(', ') + ') carry <strong>' + fmt.pct(sumFirst(brData, 4)) + '</strong> of YTD revenue.');
          }
          var blRows = (T.backlogByMarket && T.backlogByMarket.rows) || [];
          if (blRows.length >= 2) {
            var blTotal = sumCol(blRows, 2);
            parts.push('Backlog is just as concentrated: ' + blRows[0][0] + ' + ' + blRows[1][0] + ' hold <strong>' + fmt.money((blRows[0][2] || 0) + (blRows[1][2] || 0), { short: true }) + '</strong> of the ' + fmt.money(blTotal, { short: true }) + ' not-started book.');
          }
          return parts.length ? parts.join(' ') : 'Revenue and backlog concentration by market is shown in the charts above.';
        })()
      }
    ].filter(Boolean)
  };

  // ============================================================
  // CYCLE TIMES
  // ============================================================
  pages.cycle = {
    eyebrow: 'CYCLE TIMES · END-TO-END',
    title: 'Cycle Times',
    intro: 'How fast a job moves from Created to In Progress to Complete, by job type and trade count. The shorter the cycle, the more times the same crew capacity can re-earn revenue in a year.',
    sections: [
      {
        kind: 'kpi-row', cols: 4,
        items: [
          { label: 'Sales Cycle (Created→IP)', value: (wtH.productionCycleStart != null ? wtH.productionCycleStart : '—') + 'd', sub: 'Model assumption', tone: 'navy' },
          { label: 'Production (IP→Complete)',  value: (wtH.productionCycleComplete != null ? wtH.productionCycleComplete : '—') + 'd', sub: 'Model assumption' },
          { label: 'Total Cycle',                value: (wtH.productionTotalCycle != null ? wtH.productionTotalCycle : '—') + 'd', sub: 'Created → Invoiced', tone: 'success' },
          cjLongest
            ? { label: 'Longest Cycle', value: cjLongest[3] + 'd', sub: cjLongest[0] + ' · slowest job type median', tone: 'warn' }
            : { label: 'Longest Cycle', value: '—', sub: 'not in data payload', tone: 'warn' }
        ]
      },
      {
        kind: 'chart-grid', cols: 1,
        charts: [
          {
            title: 'Cycle Time by Job Type × Trade Count',
            sub: 'How adding trades stretches the cycle for each job type',
            height: 320,
            config: {
              type: 'bar',
              data: {
                labels: C.cycleChart.labels,
                datasets: C.cycleChart.datasets.map(function (ds, i) {
                  var colors = [pal.navy, pal.success, pal.blue];
                  return {
                    label: ds.label,
                    data: ds.data,
                    backgroundColor: colors[i % colors.length],
                    borderRadius: 4
                  };
                })
              },
              options: withOpts({ scales: { y: { ticks: { callback: function (v) { return v + 'd'; } }, beginAtZero: true } } })
            }
          }
        ]
      },
      tableSection({
        id: 'cycleByJobType',
        heading: 'Job type cycle times: quick read',
        rowMap: function (r) {
          return [
            { html: '<strong>' + r[0] + '</strong>' },
            r[1] + 'd', r[2] + 'd', r[3] + 'd',
            r[4],
            (typeof r[5] === 'number') ? fmt.money(r[5]) : r[5]
          ];
        }
      }),
      tableSection({
        id: 'cycleByJobTypeTradeFull',
        heading: 'Full cycle detail · job type × trade count',
        caption: 'Median cycle days, ticket size, and Rev/Day for every combination',
        maxHeight: '460px',
        rowMap: function (r) {
          return [
            { html: '<strong>' + r[0] + '</strong>' },
            r[1] + ' trade' + (r[1] === 1 ? '' : 's'),
            fmt.money(r[2]),
            r[3],
            fmt.money(r[4]),
            r[5] + 'd',
            { html: '<strong>$' + r[6] + '/day</strong>' }
          ];
        }
      }),
      tableSection({
        id: 'conversionCurves',
        heading: 'Conversion curves: % invoiced by month-since-sale',
        caption: 'Insurance has the longest tail · retail comes in fast',
        rowMap: function (r) {
          return [{ html: '<strong>' + r[0] + '</strong>' }, r[1], r[2], r[3], r[4], r[5], r[6], r[7]];
        }
      }),
      {
        kind: 'callout', tone: 'warn',
        title: 'The cycle-tax on multi-trade',
        body: 'Each added trade stretches the cycle materially. Margin holds, but the same crew capacity earns fewer turns per year. The booking team should default to single-trade scope unless the bundle adds material ticket value.'
      }
    ].filter(Boolean)
  };

  // ============================================================
  // WEEKLY SALES TARGETS
  // ============================================================
  pages['weekly-targets'] = {
    eyebrow: 'WEEKLY TARGETS · LOCKED METHODOLOGY',
    title: 'Weekly Sales Targets',
    intro: 'The locked weekly target schedule that drives the budget plan. Methodology locked ' + lockedOn + ' (do not change WIP constants without explicit approval).',
    tags: [
      { kind: 'info', text: 'Locked ' + lockedOn },
      { kind: wkGapPct <= 10 ? 'success' : 'warn', text: 'Gap to live: ' + fmt.pct(wkGapPct) }
    ],
    sections: [
      {
        kind: 'kpi-row', cols: 4,
        items: [
          { label: 'Avg Weekly Need',    value: fmt.money(wtH.avgWeeklyNeed),       sub: 'Locked weekly target',                  tone: 'navy' },
          { label: 'Recent 4-Wk Avg',     value: fmt.money(wtH.recent4WkAvg),         sub: 'Trailing actuals',                  tone: 'success' },
          { label: 'Weekly Gap',          value: fmt.money(wtH.gap),                  sub: fmt.pct(wkGapPct) + ((wtH.gap || 0) > 0 ? ' short of target' : ' ahead of target'), tone: (wtH.gap || 0) > 0 ? 'warn' : 'success' },
          { label: 'Production Need',     value: fmt.money(wtH.productionAvgWeeklyNeed), sub: 'Weekly must-complete-and-invoice', tone: 'navy' }
        ]
      },
      {
        kind: 'callout', tone: 'warn',
        title: 'Methodology locked',
        body: 'The Weekly Sales Targets schedule is locked as of <strong>' + lockedOn + '</strong>. WIP constants and cycle-time hierarchy are immutable in this view. If actuals diverge by more than ±15% from the locked target for two consecutive weeks, escalate to the COO and the finance forecasting team for an off-cycle methodology review.'
      },
      {
        kind: 'chart-grid', cols: 2,
        charts: [
          {
            title: 'Weekly Target by Job Type',
            sub: 'How the ' + fmt.money(wtH.avgWeeklyNeed || 0, { short: true }) + ' weekly need splits across the job types',
            height: 260,
            config: {
              type: 'doughnut',
              data: {
                labels: T.weeklyTargetsByJobType.rows.slice(0, 3).map(function (r) { return r[0]; }),
                datasets: [{
                  data: T.weeklyTargetsByJobType.rows.slice(0, 3).map(function (r) { return r[1]; }),
                  backgroundColor: [pal.navy, pal.blue, pal.success],
                  borderColor: '#fff', borderWidth: 2
                }]
              },
              options: withOpts({ cutout: '60%' })
            }
          },
          {
            title: 'Weekly Target by Trade',
            sub: (function () {
              var rows = (T.weeklyTargetsByTrade && T.weeklyTargetsByTrade.rows) || [];
              return rows.length ? rows[0][0] + ' carries ' + fmt.pct(rows[0][2]) + ' of every weekly target dollar' : 'Split of the weekly target by trade';
            })(),
            height: 260,
            config: {
              type: 'doughnut',
              data: {
                labels: T.weeklyTargetsByTrade.rows.map(function (r) { return r[0]; }),
                datasets: [{
                  data: T.weeklyTargetsByTrade.rows.map(function (r) { return r[1]; }),
                  backgroundColor: [pal.navy, pal.blue, pal.warning],
                  borderColor: '#fff', borderWidth: 2
                }]
              },
              options: withOpts({ cutout: '60%' })
            }
          }
        ]
      },
      {
        kind: 'chart-grid', cols: 1,
        charts: [
          {
            title: 'Weekly Target by Market',
            sub: (function () {
              var rows = (T.weeklyTargetByMarketJobType && T.weeklyTargetByMarketJobType.rows) || [];
              return rows.length
                ? rows.length + ' active markets · ' + rows[0][0] + ' needs ' + fmt.money(rows[0][1], { short: true }) + '/wk on its own'
                : 'Per-market weekly targets, stacked by job type';
            })(),
            height: 360,
            config: {
              type: 'bar',
              data: {
                labels: T.weeklyTargetByMarketJobType.rows.map(function (r) { return r[0]; }),
                datasets: [
                  { label: 'Retail-No Financing', data: T.weeklyTargetByMarketJobType.rows.map(function (r) { return r[2]; }), backgroundColor: pal.navy,    stack: 'm' },
                  { label: 'Insurance',           data: T.weeklyTargetByMarketJobType.rows.map(function (r) { return r[3]; }), backgroundColor: pal.blue,    stack: 'm' },
                  { label: 'Retail-Financing',    data: T.weeklyTargetByMarketJobType.rows.map(function (r) { return r[4]; }), backgroundColor: pal.success, stack: 'm' }
                ]
              },
              options: withOpts({
                indexAxis: 'y',
                scales: { x: Object.assign({ stacked: true }, moneyAxis()), y: { stacked: true } }
              })
            }
          }
        ]
      },
      tableSection({
        id: 'weeklyTargetByMarketJobType',
        heading: 'Weekly target by market × job type',
        caption: 'Locked weekly targets, with deals/wk implied by ticket sizes',
        rowMap: function (r) {
          return [
            { html: '<strong>' + r[0] + '</strong>' },
            { html: '<strong>' + fmt.money(r[1]) + '</strong>' },
            fmt.money(r[2]),
            fmt.money(r[3]),
            fmt.money(r[4]),
            r[5]
          ];
        }
      }),
      tableSection({
        id: 'weeklyScheduleNext',
        heading: 'Week-by-week sales schedule',
        caption: 'Upcoming weekly targets · what to sign each week',
        maxHeight: '480px',
        rowMap: function (r) {
          return [
            { html: '<strong>' + r[0] + '</strong>' },
            r[1],
            { html: '<strong>' + fmt.money(r[2]) + '</strong>' }
          ];
        }
      })
    ].filter(Boolean)
  };

  // ============================================================
  // PRODUCTION METRICS
  // ============================================================
  pages.production = {
    eyebrow: 'PRODUCTION · WEEKLY MUST-DOS',
    title: 'Production Metrics',
    intro: 'The other side of the budget equation: what production has to complete and invoice each week to convert sales into revenue. Same locked methodology, applied to the production cycle.',
    sections: [
      {
        kind: 'kpi-row', cols: 4,
        items: [
          { label: 'Weekly Production Need', value: fmt.money(wtH.productionAvgWeeklyNeed), sub: 'Must complete and invoice',     tone: 'navy' },
          { label: 'Sales Cycle (Created→IP)', value: wtH.productionCycleStart + 'd',         sub: 'Model assumption' },
          { label: 'Production Cycle (IP→C)',  value: wtH.productionCycleComplete + 'd',      sub: 'Model assumption' },
          { label: 'Total Cycle',              value: wtH.productionTotalCycle + 'd',         sub: 'Created → Invoiced',           tone: 'success' }
        ]
      },
      {
        kind: 'chart-grid', cols: 2,
        charts: [
          {
            title: 'Weekly Production by Job Type',
            sub: 'Production load mirrors sales mix',
            height: 280,
            config: {
              type: 'doughnut',
              data: {
                labels: T.productionByJobType.rows.map(function (r) { return r[0]; }),
                datasets: [{
                  data: T.productionByJobType.rows.map(function (r) { return r[1]; }),
                  backgroundColor: [pal.navy, pal.blue, pal.success],
                  borderColor: '#fff', borderWidth: 2
                }]
              },
              options: withOpts({ cutout: '60%' })
            }
          },
          {
            title: 'Weekly Production by Trade',
            sub: (function () {
              var rows = (T.productionByTrade && T.productionByTrade.rows) || [];
              return rows.length >= 2 ? rows[0][0] + ' + ' + rows[1][0] + ' carry the bulk of production capacity' : 'Production load by trade';
            })(),
            height: 280,
            config: {
              type: 'doughnut',
              data: {
                labels: T.productionByTrade.rows.map(function (r) { return r[0]; }),
                datasets: [{
                  data: T.productionByTrade.rows.map(function (r) { return r[1]; }),
                  backgroundColor: [pal.navy, pal.blue, pal.warning],
                  borderColor: '#fff', borderWidth: 2
                }]
              },
              options: withOpts({ cutout: '60%' })
            }
          }
        ]
      },
      {
        kind: 'chart-grid', cols: 1,
        charts: [
          {
            title: 'Weekly Production Target by Market',
            sub: (function () {
              var rows = (T.productionByMarketJobType && T.productionByMarketJobType.rows) || [];
              return rows.length ? 'Stacked by job type · ' + rows[0][0] + ' carries the largest weekly load' : 'Stacked by job type';
            })(),
            height: 360,
            config: {
              type: 'bar',
              data: {
                labels: T.productionByMarketJobType.rows.map(function (r) { return r[0]; }),
                datasets: [
                  { label: 'Retail-No Financing', data: T.productionByMarketJobType.rows.map(function (r) { return r[2]; }), backgroundColor: pal.navy,    stack: 'p' },
                  { label: 'Insurance',           data: T.productionByMarketJobType.rows.map(function (r) { return r[3]; }), backgroundColor: pal.blue,    stack: 'p' },
                  { label: 'Retail-Financing',    data: T.productionByMarketJobType.rows.map(function (r) { return r[4]; }), backgroundColor: pal.success, stack: 'p' }
                ]
              },
              options: withOpts({
                indexAxis: 'y',
                scales: { x: Object.assign({ stacked: true }, moneyAxis()), y: { stacked: true } }
              })
            }
          }
        ]
      },
      tableSection({
        id: 'productionByMarketJobType',
        heading: 'Weekly production target by market × job type',
        caption: 'Includes implied jobs/wk so production planners know the unit count',
        rowMap: function (r) {
          return [
            { html: '<strong>' + r[0] + '</strong>' },
            { html: '<strong>' + fmt.money(r[1]) + '</strong>' },
            fmt.money(r[2]),
            fmt.money(r[3]),
            fmt.money(r[4]),
            r[5]
          ];
        }
      }),
      tableSection({
        id: 'productionCycleTimes',
        heading: 'Production cycle times by market × job type',
        caption: 'Median Created→IP and IP→Complete, by combination · sorted by job count',
        maxHeight: '460px',
        rowMap: function (r) {
          return [
            { html: '<strong>' + r[0] + '</strong>' },
            r[1],
            r[2],
            r[3],
            r[4] + 'd',
            fmt.money(r[5]),
            r[6]
          ];
        }
      }),
      tableSection({
        id: 'weekByWeekProductionSchedule',
        heading: 'Week-by-week production schedule',
        caption: 'Locked production targets, week by week to year-end',
        maxHeight: '480px',
        rowMap: function (r) {
          return [
            { html: '<strong>' + r[0] + '</strong>' },
            r[1],
            fmt.money(r[2]),
            { html: '<strong>' + fmt.money(r[3]) + '</strong>' }
          ];
        }
      })
    ].filter(Boolean)
  };

  // ============================================================
  // PROFITABILITY
  // ============================================================
  pages.profitability = {
    eyebrow: 'PROFITABILITY · ' + yPrev + ' + ' + yNow + ' YTD',
    title: 'Profitability',
    intro: 'Combined gross profit picture across both years, with the ' + yPrev + ' baseline and ' + yNow + ' YTD layered side by side. GP percent is the cleanest pricing-discipline read we have.',
    tags: [
      { kind: gmDelta >= 0 ? 'success' : 'warn', text: yNow + ' GP% ' + (gmDelta >= 0 ? 'improving' : 'declining') + ' · ' + fmt.pct(psR.y2026_GP_pct) }
    ],
    sections: [
      {
        kind: 'kpi-row', cols: 4,
        items: [
          { label: 'Combined GP %',         value: fmt.pct(psR.combinedGP_pct),    sub: yPrev + ' + ' + yNow + ' YTD blended',          tone: 'navy' },
          { label: 'Combined GP $',          value: fmt.money(psR.combinedGP, { short: true }), sub: 'On ' + fmt.money(psR.combinedRevenue, { short: true }) + ' invoiced revenue', tone: 'success' },
          { label: yNow + ' YTD GP %',       value: fmt.pct(psR.y2026_GP_pct),     sub: 'Trending ' + (gmDelta >= 0 ? 'up' : 'down') + ' vs ' + yPrev + ' (' + fmt.pct(psR.y2025_GP_pct) + ')', tone: gmDelta >= 0 ? 'success' : 'warn' },
          { label: yPrev + ' Full-Year GP %', value: fmt.pct(psR.y2025_GP_pct),    sub: fmt.money(psR.y2025_revenue, { short: true }) + ' on ' + psR.y2025_jobs + ' jobs' }
        ]
      },
      {
        kind: 'kpi-row', cols: 3,
        items: [
          { label: 'Material Cost',  value: fmt.money(psR.materialCost, { short: true }),   sub: fmt.pct(psR.materialPctContract) + ' of contract value' },
          { label: 'Labor Cost',     value: fmt.money(psR.laborCost, { short: true }),       sub: fmt.pct(psR.laborPctContract) + ' of contract value' },
          { label: 'Commissions',    value: fmt.money(psR.commissions, { short: true }),     sub: fmt.pct(psR.commissionPctContract) + ' of contract value' }
        ]
      },
      {
        kind: 'chart-grid', cols: 2,
        charts: [
          {
            title: 'GP % by Job Type (' + yNow + ' YTD)',
            sub: 'Ranked view of pricing discipline by job type',
            height: 280,
            config: {
              type: 'bar',
              data: {
                labels: T.profitabilityByJobType2026.rows.map(function (r) { return r[0]; }),
                datasets: [{
                  label: 'GP %',
                  data: T.profitabilityByJobType2026.rows.map(lastPct),
                  backgroundColor: [pal.blue, pal.navy, pal.success]
                }]
              },
              options: withOpts({ scales: { y: { ticks: { callback: function (v) { return v + '%'; } }, beginAtZero: true } }, plugins: { legend: { display: false } } })
            }
          },
          {
            title: 'GP % by Job Type (' + yPrev + ' Baseline)',
            sub: 'Same view, full-year ' + yPrev + ' reference',
            height: 280,
            config: {
              type: 'bar',
              data: {
                labels: T.profitabilityByJobType2025.rows.map(function (r) { return r[0]; }),
                datasets: [{
                  label: 'GP %',
                  data: T.profitabilityByJobType2025.rows.map(lastPct),
                  backgroundColor: [pal.navy, pal.blue, pal.success]
                }]
              },
              options: withOpts({ scales: { y: { ticks: { callback: function (v) { return v + '%'; } }, beginAtZero: true } }, plugins: { legend: { display: false } } })
            }
          }
        ]
      },
      {
        kind: 'chart-grid', cols: 1,
        charts: [
          {
            title: 'GP % by Market (' + yNow + ' YTD)',
            sub: (pmBest && pmWorst && pmBest[0] !== pmWorst[0])
              ? pmBest[0] + ' leads (' + fmt.pct(lastPct(pmBest)) + ') · ' + pmWorst[0] + ' is the outlier (' + fmt.pct(lastPct(pmWorst)) + ')'
              : 'GP percent by market, ranked',
            height: 360,
            config: {
              type: 'bar',
              data: {
                labels: pmNonTotal.map(function (r) { return r[0]; }),
                datasets: [{
                  label: 'GP %',
                  data: pmNonTotal.map(lastPct),
                  backgroundColor: pmNonTotal.map(function (r) {
                    var v = lastPct(r);
                    return v >= 45 ? pal.success : v >= 38 ? pal.navy : v >= 30 ? pal.warning : pal.danger;
                  })
                }]
              },
              options: withOpts({
                indexAxis: 'y',
                scales: { x: { ticks: { callback: function (v) { return v + '%'; } }, beginAtZero: true } },
                plugins: { legend: { display: false } }
              })
            }
          }
        ]
      },
      tableSection({
        id: 'profitabilityByJobType2026',
        heading: 'Invoiced ' + yNow + ': by job type',
        caption: 'GP% pill colors track the same bands as the market chart',
        rowMap: profCellsR
      }),
      tableSection({
        id: 'profitabilityByMarket2026',
        heading: 'Invoiced ' + yNow + ': by market',
        caption: 'Full P&L cut · ranked by revenue',
        maxHeight: '480px',
        rowMap: profCellsR
      }),
      pmWorst ? {
        kind: 'callout',
        title: 'The ' + pmWorst[0] + ' question',
        body: pmWorst[0] + ' is invoicing at <strong>' + fmt.pct(lastPct(pmWorst)) + ' GP</strong>, the lowest market in the ' + yNow + ' YTD table and well below the ' + fmt.pct(psR.y2026_GP_pct) + ' blended margin. Worth a focused estimate review and a material/labor cost audit before the next quarter\'s plans lock.'
      } : {
        kind: 'callout', tone: 'info',
        title: 'Per-market detail pending',
        body: 'Per-market profitability rows are not in this refresh. Drop the latest profitability CSV into the residential inputs folder and rerun the build to populate the market cut.'
      }
    ].filter(Boolean)
  };

  // ============================================================
  // BUDGET RECOVERY
  // ============================================================
  pages['budget-recovery'] = {
    eyebrow: 'BUDGET RECOVERY · REALISTIC VS BUDGET',
    title: 'Budget Recovery',
    intro: 'How we close the gap between today\'s forecast and the original residential budget. The recovery layer adds a ' + (brH.upliftPct || 0) + '% uplift to each remaining month so the year still lands at ' + fmt.money(brH.fullYearBudget || 0, { short: true }) + '.',
    tags: [
      { kind: 'danger', text: fmt.money(brH.gap || 0, { short: true }) + ' to recover' },
      { kind: 'info',   text: '+' + (brH.upliftPct || 0) + '% monthly uplift' }
    ],
    sections: [
      {
        kind: 'kpi-row', cols: 4,
        items: [
          { label: 'Full-Year Budget',    value: fmt.money(brH.fullYearBudget, { short: true }), sub: 'Residential plan target',         tone: 'navy' },
          { label: 'Recovery Gap',         value: fmt.money(brH.gap, { short: true }),            sub: 'To re-allocate across remaining months',    tone: 'danger' },
          { label: 'Monthly Uplift',       value: '+' + (brH.upliftPct || 0) + '%',                       sub: 'On forecast for each month',       tone: 'warn' },
          { label: 'Closed-Month Treatment', value: 'Accepted',                                                          sub: fmt.money(brH.aprilGap, { short: true }) + ' early-month gap absorbed' }
        ]
      },
      {
        kind: 'kpi-row', cols: 3,
        items: [
          { label: 'Q1 Original Budget', value: fmt.money(brH.q1OriginalBudget, { short: true }), sub: 'Original residential plan' },
          { label: 'Q1 Actual',           value: fmt.money(brH.q1Actual, { short: true }),         sub: 'Through end of March' },
          { label: 'Q1 Shortfall',        value: fmt.money(brH.q1Shortfall, { short: true }),      sub: 'Inside the recovery target',     tone: 'warn' }
        ]
      },
      {
        kind: 'chart-grid', cols: 1,
        charts: [
          {
            title: 'Monthly Revenue Bridge: Original Budget → Recovery Target',
            sub: 'Each month: original budget (gray), model forecast (blue), recovery target (navy)',
            height: 340,
            config: {
              type: 'bar',
              data: {
                labels: T.budgetRecoveryMonthlyBridge.rows.filter(function (r) { return r[0] !== 'FULL YEAR'; }).map(function (r) { return r[0]; }),
                datasets: [
                  { label: 'Original Budget',  data: T.budgetRecoveryMonthlyBridge.rows.filter(function (r) { return r[0] !== 'FULL YEAR'; }).map(function (r) { return r[1]; }), backgroundColor: pal.slate, borderRadius: 4 },
                  { label: 'Model Forecast',   data: T.budgetRecoveryMonthlyBridge.rows.filter(function (r) { return r[0] !== 'FULL YEAR'; }).map(function (r) { return r[2]; }), backgroundColor: pal.blue,  borderRadius: 4 },
                  { label: 'Recovery Target',  data: T.budgetRecoveryMonthlyBridge.rows.filter(function (r) { return r[0] !== 'FULL YEAR'; }).map(function (r) { return r[3]; }), backgroundColor: pal.navy,  borderRadius: 4 }
                ]
              },
              options: withOpts({ scales: { y: moneyAxis() } })
            }
          }
        ]
      },
      {
        kind: 'chart-grid', cols: 1,
        charts: [
          {
            title: 'Catch-Up Added by Month',
            sub: 'The actual recovery dollars distributed across the remaining months',
            height: 280,
            config: {
              type: 'bar',
              data: {
                labels: T.budgetRecoveryMonthlyBridge.rows.filter(function (r) { return r[0] !== 'FULL YEAR' && r[4] > 0; }).map(function (r) { return r[0]; }),
                datasets: [{
                  label: 'Catch-Up Added',
                  data: T.budgetRecoveryMonthlyBridge.rows.filter(function (r) { return r[0] !== 'FULL YEAR' && r[4] > 0; }).map(function (r) { return r[4]; }),
                  backgroundColor: pal.warning
                }]
              },
              options: withOpts({ scales: { y: moneyAxis() }, plugins: { legend: { display: false } } })
            }
          }
        ]
      },
      tableSection({
        id: 'budgetRecoveryMonthlyBridge',
        heading: 'Monthly bridge · original → recovery target',
        rowMap: function (r) {
          return [
            { html: '<strong>' + r[0] + '</strong>' },
            fmt.money(r[1]),
            fmt.money(r[2]),
            fmt.money(r[3]),
            r[4] > 0 ? fmt.money(r[4]) : ',',
            { html: r[5] === 'Actual' ? '<span class="pill pill-success">Actual</span>'
                  : r[5] === 'Recovery Target' ? '<span class="pill pill-warn">Recovery Target</span>'
                  : r[5] ? '<span class="pill pill-info">' + r[5] + '</span>' : '' }
          ];
        }
      }),
      tableSection({
        id: 'adjustedSalesByMarket',
        heading: 'Adjusted weekly sales target: by market',
        caption: 'Recovery-layer adjustment, by branch · the delta is the new ask',
        rowMap: function (r) {
          return [
            { html: '<strong>' + r[0] + '</strong>' },
            { html: '<strong>' + fmt.money(r[1]) + '</strong>' },
            fmt.money(r[2]),
            { html: '<span class="pill pill-warn">+' + fmt.money(r[3]) + '</span>' }
          ];
        }
      }),
      {
        kind: 'callout', tone: 'danger',
        title: 'Owner check',
        body: 'The recovery layer is a math allocation, not a plan. For it to land we need: (a) the top revenue branches to hold their current pace, (b) closing velocity to stay at or better than the model cycle medians, (c) the unbilled-completed queue to stay short. If any of those three slip, re-baseline at end-of-month and escalate to the COO.'
      }
    ].filter(Boolean)
  };

  // ============================================================
  // STRATEGIC RECOMMENDATIONS
  // ============================================================
  pages.recommendations = {
    eyebrow: 'STRATEGIC · WHERE TO PUSH',
    title: 'Strategic Recommendations',
    intro: 'The moves the data points to. Each one is sized so a single owner can move the number in 30 to 60 days. Read the strategy highlights for the math behind them.',
    tags: [{ kind: 'success', text: ((commR.actionableRecommendations || []).length || 'No') + ' prioritized action' + ((commR.actionableRecommendations || []).length === 1 ? '' : 's') }],
    sections: [
      {
        kind: 'kpi-row', cols: 3,
        items: (function () {
          var items = [];
          if (jtiSorted.length) {
            items.push({
              label: 'Best Job Type · Rev/Day',
              value: jtiSorted[0][0],
              sub: '$' + Math.round(jtiSorted[0][3]).toLocaleString('en-US') + '/day · ' + Math.round(jtiSorted[0][2]) + 'd cycle · ' + fmt.money(jtiSorted[0][1], { short: true }) + ' avg',
              tone: 'navy'
            });
          }
          smRows.slice(0, 2).forEach(function (r, i) {
            items.push({
              label: (i === 0 ? 'Best' : 'Runner-Up') + ' Market · Rev/Eff',
              value: r[0],
              sub: '$' + Math.round(r[4]).toLocaleString('en-US') + '/day · ' + r[3] + 'd median · ' + r[1] + ' jobs',
              tone: 'success'
            });
          });
          if (!items.length) items.push({ label: 'Revenue Efficiency', value: '—', sub: 'not in data payload' });
          return items;
        })()
      },
      {
        kind: 'prose', heading: 'Actionable recommendations',
        cards: [
          {
            kind: 'tint', eyebrow: 'PRIORITIZED MOVES',
            list: (commR.actionableRecommendations || []).map(function (t) { return { text: noV5(t), icon: '→', tone: 'navy' }; })
          },
          {
            eyebrow: 'STRATEGY HIGHLIGHTS',
            list: (commR.strategyHighlights || []).map(function (t) { return { text: noV5(t), icon: '✓', tone: 'success' }; })
          }
        ],
        cols: 2
      },
      {
        kind: 'chart-grid', cols: 1,
        charts: [
          {
            title: 'Best Markets by Revenue Efficiency',
            sub: 'Top ' + Math.min(smRows.length || 12, 12) + ' markets · ranked by Rev/Day',
            height: 380,
            config: {
              type: 'bar',
              data: {
                labels: smRows.slice(0, 12).map(function (r) { return r[0]; }),
                datasets: [{
                  label: 'Rev/Day',
                  data: smRows.slice(0, 12).map(function (r) { return r[4]; }),
                  backgroundColor: pal.navy
                }]
              },
              options: withOpts({
                indexAxis: 'y',
                scales: { x: { ticks: { callback: function (v) { return '$' + v; } }, beginAtZero: true } },
                plugins: { legend: { display: false } }
              })
            }
          }
        ]
      },
      tableSection({
        id: 'strategicBestMarketsRevEff',
        heading: 'Best markets by revenue efficiency',
        caption: 'Where to lean in for the next quarter',
        maxHeight: '460px',
        rowMap: function (r) {
          return [
            { html: '<strong>' + r[0] + '</strong>' },
            r[1],
            fmt.money(r[2]),
            r[3] + 'd',
            { html: '<strong>$' + Math.round(r[4]).toLocaleString('en-US') + '/day</strong>' }
          ];
        }
      }),
      tableSection({
        id: 'strategicBestTradesRevEff',
        heading: 'Best trades by revenue efficiency',
        caption: 'Trade combinations that move the most revenue per crew-day',
        maxHeight: '460px',
        rowMap: function (r) {
          return r.map(function (c, i) {
            if (i === 0) return { html: '<strong>' + c + '</strong>' };
            return (typeof c === 'number' && c >= 10000) ? fmt.money(c) : c;
          });
        }
      }),
      {
        kind: 'callout', tone: 'success',
        title: 'How to use this page',
        body: 'Print this tab on the first Monday of each month. The Prioritized Moves list should be the basis for branch-level OKRs. The Best Markets table tells the sales ops team where to add lead spend; the Best Trades table tells the bookings team which scopes to steer toward.'
      }
    ].filter(Boolean)
  };

  // ============================================================
  // EXPORT
  // ============================================================
  window.FZ_PAGE_DEFS = window.FZ_PAGE_DEFS || {};
  window.FZ_PAGE_DEFS['revenue-forecast'] = pages;
})();
