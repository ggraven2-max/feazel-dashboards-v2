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

  // ---- derived context (every figure below comes from the payload) ----
  var hm = D.headerMeta || {};
  var totalRev = hm.trueRevenue || 0;
  var monthly = D.monthly || [];
  var tc = FZ.timeContext();
  var mtK = D.kpisMultiTrade || [];
  var mtLiftTxt = (mtK[0] && mtK[0].sub) || 'lift vs single-trade';
  var mtGapTxt = (mtK[2] && mtK[2].value) || '—';

  var bestMonth = monthly.slice().sort(function (a, b) { return (b.rev || 0) - (a.rev || 0); })[0] || null;
  var firstMonth = monthly[0] || null;
  var fastestMonth = monthly.slice().filter(function (m) { return m.med != null; })
    .sort(function (a, b) { return a.med - b.med; })[0] || null;

  var mkRows = (T.tbl_markets && T.tbl_markets.rows) || [];
  var topMkt = mkRows.slice().sort(function (a, b) { return b[2] - a[2]; })[0] || null;
  var mkEligible = mkRows.filter(function (r) { return r[1] >= 25; });
  var fastestMkt = mkEligible.slice().sort(function (a, b) { return a[4] - b[4]; })[0] || null;
  var slowestMkt = mkEligible.slice().sort(function (a, b) { return b[4] - a[4]; })[0] || null;
  var bigContractMkt = mkEligible.slice().sort(function (a, b) { return b[3] - a[3]; })[0]
    || mkRows.slice().sort(function (a, b) { return b[3] - a[3]; })[0] || null;
  var topMktRevShare = (topMkt && totalRev > 0) ? (topMkt[2] / totalRev * 100) : 0;
  var totalMkJobs = mkRows.reduce(function (s, r) { return s + (r[1] || 0); }, 0);
  var topMktJobShare = (topMkt && totalMkJobs > 0) ? (topMkt[1] / totalMkJobs * 100) : 0;

  // MT-vs-ST cycle gaps by market (r[7] = MT median, r[8] = ST median)
  var gapRows = mkEligible.filter(function (r) { return r[7] > 0 && r[8] > 0; })
    .map(function (r) { return { name: r[0], mt: r[7], st: r[8], gap: r[7] - r[8] }; })
    .sort(function (a, b) { return b.gap - a.gap; });
  var worstGaps = gapRows.slice(0, 3);
  var bestGap = gapRows.length ? gapRows[gapRows.length - 1] : null;

  var pmRows = (T.tbl_pms && T.tbl_pms.rows) || [];
  var topPm = pmRows[0] || null;
  var top5PmShare = totalRev > 0
    ? pmRows.slice(0, 5).reduce(function (s, r) { return s + (r[3] || 0); }, 0) / totalRev * 100 : 0;
  var byWoVolume = pmRows.slice().sort(function (a, b) { return b[1] - a[1]; });
  var slowHighVolPm = byWoVolume.slice(0, 5).sort(function (a, b) { return b[5] - a[5]; })[0] || null;
  var fastHighVolPm = byWoVolume.slice(0, 10).sort(function (a, b) { return a[5] - b[5]; })[0] || null;

  var wtRows = (T.tbl_worktypes && T.tbl_worktypes.rows) || [];
  var wtTotalRev = wtRows.reduce(function (s, r) { return s + (r[2] || 0); }, 0);
  var roofRow = wtRows.filter(function (r) { return /roof/i.test(r[0]); })[0] || wtRows[0] || null;
  var gutterRow = wtRows.filter(function (r) { return /gutter/i.test(r[0]); })[0] || null;
  var roofShare = (roofRow && wtTotalRev > 0) ? (roofRow[2] / wtTotalRev * 100) : 0;
  var gutterSlowPct = (roofRow && gutterRow && roofRow[4] > 0)
    ? ((gutterRow[4] / roofRow[4]) - 1) * 100 : 0;

  var crRows = (T.tbl_creators && T.tbl_creators.rows) || [];
  var topCr = crRows[0] || null;
  var top3CrShare = totalRev > 0
    ? crRows.slice(0, 3).reduce(function (s, r) { return s + (r[2] || 0); }, 0) / totalRev * 100 : 0;
  var bestMtCr = crRows.slice().sort(function (a, b) { return (b[6] || 0) - (a[6] || 0); })[0] || null;

  var heatHeaders = (T.creatorMarketHeatmap && T.creatorMarketHeatmap.headers) || [];
  var heatDataRows = ((T.creatorMarketHeatmap && T.creatorMarketHeatmap.rows) || [])
    .filter(function (r) { return !/^total$/i.test(String(r[0])); });
  var heatFactsAll = heatDataRows.map(function (r) {
    var total = Number(r[r.length - 1]) || 0;
    var maxIdx = 1, maxVal = 0, presence = 0;
    for (var i = 1; i < r.length - 1; i++) {
      var v = Number(r[i]) || 0;
      if (v > 0) presence++;
      if (v > maxVal) { maxVal = v; maxIdx = i; }
    }
    return { name: r[0], total: total, topMarket: heatHeaders[maxIdx] || '', topCount: maxVal,
             topPct: total > 0 ? maxVal / total * 100 : 0, presence: presence };
  }).filter(function (f) { return f.total >= 5; });
  var mostConcentratedCr = heatFactsAll.slice().sort(function (a, b) { return b.topPct - a.topPct; })[0] || null;
  var mostSpreadCr = heatFactsAll.slice().sort(function (a, b) { return b.presence - a.presence; })[0] || null;

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
    eyebrow: 'INVOICED PRODUCTION · YTD ' + tc.year,
    title: 'Residential Installs YTD',
    intro: 'What is actually closing. ' + fmt.num(hm.uniqueJobs || 0) + ' unique jobs invoiced for ' + fmt.money(totalRev, { short: true })
      + (firstMonth && fastestMonth && firstMonth.med != null ? ', with the cycle moving from ' + firstMonth.med.toFixed(0) + ' days in ' + firstMonth.label + ' to ' + fastestMonth.med.toFixed(0) + ' days in ' + fastestMonth.label : '')
      + '. The multi-trade premium is real (' + ((mtK[0] && mtK[0].value) || '—') + ' vs ' + ((mtK[1] && mtK[1].value) || '—') + ') but pays a ' + mtGapTxt + ' cycle tax. Use the sub-tabs above to drill into PMs, markets, work types, and the creator-by-market network.',
    tags: [
      bestMonth ? { kind: 'success', text: bestMonth.label + ': ' + fmt.money(bestMonth.rev, { short: true }) + (bestMonth.med != null ? ' / ' + bestMonth.med.toFixed(0) + 'd' : '') } : null,
      { kind: 'info', text: 'Refreshed ' + FZ.formatBuiltAt({ dateOnly: true }) }
    ].filter(Boolean),
    sections: [
      {
        kind: 'kpi-row', cols: 4,
        items: FZ.kpiRow(D, ['True Revenue', 'Avg Contract Value', 'Median Days to Complete', 'Avg Days to Start'],
          { 'True Revenue': 'navy', 'Median Days to Complete': 'success', 'Avg Days to Start': 'warn' })
      },
      {
        kind: 'kpi-row', cols: 3,
        items: FZ.kpiRow(D.kpisMultiTrade, ['Multi-Trade Avg Contract', 'Single-Trade Avg Contract', 'Completion Time Gap'],
          { 'Multi-Trade Avg Contract': 'success', 'Completion Time Gap': 'warn' })
      },
      {
        kind: 'chart-grid', cols: 2, heading: 'The Trajectory',
        caption: 'Revenue and cycle moving together' + (bestMonth ? ', ' + bestMonth.label + ' is the high-water mark' : ''),
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
            sub: topMkt ? topMkt[0] + ' carries ' + topMktRevShare.toFixed(0) + '% of YTD revenue' : 'Ranked by invoiced dollars',
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
            sub: roofRow ? roofRow[0] + ' is the dominant pillar at ' + roofShare.toFixed(0) + '% of revenue' : 'Revenue mix by trade',
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
          { kind: 'tint', eyebrow: 'WHAT IS WORKING', title: (bestMonth ? bestMonth.label : 'The best month') + ' delivered the playbook',
            body: '<p>' + (bestMonth ? bestMonth.label + ' invoiced <strong>' + fmt.money(bestMonth.rev, { short: true }) + ' across ' + bestMonth.jobs + ' jobs</strong>' + (bestMonth.med != null ? ' at a <strong>' + bestMonth.med.toFixed(1) + '-day median</strong>' : '') + ': the strongest revenue month in the book. ' : '')
              + (firstMonth && fastestMonth && firstMonth.med != null ? 'The cycle moved from ' + firstMonth.med.toFixed(0) + ' days in ' + firstMonth.label + ' to ' + fastestMonth.med.toFixed(0) + ' days in ' + fastestMonth.label + ' as monthly volume grew. ' : '')
              + 'Codify and run it as the forward production playbook.</p>' },
          { eyebrow: 'WHERE IT BREAKS', title: (slowestMkt ? slowestMkt[0] : 'Slowest market') + ' cycle drag',
            body: '<p>' + (slowestMkt ? slowestMkt[0] + ' runs a <strong>' + slowestMkt[4] + '-day median complete</strong> on ' + slowestMkt[1] + ' jobs, well above the ' + (hm.medianComplete || 0) + '-day company median. Its multi-trade gap is ' + (slowestMkt[7] && slowestMkt[8] ? (slowestMkt[7] - slowestMkt[8]).toFixed(1) + ' days (' + slowestMkt[7] + 'd MT vs ' + slowestMkt[8] + 'd ST). ' : 'wide. ') : '')
              + (slowHighVolPm ? slowHighVolPm[0] + ' carries ' + slowHighVolPm[1] + ' WOs at a ' + slowHighVolPm[5] + '-day median, top-volume PM, slowest by cycle. ' : '')
              + 'This is sequencing, not workload.</p>' },
          { kind: 'navy', eyebrow: 'NEXT MOVES', title: 'Three pairings to chase',
            body: '<p>' + (slowHighVolPm && fastHighVolPm && slowHighVolPm[0] !== fastHighVolPm[0] ? 'Pair ' + slowHighVolPm[0] + '\'s book to ' + fastHighVolPm[0] + ' (' + fastHighVolPm[5] + 'd median on ' + fastHighVolPm[1] + ' WOs) in a structured shadow-then-handoff. ' : 'Pair the slowest high-volume PM book to the fastest one in a structured shadow-then-handoff. ')
              + (gutterRow ? 'Pilot a dedicated ' + gutterRow[0].toLowerCase() + ' rotation in the highest-volume markets. ' : '')
              + (fastestMkt ? 'Decode and replicate ' + fastestMkt[0] + ' (' + fastestMkt[4] + 'd median, ' + fmt.money(fastestMkt[3]) + ' avg contract) in the slower markets.' : '') + '</p>' }
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
            sub: fmt.num(hm.multiTradeJobs || 0) + ' multi-trade jobs (' + fmt.pct(hm.multiTradePct || 0) + '), ' + fmt.num(hm.singleTradeJobs || 0) + ' single-trade',
            height: 120,
            config: {
              type: 'bar',
              data: {
                labels: ['YTD Job Mix'],
                datasets: [
                  { label: 'Multi-Trade', data: [hm.multiTradeJobs || 0], backgroundColor: pal.navy, stack: 'a' },
                  { label: 'Single-Trade', data: [hm.singleTradeJobs || 0], backgroundColor: pal.blue, stack: 'a' }
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
        body: 'The ' + (hm.medianComplete || 0) + '-day median completes against an industry expectation of 21 to 28 days for residential roofing. The variance is wide: '
          + (fastestMonth && fastestMonth.med != null ? fastestMonth.label + ' ran a ' + fastestMonth.med.toFixed(0) + 'd median' : 'the fastest month runs well under the median')
          + (slowestMkt ? ' while ' + slowestMkt[0] + ' sits at ' + slowestMkt[4] + 'd' : '')
          + '. The multi-trade lift is the largest single revenue lever we are not pulling intentionally.'
      }
    ]
  };

  // ============================================================
  // TRENDS
  // ============================================================
  pages.trends = {
    eyebrow: 'MONTHLY TRENDS',
    title: 'Monthly Trends',
    intro: monthly.length + ' months of invoiced production. The story is volume up, cycle down, all in the same window.',
    sections: [
      monthly.length ? {
        kind: 'kpi-row', cols: Math.min(monthly.length, 4),
        items: monthly.map(function (m) {
          return {
            label: m.label,
            value: fmt.money(m.rev || 0, { short: true }),
            sub: (m.jobs || 0) + ' jobs' + (m.med != null ? ' · ' + m.med.toFixed(0) + 'd median' : ''),
            tone: bestMonth && m.label === bestMonth.label ? 'success' : undefined
          };
        })
      } : null,
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
      bestMonth ? {
        kind: 'callout', tone: 'success',
        title: bestMonth.label + ' is the proof',
        body: 'Hitting ' + fmt.money(bestMonth.rev, { short: true }) + (bestMonth.med != null ? ' at a ' + bestMonth.med.toFixed(1) + '-day median' : '') + ' across ' + bestMonth.jobs + ' jobs in one month is the playbook. Document the schedule density, the crew utilization, and the start-to-complete handoff. Forward capacity planning should assume we can run this pace with the right sequencing.'
      } : null
    ].filter(Boolean)
  };

  // ============================================================
  // MULTI-TRADE
  // ============================================================
  pages['multi-trade'] = {
    eyebrow: 'MULTI-TRADE MIX',
    title: 'Multi-Trade Mix',
    intro: 'Multi-trade jobs lift the average ticket (' + mtLiftTxt + ') but cost an extra ' + mtGapTxt + ' in cycle time. Where the lift is real and where the cycle tax kills it.',
    tags: [{ kind: 'success', text: mtLiftTxt }, { kind: 'warn', text: mtGapTxt + ' cycle tax' }],
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
            sub: (C.ch_mt_by_market.labels.length >= 2 ? C.ch_mt_by_market.labels[0] + ' and ' + C.ch_mt_by_market.labels[1] + ' lead attach rates' : 'Attach rate by market'),
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
            sub: 'The cycle penalty for adding a trade' + (worstGaps.length ? ', ' + worstGaps.map(function (g) { return g.name; }).join(', ') + ' are the worst offenders' : ''),
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
      worstGaps.length ? {
        kind: 'callout', tone: 'warn',
        title: 'The ' + worstGaps.map(function (g) { return g.name; }).join(' / ') + ' problem',
        body: 'These markets have the largest MT-vs-ST cycle gap ('
          + worstGaps.map(function (g) { return g.name + ' ' + g.mt + 'd vs ' + g.st + 'd'; }).join(', ') + '). '
          + (bestGap ? 'The ' + bestGap.name + ' playbook (MT ' + bestGap.mt + 'd vs ST ' + bestGap.st + 'd) shows it is solvable with crew rotation and scheduling discipline. ' : '')
          + 'Replicate before adding any new MT capacity.'
      } : null
    ].filter(Boolean)
  };

  // ============================================================
  // MARKETS
  // ============================================================
  pages.markets = {
    eyebrow: 'MARKETS · ALL ' + mkRows.length,
    title: 'Markets',
    intro: 'Every market that has invoiced revenue YTD, ranked by dollars. The cycle and multi-trade metrics tell you where the model is healthy versus where it is held together with grit.',
    sections: [
      {
        kind: 'kpi-row', cols: 4,
        items: [
          { label: 'Top Market',           value: topMkt ? topMkt[0] : '—',
            sub: topMkt ? fmt.money(topMkt[2], { short: true }) + ' · ' + topMkt[1] + ' jobs · ' + topMkt[4] + 'd median' : '', tone: 'navy' },
          { label: 'Highest Avg Contract', value: bigContractMkt ? bigContractMkt[0] : '—',
            sub: bigContractMkt ? fmt.money(bigContractMkt[3]) + ' on ' + bigContractMkt[1] + ' jobs' : '', tone: 'success' },
          { label: 'Fastest Median',       value: fastestMkt ? fastestMkt[0] : '—',
            sub: fastestMkt ? fastestMkt[4] + 'd median complete on ' + fastestMkt[1] + ' jobs' : '', tone: 'success' },
          { label: 'Slowest Median',       value: slowestMkt ? slowestMkt[0] : '—',
            sub: slowestMkt ? slowestMkt[4] + 'd on ' + slowestMkt[1] + ' jobs' : '', tone: 'warn' }
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
        caption: mkRows.length + ' markets sorted by revenue',
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
      fastestMkt ? {
        kind: 'callout', tone: 'success',
        title: fastestMkt[0] + ' is the model',
        body: fastestMkt[0] + ': ' + fastestMkt[4] + '-day median complete, ' + fastestMkt[6] + '% multi-trade attach, ' + fmt.money(fastestMkt[3], { short: true }) + ' average contract on ' + fastestMkt[1] + ' jobs. Best-balanced market in the network. Use it as the playbook reference for the slowest markets' + (slowestMkt && slowestMkt[0] !== fastestMkt[0] ? ', starting with ' + slowestMkt[0] : '') + '.'
      } : null
    ].filter(Boolean)
  };

  // ============================================================
  // PMS
  // ============================================================
  pages.pms = {
    eyebrow: 'PROJECT MANAGERS',
    title: 'Project Managers',
    intro: 'All ' + pmRows.length + ' active PMs (5+ WOs). Where revenue concentrates, where cycle is fast, and which combinations of volume + speed actually scale.',
    sections: [
      {
        kind: 'kpi-row', cols: 4,
        items: [
          { label: 'Active PMs',     value: String(pmRows.length), sub: 'WOs ≥ 5', tone: 'navy' },
          { label: 'Top PM Revenue', value: topPm ? fmt.money(topPm[3], { short: true }) : '—',
            sub: topPm ? topPm[0] + ' · ' + topPm[1] + ' WOs · ' + topPm[5] + 'd median' : '' },
          { label: 'Top 5 PM Share', value: top5PmShare.toFixed(0) + '%',
            sub: 'of ' + fmt.money(totalRev, { short: true }) + ' YTD' },
          { label: 'Slowest High-Vol PM', value: slowHighVolPm ? slowHighVolPm[5] + 'd' : '—',
            sub: slowHighVolPm ? slowHighVolPm[0] + ' · ' + slowHighVolPm[1] + ' WOs' : '', tone: 'warn' }
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
            title: 'Revenue vs Cycle Speed (all ' + pmRows.length + ' PMs)',
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
        kind: 'table', heading: 'All ' + pmRows.length + ' PMs · ranked by revenue',
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
      slowHighVolPm ? {
        kind: 'callout', tone: 'warn',
        title: slowHighVolPm[0] + ': the volume-cycle paradox',
        body: slowHighVolPm[1] + ' WOs, ' + fmt.money(slowHighVolPm[3], { short: true }) + ' revenue, ' + slowHighVolPm[5] + '-day median complete. Top-volume PM but the slowest high-volume PM in the network. The fix is sequencing, not removing volume.'
          + (fastHighVolPm && fastHighVolPm[0] !== slowHighVolPm[0] ? ' Pair the book to ' + fastHighVolPm[0] + ' (' + fastHighVolPm[5] + 'd median) in a structured shadow-then-handoff.' : '')
      } : null
    ].filter(Boolean)
  };

  // ============================================================
  // WORK TYPES
  // ============================================================
  pages['work-types'] = {
    eyebrow: 'WORK TYPES',
    title: 'Work Types',
    intro: (roofRow ? roofRow[0] + ' carries ' + roofShare.toFixed(0) + '% of the revenue, but the cycle dynamics differ sharply by trade. ' : 'The cycle dynamics differ sharply by trade. ')
      + (gutterRow && gutterSlowPct > 0 ? gutterRow[0] + ' runs ' + gutterSlowPct.toFixed(0) + '% slower than ' + (roofRow ? roofRow[0].toLowerCase() : 'the lead trade') + ' on a fraction of the ticket size.' : ''),
    sections: [
      {
        kind: 'kpi-row', cols: 4,
        items: wtRows.slice(0, 3).map(function (r, i) {
          return {
            label: r[0],
            value: fmt.money(r[2], { short: true }),
            sub: r[1] + ' WOs · ' + r[4] + 'd median',
            tone: i === 0 ? 'navy' : (i === 1 ? 'warn' : undefined)
          };
        }).concat([{
          label: 'All Other',
          value: fmt.money(wtRows.slice(3).reduce(function (a, r) { return a + (r[2] || 0); }, 0), { short: true }),
          sub: wtRows.length > 3 ? (wtRows.length - 3) + ' smaller trades' : 'No other trades'
        }])
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
      (gutterRow && roofRow && gutterSlowPct > 0) ? {
        kind: 'callout', tone: 'warn',
        title: 'The ' + gutterRow[0].toLowerCase() + ' cycle gap',
        body: gutterRow[0] + ' runs at a ' + gutterRow[4] + '-day median complete versus ' + roofRow[4] + 'd for ' + roofRow[0].toLowerCase() + ', ' + gutterSlowPct.toFixed(0) + '% slower on a lower-priced trade. Pilot a dedicated ' + gutterRow[0].toLowerCase() + '-crew rotation in the highest-volume markets. If the cycle gap closes by half, that is roughly ' + Math.round((gutterRow[4] - roofRow[4]) / 2) + ' days back per job at scale.'
      } : null
    ].filter(Boolean)
  };

  // ============================================================
  // CREATORS (Created By)
  // ============================================================
  pages.creators = {
    eyebrow: 'CREATED BY',
    title: 'Created By',
    intro: crRows.length + ' creators are responsible for every job in the YTD book. The top three carry ' + top3CrShare.toFixed(0) + '% of the revenue. The creator-by-market network shows where each one\'s book actually lives.',
    sections: [
      {
        kind: 'kpi-row', cols: 4,
        items: [
          { label: 'Active Creators', value: String(crRows.length), sub: 'Each with 5+ jobs', tone: 'navy' },
          { label: 'Top Creator',     value: topCr ? topCr[0] : '—',
            sub: topCr ? topCr[1] + ' jobs · ' + fmt.money(topCr[2], { short: true }) + ' · ' + topCr[4] + ' median' : '', tone: 'success' },
          { label: 'Top 3 Share',     value: top3CrShare.toFixed(0) + '%', sub: 'of YTD revenue' },
          { label: 'Highest MT %',    value: bestMtCr ? bestMtCr[0] : '—',
            sub: bestMtCr ? (bestMtCr[6] || 0).toFixed(1) + '% multi-trade attach' : '', tone: 'success' }
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
        body: (mostConcentratedCr ? mostConcentratedCr.name + ' is ' + mostConcentratedCr.topPct.toFixed(0) + '% ' + mostConcentratedCr.topMarket + ' (' + mostConcentratedCr.topCount + ' of ' + mostConcentratedCr.total + ' jobs). ' : '')
          + (mostSpreadCr ? mostSpreadCr.name + ' has the widest footprint, with presence in ' + mostSpreadCr.presence + ' markets. ' : '')
          + 'Concentration matters when planning territory coverage and shadow-then-handoff transitions.'
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

    // Deal-sizing policy threshold (methodology constant, not data): the
    // multi-trade lift is judged worth the cycle tax on MF jobs above this
    // contract value. Change here only with an approved methodology change.
    var MT_DEAL_SIZE_MIN = 150000;

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
      intro: (monthly.length ? monthly.length + ' months' : 'Months') + ' of invoiced MF production. The book is lumpy because MF deals are large; one or two big jobs swing a month.',
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
          body: 'On the MF book, multi-trade jobs run <strong>' + ((mtKpis[0] && mtKpis[0].sub) || '—') + '</strong> on per-deal contract value but cost <strong>' + ((mtKpis[2] && mtKpis[2].sub) || '—') + '</strong> in cycle. The lift is real for any MF job over ' + fmt.money(MT_DEAL_SIZE_MIN, { short: true }) + '. Below that, the cycle tax usually erases the margin gain. Use it as a deal-sizing rule, not a default.'
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
