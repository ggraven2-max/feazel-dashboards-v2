/* ============================================================
   FEAZEL, Sales Overview Page Definitions
   Loaded after data.js / chart-theme.js / page-renderer.js.
   Each entry under FZ_PAGE_DEFS["sales-overview"][slug] is a page def.
   ============================================================ */
(function () {
  var D = window.FZ && window.FZ.data && window.FZ.data.SALES_OVERVIEW;
  if (!D) {
    console.error('[FZ] SALES_OVERVIEW data missing.');
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

  // ============================================================
  // MULTI-FAMILY BRANCH
  // The residential page-defs below have hardcoded KPI values from the V5
  // model. When MF data is loaded, build a data-driven page set that reads
  // KPIs from D.kpis directly instead of hardcoded residential figures.
  // ============================================================
  var lob = (window.FZ.data && window.FZ.data._meta && window.FZ.data._meta.lob) || 'residential';
  if (lob === 'multi-family') {
    window.FZ_PAGE_DEFS = window.FZ_PAGE_DEFS || {};
    window.FZ_PAGE_DEFS['sales-overview'] = buildMfSalesPages(D, pal, fmt, BASE_OPTS, withOpts, moneyAxis);
    return;
  }

  // ============================================================
  // INDEX (Sales Overview hub)
  // ============================================================
  var pages = {};

  pages.index = {
    eyebrow: 'YTD 2026 · ' + FZ.daysYTD() + ' days through ' + FZ.formatBuiltAt({ dateOnly: true }),
    title: 'Residential Sales Overview',
    intro: 'A consolidated view of every contract signed in 2026, what closed, what is in production review, what got kicked back, and how we are pacing against the $76M annualized rate. Use the sub-tabs above to drill into any dimension.',
    tags: [
      { kind: 'info',   text: D.lastSigned ? 'Last signed: ' + D.lastSigned : 'Live data' },
      { kind: 'success', text: '+213% Jan→Apr' }
    ],
    sections: [
      {
        kind: 'kpi-row', cols: 4,
        items: [
          { label: 'Signed Contracts YTD',  value: '$24.46M', sub: '1,572 contracts · 13 markets', tone: 'navy' },
          { label: 'Sold (Closed-Sold)',     value: '$21.02M', sub: '1,393 deals · 88.6% conversion', tone: 'success' },
          { label: 'Production Review',      value: '$2.50M',  sub: '132 deals queued', tone: 'warn' },
          { label: 'Kicked Back',            value: '$880K',   sub: '44 deals · 2.8% of signed', tone: 'danger' }
        ]
      },
      {
        kind: 'kpi-row', cols: 4,
        items: [
          { label: 'Avg Deal Size',          value: '$15,563', sub: 'Median $14,392 · install $18,252' },
          { label: 'Annualized Sales Rate',  value: '$76.3M',  sub: 'Based on 117 days YTD' },
          { label: 'Install vs Repair Mix',  value: '83.6 / 16.1', sub: '1,314 installs · 253 repairs' },
          { label: 'Active Sales Reps',       value: '129',     sub: 'Across 13 markets' }
        ]
      },
      {
        kind: 'chart-grid', cols: 2, heading: 'Monthly Sales Pace',
        caption: 'Volume + dollars by month, with running install/repair mix below',
        charts: [
          {
            title: 'Monthly Signed Sales ($)',
            sub: 'Bar = $ amount, line = deal count',
            height: 300,
            config: {
              type: 'bar',
              data: {
                labels: D.monthly.map(function (m) { return m.label; }),
                datasets: [
                  {
                    type: 'bar',
                    label: 'Signed $',
                    data: D.monthly.map(function (m) { return m.amount; }),
                    backgroundColor: pal.navy,
                    borderRadius: 4,
                    yAxisID: 'y'
                  },
                  {
                    type: 'line',
                    label: 'Deal Count',
                    data: D.monthly.map(function (m) { return m.count; }),
                    borderColor: pal.blue,
                    backgroundColor: pal.blue,
                    yAxisID: 'y1',
                    tension: 0.3,
                    pointBackgroundColor: '#fff'
                  }
                ]
              },
              options: withOpts({
                scales: {
                  y:  Object.assign({ position: 'left'  }, moneyAxis()),
                  y1: { position: 'right', grid: { display: false }, ticks: { color: pal.blue }, beginAtZero: true }
                }
              })
            }
          },
          {
            title: 'Pipeline Composition',
            sub: 'Of the $24.46M signed YTD, where each dollar lives today',
            height: 300,
            config: {
              type: 'doughnut',
              data: {
                labels: D.pipelineBuckets.map(function (b) { return b.label; }),
                datasets: [{
                  data: D.pipelineBuckets.map(function (b) { return b.amount; }),
                  backgroundColor: [pal.success, pal.warning, pal.danger, pal.slate, pal.dim],
                  borderColor: '#fff', borderWidth: 2
                }]
              },
              options: withOpts({
                cutout: '62%',
                plugins: {
                  legend: { position: 'right' },
                  tooltip: { callbacks: { label: function (c) {
                    var d = D.pipelineBuckets[c.dataIndex];
                    return c.label + ': ' + fmt.money(d.amount) + ' · ' + d.count + ' deals';
                  } } }
                }
              })
            }
          }
        ]
      },
      {
        kind: 'chart-grid', cols: 1, heading: 'Weekly Velocity',
        caption: 'Each Friday across 18 weeks of data, drives our run-rate forecast',
        charts: [
          {
            title: 'Weekly Signed Sales',
            sub: 'Bars = sales $ · line = rolling 4-week average',
            height: 280,
            config: {
              type: 'bar',
              data: {
                labels: D.weeklyTrend.map(function (w) { return 'W' + w.w; }),
                datasets: [
                  {
                    type: 'bar',
                    label: 'Weekly Signed $',
                    data: D.weeklyTrend.map(function (w) { return w.amount; }),
                    backgroundColor: pal.blue,
                    borderRadius: 4
                  },
                  {
                    type: 'line',
                    label: '4-Wk Avg',
                    data: (function () {
                      var arr = D.weeklyTrend.map(function (w) { return w.amount; });
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
        kind: 'two-col', heading: 'Where the Business Lives',
        items: [
          {
            kind: 'chart', span: 6,
            title: 'Job Type Mix (Signed YTD)',
            sub: 'Volume engine vs premium ticket types',
            height: 260,
            config: {
              type: 'bar',
              data: {
                labels: D.jobTypeTotals.map(function (j) { return j.jobType; }),
                datasets: [{
                  label: 'Signed $',
                  data: D.jobTypeTotals.map(function (j) { return j.amount; }),
                  backgroundColor: [pal.navy, pal.blue, pal.slate]
                }]
              },
              options: withOpts({
                indexAxis: 'y',
                scales: { x: moneyAxis() },
                plugins: { legend: { display: false } }
              })
            }
          },
          {
            kind: 'chart', span: 6,
            title: 'Top 7 Markets by Signed $',
            sub: 'Out of 13 active markets',
            height: 260,
            config: {
              type: 'bar',
              data: {
                labels: D.marketScorecard.rows.slice(0, 7).map(function (r) { return r[0]; }),
                datasets: [{
                  label: 'Signed $',
                  data: D.marketScorecard.rows.slice(0, 7).map(function (r) { return r[1]; }),
                  backgroundColor: pal.navy
                }]
              },
              options: withOpts({
                indexAxis: 'y',
                scales: { x: moneyAxis() },
                plugins: { legend: { display: false } }
              })
            }
          }
        ]
      },
      {
        kind: 'prose', heading: 'Headlines',
        cards: [
          { kind: 'tint', eyebrow: "WHAT'S WORKING", title: 'Trajectory is real', body: '<p>Monthly signed sales went from <strong>$3.24M in January</strong> to <strong>$10.16M in April</strong>, a +213% climb. That trajectory pushes the annualized rate to <strong>$76.3M</strong>. April repair mix dropped to 13.0% vs the YTD 16.1%, so we are also adding the right kind of sales.</p>' },
          { eyebrow: 'WHAT NEEDS ATTENTION', title: 'Production Review backlog', body: '<p><strong>132 deals worth $2.50M</strong> are sitting in Production Review, that delays revenue recognition. Pair that with <strong>44 kickbacks worth $880K</strong> (Columbus carries the largest share) and the work-quality gate is becoming the bottleneck.</p>' },
          { kind: 'navy', eyebrow: 'NEXT MOVES', title: 'Run the action plan', body: '<p>Open the Action Plan tab. This-week wins: invoice the $38.6K of Ready-to-Invoice jobs and escalate the four 60+ day unbilled jobs ($134K). Then push the Production Review surge plan and the Columbus kickback review.</p>' }
        ]
      }
    ]
  };

  // ============================================================
  // EXECUTIVE OVERVIEW
  // ============================================================
  pages.executive = {
    eyebrow: 'EXECUTIVE BRIEF · YTD',
    title: 'Executive Overview',
    intro: 'The five numbers that define where the residential sales book stands today, plus the immediate read on velocity and quality.',
    tags: [{ kind: 'info', text: 'Updated daily' }],
    sections: [
      {
        kind: 'kpi-row', cols: 5,
        items: [
          { label: 'Signed YTD',          value: '$24.46M', sub: '1,572 contracts',                  tone: 'navy' },
          { label: 'Sold (Confirmed)',     value: '$21.02M', sub: '88.6% of signed',                 tone: 'success' },
          { label: 'Production Review',    value: '$2.50M',  sub: '132 deals queued',                tone: 'warn' },
          { label: 'Kicked Back',          value: '$880K',   sub: '44 deals · 2.8%',                 tone: 'danger' },
          { label: 'Sales Action Pending', value: '$15K',    sub: '1 deal needs follow-up' }
        ]
      },
      {
        kind: 'chart-grid', cols: 2, heading: 'Run-Rate vs Plan',
        caption: 'Visual proof of where the trajectory is taking us',
        charts: [
          {
            title: 'Cumulative Signed vs Implied Plan',
            sub: 'Plan based on $76.3M annualized run rate, prorated by week',
            height: 320,
            config: {
              type: 'line',
              data: {
                labels: D.weeklyTrend.map(function (w) { return 'W' + w.w; }),
                datasets: [
                  {
                    label: 'Cumulative Signed',
                    data: (function () {
                      var c = 0;
                      return D.weeklyTrend.map(function (w) { c += w.amount; return c; });
                    })(),
                    borderColor: pal.navy,
                    backgroundColor: function (ctx) { return FZ.areaGradient(ctx, pal.navy); },
                    fill: true, tension: 0.3
                  },
                  {
                    label: 'Plan (Linear $76M)',
                    data: D.weeklyTrend.map(function (_, i) { return ((76300000 / 52) * (i + 1)); }),
                    borderColor: pal.blue, borderDash: [6, 4], pointRadius: 0, fill: false
                  }
                ]
              },
              options: withOpts({ scales: { y: moneyAxis() } })
            }
          },
          {
            title: 'Monthly Sales Volume',
            sub: 'Bars by month with ' + FZ.daysYTD() + ' days through ' + FZ.formatBuiltAt({ dateOnly: true }),
            height: 320,
            config: {
              type: 'bar',
              data: {
                labels: D.monthly.map(function (m) { return m.label; }),
                datasets: [{ label: 'Signed $', data: D.monthly.map(function (m) { return m.amount; }), backgroundColor: pal.navy }]
              },
              options: withOpts({ scales: { y: moneyAxis() }, plugins: { legend: { display: false } } })
            }
          }
        ]
      },
      {
        kind: 'table', heading: 'Branch Scorecard',
        caption: 'All 13 markets, ranked by signed $ YTD',
        headers: [
          { label: 'Branch' }, { label: 'Signed $', num: true }, { label: 'Deals', num: true },
          { label: 'Avg Deal', num: true }, { label: 'Installs', num: true }, { label: 'Repairs', num: true },
          { label: 'Repair %', num: true }, { label: 'Median Days', num: true }
        ],
        rows: D.marketScorecard.rows.map(function (r) {
          return [
            r[0],
            { html: '<strong>' + fmt.money(r[1]) + '</strong>' },
            r[2],
            fmt.money(r[3]),
            r[4],
            r[5],
            { html: r[6] >= 25 ? '<span class="pill pill-danger">' + r[6].toFixed(1) + '%</span>'
                  : r[6] >= 15 ? '<span class="pill pill-warn">' + r[6].toFixed(1) + '%</span>'
                  : '<span class="pill pill-success">' + r[6].toFixed(1) + '%</span>' },
            r[7]
          ];
        })
      },
      {
        kind: 'callout', tone: 'warn', title: 'Watch list',
        body: 'Production Review backlog is up to <strong>132 deals worth $2.50M</strong>. Columbus carries the largest share of the 44 company kickbacks ($880K). Add capacity to the review queue and run a Columbus root-cause sweep before the end of the month.'
      }
    ]
  };

  // ============================================================
  // TRENDS & MOMENTUM
  // ============================================================
  pages.trends = {
    eyebrow: 'TRENDS · 18 WEEKS',
    title: 'Trends & Momentum',
    intro: 'Weekly velocity, monthly progression, and where the deal-count vs deal-size dynamic is shifting.',
    sections: [
      {
        kind: 'kpi-row', cols: 4,
        items: [
          { label: 'Best Week',     value: fmt.money(Math.max.apply(null, D.weeklyTrend.map(function (w) { return w.amount; })), { short: true }), sub: 'Single best signing week YTD', tone: 'success' },
          { label: 'Last 4 Weeks',  value: fmt.money(D.weeklyTrend.slice(-4).reduce(function (a, b) { return a + b.amount; }, 0), { short: true }), sub: 'Trailing 4-week sales' },
          { label: 'Avg Weekly Rate', value: fmt.money(D.weeklyTrend.reduce(function (a, b) { return a + b.amount; }, 0) / D.weeklyTrend.length, { short: true }), sub: 'Across 18 weeks' },
          { label: 'Mar→Apr Lift',  value: '+46%', sub: '$6.95M → $10.16M', tone: 'success' }
        ]
      },
      {
        kind: 'chart-grid', cols: 1,
        charts: [
          {
            title: 'Weekly Signed Sales, full 18 weeks',
            sub: 'Each bar is one Friday roll-up · trend line is rolling 4-week average',
            height: 320,
            config: {
              type: 'bar',
              data: {
                labels: D.weeklyTrend.map(function (w) { return 'W' + w.w; }),
                datasets: [
                  { label: 'Weekly $', data: D.weeklyTrend.map(function (w) { return w.amount; }), backgroundColor: pal.blue, borderRadius: 4 },
                  {
                    type: 'line', label: '4-week Avg',
                    data: (function () {
                      var arr = D.weeklyTrend.map(function (w) { return w.amount; });
                      return arr.map(function (_, i) {
                        var s = Math.max(0, i - 3);
                        var win = arr.slice(s, i + 1);
                        return win.reduce(function (a, b) { return a + b; }, 0) / win.length;
                      });
                    })(),
                    borderColor: pal.navy, tension: 0.3, pointRadius: 2
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
            title: 'Monthly Deal Count',
            sub: 'Volume momentum, separate from $ amount',
            height: 260,
            config: {
              type: 'bar',
              data: {
                labels: D.monthly.map(function (m) { return m.label; }),
                datasets: [{ label: 'Deals Signed', data: D.monthly.map(function (m) { return m.count; }), backgroundColor: pal.navy }]
              },
              options: withOpts({ plugins: { legend: { display: false } } })
            }
          },
          {
            title: 'Average Deal Size by Month',
            sub: 'Are we trading up or trading down month over month?',
            height: 260,
            config: {
              type: 'line',
              data: {
                labels: D.monthly.map(function (m) { return m.label; }),
                datasets: [{
                  label: 'Avg Deal $',
                  data: D.monthly.map(function (m) { return m.avgDeal; }),
                  borderColor: pal.blue, backgroundColor: pal.blue, fill: false, tension: 0.3, pointBackgroundColor: '#fff'
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
            title: 'Install vs Repair, monthly trend',
            sub: 'Two stacked series · the gap is the install premium',
            height: 280,
            config: {
              type: 'bar',
              data: {
                labels: D.monthly.map(function (m) { return m.label; }),
                datasets: [
                  { label: 'Installs', data: D.monthly.map(function (m) { return m.installs; }), backgroundColor: pal.navy, stack: 'a' },
                  { label: 'Repairs',  data: D.monthly.map(function (m) { return m.repairs;  }), backgroundColor: pal.warning, stack: 'a' }
                ]
              },
              options: withOpts({ scales: { x: { stacked: true }, y: { stacked: true, beginAtZero: true } } })
            }
          }
        ]
      },
      {
        kind: 'callout',
        title: 'What the trend is telling us',
        body: 'Deal volume more than tripled from January to April (181 → 653). Average deal size held flat in the $14K–$18K band, meaning the trajectory is volume-led, not price-led. The 4-week trailing average is climbing at roughly +$250K per week, which is what gets us from a $76M annualized rate to a $90M+ exit run rate by year-end if it holds.'
      }
    ]
  };

  // ============================================================
  // MARKET DEEP DIVE
  // ============================================================
  pages.markets = {
    eyebrow: 'MARKETS · ALL 13',
    title: 'Market Deep Dive',
    intro: 'How each branch is contributing to the YTD number, and where the mix is healthy versus where the repair tail is dragging margin.',
    sections: [
      {
        kind: 'kpi-row', cols: 4,
        items: [
          { label: 'Top Market', value: 'Columbus', sub: '$7.40M · 502 deals', tone: 'navy' },
          { label: '#2 Market',  value: 'Detroit Metro', sub: '$4.59M · 277 deals', tone: 'success' },
          { label: 'Highest Avg Deal', value: 'Richmond', sub: '$23,938 average', tone: 'success' },
          { label: 'Highest Repair %', value: 'Nashville', sub: '30.2% repair share', tone: 'warn' }
        ]
      },
      {
        kind: 'chart-grid', cols: 2,
        charts: [
          {
            title: 'Sales by Market',
            sub: 'YTD signed dollars',
            height: 380,
            config: {
              type: 'bar',
              data: {
                labels: D.marketScorecard.rows.map(function (r) { return r[0]; }),
                datasets: [{ data: D.marketScorecard.rows.map(function (r) { return r[1]; }), backgroundColor: pal.navy, label: 'Signed $' }]
              },
              options: withOpts({ indexAxis: 'y', scales: { x: moneyAxis() }, plugins: { legend: { display: false } } })
            }
          },
          {
            title: 'Repair % by Market',
            sub: 'Lower = healthier mix · red = ≥25%',
            height: 380,
            config: {
              type: 'bar',
              data: {
                labels: D.marketScorecard.rows.map(function (r) { return r[0]; }),
                datasets: [{
                  data: D.marketScorecard.rows.map(function (r) { return r[6]; }),
                  backgroundColor: D.marketScorecard.rows.map(function (r) {
                    return r[6] >= 25 ? pal.danger : r[6] >= 15 ? pal.warning : pal.success;
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
      {
        kind: 'table', heading: 'All 13 markets, full scorecard',
        headers: [
          'Branch',
          { label: 'Signed $', num: true }, { label: 'Deals', num: true },
          { label: 'Avg Deal', num: true }, { label: 'Installs', num: true },
          { label: 'Repairs', num: true }, { label: 'Repair %', num: true },
          { label: 'Median Days', num: true }
        ],
        rows: D.marketScorecard.rows.map(function (r) {
          return [
            { html: '<strong>' + r[0] + '</strong>' },
            fmt.money(r[1]), r[2], fmt.money(r[3]), r[4], r[5],
            { html: r[6] >= 25 ? '<span class="pill pill-danger">' + r[6].toFixed(1) + '%</span>'
                  : r[6] >= 15 ? '<span class="pill pill-warn">' + r[6].toFixed(1) + '%</span>'
                  : '<span class="pill pill-success">' + r[6].toFixed(1) + '%</span>' },
            r[7] + 'd'
          ];
        })
      },
      {
        kind: 'callout', tone: 'success', title: 'Detroit Metro: the model branch',
        body: '$4.59M on 277 deals at $16,559 avg with only 8.3% repair mix and 4-day median close. That ratio of volume + ticket size + clean job mix + speed is the template for Columbus and Cleveland to chase.'
      }
    ].concat(((function () {
      // ----- Closing % and NSLI by branch (Salesforce opportunity-level) -----
      // Sourced from inputs/residential/sales-overview/Closing Percent By Branch*.xlsx
      // Close% = Sold / (Sold + Lost). NSLI = Sold $ / Total Opportunities.
      var cb = D.closingByBranch;
      if (!cb || !cb.rows || !cb.rows.length) return [];

      var topNsli  = cb.rows.slice().sort(function (a, b) { return b.nsli - a.nsli; })[0];
      var topClose = cb.rows.slice().sort(function (a, b) { return b.closePct - a.closePct; })[0];
      var lowNsli  = cb.rows.slice().sort(function (a, b) { return a.nsli - b.nsli; })[0];
      var lowClose = cb.rows.slice().sort(function (a, b) { return a.closePct - b.closePct; })[0];

      return [
            { kind: 'prose',
              heading: 'Closing percentage and NSLI by branch',
              caption: 'Same branches, second lens: how efficiently each market converts the leads it gets into signed dollars.'
            },
            {
              kind: 'kpi-row', cols: 4,
              items: [
                { label: 'Network Close %', value: cb.totals.closePct.toFixed(1) + '%',
                  sub: cb.totals.sold + ' sold of ' + (cb.totals.sold + cb.totals.lost) + ' decisions', tone: 'navy' },
                { label: 'Network NSLI',     value: '$' + cb.totals.nsli.toLocaleString(),
                  sub: cb.totals.opps.toLocaleString() + ' opportunities issued', tone: 'navy' },
                { label: 'Best NSLI',        value: topNsli.branch,
                  sub: '$' + topNsli.nsli.toLocaleString() + '/lead · ' + topNsli.closePct.toFixed(1) + '% close', tone: 'success' },
                { label: 'Watch List',       value: lowNsli.branch,
                  sub: '$' + lowNsli.nsli.toLocaleString() + '/lead · ' + lowNsli.closePct.toFixed(1) + '% close', tone: 'danger' }
              ]
            },
            {
              kind: 'chart-grid', cols: 2,
              charts: [
                {
                  title: 'Close % by Market',
                  sub: 'Sold / (Sold + Lost). Network avg ' + cb.totals.closePct.toFixed(1) + '% · ≥50% green, <35% red',
                  height: 360,
                  config: {
                    type: 'bar',
                    data: {
                      labels: cb.rows.map(function (r) { return r.branch; }),
                      datasets: [{
                        data: cb.rows.map(function (r) { return r.closePct; }),
                        backgroundColor: cb.rows.map(function (r) {
                          return r.closePct >= 50 ? pal.success : r.closePct < 35 ? pal.danger : pal.navy;
                        }),
                        label: 'Close %'
                      }]
                    },
                    options: withOpts({
                      indexAxis: 'y',
                      scales: { x: { ticks: { callback: function (v) { return v + '%'; } }, beginAtZero: true } },
                      plugins: { legend: { display: false } }
                    })
                  }
                },
                {
                  title: 'NSLI by Market',
                  sub: 'Net Sales per Lead Issued. Network avg $' + cb.totals.nsli.toLocaleString(),
                  height: 360,
                  config: {
                    type: 'bar',
                    data: {
                      labels: cb.rows.map(function (r) { return r.branch; }),
                      datasets: [{
                        data: cb.rows.map(function (r) { return r.nsli; }),
                        backgroundColor: cb.rows.map(function (r) {
                          return r.nsli >= cb.totals.nsli * 1.25 ? pal.success
                               : r.nsli < cb.totals.nsli * 0.75 ? pal.danger : pal.navy;
                        }),
                        label: 'NSLI ($/lead)'
                      }]
                    },
                    options: withOpts({
                      indexAxis: 'y',
                      scales: { x: moneyAxis() },
                      plugins: { legend: { display: false } }
                    })
                  }
                }
              ]
            },
            {
              kind: 'table',
              heading: 'Closing % and NSLI by branch',
              caption: 'Source: ' + cb.source + ' · Sold = Closed-Sold + Kicked-Back · Lost = Closed-Lost',
              headers: [
                { label: 'Branch', num: false },
                { label: 'Opps', num: true },
                { label: 'Sold', num: true },
                { label: 'Lost', num: true },
                { label: 'Open', num: true },
                { label: 'Close %', num: true },
                { label: 'Issue %', num: true },
                { label: 'Sold $', num: true },
                { label: 'NSLI ($/lead)', num: true },
                { label: 'Avg Sold $', num: true }
              ],
              rows: cb.rows.map(function (r) {
                var closePill = r.closePct >= 50
                  ? '<span class="pill pill-success">' + r.closePct.toFixed(1) + '%</span>'
                  : r.closePct < 35
                    ? '<span class="pill pill-danger">' + r.closePct.toFixed(1) + '%</span>'
                    : '<span class="pill pill-warn">' + r.closePct.toFixed(1) + '%</span>';
                var nsliPill = r.nsli >= cb.totals.nsli * 1.25
                  ? '<span class="pill pill-success">$' + r.nsli.toLocaleString() + '</span>'
                  : r.nsli < cb.totals.nsli * 0.75
                    ? '<span class="pill pill-danger">$' + r.nsli.toLocaleString() + '</span>'
                    : '$' + r.nsli.toLocaleString();
                return [
                  { html: '<strong>' + r.branch + '</strong>' },
                  r.opps.toLocaleString(),
                  r.sold.toLocaleString(),
                  r.lost.toLocaleString(),
                  r.open.toLocaleString(),
                  { html: closePill },
                  r.issuePct.toFixed(1) + '%',
                  fmt.money(r.soldAmt),
                  { html: nsliPill },
                  fmt.money(r.avgSold)
                ];
              }).concat([[
                { html: '<strong>Network Total</strong>' },
                cb.totals.opps.toLocaleString(),
                cb.totals.sold.toLocaleString(),
                cb.totals.lost.toLocaleString(),
                cb.totals.open.toLocaleString(),
                { html: '<strong>' + cb.totals.closePct.toFixed(1) + '%</strong>' },
                cb.totals.issuePct.toFixed(1) + '%',
                { html: '<strong>' + fmt.money(cb.totals.soldAmt) + '</strong>' },
                { html: '<strong>$' + cb.totals.nsli.toLocaleString() + '</strong>' },
                fmt.money(cb.totals.avgSold)
              ]])
            },
            {
              kind: 'callout',
              tone: lowClose.closePct < 25 ? 'danger' : 'warn',
              title: 'Where to focus this week',
              body: '<strong>' + lowClose.branch + '</strong> is at <strong>' + lowClose.closePct.toFixed(1) + '%</strong> close on ' + lowClose.opps + ' opps (NSLI $' + lowClose.nsli.toLocaleString() + '), well below the network ' + cb.totals.closePct.toFixed(1) + '% / $' + cb.totals.nsli.toLocaleString() + '. <strong>' + topClose.branch + '</strong> sets the bar at <strong>' + topClose.closePct.toFixed(1) + '%</strong> close, and <strong>' + topNsli.branch + '</strong> leads NSLI at <strong>$' + topNsli.nsli.toLocaleString() + '</strong> per lead. Worth a coaching call on lead handling and price defense at the bottom-tier branches before the Q3 push.'
            }
      ];
    })()))
  };

  // ============================================================
  // PEOPLE & PRODUCTIVITY
  // ============================================================
  pages.people = {
    eyebrow: 'PEOPLE · TOP PRODUCERS',
    title: 'People & Productivity',
    intro: 'Who is driving the YTD number. 129 active reps across 13 markets, but production is concentrated.',
    sections: [
      {
        kind: 'kpi-row', cols: 4,
        items: [
          { label: 'Active Reps',         value: '129',   sub: '13 markets', tone: 'navy' },
          { label: 'Top Producer',        value: D.topPeople[0] && D.topPeople[0].name, sub: D.topPeople[0] ? fmt.money(D.topPeople[0].amount) + ' · ' + D.topPeople[0].count + ' deals' : '', tone: 'success' },
          { label: 'Top 10 Share',        value: (function(){
              var t10 = D.topPeople.slice(0, 10).reduce(function (a, b) { return a + b.amount; }, 0);
              return ((t10 / 24460000) * 100).toFixed(0) + '%';
            })(), sub: 'of $24.46M signed YTD' },
          { label: 'Avg / Top-10 Rep',    value: fmt.money(D.topPeople.slice(0, 10).reduce(function (a, b) { return a + b.amount; }, 0) / 10, { short: true }), sub: 'per rep YTD' }
        ]
      },
      {
        kind: 'chart-grid', cols: 1,
        charts: [
          {
            title: 'Top 20 Reps by Signed $',
            sub: 'YTD ranked',
            height: 480,
            config: {
              type: 'bar',
              data: {
                labels: D.topPeople.slice(0, 20).map(function (p) { return p.name; }),
                datasets: [{
                  label: 'Signed $',
                  data: D.topPeople.slice(0, 20).map(function (p) { return p.amount; }),
                  backgroundColor: pal.navy
                }]
              },
              options: withOpts({ indexAxis: 'y', scales: { x: moneyAxis() }, plugins: { legend: { display: false } } })
            }
          }
        ]
      },
      {
        kind: 'table', heading: 'Top 20 reps · full detail',
        headers: [
          'Rep',
          { label: 'Signed $', num: true }, { label: 'Deals', num: true },
          { label: 'Avg Deal', num: true }, { label: 'Median Days', num: true },
          { label: 'Installs', num: true }, { label: 'Repairs', num: true }
        ],
        rows: D.topPeople.slice(0, 20).map(function (p) {
          return [
            { html: '<strong>' + p.name + '</strong>' },
            fmt.money(p.amount), p.count, fmt.money(p.avg), (p.medDays != null ? p.medDays + 'd' : ','),
            p.installs, p.repairs
          ];
        })
      },
      {
        kind: 'callout',
        title: 'Concentration risk',
        body: 'A small group of producers carries an outsized share of the book. Worth confirming each top-10 rep has a deputy or shadow rep who can absorb territory if they are out for an extended period.'
      }
    ]
  };

  // ============================================================
  // JOB TYPE & SERVICE MIX
  // ============================================================
  pages['job-mix'] = {
    eyebrow: 'JOB MIX · YTD',
    title: 'Job Type & Service Mix',
    intro: 'Three job types do all the work. Volume comes from Retail-No Financing; ticket size comes from Insurance and Retail-Financing.',
    sections: [
      {
        kind: 'kpi-row', cols: 3,
        items: [
          { label: 'Retail-No Financing', value: '$9.28M', sub: '809 deals · $11,469 avg · volume engine', tone: 'navy' },
          { label: 'Insurance',           value: '$8.91M', sub: '447 deals · $19,942 avg · premium ticket', tone: 'success' },
          { label: 'Retail-Financing',    value: '$3.03M', sub: '145 deals · $20,878 avg · highest avg' }
        ]
      },
      {
        kind: 'chart-grid', cols: 2,
        charts: [
          {
            title: 'Signed $ by Job Type',
            height: 280,
            config: {
              type: 'doughnut',
              data: {
                labels: D.jobTypeTotals.map(function (j) { return j.jobType; }),
                datasets: [{
                  data: D.jobTypeTotals.map(function (j) { return j.amount; }),
                  backgroundColor: [pal.navy, pal.blue, pal.slate],
                  borderColor: '#fff', borderWidth: 2
                }]
              },
              options: withOpts({ cutout: '60%' })
            }
          },
          {
            title: 'Avg Deal $ by Job Type',
            height: 280,
            config: {
              type: 'bar',
              data: {
                labels: D.jobTypeTotals.map(function (j) { return j.jobType; }),
                datasets: [{
                  data: D.jobTypeTotals.map(function (j) { return j.avg; }),
                  backgroundColor: [pal.navy, pal.blue, pal.slate]
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
            title: 'Monthly Deal Count by Job Type',
            sub: 'Where each pillar is showing up over time',
            height: 320,
            config: {
              type: 'bar',
              data: {
                labels: D.monthly.map(function (m) { return m.label; }),
                datasets: [
                  { label: 'Installs', data: D.monthly.map(function (m) { return m.installs; }), backgroundColor: pal.navy, stack: 'jt' },
                  { label: 'Repairs',  data: D.monthly.map(function (m) { return m.repairs;  }), backgroundColor: pal.warning, stack: 'jt' }
                ]
              },
              options: withOpts({ scales: { x: { stacked: true }, y: { stacked: true, beginAtZero: true } } })
            }
          }
        ]
      },
      {
        kind: 'table', heading: 'Job type performance',
        headers: ['Type', { label: 'Signed $', num: true }, { label: 'Deals', num: true }, { label: 'Avg', num: true }],
        rows: D.jobTypeTotals.map(function (j) {
          return [{ html: '<strong>' + j.jobType + '</strong>' }, fmt.money(j.amount), j.count, fmt.money(j.avg)];
        })
      },
      {
        kind: 'callout', tone: 'success', title: 'Financing push opportunity',
        body: 'Retail-Financing carries the highest average ticket ($20,878) but only 9.2% of the YTD mix. Lifting financing penetration to 15% means $1.5M+ of additional revenue without adding leads. The top financing reps to scale from: Kevin Ditty, Storm Drumm, Scott Scaperato.'
      }
    ]
  };

  // ============================================================
  // SALES CYCLE ANALYSIS
  // ============================================================
  pages.cycle = {
    eyebrow: 'CYCLE · DAYS-TO-CLOSE',
    title: 'Sales Cycle Analysis',
    intro: 'How long it takes us to convert a sit to a signed contract, the leverage variable that drives weekly cash velocity.',
    sections: [
      {
        kind: 'kpi-row', cols: 4,
        items: D.salesCycle.kpis.map(function (k) { return { label: k.label, value: k.value, sub: k.sub }; })
      },
      {
        kind: 'chart-grid', cols: 2,
        charts: [
          {
            title: 'Median Days to Close by Job Type',
            height: 300,
            config: {
              type: 'bar',
              data: {
                labels: D.salesCycle.byJobType.map(function (b) { return b.label; }),
                datasets: [
                  { label: 'Median', data: D.salesCycle.byJobType.map(function (b) { return b.median; }), backgroundColor: pal.navy },
                  { label: 'Mean',   data: D.salesCycle.byJobType.map(function (b) { return b.mean;   }), backgroundColor: pal.blue }
                ]
              },
              options: withOpts({ scales: { y: { ticks: { callback: function (v) { return v + 'd'; } }, beginAtZero: true } } })
            }
          },
          {
            title: 'Median Days to Close by Market',
            sub: 'Top 10 markets',
            height: 300,
            config: {
              type: 'bar',
              data: {
                labels: D.marketScorecard.rows.slice(0, 10).map(function (r) { return r[0]; }),
                datasets: [{
                  label: 'Median Days',
                  data: D.marketScorecard.rows.slice(0, 10).map(function (r) { return r[7]; }),
                  backgroundColor: D.marketScorecard.rows.slice(0, 10).map(function (r) {
                    return r[7] >= 30 ? pal.danger : r[7] >= 14 ? pal.warning : pal.success;
                  })
                }]
              },
              options: withOpts({ indexAxis: 'y', scales: { x: { ticks: { callback: function (v) { return v + 'd'; } } } }, plugins: { legend: { display: false } } })
            }
          }
        ]
      },
      {
        kind: 'callout', tone: 'warn',
        title: 'Insurance is the cycle drag',
        body: 'Insurance jobs have a 27-day median close (76-day mean). That is structural, carrier dependence. But it argues for keeping insurance and retail capacity separately scheduled so the carrier wait does not starve the faster retail flow.'
      }
    ]
  };

  // ============================================================
  // RISKS & RED FLAGS
  // ============================================================
  pages.risks = {
    eyebrow: 'RISKS · TOP OF MIND',
    title: 'Risks & Red Flags',
    intro: 'Every dollar that is at risk of slipping out of 2026, ranked. These are the items that need a meeting, not just a metric.',
    tags: [{ kind: 'danger', text: '6 critical' }],
    sections: [
      {
        kind: 'kpi-row', cols: 4,
        items: [
          { label: 'Pipeline Kickbacks',    value: '$880K', sub: '44 deals · 2.8% of signed', tone: 'danger' },
          { label: 'Production Review Backlog', value: '$2.50M', sub: '132 deals queued',     tone: 'warn' },
          { label: 'Unbilled Completed',    value: '$1.0M', sub: '51 jobs · 17d avg',         tone: 'warn' },
          { label: 'Pending Supplements',   value: '$799K', sub: '37 jobs · oldest 99d',      tone: 'danger' }
        ]
      },
      {
        kind: 'prose', heading: 'Critical risks',
        cards: [
          {
            kind: 'tint', eyebrow: 'TOP RISKS',
            list: D.commentary.criticalRisks.map(function (t) { return { text: t, tone: 'danger', icon: '!' }; })
          },
          {
            eyebrow: 'WHAT NEEDS ATTENTION',
            list: D.commentary.whatNeedsAttention.map(function (t) { return { text: t, tone: 'warn', icon: '⚠' }; })
          }
        ],
        cols: 2
      },
      {
        kind: 'callout', tone: 'danger',
        title: 'Owner check',
        body: 'Each item above needs a single owner and a 7-day commitment. Specifically: Columbus kickback root cause (Bruce Lemon Jr), Supplement aging (Matt Henry/Inside Sales), Accounting kickbacks ($172K, 10 jobs, Mahlet Teshome Mandefro), Production Review surge plan (Jeff Craft).'
      }
    ]
  };

  // ============================================================
  // BUILD ON THE GOOD
  // ============================================================
  pages.strengths = {
    eyebrow: 'WINS · COMPOUND THESE',
    title: 'Build on the Good',
    intro: 'Where the model is already working. Each of these is something we should institutionalize, not just celebrate.',
    tags: [{ kind: 'success', text: '8 strengths' }],
    sections: [
      {
        kind: 'kpi-row', cols: 4,
        items: [
          { label: 'Detroit Avg Deal',    value: '$16,559', sub: '277 deals · 8.3% repair mix', tone: 'success' },
          { label: 'Retail Velocity',     value: '4 days',  sub: 'Median close on 950 retail deals' },
          { label: 'Insurance Density',   value: '$8.91M',  sub: '447 deals · $19,942 avg' },
          { label: 'April Repair Rate',   value: '13.0%',   sub: 'Down from 16.1% YTD', tone: 'success' }
        ]
      },
      {
        kind: 'prose', heading: 'Strengths to amplify',
        cards: [
          {
            kind: 'tint', eyebrow: 'WHAT IS WORKING',
            body: D.commentary.whatsWorking.map(function (t) { return '<p>• ' + t + '</p>'; }).join('')
          },
          {
            eyebrow: 'STRENGTHS TO AMPLIFY',
            list: D.commentary.strengthsToAmplify.map(function (t) { return { text: t, tone: 'success', icon: '✓' }; })
          }
        ],
        cols: 2
      }
    ]
  };

  // ============================================================
  // FIX THE WEAK AREAS
  // ============================================================
  pages.fixes = {
    eyebrow: 'FIX LIST · WHAT TO ATTACK',
    title: 'Fix the Weak Areas',
    intro: 'The seven specific weaknesses worth a focused intervention. Each item is sized so a single owner can move the number in 30 days.',
    sections: [
      {
        kind: 'prose',
        cards: [{
          eyebrow: 'FIX LIST', title: 'Seven workstreams',
          list: D.commentary.fixList.map(function (t) { return { text: t, icon: '→' }; })
        }]
      }
    ]
  };

  // ============================================================
  // ACTION PLAN
  // ============================================================
  pages['action-plan'] = {
    eyebrow: 'ACTION PLAN · NOW / NEXT / LATER',
    title: 'Action Plan',
    intro: 'Sequenced moves to convert the YTD trajectory into a finished 2026.',
    sections: [
      {
        kind: 'prose', heading: 'Sequenced workstreams',
        cards: [
          {
            kind: 'tint', eyebrow: 'THIS WEEK',
            list: D.commentary.actionPlan.thisWeek.map(function (t) { return { text: t, icon: '1', tone: 'danger' }; })
          },
          {
            eyebrow: 'THIS MONTH',
            list: D.commentary.actionPlan.thisMonth.map(function (t) { return { text: t, icon: '2', tone: 'warn' }; })
          },
          {
            eyebrow: 'THIS QUARTER',
            list: D.commentary.actionPlan.thisQuarter.map(function (t) { return { text: t, icon: '3' }; })
          }
        ],
        cols: 3
      },
      {
        kind: 'callout', title: 'How to use this page',
        body: 'Print this tab on Mondays. The This Week list should be re-baselined every 7 days. The This Month list moves into This Week as items mature. The This Quarter list converts into a Notion ticket with an owner and a date.'
      }
    ]
  };

  // ============================================================
  // WEEKLY SALES TARGETS
  // Data-driven: shows the week-by-week schedule of $ we need to sign to
  // close the gap to budget through year-end.
  // ============================================================
  (function () {
    var wt = D.weeklyTargets_BUDGET || {};
    var schedule = (wt.weekSchedule || []).slice();          // [{wk, mo, target}]
    var avgWeekly = wt.avgWeeklyNeed || 0;
    var recent4Wk = wt.recent4WkAvg || 0;
    var byJobType = wt.byJobType || [];
    var byMarket  = wt.byMarket || [];
    var weeksRemaining = schedule.length;
    var totalNeeded = schedule.reduce(function (s, w) { return s + (w.target || 0); }, 0);
    var paceGap = avgWeekly - recent4Wk;

    // Group weekly targets by month for the chart
    var byMonth = {};
    schedule.forEach(function (w) {
      if (!byMonth[w.mo]) byMonth[w.mo] = { mo: w.mo, total: 0, weeks: 0 };
      byMonth[w.mo].total += w.target || 0;
      byMonth[w.mo].weeks++;
    });
    var monthOrder = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var monthRows = monthOrder.filter(function (m) { return byMonth[m]; }).map(function (m) { return byMonth[m]; });

    pages['weekly-targets'] = {
      eyebrow: 'WEEKLY TARGETS · ' + weeksRemaining + ' WEEKS REMAINING',
      title: 'Weekly Sales Targets',
      intro: 'The week-by-week sign-up schedule we need to hit the residential plan. Each row is the contract value the team must sign that week to keep us on track.',
      tags: [
        { kind: 'info',    text: weeksRemaining + ' weeks · ' + fmt.money(totalNeeded, { short: true }) + ' to sign' },
        { kind: paceGap > 0 ? 'danger' : 'success', text: 'Pace gap ' + (paceGap >= 0 ? '+' : '') + fmt.money(paceGap, { short: true }) + '/wk' }
      ],
      sections: [
        {
          kind: 'kpi-row', cols: 4,
          items: [
            { label: 'Avg Weekly Target',  value: fmt.money(avgWeekly, { short: true }), sub: 'Required across remaining weeks', tone: 'navy' },
            { label: 'Recent 4-Wk Avg',    value: fmt.money(recent4Wk, { short: true }), sub: 'What we have actually been signing', tone: paceGap > 0 ? 'warn' : 'good' },
            { label: 'Pace Gap',           value: (paceGap >= 0 ? '+' : '') + fmt.money(paceGap, { short: true }) + '/wk', sub: paceGap > 0 ? 'Need to lift weekly pace' : 'Currently ahead of pace', tone: paceGap > 0 ? 'danger' : 'good' },
            { label: 'Weeks Remaining',    value: String(weeksRemaining),                sub: 'In the locked schedule',          tone: 'info' }
          ]
        },
        {
          kind: 'chart-grid', cols: 1,
          heading: 'Weekly Sign-Up Schedule',
          caption: 'Bars = required new contract value per week, line = month-end markers. Hover for week-of date and target dollars.',
          charts: [{
            title: 'Required weekly sales · ' + weeksRemaining + ' weeks',
            sub: 'Total ' + fmt.money(totalNeeded, { short: true }) + ' across ' + monthRows.length + ' months',
            height: 320,
            config: {
              type: 'bar',
              data: {
                labels: schedule.map(function (w) { return w.wk; }),
                datasets: [{
                  label: 'Required Weekly Sales',
                  data: schedule.map(function (w) { return w.target || 0; }),
                  backgroundColor: schedule.map(function (w) {
                    // Tint by month for visual rhythm
                    var i = monthOrder.indexOf(w.mo);
                    var pal2 = [pal.blue, pal.navy, pal.slate, pal.warning, pal.success, pal.danger, pal.blue, pal.navy, pal.slate, pal.warning, pal.success, pal.danger];
                    return pal2[i] || pal.blue;
                  }),
                  borderRadius: 4
                }]
              },
              options: withOpts({
                scales: { y: moneyAxis(), x: { ticks: { maxRotation: 60, minRotation: 45, font: { size: 10 } } } },
                plugins: {
                  legend: { display: false },
                  tooltip: {
                    callbacks: {
                      title: function (ctx) {
                        var w = schedule[ctx[0].dataIndex];
                        return w ? (w.mo + ' · week of ' + w.wk) : '';
                      },
                      label: function (ctx) { return 'Target: ' + fmt.money(ctx.parsed.y); }
                    }
                  }
                }
              })
            }
          }]
        },
        {
          kind: 'table',
          heading: 'Monthly roll-up',
          caption: 'Sum of weekly targets by calendar month',
          headers: [
            { label: 'Month', num: false },
            { label: '# Weeks', num: true },
            { label: 'Sum of Weekly Targets', num: true },
            { label: 'Avg / Week', num: true }
          ],
          rows: monthRows.map(function (m) {
            return [m.mo + ' 2026', m.weeks, fmt.money(m.total), fmt.money(m.total / Math.max(1, m.weeks))];
          })
        },
        byJobType.length ? {
          kind: 'table',
          heading: 'Allocation by job type',
          caption: 'Required weekly sales split across the three primary residential job types',
          headers: [
            { label: 'Job Type', num: false },
            { label: 'Weekly Need', num: true },
            { label: '% of Total', num: true },
            { label: 'Annual', num: true }
          ],
          rows: byJobType.map(function (r) {
            // Defensive: rows might be {jobType, weeklyNeed, pct, annual} or array
            if (Array.isArray(r)) return r;
            return [
              r.jobType || r.label || '—',
              fmt.money(r.weeklyNeed || r.weekly || 0),
              ((r.pct || 0) * (r.pct < 1 ? 100 : 1)).toFixed(1) + '%',
              fmt.money(r.annual || (r.weeklyNeed || 0) * weeksRemaining)
            ];
          })
        } : null,
        byMarket.length ? {
          kind: 'table',
          heading: 'Allocation by market',
          caption: 'Top-13 branch market split of the weekly target',
          maxHeight: '440px',
          headers: [
            { label: 'Market', num: false },
            { label: 'Weekly Need', num: true },
            { label: '% of Total', num: true }
          ],
          rows: byMarket.map(function (r) {
            if (Array.isArray(r)) return r;
            return [
              r.market || r.branch || '—',
              fmt.money(r.weeklyNeed || r.weekly || 0),
              ((r.pct || 0) * (r.pct < 1 ? 100 : 1)).toFixed(1) + '%'
            ];
          })
        } : null,
        {
          kind: 'callout', tone: paceGap > 0 ? 'danger' : 'success',
          title: paceGap > 0 ? 'Pace gap to close' : 'Tracking ahead',
          body: paceGap > 0
            ? 'The 4-week average sales pace is <strong>' + fmt.money(recent4Wk, { short: true }) + '/wk</strong> against a required <strong>' + fmt.money(avgWeekly, { short: true }) + '/wk</strong>. That is <strong>' + fmt.money(paceGap, { short: true }) + '</strong> short per week. If the actual weekly run rate diverges by more than ±15% for two consecutive weeks, escalate to the COO and the FP&amp;A Director (Mahlet Teshome Mandefro) for an off-cycle review.'
            : 'The 4-week average sales pace of <strong>' + fmt.money(recent4Wk, { short: true }) + '/wk</strong> is currently above the required <strong>' + fmt.money(avgWeekly, { short: true }) + '/wk</strong>. Keep this momentum.'
        }
      ].filter(Boolean)
    };
  })();

  // ============================================================
  // BUDGET RECOVERY (Q1 INVOICED basis, NetSuite is canonical)
  // Switched from Q1 sales to Q1 invoiced 2026-05 per Greg.
  // Pulls Jan/Feb/Mar invoiced from REVENUE_FORECAST.netsuiteInvoiced.monthly
  // and compares to the residential budget invoiced for those months.
  // ============================================================
  (function () {
    var rf = (window.FZ && window.FZ.data && window.FZ.data.REVENUE_FORECAST) || {};
    var ns = rf.netsuiteInvoiced || {};
    var br = D.budgetRecovery || {};
    // Aggregated NetSuite rollups (Location + Sum of Amount) have no per-month
    // detail. Treat Q1 as unavailable rather than reading zeros as actuals.
    var aggOnly = !!ns.aggregatedOnly;
    var monthly = (!aggOnly && ns.monthly && ns.monthly.length === 12) ? ns.monthly : null;
    var budgetInv = (rf.budgetInv && rf.budgetInv.length === 12) ? rf.budgetInv : null;

    var q1Inv = monthly ? (monthly[0] + monthly[1] + monthly[2]) : null;
    var q1InvBudget = budgetInv ? (budgetInv[0] + budgetInv[1] + budgetInv[2]) : null;
    var q1Shortfall = (q1Inv != null && q1InvBudget != null) ? (q1Inv - q1InvBudget) : null;
    var fullYearBudget = br.fullYearBudget || (rf.execSummary && rf.execSummary.budget) || 125600000;
    var annualForecast = (rf.execSummary && rf.execSummary.modelAnnualInvoiced) || 0;
    var annualGap = annualForecast - fullYearBudget;
    var ytdActual = ns.totalInvoiced || 0;     // works in both formats

    pages['budget-recovery'] = {
      eyebrow: 'BUDGET RECOVERY · Q1 INVOICED BASIS',
      title: 'Budget Recovery',
      intro: aggOnly
        ? 'The path back to the residential plan, measured against booked invoiced revenue (NetSuite AR). The latest NetSuite export is a branch-aggregated rollup, so YTD and per-branch totals are available but Q1 monthly detail is not. See the callout below for how to unlock the per-month view.'
        : 'The path back to the residential plan, measured against booked invoiced revenue (NetSuite AR) rather than signed sales. Q1 numbers below are the invoices booked through 3/31, not contracts signed.',
      tags: [
        aggOnly
          ? { kind: 'warn', text: 'YTD ' + fmt.money(ytdActual, { short: true }) + ' (branch rollup, no Q1 detail)' }
          : { kind: q1Shortfall != null && q1Shortfall < 0 ? 'danger' : 'success', text: q1Shortfall != null ? 'Q1 ' + (q1Shortfall >= 0 ? '+' : '') + fmt.money(q1Shortfall, { short: true }) + ' vs plan' : 'Q1 data pending' },
        { kind: annualGap < 0 ? 'warn' : 'success', text: 'Annual ' + (annualGap >= 0 ? '+' : '') + fmt.money(annualGap, { short: true }) }
      ],
      sections: [
        {
          kind: 'kpi-row', cols: 4,
          items: [
            { label: 'Q1 Budget (Invoiced)',  value: q1InvBudget != null ? fmt.money(q1InvBudget, { short: true }) : '—', sub: 'Sum Jan + Feb + Mar plan',     tone: 'navy' },
            { label: 'Q1 Invoiced (Actual)',   value: q1Inv != null      ? fmt.money(q1Inv, { short: true })      : '—', sub: 'NetSuite AR · Jan-Mar booked', tone: 'good' },
            { label: 'Q1 Variance',            value: q1Shortfall != null ? (q1Shortfall >= 0 ? '+' : '') + fmt.money(q1Shortfall, { short: true }) : '—', sub: q1Shortfall != null && q1Shortfall < 0 ? 'To recover across Q2-Q4' : 'Tracking to plan', tone: q1Shortfall != null && q1Shortfall < 0 ? 'crit' : 'good' },
            { label: 'Annual Forecast',        value: annualForecast ? fmt.money(annualForecast, { short: true }) : '—', sub: 'Model invoiced · vs ' + fmt.money(fullYearBudget, { short: true }), tone: annualGap < 0 ? 'warn' : 'good' }
          ]
        },
        monthly && budgetInv ? {
          kind: 'table',
          heading: 'Q1 invoiced vs plan, by month (NetSuite)',
          caption: 'NetSuite AR booked invoices (Type = Invoice) per the FORECASTING_RULES.md §5.1 source-of-truth rule',
          headers: [
            { label: 'Month', num: false },
            { label: 'Plan (Invoiced)', num: true },
            { label: 'Actual (NetSuite)', num: true },
            { label: 'Variance', num: true },
            { label: 'Variance %', num: true }
          ],
          rows: ['Jan', 'Feb', 'Mar'].map(function (m, i) {
            var plan = budgetInv[i] || 0;
            var actual = monthly[i] || 0;
            var diff = actual - plan;
            var pct = plan > 0 ? (diff / plan) * 100 : 0;
            return [
              m + ' 2026',
              fmt.money(plan),
              fmt.money(actual),
              (diff >= 0 ? '+' : '') + fmt.money(diff),
              (pct >= 0 ? '+' : '') + pct.toFixed(1) + '%'
            ];
          }).concat([[
            'Q1 Total',
            q1InvBudget != null ? fmt.money(q1InvBudget) : '—',
            q1Inv != null ? fmt.money(q1Inv) : '—',
            q1Shortfall != null ? ((q1Shortfall >= 0 ? '+' : '') + fmt.money(q1Shortfall)) : '—',
            (q1Inv != null && q1InvBudget != null && q1InvBudget > 0)
              ? ((q1Shortfall / q1InvBudget * 100 >= 0 ? '+' : '') + (q1Shortfall / q1InvBudget * 100).toFixed(1) + '%')
              : '—'
          ]])
        } : null,
        {
          kind: 'callout',
          tone: q1Shortfall != null && q1Shortfall < 0 ? 'danger' : aggOnly ? 'warn' : 'success',
          title: aggOnly
            ? 'Q1 detail unavailable — NetSuite file is a branch rollup'
            : q1Shortfall != null && q1Shortfall < 0 ? 'Q1 invoiced shortfall'
            : q1Shortfall != null && q1Shortfall >= 0 ? 'Q1 ahead of plan'
            : 'Q1 data not yet locked',
          body: aggOnly
            ? 'The latest NetSuite export (<code>' + (ns.source || 'ResInvoicedYTDResults*.csv') + '</code>) is the <strong>branch-aggregated</strong> view: Location + Sum of Amount only, with no Date column. YTD total (<strong>' + fmt.money(ytdActual, { short: true }) + '</strong>) and per-branch splits load fine, but Jan/Feb/Mar cannot be separated. To unlock Q1 vs plan and per-month chart locks, re-export the same NetSuite saved search with the per-invoice columns (Internal ID, Date, Period, Type, Location, Amount) and re-drop into <code>inputs/residential/revenue-forecast/</code>.'
            : q1Shortfall != null
              ? 'Q1 booked invoices ' + (q1Shortfall < 0 ? 'underran' : 'exceeded') + ' the plan by <strong>' + fmt.money(Math.abs(q1Shortfall), { short: true }) + '</strong>. The recovery (or excess) flows through to the rest of the year via the V5 monthly bridge. See <strong>Revenue Forecast → Budget Recovery</strong> for the week-by-week schedule and per-market splits.'
              : 'Q1 invoiced figures will populate once the NetSuite AR export is ingested. Drop the latest <code>ResInvoicedYTDResults*.csv</code> into <code>inputs/residential/revenue-forecast/</code> and rerun the build.'
        }
      ].filter(Boolean)
    };
  })();

  // ============================================================
  // COMPLETED → BILLING (data-driven)
  // ============================================================
  (function () {
    var cb = D.completedBilling || null;
    var jobs = (cb && cb.fullJobList) || [];
    // Field meanings from calculator: [jobNum, customer, salesRep, branch, _, amount, days, leadType]
    var totalUnbilled = (cb && cb.totalUnbilled) || 0;
    var totalJobs = (cb && cb.totalJobs) || jobs.length || 0;
    var avgAge = (cb && cb.avgAge) || 0;

    // Pull breakouts from the by-substatus aggregate (data-driven)
    var bySub = (cb && cb.bySubStatus) || [];
    function subAmt (label) {
      var hit = bySub.find(function (r) { return r.subStatus === label; });
      return hit ? hit.amount : 0;
    }
    function subCnt (label) {
      var hit = bySub.find(function (r) { return r.subStatus === label; });
      return hit ? hit.count : 0;
    }
    var readyAmt = subAmt('Ready to Invoice'),  readyCnt = subCnt('Ready to Invoice');
    var kickAmt  = subAmt('Accounting Kickback'), kickCnt = subCnt('Accounting Kickback');

    // 30+ days aged from tiers (Warning bucket = 30-59d) plus anything older if present
    var tiers = (cb && cb.tiers) || [];
    var aged30 = tiers.filter(function (t) {
      return /30|60|90|aged|warning/i.test(t.label || '');
    }).reduce(function (s, t) { return s + (t.amount || 0); }, 0);
    var aged30Cnt = tiers.filter(function (t) {
      return /30|60|90|aged|warning/i.test(t.label || '');
    }).reduce(function (s, t) { return s + (t.count || 0); }, 0);

    pages.billing = {
      eyebrow: 'BILLING · COMPLETED JOBS',
      title: 'Completed → Billing',
      intro: 'Jobs that are done in production but not yet invoiced. Every day of slip here is a day of cash sitting in CWIP instead of AR.',
      tags: [{ kind: 'warn', text: totalJobs + ' jobs unbilled · ' + fmt.money(totalUnbilled, { short: true }) }],
      sections: [
        {
          kind: 'kpi-row', cols: 4,
          items: [
            { label: 'Unbilled Total',       value: fmt.money(totalUnbilled, { short: true }), sub: totalJobs + ' completed jobs · ' + avgAge.toFixed(1) + 'd avg', tone: 'warn' },
            { label: 'Ready to Invoice',     value: fmt.money(readyAmt, { short: true }),       sub: readyCnt + ' jobs · no blockers', tone: readyAmt > 0 ? 'success' : 'navy' },
            { label: '30+ Days Aged',        value: fmt.money(aged30, { short: true }),         sub: aged30Cnt + ' jobs · escalation candidates', tone: aged30Cnt > 0 ? 'danger' : 'success' },
            { label: 'Accounting Kickbacks', value: fmt.money(kickAmt, { short: true }),        sub: kickCnt + ' jobs blocked', tone: kickCnt > 0 ? 'danger' : 'success' }
          ]
        },
        bySub.length ? {
          kind: 'table',
          heading: 'Unbilled by sub-status (action breakdown)',
          caption: 'Each sub-status has a distinct unblock action',
          headers: [
            { label: 'Sub-status', num: false },
            { label: 'Jobs', num: true },
            { label: 'Amount', num: true },
            { label: 'Avg Age (d)', num: true },
            { label: 'Action', num: false }
          ],
          rows: bySub.map(function (r) {
            return [r.subStatus, r.count, fmt.money(r.amount), r.avgAge, r.action || ''];
          })
        } : null,
        jobs.length ? {
          kind: 'table',
          heading: 'Completed jobs awaiting invoice',
          caption: 'Sorted by amount · ' + jobs.length + ' rows total',
          headers: [
            { label: 'Job',       num: false },
            { label: 'Customer',  num: false },
            { label: 'Sales Rep', num: false },
            { label: 'Branch',    num: false },
            { label: 'Amount',    num: true },
            { label: 'Days',      num: true },
            { label: 'Lead Type', num: false }
          ],
          // Drop the empty 5th column from the calculator (legacy slot for sub-status)
          rows: jobs.slice().sort(function (a, b) { return (b[5] || 0) - (a[5] || 0); }).map(function (r) {
            return [r[0], r[1], r[2], r[3], fmt.money(r[5]), r[6], r[7]];
          }),
          maxHeight: '520px'
        } : null,
        {
          kind: 'callout', tone: aged30Cnt > 0 ? 'warn' : 'success', title: 'SLA target',
          body: '100% of completed jobs invoiced within 21 days. Currently <strong>' + aged30Cnt + ' of ' + totalJobs + '</strong> jobs (' + (totalJobs > 0 ? Math.round(aged30Cnt / totalJobs * 100) : 0) + '%) are aged 30+ days, totaling <strong>' + fmt.money(aged30, { short: true }) + '</strong>. Sub-status table above shows where the friction is.'
        }
      ].filter(Boolean)
    };
  })();

  // ============================================================
  // MF page builder: data-driven, reads from D.kpis / D.monthly etc
  // ============================================================
  function buildMfSalesPages (D, pal, fmt, BASE_OPTS, withOpts, moneyAxis) {
    function kpiByLabel (label, fallback) {
      const k = (D.kpis || []).find(function (x) { return x && x.label === label; });
      return k ? { label: k.label, value: k.value, sub: k.sub || (fallback && fallback.sub) || '', tone: k.trend === 'positive' ? 'success' : (k.trend === 'negative' ? 'danger' : 'navy') }
               : Object.assign({ label: label, value: '—', sub: '' }, fallback || {});
    }

    var mfPages = {};

    var indexPage = {
      eyebrow: 'YTD 2026 · Multi-Family',
      title: 'Multi-Family Sales Overview',
      intro: 'Commercial and multi-family contracts signed YTD. Same Salesforce data pipeline as residential, filtered to the Commercial division.',
      tags: [
        { kind: 'info', text: (D.rowCount || 0) + ' contracts · ' + (D.lastSigned ? 'last signed ' + D.lastSigned : '') }
      ],
      sections: [
        { kind: 'kpi-row', cols: 4, items: [
          kpiByLabel('Signed Contracts YTD'),
          kpiByLabel('Sold'),
          kpiByLabel('Production Review'),
          kpiByLabel('Kicked Back')
        ]},
        { kind: 'kpi-row', cols: 4, items: [
          kpiByLabel('Avg Deal Size'),
          kpiByLabel('Annualized Sales Rate'),
          kpiByLabel('Install vs Repair'),
          kpiByLabel('Organization')
        ]},
        (D.monthly && D.monthly.length) ? {
          kind: 'chart-grid', cols: 1,
          heading: 'Monthly Signed Sales',
          charts: [{
            title: 'Signed $ by Month',
            sub: 'Bars = signed dollars per month',
            height: 300,
            config: {
              type: 'bar',
              data: {
                labels: D.monthly.map(function (m) { return m.label; }),
                datasets: [{ label: 'Signed $', data: D.monthly.map(function (m) { return m.amount; }), backgroundColor: pal.navy, borderRadius: 4 }]
              },
              options: withOpts({ scales: { y: moneyAxis() } })
            }
          }]
        } : null,
        (D.marketScorecard && D.marketScorecard.rows && D.marketScorecard.rows.length) ? {
          kind: 'table',
          heading: 'Market Scorecard',
          headers: D.marketScorecard.headers.map(function (h, i) { return { label: h, num: i > 0 }; }),
          rows: D.marketScorecard.rows
        } : null
      ].filter(Boolean)
    };
    mfPages.index = indexPage;
    mfPages.executive = indexPage;

    // Stub all other slugs (Trends, Markets, People, etc.) with a "coming soon"
    // panel since they reference residential-specific tables that may not exist for MF.
    var stubSlugs = ['trends', 'markets', 'people', 'job-mix', 'cycle', 'risks', 'strengths', 'fixes', 'action-plan', 'weekly-targets', 'budget-recovery', 'billing'];
    stubSlugs.forEach(function (slug) {
      mfPages[slug] = {
        eyebrow: 'COMING SOON',
        title: slug.replace(/-/g, ' ').replace(/\b\w/g, function (c) { return c.toUpperCase(); }),
        intro: 'This view is built around residential-specific dimensions. The MF-flavored version is on the v2 backlog.',
        tags: [],
        sections: [{
          kind: 'callout', tone: 'info', title: 'Not yet built for multi-family',
          body: '<p>Use the <strong>Home / Executive</strong> tab for the MF Sales Overview KPIs. The deeper residential tabs (cycle analysis, kick-back deep-dives, market scorecards with residential-specific metrics) need their own MF designs.</p>'
        }]
      };
    });

    return mfPages;
  }

  // ============================================================
  // EXPORT
  // ============================================================
  window.FZ_PAGE_DEFS = window.FZ_PAGE_DEFS || {};
  window.FZ_PAGE_DEFS['sales-overview'] = pages;
})();
