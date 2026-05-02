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
  // INDEX (Revenue Forecast hub)
  // ============================================================
  var pages = {};

  pages.index = {
    eyebrow: D.subtitle || 'V5 Model · YTD 2026',
    title: 'Residential Revenue Forecast',
    intro: 'A unified revenue picture: what we have invoiced, what is coming through the pipeline, and what we still need to sign each week to land the $125.6M residential plan. The V5 model translates today\'s sold-not-invoiced backlog into month-by-month revenue and surfaces the weekly sales targets that close the gap.',
    tags: [
      { kind: 'info',    text: 'V5 model · locked 2026-04-19' },
      { kind: 'warn',    text: '$3.4M recovery gap' },
      { kind: 'success', text: '4-wk avg $2.6M/wk' }
    ],
    sections: [
      {
        kind: 'kpi-row', cols: 4,
        items: [
          { label: 'YTD Sales (Created)',     value: '$21.3M', sub: 'Jobs processed into system',          tone: 'navy' },
          { label: 'Invoiced YTD',             value: '$18.8M', sub: 'Based on actual invoice dates',       tone: 'success' },
          { label: '4-Week Avg Weekly Sales',  value: '$2.6M',  sub: 'Trend: +$252K/week',                   tone: 'success' },
          { label: 'Current Week (Projected)', value: '$2.4M',  sub: 'WTD: $675K',                           tone: 'warn' }
        ]
      },
      {
        kind: 'kpi-row', cols: 4,
        items: [
          { label: 'Annual Forecast',         value: fmt.money(D.execSummary.modelAnnualInvoiced, { short: true }), sub: 'Model invoiced revenue' },
          { label: 'Annual Budget',           value: fmt.money(D.execSummary.budget, { short: true }),              sub: 'Residential plan' },
          { label: 'Forecast vs Budget',      value: '-$6.3M', sub: '5.0% under plan',                       tone: 'warn' },
          { label: 'Active Pipeline',         value: '$14.7M', sub: '713 jobs across 4 stages',              tone: 'navy' }
        ]
      },
      {
        kind: 'chart-grid', cols: 1, heading: 'Weekly Sales Velocity',
        caption: 'Each Friday roll-up across 16 weeks · the 4-week average is what feeds the forecast model',
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
        kind: 'chart-grid', cols: 2, heading: 'Budget vs Forecast (Apr through Dec)',
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
            sub: 'What we have to sign each month, Apr through Dec',
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
            sub: '$14.7M across 713 jobs · stage mix today',
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
            sub: '% of YTD invoiced revenue, all 12 active markets',
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
          { kind: 'navy', eyebrow: 'THE MODEL READ', title: 'Timing, not volume', body: '<p>The V5 model projects <strong>' + fmt.money(D.execSummary.modelAnnualInvoiced, { short: true }) + '</strong> in annual invoiced revenue against a <strong>' + fmt.money(D.execSummary.budget, { short: true }) + '</strong> plan. Q1 ramped slowly, so Q2 invoicing will lag. If the current $2.6M weekly pace holds, H2 catches up as earlier sales convert to invoiced revenue.</p>' },
          { kind: 'tint', eyebrow: 'WEEKLY TARGET', title: 'Sign $2.68M to stay on plan', body: '<p>The locked V5 weekly target is <strong>' + fmt.money(D.weeklyTargetsHeader.avgWeeklyNeed, { short: true }) + '</strong>. Trailing four weeks landed at <strong>' + fmt.money(D.weeklyTargetsHeader.recent4WkAvg, { short: true }) + '</strong>. The gap is <strong>' + fmt.money(D.weeklyTargetsHeader.gap) + '/week</strong>, well within reach if Columbus and Detroit Metro hold their April pace.</p>' },
          { eyebrow: 'WHAT TO WATCH', title: 'The recovery bridge', body: '<p>The Budget Recovery view re-allocates a <strong>' + fmt.money(D.budgetRecoveryHeader.gap, { short: true }) + '</strong> shortfall across May through December as a <strong>+' + D.budgetRecoveryHeader.upliftPct + '%</strong> uplift on each remaining month. April is accepted as forecast (no catch-up).</p>' }
        ]
      }
    ]
  };

  // ============================================================
  // EXECUTIVE SUMMARY
  // ============================================================
  pages.executive = {
    eyebrow: 'EXECUTIVE BRIEF · V5 MODEL',
    title: 'Executive Summary',
    intro: 'The five numbers that frame the residential revenue picture today, plus the budget vs forecast bridge through year-end.',
    tags: [
      { kind: 'warn', text: '-$6.3M to plan' },
      { kind: 'info', text: 'Updated daily' }
    ],
    sections: [
      {
        kind: 'kpi-row', cols: 4,
        items: [
          { label: 'YTD Sales (Created)',  value: '$21.3M', sub: 'Jobs processed into system',          tone: 'navy' },
          { label: 'Invoiced YTD',          value: '$18.8M', sub: 'Based on actual invoice dates',       tone: 'success' },
          { label: '4-Week Avg',            value: '$2.6M',  sub: 'Trend: +$252K/wk',                    tone: 'success' },
          { label: 'Current Week (Proj.)',  value: '$2.4M',  sub: 'WTD: $675K',                          tone: 'warn' }
        ]
      },
      {
        kind: 'kpi-row', cols: 4,
        items: [
          { label: 'April Revenue (Actual)', value: fmt.money(D.monthRevenue.april.netRevenue, { short: true }), sub: 'Invoiced ' + fmt.money(D.monthRevenue.april.invoiced, { short: true }) + ' + WIP ' + fmt.money(D.monthRevenue.april.wipChange, { short: true }) },
          { label: 'May Revenue (Forecast)', value: fmt.money(D.monthRevenue.may.netRevenue, { short: true }),    sub: 'Invoiced ' + fmt.money(D.monthRevenue.may.invoiced, { short: true }) + ' + WIP ' + fmt.money(D.monthRevenue.may.wipChange, { short: true }) },
          { label: 'Annual Forecast',        value: fmt.money(D.execSummary.modelAnnualInvoiced, { short: true }), sub: 'Model invoiced revenue' },
          { label: 'Forecast vs Budget',     value: '-$6.3M', sub: '5.0% under $125.6M plan', tone: 'warn' }
        ]
      },
      {
        kind: 'chart-grid', cols: 1, heading: 'Budget vs Model Revenue (Apr–Dec)',
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
        kind: 'callout', tone: 'warn',
        title: 'The shape of the gap',
        body: D.execSummary.narrative
      },
      {
        kind: 'prose', heading: 'Strategic context',
        cards: [
          { kind: 'tint', eyebrow: 'BEST JOB TYPES BY REV/DAY', body: '<p>Insurance leads at <strong>$1,316/day</strong>, Retail-Financing at <strong>$1,216/day</strong>, Retail-No Financing at <strong>$988/day</strong>. The fastest revenue dollar in the company is a single-trade Retail-Financing job: 21-day cycle, $20,387 average ticket.</p>' },
          { eyebrow: 'WEEKLY NEED VS LIVE', body: '<p>Locked target: <strong>' + fmt.money(D.weeklyTargetsHeader.avgWeeklyNeed) + '/wk</strong>. Trailing four weeks: <strong>' + fmt.money(D.weeklyTargetsHeader.recent4WkAvg) + '/wk</strong>. Gap: <strong>' + fmt.money(D.weeklyTargetsHeader.gap) + '/wk</strong> (~5%). Catchable if April velocity holds.</p>' }
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
    intro: 'A trend-based annual sales projection using 2025 seasonality applied to today\'s YTD pace. Two paths: budget path (what we planned) and forecast path (what current velocity implies).',
    tags: [{ kind: 'info', text: 'Trend model · 2025 seasonality' }],
    sections: [
      {
        kind: 'kpi-row', cols: 4,
        items: [
          { label: 'YTD Actual (Jan–Apr)',  value: '$25.1M',  sub: 'Sales created through April',         tone: 'navy' },
          { label: 'Forecast Path',          value: '$119.2M', sub: 'Trend-based annual projection',       tone: 'success' },
          { label: 'Budget Path',            value: '$125.6M', sub: '2025 seasonality on plan' },
          { label: 'Path Gap',               value: '-$6.3M',  sub: 'Forecast vs budget',                  tone: 'warn' }
        ]
      },
      {
        kind: 'chart-grid', cols: 1,
        charts: [
          {
            title: 'Trend-Based Annual Sales Projection',
            sub: 'YTD actual rolls into a forecast that uses 2025 seasonal mix · budget shown for reference',
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
            title: '2025 Seasonal Mix',
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
            title: 'Adjusted Weekly Sales Run Rate (Apr–Dec)',
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
        caption: 'YTD actual is locked · forward months blend 2025 seasonality with current velocity',
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
        body: 'Sept and Oct are the make-or-break months. Combined budget path is <strong>$28.6M</strong>; forecast path is <strong>$26.7M</strong>. If we are still tracking ±5% to plan at end of August, those two months pull the year back into line.'
      }
    ]
  };

  // ============================================================
  // MONTHLY FORECAST
  // ============================================================
  pages.monthly = {
    eyebrow: 'MONTHLY FORECAST · APRIL FORWARD',
    title: 'Monthly Forecast',
    intro: 'The full month-by-month bridge: how much revenue the existing backlog will throw off, how much new sales we need on top, and where the gap to budget sits each month.',
    sections: [
      {
        kind: 'kpi-row', cols: 4,
        items: [
          { label: 'Apr Net Revenue',  value: fmt.money(D.monthRevenue.april.netRevenue, { short: true }), sub: 'Invoiced + WIP change',           tone: 'navy' },
          { label: 'May Forecast',      value: fmt.money(D.monthRevenue.may.netRevenue, { short: true }),    sub: 'Largest sales month required',    tone: 'warn' },
          { label: 'Apr–Dec Total',     value: '$107.3M', sub: 'Forecast net revenue',                       tone: 'success' },
          { label: 'Apr–Dec Budget',    value: '$109.6M', sub: 'Variance -$2.3M' }
        ]
      },
      {
        kind: 'chart-grid', cols: 1,
        charts: [
          {
            title: 'Net Revenue: Budget vs Forecast (Apr–Dec)',
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
      {
        kind: 'callout', tone: 'warn',
        title: 'May and August are the pinch months',
        body: 'May needs <strong>$17.2M</strong> in signed sales (highest of the year) to land its $13.7M revenue target. August follows with <strong>$15.2M</strong> needed. These are the two months where Sales and Production ops have to be operating hot at the same time.'
      }
    ]
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
          { label: 'Total Apr–Dec Need',     value: '$107.1M', sub: 'New sales required to hit plan',     tone: 'navy' },
          { label: 'From Backlog',            value: '$16.8M',  sub: 'Already on the books',                tone: 'success' },
          { label: 'Revenue Gap to Cover',    value: '$92.4M',  sub: 'New sales that must arrive',          tone: 'warn' },
          { label: 'Highest Month (May)',     value: '$17.2M',  sub: 'Largest single-month sales need',     tone: 'danger' }
        ]
      },
      {
        kind: 'chart-grid', cols: 1,
        charts: [
          {
            title: 'Required Monthly Sales to Hit Budget (Apr–Dec)',
            sub: 'Total sales needed each month, including backlog absorption',
            height: 320,
            config: {
              type: 'bar',
              data: {
                labels: C.budgetSalesChart.labels,
                datasets: [{
                  label: 'Required Sales',
                  data: C.budgetSalesChart.datasets[0].data,
                  backgroundColor: C.budgetSalesChart.datasets[0].data.map(function (v) {
                    return v >= 15000000 ? pal.danger : v >= 12000000 ? pal.warning : pal.navy;
                  })
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
        body: 'In April, backlog covers <strong>$9.4M</strong> of the <strong>$12.3M</strong> need (76%). By July, backlog only covers <strong>$655K</strong> of <strong>$10.2M</strong> (6%). The further out we look, the more every revenue dollar comes from sales we have to make this week.'
      }
    ]
  };

  // ============================================================
  // JOB TYPE ANALYSIS
  // ============================================================
  pages['job-types'] = {
    eyebrow: 'JOB TYPES · CYCLE & TICKET',
    title: 'Job Type Analysis',
    intro: 'How each of our three job types converts to revenue: ticket size, cycle days, dollars per day, and how the same-month conversion drops over the M+0 to M+5 window.',
    sections: [
      {
        kind: 'kpi-row', cols: 3,
        items: [
          { label: 'Insurance',           value: '$1,316/day', sub: '$25,011 avg · 19d cycle · 43.6% same-mo conv', tone: 'navy' },
          { label: 'Retail-Financing',    value: '$1,216/day', sub: '$21,883 avg · 18d cycle · 60.8% same-mo conv', tone: 'success' },
          { label: 'Retail-No Financing', value: '$988/day',   sub: '$18,768 avg · 19d cycle · 61.9% same-mo conv' }
        ]
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
            sub: 'Insurance dominates ticket size · Retail-Financing close behind',
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
        body: 'Single-trade jobs dominate. Retail-Financing 1-trade is <strong>$859/day</strong>; multi-trade Insurance jobs collapse to <strong>$516/day</strong>. The bookings team should be steering toward simpler scopes whenever possible (same revenue, fewer days locked up).'
      }
    ]
  };

  // ============================================================
  // PIPELINE & BRANCH
  // ============================================================
  pages.pipeline = {
    eyebrow: 'PIPELINE · 4 STAGES · 12 MARKETS',
    title: 'Pipeline & Branch',
    intro: 'Where the active $14.7M lives today, plus how it splits across the 12 active branches.',
    tags: [{ kind: 'info', text: '713 jobs in pipeline' }],
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
            sub: '$14.7M across 4 stages',
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
            sub: 'Columbus and Detroit Metro dominate · top three carry 57%',
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
        body: 'Top 4 markets (Columbus, Detroit Metro, Nashville, DC Metro) carry <strong>66.5%</strong> of YTD revenue. Backlog is just as concentrated: Columbus + Detroit Metro hold <strong>$4.2M</strong> of the $7.2M not-started book.'
      }
    ]
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
          { label: 'Sales Cycle (Created→IP)', value: '12d', sub: 'V5 model assumption',                       tone: 'navy' },
          { label: 'Production (IP→Complete)',  value: '9d',  sub: 'V5 model assumption' },
          { label: 'Total Cycle',                value: '21d', sub: 'Created → Invoiced',                       tone: 'success' },
          { label: '4-Trade Insurance',          value: '60.5d', sub: 'Worst-case multi-trade · 1.9× single', tone: 'warn' }
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
        id: 'jobTypeCycle',
        heading: 'Job type cycle times: quick read',
        rowMap: function (r) {
          return [{ html: '<strong>' + r[0] + '</strong>' }, r[1], r[2], r[3], r[4], r[5]];
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
        body: 'Adding a second trade to an Insurance job pushes cycle from 28d to 40d (+43%). Adding a third pushes it to 53d (+90%). Margin holds, but the same crew capacity earns 47% fewer turns. The booking team should default to single-trade scope unless the bundle adds material ticket value.'
      }
    ]
  };

  // ============================================================
  // WEEKLY SALES TARGETS
  // ============================================================
  pages['weekly-targets'] = {
    eyebrow: 'WEEKLY TARGETS · LOCKED V5',
    title: 'Weekly Sales Targets',
    intro: 'The locked weekly target schedule that drives the budget plan. Methodology locked April 19, 2026 (do not change WIP constants without explicit approval).',
    tags: [
      { kind: 'info', text: 'Locked V5' },
      { kind: 'success', text: 'Gap to live: ~5%' }
    ],
    sections: [
      {
        kind: 'kpi-row', cols: 4,
        items: [
          { label: 'Avg Weekly Need',    value: fmt.money(D.weeklyTargetsHeader.avgWeeklyNeed),       sub: 'V5 locked target',                  tone: 'navy' },
          { label: 'Recent 4-Wk Avg',     value: fmt.money(D.weeklyTargetsHeader.recent4WkAvg),         sub: 'Trailing actuals',                  tone: 'success' },
          { label: 'Weekly Gap',          value: fmt.money(D.weeklyTargetsHeader.gap),                  sub: '~5% short of target',                tone: 'warn' },
          { label: 'Production Need',     value: fmt.money(D.weeklyTargetsHeader.productionAvgWeeklyNeed), sub: 'Weekly must-complete-and-invoice', tone: 'navy' }
        ]
      },
      {
        kind: 'callout', tone: 'warn',
        title: 'Methodology locked',
        body: 'The Weekly Sales Targets schedule is locked as of <strong>2026-04-19</strong>. WIP constants and cycle-time hierarchy are immutable in this view. If actuals diverge by more than ±15% from the locked target for two consecutive weeks, escalate to the COO and FP&A Director (Mahlet Teshome Mandefro) for an off-cycle methodology review.'
      },
      {
        kind: 'chart-grid', cols: 2,
        charts: [
          {
            title: 'Weekly Target by Job Type',
            sub: 'How the $2.68M weekly need splits across the three job types',
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
            sub: 'Roofing carries 62% of every weekly target dollar',
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
            sub: 'All 11 active markets · Columbus needs $793K/wk on its own',
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
        caption: 'Locked V5 weekly targets, with deals/wk implied by ticket sizes',
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
        id: 'weekByWeekSalesSchedule',
        heading: 'Week-by-week sales schedule',
        caption: 'Every week from Apr 19 to year-end · what to sign and the running cumulative',
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
    ]
  };

  // ============================================================
  // PRODUCTION METRICS
  // ============================================================
  pages.production = {
    eyebrow: 'PRODUCTION · WEEKLY MUST-DOS',
    title: 'Production Metrics',
    intro: 'The other side of the budget equation: what production has to complete and invoice each week to convert sales into revenue. Same locked V5 methodology, applied to the production cycle.',
    sections: [
      {
        kind: 'kpi-row', cols: 4,
        items: [
          { label: 'Weekly Production Need', value: fmt.money(D.weeklyTargetsHeader.productionAvgWeeklyNeed), sub: 'Must complete and invoice',     tone: 'navy' },
          { label: 'Sales Cycle (Created→IP)', value: D.weeklyTargetsHeader.productionCycleStart + 'd',         sub: 'V5 assumption' },
          { label: 'Production Cycle (IP→C)',  value: D.weeklyTargetsHeader.productionCycleComplete + 'd',      sub: 'V5 assumption' },
          { label: 'Total Cycle',              value: D.weeklyTargetsHeader.productionTotalCycle + 'd',         sub: 'Created → Invoiced',           tone: 'success' }
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
            sub: 'Roofing + Gutters drive 88% of production capacity',
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
            sub: 'Stacked by job type · Columbus alone is $793K/wk in production',
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
        caption: 'Locked V5 production targets, week by week to year-end',
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
    ]
  };

  // ============================================================
  // PROFITABILITY
  // ============================================================
  pages.profitability = {
    eyebrow: 'PROFITABILITY · 2025 + 2026 YTD',
    title: 'Profitability',
    intro: 'Combined gross profit picture across both years, with the 2025 baseline and 2026 YTD layered side by side. GP percent is the cleanest pricing-discipline read we have.',
    tags: [
      { kind: 'success', text: '2026 GP% improving · 42.1%' }
    ],
    sections: [
      {
        kind: 'kpi-row', cols: 4,
        items: [
          { label: 'Combined GP %',         value: fmt.pct(D.profitabilitySummary.combinedGP_pct),    sub: '2025 + 2026 YTD blended',          tone: 'navy' },
          { label: 'Combined GP $',          value: fmt.money(D.profitabilitySummary.combinedGP, { short: true }), sub: 'On ' + fmt.money(D.profitabilitySummary.combinedRevenue, { short: true }) + ' invoiced revenue', tone: 'success' },
          { label: '2026 YTD GP %',          value: fmt.pct(D.profitabilitySummary.y2026_GP_pct),     sub: 'Trending up vs 2025 (' + fmt.pct(D.profitabilitySummary.y2025_GP_pct) + ')', tone: 'success' },
          { label: '2025 Full-Year GP %',    value: fmt.pct(D.profitabilitySummary.y2025_GP_pct),     sub: fmt.money(D.profitabilitySummary.y2025_revenue, { short: true }) + ' on ' + D.profitabilitySummary.y2025_jobs + ' jobs' }
        ]
      },
      {
        kind: 'kpi-row', cols: 3,
        items: [
          { label: 'Material Cost',  value: fmt.money(D.profitabilitySummary.materialCost, { short: true }),   sub: fmt.pct(D.profitabilitySummary.materialPctContract) + ' of contract value' },
          { label: 'Labor Cost',     value: fmt.money(D.profitabilitySummary.laborCost, { short: true }),       sub: fmt.pct(D.profitabilitySummary.laborPctContract) + ' of contract value' },
          { label: 'Commissions',    value: fmt.money(D.profitabilitySummary.commissions, { short: true }),     sub: fmt.pct(D.profitabilitySummary.commissionPctContract) + ' of contract value' }
        ]
      },
      {
        kind: 'chart-grid', cols: 2,
        charts: [
          {
            title: 'GP % by Job Type (2026 YTD)',
            sub: 'Retail-Financing leads · Insurance trails',
            height: 280,
            config: {
              type: 'bar',
              data: {
                labels: T.profitabilityByJobType2026.rows.map(function (r) { return r[0]; }),
                datasets: [{
                  label: 'GP %',
                  data: T.profitabilityByJobType2026.rows.map(function (r) { return parseFloat(String(r[6]).replace('%', '')); }),
                  backgroundColor: [pal.blue, pal.navy, pal.success]
                }]
              },
              options: withOpts({ scales: { y: { ticks: { callback: function (v) { return v + '%'; } }, beginAtZero: true } }, plugins: { legend: { display: false } } })
            }
          },
          {
            title: 'GP % by Job Type (2025 Baseline)',
            sub: 'Same view, full-year 2025 reference',
            height: 280,
            config: {
              type: 'bar',
              data: {
                labels: T.profitabilityByJobType2025.rows.map(function (r) { return r[0]; }),
                datasets: [{
                  label: 'GP %',
                  data: T.profitabilityByJobType2025.rows.map(function (r) { return parseFloat(String(r[6]).replace('%', '')); }),
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
            title: 'GP % by Market (2026 YTD)',
            sub: 'Cleveland leads (47.2%) · Raleigh is the outlier (26.9%)',
            height: 360,
            config: {
              type: 'bar',
              data: {
                labels: T.profitabilityByMarket2026.rows.filter(function (r) { return r[0] !== 'TOTAL'; }).map(function (r) { return r[0]; }),
                datasets: [{
                  label: 'GP %',
                  data: T.profitabilityByMarket2026.rows.filter(function (r) { return r[0] !== 'TOTAL'; }).map(function (r) { return parseFloat(String(r[7]).replace('%', '')); }),
                  backgroundColor: T.profitabilityByMarket2026.rows.filter(function (r) { return r[0] !== 'TOTAL'; }).map(function (r) {
                    var v = parseFloat(String(r[7]).replace('%', ''));
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
        heading: 'Invoiced 2026: by job type',
        caption: 'Retail-Financing carries the highest GP% (49.2%)',
        rowMap: function (r) {
          return [
            { html: '<strong>' + r[0] + '</strong>' },
            r[1],
            fmt.money(r[2]),
            fmt.money(r[3]),
            fmt.money(r[4]),
            fmt.money(r[5]),
            { html: '<span class="pill pill-success">' + r[6] + '</span>' }
          ];
        }
      }),
      tableSection({
        id: 'profitabilityByMarket2026',
        heading: 'Invoiced 2026: by market',
        caption: 'Full P&L cut · ranked by revenue',
        maxHeight: '480px',
        rowMap: function (r) {
          var pct = parseFloat(String(r[7]).replace('%', ''));
          var pillCls = pct >= 45 ? 'pill-success' : pct >= 38 ? 'pill-info' : pct >= 30 ? 'pill-warn' : 'pill-danger';
          return [
            { html: '<strong>' + r[0] + '</strong>' },
            r[1],
            fmt.money(r[2]),
            fmt.money(r[3]),
            fmt.money(r[4]),
            fmt.money(r[5]),
            fmt.money(r[6]),
            { html: '<span class="pill ' + pillCls + '">' + r[7] + '</span>' }
          ];
        }
      }),
      {
        kind: 'callout',
        title: 'The Raleigh question',
        body: 'Raleigh is invoicing at <strong>26.9% GP</strong> on $1.16M of 2026 revenue, well below the 41.6% blended baseline. 2025 it was 42.1% on a similar volume. Worth a focused estimate review and a material/labor cost audit before Q3 plans lock.'
      }
    ]
  };

  // ============================================================
  // BUDGET RECOVERY
  // ============================================================
  pages['budget-recovery'] = {
    eyebrow: 'BUDGET RECOVERY · LOCKED V5',
    title: 'Budget Recovery',
    intro: 'How we close the gap between today\'s forecast and the original residential budget. The recovery layer adds a ' + D.budgetRecoveryHeader.upliftPct + '% uplift to each remaining month so the year still lands at $126.1M.',
    tags: [
      { kind: 'danger', text: fmt.money(D.budgetRecoveryHeader.gap, { short: true }) + ' to recover' },
      { kind: 'info',   text: '+' + D.budgetRecoveryHeader.upliftPct + '% monthly uplift' }
    ],
    sections: [
      {
        kind: 'kpi-row', cols: 4,
        items: [
          { label: 'Full-Year Budget',    value: fmt.money(D.budgetRecoveryHeader.fullYearBudget, { short: true }), sub: 'Residential plan target',         tone: 'navy' },
          { label: 'Recovery Gap',         value: fmt.money(D.budgetRecoveryHeader.gap, { short: true }),            sub: 'To re-allocate across May-Dec',    tone: 'danger' },
          { label: 'Monthly Uplift',       value: '+' + D.budgetRecoveryHeader.upliftPct + '%',                       sub: 'On forecast for each month',       tone: 'warn' },
          { label: 'April Treatment',      value: 'Accepted',                                                          sub: fmt.money(D.budgetRecoveryHeader.aprilGap, { short: true }) + ' April gap absorbed' }
        ]
      },
      {
        kind: 'kpi-row', cols: 3,
        items: [
          { label: 'Q1 Original Budget', value: fmt.money(D.budgetRecoveryHeader.q1OriginalBudget, { short: true }), sub: 'Original residential plan' },
          { label: 'Q1 Actual',           value: fmt.money(D.budgetRecoveryHeader.q1Actual, { short: true }),         sub: 'Through end of March' },
          { label: 'Q1 Shortfall',        value: fmt.money(D.budgetRecoveryHeader.q1Shortfall, { short: true }),      sub: 'Inside the recovery target',     tone: 'warn' }
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
            sub: 'The actual recovery dollars distributed across May through December',
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
        body: 'The recovery layer is a math allocation, not a plan. For it to land we need: (a) Columbus and Detroit Metro to hold their April pace through Q3, (b) Insurance closing velocity to stay above 28-day median, (c) the unbilled-completed queue to stay under 21d. If any of those three slip in May, re-baseline at end-of-month and escalate to the COO.'
      }
    ]
  };

  // ============================================================
  // STRATEGIC RECOMMENDATIONS
  // ============================================================
  pages.recommendations = {
    eyebrow: 'STRATEGIC · WHERE TO PUSH',
    title: 'Strategic Recommendations',
    intro: 'The six moves the data points to. Each one is sized so a single owner can move the number in 30 to 60 days. Read the strategy highlights for the math behind them.',
    tags: [{ kind: 'success', text: '6 prioritized actions' }],
    sections: [
      {
        kind: 'kpi-row', cols: 3,
        items: [
          { label: 'Best Job Type · Rev/Day',  value: 'Insurance',         sub: '$1,316/day · 19d cycle · $25,011 avg', tone: 'navy' },
          { label: 'Best Single-Trade Combo',   value: 'Retail-Fin Roofing', sub: '$895/day · 21d cycle · $20,490 avg',   tone: 'success' },
          { label: 'Best Branch · Rev/Eff',     value: 'Nashville RF',       sub: '$965/day · 26d cycle · 40 jobs',        tone: 'success' }
        ]
      },
      {
        kind: 'prose', heading: 'Actionable recommendations',
        cards: [
          {
            kind: 'tint', eyebrow: 'PRIORITIZED MOVES',
            list: D.commentary.actionableRecommendations.map(function (t) { return { text: t, icon: '→', tone: 'navy' }; })
          },
          {
            eyebrow: 'STRATEGY HIGHLIGHTS',
            list: D.commentary.strategyHighlights.map(function (t) { return { text: t, icon: '✓', tone: 'success' }; })
          }
        ],
        cols: 2
      },
      {
        kind: 'chart-grid', cols: 1,
        charts: [
          {
            title: 'Best Markets by Revenue Efficiency',
            sub: 'Top 12 job-type × branch combinations · ranked by Rev/Day',
            height: 380,
            config: {
              type: 'bar',
              data: {
                labels: T.strategicBestMarketsRevEff.rows.slice(0, 12).map(function (r) { return r[1] + ' / ' + r[2]; }),
                datasets: [{
                  label: 'Rev/Day',
                  data: T.strategicBestMarketsRevEff.rows.slice(0, 12).map(function (r) { return r[3]; }),
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
            r[0],
            r[1],
            { html: '<strong>' + r[2] + '</strong>' },
            { html: '<strong>$' + r[3] + '/day</strong>' },
            fmt.money(r[4]),
            r[5] + 'd',
            r[6],
            fmt.money(r[7])
          ];
        }
      }),
      tableSection({
        id: 'strategicBestTradesRevEff',
        heading: 'Best trades by revenue efficiency',
        caption: 'Trade combinations that move the most revenue per crew-day',
        maxHeight: '460px',
        rowMap: function (r) {
          return [
            r[0],
            r[1],
            { html: '<strong>' + r[2] + '</strong>' },
            { html: '<strong>$' + r[3] + '/day</strong>' },
            fmt.money(r[4]),
            r[5] + 'd',
            r[6],
            fmt.money(r[7])
          ];
        }
      }),
      {
        kind: 'callout', tone: 'success',
        title: 'How to use this page',
        body: 'Print this tab on the first Monday of each month. The Prioritized Moves list should be the basis for branch-level OKRs. The Best Markets table tells the sales ops team where to add lead spend; the Best Trades table tells the bookings team which scopes to steer toward.'
      }
    ]
  };

  // ============================================================
  // EXPORT
  // ============================================================
  window.FZ_PAGE_DEFS = window.FZ_PAGE_DEFS || {};
  window.FZ_PAGE_DEFS['revenue-forecast'] = pages;
})();
