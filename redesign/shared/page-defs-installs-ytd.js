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

  // ============================================================
  // MULTI-FAMILY BRANCH (data-driven, reads D.kpis directly)
  // ============================================================
  var lob = (window.FZ.data && window.FZ.data._meta && window.FZ.data._meta.lob) || 'residential';
  if (lob === 'multi-family') {
    window.FZ_PAGE_DEFS = window.FZ_PAGE_DEFS || {};
    window.FZ_PAGE_DEFS['installs-ytd'] = buildMfInstallsPages(D, pal, fmt, BASE_OPTS, withOpts, moneyAxis);
    return;
  }

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
  // MF page builder: data-driven, reads from D.kpis / D.headerMeta etc
  // ============================================================
  function buildMfInstallsPages (D, pal, fmt, BASE_OPTS, withOpts, moneyAxis) {
    function kpiByLabel (label) {
      var k = (D.kpis || []).find(function (x) { return x && x.label === label; });
      return k ? { label: k.label, value: k.value, sub: k.sub || '', tone: 'navy' }
               : { label: label, value: '—', sub: '' };
    }
    function safeArr (v) { return Array.isArray(v) ? v : []; }
    function safeObj (v) { return (v && typeof v === 'object') ? v : {}; }

    var hm = safeObj(D.headerMeta);
    var monthly = safeArr(D.monthly);
    var mtKpis = safeArr(D.kpisMultiTrade);
    var commentary = safeObj(D.commentary);

    // Index charts and tables by id like the residential branch does
    var Cm = {};
    safeArr(D.charts).forEach(function (c) { Cm[c.id] = c; });
    var Tm = {};
    safeArr(D.tables).forEach(function (t) { Tm[t.id] = t; });

    var totalRev = hm.trueRevenue || 0;

    var mfPages = {};

    // ─────────────────────────────────────────────────────────────
    // INDEX / KPIs
    // ─────────────────────────────────────────────────────────────
    var indexPage = {
      eyebrow: D.subtitle || 'MULTI-FAMILY · INVOICED PRODUCTION',
      title: 'Multi-Family Installs YTD',
      intro: 'Commercial and multi-family invoiced jobs YTD, deduplicated at the job level. Same Salesforce Completed Jobs report as residential, filtered to Commercial.',
      tags: [
        { kind: 'info', text: (hm.uniqueJobs || 0) + ' jobs · ' + (hm.markets || 0) + ' markets · ' + (hm.pms || 0) + ' PMs' }
      ],
      sections: [
        { kind: 'kpi-row', cols: 4, items: [
            kpiByLabel('True Revenue'),
            kpiByLabel('Avg Contract Value'),
            kpiByLabel('Median Days to Complete'),
            kpiByLabel('Avg Days to Start')
        ]},
        { kind: 'kpi-row', cols: 2, items: [
            kpiByLabel('Multi-Trade Jobs'),
            kpiByLabel('Single-Trade Jobs')
        ]},
        Cm.ch_monthly ? {
          kind: 'chart-grid', cols: 1,
          heading: 'Monthly invoiced production',
          charts: [{
            title: 'Revenue & Job Volume by Month',
            sub: 'Bars = invoiced revenue · line = unique jobs',
            height: 300,
            config: {
              type: 'bar',
              data: {
                labels: Cm.ch_monthly.labels,
                datasets: [
                  { type: 'bar', label: 'Revenue', data: Cm.ch_monthly.datasets[0].data, backgroundColor: pal.navy, yAxisID: 'y', borderRadius: 4 },
                  { type: 'line', label: 'Jobs', data: Cm.ch_monthly.datasets[1].data, borderColor: pal.warning, backgroundColor: pal.warning, yAxisID: 'y1', tension: 0.3, pointBackgroundColor: '#fff' }
                ]
              },
              options: withOpts({
                scales: {
                  y: Object.assign({ position: 'left' }, moneyAxis()),
                  y1: { position: 'right', grid: { display: false }, ticks: { color: pal.warning }, beginAtZero: true }
                }
              })
            }
          }]
        } : null
      ].filter(Boolean)
    };
    mfPages.index = indexPage;
    mfPages.kpis = indexPage;

    // ─────────────────────────────────────────────────────────────
    // TRENDS
    // ─────────────────────────────────────────────────────────────
    var monthSorted = monthly.slice().sort(function (a, b) { return b.rev - a.rev; });
    var bestMonth = monthSorted[0];
    var worstMonth = monthSorted[monthSorted.length - 1];

    mfPages.trends = {
      eyebrow: 'MONTHLY TRENDS · MF',
      title: 'Monthly Trends',
      intro: 'Five months of invoiced MF production. The book is lumpy because MF deals are large; one or two big jobs swing a month.',
      sections: [
        monthly.length ? {
          kind: 'kpi-row', cols: monthly.length,
          items: monthly.map(function (m) {
            return {
              label: m.label,
              value: fmt.money(m.rev || 0, { short: true }),
              sub: (m.jobs || 0) + ' jobs · ' + (m.med != null ? m.med.toFixed(0) + 'd median' : ''),
              tone: bestMonth && m.label === bestMonth.label ? 'success' : (worstMonth && m.label === worstMonth.label ? 'warn' : 'navy')
            };
          })
        } : null,
        Cm.ch_monthly ? {
          kind: 'chart-grid', cols: 1,
          charts: [{
            title: 'Revenue & Job Volume by Month',
            sub: 'Bars = invoiced revenue · line = unique jobs',
            height: 320,
            config: {
              type: 'bar',
              data: {
                labels: Cm.ch_monthly.labels,
                datasets: [
                  { type: 'bar', label: 'Revenue', data: Cm.ch_monthly.datasets[0].data, backgroundColor: pal.navy, yAxisID: 'y', borderRadius: 4 },
                  { type: 'line', label: 'Jobs', data: Cm.ch_monthly.datasets[1].data, borderColor: pal.warning, yAxisID: 'y1', tension: 0.3, pointBackgroundColor: '#fff', borderWidth: 3 }
                ]
              },
              options: withOpts({
                scales: {
                  y: Object.assign({ position: 'left' }, moneyAxis()),
                  y1: { position: 'right', grid: { display: false }, ticks: { color: pal.warning }, beginAtZero: true }
                }
              })
            }
          }]
        } : null,
        Cm.ch_efficiency ? {
          kind: 'chart-grid', cols: 1,
          charts: [{
            title: 'Cycle Efficiency Trend',
            sub: 'Both lines moving down = better start AND better finish',
            height: 280,
            config: {
              type: 'line',
              data: {
                labels: Cm.ch_efficiency.labels,
                datasets: [
                  { label: 'Median Days to Complete', data: Cm.ch_efficiency.datasets[0].data, borderColor: pal.navy, tension: 0.3, pointBackgroundColor: '#fff', borderWidth: 3 },
                  { label: 'Avg Days to Start',       data: Cm.ch_efficiency.datasets[1].data, borderColor: pal.warning, tension: 0.3, pointBackgroundColor: '#fff', borderWidth: 3 }
                ]
              },
              options: withOpts({ scales: { y: { ticks: { callback: function (v) { return v + 'd'; } }, beginAtZero: true } } })
            }
          }]
        } : null,
        bestMonth ? {
          kind: 'callout', tone: 'success',
          title: bestMonth.label + ' is the proof point',
          body: 'Hit <strong>' + fmt.money(bestMonth.rev) + '</strong> across <strong>' + bestMonth.jobs + ' jobs</strong> at a <strong>' + (bestMonth.med != null ? bestMonth.med.toFixed(1) + '-day' : '') + '</strong> median. That is the MF playbook for capacity planning. Worst month was ' + (worstMonth ? worstMonth.label + ' at ' + fmt.money(worstMonth.rev) : '—') + '. Variance is normal in MF; document the schedule density and crew rotation that delivered the strong months.'
        } : null
      ].filter(Boolean)
    };

    // ─────────────────────────────────────────────────────────────
    // MULTI-TRADE
    // ─────────────────────────────────────────────────────────────
    mfPages['multi-trade'] = {
      eyebrow: 'MULTI-TRADE MIX · MF',
      title: 'Multi-Trade Mix',
      intro: 'Multi-trade MF jobs lift the average ticket but extend cycle time. Where the lift is real and where the cycle tax kills it.',
      tags: mtKpis.length ? [
        { kind: 'success', text: mtKpis[0] && mtKpis[0].sub ? mtKpis[0].sub : 'MT lift active' },
        { kind: 'warn',    text: mtKpis[2] && mtKpis[2].sub ? mtKpis[2].sub : 'cycle gap monitored' }
      ] : [],
      sections: [
        mtKpis.length ? {
          kind: 'kpi-row', cols: 3,
          items: mtKpis.map(function (k, i) {
            return { label: k.label, value: k.value, sub: k.sub || '', tone: i === 0 ? 'success' : i === 2 ? 'warn' : 'navy' };
          })
        } : null,
        (Cm.ch_combos || Cm.ch_mt_by_market) ? {
          kind: 'chart-grid', cols: 2,
          charts: [
            Cm.ch_combos ? {
              title: 'Top Multi-Trade Combinations',
              sub: 'Where the cross-sell is happening on MF',
              height: 320,
              config: {
                type: 'bar',
                data: { labels: Cm.ch_combos.labels,
                  datasets: [{ label: 'Jobs', data: Cm.ch_combos.datasets[0].data, backgroundColor: pal.navy }] },
                options: withOpts({ indexAxis: 'y', plugins: { legend: { display: false } } })
              }
            } : null,
            Cm.ch_mt_by_market ? {
              title: 'Multi-Trade % by Market',
              sub: 'Attach rate by MF market',
              height: 320,
              config: {
                type: 'bar',
                data: { labels: Cm.ch_mt_by_market.labels,
                  datasets: [{
                    label: 'MT %',
                    data: Cm.ch_mt_by_market.datasets[0].data,
                    backgroundColor: Cm.ch_mt_by_market.datasets[0].data.map(function (v) {
                      return v >= 30 ? pal.success : v >= 15 ? pal.blue || pal.navy : pal.warning;
                    })
                  }] },
                options: withOpts({
                  indexAxis: 'y',
                  scales: { x: { ticks: { callback: function (v) { return v + '%'; } }, beginAtZero: true } },
                  plugins: { legend: { display: false } }
                })
              }
            } : null
          ].filter(Boolean)
        } : null,
        Cm.ch_mt_vs_st ? {
          kind: 'chart-grid', cols: 1,
          charts: [{
            title: 'MT vs ST Median Complete by Market',
            sub: 'The cycle penalty for adding a trade. Anything wide is a sequencing problem.',
            height: 320,
            config: {
              type: 'bar',
              data: {
                labels: Cm.ch_mt_vs_st.labels,
                datasets: [
                  { label: 'MT Median', data: Cm.ch_mt_vs_st.datasets[0].data, backgroundColor: pal.warning },
                  { label: 'ST Median', data: Cm.ch_mt_vs_st.datasets[1].data, backgroundColor: pal.navy }
                ]
              },
              options: withOpts({ scales: { y: { ticks: { callback: function (v) { return v + 'd'; } }, beginAtZero: true } } })
            }
          }]
        } : null,
        { kind: 'callout', tone: 'warn',
          title: 'Multi-trade economics',
          body: 'On the MF book, multi-trade jobs run <strong>' + ((mtKpis[0] && mtKpis[0].sub) || '+72.9%') + '</strong> on per-deal contract value but cost <strong>' + ((mtKpis[2] && mtKpis[2].sub) || '+15.9d') + '</strong> in cycle. The lift is real for any MF job over $150K. Below that, the cycle tax usually erases the margin gain. Use it as a deal-sizing rule, not a default.'
        }
      ].filter(Boolean)
    };

    // ─────────────────────────────────────────────────────────────
    // MARKETS
    // ─────────────────────────────────────────────────────────────
    var mkRows = (Tm.tbl_markets && safeArr(Tm.tbl_markets.rows)) || [];
    var topMkt = mkRows.slice().sort(function (a, b) { return b[2] - a[2]; })[0];
    var fastestMkt = mkRows.slice().filter(function (r) { return r[1] >= 5; }).sort(function (a, b) { return a[4] - b[4]; })[0];
    var slowestMkt = mkRows.slice().filter(function (r) { return r[1] >= 5; }).sort(function (a, b) { return b[4] - a[4]; })[0];
    var bigContractMkt = mkRows.slice().sort(function (a, b) { return b[3] - a[3]; })[0];

    mfPages.markets = {
      eyebrow: 'MARKETS · MF · ' + mkRows.length,
      title: 'Markets',
      intro: 'Every MF market with invoiced revenue YTD, ranked by dollars. Cycle and multi-trade metrics show where the model is healthy versus where it limps along.',
      sections: [
        { kind: 'kpi-row', cols: 4, items: [
            { label: 'Top Market',           value: topMkt ? topMkt[0] : '—',
              sub: topMkt ? fmt.money(topMkt[2]) + ' · ' + topMkt[1] + ' jobs · ' + topMkt[4] + 'd median' : '', tone: 'navy' },
            { label: 'Highest Avg Contract', value: bigContractMkt ? bigContractMkt[0] : '—',
              sub: bigContractMkt ? fmt.money(bigContractMkt[3]) + ' on ' + bigContractMkt[1] + ' jobs' : '', tone: 'success' },
            { label: 'Fastest Median',       value: fastestMkt ? fastestMkt[0] : '—',
              sub: fastestMkt ? fastestMkt[4] + 'd median complete · ' + fastestMkt[1] + ' jobs' : '', tone: 'success' },
            { label: 'Slowest Median',       value: slowestMkt ? slowestMkt[0] : '—',
              sub: slowestMkt ? slowestMkt[4] + 'd median · ' + slowestMkt[1] + ' jobs' : '',         tone: 'warn' }
        ]},
        (Cm.ch_mk_rev || Cm.ch_mk_days) ? {
          kind: 'chart-grid', cols: 2,
          charts: [
            Cm.ch_mk_rev ? {
              title: 'Revenue by Market',
              height: 380,
              config: {
                type: 'bar',
                data: { labels: Cm.ch_mk_rev.labels,
                  datasets: [{ data: Cm.ch_mk_rev.datasets[0].data, backgroundColor: pal.navy, label: 'Revenue' }] },
                options: withOpts({ indexAxis: 'y', scales: { x: moneyAxis() }, plugins: { legend: { display: false } } })
              }
            } : null,
            Cm.ch_mk_days ? {
              title: 'Median Days to Complete by Market',
              sub: 'Lower bars = faster crews and tighter sequencing',
              height: 380,
              config: {
                type: 'bar',
                data: { labels: Cm.ch_mk_days.labels,
                  datasets: [{ data: Cm.ch_mk_days.datasets[0].data,
                    backgroundColor: Cm.ch_mk_days.datasets[0].data.map(function (v) {
                      return v >= 70 ? pal.danger : v >= 50 ? pal.warning : pal.success;
                    }) }] },
                options: withOpts({
                  indexAxis: 'y',
                  scales: { x: { ticks: { callback: function (v) { return v + 'd'; } }, beginAtZero: true } },
                  plugins: { legend: { display: false } }
                })
              }
            } : null
          ].filter(Boolean)
        } : null,
        Tm.tbl_markets ? {
          kind: 'table', heading: 'All ' + mkRows.length + ' MF markets · full scorecard',
          caption: 'Sorted by revenue · MT % shows multi-trade attach rate',
          headers: Tm.tbl_markets.headers.map(function (h, i) { return { label: h, num: i > 0 }; }),
          rows: mkRows.map(function (r) {
            var medComp = r[4];
            return [
              { html: '<strong>' + r[0] + '</strong>' },
              r[1],
              fmt.money(r[2]),
              fmt.money(r[3]),
              { html: medComp >= 70 ? '<span class="pill pill-danger">' + medComp + 'd</span>' : medComp >= 50 ? '<span class="pill pill-warn">' + medComp + 'd</span>' : '<span class="pill pill-success">' + medComp + 'd</span>' },
              r[5] + 'd', r[6], r[7], r[8]
            ];
          })
        } : null,
        fastestMkt ? {
          kind: 'callout', tone: 'success',
          title: fastestMkt[0] + ': cycle leader',
          body: '<strong>' + fastestMkt[4] + '-day</strong> median complete on ' + fastestMkt[1] + ' jobs at <strong>' + fmt.money(fastestMkt[3]) + '</strong> avg contract. That speed-to-finish is what every other MF market should benchmark against, not the residential book.'
        } : null
      ].filter(Boolean)
    };

    // ─────────────────────────────────────────────────────────────
    // PMs
    // ─────────────────────────────────────────────────────────────
    var pmRows = (Tm.tbl_pms && safeArr(Tm.tbl_pms.rows)) || [];
    var topPm = pmRows[0];
    var top5PmRev = pmRows.slice(0, 5).reduce(function (s, r) { return s + (r[3] || 0); }, 0);
    var top5PmShare = totalRev > 0 ? (top5PmRev / totalRev * 100) : 0;
    var slowHighVolPm = pmRows.slice().filter(function (r) { return r[1] >= 10; }).sort(function (a, b) { return b[5] - a[5]; })[0];

    mfPages.pms = {
      eyebrow: 'PROJECT MANAGERS · MF',
      title: 'Project Managers',
      intro: pmRows.length + ' active MF PMs. Where revenue concentrates, who is fast on cycle, and which combinations of volume + speed are actually scaling.',
      sections: [
        { kind: 'kpi-row', cols: 4, items: [
            { label: 'Active PMs',     value: pmRows.length + '', sub: '5+ WOs each', tone: 'navy' },
            { label: 'Top PM',         value: topPm ? topPm[0] : '—',
              sub: topPm ? fmt.money(topPm[3]) + ' · ' + topPm[1] + ' WOs · ' + topPm[5] + 'd median' : '', tone: 'success' },
            { label: 'Top 5 PM Share', value: top5PmShare.toFixed(0) + '%', sub: 'of MF YTD revenue', tone: top5PmShare > 80 ? 'warn' : 'navy' },
            { label: 'Slowest High-Vol PM', value: slowHighVolPm ? slowHighVolPm[5] + 'd' : '—',
              sub: slowHighVolPm ? slowHighVolPm[0] + ' · ' + slowHighVolPm[1] + ' WOs' : '', tone: 'warn' }
        ]},
        Cm.ch_pm_top ? {
          kind: 'chart-grid', cols: 1,
          charts: [{
            title: 'Top PMs by Fractional Revenue',
            sub: 'Each PM\'s share of YTD invoiced revenue',
            height: Math.max(360, pmRows.length * 28),
            config: {
              type: 'bar',
              data: { labels: Cm.ch_pm_top.labels,
                datasets: [{ data: Cm.ch_pm_top.datasets[0].data, backgroundColor: pal.navy, label: 'Fractional Revenue' }] },
              options: withOpts({ indexAxis: 'y', scales: { x: moneyAxis() }, plugins: { legend: { display: false } } })
            }
          }]
        } : null,
        pmRows.length ? {
          kind: 'chart-grid', cols: 1,
          charts: [{
            title: 'Revenue vs Cycle Speed (' + pmRows.length + ' MF PMs)',
            sub: 'Top-left = best (high revenue, fast cycle) · Bottom-right = worst (low revenue, slow cycle)',
            height: 380,
            config: {
              type: 'scatter',
              data: {
                datasets: [{
                  label: 'PMs',
                  data: pmRows.map(function (r) { return { x: r[5], y: r[3], wos: r[1], pm: r[0] }; }),
                  backgroundColor: pal.navy,
                  pointRadius: pmRows.map(function (r) { return Math.max(4, Math.min(18, Math.sqrt(r[1]) + 2)); }),
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
          }]
        } : null,
        Tm.tbl_pms ? {
          kind: 'table', heading: 'All ' + pmRows.length + ' MF PMs · ranked by revenue',
          headers: Tm.tbl_pms.headers.map(function (h, i) { return { label: h, num: i > 0 }; }),
          rows: pmRows.map(function (r) {
            return [
              { html: '<strong>' + r[0] + '</strong>' },
              r[1], r[2], fmt.money(r[3]), fmt.money(r[4]),
              { html: r[5] >= 80 ? '<span class="pill pill-danger">' + r[5] + 'd</span>' : r[5] >= 50 ? '<span class="pill pill-warn">' + r[5] + 'd</span>' : '<span class="pill pill-success">' + r[5] + 'd</span>' },
              r[6] + 'd'
            ];
          })
        } : null,
        slowHighVolPm ? {
          kind: 'callout', tone: 'warn',
          title: slowHighVolPm[0] + ': volume-cycle paradox',
          body: '<strong>' + slowHighVolPm[1] + ' WOs</strong>, <strong>' + fmt.money(slowHighVolPm[3]) + '</strong> revenue, <strong>' + slowHighVolPm[5] + '-day</strong> median complete. Big book of work but the slowest high-volume PM in the network. Pair the book to a faster cycle PM in a structured shadow-then-handoff before adding any new MF jobs to their queue.'
        } : null
      ].filter(Boolean)
    };

    // ─────────────────────────────────────────────────────────────
    // WORK TYPES
    // ─────────────────────────────────────────────────────────────
    var wtRows = (Tm.tbl_worktypes && safeArr(Tm.tbl_worktypes.rows)) || [];

    mfPages['work-types'] = {
      eyebrow: 'WORK TYPES · MF',
      title: 'Work Types',
      intro: 'Trade mix on the MF book. Roofing dominates the dollar share but the cycle dynamics shift sharply by trade.',
      sections: [
        wtRows.length ? {
          kind: 'kpi-row', cols: Math.min(wtRows.length, 4),
          items: wtRows.slice(0, 4).map(function (r, i) {
            return {
              label: r[0], value: fmt.money(r[2], { short: true }),
              sub: r[1] + ' WOs · ' + r[4] + 'd median',
              tone: i === 0 ? 'navy' : (r[4] >= 70 ? 'warn' : 'navy')
            };
          })
        } : null,
        (Cm.ch_wt_pie || Cm.ch_wt_days) ? {
          kind: 'chart-grid', cols: 2,
          charts: [
            Cm.ch_wt_pie ? {
              title: 'Revenue Share by Work Type',
              height: 320,
              config: {
                type: 'doughnut',
                data: { labels: Cm.ch_wt_pie.labels,
                  datasets: [{ data: Cm.ch_wt_pie.datasets[0].data,
                    backgroundColor: Cm.ch_wt_pie.labels.map(function (_, i) { return FZ.color ? FZ.color(i) : (i === 0 ? pal.navy : i === 1 ? pal.success : i === 2 ? pal.warning : pal.danger); }),
                    borderColor: '#fff', borderWidth: 2 }] },
                options: withOpts({
                  cutout: '60%',
                  plugins: {
                    legend: { position: 'right' },
                    tooltip: { callbacks: { label: function (c) { return c.label + ': ' + fmt.money(c.parsed); } } }
                  }
                })
              }
            } : null,
            Cm.ch_wt_days ? {
              title: 'Median Days to Complete by Work Type',
              sub: 'Where the cycle drag actually lives',
              height: 320,
              config: {
                type: 'bar',
                data: { labels: Cm.ch_wt_days.labels,
                  datasets: [{ data: Cm.ch_wt_days.datasets[0].data,
                    backgroundColor: Cm.ch_wt_days.datasets[0].data.map(function (v) {
                      return v >= 80 ? pal.danger : v >= 50 ? pal.warning : pal.success;
                    }) }] },
                options: withOpts({
                  indexAxis: 'y',
                  scales: { x: { ticks: { callback: function (v) { return v + 'd'; } }, beginAtZero: true } },
                  plugins: { legend: { display: false } }
                })
              }
            } : null
          ].filter(Boolean)
        } : null,
        Tm.tbl_worktypes ? {
          kind: 'table', heading: 'All MF work types · full detail',
          headers: Tm.tbl_worktypes.headers.map(function (h, i) { return { label: h, num: i > 0 }; }),
          rows: wtRows.map(function (r) {
            return [{ html: '<strong>' + r[0] + '</strong>' }, r[1], fmt.money(r[2]), fmt.money(r[3]), r[4] + 'd'];
          })
        } : null,
        { kind: 'callout', tone: 'info', title: 'Trade lever choice',
          body: 'Where one trade is materially slower than the others, the lever is dedicated crew rotation, not pricing. On MF, schedule density and crew mix are the only two variables that move the cycle median.' }
      ].filter(Boolean)
    };

    // ─────────────────────────────────────────────────────────────
    // CREATORS
    // ─────────────────────────────────────────────────────────────
    var crRows = (Tm.tbl_creators && safeArr(Tm.tbl_creators.rows)) || [];
    var topCr = crRows[0];
    var top3Cr = crRows.slice(0, 3).reduce(function (s, r) { return s + (r[2] || 0); }, 0);
    var top3CrShare = totalRev > 0 ? (top3Cr / totalRev * 100) : 0;
    var bestMtCreator = crRows.slice().sort(function (a, b) { return (b[6] || 0) - (a[6] || 0); })[0];

    mfPages.creators = {
      eyebrow: 'CREATED BY · MF',
      title: 'Created By',
      intro: crRows.length + ' creators are responsible for every MF job in the YTD book. The creator-by-market network shows where each one\'s book actually lives.',
      sections: [
        { kind: 'kpi-row', cols: 4, items: [
            { label: 'Active Creators', value: crRows.length + '', sub: '5+ jobs each', tone: 'navy' },
            { label: 'Top Creator',     value: topCr ? topCr[0] : '—',
              sub: topCr ? topCr[1] + ' jobs · ' + fmt.money(topCr[2]) + ' · ' + topCr[4] + 'd median' : '', tone: 'success' },
            { label: 'Top 3 Share',     value: top3CrShare.toFixed(0) + '%',
              sub: 'of MF YTD revenue', tone: top3CrShare > 80 ? 'warn' : 'navy' },
            { label: 'Highest MT %',    value: bestMtCreator ? bestMtCreator[0] : '—',
              sub: bestMtCreator ? (bestMtCreator[6] || 0).toFixed(1) + '% multi-trade attach' : '', tone: 'success' }
        ]},
        (Cm.ch_cb_vol || Cm.ch_cb_eff) ? {
          kind: 'chart-grid', cols: 2,
          charts: [
            Cm.ch_cb_vol ? {
              title: 'Volume by Creator',
              height: 300,
              config: {
                type: 'bar',
                data: { labels: Cm.ch_cb_vol.labels,
                  datasets: [{ data: Cm.ch_cb_vol.datasets[0].data, backgroundColor: pal.navy, label: 'Jobs' }] },
                options: withOpts({ plugins: { legend: { display: false } } })
              }
            } : null,
            Cm.ch_cb_eff ? {
              title: 'Cycle Efficiency by Creator',
              sub: 'Median complete days · lower is better',
              height: 300,
              config: {
                type: 'bar',
                data: { labels: Cm.ch_cb_eff.labels,
                  datasets: [{ data: Cm.ch_cb_eff.datasets[0].data,
                    backgroundColor: Cm.ch_cb_eff.datasets[0].data.map(function (v) {
                      return v >= 80 ? pal.danger : v >= 50 ? pal.warning : pal.success;
                    }) }] },
                options: withOpts({ scales: { y: { ticks: { callback: function (v) { return v + 'd'; } }, beginAtZero: true } }, plugins: { legend: { display: false } } })
              }
            } : null
          ].filter(Boolean)
        } : null,
        Cm.ch_cb_scatter ? {
          kind: 'chart-grid', cols: 1,
          charts: [{
            title: 'Revenue vs Cycle Speed (Creators)',
            sub: 'Bubble size = job volume',
            height: 360,
            config: {
              type: 'scatter',
              data: {
                datasets: [{
                  label: 'Creators',
                  data: crRows.map(function (r) { return { x: r[4], y: r[2], jobs: r[1], cr: r[0] }; }),
                  backgroundColor: pal.navy,
                  pointRadius: crRows.map(function (r) { return Math.max(5, Math.min(20, Math.sqrt(r[1] || 1) + 2)); })
                }]
              },
              options: withOpts({
                plugins: {
                  legend: { display: false },
                  tooltip: { callbacks: { label: function (c) {
                    var p = c.raw;
                    return p.cr + ': ' + fmt.money(p.y) + ' on ' + p.jobs + ' jobs · ' + p.x + 'd median';
                  } } }
                },
                scales: {
                  x: { title: { display: true, text: 'Median Complete (days)' }, beginAtZero: true },
                  y: Object.assign({ title: { display: true, text: 'Revenue' } }, moneyAxis())
                }
              })
            }
          }]
        } : null,
        Tm.tbl_creators ? {
          kind: 'table', heading: 'All ' + crRows.length + ' MF creators',
          headers: Tm.tbl_creators.headers.map(function (h, i) { return { label: h, num: i > 0 }; }),
          rows: crRows.map(function (r) {
            return [
              { html: '<strong>' + r[0] + '</strong>' },
              r[1],
              fmt.money(r[2]),
              fmt.money(r[3]),
              { html: r[4] >= 80 ? '<span class="pill pill-danger">' + r[4] + 'd</span>' : r[4] >= 50 ? '<span class="pill pill-warn">' + r[4] + 'd</span>' : '<span class="pill pill-success">' + r[4] + 'd</span>' },
              r[5] + 'd',
              (r[6] || 0).toFixed(1) + '%',
              fmt.money(r[7])
            ];
          })
        } : null,
        Tm.creatorMarketHeatmap ? (function () {
          var hmTbl = Tm.creatorMarketHeatmap;
          var headers = hmTbl.headers || [];
          var rows = hmTbl.rows || [];
          // Build simple HTML heatmap rows: shade by row max
          var rowMaxByIdx = rows.map(function (r) { return Math.max.apply(null, r.slice(1, -1).map(function (v) { return Number(v) || 0; })); });
          return {
            kind: 'table',
            heading: 'Creator × market footprint',
            caption: 'Counts of jobs per market for each creator',
            headers: headers.map(function (h, i) { return { label: h, num: i > 0 }; }),
            rows: rows.map(function (r, idx) {
              var rowMax = rowMaxByIdx[idx] || 1;
              return r.map(function (v, i) {
                if (i === 0) return { html: '<strong>' + v + '</strong>' };
                if (i === r.length - 1) return { html: '<strong>' + v + '</strong>' };
                if (!v) return '·';
                var pct = Number(v) / rowMax;
                var bg = pct >= 0.85 ? '#1f2d4b' : pct >= 0.55 ? '#385378' : pct >= 0.30 ? '#6a85a8' : pct >= 0.15 ? '#a3b6cf' : pct >= 0.05 ? '#d4dde9' : '#f1f4f9';
                var fg = pct >= 0.55 ? '#fff' : '#1f2d4b';
                return { html: '<span style="display:inline-block; min-width:32px; padding:3px 6px; background:' + bg + '; color:' + fg + '; border-radius:4px; text-align:center;">' + v + '</span>' };
              });
            })
          };
        })() : null,
        topCr ? {
          kind: 'callout', tone: 'success',
          title: topCr[0] + ' is the MF anchor',
          body: '<strong>' + topCr[1] + '</strong> jobs, <strong>' + fmt.money(topCr[2]) + '</strong> revenue, <strong>' + topCr[4] + '-day</strong> median, <strong>' + (topCr[6] || 0).toFixed(1) + '%</strong> multi-trade attach. That combination is the MF playbook. Use the heatmap above to see which markets to expand into next.'
        } : null
      ].filter(Boolean)
    };

    // ─────────────────────────────────────────────────────────────
    // FINDINGS (Areas of Concern + Watch List + Positives)
    // ─────────────────────────────────────────────────────────────
    var areas = safeArr(commentary.areasOfConcern);
    var watch = safeArr(commentary.watchList);
    var positives = safeArr(commentary.positivesToBuildOn);

    mfPages.findings = {
      eyebrow: 'FINDINGS · MF',
      title: 'Findings',
      intro: 'The narrative read of the MF Installs YTD data: where margin is leaking, what to watch, and what is working that we should institutionalize.',
      tags: [
        { kind: 'danger',  text: areas.length + ' areas of concern' },
        { kind: 'warn',    text: watch.length + ' watch list' },
        { kind: 'success', text: positives.length + ' positives' }
      ],
      sections: [
        (areas.length || watch.length || positives.length) ? {
          kind: 'prose', heading: 'Three-column read',
          cols: 3,
          cards: [
            areas.length ? {
              kind: 'tint', eyebrow: 'AREAS OF CONCERN',
              list: areas.map(function (t) { return { text: t, tone: 'danger', icon: '!' }; })
            } : null,
            watch.length ? {
              eyebrow: 'WATCH LIST',
              list: watch.map(function (t) { return { text: t, tone: 'warn', icon: '⚠' }; })
            } : null,
            positives.length ? {
              kind: 'tint', eyebrow: 'POSITIVES TO BUILD ON',
              list: positives.map(function (t) { return { text: t, tone: 'success', icon: '✓' }; })
            } : null
          ].filter(Boolean)
        } : { kind: 'callout', tone: 'info', title: 'No findings yet',
              body: 'The Installs YTD calculator has not yet emitted commentary for this refresh. Drop the latest <code>Commercial Completed Jobs YTD</code> XLSX into <code>inputs/multi-family/installs-ytd/</code> and rerun the build.' },
        { kind: 'callout', title: 'How to use this page',
          body: 'Each Areas-of-Concern bullet should have a single owner with a 30-day commitment. Watch-list items convert to a metric owner. Positives become standard operating procedure documentation. Print the three columns side-by-side for the next MF operations review.' }
      ].filter(Boolean)
    };

    return mfPages;
  }

  // ============================================================
  window.FZ_PAGE_DEFS = window.FZ_PAGE_DEFS || {};
  window.FZ_PAGE_DEFS['installs-ytd'] = pages;
})();
