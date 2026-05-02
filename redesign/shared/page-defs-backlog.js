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
  // INDEX (Backlog & Production hub)
  // ============================================================
  var pages = {};

  pages.index = {
    eyebrow: 'LIVE BACKLOG · ' + (D.headerMeta.totalJobs) + ' JOBS · ' + (D.headerMeta.totalWOs) + ' WORK ORDERS',
    title: 'Job Backlog & Production',
    intro: 'A live, job-level read of the residential production book. Of the $9.9M portfolio sitting in front of operations, this page surfaces what is moving, what is stuck, and where the throughput levers are. Every number ties back to a single job or work order, so you can drill from the headline to the worksite.',
    tags: [
      { kind: 'info',    text: D.headerMeta.totalJobs + ' jobs in backlog' },
      { kind: 'warn',    text: '78 partial jobs · $2.0M trapped' },
      { kind: 'success', text: '40 RTS WOs ready to dispatch' }
    ],
    sections: [
      {
        kind: 'kpi-row', cols: 6,
        items: kpiItems(D.kpisExecutive)
      },
      {
        kind: 'kpi-row', cols: 2,
        items: [
          {
            label: 'Revenue at Risk',
            value: fmt.money(1577176, { short: true }),
            sub: 'Jobs with WOs >30 days in status',
            tone: 'danger'
          },
          {
            label: 'Immediate Throughput Opportunity',
            value: fmt.money(1994476, { short: true }),
            sub: 'Partial-job value waiting on trailing trades',
            tone: 'success'
          }
        ]
      },
      {
        kind: 'chart-grid', cols: 2, heading: 'Where the Work Sits',
        caption: '840 work orders sliced by status and by branch',
        charts: [
          {
            title: 'Work Order Status Distribution',
            sub: '266 RTS, 210 On Hold, 175 Scheduled · the heaviest queue is the dispatchable one',
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
            sub: 'All 13 markets · Columbus and Detroit Metro carry the load',
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
            sub: 'Pending Insurance Claim is the structural drag · everything else should clear in days, not months',
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
            sub: 'Roofing is the volume engine · Gutters is the trailing-trade bottleneck',
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
            sub: '440 jobs · $7.22M signed and waiting · Columbus and Detroit Metro hold 61%',
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
            sub: '210 WOs · Pending Permit (112) and Pending Sales (39) account for 72% of holds',
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
          { kind: 'tint', eyebrow: 'WHAT IS WORKING', title: 'The book is real and it is bigger than capacity', body: '<p>$9.9M of signed contract value sits in front of the production org today. 154 jobs are actively in motion and 90 work orders have already been completed in this window. The portfolio is not the issue, throughput is.</p>' },
          { eyebrow: 'WHAT IS STUCK', title: 'Three drag categories', body: '<p><strong>Partial jobs</strong> hold $1.99M of recoverable revenue trapped behind a single trailing trade (Gutters most often). <strong>Pending Permit</strong> WOs (112 total, 72 in Detroit Metro alone) idle the queue. <strong>Pending Sales</strong> dispositions sit at 39 WOs with the oldest at 229 days, an aged cohort the sales ops team needs to clear.</p>' },
          { kind: 'navy', eyebrow: 'NEXT MOVES', title: 'Run the action plan', body: '<p>Open the Action Plan tab. The immediate wins: dispatch the 40 RTS WOs sitting on partial jobs (no blockers), re-dispatch the 28 RAS WOs (oldest is 111 days), and run a Detroit Metro permit sweep. None of this needs new headcount.</p>' }
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
    intro: 'The job-level state of production: how the 594-job book is split between active and waiting, where the dollar value lives, and the two numbers that frame the throughput conversation.',
    tags: [
      { kind: 'info', text: '$' + (D.headerMeta.portfolioValue / 1e6).toFixed(1) + 'M portfolio' },
      { kind: 'warn', text: '12d avg in status' }
    ],
    sections: [
      {
        kind: 'kpi-row', cols: 6,
        items: kpiItems(D.kpisExecutive)
      },
      {
        kind: 'kpi-row', cols: 2,
        items: [
          {
            label: 'Revenue at Risk',
            value: fmt.money(1577176),
            sub: 'Jobs with WOs >30 days in status',
            tone: 'danger'
          },
          {
            label: 'Immediate Throughput Opportunity',
            value: fmt.money(1994476),
            sub: 'Partial-job value waiting on trailing trades',
            tone: 'success'
          }
        ]
      },
      {
        kind: 'chart-grid', cols: 2, heading: 'Production Snapshot',
        caption: 'Where work orders sit today and how long they have been there',
        charts: [
          {
            title: 'Work Order Status Distribution',
            sub: '840 WOs · top three statuses (RTS, On Hold, Scheduled) carry 78% of the queue',
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
        heading: 'Branch scorecard · all 13 markets',
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
        body: 'The book is healthy in volume terms (594 jobs, $9.9M signed). The drag is in the middle of the funnel: 78 partial jobs trap $2.0M of already-signed revenue, 210 WOs are on hold (over half of them on permits), and 105 WOs older than 30 days hold $930K of stuck contract value. The fix list is operational, not strategic, and the top three workstreams (RTS dispatch, RAS re-dispatch, Detroit Metro permits) move the number without adding headcount.'
      }
    ]
  };

  // ============================================================
  // PARTIALLY COMPLETE
  // ============================================================
  pages.partial = {
    eyebrow: 'PARTIAL JOBS · TRAILING TRADES',
    title: 'Partially Complete',
    intro: 'Jobs that are 80% done in production but waiting on a single trade to close out. This is the most concentrated near-term lever in the book: $2.0M of already-signed revenue gated by 96 open work orders.',
    tags: [
      { kind: 'warn',    text: '78 partial jobs' },
      { kind: 'success', text: '$1.99M recoverable' }
    ],
    sections: [
      {
        kind: 'kpi-row', cols: 5,
        items: kpiItems(D.kpisPartial)
      },
      {
        kind: 'chart-grid', cols: 2, heading: 'Where the Trailing WOs Live',
        caption: 'Status mix and aging distribution of the 96 open WOs on partial jobs',
        charts: [
          {
            title: 'Incomplete WOs by Status (partial jobs only)',
            sub: 'Of 96 trailing WOs · 40 are RTS (no blocker), 22 on hold, 19 scheduled',
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
            sub: '11 of 96 are >60 days · those are the escalation candidates',
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
        caption: 'Ranked by trapped contract value · Gutters is the dominant trailing trade',
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
            sub: 'Gutters alone gates $1.05M across 44 partial jobs',
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
        body: '40 of the 96 trailing WOs are Ready to Schedule, meaning no blocker, no hold, no permit. Those dispatch today. The Gutter sweep is the biggest single concentration: 44 partial jobs, $1.05M of trapped value, all waiting on the same trade. A two-week dispatch surge clears most of it.'
      }
    ]
  };

  // ============================================================
  // HOLDS & BLOCKERS
  // ============================================================
  pages.holds = {
    eyebrow: 'HOLDS · 210 WORK ORDERS',
    title: 'Holds & Blockers',
    intro: 'Every WO sitting in On Hold status, broken down by why. The 210 holds split into six sub-status categories, with permits and pending sales accounting for 72% of the total.',
    tags: [
      { kind: 'danger', text: '210 holds total' },
      { kind: 'warn',   text: '115 pending permit' }
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
            sub: 'Pending Permit dominates · Homeowner Request is the slowest-clearing bucket at 61d avg',
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
        caption: 'Six sub-status categories · WO count, average age, and worst-case oldest',
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
        caption: 'Where the 115 pending-permit WOs are clustered',
        charts: [
          {
            title: 'Pending Permits by Branch',
            sub: 'Detroit Metro carries 72 of 115 (63%) · this is a single-branch AHJ-relations problem, not a company-wide one',
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
      {
        kind: 'callout', tone: 'danger',
        title: 'The Detroit Metro permit story',
        body: 'Detroit Metro alone carries 72 of the 115 pending-permit WOs (63% of all permit holds). The branch GM owns daily AHJ follow-up, and anything over 14 days needs an escalation path. Until permits move there, the queue cannot drain.'
      }
    ]
  };

  // ============================================================
  // TRADE ANALYSIS
  // ============================================================
  pages.trades = {
    eyebrow: 'TRADES · 13 CATEGORIES',
    title: 'Trade Analysis',
    intro: 'How each trade contributes to the production load. Roofing is the volume engine; Gutters is the trailing-trade bottleneck on partial jobs; specialty trades (Solar, Metal) are the small-but-watch buckets.',
    tags: [{ kind: 'info', text: '840 WOs across 13 trades' }],
    sections: [
      {
        kind: 'kpi-row', cols: 4,
        items: [
          { label: 'Roofing WOs',          value: '520',  sub: '69 done · 451 open · $6.14M', tone: 'navy' },
          { label: 'Gutters WOs',          value: '179',  sub: '7 done · 172 open · trailing-trade #1', tone: 'warn' },
          { label: 'Siding WOs',           value: '86',   sub: '8 done · 78 open · $815K' },
          { label: 'Specialty (Solar+Metal)', value: '16',   sub: '9 Solar · 7 Metal · watch list', tone: 'success' }
        ]
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
            sub: 'Roofing carries 62% of the dollar value across all open and closed work',
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
            sub: 'The trailing-trade bottleneck, status by status · 95 RTS Gutters waiting to dispatch',
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
        heading: 'Trade performance · all 13 trades',
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
      {
        kind: 'callout', tone: 'warn',
        title: 'The Gutter math',
        body: 'Of 179 Gutter WOs in the system, only 7 are complete. 95 sit in Ready to Schedule and 42 are on hold. Gutters trail 44 partial jobs holding $1.05M. A trade-specific dispatch surge (or a sub-fleet expansion) is the highest-leverage move in the production org right now.'
      }
    ]
  };

  // ============================================================
  // BRANCH DRILLDOWN
  // ============================================================
  pages.branches = {
    eyebrow: 'BRANCHES · 13 MARKETS',
    title: 'Branch Drilldown',
    intro: 'Production load by branch, with the full status mix and dollar value carried at each market. Columbus and Detroit Metro carry over half the company portfolio.',
    tags: [{ kind: 'info', text: '13 active branches' }],
    sections: [
      {
        kind: 'kpi-row', cols: 4,
        items: [
          { label: 'Top Branch by Value', value: 'Columbus',     sub: '$2.93M · 290 WOs · 208 jobs', tone: 'navy' },
          { label: '#2 by Value',          value: 'Detroit Metro', sub: '$2.75M · 210 WOs · 149 jobs', tone: 'success' },
          { label: 'Highest Permit Load',  value: 'Detroit Metro', sub: '72 pending-permit WOs',       tone: 'danger' },
          { label: 'Cleanest Mix',          value: 'Cleveland',     sub: '11 of 106 done · 36 scheduled', tone: 'success' }
        ]
      },
      {
        kind: 'chart-grid', cols: 1, heading: 'Branch Production Load',
        caption: 'Stacked status mix, all 13 markets',
        charts: [
          {
            title: 'Branch Production Load by Status',
            sub: 'Each bar = total WOs at the branch · stacked by status · Columbus carries 290 WOs',
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
            sub: 'Top two branches carry $5.7M of the $9.9M portfolio',
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
            sub: 'Where the 210 holds are clustered',
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
        heading: 'Full branch detail · all 13 markets',
        caption: 'WO totals, status breakdown, permit load, and contract value at each branch',
        rowMap: function (r) {
          return [
            { html: '<strong>' + r[0] + '</strong>' },
            r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8], r[9],
            { html: '<strong>' + fmt.money(r[10]) + '</strong>' }
          ];
        }
      }),
      {
        kind: 'callout',
        title: 'Two-branch concentration',
        body: 'Columbus and Detroit Metro together carry 500 of 840 WOs (60%) and $5.7M of the $9.9M portfolio (58%). Any operational lift at those two branches moves the company number. Ops investments (dispatcher capacity, permit ops, sub-trade fleet) should be sized to that concentration first.'
      }
    ]
  };

  // ============================================================
  // SALESPERSON VIEW
  // ============================================================
  pages.salespeople = {
    eyebrow: 'SALES BACKLOG · 111 ACTIVE REPS',
    title: 'Salesperson View',
    intro: 'How the backlog looks from the sales side: which reps have the most stuck contract value and the longest aging WOs sitting against their book.',
    tags: [
      { kind: 'info',   text: '111 active reps' },
      { kind: 'danger', text: '$930K stuck >30d' }
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
            sub: 'Hunter Carrington Scott carries one $239K stuck job · concentration matters more than count',
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
        body: 'The weekly Pending Sales disposition meeting (Jesse McCorkle, Matt Henry) should triage from this list. Top 5 reps account for $700K+ of stuck value. Most of these are dispositions, not deals to lose, so a 14-day cohort sweep clears the bulk of it.'
      }
    ]
  };

  // ============================================================
  // BACKLOG PIPELINE
  // ============================================================
  pages.pipeline = {
    eyebrow: 'NOT-STARTED BACKLOG · 440 JOBS · $7.22M',
    title: 'Backlog Pipeline',
    intro: 'The book of signed work that has not yet been dispatched: 440 jobs holding $7.22M of revenue. This is the production runway for the next 30 to 60 days.',
    tags: [
      { kind: 'info', text: '440 jobs not started' },
      { kind: 'warn', text: 'Oldest 239 days' }
    ],
    sections: [
      {
        kind: 'kpi-row', cols: 4,
        items: kpiItems(D.kpisBacklog)
      },
      {
        kind: 'chart-grid', cols: 2, heading: 'Backlog Distribution',
        caption: 'Where the 440 not-started jobs sit, by branch',
        charts: [
          {
            title: 'Backlog by Branch (Job Count)',
            sub: 'Columbus carries 159 of 440 (36%) · Detroit Metro adds 111 (25%)',
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
            sub: 'Columbus and Detroit Metro hold $4.18M of the $7.22M not-started book (58%)',
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
        caption: 'The 440-job not-started book, ranked by job count',
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
      {
        kind: 'callout', tone: 'danger',
        title: 'The 239-day job',
        body: 'Job-102051 (Detroit Metro, Masonry, Pending Permit) has been waiting 239 days. The next four oldest are all 138 days or more. None of these clear without a single owner taking responsibility for the AHJ follow-up. Assign by name at the next ops standup.'
      }
    ]
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
          { label: 'Throughput Opportunity', value: '$2.0M', sub: 'Partial-job recoverable revenue', tone: 'success' },
          { label: 'Revenue at Risk',         value: '$1.6M', sub: 'WOs >30 days in status',          tone: 'danger' },
          { label: 'RTS Ready Today',         value: '40',    sub: 'No blockers, just dispatch',     tone: 'success' },
          { label: 'RAS to Re-Dispatch',      value: '28',    sub: 'Oldest 111 days',                 tone: 'warn' }
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
})();
