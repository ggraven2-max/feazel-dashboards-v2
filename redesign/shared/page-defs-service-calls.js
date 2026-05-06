/* ============================================================
   FEAZEL · Service Calls YTD Page Definitions
   Loaded after data.js / chart-theme.js / page-renderer.js.
   Each entry under FZ_PAGE_DEFS["service-calls"][slug] is a page def.
   ============================================================ */
(function () {
  var D = window.FZ && window.FZ.data && window.FZ.data.SERVICE_CALLS;
  if (!D) {
    console.error('[FZ] SERVICE_CALLS data missing.');
    return;
  }
  var FZ = window.FZ;
  var pal = FZ.palette;
  var fmt = FZ.fmt;

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
  function safeArr(v) { return Array.isArray(v) ? v : []; }
  function safeObj(v) { return (v && typeof v === 'object') ? v : {}; }

  var hm = safeObj(D.headerMeta);
  var bench = safeObj(D.benchmarks);
  var techs = safeArr(D.techRows);
  var branches = safeArr(D.branchRows);
  var accounts = safeArr(D.accountRows);
  var monthly = safeArr(D.monthly);
  var stuck = safeArr(D.woStats && D.woStats.stuck);
  var multiTouch = safeArr(D.woStats && D.woStats.multiTouch);
  var dispro = safeArr(D.woStats && D.woStats.disproportionate);
  var longAppts = safeArr(D.longAppts);
  var buckets = safeObj(D.buckets);
  var findings = safeObj(D.findings);

  // Tone helper
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

  var pages = {};

  // ─────────────────────────────────────────────────────────────
  // INDEX / Dashboard Home
  // ─────────────────────────────────────────────────────────────
  pages.index = {
    eyebrow: D.subtitle || 'SERVICE CALLS · YTD',
    title: 'Service Calls YTD',
    intro: 'A live, appointment-level read of the Service book. ' + (hm.totalAppts || 0).toLocaleString() +
      ' service appointments YTD across ' + (hm.uniqTechs || 0) + ' primary techs and ' + (hm.uniqAccounts || 0).toLocaleString() +
      ' unique accounts. Source: <code>' + (D.sourceFile || 'Service Appointments XLSX') + '</code>.',
    tags: [
      { kind: 'info',    text: (hm.totalAppts || 0).toLocaleString() + ' appts · ' + (hm.uniqWOs || 0).toLocaleString() + ' WOs' },
      { kind: 'info',    text: (hm.totalHours || 0).toLocaleString() + ' actual hrs' },
      { kind: hm.aptsOpen > 0 ? 'warn' : 'success', text: (hm.aptsOpen || 0).toLocaleString() + ' open appointments' }
    ],
    sections: [
      { kind: 'kpi-row', cols: 6, items: kpiItems(D.kpis) },
      monthly.length ? {
        kind: 'chart-grid', cols: 1,
        heading: 'Monthly appointment volume',
        charts: [{
          title: 'Service appointments by month',
          sub: 'Bars = appointment count · line = actual hours',
          height: 300,
          config: {
            type: 'bar',
            data: {
              labels: monthly.map(function (m) { return m.label; }),
              datasets: [
                { type: 'bar',  label: 'Appointments', data: monthly.map(function (m) { return m.count; }),
                  backgroundColor: pal.navy, borderRadius: 4, yAxisID: 'y' },
                { type: 'line', label: 'Hours',        data: monthly.map(function (m) { return m.hours; }),
                  borderColor: pal.warning, backgroundColor: pal.warning, tension: 0.3,
                  pointBackgroundColor: '#fff', borderWidth: 3, yAxisID: 'y1' }
              ]
            },
            options: withOpts({
              scales: {
                y: { position: 'left', beginAtZero: true },
                y1: { position: 'right', grid: { display: false }, ticks: { color: pal.warning, callback: function (v) { return v + ' h'; } }, beginAtZero: true }
              }
            })
          }
        }]
      } : null,
      Object.keys(buckets).length ? {
        kind: 'chart-grid', cols: 1,
        charts: [{
          title: 'Appointment duration distribution',
          sub: 'How long the typical service call runs',
          height: 280,
          config: {
            type: 'bar',
            data: {
              labels: Object.keys(buckets),
              datasets: [{
                data: Object.values(buckets),
                backgroundColor: ['#9aa6b8', pal.navy, pal.success, pal.warning, pal.danger, '#7d3c98'],
                label: 'Appointments'
              }]
            },
            options: withOpts({ plugins: { legend: { display: false } } })
          }
        }]
      } : null,
      branches.length ? {
        kind: 'table',
        heading: 'By branch',
        caption: 'Sorted by appointment count · ' + branches.length + ' active service branches',
        headers: [
          { label: 'Branch', num: false },
          { label: 'Appointments', num: true },
          { label: 'Techs', num: true },
          { label: 'Accounts', num: true },
          { label: 'Actual Hours', num: true },
          { label: 'Billable Hrs', num: true },
          { label: 'Avg min/appt', num: true },
          { label: 'Contract $', num: true }
        ],
        rows: branches.map(function (b) {
          return [
            { html: '<strong>' + b.branch + '</strong>' },
            b.count.toLocaleString(),
            b.techs,
            b.accounts.toLocaleString(),
            b.hours.toLocaleString() + ' h',
            b.billHours.toLocaleString() + ' h',
            b.avgMinPerAppt + 'm',
            fmt.money(b.contract)
          ];
        })
      } : null,
      { kind: 'callout', tone: 'info',
        title: 'How to read this dashboard',
        body: 'Use the <strong>Appointments</strong> tab for the per-appointment narrative and warnings. <strong>Techs</strong> ranks every primary resource by volume, hours, and bill ratio. <strong>Branches</strong> and <strong>Accounts</strong> are concentration views. <strong>Aging & Warnings</strong> surfaces stuck WOs, multi-touch jobs, and disproportionate hours-to-contract ratios. <strong>Findings</strong> consolidates the auto-detected concerns and positives.' }
    ].filter(Boolean)
  };

  // ─────────────────────────────────────────────────────────────
  // APPOINTMENTS
  // ─────────────────────────────────────────────────────────────
  pages.appointments = {
    eyebrow: 'APPOINTMENTS · DEEP DIVE',
    title: 'Service Appointments',
    intro: 'A comprehensive read of every Service Appointment YTD. Records are deduped at the appointment level (one row per Salesforce SA). Hours = Actual Duration; Billable Hrs = labor-units billed (laborers × time on site). The two diverge when crews work in pairs.',
    tags: [
      { kind: 'info',    text: (hm.totalAppts || 0).toLocaleString() + ' service appointments' },
      { kind: 'info',    text: (hm.totalHours || 0).toLocaleString() + ' actual hrs · ' + (hm.totalBillable || 0).toLocaleString() + ' billable hrs' },
      { kind: 'info',    text: 'Network bill ratio ' + (hm.networkBillRatio || 0).toFixed(2) + 'x' }
    ],
    sections: [
      { kind: 'kpi-row', cols: 4, items: [
        { label: 'Appointments',         value: (hm.totalAppts || 0).toLocaleString(), sub: 'YTD service appointments', tone: 'navy' },
        { label: 'Avg Duration',         value: (hm.avgMinPerAppt || 0) + 'm',         sub: 'avg actual minutes per appointment', tone: 'navy' },
        { label: 'Billable Multiplier',  value: (hm.networkBillRatio || 0).toFixed(2) + 'x', sub: 'billable man-hours / actual hours · network', tone: 'navy' },
        { label: 'Open (no end time)',   value: (hm.aptsOpen || 0).toLocaleString(),   sub: hm.aptsOpen > 0 ? 'data hygiene flag' : 'all closed cleanly', tone: hm.aptsOpen > 0 ? 'warn' : 'success' }
      ]},
      { kind: 'kpi-row', cols: 4, items: [
        { label: 'Total Hours On Site',  value: (hm.totalHours || 0).toLocaleString() + ' h',   sub: 'sum of actual durations',                          tone: 'navy' },
        { label: 'Total Billable Hrs',   value: (hm.totalBillable || 0).toLocaleString() + ' h', sub: 'man-hours billed (laborers × time)',               tone: 'navy' },
        { label: 'Contract $ on Calls',  value: fmt.money(hm.totalContract || 0),                sub: (hm.uniqAccounts || 0).toLocaleString() + ' unique accounts', tone: 'navy' },
        { label: 'Calls per WO',         value: hm.uniqWOs > 0 ? (hm.totalAppts / hm.uniqWOs).toFixed(2) : '—',
          sub: 'avg appointments per work order', tone: hm.uniqWOs > 0 && (hm.totalAppts / hm.uniqWOs) >= 1.5 ? 'warn' : 'success' }
      ]},
      Object.keys(buckets).length ? {
        kind: 'chart-grid', cols: 2,
        charts: [
          {
            title: 'Duration distribution',
            sub: 'Most service calls close in under 2 hours',
            height: 280,
            config: {
              type: 'bar',
              data: {
                labels: Object.keys(buckets),
                datasets: [{
                  data: Object.values(buckets),
                  backgroundColor: Object.keys(buckets).map(function (k) {
                    return />8h|4-8h/.test(k) ? pal.danger : /2-4h/.test(k) ? pal.warning : pal.navy;
                  }),
                  label: 'Appointments'
                }]
              },
              options: withOpts({ plugins: { legend: { display: false } } })
            }
          },
          monthly.length ? {
            title: 'Appointments per month',
            sub: 'Volume curve YTD',
            height: 280,
            config: {
              type: 'line',
              data: {
                labels: monthly.map(function (m) { return m.label; }),
                datasets: [{
                  label: 'Appointments',
                  data: monthly.map(function (m) { return m.count; }),
                  borderColor: pal.navy, tension: 0.3, pointBackgroundColor: '#fff', borderWidth: 3,
                  fill: false
                }]
              },
              options: withOpts({ plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } })
            }
          } : null
        ].filter(Boolean)
      } : null,
      monthly.length ? {
        kind: 'table',
        heading: 'Monthly appointment detail',
        headers: [
          { label: 'Month', num: false },
          { label: 'Appointments', num: true },
          { label: 'Actual Hours', num: true },
          { label: 'Billable Hrs', num: true },
          { label: 'Bill Ratio', num: true },
          { label: 'Contract $', num: true }
        ],
        rows: monthly.map(function (m) {
          var ratio = m.hours > 0 ? m.billable / m.hours : 0;
          return [
            { html: '<strong>' + m.label + '</strong>' },
            m.count.toLocaleString(),
            m.hours.toLocaleString() + ' h',
            m.billable.toLocaleString() + ' h',
            ratio.toFixed(2) + 'x',
            fmt.money(m.contract)
          ];
        })
      } : null,
      longAppts.length ? {
        kind: 'table',
        heading: 'Longest single appointments',
        caption: 'Single appointments at 4+ hours — manual review for scoping or scheduling issues',
        maxHeight: '520px',
        headers: [
          { label: 'Appt #', num: false },
          { label: 'WO #',   num: false },
          { label: 'Tech',   num: false },
          { label: 'Branch', num: false },
          { label: 'Account', num: false },
          { label: 'Hours',   num: true },
          { label: 'Laborers', num: true },
          { label: 'Contract $', num: true },
          { label: 'Start', num: false }
        ],
        rows: longAppts.map(function (a) {
          var hrPill = a.hours >= 8
            ? '<span class="pill pill-danger">' + a.hours + ' h</span>'
            : a.hours >= 6
              ? '<span class="pill pill-warn">' + a.hours + ' h</span>'
              : a.hours + ' h';
          return [
            a.apptNum,
            a.wo,
            a.tech,
            a.branch,
            a.account,
            { html: hrPill },
            a.laborers,
            fmt.money(a.contract),
            a.start || '—'
          ];
        })
      } : null,
      { kind: 'callout', tone: 'info', title: 'What "Billable Time" means here',
        body: 'In this Salesforce export, Billable Time is the man-hours posted to the job (Laborers × hours on site), not the customer\'s billable rate. A 2-laborer crew on a 1-hour appointment posts 2 billable man-hours. The network ratio (Bill Ratio) tells you how aggressively the typical appointment is crewed — currently ' + (hm.networkBillRatio || 0).toFixed(2) + 'x. Outliers above 2x deserve a look at whether the crew was actually that size.'
      }
    ].filter(Boolean)
  };

  // ─────────────────────────────────────────────────────────────
  // TECHS
  // ─────────────────────────────────────────────────────────────
  var top10Techs = techs.slice(0, 10);
  var top10Apts = top10Techs.reduce(function (s, t) { return s + t.count; }, 0);
  var top10Pct = hm.totalAppts > 0 ? (top10Apts / hm.totalAppts * 100) : 0;

  pages.techs = {
    eyebrow: 'TECHS · PRIMARY RESOURCE',
    title: 'Techs',
    intro: 'Every primary resource that ran at least one service appointment YTD. Bill Ratio = billable man-hours / actual hours. A ratio of 1.0 means a solo tech billing exactly time-on-site; 2.0 means a 2-laborer crew on every call (or 1.5x crew average). Compare to the network ' + (hm.networkBillRatio || 0).toFixed(2) + 'x baseline.',
    tags: [
      { kind: 'info', text: techs.length + ' techs' },
      { kind: 'info', text: 'Top 10 = ' + top10Pct.toFixed(0) + '% of appointments' }
    ],
    sections: [
      { kind: 'kpi-row', cols: 4, items: [
        { label: 'Active Techs',     value: techs.length + '', sub: 'with at least one appointment YTD',                tone: 'navy' },
        { label: 'Top Tech',         value: techs[0] ? techs[0].tech : '—', sub: techs[0] ? techs[0].count + ' appts · ' + techs[0].hours + ' h' : '', tone: 'success' },
        { label: 'Top 10 Share',     value: top10Pct.toFixed(0) + '%', sub: 'of all appointments',                       tone: top10Pct > 70 ? 'warn' : 'navy' },
        { label: 'Network Bill Ratio', value: (bench.avgBillRatio || 0).toFixed(2) + 'x', sub: 'avg billable / actual across techs ≥30 appts', tone: 'navy' }
      ]},
      techs.length ? {
        kind: 'chart-grid', cols: 1,
        charts: [{
          title: 'Top techs by appointment count',
          sub: 'All ' + techs.length + ' techs ranked',
          height: Math.max(360, techs.length * 18),
          config: {
            type: 'bar',
            data: {
              labels: techs.map(function (t) { return t.tech; }),
              datasets: [{
                data: techs.map(function (t) { return t.count; }),
                backgroundColor: pal.navy,
                label: 'Appointments'
              }]
            },
            options: withOpts({ indexAxis: 'y', plugins: { legend: { display: false } } })
          }
        }]
      } : null,
      techs.length ? {
        kind: 'table',
        heading: 'All ' + techs.length + ' techs · sortable detail',
        caption: 'Bill Ratio pill: green ≤1.3x, yellow 1.3-2.0x, red >2.0x · Avg min/appt pill: green ≤90, yellow 90-150, red >150',
        maxHeight: '640px',
        headers: [
          { label: 'Tech', num: false },
          { label: 'Appts', num: true },
          { label: 'Hours', num: true },
          { label: 'Billable Hrs', num: true },
          { label: 'Bill Ratio', num: true },
          { label: 'Avg min/appt', num: true },
          { label: 'Contract $', num: true },
          { label: 'Avg $/appt', num: true },
          { label: 'Jobs', num: true },
          { label: 'Branches', num: false }
        ],
        rows: techs.map(function (t) {
          var brPill = t.billRatio <= 1.3
            ? '<span class="pill pill-success">' + t.billRatio.toFixed(2) + 'x</span>'
            : t.billRatio <= 2.0
              ? '<span class="pill pill-warn">' + t.billRatio.toFixed(2) + 'x</span>'
              : '<span class="pill pill-danger">' + t.billRatio.toFixed(2) + 'x</span>';
          var minPill = t.avgMinPerAppt <= 90
            ? '<span class="pill pill-success">' + t.avgMinPerAppt + 'm</span>'
            : t.avgMinPerAppt <= 150
              ? '<span class="pill pill-warn">' + t.avgMinPerAppt + 'm</span>'
              : '<span class="pill pill-danger">' + t.avgMinPerAppt + 'm</span>';
          return [
            { html: '<strong>' + t.tech + '</strong>' },
            t.count.toLocaleString(),
            t.hours.toLocaleString() + ' h',
            t.billHours.toLocaleString() + ' h',
            { html: brPill },
            { html: minPill },
            fmt.money(t.contract),
            fmt.money(t.avgContract),
            t.jobs,
            t.branches
          ];
        })
      } : null,
      { kind: 'callout', tone: 'info', title: 'How to read the tech table',
        body: 'High <strong>Bill Ratio</strong> usually means a tech runs in pairs (2-laborer crews). That\'s expected for some service work, but if it\'s consistent across a single tech with low ticket size, that\'s a labor cost problem. <strong>Avg min/appt</strong> below the network ' + (bench.avgMinPerAppt || 0) + 'min suggests efficient dispatch density; above 150min on a high-volume book suggests either heavy work (insurance/MF) or scope creep.'
      }
    ].filter(Boolean)
  };

  // ─────────────────────────────────────────────────────────────
  // BRANCHES
  // ─────────────────────────────────────────────────────────────
  pages.branches = {
    eyebrow: 'BRANCHES',
    title: 'Branches',
    intro: 'Service appointment volume and hours per branch. ' + branches.length + ' branches with at least one service appointment YTD.',
    tags: branches.length ? [{ kind: 'info', text: branches.length + ' active branches' }] : [],
    sections: [
      branches.length ? {
        kind: 'chart-grid', cols: 2,
        charts: [
          {
            title: 'Appointments by branch',
            height: 360,
            config: {
              type: 'bar',
              data: {
                labels: branches.map(function (b) { return b.branch; }),
                datasets: [{ data: branches.map(function (b) { return b.count; }), backgroundColor: pal.navy, label: 'Appts' }]
              },
              options: withOpts({ indexAxis: 'y', plugins: { legend: { display: false } } })
            }
          },
          {
            title: 'Hours by branch',
            height: 360,
            config: {
              type: 'bar',
              data: {
                labels: branches.map(function (b) { return b.branch; }),
                datasets: [{ data: branches.map(function (b) { return b.hours; }), backgroundColor: pal.warning, label: 'Hours' }]
              },
              options: withOpts({ indexAxis: 'y', scales: { x: { ticks: { callback: function (v) { return v + ' h'; } }, beginAtZero: true } }, plugins: { legend: { display: false } } })
            }
          }
        ]
      } : null,
      branches.length ? {
        kind: 'table',
        heading: 'Branch detail',
        headers: [
          { label: 'Branch', num: false },
          { label: 'Appointments', num: true },
          { label: 'Techs', num: true },
          { label: 'Accounts', num: true },
          { label: 'Hours', num: true },
          { label: 'Billable Hrs', num: true },
          { label: 'Avg min/appt', num: true },
          { label: 'Contract $', num: true }
        ],
        rows: branches.map(function (b) {
          return [
            { html: '<strong>' + b.branch + '</strong>' },
            b.count.toLocaleString(),
            b.techs,
            b.accounts.toLocaleString(),
            b.hours.toLocaleString() + ' h',
            b.billHours.toLocaleString() + ' h',
            b.avgMinPerAppt + 'm',
            fmt.money(b.contract)
          ];
        })
      } : null
    ].filter(Boolean)
  };

  // ─────────────────────────────────────────────────────────────
  // ACCOUNTS (top 25)
  // ─────────────────────────────────────────────────────────────
  pages.accounts = {
    eyebrow: 'ACCOUNTS · TOP 25 BY VOLUME',
    title: 'Accounts',
    intro: 'The 25 accounts driving the most service appointments. These are the property managers and commercial customers worth knowing by name — they generate the bulk of the service workload.',
    tags: accounts.length ? [{ kind: 'info', text: 'Top ' + accounts.length + ' accounts shown · ' + (hm.uniqAccounts || 0) + ' total' }] : [],
    sections: [
      accounts.length ? {
        kind: 'chart-grid', cols: 1,
        charts: [{
          title: 'Top 25 accounts by appointment count',
          height: Math.max(380, accounts.length * 18),
          config: {
            type: 'bar',
            data: {
              labels: accounts.map(function (a) { return a.account; }),
              datasets: [{ data: accounts.map(function (a) { return a.count; }), backgroundColor: pal.navy, label: 'Appts' }]
            },
            options: withOpts({ indexAxis: 'y', plugins: { legend: { display: false } } })
          }
        }]
      } : null,
      accounts.length ? {
        kind: 'table',
        heading: 'Top 25 accounts',
        maxHeight: '640px',
        headers: [
          { label: 'Account', num: false },
          { label: 'Appointments', num: true },
          { label: 'Jobs', num: true },
          { label: 'Hours', num: true },
          { label: 'Billable Hrs', num: true },
          { label: 'Contract $', num: true },
          { label: 'Branches', num: false }
        ],
        rows: accounts.map(function (a) {
          return [
            { html: '<strong>' + a.account + '</strong>' },
            a.count.toLocaleString(),
            a.jobs,
            a.hours.toLocaleString() + ' h',
            a.billHours.toLocaleString() + ' h',
            fmt.money(a.contract),
            a.branches
          ];
        })
      } : null,
      { kind: 'callout', tone: 'info', title: 'Account concentration',
        body: 'Property managers dominate the service book. These accounts are the same ones that show up in the install↔service overlap analysis on Service Revenue Forecast — protecting the relationship is worth more than the per-ticket margin.'
      }
    ].filter(Boolean)
  };

  // ─────────────────────────────────────────────────────────────
  // AGING & WARNINGS
  // ─────────────────────────────────────────────────────────────
  pages.aging = {
    eyebrow: 'AGING · WARNINGS',
    title: 'Aging & Warnings',
    intro: 'Work orders that need a closer look. Stuck = open for 60+ days across multiple appointments. Multi-touch = 3+ appointments on the same WO (return trips, scope creep). Disproportionate = many hours eating into a small contract — usually scope creep or scope misclassification.',
    tags: [
      { kind: 'warn', text: stuck.length + ' stuck WOs' },
      { kind: 'warn', text: multiTouch.length + ' multi-touch WOs' },
      { kind: 'danger', text: dispro.length + ' disproportionate WOs' }
    ],
    sections: [
      stuck.length ? {
        kind: 'table',
        heading: 'Stuck work orders · 60+ day span',
        caption: 'Sortable; oldest first',
        maxHeight: '520px',
        headers: [
          { label: 'WO', num: false },
          { label: 'Account', num: false },
          { label: 'Branch', num: false },
          { label: 'Tech', num: false },
          { label: 'Appts', num: true },
          { label: 'Hours', num: true },
          { label: 'Span (days)', num: true },
          { label: 'Oldest', num: false },
          { label: 'Newest', num: false }
        ],
        rows: stuck.map(function (w) {
          var pill = w.spanDays >= 90
            ? '<span class="pill pill-danger">' + w.spanDays + ' d</span>'
            : '<span class="pill pill-warn">' + w.spanDays + ' d</span>';
          return [
            { html: '<strong>' + w.wo + '</strong>' },
            w.account,
            w.branch,
            w.tech,
            w.appointments,
            w.hours + ' h',
            { html: pill },
            w.oldest,
            w.newest
          ];
        })
      } : null,
      dispro.length ? {
        kind: 'table',
        heading: 'Disproportionate hours-to-contract',
        caption: 'WOs where actual hours dwarf the contract value · likely scope creep or misclassification',
        maxHeight: '520px',
        headers: [
          { label: 'WO', num: false },
          { label: 'Account', num: false },
          { label: 'Tech', num: false },
          { label: 'Branch', num: false },
          { label: 'Hours', num: true },
          { label: 'Contract $', num: true },
          { label: 'Hours per $100', num: true },
          { label: 'Appts', num: true }
        ],
        rows: dispro.map(function (w) {
          return [
            { html: '<strong>' + w.wo + '</strong>' },
            w.account,
            w.tech,
            w.branch,
            w.hours + ' h',
            fmt.money(w.contract),
            { html: '<span class="pill pill-danger">' + w.hoursPer100.toFixed(1) + 'h</span>' },
            w.appointments
          ];
        })
      } : null,
      multiTouch.length ? {
        kind: 'table',
        heading: 'Multi-touch work orders · 3+ appointments',
        caption: 'Return trips. Some are appropriate (multi-stage repair); some signal a first-visit miss',
        maxHeight: '520px',
        headers: [
          { label: 'WO', num: false },
          { label: 'Account', num: false },
          { label: 'Branch', num: false },
          { label: 'Appts', num: true },
          { label: 'Hours', num: true },
          { label: 'Contract $', num: true },
          { label: 'Span (days)', num: true }
        ],
        rows: multiTouch.map(function (w) {
          return [
            { html: '<strong>' + w.wo + '</strong>' },
            w.account,
            w.branch,
            w.appointments,
            w.hours + ' h',
            fmt.money(w.contract),
            w.spanDays + ' d'
          ];
        })
      } : null,
      { kind: 'callout', tone: 'warn', title: 'Action checklist',
        body: '<strong>Stuck WOs:</strong> work the oldest 5 with branch GMs this week — close, escalate, or write off. <strong>Disproportionate WOs:</strong> for the top 5 by hours-per-$100, walk the scope with the dispatching tech to spot misclassified scopes (charge codes vs reality). <strong>Multi-touch WOs:</strong> sample 3 from the top of the list and ask "could this have been one visit?" — that\'s where return-trip cost lives.'
      }
    ].filter(Boolean)
  };

  // ─────────────────────────────────────────────────────────────
  // FINDINGS (concerns / watch / positives)
  // ─────────────────────────────────────────────────────────────
  pages.findings = {
    eyebrow: 'FINDINGS · AUTO-DETECTED',
    title: 'Findings',
    intro: 'The narrative read of the Service appointment data: where labor cost may be leaking, what to monitor, and what is working. Items here are auto-generated from the data — the actual prioritization is yours.',
    tags: [
      { kind: 'danger',  text: (findings.concerns || []).length + ' concerns' },
      { kind: 'warn',    text: (findings.watch || []).length + ' watch list' },
      { kind: 'success', text: (findings.positives || []).length + ' positives' }
    ],
    sections: [
      ((findings.concerns || []).length || (findings.watch || []).length || (findings.positives || []).length) ? {
        kind: 'prose', heading: 'Three-column read',
        cols: 3,
        cards: [
          (findings.concerns || []).length ? {
            kind: 'tint', eyebrow: 'CONCERNS',
            list: findings.concerns.map(function (t) { return { text: t, tone: 'danger', icon: '!' }; })
          } : null,
          (findings.watch || []).length ? {
            eyebrow: 'WATCH LIST',
            list: findings.watch.map(function (t) { return { text: t, tone: 'warn', icon: '⚠' }; })
          } : null,
          (findings.positives || []).length ? {
            kind: 'tint', eyebrow: 'POSITIVES',
            list: findings.positives.map(function (t) { return { text: t, tone: 'success', icon: '✓' }; })
          } : null
        ].filter(Boolean)
      } : { kind: 'callout', tone: 'info', title: 'No findings yet',
            body: 'The calculator did not flag any items in this refresh. Drop a fresh Service Appointments XLSX in <code>inputs/service/service-calls/</code> and rerun the build.' },
      { kind: 'callout', title: 'How findings are generated',
        body: 'Concerns: techs with bill ratio &gt;40% above network, or avg appointment time &gt;50% above network. Watch: stuck WOs (60+ days), disproportionate hours-to-contract WOs, open appointments with no end time. Positives: high-volume techs with shorter-than-average appointment durations, low return-trip rate.'
      }
    ].filter(Boolean)
  };

  // ─────────────────────────────────────────────────────────────
  // EXPORT
  // ─────────────────────────────────────────────────────────────
  window.FZ_PAGE_DEFS = window.FZ_PAGE_DEFS || {};
  window.FZ_PAGE_DEFS['service-calls'] = pages;
})();
