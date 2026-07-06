/* ============================================================
   FEAZEL · Job Backlog & Production Page Definitions
   Loaded after data.js / chart-theme.js / page-renderer.js.
   Each entry under FZ_PAGE_DEFS["backlog"][slug] is a page def.
   ============================================================ */
(function () {
  var D = window.FZ && window.FZ.data && window.FZ.data.BACKLOG;
  if (!D) {
    console.error('[FZ] BACKLOG data missing.');
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

  // ---------- chart / table lookups ----------
  // Both `tables` and `charts` are arrays in extracted-data.json. Build id-keyed maps.
  var T = {};
  (D.tables || []).forEach(function (t) { if (t && t.id) T[t.id] = t; });
  var C = {};
  (D.charts || []).forEach(function (c) { if (c && c.id) C[c.id] = c; });

  // Tone helper to map data tones to KPI tones used by the renderer.
  function toneMap(t) {
    if (t === 'crit') return 'danger';
    if (t === 'good') return 'success';
    if (t === 'warn') return 'warn';
    if (t === 'info') return 'navy';
    return undefined;
  }
  function kpiItems(arr) {
    return (arr || []).map(function (k) {
      return { label: k.label, value: k.value, sub: k.sub, tone: toneMap(k.tone) };
    });
  }

  // Convenience: map a table's rows to renderer rows.
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
  // MULTI-FAMILY BRANCH
  // The residential page-defs below have residential-flavored callouts
  // (Columbus / Detroit Metro / 13 markets). When MF data is loaded,
  // build a dedicated MF pages object and short-circuit the rest of
  // this file.
  // ============================================================
  var lob = (window.FZ.data && window.FZ.data._meta && window.FZ.data._meta.lob) || 'residential';
  if (lob === 'multi-family') {
    window.FZ_PAGE_DEFS = window.FZ_PAGE_DEFS || {};
    window.FZ_PAGE_DEFS['backlog'] = buildMfBacklogPages(D, T, C, fmt, pal, BASE_OPTS, withOpts, moneyAxis, kpiItems, tableSection);
    return;
  }

  // ============================================================
  // INDEX (Backlog & Production hub)
  // ============================================================
  var pages = {};

  // ---- derived context (every figure below comes from the payload) ----
  var hm = D.headerMeta || {};
  function kFind(arr, re) {
    var k = (arr || []).find(function (x) { return x && re.test(String(x.label)); });
    return k || { label: '', value: '—', sub: '' };
  }
  var kRisk          = kFind(D.kpisRiskOpportunity, /at risk/i);
  var kOpp           = kFind(D.kpisRiskOpportunity, /opportunity/i);
  var kPartialJobs   = kFind(D.kpisPartial, /^partial jobs$/i);
  var kTrapped       = kFind(D.kpisPartial, /trapped value/i);
  var kOpenPartials  = kFind(D.kpisPartial, /open wos/i);
  var kRts           = kFind(D.kpisPartial, /rts ready/i);
  var kTotalHolds    = kFind(D.kpisHolds, /total holds/i);
  var kPendingPermit = kFind(D.kpisHolds, /pending permit/i);
  var kActiveReps    = kFind(D.kpisSales, /active reps/i);
  var kStuckValue    = kFind(D.kpisSales, /stuck value/i);
  var kRepsStuck     = kFind(D.kpisSales, /reps with stuck/i);
  var kInProgress    = kFind(D.kpisExecutive, /in progress/i);
  var kNotStartedJobs  = kFind(D.kpisBacklog, /not started jobs/i);
  var kNotStartedValue = kFind(D.kpisBacklog, /not started value/i);
  var kOldestNS      = kFind(D.kpisBacklog, /oldest/i);

  var branchRows = (T.branchDetail && T.branchDetail.rows) || [];
  var branchByValue = branchRows.slice().sort(function (a, b) { return (b[10] || 0) - (a[10] || 0); });
  var topBranch = branchByValue[0] || null;
  var secondBranch = branchByValue[1] || null;
  var totalBranchValue = branchRows.reduce(function (s, r) { return s + (r[10] || 0); }, 0);
  var totalBranchWOs = branchRows.reduce(function (s, r) { return s + (r[1] || 0); }, 0);
  var top2Value = (topBranch ? topBranch[10] : 0) + (secondBranch ? secondBranch[10] : 0);
  var top2WOs = (topBranch ? topBranch[1] : 0) + (secondBranch ? secondBranch[1] : 0);
  var completedWOs = branchRows.reduce(function (s, r) { return s + (r[2] || 0); }, 0);
  var rasWOs = branchRows.reduce(function (s, r) { return s + (r[7] || 0); }, 0);
  var topWoBranch = branchRows.slice().sort(function (a, b) { return (b[1] || 0) - (a[1] || 0); })[0] || null;
  var mostScheduledBranch = branchRows.slice().sort(function (a, b) { return (b[5] || 0) - (a[5] || 0); })[0] || null;

  var holdsRows = (T.holdsBySubStatus && T.holdsBySubStatus.rows) || [];
  var holdsTotal = holdsRows.reduce(function (s, r) { return s + (r[1] || 0); }, 0);
  var holdsSorted = holdsRows.slice().sort(function (a, b) { return (b[1] || 0) - (a[1] || 0); });
  var topHold = holdsSorted[0] || null;
  var secondHold = holdsSorted[1] || null;
  var top2HoldPct = holdsTotal > 0
    ? Math.round(((topHold ? topHold[1] : 0) + (secondHold ? secondHold[1] : 0)) / holdsTotal * 100) : 0;
  var slowestHold = holdsRows.slice().sort(function (a, b) { return (b[2] || 0) - (a[2] || 0); })[0] || null;
  var pendingSalesRow = holdsRows.find(function (r) { return /pending sales/i.test(r[0]); }) || null;

  var permitsByBranch = (D.computedExtras && D.computedExtras.permitsByBranch) || [];
  var permitsSorted = permitsByBranch.slice().sort(function (a, b) { return (b.permits || 0) - (a.permits || 0); });
  var topPermitBranch = permitsSorted[0] || null;
  var totalPermits = permitsByBranch.reduce(function (s, p) { return s + (p.permits || 0); }, 0);

  var trailingRows = (T.trailingTrades && T.trailingTrades.rows) || [];
  var topTrailing = trailingRows[0] || null;

  var tradeRows = (T.tradeDetail && T.tradeDetail.rows) || [];
  var tradeTotalValue = tradeRows.reduce(function (s, r) { return s + (r[5] || 0); }, 0);
  function findTrade(re) { return tradeRows.find(function (r) { return re.test(String(r[0])); }) || null; }
  var roofTrade = findTrade(/roof/i);
  var gutterTrade = findTrade(/gutter/i);
  var sidingTrade = findTrade(/siding/i);
  var specialtyRows = (T.specialtyWatch && T.specialtyWatch.rows) || [];
  var specialtyWOs = specialtyRows.reduce(function (s, r) { return s + (r[1] || 0); }, 0);

  var gutterStatusRows = (T.gutterStatusBreakdown && T.gutterStatusBreakdown.rows) || [];
  function gutterStatusCount(re) {
    var r = gutterStatusRows.find(function (x) { return re.test(String(x[0])); });
    return r ? (r[1] || 0) : 0;
  }
  var gutterRts = gutterStatusCount(/ready to schedule/i);
  var gutterHold = gutterStatusCount(/hold/i);
  var gutterDone = gutterStatusCount(/completed/i);

  var stuckRows = (T.salesTop15ByStuck && T.salesTop15ByStuck.rows) || [];
  var topStuckRep = stuckRows[0] || null;
  var top5Stuck = stuckRows.slice(0, 5).reduce(function (s, r) { return s + (r[3] || 0); }, 0);

  var backlogRows = (T.backlogByBranch && T.backlogByBranch.rows) || [];
  var backlogByJobs = backlogRows.slice().sort(function (a, b) { return (b[1] || 0) - (a[1] || 0); });
  var backlogTop = backlogByJobs[0] || null;
  var backlogSecond = backlogByJobs[1] || null;
  var backlogTotalJobs = backlogRows.reduce(function (s, r) { return s + (r[1] || 0); }, 0);
  var backlogTotalValue = backlogRows.reduce(function (s, r) { return s + (r[2] || 0); }, 0);
  var backlogTop2Jobs = (backlogTop ? backlogTop[1] : 0) + (backlogSecond ? backlogSecond[1] : 0);
  var backlogTop2Value = (backlogTop ? backlogTop[2] : 0) + (backlogSecond ? backlogSecond[2] : 0);

  var oldestRows = (T.oldest15NotStarted && T.oldest15NotStarted.rows) || [];
  var oldestJob = oldestRows[0] || null;

  var woStatus = C['ch-wo-status'] || null;
  var woStatusPairs = woStatus ? woStatus.labels.map(function (l, i) {
    return { label: l, n: (woStatus.datasets[0].data[i] || 0) };
  }).sort(function (a, b) { return b.n - a.n; }) : [];
  var woStatusTotal = woStatusPairs.reduce(function (s, p) { return s + p.n; }, 0);
  var top3StatusPct = woStatusTotal > 0
    ? Math.round(woStatusPairs.slice(0, 3).reduce(function (s, p) { return s + p.n; }, 0) / woStatusTotal * 100) : 0;
  function statusLine(n) {
    return woStatusPairs.slice(0, n).map(function (p) { return p.n + ' ' + p.label; }).join(', ');
  }

  var agingChart = C['ch-wo-aging'] || null;
  var slowestAging = agingChart ? agingChart.labels.map(function (l, i) {
    return { label: l, n: (agingChart.datasets[0].data[i] || 0) };
  }).sort(function (a, b) { return b.n - a.n; })[0] : null;

  var incStatus = C['ch-incomplete-status'] || null;
  var incPairs = incStatus ? incStatus.labels.map(function (l, i) {
    return { label: l, n: (incStatus.datasets[0].data[i] || 0) };
  }) : [];
  var incTotal = incPairs.reduce(function (s, p) { return s + p.n; }, 0);
  var incRts = (incPairs.filter(function (p) { return /ready to schedule|rts/i.test(p.label); })[0] || { n: 0 }).n;
  var incAge = C['ch-incomplete-age'] || null;
  var incOver60 = incAge ? incAge.labels.reduce(function (s, l, i) {
    return />\s*60|60\+/.test(l) ? s + (incAge.datasets[0].data[i] || 0) : s;
  }, 0) : 0;

  pages.index = {
    eyebrow: 'LIVE BACKLOG · ' + (D.headerMeta.totalJobs) + ' JOBS · ' + (D.headerMeta.totalWOs) + ' WORK ORDERS',
    title: 'Job Backlog & Production',
    intro: 'A live, job-level read of the residential production book. Of the ' + fmt.money(hm.portfolioValue || 0, { short: true }) + ' portfolio sitting in front of operations, this page surfaces what is moving, what is stuck, and where the throughput levers are. Every number ties back to a single job or work order, so you can drill from the headline to the worksite.',
    tags: [
      { kind: 'info',    text: (hm.totalJobs || 0) + ' jobs in backlog' },
      { kind: 'warn',    text: kPartialJobs.value + ' partial jobs · ' + kTrapped.value + ' trapped' },
      { kind: 'success', text: kRts.value + ' RTS WOs ready to dispatch' }
    ],
    sections: [
      {
        kind: 'kpi-row', cols: 6,
        items: kpiItems(D.kpisExecutive)
      },
      {
        kind: 'kpi-row', cols: 2,
        items: kpiItems(D.kpisRiskOpportunity)
      },
      {
        kind: 'chart-grid', cols: 2, heading: 'Where the Work Sits',
        caption: (hm.totalWOs || 0) + ' work orders sliced by status and by branch',
        charts: [
          {
            title: 'Work Order Status Distribution',
            sub: (woStatusPairs.length >= 3 ? statusLine(3) + ' lead the queue' : 'WO count by status'),
            height: 320,
            config: {
              type: 'bar',
              data: {
                labels: C['ch-wo-status'].labels,
                datasets: [{
                  label: 'Work Orders',
                  data: C['ch-wo-status'].datasets[0].data,
                  backgroundColor: C['ch-wo-status'].labels.map(function (l) {
                    if (l === 'On Hold') return pal.danger;
                    if (l === 'Ready to Schedule') return pal.warning;
                    if (l === 'Completed') return pal.success;
                    return pal.navy;
                  }),
                  borderRadius: 4
                }]
              },
              options: withOpts({
                indexAxis: 'y',
                scales: { x: { beginAtZero: true } },
                plugins: { legend: { display: false } }
              })
            }
          },
          {
            title: 'Branch Production Load (stacked by status)',
            sub: 'All ' + branchRows.length + ' markets' + (topBranch && secondBranch ? ' · ' + topBranch[0] + ' and ' + secondBranch[0] + ' carry the load' : ''),
            height: 320,
            config: {
              type: 'bar',
              data: {
                labels: C['ch-branch'].labels,
                datasets: C['ch-branch'].datasets.map(function (ds, i) {
                  var colors = [pal.success, pal.navy, pal.blue, pal.warning, pal.danger, pal.slate];
                  return {
                    label: ds.label,
                    data: ds.data,
                    backgroundColor: colors[i % colors.length],
                    stack: 'b'
                  };
                })
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
        kind: 'chart-grid', cols: 2, heading: 'Aging & Specialty',
        caption: 'How long the average WO has been sitting · plus the trade mix that produced the queue',
        charts: [
          {
            title: 'WO Aging by Status (avg days in status)',
            sub: (slowestAging ? slowestAging.label + ' is the structural drag at ' + slowestAging.n + 'd avg' : 'Average days in status') + ' · everything else should clear in days, not months',
            height: 320,
            config: {
              type: 'bar',
              data: {
                labels: C['ch-wo-aging'].labels,
                datasets: [{
                  label: 'Avg Days',
                  data: C['ch-wo-aging'].datasets[0].data,
                  backgroundColor: C['ch-wo-aging'].datasets[0].data.map(function (v) {
                    return v >= 60 ? pal.danger : v >= 20 ? pal.warning : pal.navy;
                  }),
                  borderRadius: 4
                }]
              },
              options: withOpts({
                scales: { y: { ticks: { callback: function (v) { return v + 'd'; } }, beginAtZero: true } },
                plugins: { legend: { display: false } }
              })
            }
          },
          {
            title: 'WO Volume by Trade (Completed vs Open)',
            sub: (roofTrade ? roofTrade[0] + ' is the volume engine' : 'Volume by trade') + (topTrailing ? ' · ' + topTrailing[0] + ' is the trailing-trade bottleneck' : ''),
            height: 320,
            config: {
              type: 'bar',
              data: {
                labels: C['ch-trade'].labels,
                datasets: [
                  { label: 'Completed', data: C['ch-trade'].datasets[0].data, backgroundColor: pal.success, stack: 't' },
                  { label: 'Open',      data: C['ch-trade'].datasets[1].data, backgroundColor: pal.navy,    stack: 't' }
                ]
              },
              options: withOpts({
                scales: { x: { stacked: true }, y: { stacked: true, beginAtZero: true } }
              })
            }
          }
        ]
      },
      {
        kind: 'two-col', heading: 'Backlog & Hold Concentration',
        items: [
          {
            kind: 'chart', span: 6,
            title: 'Not-Started Backlog by Branch',
            sub: kNotStartedJobs.value + ' jobs · ' + kNotStartedValue.value + ' signed and waiting'
              + (backlogTop && backlogSecond && backlogTotalJobs > 0 ? ' · ' + backlogTop[0] + ' and ' + backlogSecond[0] + ' hold ' + Math.round(backlogTop2Jobs / backlogTotalJobs * 100) + '%' : ''),
            height: 300,
            config: {
              type: 'bar',
              data: {
                labels: C['ch-backlog'].labels,
                datasets: [{
                  label: 'Jobs',
                  data: C['ch-backlog'].datasets[0].data,
                  backgroundColor: pal.navy
                }]
              },
              options: withOpts({
                indexAxis: 'y',
                scales: { x: { beginAtZero: true } },
                plugins: { legend: { display: false } }
              })
            }
          },
          {
            kind: 'chart', span: 6,
            title: 'On-Hold Sub-Status Mix',
            sub: holdsTotal + ' WOs' + (topHold && secondHold ? ' · ' + topHold[0] + ' (' + topHold[1] + ') and ' + secondHold[0] + ' (' + secondHold[1] + ') account for ' + top2HoldPct + '% of holds' : ''),
            height: 300,
            config: {
              type: 'doughnut',
              data: {
                labels: T.holdsBySubStatus.rows.map(function (r) { return r[0]; }),
                datasets: [{
                  data: T.holdsBySubStatus.rows.map(function (r) { return r[1]; }),
                  backgroundColor: [pal.warning, pal.danger, pal.navy, pal.blue, pal.slate, pal.dim],
                  borderColor: '#fff', borderWidth: 2
                }]
              },
              options: withOpts({
                cutout: '60%',
                plugins: {
                  legend: { position: 'right' },
                  tooltip: { callbacks: { label: function (c) {
                    var r = T.holdsBySubStatus.rows[c.dataIndex];
                    return r[0] + ': ' + r[1] + ' WOs · avg ' + r[2] + 'd · oldest ' + r[3] + 'd';
                  } } }
                }
              })
            }
          }
        ]
      },
      {
        kind: 'prose', heading: 'Headlines',
        cards: [
          { kind: 'tint', eyebrow: 'WHAT IS WORKING', title: 'The book is real and it is bigger than capacity',
            body: '<p>' + fmt.money(hm.portfolioValue || 0, { short: true }) + ' of signed contract value sits in front of the production org today. ' + kInProgress.value + ' jobs are actively in motion and ' + completedWOs + ' work orders have already been completed in this window. The portfolio is not the issue, throughput is.</p>' },
          { eyebrow: 'WHAT IS STUCK', title: 'Three drag categories',
            body: '<p><strong>Partial jobs</strong> hold ' + kTrapped.value + ' of recoverable revenue trapped behind a single trailing trade (' + (topTrailing ? topTrailing[0] : 'see the Partial tab') + ' most often). <strong>Pending Permit</strong> WOs (' + kPendingPermit.value + ' total' + (topPermitBranch ? ', ' + topPermitBranch.permits + ' in ' + topPermitBranch.branch + ' alone' : '') + ') idle the queue. <strong>Pending Sales</strong> dispositions sit at ' + (pendingSalesRow ? pendingSalesRow[1] + ' WOs with the oldest at ' + pendingSalesRow[3] + ' days' : 'an aged count') + ', a cohort the sales ops team needs to clear.</p>' },
          { kind: 'navy', eyebrow: 'NEXT MOVES', title: 'Run the action plan',
            body: '<p>Open the Action Plan tab. The immediate wins: dispatch the ' + kRts.value + ' RTS WOs sitting on partial jobs (no blockers), re-dispatch the ' + rasWOs + ' RAS WOs, and run a ' + (topPermitBranch ? topPermitBranch.branch : 'top-branch') + ' permit sweep. None of this needs new headcount.</p>' }
        ]
      }
    ]
  };

  // ============================================================
  // EXECUTIVE SUMMARY
  // ============================================================
  pages.executive = {
    eyebrow: 'EXECUTIVE BRIEF · BACKLOG & PRODUCTION',
    title: 'Executive Summary',
    intro: 'The job-level state of production: how the ' + (hm.totalJobs || 0) + '-job book is split between active and waiting, where the dollar value lives, and the two numbers that frame the throughput conversation.',
    tags: [
      { kind: 'info', text: fmt.money(hm.portfolioValue || 0, { short: true }) + ' portfolio' },
      { kind: 'warn', text: (hm.avgDaysInStatus || 0) + 'd avg in status' }
    ],
    sections: [
      {
        kind: 'kpi-row', cols: 6,
        items: kpiItems(D.kpisExecutive)
      },
      {
        kind: 'kpi-row', cols: 2,
        items: kpiItems(D.kpisRiskOpportunity)
      },
      {
        kind: 'chart-grid', cols: 2, heading: 'Production Snapshot',
        caption: 'Where work orders sit today and how long they have been there',
        charts: [
          {
            title: 'Work Order Status Distribution',
            sub: (hm.totalWOs || 0) + ' WOs · top three statuses' + (woStatusPairs.length >= 3 ? ' (' + woStatusPairs.slice(0, 3).map(function (p) { return p.label; }).join(', ') + ') carry ' + top3StatusPct + '% of the queue' : ''),
            height: 320,
            config: {
              type: 'bar',
              data: {
                labels: C['ch-wo-status'].labels,
                datasets: [{
                  label: 'Work Orders',
                  data: C['ch-wo-status'].datasets[0].data,
                  backgroundColor: pal.navy,
                  borderRadius: 4
                }]
              },
              options: withOpts({
                indexAxis: 'y',
                scales: { x: { beginAtZero: true } },
                plugins: { legend: { display: false } }
              })
            }
          },
          {
            title: 'WO Aging by Status (avg vs max days)',
            sub: 'Where the structural drag is concentrated',
            height: 320,
            config: {
              type: 'bar',
              data: {
                labels: C['ch-wo-aging'].labels,
                datasets: [
                  { label: 'Avg Days', data: C['ch-wo-aging'].datasets[0].data, backgroundColor: pal.navy, borderRadius: 4 },
                  { label: 'Max Days', data: C['ch-wo-aging'].datasets[1].data, backgroundColor: pal.warning, borderRadius: 4 }
                ]
              },
              options: withOpts({
                scales: { y: { ticks: { callback: function (v) { return v + 'd'; } }, beginAtZero: true } }
              })
            }
          }
        ]
      },
      tableSection({
        id: 'branchDetail',
        heading: 'Branch scorecard · all ' + branchRows.length + ' markets',
        caption: 'Jobs, WOs, status mix, and dollar value carried at each branch',
        rowMap: function (r) {
          return [
            { html: '<strong>' + r[0] + '</strong>' },
            r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8], r[9],
            { html: '<strong>' + fmt.money(r[10]) + '</strong>' }
          ];
        }
      }),
      {
        kind: 'callout', tone: 'warn',
        title: 'The exec read in one paragraph',
        body: 'The book is healthy in volume terms (' + (hm.totalJobs || 0) + ' jobs, ' + fmt.money(hm.portfolioValue || 0, { short: true }) + ' signed). The drag is in the middle of the funnel: ' + kPartialJobs.value + ' partial jobs trap ' + kTrapped.value + ' of already-signed revenue, ' + kTotalHolds.value + ' WOs are on hold (' + (holdsTotal > 0 && topHold ? Math.round(topHold[1] / holdsTotal * 100) + '% of them on ' + topHold[0].toLowerCase() : 'concentrated in a few sub-statuses') + '), and the >30-day cohort holds ' + kStuckValue.value + ' of stuck contract value. The fix list is operational, not strategic, and the top three workstreams (RTS dispatch, RAS re-dispatch, ' + (topPermitBranch ? topPermitBranch.branch + ' permits' : 'the permit sweep') + ') move the number without adding headcount.'
      }
    ]
  };

  // ============================================================
  // PARTIALLY COMPLETE
  // ============================================================
  pages.partial = {
    eyebrow: 'PARTIAL JOBS · TRAILING TRADES',
    title: 'Partially Complete',
    intro: 'Jobs that are mostly done in production but waiting on a single trade to close out. This is the most concentrated near-term lever in the book: ' + kTrapped.value + ' of already-signed revenue gated by ' + kOpenPartials.value + ' open work orders.',
    tags: [
      { kind: 'warn',    text: kPartialJobs.value + ' partial jobs' },
      { kind: 'success', text: kTrapped.value + ' recoverable' }
    ],
    sections: [
      {
        kind: 'kpi-row', cols: 5,
        items: kpiItems(D.kpisPartial)
      },
      {
        kind: 'chart-grid', cols: 2, heading: 'Where the Trailing WOs Live',
        caption: 'Status mix and aging distribution of the ' + kOpenPartials.value + ' open WOs on partial jobs',
        charts: [
          {
            title: 'Incomplete WOs by Status (partial jobs only)',
            sub: 'Of ' + incTotal + ' trailing WOs · ' + incRts + ' are RTS (no blocker, dispatch now)',
            height: 300,
            config: {
              type: 'doughnut',
              data: {
                labels: C['ch-incomplete-status'].labels,
                datasets: [{
                  data: C['ch-incomplete-status'].datasets[0].data,
                  backgroundColor: [pal.warning, pal.danger, pal.blue, pal.navy, pal.slate],
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
            title: 'Aging Distribution (incomplete WOs on partial jobs)',
            sub: incOver60 + ' of ' + incTotal + ' are >60 days · those are the escalation candidates',
            height: 300,
            config: {
              type: 'bar',
              data: {
                labels: C['ch-incomplete-age'].labels,
                datasets: [{
                  label: 'Open WOs',
                  data: C['ch-incomplete-age'].datasets[0].data,
                  backgroundColor: C['ch-incomplete-age'].labels.map(function (l) {
                    if (l === '>60d') return pal.danger;
                    if (l === '31-60d') return pal.warning;
                    return pal.navy;
                  }),
                  borderRadius: 4
                }]
              },
              options: withOpts({
                scales: { y: { beginAtZero: true } },
                plugins: { legend: { display: false } }
              })
            }
          }
        ]
      },
      tableSection({
        id: 'trailingTrades',
        heading: 'Trailing trades · open WOs on partial jobs',
        caption: 'Ranked by trapped contract value' + (topTrailing ? ' · ' + topTrailing[0] + ' is the dominant trailing trade' : ''),
        rowMap: function (r) {
          return [
            { html: '<strong>' + r[0] + '</strong>' },
            r[1],
            r[2],
            { html: '<strong>' + fmt.money(r[3]) + '</strong>' }
          ];
        }
      }),
      {
        kind: 'chart-grid', cols: 1,
        charts: [
          {
            title: 'Trapped Value by Trailing Trade',
            sub: topTrailing ? topTrailing[0] + ' alone gates ' + fmt.money(topTrailing[3], { short: true }) + ' across ' + topTrailing[2] + ' partial jobs' : 'Trapped value by trade',
            height: 300,
            config: {
              type: 'bar',
              data: {
                labels: T.trailingTrades.rows.map(function (r) { return r[0]; }),
                datasets: [{
                  label: 'Trapped Value',
                  data: T.trailingTrades.rows.map(function (r) { return r[3]; }),
                  backgroundColor: T.trailingTrades.rows.map(function (r) {
                    return r[3] >= 500000 ? pal.danger : r[3] >= 200000 ? pal.warning : pal.navy;
                  })
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
        kind: 'callout', tone: 'success',
        title: 'The fastest revenue dollar in the book',
        body: kRts.value + ' of the ' + kOpenPartials.value + ' trailing WOs are Ready to Schedule, meaning no blocker, no hold, no permit. Those dispatch today.' + (topTrailing ? ' The ' + topTrailing[0] + ' sweep is the biggest single concentration: ' + topTrailing[2] + ' partial jobs, ' + fmt.money(topTrailing[3], { short: true }) + ' of trapped value, all waiting on the same trade. A two-week dispatch surge clears most of it.' : '')
      }
    ]
  };

  // ============================================================
  // HOLDS & BLOCKERS
  // ============================================================
  pages.holds = {
    eyebrow: 'HOLDS · ' + kTotalHolds.value + ' WORK ORDERS',
    title: 'Holds & Blockers',
    intro: 'Every WO sitting in On Hold status, broken down by why. The ' + kTotalHolds.value + ' holds split into ' + holdsRows.length + ' sub-status categories' + (topHold && secondHold ? ', with ' + topHold[0].toLowerCase() + ' and ' + secondHold[0].toLowerCase() + ' accounting for ' + top2HoldPct + '% of the total' : '') + '.',
    tags: [
      { kind: 'danger', text: kTotalHolds.value + ' holds total' },
      { kind: 'warn',   text: kPendingPermit.value + ' pending permit' }
    ],
    sections: [
      {
        kind: 'kpi-row', cols: 4,
        items: kpiItems(D.kpisHolds)
      },
      {
        kind: 'chart-grid', cols: 2, heading: 'Hold Composition',
        caption: 'Why the work is parked',
        charts: [
          {
            title: 'On-Hold Sub-Status Mix',
            sub: (topHold ? topHold[0] + ' dominates' : 'Sub-status mix') + (slowestHold ? ' · ' + slowestHold[0] + ' is the slowest-clearing bucket at ' + slowestHold[2] + 'd avg' : ''),
            height: 320,
            config: {
              type: 'doughnut',
              data: {
                labels: T.holdsBySubStatus.rows.map(function (r) { return r[0]; }),
                datasets: [{
                  data: T.holdsBySubStatus.rows.map(function (r) { return r[1]; }),
                  backgroundColor: [pal.warning, pal.danger, pal.navy, pal.blue, pal.slate, pal.dim],
                  borderColor: '#fff', borderWidth: 2
                }]
              },
              options: withOpts({
                cutout: '60%',
                plugins: {
                  legend: { position: 'right' },
                  tooltip: { callbacks: { label: function (c) {
                    var r = T.holdsBySubStatus.rows[c.dataIndex];
                    return r[0] + ': ' + r[1] + ' WOs · avg ' + r[2] + 'd';
                  } } }
                }
              })
            }
          },
          {
            title: 'Avg Hold Age by Sub-Status',
            sub: 'How quickly each hold category clears, on average',
            height: 320,
            config: {
              type: 'bar',
              data: {
                labels: T.holdsBySubStatus.rows.map(function (r) { return r[0]; }),
                datasets: [
                  { label: 'Avg Age (d)', data: T.holdsBySubStatus.rows.map(function (r) { return r[2]; }), backgroundColor: pal.navy, borderRadius: 4 },
                  { label: 'Oldest (d)',  data: T.holdsBySubStatus.rows.map(function (r) { return r[3]; }), backgroundColor: pal.warning, borderRadius: 4 }
                ]
              },
              options: withOpts({
                scales: { y: { ticks: { callback: function (v) { return v + 'd'; } }, beginAtZero: true } }
              })
            }
          }
        ]
      },
      tableSection({
        id: 'holdsBySubStatus',
        heading: 'On-Hold sub-status breakdown',
        caption: holdsRows.length + ' sub-status categories · WO count, average age, and worst-case oldest',
        rowMap: function (r) {
          return [
            { html: '<strong>' + r[0] + '</strong>' },
            r[1],
            r[2] + 'd',
            { html: r[3] >= 100 ? '<span class="pill pill-danger">' + r[3] + 'd</span>'
                  : r[3] >= 30 ? '<span class="pill pill-warn">' + r[3] + 'd</span>'
                  : '<span class="pill pill-success">' + r[3] + 'd</span>' }
          ];
        }
      }),
      {
        kind: 'chart-grid', cols: 1, heading: 'Permit Concentration',
        caption: 'Where the ' + kPendingPermit.value + ' pending-permit WOs are clustered',
        charts: [
          {
            title: 'Pending Permits by Branch',
            sub: (topPermitBranch && totalPermits > 0 ? topPermitBranch.branch + ' carries ' + topPermitBranch.permits + ' of ' + totalPermits + ' (' + Math.round(topPermitBranch.permits / totalPermits * 100) + '%) · a single-branch AHJ-relations problem, not a company-wide one' : 'Pending-permit WOs by branch'),
            height: 300,
            config: {
              type: 'bar',
              data: {
                labels: D.computedExtras.permitsByBranch.map(function (b) { return b.branch; }),
                datasets: [{
                  label: 'Pending-Permit WOs',
                  data: D.computedExtras.permitsByBranch.map(function (b) { return b.permits; }),
                  backgroundColor: D.computedExtras.permitsByBranch.map(function (b) {
                    return b.permits >= 30 ? pal.danger : b.permits >= 10 ? pal.warning : pal.navy;
                  })
                }]
              },
              options: withOpts({
                scales: { y: { beginAtZero: true } },
                plugins: { legend: { display: false } }
              })
            }
          }
        ]
      },
      topPermitBranch && totalPermits > 0 ? {
        kind: 'callout', tone: 'danger',
        title: 'The ' + topPermitBranch.branch + ' permit story',
        body: topPermitBranch.branch + ' alone carries ' + topPermitBranch.permits + ' of the ' + totalPermits + ' pending-permit WOs (' + Math.round(topPermitBranch.permits / totalPermits * 100) + '% of all permit holds). The branch GM owns daily AHJ follow-up, and anything over 14 days needs an escalation path. Until permits move there, the queue cannot drain.'
      } : null
    ].filter(Boolean)
  };

  // ============================================================
  // TRADE ANALYSIS
  // ============================================================
  pages.trades = {
    eyebrow: 'TRADES · ' + tradeRows.length + ' CATEGORIES',
    title: 'Trade Analysis',
    intro: 'How each trade contributes to the production load. ' + (roofTrade ? roofTrade[0] + ' is the volume engine; ' : '') + (topTrailing ? topTrailing[0] + ' is the trailing-trade bottleneck on partial jobs; ' : '') + 'specialty trades are the small-but-watch buckets.',
    tags: [{ kind: 'info', text: (hm.totalWOs || 0) + ' WOs across ' + tradeRows.length + ' trades' }],
    sections: [
      {
        kind: 'kpi-row', cols: 4,
        items: [
          roofTrade ? { label: roofTrade[0] + ' WOs', value: String(roofTrade[1]), sub: roofTrade[2] + ' done · ' + roofTrade[3] + ' open · ' + fmt.money(roofTrade[5], { short: true }), tone: 'navy' } : null,
          gutterTrade ? { label: gutterTrade[0] + ' WOs', value: String(gutterTrade[1]), sub: gutterTrade[2] + ' done · ' + gutterTrade[3] + ' open' + (topTrailing && topTrailing[0] === gutterTrade[0] ? ' · trailing-trade #1' : ''), tone: 'warn' } : null,
          sidingTrade ? { label: sidingTrade[0] + ' WOs', value: String(sidingTrade[1]), sub: sidingTrade[2] + ' done · ' + sidingTrade[3] + ' open · ' + fmt.money(sidingTrade[5], { short: true }) } : null,
          { label: 'Specialty', value: String(specialtyWOs), sub: specialtyRows.map(function (r) { return r[1] + ' ' + r[0]; }).join(' · ') || 'watch list', tone: 'success' }
        ].filter(Boolean)
      },
      {
        kind: 'chart-grid', cols: 1, heading: 'Trade Volume',
        caption: 'WO counts by trade, completed vs open',
        charts: [
          {
            title: 'WO Volume by Trade (Completed vs Open)',
            sub: 'Open WOs dwarf completed across every trade · the open pile is the production runway',
            height: 320,
            config: {
              type: 'bar',
              data: {
                labels: C['ch-trade'].labels,
                datasets: [
                  { label: 'Completed', data: C['ch-trade'].datasets[0].data, backgroundColor: pal.success, stack: 't' },
                  { label: 'Open',      data: C['ch-trade'].datasets[1].data, backgroundColor: pal.navy,    stack: 't' }
                ]
              },
              options: withOpts({
                scales: { x: { stacked: true }, y: { stacked: true, beginAtZero: true } }
              })
            }
          }
        ]
      },
      {
        kind: 'chart-grid', cols: 2, heading: 'Value & Specialty',
        charts: [
          {
            title: 'Contract Value by Trade',
            sub: (roofTrade && tradeTotalValue > 0 ? roofTrade[0] + ' carries ' + Math.round(roofTrade[5] / tradeTotalValue * 100) + '% of the dollar value across all open and closed work' : 'Contract value by trade'),
            height: 320,
            config: {
              type: 'bar',
              data: {
                labels: T.tradeDetail.rows.map(function (r) { return r[0]; }),
                datasets: [{
                  label: 'Contract Value',
                  data: T.tradeDetail.rows.map(function (r) { return r[5]; }),
                  backgroundColor: pal.navy
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
            title: 'Gutter WO Status Breakdown',
            sub: 'The trailing-trade bottleneck, status by status · ' + gutterRts + ' RTS Gutters waiting to dispatch',
            height: 320,
            config: {
              type: 'bar',
              data: {
                labels: T.gutterStatusBreakdown.rows.map(function (r) { return r[0]; }),
                datasets: [{
                  label: 'Gutter WOs',
                  data: T.gutterStatusBreakdown.rows.map(function (r) { return r[1]; }),
                  backgroundColor: T.gutterStatusBreakdown.rows.map(function (r) {
                    if (r[0] === 'On Hold') return pal.danger;
                    if (r[0] === 'Ready to Schedule') return pal.warning;
                    if (r[0] === 'Completed') return pal.success;
                    return pal.navy;
                  }),
                  borderRadius: 4
                }]
              },
              options: withOpts({
                indexAxis: 'y',
                scales: { x: { beginAtZero: true } },
                plugins: { legend: { display: false } }
              })
            }
          }
        ]
      },
      tableSection({
        id: 'tradeDetail',
        heading: 'Trade performance · all ' + tradeRows.length + ' trades',
        caption: 'Volume, completion mix, and dollar value carried by each trade',
        rowMap: function (r) {
          return [
            { html: '<strong>' + r[0] + '</strong>' },
            r[1],
            r[2],
            r[3],
            r[4],
            { html: '<strong>' + fmt.money(r[5]) + '</strong>' }
          ];
        }
      }),
      tableSection({
        id: 'specialtyWatch',
        heading: 'Specialty watch · counts',
        caption: 'Small volume, high value · solar and metal are the niche buckets to monitor',
        rowMap: function (r) {
          return [
            { html: '<strong>' + r[0] + '</strong>' },
            r[1]
          ];
        }
      }),
      gutterTrade ? {
        kind: 'callout', tone: 'warn',
        title: 'The ' + gutterTrade[0] + ' math',
        body: 'Of ' + gutterTrade[1] + ' ' + gutterTrade[0] + ' WOs in the system, only ' + gutterDone + ' are complete. ' + gutterRts + ' sit in Ready to Schedule and ' + gutterHold + ' are on hold.' + (topTrailing && topTrailing[0] === gutterTrade[0] ? ' ' + topTrailing[0] + ' trail ' + topTrailing[2] + ' partial jobs holding ' + fmt.money(topTrailing[3], { short: true }) + '.' : '') + ' A trade-specific dispatch surge (or a sub-fleet expansion) is the highest-leverage move in the production org right now.'
      } : null
    ].filter(Boolean)
  };

  // ============================================================
  // BRANCH DRILLDOWN
  // ============================================================
  pages.branches = {
    eyebrow: 'BRANCHES · ' + branchRows.length + ' MARKETS',
    title: 'Branch Drilldown',
    intro: 'Production load by branch, with the full status mix and dollar value carried at each market.' + (topBranch && secondBranch && totalBranchValue > 0 ? ' ' + topBranch[0] + ' and ' + secondBranch[0] + ' carry ' + Math.round(top2Value / totalBranchValue * 100) + '% of the company portfolio.' : ''),
    tags: [{ kind: 'info', text: branchRows.length + ' active branches' }],
    sections: [
      {
        kind: 'kpi-row', cols: 4,
        items: [
          { label: 'Top Branch by Value', value: topBranch ? topBranch[0] : '—',
            sub: topBranch ? fmt.money(topBranch[10], { short: true }) + ' · ' + topBranch[1] + ' WOs · ' + topBranch[9] + ' jobs' : '', tone: 'navy' },
          { label: '#2 by Value',          value: secondBranch ? secondBranch[0] : '—',
            sub: secondBranch ? fmt.money(secondBranch[10], { short: true }) + ' · ' + secondBranch[1] + ' WOs · ' + secondBranch[9] + ' jobs' : '', tone: 'success' },
          { label: 'Highest Permit Load',  value: topPermitBranch ? topPermitBranch.branch : '—',
            sub: topPermitBranch ? topPermitBranch.permits + ' pending-permit WOs' : '', tone: 'danger' },
          { label: 'Most Scheduled',       value: mostScheduledBranch ? mostScheduledBranch[0] : '—',
            sub: mostScheduledBranch ? mostScheduledBranch[5] + ' scheduled WOs of ' + mostScheduledBranch[1] : '', tone: 'success' }
        ]
      },
      {
        kind: 'chart-grid', cols: 1, heading: 'Branch Production Load',
        caption: 'Stacked status mix, all ' + branchRows.length + ' markets',
        charts: [
          {
            title: 'Branch Production Load by Status',
            sub: 'Each bar = total WOs at the branch · stacked by status' + (topWoBranch ? ' · ' + topWoBranch[0] + ' carries ' + topWoBranch[1] + ' WOs' : ''),
            height: 380,
            config: {
              type: 'bar',
              data: {
                labels: C['ch-branch'].labels,
                datasets: C['ch-branch'].datasets.map(function (ds, i) {
                  var colors = [pal.success, pal.navy, pal.blue, pal.warning, pal.danger, pal.slate];
                  return {
                    label: ds.label,
                    data: ds.data,
                    backgroundColor: colors[i % colors.length],
                    stack: 'b'
                  };
                })
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
        kind: 'chart-grid', cols: 2, heading: 'Value & Holds by Branch',
        charts: [
          {
            title: 'Contract Value by Branch',
            sub: (topBranch && secondBranch ? 'Top two branches carry ' + fmt.money(top2Value, { short: true }) + ' of the ' + fmt.money(hm.portfolioValue || totalBranchValue, { short: true }) + ' portfolio' : 'Contract value by branch'),
            height: 320,
            config: {
              type: 'bar',
              data: {
                labels: T.branchDetail.rows.map(function (r) { return r[0]; }),
                datasets: [{
                  label: 'Value',
                  data: T.branchDetail.rows.map(function (r) { return r[10]; }),
                  backgroundColor: pal.navy
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
            title: 'On-Hold WOs by Branch',
            sub: 'Where the ' + kTotalHolds.value + ' holds are clustered',
            height: 320,
            config: {
              type: 'bar',
              data: {
                labels: T.branchDetail.rows.map(function (r) { return r[0]; }),
                datasets: [{
                  label: 'On-Hold WOs',
                  data: T.branchDetail.rows.map(function (r) { return r[6]; }),
                  backgroundColor: T.branchDetail.rows.map(function (r) {
                    return r[6] >= 50 ? pal.danger : r[6] >= 20 ? pal.warning : pal.navy;
                  })
                }]
              },
              options: withOpts({
                indexAxis: 'y',
                scales: { x: { beginAtZero: true } },
                plugins: { legend: { display: false } }
              })
            }
          }
        ]
      },
      tableSection({
        id: 'branchDetail',
        heading: 'Full branch detail · all ' + branchRows.length + ' markets',
        caption: 'WO totals, status breakdown, permit load, and contract value at each branch',
        rowMap: function (r) {
          return [
            { html: '<strong>' + r[0] + '</strong>' },
            r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8], r[9],
            { html: '<strong>' + fmt.money(r[10]) + '</strong>' }
          ];
        }
      }),
      (topBranch && secondBranch && totalBranchWOs > 0 && totalBranchValue > 0) ? {
        kind: 'callout',
        title: 'Two-branch concentration',
        body: topBranch[0] + ' and ' + secondBranch[0] + ' together carry ' + top2WOs + ' of ' + totalBranchWOs + ' WOs (' + Math.round(top2WOs / totalBranchWOs * 100) + '%) and ' + fmt.money(top2Value, { short: true }) + ' of the ' + fmt.money(totalBranchValue, { short: true }) + ' portfolio (' + Math.round(top2Value / totalBranchValue * 100) + '%). Any operational lift at those two branches moves the company number. Ops investments (dispatcher capacity, permit ops, sub-trade fleet) should be sized to that concentration first.'
      } : null
    ].filter(Boolean)
  };

  // ============================================================
  // SALESPERSON VIEW
  // ============================================================
  pages.salespeople = {
    eyebrow: 'SALES BACKLOG · ' + kActiveReps.value + ' ACTIVE REPS',
    title: 'Salesperson View',
    intro: 'How the backlog looks from the sales side: which reps have the most stuck contract value and the longest aging WOs sitting against their book.',
    tags: [
      { kind: 'info',   text: kActiveReps.value + ' active reps' },
      { kind: 'danger', text: kStuckValue.value + ' stuck >30d' }
    ],
    sections: [
      {
        kind: 'kpi-row', cols: 4,
        items: kpiItems(D.kpisSales)
      },
      {
        kind: 'chart-grid', cols: 1, heading: 'Top 15 by Stuck Value',
        caption: 'Reps whose book has the most contract value sitting in WOs older than 30 days',
        charts: [
          {
            title: 'Top 15 Salespeople by Stuck Value (>30d)',
            sub: (topStuckRep ? topStuckRep[0] + ' carries ' + fmt.money(topStuckRep[3], { short: true }) + ' across ' + topStuckRep[4] + ' stale WO' + (topStuckRep[4] === 1 ? '' : 's') + ' · concentration matters more than count' : 'Stuck value by rep'),
            height: 480,
            config: {
              type: 'bar',
              data: {
                labels: T.salesTop15ByStuck.rows.map(function (r) { return r[0]; }),
                datasets: [{
                  label: 'Stale Value',
                  data: T.salesTop15ByStuck.rows.map(function (r) { return r[3]; }),
                  backgroundColor: T.salesTop15ByStuck.rows.map(function (r) {
                    return r[3] >= 100000 ? pal.danger : r[3] >= 50000 ? pal.warning : pal.navy;
                  })
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
      tableSection({
        id: 'salesTop15ByStuck',
        heading: 'Top 15 salespeople by stuck value (>30d)',
        caption: 'Each rep with their full WO count, jobs in book, and the stale slice that has been sitting',
        rowMap: function (r) {
          return [
            { html: '<strong>' + r[0] + '</strong>' },
            r[1],
            r[2],
            { html: '<strong>' + fmt.money(r[3]) + '</strong>' },
            r[4],
            r[5]
          ];
        }
      }),
      {
        kind: 'callout', tone: 'warn',
        title: 'Where to push the disposition meeting',
        body: 'The weekly Pending Sales disposition meeting (Residential Sales and Inside Sales leadership) should triage from this list. The top 5 reps account for ' + fmt.money(top5Stuck, { short: true }) + ' of stuck value. Most of these are dispositions, not deals to lose, so a 14-day cohort sweep clears the bulk of it.'
      }
    ]
  };

  // ============================================================
  // BACKLOG PIPELINE
  // ============================================================
  pages.pipeline = {
    eyebrow: 'NOT-STARTED BACKLOG · ' + kNotStartedJobs.value + ' JOBS · ' + kNotStartedValue.value,
    title: 'Backlog Pipeline',
    intro: 'The book of signed work that has not yet been dispatched: ' + kNotStartedJobs.value + ' jobs holding ' + kNotStartedValue.value + ' of revenue. This is the production runway for the next 30 to 60 days.',
    tags: [
      { kind: 'info', text: kNotStartedJobs.value + ' jobs not started' },
      { kind: 'warn', text: 'Oldest ' + kOldestNS.value }
    ],
    sections: [
      {
        kind: 'kpi-row', cols: 4,
        items: kpiItems(D.kpisBacklog)
      },
      {
        kind: 'chart-grid', cols: 2, heading: 'Backlog Distribution',
        caption: 'Where the ' + kNotStartedJobs.value + ' not-started jobs sit, by branch',
        charts: [
          {
            title: 'Backlog by Branch (Job Count)',
            sub: (backlogTop && backlogTotalJobs > 0 ? backlogTop[0] + ' carries ' + backlogTop[1] + ' of ' + backlogTotalJobs + ' (' + Math.round(backlogTop[1] / backlogTotalJobs * 100) + '%)' + (backlogSecond ? ' · ' + backlogSecond[0] + ' adds ' + backlogSecond[1] + ' (' + Math.round(backlogSecond[1] / backlogTotalJobs * 100) + '%)' : '') : 'Not-started jobs by branch'),
            height: 360,
            config: {
              type: 'bar',
              data: {
                labels: C['ch-backlog'].labels,
                datasets: [{
                  label: 'Jobs',
                  data: C['ch-backlog'].datasets[0].data,
                  backgroundColor: pal.navy
                }]
              },
              options: withOpts({
                indexAxis: 'y',
                scales: { x: { beginAtZero: true } },
                plugins: { legend: { display: false } }
              })
            }
          },
          {
            title: 'Backlog by Branch (Contract Value)',
            sub: (backlogTop && backlogSecond && backlogTotalValue > 0 ? backlogTop[0] + ' and ' + backlogSecond[0] + ' hold ' + fmt.money(backlogTop2Value, { short: true }) + ' of the ' + fmt.money(backlogTotalValue, { short: true }) + ' not-started book (' + Math.round(backlogTop2Value / backlogTotalValue * 100) + '%)' : 'Not-started value by branch'),
            height: 360,
            config: {
              type: 'bar',
              data: {
                labels: T.backlogByBranch.rows.map(function (r) { return r[0]; }),
                datasets: [{
                  label: 'Backlog Value',
                  data: T.backlogByBranch.rows.map(function (r) { return r[1]; }),
                  backgroundColor: pal.blue
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
      tableSection({
        id: 'backlogByBranch',
        heading: 'Backlog by branch · jobs, value, oldest in status',
        caption: 'The ' + kNotStartedJobs.value + '-job not-started book, ranked by job count',
        rowMap: function (r) {
          return [
            { html: '<strong>' + r[0] + '</strong>' },
            r[1],
            { html: '<strong>' + fmt.money(r[2]) + '</strong>' },
            { html: r[3] >= 100 ? '<span class="pill pill-danger">' + r[3] + 'd</span>'
                  : r[3] >= 30 ? '<span class="pill pill-warn">' + r[3] + 'd</span>'
                  : '<span class="pill pill-success">' + r[3] + 'd</span>' }
          ];
        }
      }),
      tableSection({
        id: 'oldest15NotStarted',
        heading: 'Oldest 15 not-started jobs · escalation candidates',
        caption: 'Each row is a single job · sorted by days in status · these are the meeting items, not metrics',
        maxHeight: '520px',
        rowMap: function (r) {
          return [
            { html: '<strong>' + r[0] + '</strong>' },
            r[1],
            r[2],
            r[3],
            r[4],
            r[5] || '-',
            { html: r[6] >= 100 ? '<span class="pill pill-danger">' + r[6] + 'd</span>'
                  : r[6] >= 30 ? '<span class="pill pill-warn">' + r[6] + 'd</span>'
                  : '<span class="pill pill-success">' + r[6] + 'd</span>' },
            fmt.money(r[7])
          ];
        }
      }),
      oldestJob ? {
        kind: 'callout', tone: 'danger',
        title: 'The ' + oldestJob[6] + '-day job',
        body: oldestJob[0] + ' (' + oldestJob[2] + ', ' + oldestJob[3] + (oldestJob[4] ? ', ' + oldestJob[4] : '') + ') has been waiting ' + oldestJob[6] + ' days.' + (oldestRows.length >= 5 ? ' The next four oldest are all ' + oldestRows[4][6] + ' days or more.' : '') + ' None of these clear without a single owner taking responsibility for the follow-up. Assign by name at the next ops standup.'
      } : null
    ].filter(Boolean)
  };

  // ============================================================
  // ACTION PLAN
  // ============================================================
  pages['action-plan'] = {
    eyebrow: 'ACTION PLAN · IMMEDIATE / STRUCTURAL / CADENCE',
    title: 'Action Plan',
    intro: D.actionPlan.strategicGoal,
    tags: [
      { kind: 'success', text: 'No-headcount plan' },
      { kind: 'info',    text: '3 workstreams' }
    ],
    sections: [
      {
        kind: 'kpi-row', cols: 4,
        items: [
          { label: 'Throughput Opportunity', value: kOpp.value,  sub: 'Partial-job recoverable revenue', tone: 'success' },
          { label: 'Revenue at Risk',         value: kRisk.value, sub: 'WOs >30 days in status',          tone: 'danger' },
          { label: 'RTS Ready Today',         value: kRts.value,  sub: 'No blockers, just dispatch',      tone: 'success' },
          { label: 'RAS to Re-Dispatch',      value: String(rasWOs), sub: 'Return-and-schedule WOs across all branches', tone: 'warn' }
        ]
      },
      {
        kind: 'prose', heading: 'Sequenced workstreams',
        cards: [
          {
            kind: 'tint', eyebrow: 'IMMEDIATE',
            list: D.actionPlan.immediate.map(function (t) { return { text: t, icon: '1', tone: 'danger' }; })
          },
          {
            eyebrow: 'STRUCTURAL',
            list: D.actionPlan.structural.map(function (t) { return { text: t, icon: '2', tone: 'warn' }; })
          },
          {
            eyebrow: 'CADENCE',
            list: D.actionPlan.cadence.map(function (t) { return { text: t, icon: '3' }; })
          }
        ],
        cols: 3
      },
      {
        kind: 'callout', tone: 'success',
        title: 'Bottom line',
        body: D.actionPlan.bottomLine
      },
      {
        kind: 'callout',
        title: 'How to use this page',
        body: 'Print this tab on Mondays. The Immediate list should be re-baselined every 7 days. The Structural list moves into a Notion ticket with an owner and a due date. The Cadence list is the operating rhythm, owned by COO and the branch GMs.'
      }
    ]
  };

  // ============================================================
  // EXPORT
  // ============================================================
  window.FZ_PAGE_DEFS = window.FZ_PAGE_DEFS || {};
  window.FZ_PAGE_DEFS['backlog'] = pages;

  // ============================================================
  // MULTI-FAMILY BUILDER
  // Builds all 9 backlog tabs against MF data. Mirrors residential
  // structure (KPI rows, charts, tables, callouts) but reads from
  // MF-specific KPI groups and uses MF market names in narrative.
  // ============================================================
  function buildMfBacklogPages (D, T, C, fmt, pal, BASE_OPTS, withOpts, moneyAxis, kpiItems, tableSection) {
    function safeArr (v) { return Array.isArray(v) ? v : []; }
    function safeObj (v) { return (v && typeof v === 'object') ? v : {}; }
    var hm = safeObj(D.headerMeta);
    var ap = safeObj(D.actionPlan);

    // Pull headline insights dynamically from the data so callouts auto-update.
    var branchRows = (T.branchDetail && T.branchDetail.rows) || [];
    var topBranch = branchRows[0] || null;        // already sorted by value/WOs
    var holdsRows = (T.holdsBySubStatus && T.holdsBySubStatus.rows) || [];
    var permitRow = holdsRows.find(function (r) { return /permit/i.test(r[0]); });
    var permitWOs = permitRow ? permitRow[1] : 0;
    var trailingRows = (T.trailingTrades && T.trailingTrades.rows) || [];
    var topTrailing = trailingRows[0] || null;
    var stuckRepRows = (T.salesTop15ByStuck && T.salesTop15ByStuck.rows) || [];
    var topStuckRep = stuckRepRows[0] || null;
    var backlogRows = (T.backlogByBranch && T.backlogByBranch.rows) || [];
    var oldestRow = backlogRows.slice().sort(function (a, b) { return b[3] - a[3]; })[0];
    var concentrationKpi = (D.kpisBacklog || []).find(function (k) { return /concentration/i.test(k.label); });
    var permitConcentration = (function () {
      // Find branch with most permits-on-hold from the branchDetail table (col index 8 = Permits)
      var byPermits = branchRows.slice().sort(function (a, b) { return (b[8] || 0) - (a[8] || 0); });
      return byPermits[0] || null;
    })();

    var mf = {};

    // ─────────────────────────────────────────────────────────────
    // INDEX / EXECUTIVE (the hub overview)
    // ─────────────────────────────────────────────────────────────
    var indexPage = {
      eyebrow: D.subtitle || 'LIVE OPERATIONS · MULTI-FAMILY',
      title: 'Multi-Family Backlog & Production',
      intro: 'A live, job-level read of the MF production book. Of the ' + fmt.money(hm.portfolioValue || 0, { short: true }) + ' portfolio sitting in front of operations across ' + (hm.totalJobs || 0) + ' jobs and ' + (hm.totalWOs || 0) + ' work orders, this page surfaces what is moving, what is stuck, and where the throughput levers are. Every number ties back to a single MF job or work order.',
      tags: [
        { kind: 'info', text: (hm.totalJobs || 0) + ' jobs · ' + (hm.totalWOs || 0) + ' WOs' },
        { kind: 'info', text: fmt.money(hm.portfolioValue || 0, { short: true }) + ' portfolio' },
        { kind: 'warn', text: (hm.avgDaysInStatus || 0) + 'd avg in status' }
      ],
      sections: [
        { kind: 'kpi-row', cols: 6, items: kpiItems(D.kpisExecutive) },
        { kind: 'kpi-row', cols: 2, items: kpiItems(D.kpisRiskOpportunity) },
        C['ch-wo-status'] ? {
          kind: 'chart-grid', cols: 2,
          heading: 'Work order status mix',
          charts: [
            {
              title: 'WOs by status',
              sub: 'Where the ' + (hm.totalWOs || 0) + ' work orders are sitting today',
              height: 300,
              config: {
                type: 'bar',
                data: { labels: C['ch-wo-status'].labels,
                  datasets: [{ data: C['ch-wo-status'].datasets[0].data,
                    backgroundColor: C['ch-wo-status'].labels.map(function (l) {
                      if (/hold/i.test(l)) return pal.danger;
                      if (/completed/i.test(l)) return pal.success;
                      if (/in progress|scheduled/i.test(l)) return pal.warning;
                      return pal.navy;
                    }), label: 'Work Orders' }] },
                options: withOpts({ indexAxis: 'y', plugins: { legend: { display: false } } })
              }
            },
            C['ch-wo-aging'] ? {
              title: 'Avg days in status',
              sub: 'Aging by status bucket',
              height: 300,
              config: {
                type: 'bar',
                data: { labels: C['ch-wo-aging'].labels,
                  datasets: [{ data: C['ch-wo-aging'].datasets[0].data,
                    backgroundColor: C['ch-wo-aging'].datasets[0].data.map(function (v) {
                      return v >= 30 ? pal.danger : v >= 14 ? pal.warning : pal.success;
                    }), label: 'Avg Days' }] },
                options: withOpts({ indexAxis: 'y', plugins: { legend: { display: false } }, scales: { x: { ticks: { callback: function (v) { return v + 'd'; } }, beginAtZero: true } } })
              }
            } : null
          ].filter(Boolean)
        } : null,
        C['ch-branch'] ? {
          kind: 'chart-grid', cols: 1,
          heading: 'WOs by branch and status',
          caption: 'Stacked bars: each branch\'s WO count split by status',
          charts: [{
            title: 'Branch × WO status',
            sub: (topBranch ? topBranch[0] + ' carries the largest book; ' : '') + 'aging concentration shows in stacked color',
            height: 320,
            config: {
              type: 'bar',
              data: { labels: C['ch-branch'].labels,
                datasets: C['ch-branch'].datasets.map(function (ds, i) {
                  var palette = [pal.navy, pal.warning, pal.success, pal.danger, '#7d3c98', '#16a085'];
                  return Object.assign({}, ds, { backgroundColor: palette[i % palette.length], stack: 'wo' });
                }) },
              options: withOpts({ scales: { x: { stacked: true }, y: { stacked: true, beginAtZero: true } } })
            }
          }]
        } : null,
        topBranch ? {
          kind: 'prose', heading: 'What is moving and what is stuck',
          cols: 2,
          cards: [
            { kind: 'tint', eyebrow: 'WHAT IS STUCK', title: 'Three drag categories',
              body: '<p><strong>Partial jobs</strong> hold ' + ((D.kpisRiskOpportunity || []).find(function (k) { return /opportunity/i.test(k.label); }) || { value: '$0' }).value + ' of recoverable revenue trapped behind a single trailing trade (' + (topTrailing ? topTrailing[0] : 'none') + ' is the top blocker). <strong>Pending Permit</strong> WOs (' + permitWOs + ' total' + (permitConcentration ? ', ' + permitConcentration[8] + ' at ' + permitConcentration[0] + ' alone' : '') + ') idle the queue. <strong>Stuck Sales</strong> sit at ' + ((D.kpisSales || []).find(function (k) { return /reps with stuck/i.test(k.label); }) || { value: '0' }).value + ' reps holding stale work, with ' + ((D.kpisSales || []).find(function (k) { return /stuck value/i.test(k.label); }) || { value: '$0' }).value + ' aged past 30 days.</p>' },
            { kind: 'navy', eyebrow: 'NEXT MOVES', title: 'Run the action plan',
              body: '<p>Open the Action Plan tab. The immediate wins are dispatch on the partial-job RTS WOs, a permit sweep at ' + (permitConcentration ? permitConcentration[0] : 'the top permit branch') + ', and a disposition pass with the top stuck rep (' + (topStuckRep ? topStuckRep[0] + ', ' + fmt.money(topStuckRep[3], { short: true }) + ' stuck' : 'review the salespeople tab') + '). None of this needs new headcount.</p>' }
          ]
        } : null,
        { kind: 'callout', tone: 'navy', title: 'How to read this dashboard',
          body: 'Each tab drills into one of the categories on this page. <strong>Partial</strong> = jobs with at least one Completed WO and at least one open WO. <strong>Holds</strong> = WOs in On Hold status, broken out by sub-status. <strong>Trades</strong> = trade-level dispatch and trailing-trade analysis. <strong>Branches</strong> and <strong>Salespeople</strong> = ownership views. <strong>Pipeline</strong> = the not-started backlog of signed work waiting to dispatch. <strong>Action Plan</strong> = the operating cadence.'
        }
      ].filter(Boolean)
    };
    mf.index = indexPage;
    mf.executive = indexPage;

    // ─────────────────────────────────────────────────────────────
    // PARTIAL (jobs with completed and open WOs)
    // ─────────────────────────────────────────────────────────────
    mf.partial = {
      eyebrow: 'PARTIAL · MF',
      title: 'Partially Complete',
      intro: 'Jobs that have at least one Completed WO and at least one open WO. These are the highest-leverage trade dispatches in the book; the customer has invoiced revenue tied up waiting on one trade.',
      tags: [
        topTrailing ? { kind: 'warn', text: 'Top blocker: ' + topTrailing[0] + ' (' + topTrailing[1] + ' WO' + (topTrailing[1] === 1 ? '' : 's') + ')' } : null,
        { kind: 'info', text: ((D.kpisPartial || []).find(function (k) { return /partial jobs/i.test(k.label); }) || { value: '0' }).value + ' partial jobs' }
      ].filter(Boolean),
      sections: [
        { kind: 'kpi-row', cols: 5, items: kpiItems(D.kpisPartial) },
        C['ch-incomplete-status'] ? {
          kind: 'chart-grid', cols: 2,
          charts: [
            {
              title: 'Open WOs on partial jobs · by status',
              sub: 'Where the trailing WOs sit',
              height: 280,
              config: {
                type: 'bar',
                data: { labels: C['ch-incomplete-status'].labels,
                  datasets: [{ data: C['ch-incomplete-status'].datasets[0].data, backgroundColor: pal.warning, label: 'WOs' }] },
                options: withOpts({ indexAxis: 'y', plugins: { legend: { display: false } } })
              }
            },
            C['ch-incomplete-age'] ? {
              title: 'Open partial-job WOs · by age',
              sub: 'Aged past 30 days = escalation',
              height: 280,
              config: {
                type: 'bar',
                data: { labels: C['ch-incomplete-age'].labels,
                  datasets: [{ data: C['ch-incomplete-age'].datasets[0].data,
                    backgroundColor: C['ch-incomplete-age'].labels.map(function (l) {
                      return /60|90/.test(l) ? pal.danger : /30/.test(l) ? pal.warning : pal.success;
                    }), label: 'Open WOs' }] },
                options: withOpts({ plugins: { legend: { display: false } } })
              }
            } : null
          ].filter(Boolean)
        } : null,
        tableSection({ id: 'trailingTrades', heading: 'Trailing trades (which trade is blocking each partial job)',
          rowMap: function (r) { return [r[0], r[1], r[2], fmt.money(r[3] || 0)]; } }),
        tableSection({ id: 'gutterStatusBreakdown', heading: 'Gutters status breakdown', caption: 'Status mix for the most-frequent trailing trade' }),
        topTrailing ? {
          kind: 'callout', tone: 'warn', title: 'Where the dispatch lever is',
          body: '<strong>' + topTrailing[0] + '</strong> is the top trailing trade with <strong>' + topTrailing[1] + '</strong> open WO' + (topTrailing[1] === 1 ? '' : 's') + ' across <strong>' + topTrailing[2] + '</strong> blocked job' + (topTrailing[2] === 1 ? '' : 's') + ', holding <strong>' + fmt.money(topTrailing[3]) + '</strong> in trapped contract value. Trade-specific dispatch surge here is the highest single-lever play in the book.'
        } : null
      ].filter(Boolean)
    };

    // ─────────────────────────────────────────────────────────────
    // HOLDS
    // ─────────────────────────────────────────────────────────────
    mf.holds = {
      eyebrow: 'HOLDS · MF',
      title: 'Holds & Blockers',
      intro: 'Every WO currently in On Hold status, broken out by sub-status. Holds are the largest single category of stuck WOs in the book, and they cluster heavily in pending-permit.',
      tags: [
        { kind: 'danger', text: ((D.kpisHolds || []).find(function (k) { return /total holds/i.test(k.label); }) || { value: '0' }).value + ' total holds' },
        { kind: 'warn',   text: ((D.kpisHolds || []).find(function (k) { return /pending permit/i.test(k.label); }) || { value: '0' }).value + ' pending permit' }
      ],
      sections: [
        { kind: 'kpi-row', cols: 4, items: kpiItems(D.kpisHolds) },
        tableSection({ id: 'holdsBySubStatus', heading: 'Holds by sub-status', caption: 'WOs in On Hold, grouped by why' }),
        permitConcentration ? {
          kind: 'callout', tone: 'warn',
          title: 'The ' + permitConcentration[0] + ' permit story',
          body: '<strong>' + permitConcentration[0] + '</strong> alone carries <strong>' + permitConcentration[8] + '</strong> of the ' + permitWOs + ' pending-permit WOs (' + (permitWOs > 0 ? Math.round(permitConcentration[8] / permitWOs * 100) : 0) + '% of all permit holds). The branch GM owns daily AHJ follow-up, and anything over 14 days needs an escalation path. Until permits move there, the queue cannot drain.'
        } : null
      ].filter(Boolean)
    };

    // ─────────────────────────────────────────────────────────────
    // TRADES
    // ─────────────────────────────────────────────────────────────
    mf.trades = {
      eyebrow: 'TRADES · MF',
      title: 'Trade Analysis',
      intro: 'Volume and dollar value carried by each trade in the MF backlog. Roofing dominates the dollar share; trailing trades (often Gutters or Siding) drive the partial-job dispatch problem.',
      sections: [
        C['ch-trade'] ? {
          kind: 'chart-grid', cols: 1,
          charts: [{
            title: 'WOs by trade and status',
            sub: 'Stacked: completed vs open vs hold per trade',
            height: 320,
            config: {
              type: 'bar',
              data: { labels: C['ch-trade'].labels,
                datasets: C['ch-trade'].datasets.map(function (ds, i) {
                  var palette = [pal.success, pal.warning, pal.danger, pal.navy];
                  return Object.assign({}, ds, { backgroundColor: palette[i % palette.length], stack: 'trade' });
                }) },
              options: withOpts({ scales: { x: { stacked: true }, y: { stacked: true, beginAtZero: true } } })
            }
          }]
        } : null,
        tableSection({ id: 'tradeDetail', heading: 'Trade detail · WOs, jobs, value',
          rowMap: function (r) { return [r[0], r[1], r[2], r[3], r[4], fmt.money(r[5] || 0)]; } }),
        tableSection({ id: 'specialtyWatch', heading: 'Specialty watch (low-volume trades)', caption: 'Volume here is informational; spikes signal a new line' }),
        { kind: 'callout', tone: 'info', title: 'Trade lever choice',
          body: 'Where one trade is materially slower or more partial-prone than the others, the lever is dedicated crew rotation, not pricing. On MF, trade-specific dispatch surges shorten the partial-job tail without adding headcount.'
        }
      ].filter(Boolean)
    };

    // ─────────────────────────────────────────────────────────────
    // BRANCHES
    // ─────────────────────────────────────────────────────────────
    mf.branches = {
      eyebrow: 'BRANCHES · MF',
      title: 'Branch Drilldown',
      intro: 'Production load by branch. ' + (topBranch ? topBranch[0] + ' carries the largest WO count and dollar value' : 'The table below shows which branch carries the largest load') + '. Status mix per branch tells you where the operational pressure is concentrated.',
      tags: branchRows.length ? [{ kind: 'info', text: branchRows.length + ' active MF branches' }] : [],
      sections: [
        topBranch ? { kind: 'kpi-row', cols: 4, items: [
            { label: 'Top Branch',     value: topBranch[0],                                                 sub: topBranch[1] + ' WOs · ' + topBranch[9] + ' jobs',           tone: 'navy' },
            { label: 'Top Branch $',   value: fmt.money(topBranch[10] || 0, { short: true }),              sub: 'signed contract value at top branch',                       tone: 'success' },
            { label: 'On Hold at Top', value: topBranch[3] + '',                                            sub: 'WOs in On Hold at ' + topBranch[0],                          tone: topBranch[3] >= 20 ? 'warn' : 'navy' },
            { label: 'Permits at Top', value: topBranch[8] + '',                                            sub: 'pending-permit WOs at ' + topBranch[0],                      tone: topBranch[8] >= 10 ? 'warn' : 'navy' }
        ]} : null,
        C['ch-branch'] ? {
          kind: 'chart-grid', cols: 1,
          charts: [{
            title: 'WOs by branch and status',
            sub: 'Stacked: each branch\'s WO count split by status',
            height: 380,
            config: {
              type: 'bar',
              data: { labels: C['ch-branch'].labels,
                datasets: C['ch-branch'].datasets.map(function (ds, i) {
                  var palette = [pal.success, pal.danger, pal.warning, pal.navy, '#7d3c98', '#16a085'];
                  return Object.assign({}, ds, { backgroundColor: palette[i % palette.length], stack: 'wo' });
                }) },
              options: withOpts({ indexAxis: 'y', scales: { x: { stacked: true, beginAtZero: true }, y: { stacked: true } } })
            }
          }]
        } : null,
        tableSection({ id: 'branchDetail', heading: 'Branch detail · full status mix and dollar value', maxHeight: '480px',
          rowMap: function (r) { return [r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8], r[9], fmt.money(r[10] || 0)]; } }),
        topBranch ? {
          kind: 'callout', tone: 'navy',
          title: topBranch[0] + ': anchor MF branch',
          body: '<strong>' + topBranch[1] + '</strong> WOs across <strong>' + topBranch[9] + '</strong> jobs at <strong>' + fmt.money(topBranch[10] || 0, { short: true }) + '</strong> portfolio value. ' + (topBranch[8] >= 15 ? 'Permit drag is concentrated here (' + topBranch[8] + ' pending-permit WOs); a permit sweep is the single biggest throughput unlock.' : 'Status mix is reasonably balanced; watch for permit drift.')
        } : null
      ].filter(Boolean)
    };

    // ─────────────────────────────────────────────────────────────
    // SALESPEOPLE
    // ─────────────────────────────────────────────────────────────
    mf.salespeople = {
      eyebrow: 'SALES · MF',
      title: 'Salesperson View',
      intro: 'Where stale work is concentrated by sales rep. Stuck = WOs older than 30 days in any non-terminal status. Most of these are dispositions, not deals to lose; clearing them keeps the pipeline clean.',
      tags: [
        { kind: 'info',   text: ((D.kpisSales || []).find(function (k) { return /active reps/i.test(k.label); }) || { value: '0' }).value + ' active reps' },
        { kind: 'danger', text: 'Stuck >30d ' + ((D.kpisSales || []).find(function (k) { return /stuck value/i.test(k.label); }) || { value: '$0' }).value }
      ],
      sections: [
        { kind: 'kpi-row', cols: 4, items: kpiItems(D.kpisSales) },
        tableSection({ id: 'salesTop15ByStuck', heading: 'Top reps by stuck value', caption: 'Sortable; the goal is to retire these to a clean disposition.', maxHeight: '520px',
          rowMap: function (r) { return [r[0], r[1], r[2], fmt.money(r[3] || 0), r[4], r[5]]; } }),
        topStuckRep ? {
          kind: 'callout', tone: 'warn', title: topStuckRep[0] + ' is carrying the most stale work',
          body: '<strong>' + fmt.money(topStuckRep[3])  + '</strong> in stuck contract value across <strong>' + topStuckRep[1] + '</strong> WOs and <strong>' + topStuckRep[2] + '</strong> jobs (' + topStuckRep[4] + ' aged past 30 days). Bulk of this concentrated in <strong>' + topStuckRep[5] + '</strong> branch' + (topStuckRep[5] > 1 ? 'es' : '') + '. Schedule a weekly disposition meeting until the stuck value drops below half this number.'
        } : null
      ].filter(Boolean)
    };

    // ─────────────────────────────────────────────────────────────
    // PIPELINE (not-started backlog)
    // ─────────────────────────────────────────────────────────────
    // Not-started snapshot pulled from the backlog KPI payload so the intro
    // narrative always matches the tiles ('—' when a KPI is missing).
    var nsJobsKpi = (D.kpisBacklog || []).find(function (k) { return /not started jobs/i.test(k.label); });
    var nsValKpi  = (D.kpisBacklog || []).find(function (k) { return /not started value/i.test(k.label); });
    var nsOldKpi  = (D.kpisBacklog || []).find(function (k) { return /oldest/i.test(k.label); });

    mf.pipeline = {
      eyebrow: 'PIPELINE · MF NOT-STARTED',
      title: 'Backlog Pipeline',
      intro: 'Signed jobs waiting to dispatch. The ' + (nsJobsKpi ? nsJobsKpi.value : '—') + ' not-started jobs hold ' + (nsValKpi ? nsValKpi.value : '—') + ' of contract value; the oldest has been waiting ' + (nsOldKpi ? nsOldKpi.value : '—') + '. This is the queue that has to clear before MF can sustain a higher monthly invoicing pace.',
      tags: [
        { kind: 'info',   text: ((D.kpisBacklog || []).find(function (k) { return /not started jobs/i.test(k.label); }) || { value: '0' }).value + ' not-started jobs' },
        { kind: 'danger', text: 'Oldest ' + ((D.kpisBacklog || []).find(function (k) { return /oldest/i.test(k.label); }) || { value: '0d' }).value }
      ],
      sections: [
        { kind: 'kpi-row', cols: 4, items: kpiItems(D.kpisBacklog) },
        C['ch-backlog'] ? {
          kind: 'chart-grid', cols: 1,
          charts: [{
            title: 'Not-started jobs by branch',
            sub: 'Where the signed-but-not-dispatched book sits',
            height: 320,
            config: {
              type: 'bar',
              data: { labels: C['ch-backlog'].labels,
                datasets: [{ data: C['ch-backlog'].datasets[0].data, backgroundColor: pal.navy, label: 'Jobs' }] },
              options: withOpts({ indexAxis: 'y', plugins: { legend: { display: false } } })
            }
          }]
        } : null,
        tableSection({ id: 'backlogByBranch', heading: 'Not-started backlog by branch', caption: 'Sorted by branch · oldest column shows the worst case at each branch',
          rowMap: function (r) { return [r[0], r[1], fmt.money(r[2] || 0), r[3] + 'd']; } }),
        tableSection({ id: 'oldest15NotStarted', heading: '15 oldest not-started jobs', caption: 'These need a disposition: dispatch, kill, or escalate', maxHeight: '520px',
          rowMap: function (r) { return [r[0], r[1], r[2], r[3], r[4], r[5], r[6] + 'd', fmt.money(r[7] || 0)]; } }),
        oldestRow ? {
          kind: 'callout', tone: 'danger', title: 'Audit the not-started intake trigger',
          body: 'The oldest not-started job is <strong>' + oldestRow[3] + ' days</strong> at <strong>' + oldestRow[0] + '</strong>. Concentration is heaviest at <strong>' + (concentrationKpi ? concentrationKpi.value : '—') + '</strong>. The fix is operational: define what "ready to dispatch" means after a contract is signed, and put a daily intake review on the branch GM.'
        } : null
      ].filter(Boolean)
    };

    // ─────────────────────────────────────────────────────────────
    // ACTION PLAN
    // ─────────────────────────────────────────────────────────────
    var immediate = safeArr(ap.immediate);
    var structural = safeArr(ap.structural);
    var cadence = safeArr(ap.cadence);

    mf['action-plan'] = {
      eyebrow: 'PLAN · MF NEXT 30 DAYS',
      title: 'Action Plan',
      intro: ap.strategicGoal || 'Reduce the at-risk and trapped contract value, clear the not-started backlog, and tighten the operating cadence on holds and partial jobs without adding headcount.',
      tags: [
        { kind: 'warn',   text: immediate.length + ' immediate' },
        { kind: 'info',   text: structural.length + ' structural' },
        { kind: 'navy',   text: cadence.length + ' cadence items' }
      ],
      sections: [
        kpiItems(D.kpisRiskOpportunity).length ? { kind: 'kpi-row', cols: 2, items: kpiItems(D.kpisRiskOpportunity) } : null,
        (immediate.length || structural.length || cadence.length) ? {
          kind: 'prose', heading: 'Three lists, one cadence',
          cols: 3,
          cards: [
            immediate.length ? {
              kind: 'tint', eyebrow: 'IMMEDIATE',
              title: 'Run this week',
              list: immediate.map(function (t) { return { text: t, tone: 'warn', icon: '!' }; })
            } : null,
            structural.length ? {
              eyebrow: 'STRUCTURAL',
              title: 'Build over 30 days',
              list: structural.map(function (t) { return { text: t, tone: 'navy', icon: '→' }; })
            } : null,
            cadence.length ? {
              eyebrow: 'CADENCE',
              title: 'Operating rhythm',
              list: cadence.map(function (t) { return { text: t, tone: 'navy', icon: '↻' }; })
            } : null
          ].filter(Boolean)
        } : null,
        ap.bottomLine ? {
          kind: 'callout', tone: 'navy', title: 'Bottom line',
          body: ap.bottomLine
        } : null,
        { kind: 'callout', tone: 'info', title: 'How to use this page',
          body: 'Print this tab on Mondays. The Immediate list should be re-baselined every 7 days. The Structural list moves into a Notion ticket with an owner and a due date. The Cadence list is the operating rhythm, owned by COO and the branch GMs.'
        }
      ].filter(Boolean)
    };

    return mf;
  }
})();
