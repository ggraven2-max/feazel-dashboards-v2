/* ============================================================
   Feazel Chart.js Theme
   Single import: <script src="../shared/chart-theme.js"></script>
   Provides FZ.* palette + global Chart.defaults overrides.
   Requires Chart.js 4.x loaded BEFORE this script.
   ============================================================ */
(function () {
  if (typeof Chart === 'undefined') {
    console.warn('[FZ chart-theme] Chart.js not loaded yet.');
    return;
  }

  // Brand palette tuned for the universal dark theme. The fg/line tokens
  // were dark-on-light; they have been re-aliased to white-alpha so legend
  // labels, axis ticks, and gridlines read against the navy mesh background.
  // Brand color hexes (navy, blue, gold, etc.) stay anchored.
  const PALETTE = {
    navy:       '#1f2d4b',
    navyDeep:   '#16203a',
    navy80:     '#34405c',
    slate:      '#4c5a7c',
    slateSoft:  '#6b7693',
    blue:       '#5e82bc',
    blueHover:  '#4f72ab',
    blueTint:   '#eaf0fa',
    vista:      '#7895c4',
    delft:      '#2c3b5b',
    gold:       '#d4a857',
    goldSoft:   '#ecc88c',
    teal:       '#6ee7d7',
    tealDeep:   '#16a085',
    success:    '#4ade80',
    warning:    '#fbbf24',
    danger:     '#f87171',
    dim:        'rgba(255,255,255,0.55)',
    line:       'rgba(255,255,255,0.10)',
    fg1:        '#ffffff',
    fg2:        'rgba(255,255,255,0.85)',
    fg3:        'rgba(255,255,255,0.55)'
  };

  // Ordered series palette: lead with bright hues that read on dark.
  // Navy used to be #1, but on a navy mesh it disappears — push it to last.
  const SERIES = [
    PALETTE.blue,
    PALETTE.gold,
    PALETTE.vista,
    PALETTE.teal,
    PALETTE.success,
    PALETTE.warning,
    PALETTE.danger,
    PALETTE.goldSoft,
    PALETTE.slateSoft,
    PALETTE.tealDeep,
    PALETTE.slate
  ];

  // Heat scale (for stacked + per-bar tinting)
  const HEAT = ['#eaf0fa', '#c9daee', '#99b6dc', '#5e82bc', '#4c5a7c', '#2c3b5b', '#1f2d4b'];

  // Chart.js global defaults
  Chart.defaults.font.family = '"Barlow", system-ui, -apple-system, "Segoe UI", Helvetica, Arial, sans-serif';
  Chart.defaults.font.size = 12;
  Chart.defaults.font.weight = '500';
  Chart.defaults.color = PALETTE.fg2;
  Chart.defaults.borderColor = PALETTE.line;
  Chart.defaults.maintainAspectRatio = false;
  Chart.defaults.responsive = true;

  // Plugin-level defaults
  if (Chart.defaults.plugins) {
    Chart.defaults.plugins.legend = Object.assign({}, Chart.defaults.plugins.legend, {
      position: 'bottom',
      labels: {
        color: PALETTE.fg2,
        usePointStyle: true,
        pointStyle: 'circle',
        boxWidth: 8,
        boxHeight: 8,
        padding: 14,
        font: { size: 12, weight: '500' }
      }
    });
    Chart.defaults.plugins.tooltip = Object.assign({}, Chart.defaults.plugins.tooltip, {
      backgroundColor: PALETTE.navy,
      titleColor: '#fff',
      bodyColor: 'rgba(255,255,255,0.92)',
      borderColor: 'rgba(255,255,255,0.08)',
      borderWidth: 1,
      padding: 12,
      cornerRadius: 6,
      titleFont: { weight: '600', size: 12 },
      bodyFont: { size: 12 },
      displayColors: true,
      boxPadding: 6,
      caretSize: 5
    });
    Chart.defaults.plugins.title = Object.assign({}, Chart.defaults.plugins.title, {
      color: PALETTE.fg1,    /* white on dark */
      font: { size: 14, weight: '600' },
      padding: { top: 0, bottom: 10 }
    });
  }

  // Scale defaults
  if (Chart.defaults.scales) {
    ['linear', 'category'].forEach(function (s) {
      if (!Chart.defaults.scales[s]) Chart.defaults.scales[s] = {};
      Chart.defaults.scales[s].grid = Object.assign({}, Chart.defaults.scales[s].grid, {
        color: PALETTE.line,
        drawBorder: false,
        drawTicks: false
      });
      Chart.defaults.scales[s].ticks = Object.assign({}, Chart.defaults.scales[s].ticks, {
        color: PALETTE.fg3,
        font: { size: 11, weight: '500' },
        padding: 8
      });
      Chart.defaults.scales[s].border = Object.assign({}, Chart.defaults.scales[s].border, {
        display: false
      });
    });
  }

  // Element defaults
  if (Chart.defaults.elements) {
    Chart.defaults.elements.bar = Object.assign({}, Chart.defaults.elements.bar, {
      borderRadius: 4,
      borderSkipped: false,
      borderWidth: 0
    });
    Chart.defaults.elements.line = Object.assign({}, Chart.defaults.elements.line, {
      borderWidth: 2.5,
      tension: 0.3,
      fill: false
    });
    Chart.defaults.elements.point = Object.assign({}, Chart.defaults.elements.point, {
      radius: 3,
      hoverRadius: 5,
      borderWidth: 2,
      backgroundColor: '#fff'
    });
    Chart.defaults.elements.arc = Object.assign({}, Chart.defaults.elements.arc, {
      borderWidth: 2,
      borderColor: '#fff'
    });
  }

  // Helpers exposed on global FZ
  window.FZ = window.FZ || {};
  window.FZ.palette = PALETTE;
  window.FZ.series = SERIES;
  window.FZ.heat = HEAT;

  // Helper: pick from series palette by index
  window.FZ.color = function (i) { return SERIES[i % SERIES.length]; };
  window.FZ.heatColor = function (i, max) {
    if (!max) max = HEAT.length - 1;
    var idx = Math.min(HEAT.length - 1, Math.round((i / Math.max(1, max)) * (HEAT.length - 1)));
    return HEAT[idx];
  };

  // Helper: format currency / number / percent
  window.FZ.fmt = {
    money: function (v, opts) {
      opts = opts || {};
      if (v == null || isNaN(v)) return '—';
      var abs = Math.abs(v);
      if (opts.short) {
        if (abs >= 1e9) return '$' + (v / 1e9).toFixed(1).replace(/\.0$/, '') + 'B';
        if (abs >= 1e6) return '$' + (v / 1e6).toFixed(1).replace(/\.0$/, '') + 'M';
        if (abs >= 1e3) return '$' + (v / 1e3).toFixed(0) + 'K';
        return '$' + v.toFixed(0);
      }
      return '$' + Math.round(v).toLocaleString('en-US');
    },
    num: function (v, opts) {
      opts = opts || {};
      if (v == null || isNaN(v)) return '—';
      var abs = Math.abs(v);
      if (opts.short) {
        if (abs >= 1e6) return (v / 1e6).toFixed(1).replace(/\.0$/, '') + 'M';
        if (abs >= 1e3) return (v / 1e3).toFixed(1).replace(/\.0$/, '') + 'K';
      }
      return v.toLocaleString('en-US');
    },
    pct: function (v, dp) { if (v == null || isNaN(v)) return '—'; return (v).toFixed(dp == null ? 1 : dp) + '%'; },
    days: function (v) { if (v == null || isNaN(v)) return '—'; return v.toFixed(1) + ' days'; }
  };

  // Format the pipeline build timestamp into a human stamp the dashboard reads.
  // Reads window.FZ.data._meta.builtAt (ISO 8601). Falls back gracefully.
  window.FZ.formatBuiltAt = function (opts) {
    opts = opts || {};
    var iso = window.FZ.data && window.FZ.data._meta && window.FZ.data._meta.builtAt;
    if (!iso) return 'unknown';
    var d = new Date(iso);
    if (isNaN(d.getTime())) return iso;
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var month = months[d.getMonth()];
    var day = d.getDate();
    var year = d.getFullYear();
    if (opts.dateOnly) return month + ' ' + day + ', ' + year;
    var hours = d.getHours();
    var mins = String(d.getMinutes()).padStart(2, '0');
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    return month + ' ' + day + ', ' + year + ' · ' + hours + ':' + mins + ' ' + ampm;
  };

  // Days elapsed since Jan 1, computed from the READER'S CLOCK (2026-07-06
  // decision: pages are clock-driven; data staleness is flagged separately
  // via FZ.timeContext().staleDays rather than by freezing the calendar).
  window.FZ.daysYTD = function () {
    var d = new Date();
    var jan1 = new Date(d.getFullYear(), 0, 1);
    return Math.max(1, Math.floor((d - jan1) / 86400000) + 1);
  };

  // ---- Time context (2026-07-06): single source of truth for "now" ----
  // Everything date-anchored on a page should derive from this, so month,
  // quarter, and day roll automatically as the calendar moves, independent
  // of when the data was last refreshed.
  window.FZ.timeContext = function () {
    var MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var MONTHS_LONG = ['January','February','March','April','May','June','July',
                       'August','September','October','November','December'];
    var now = new Date();
    var jan1 = new Date(now.getFullYear(), 0, 1);
    var dayOfYear = Math.max(1, Math.floor((now - jan1) / 86400000) + 1);
    var quarter = Math.floor(now.getMonth() / 3) + 1;
    var iso = window.FZ.data && window.FZ.data._meta && window.FZ.data._meta.builtAt;
    var asOf = iso ? new Date(iso) : null;
    var staleDays = null;
    if (asOf && !isNaN(asOf.getTime())) {
      var d0 = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      var a0 = new Date(asOf.getFullYear(), asOf.getMonth(), asOf.getDate());
      staleDays = Math.max(0, Math.round((d0 - a0) / 86400000));
    }
    return {
      now: now,
      year: now.getFullYear(),
      monthIdx: now.getMonth(),
      monthLabel: MONTHS[now.getMonth()],
      monthLabelLong: MONTHS_LONG[now.getMonth()],
      quarter: quarter,
      quarterLabel: 'Q' + quarter + ' ' + now.getFullYear(),
      dayOfYear: dayOfYear,
      asOf: asOf,
      staleDays: staleDays
    };
  };

  // ---- Strict KPI lookup (2026-07-06): pages must NEVER hardcode KPI ----
  // values. Look tiles up by label from the calculator-built kpis array.
  // A missing label renders an em dash, never a stale number.
  window.FZ.kpi = function (block, label) {
    var list = (block && (block.kpis || block)) || [];
    if (!Array.isArray(list)) list = [];
    var want = String(label).toLowerCase();
    for (var i = 0; i < list.length; i++) {
      if (String(list[i].label || '').toLowerCase() === want) return list[i];
    }
    return { label: label, value: '—', sub: 'not in data payload', _missing: true };
  };

  // Build a kpi-row items array from labels. toneMap is optional {label: tone}.
  window.FZ.kpiRow = function (block, labels, toneMap) {
    toneMap = toneMap || {};
    return labels.map(function (label) {
      var k = window.FZ.kpi(block, label);
      var item = { label: k.label, value: k.value, sub: k.sub };
      if (toneMap[label]) item.tone = toneMap[label];
      if (k.trend) item.trend = k.trend;
      return item;
    });
  };

  // Helper: build a gradient fill on a chart context
  window.FZ.areaGradient = function (ctx, color) {
    var area = ctx.chart.chartArea;
    if (!area) return color;
    var g = ctx.chart.ctx.createLinearGradient(0, area.top, 0, area.bottom);
    g.addColorStop(0, color + 'cc');
    g.addColorStop(1, color + '00');
    return g;
  };

  // Helper: build a clean bar dataset
  window.FZ.barDataset = function (label, data, color, opts) {
    opts = opts || {};
    return Object.assign({
      label: label,
      data: data,
      backgroundColor: color || PALETTE.blue,
      borderRadius: opts.borderRadius != null ? opts.borderRadius : 4,
      borderSkipped: false,
      maxBarThickness: opts.maxBarThickness || 38
    }, opts.extra || {});
  };

  // Helper: build a clean line dataset
  // Default line color is blue (was navy, which disappears on the dark mesh).
  window.FZ.lineDataset = function (label, data, color, opts) {
    opts = opts || {};
    return Object.assign({
      label: label,
      data: data,
      borderColor: color || PALETTE.blue,
      backgroundColor: color || PALETTE.blue,
      tension: 0.3,
      fill: false,
      pointBackgroundColor: '#fff',
      pointBorderColor: color || PALETTE.blue,
      pointBorderWidth: 2,
      pointRadius: opts.points === false ? 0 : 3
    }, opts.extra || {});
  };

  // Sparkline helper — small line in a tiny canvas
  window.FZ.sparkline = function (canvas, data, color) {
    if (!canvas) return null;
    return new Chart(canvas.getContext('2d'), {
      type: 'line',
      data: {
        labels: data.map(function (_, i) { return i + 1; }),
        datasets: [{
          data: data,
          borderColor: color || PALETTE.blue,
          borderWidth: 1.8,
          fill: true,
          backgroundColor: function (ctx) {
            var area = ctx.chart.chartArea;
            if (!area) return 'transparent';
            var g = ctx.chart.ctx.createLinearGradient(0, area.top, 0, area.bottom);
            g.addColorStop(0, (color || PALETTE.blue) + '55');
            g.addColorStop(1, (color || PALETTE.blue) + '00');
            return g;
          },
          tension: 0.35,
          pointRadius: 0,
          pointHoverRadius: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: { enabled: false } },
        scales: {
          x: { display: false },
          y: { display: false, beginAtZero: false }
        },
        elements: { line: { borderJoinStyle: 'round' } }
      }
    });
  };

  console.log('[FZ chart-theme] loaded — Feazel palette active.');
})();
