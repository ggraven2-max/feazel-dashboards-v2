/* ============================================================
   FEAZEL, Installs YTD Page Definitions
   Loaded after data.js / chart-theme.js / page-renderer.js.
   ============================================================ */
(function () {
  var D = window.FZ && window.FZ.data && window.FZ.data.INSTALLS_YTD;
  if (!D) { console.error('[FZ] INSTALLS_YTD data missing.'); return; }
  var FZ = window.FZ;
  var pal = FZ.palette;
  var fmt = FZ.fmt;

  // ---- helpers ----
  var BASE_OPTS = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { intersect: false, mode: 'index' },
    plugins: { legend: { position: 'bottom' } }
  };
  function moneyAxis(short) {
    return { ticks: { callback: function (v) { return fmt.money(v, { short: short !== false }); } }, beginAtZero: true };
  }
  function deepClone(o) { return JSON.parse(JSON.stringify(o)); }
  function withOpts(extra) { return Object.assign({}, deepClone(BASE_OPTS), extra || {}); }

  // Index lookups
  var C = {};
  D.charts.forEach(function (c) { C[c.id] = c; });
  var T = {};
  D.tables.forEach(function (t) { T[t.id] = t; });

  // Heatmap level 0..6 from value vs row max
  function heatLevel(v, rowMax) {
    if (!v || v === 0) return 0;
    var pct = v / Math.max(1, rowMax);
    if (pct < 0.05) return 1;
    if (pct < 0.15) return 2;
    if (pct < 0.30) return 3;
    if (pct < 0.55) return 4;
    if (pct < 0.85) return 5;
    return 6;
  }

  // ---- pages ----
  var pages = {};

  // ============================================================
  // INDEX (Hub)
  // ============================================================
  pages.index = {
    eyebrow: 'INVOICED PRODUCTION · YTD 2026',
    title: 'Residential Installs YTD',
    intro: 'What is actually closing. 1,041 unique jobs invoiced for $19.31M, with the cycle compressing from 32 days in January to 16 days in April. The multi-trade premium is real ($26K vs $16K) but pays a 23-day cycle tax. Use the sub-tabs above to drill into PMs, markets, work types, and the creator-by-market network.',
    tags: [
      { kind: 'success', text: 'April: $7.44M / 16d' },
      { kind: 'info', text: 'Refreshed ' + FZ.formatBuiltAt({ dateOnly: true }) }
    ],
    sections: [
      {
        kind: 'kpi-row', cols: 4,
        items: [
          { label: 'True Revenue',          value: '$19.31M', sub: '1,041 unique jobs invoiced',     tone: 'navy' },
          { label: 'Avg Contract Value',     value: '$18,553', sub: 'Per job (deduped)' },
          { label: 'Median Days to Complete', value: '27.1d',  sub: 'Job-level median',              tone: 'success' },
          { label: 'Avg Days to Start',      value: '28.2d',  sub: 'Sale to crew on-site',          tone: 'warn' }
        ]
      },
      {
        kind: 'kpi-row', cols: 3,
        items: [
          { label: 'Multi-Trade Avg Contract', value: '$26,191', sub: '+67.9% vs single-trade',       tone: 'success' },
          { label: 'Single-Trade Avg Contract', value: '$15,604', sub: 'Baseline ticket' },
          { label: 'MT vs ST Cycle Gap',       value: '+22.8d',  sub: 'MT 44.0d vs ST 21.2d',        tone: 'warn' }
        ]
      },
      {
        kind: 'chart-grid', cols: 2, heading: 'The Trajectory',
        caption: 'Revenue and cycle moving together, April was the inflection',
        charts: [
          {
            title: 'Revenue & Job Volume by Month',
            sub: 'Bars = revenue · line = job count',
            height: 300,
            config: {
              type: 'bar',
              data: {
                labels: C.ch_monthly.labels,
                datasets: [
                  { type: 'bar', label: 'Revenue', data: C.ch_monthly.datasets[0].data, backgroundColor: pal.navy, yAxisID: 'y', borderRadius: 4 },
                  { type: 'line', label: 'Jobs', data: C.ch_monthly.datasets[1].data, borderColor: pal.blue, backgroundColor: pal.blue, yAxisID: 'y1', tension: 0.3, pointBackgroundColor: '#fff' }
                ]
              },
              options: withOpts({
                scales: {
                  y:  Object.assign({ position: 'left' }, moneyAxis()),
                  y1: { position: 'right', grid: { display: false }, ticks: { color: pal.blue }, beginAtZero: true }
                }
              })
            }
          },
          {
            title: 'Cycle Efficiency by Month',
            sub: 'Days-to-complete and days-to-start trending down together',
            height: 300,
            config: {
              type: 'line',
              data: {
                labels: C.ch_efficiency.labels,
                datasets: [
                  { label: 'Median Days to Complete', data: C.ch_efficiency.datasets[0].data, borderColor: pal.navy, tension: 0.3, pointBackgroundColor: '#fff' },
                  { label: 'Avg Days to Start',       data: C.ch_efficiency.datasets[1].data, borderColor: pal.warning, tension: 0.3, pointBackgroundColor: '#fff' }
                ]
              },
              options: withOpts({ scales: { y: { ticks: { callback: function (v) { return v + 'd'; } }, beginAtZero: true } } })
            }
          }
        ]
      },
      {
        kind: 'chart-grid', cols: 2, heading: 'Where the Revenue Sits',
        charts: [
          {
            title: 'Revenue by Market (Top 12)',
            sub: 'Columbus carries 30% of YTD revenue',
            height: 320,
            config: {
              type: 'bar',
              data: {
                labels: C.ch_mk_rev.labels,
                datasets: [{ data: C.ch_mk_rev.datasets[0].data, backgroundColor: pal.navy, label: 'Revenue' }]
              },
              options: withOpts({ indexAxis: 'y', scales: { x: moneyAxis() }, plugins: { legend: { display: false } } })
            }
          },
          {
            title: 'Revenue by Work Type',
            sub: 'Roofing is the dominant pillar at 75% of revenue',
            height: 320,
            config: {
              type: 'doughnut',
              data: {
                labels: C.ch_wt_pie.labels,
                datasets: [{
                  data: C.ch_wt_pie.datasets[0].data,
                  backgroundColor: C.ch_wt_pie.labels.map(function (_, i) { return FZ.color(i); }),
                  borderColor: '#fff', borderWidth: 2
                }]
              },
              options: withOpts({
                cutout: '60%',
                plugins: {
                  legend: { position: 'right' },
                  tooltip: { callbacks: { label: function (c) { return c.label + ': ' + fmt.money(c.parsed); } } }
                }
              })
            }
          }
        ]
      },
      {
        kind: 'prose', heading: 'Headlines',
        cards: [
          { kind: 'tint', eyebrow: 'WHAT IS WORKING', title: 'April delivered the playbook', body: '<p>April invoiced <strong>$7.44M across 420 jobs</strong> at a <strong>16.2-day median</strong>: highest revenue month, fastest cycle of the year. Cycle compressed from 32 days in January to 16 days in April as monthly volume tripled. Codify and run as the Q2/Q3 production playbook.</p>' },
          { eyebrow: 'WHERE IT BREAKS', title: 'Columbus cycle drag', body: '<p>Columbus produces <strong>33% of jobs</strong> and <strong>30% of revenue</strong>, but its 42.0-day median complete is well above the 27.1-day company median. The multi-trade gap there is 47 days (75.2d MT vs 28.0d ST). Mason Bryant carries 89 WOs at 74.2-day median, top-3 PM by volume, slowest by cycle. This is sequencing, not workload.</p>' },
          { kind: 'navy', eyebrow: 'NEXT MOVES', title: 'Three pairings to chase', body: '<p>Pair Mason Bryant\'s book to Brandon Vera + Alejandro Alvarado in a structured shadow-then-handoff (their 53 jobs in Columbus run at 13.2-day median). Pilot a dedicated gutter rotation in Columbus and Detroit. Decode and replicate Greenville (13.0d, $28,747 avg) in Knoxville.</p>' }
        ]
      }
    ]
  };

  // ============================================================
  // KPIS
  // ============================================================
  pages.kpis = {
    eyebrow: 'HEADLINE KPIs',
    title: 'Headline KPIs',
    intro: 'The full set of headline metrics with the multi-trade lift broken out separately. These are the numbers that drive the rest of the dashboard.',
    sections: [
      {
        kind: 'kpi-row', cols: 3, heading: 'Production headlines',
        items: D.kpis.slice(0, 3).map(function (k) {
          return { label: k.label, value: k.value, sub: k.sub, tone: 'navy' };
        })
      },
      {
        kind: 'kpi-row', cols: 3,
        items: D.kpis.slice(3, 6).map(function (k, i) {
          return { label: k.label, value: k.value, sub: k.sub, tone: i === 0 ? 'warn' : (i === 1 ? 'success' : null) };
        })
      },
      {
        kind: 'kpi-row', cols: 3, heading: 'Multi-trade lift',
        caption: 'The premium and the cost of attaching a second trade',
        items: D.kpisMultiTrade.map(function (k, i) {
          return { label: k.label, value: k.value, sub: k.sub, tone: i === 0 ? 'success' : (i === 2 ? 'warn' : null) };
        })
      },
      {
        kind: 'chart-grid', cols: 1,
        charts: [
          {
            title: 'Multi-Trade vs Single-Trade Job Count',
            sub: '290 multi-trade jobs (27.9%), 751 single-trade (72.1%)',
            height: 120,
            config: {
              type: 'bar',
              data: {
                labels: ['YTD Job Mix'],
                datasets: [
                  { label: 'Multi-Trade', data: [290], backgroundColor: pal.navy, stack: 'a' },
                  { label: 'Single-Trade', data: [751], backgroundColor: pal.blue, stack: 'a' }
                ]
              },
              options: withOpts({
                indexAxis: 'y',
                scales: { x: { stacked: true, beginAtZero: true }, y: { stacked: true } }
              })
            }
          }
        ]
      },
      {
        kind: 'callout',
        title: 'Reading these together',
        body: 'The 27.1-day median completes against an industry expectation of 21–28 days for residential roofing. We are operating in-band, but with a wide variance: April hits 16d while Columbus drags the median up to 27. The multi-trade lift is the largest single revenue lever we are not pulling intentionally.'
      }
    ]
  };

  // ============================================================
  // TRENDS
  // ============================================================
  pages.trends = {
    eyebrow: 'MONTHLY TRENDS',
    title: 'Monthly Trends',
    intro: 'Four months of invoiced production. The story is volume up, cycle down, all in the same window.',
    sections: [
      {
        kind: 'kpi-row', cols: 4,
        items: [
          { label: 'January',  value: fmt.money(C.ch_monthly.datasets[0].data[0], { short: true }), sub: C.ch_monthly.datasets[1].data[0] + ' jobs · 32d median' },
          { label: 'February', value: fmt.money(C.ch_monthly.datasets[0].data[1], { short: true }), sub: C.ch_monthly.datasets[1].data[1] + ' jobs · 25d median' },
          { label: 'March',    value: fmt.money(C.ch_monthly.datasets[0].data[2], { short: true }), sub: C.ch_monthly.datasets[1].data[2] + ' jobs · 22d median' },
          { label: 'April',    value: fmt.money(C.ch_monthly.datasets[0].data[3], { short: true }), sub: C.ch_monthly.datasets[1].data[3] + ' jobs · 16d median', tone: 'success' }
        ]
      },
      {
        kind: 'chart-grid', cols: 1,
        charts: [
          {
            title: 'Revenue & Job Volume by Month',
            sub: 'Bars = invoiced revenue · line = unique jobs',
            height: 320,
            config: {
              type: 'bar',
              data: {
                labels: C.ch_monthly.labels,
                datasets: [
                  { type: 'bar', label: 'Revenue', data: C.ch_monthly.datasets[0].data, backgroundColor: pal.navy, yAxisID: 'y', borderRadius: 4 },
                  { type: 'line', label: 'Jobs',   data: C.ch_monthly.datasets[1].data, borderColor: pal.blue, backgroundColor: pal.blue, yAxisID: 'y1', tension: 0.3, pointBackgroundColor: '#fff' }
                ]
              },
              options: withOpts({
                scales: {
                  y: Object.assign({ position: 'left' }, moneyAxis()),
                  y1: { position: 'right', grid: { display: false }, ticks: { color: pal.blue }, beginAtZero: true }
                }
              })
            }
          }
        ]
      },
      {
        kind: 'chart-grid', cols: 1,
        charts: [
          {
            title: 'Cycle Efficiency Trend',
            sub: 'Both lines moving down means we are getting better at start and better at finish',
            height: 280,
            config: {
              type: 'line',
              data: {
                labels: C.ch_efficiency.labels,
                datasets: [
                  { label: 'Median Days to Complete', data: C.ch_efficiency.datasets[0].data, borderColor: pal.navy, tension: 0.3, pointBackgroundColor: '#fff', borderWidth: 3 },
                  { label: 'Avg Days to Start',       data: C.ch_efficiency.datasets[1].data, borderColor: pal.warning, tension: 0.3, pointBackgroundColor: '#fff', borderWidth: 3 }
                ]
              },
              options: withOpts({ scales: { y: { ticks: { callback: function (v) { return v + 'd'; } }, beginAtZero: true } } })
            }
          }
        ]
      },
      {
        kind: 'callout', tone: 'success',
        title: 'April is the proof',
        body: 'Hitting $7.44M at a 16.2-day median across 420 jobs in one month is the playbook. Document the schedule density, the crew utilization, and the start-to-complete handoff. Q2/Q3 capacity planning should assume we can run this pace with the right sequencing.'
      }
    ]
  };

  // ============================================================
  // MULTI-TRADE
  // ============================================================
  pages['multi-trade'] = {
    eyebrow: 'MULTI-TRADE MIX',
    title: 'Multi-Trade Mix',
    intro: 'Multi-trade jobs lift the average ticket by 68% but cost an extra 23 days in cycle time. Where the lift is real and where the cycle tax kills it.',
    tags: [{ kind: 'success', text: '+68% revenue lift' }, { kind: 'warn', text: '+22.8d cycle tax' }],
    sections: [
      {
        kind: 'kpi-row', cols: 3,
        items: D.kpisMultiTrade.map(function (k, i) {
          return { label: k.label, value: k.value, sub: k.sub, tone: i === 0 ? 'success' : (i === 2 ? 'warn' : 'navy') };
        })
      },
      {
        kind: 'chart-grid', cols: 2,
        charts: [
          {
            title: 'Top Multi-Trade Combinations',
            sub: 'Where the cross-sell is actually happening',
            height: 320,
            config: {
              type: 'bar',
              data: {
                labels: C.ch_combos.labels,
                datasets: [{ label: 'Jobs', data: C.ch_combos.datasets[0].data, backgroundColor: pal.navy }]
              },
              options: withOpts({ indexAxis: 'y', plugins: { legend: { display: false } } })
            }
          },
          {
            title: 'Multi-Trade % by Market',
            sub: 'Knoxville and Richmond lead attach rates',
            height: 320,
            config: {
              type: 'bar',
              data: {
                labels: C.ch_mt_by_market.labels,
                datasets: [{
                  label: 'MT %',
                  data: C.ch_mt_by_market.datasets[0].data,
                  backgroundColor: C.ch_mt_by_market.datasets[0].data.map(function (v) {
                    return v >= 30 ? pal.success : v >= 20 ? pal.blue : pal.warning;
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
        kind: 'chart-grid', cols: 1,
        charts: [
          {
            title: 'MT vs ST Median Complete by Market',
            sub: 'The cycle penalty for adding a trade, Raleigh, Richmond, Dayton are the worst offenders',
            height: 320,
            config: {
              type: 'bar',
              data: {
                labels: C.ch_mt_vs_st.labels,
                datasets: [
                  { label: 'MT Median', data: C.ch_mt_vs_st.datasets[0].data, backgroundColor: pal.warning },
                  { label: 'ST Median', data: C.ch_mt_vs_st.datasets[1].data, backgroundColor: pal.navy }
                ]
              },
              options: withOpts({ scales: { y: { ticks: { callback: function (v) { return v + 'd'; } }, beginAtZero: true } } })
            }
          }
        ]
      },
      {
        kind: 'callout', tone: 'warn',
        title: 'The Raleigh / Richmond / Dayton problem',
        body: 'These three markets have the largest MT-vs-ST cycle gap (Raleigh 70.1d vs 20.0d, Richmond 52.9d vs 14.5d, Dayton 52.1d vs 24.9d). The DC Metro playbook (MT 26.0d vs ST 15.8d) shows it is solvable with crew rotation and scheduling discipline. Replicate before adding any new MT capacity.'
      }
    ]
  };

  // ============================================================
  // MARKETS
  // ============================================================
  pages.markets = {
    eyebrow: 'MARKETS · ALL 14',
    title: 'Markets',
    intro: 'Every market that has invoiced revenue YTD, ranked by dollars. The cycle and multi-trade metrics tell you where the model is healthy versus where it is held together with grit.',
    sections: [
      {
        kind: 'kpi-row', cols: 4,
        items: [
          { label: 'Top Market',           value: 'Columbus', sub: '$5.81M · 347 jobs · 42d median', tone: 'navy' },
          { label: 'Highest Avg Contract', value: 'Greenville', sub: '$28,747 on 25 jobs',          tone: 'success' },
          { label: 'Fastest Median',       value: 'Greenville', sub: '13.0d median complete',       tone: 'success' },
          { label: 'Slowest Median',       value: 'Columbus', sub: '42.0d on 347 jobs',             tone: 'warn' }
        ]
      },
      {
        kind: 'chart-grid', cols: 2,
        charts: [
          {
            title: 'Revenue by Market',
            height: 380,
            config: {
              type: 'bar',
              data: {
                labels: C.ch_mk_rev.labels,
                datasets: [{ data: C.ch_mk_rev.datasets[0].data, backgroundColor: pal.navy, label: 'Revenue' }]
              },
              options: withOpts({ indexAxis: 'y', scales: { x: moneyAxis() }, plugins: { legend: { display: false } } })
            }
          },
          {
            title: 'Median Days to Complete by Market',
            sub: 'Lower bars = faster crews and better sequencing',
            height: 380,
            config: {
              type: 'bar',
              data: {
                labels: C.ch_mk_days.labels,
                datasets: [{
                  data: C.ch_mk_days.datasets[0].data,
                  backgroundColor: C.ch_mk_days.datasets[0].data.map(function (v) {
                    return v >= 35 ? pal.danger : v >= 25 ? pal.warning : pal.success;
                  })
                }]
              },
              options: withOpts({
                indexAxis: 'y',
                scales: { x: { ticks: { callback: function (v) { return v + 'd'; } }, beginAtZero: true } },
                plugins: { legend: { display: false } }
              })
            }
          }
        ]
      },
      {
        kind: 'table', heading: 'All markets · full scorecard',
        caption: '14 markets sorted by revenue',
        headers: T.tbl_markets.headers.map(function (h, idx) { return { label: h, num: idx > 0 }; }),
        rows: T.tbl_markets.rows.map(function (r) {
          return [
            { html: '<strong>' + r[0] + '</strong>' },
            r[1],
            fmt.money(r[2]),
            fmt.money(r[3]),
            { html: r[4] >= 35 ? '<span class="pill pill-danger">' + r[4] + 'd</span>' : r[4] >= 25 ? '<span class="pill pill-warn">' + r[4] + 'd</span>' : '<span class="pill pill-success">' + r[4] + 'd</span>' },
            r[5] + 'd',
            r[6],
            r[7],
            r[8]
          ];
        })
      },
      {
        kind: 'callout', tone: 'success',
        title: 'DC Metro is the model',
        body: 'DC Metro: 19.4-day median complete, 30.5% multi-trade attach, $18K average contract on 82 jobs. Best-balanced market in the network. Use as the playbook reference for Richmond and Raleigh, both of which have the volume but not the discipline.'
      }
    ]
  };

  // ============================================================
  // PMS
  // ============================================================
  pages.pms = {
    eyebrow: 'PROJECT MANAGERS',
    title: 'Project Managers',
    intro: 'All 28 active PMs (5+ WOs). Where revenue concentrates, where cycle is fast, and which combinations of volume + speed actually scale.',
    sections: [
      {
        kind: 'kpi-row', cols: 4,
        items: [
          { label: 'Active PMs',     value: '28',          sub: 'WOs ≥ 5',                              tone: 'navy' },
          { label: 'Top PM Revenue', value: '$1.53M',      sub: 'Eric Isakov · 71 WOs · 49.1d median' },
          { label: 'Top 5 PM Share', value: (function(){
              var t=T.tbl_pms.rows.slice(0,5).reduce(function(a,r){return a+r[3];},0);
              return ((t / 19310000) * 100).toFixed(0) + '%';
            })(), sub: 'of $19.31M YTD' },
          { label: 'Slowest High-Vol PM', value: '74.2d',  sub: 'Mason Bryant · 89 WOs · Columbus',     tone: 'warn' }
        ]
      },
      {
        kind: 'chart-grid', cols: 1,
        charts: [
          {
            title: 'Top 15 PMs by Fractional Revenue',
            sub: 'Each PM\'s share of YTD invoiced revenue',
            height: 460,
            config: {
              type: 'bar',
              data: {
                labels: C.ch_pm_top.labels,
                datasets: [{ data: C.ch_pm_top.datasets[0].data, backgroundColor: pal.navy, label: 'Fractional Revenue' }]
              },
              options: withOpts({ indexAxis: 'y', scales: { x: moneyAxis() }, plugins: { legend: { display: false } } })
            }
          }
        ]
      },
      {
        kind: 'chart-grid', cols: 1,
        charts: [
          {
            title: 'Revenue vs Cycle Speed (all 28 PMs)',
            sub: 'Top-left = best (high revenue, fast cycle) · Bottom-right = worst (low revenue, slow cycle)',
            height: 380,
            config: {
              type: 'scatter',
              data: {
                datasets: [{
                  label: 'PMs',
                  data: T.tbl_pms.rows.map(function (r) { return { x: r[5], y: r[3], wos: r[1], pm: r[0] }; }),
                  backgroundColor: pal.navy,
                  pointRadius: T.tbl_pms.rows.map(function (r) { return Math.max(4, Math.min(18, Math.sqrt(r[1]) + 2)); }),
                  pointHoverRadius: 8
                }]
              },
              options: withOpts({
                plugins: {
                  legend: { display: false },
                  tooltip: { callbacks: { label: function (c) {
                    var p = c.raw;
                    return p.pm + ': ' + fmt.money(p.y) + ' on ' + p.wos + ' WOs · ' + p.x + 'd median';
                  } } }
                },
                scales: {
                  x: { title: { display: true, text: 'Median Complete (days)' }, beginAtZero: true },
                  y: Object.assign({ title: { display: true, text: 'Fractional Revenue' } }, moneyAxis())
                }
              })
            }
          }
        ]
      },
      {
        kind: 'table', heading: 'All 28 PMs · ranked by revenue',
        headers: T.tbl_pms.headers.map(function (h, i) { return { label: h, num: i > 0 }; }),
        rows: T.tbl_pms.rows.map(function (r) {
          return [
            { html: '<strong>' + r[0] + '</strong>' },
            r[1], r[2], fmt.money(r[3]), fmt.money(r[4]),
            { html: r[5] >= 60 ? '<span class="pill pill-danger">' + r[5] + 'd</span>' : r[5] >= 35 ? '<span class="pill pill-warn">' + r[5] + 'd</span>' : '<span class="pill pill-success">' + r[5] + 'd</span>' },
            r[6] + 'd'
          ];
        })
      },
      {
        kind: 'callout', tone: 'warn',
        title: 'Mason Bryant: the volume-cycle paradox',
        body: '89 WOs, $1.37M revenue, 74.2-day median complete. Top-3 PM by volume but the slowest high-volume PM in the network. 100% Columbus, skewed toward roofing (62 of 89 WOs). The fix is sequencing, not removing volume. Pair the book to Brandon Vera in a structured shadow-then-handoff.'
      }
    ]
  };

  // ============================================================
  // WORK TYPES
  // ============================================================
  pages['work-types'] = {
    eyebrow: 'WORK TYPES',
    title: 'Work Types',
    intro: 'Roofing carries 75% of the revenue, but the cycle dynamics differ sharply by trade. Gutters runs 47% slower than roofing on a fraction of the ticket size.',
    sections: [
      {
        kind: 'kpi-row', cols: 4,
        items: [
          { label: 'Roofing',   value: '$14.40M', sub: '945 WOs · 27.1d median', tone: 'navy' },
          { label: 'Gutters',   value: '$2.80M',  sub: '299 WOs · 39.9d median', tone: 'warn' },
          { label: 'Siding',    value: '$821K',   sub: '86 WOs' },
          { label: 'All Other', value: fmt.money(T.tbl_worktypes.rows.slice(3).reduce(function(a,r){return a+r[2];},0), { short: true }), sub: 'Metal, windows, masonry, solar' }
        ]
      },
      {
        kind: 'chart-grid', cols: 2,
        charts: [
          {
            title: 'Revenue Share by Work Type',
            height: 320,
            config: {
              type: 'doughnut',
              data: {
                labels: C.ch_wt_pie.labels,
                datasets: [{
                  data: C.ch_wt_pie.datasets[0].data,
                  backgroundColor: C.ch_wt_pie.labels.map(function (_, i) { return FZ.color(i); }),
                  borderColor: '#fff', borderWidth: 2
                }]
              },
              options: withOpts({
                cutout: '60%',
                plugins: {
                  legend: { position: 'right' },
                  tooltip: { callbacks: { label: function (c) { return c.label + ': ' + fmt.money(c.parsed); } } }
                }
              })
            }
          },
          {
            title: 'Median Days to Complete by Work Type',
            sub: 'Where the cycle drag actually lives',
            height: 320,
            config: {
              type: 'bar',
              data: {
                labels: C.ch_wt_days.labels,
                datasets: [{
                  data: C.ch_wt_days.datasets[0].data,
                  backgroundColor: C.ch_wt_days.datasets[0].data.map(function (v) {
                    return v >= 40 ? pal.danger : v >= 30 ? pal.warning : pal.success;
                  })
                }]
              },
              options: withOpts({
                indexAxis: 'y',
                scales: { x: { ticks: { callback: function (v) { return v + 'd'; } }, beginAtZero: true } },
                plugins: { legend: { display: false } }
              })
            }
          }
        ]
      },
      {
        kind: 'table', heading: 'All work types · full detail',
        headers: T.tbl_worktypes.headers.map(function (h, i) { return { label: h, num: i > 0 }; }),
        rows: T.tbl_worktypes.rows.map(function (r) {
          return [
            { html: '<strong>' + r[0] + '</strong>' },
            r[1],
            fmt.money(r[2]),
            fmt.money(r[3]),
            r[4]
          ];
        })
      },
      {
        kind: 'callout', tone: 'warn',
        title: 'The gutters cycle gap',
        body: 'Gutters runs at a 39.9-day median complete versus 27.1d for roofing, 47% slower on the lowest-priced trade. Pilot a dedicated gutter-crew rotation in Columbus and Detroit. If the cycle gap closes by half, that is roughly 6 days back per gutter job at scale.'
      }
    ]
  };

  // ============================================================
  // CREATORS (Created By)
  // ============================================================
  pages.creators = {
    eyebrow: 'CREATED BY',
    title: 'Created By',
    intro: 'Eight creators are responsible for every job in the YTD book. Three carry 75% of the volume. The creator-by-market network shows where each one\'s book actually lives.',
    sections: [
      {
        kind: 'kpi-row', cols: 4,
        items: [
          { label: 'Active Creators', value: '8',           sub: 'Each with 5+ jobs',                  tone: 'navy' },
          { label: 'Top Creator',     value: 'Brandon Vera', sub: '320 jobs · $6.25M · 22.2d median', tone: 'success' },
          { label: 'Top 3 Share',     value: (function(){
              var t=T.tbl_creators.rows.slice(0,3).reduce(function(a,r){return a+r[2];},0);
              return ((t / 19310000) * 100).toFixed(0) + '%';
            })(), sub: 'of YTD revenue' },
          { label: 'Highest MT %',    value: 'Brandon Vera', sub: '34.4% multi-trade attach',           tone: 'success' }
        ]
      },
      {
        kind: 'chart-grid', cols: 2,
        charts: [
          {
            title: 'Volume by Creator',
            height: 300,
            config: {
              type: 'bar',
              data: {
                labels: C.ch_cb_vol.labels,
                datasets: [{ data: C.ch_cb_vol.datasets[0].data, backgroundColor: pal.navy, label: 'Jobs' }]
              },
              options: withOpts({ plugins: { legend: { display: false } } })
            }
          },
          {
            title: 'Cycle Efficiency by Creator',
            sub: 'Median complete days · lower is better',
            height: 300,
            config: {
              type: 'bar',
              data: {
                labels: C.ch_cb_eff.labels,
                datasets: [{
                  data: C.ch_cb_eff.datasets[0].data,
                  backgroundColor: C.ch_cb_eff.datasets[0].data.map(function (v) {
                    return v >= 35 ? pal.danger : v >= 25 ? pal.warning : pal.success;
                  })
                }]
              },
              options: withOpts({
                scales: { y: { ticks: { callback: function (v) { return v + 'd'; } }, beginAtZero: true } },
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
            title: 'Multi-Trade % by Creator',
            sub: 'Who is bundling, who is single-product',
            height: 280,
            config: {
              type: 'bar',
              data: {
                labels: C.ch_cb_mt.labels,
                datasets: [{
                  data: C.ch_cb_mt.datasets[0].data,
                  backgroundColor: C.ch_cb_mt.datasets[0].data.map(function (v) {
                    return v >= 30 ? pal.success : v >= 20 ? pal.blue : pal.warning;
                  })
                }]
              },
              options: withOpts({
                scales: { y: { ticks: { callback: function (v) { return v + '%'; } }, beginAtZero: true } },
                plugins: { legend: { display: false } }
              })
            }
          },
          {
            title: 'Avg Contract vs Median Complete',
            sub: 'Top-left = high ticket, fast cycle (the goal)',
            height: 280,
            config: {
              type: 'scatter',
              data: {
                datasets: [{
                  label: 'Creators',
                  data: T.tbl_creators.rows.map(function (r) {
                    return { x: parseFloat(String(r[4]).replace('d','')), y: r[3], jobs: r[1], creator: r[0] };
                  }),
                  backgroundColor: pal.navy,
                  pointRadius: T.tbl_creators.rows.map(function (r) { return Math.max(5, Math.min(18, Math.sqrt(r[1]) + 2)); }),
                  pointHoverRadius: 9
                }]
              },
              options: withOpts({
                plugins: {
                  legend: { display: false },
                  tooltip: { callbacks: { label: function (c) {
                    var p = c.raw;
                    return p.creator + ': ' + fmt.money(p.y) + ' avg · ' + p.x + 'd · ' + p.jobs + ' jobs';
                  } } }
                },
                scales: {
                  x: { title: { display: true, text: 'Median Complete (days)' }, beginAtZero: true },
                  y: Object.assign({ title: { display: true, text: 'Avg Contract' } }, moneyAxis(false))
                }
              })
            }
          }
        ]
      },
      {
        kind: 'table', heading: 'All creators · full detail',
        headers: T.tbl_creators.headers.map(function (h, i) { return { label: h, num: i > 0 }; }),
        rows: T.tbl_creators.rows.map(function (r) {
          return [
            { html: '<strong>' + r[0] + '</strong>' },
            r[1], fmt.money(r[2]), fmt.money(r[3]), r[4], r[5], r[6], r[7]
          ];
        })
      },
      {
        kind: 'table', heading: 'Creator × Market Heatmap (Jobs)',
        caption: 'Where each creator\'s book actually lives. Total row at the bottom.',
        compact: true,
        headers: T.creatorMarketHeatmap.headers.map(function (h, i) { return { label: h, num: i > 0 }; }),
        rows: T.creatorMarketHeatmap.rows.map(function (r) {
          var rowMax = Math.max.apply(null, r.slice(1, -1).map(function (v) { return typeof v === 'number' ? v : 0; }));
          return r.map(function (cell, idx) {
            if (idx === 0) return { html: '<strong>' + cell + '</strong>' };
            if (idx === r.length - 1) return { html: '<strong>' + cell + '</strong>' };
            if (typeof cell === 'number' && cell > 0) {
              var lvl = heatLevel(cell, rowMax);
              return { html: '<span class="heat heat-' + lvl + '">' + cell + '</span>' };
            }
            return { html: '<span class="heat heat-0">·</span>' };
          });
        })
      },
      {
        kind: 'callout',
        title: 'What the heatmap reveals',
        body: 'Amanda Wade is 72% Columbus (163 of 227). David Schwan is 35% Knoxville and 37% Nashville with light Columbus exposure. Brandon Vera is the only creator with meaningful presence in nine markets. Concentration matters when planning territory coverage and shadow-then-handoff transitions.'
      }
    ]
  };

  // ============================================================
  // FINDINGS
  // ============================================================
  pages.findings = {
    eyebrow: 'KEY FINDINGS',
    title: 'Key Findings',
    intro: 'The narrative read of the book. Areas of concern that need owners, watch-list items that are still trending, and the playbook items that are already working.',
    tags: [{ kind: 'danger', text: D.commentary.areasOfConcern.length + ' concerns' }, { kind: 'success', text: D.commentary.positivesToBuildOn.length + ' wins' }],
    sections: [
      {
        kind: 'prose', heading: 'Three lenses', cols: 3,
        cards: [
          {
            kind: 'tint', eyebrow: 'AREAS OF CONCERN',
            title: 'Owners needed',
            list: D.commentary.areasOfConcern.map(function (t) { return { text: t, tone: 'danger', icon: '!' }; })
          },
          {
            eyebrow: 'WATCH LIST',
            title: 'Trending the wrong way',
            list: D.commentary.watchList.map(function (t) { return { text: t, tone: 'warn', icon: '⚠' }; })
          },
          {
            kind: 'navy', eyebrow: 'POSITIVES TO BUILD ON',
            title: 'Codify these',
            list: D.commentary.positivesToBuildOn.map(function (t) { return { text: t, tone: 'success', icon: '✓' }; })
          }
        ]
      },
      {
        kind: 'callout',
        title: 'How to use this page',
        body: 'Each Areas-of-Concern bullet should have a single owner with a 30-day commitment. Watch-list items convert to a metric owner. Positives become standard operating procedure documentation. Print the three columns side-by-side for the next operations review.'
      }
    ]
  };

  // ============================================================
  window.FZ_PAGE_DEFS = window.FZ_PAGE_DEFS || {};
  window.FZ_PAGE_DEFS['installs-ytd'] = pages;
})();
