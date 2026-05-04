#!/usr/bin/env node
/* ============================================================
   FEAZEL DASHBOARDS — Mobile HTML generator (multi-LOB).
   Walks the page registry and emits one mobile HTML file per
   (lob, folder, slug). Supports both Residential and Multi-Family
   line-of-business namespaces.

   Output paths:
     redesign/mobile/<lob>/index.html               (LOB hub)
     redesign/mobile/<lob>/<dashboard>/<slug>.html  (sub-pages)

   Run from the repo root: node redesign/mobile/build-mobile.js
   ============================================================ */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname);                       // redesign/mobile
const LOBS = ['residential', 'multi-family'];

// Path conventions for mobile pages:
//   - Truly-shared (styles.css, chart-theme.js, page-defs, page-renderer):
//       sub-page → ../../../shared/<X>     (3 levels up: dashboard → lob → mobile → redesign)
//       hub     → ../../shared/<X>         (2 levels up: lob → mobile → redesign)
//   - Mobile-shared (styles-mobile.css, layout-mobile.js):
//       sub-page → ../../shared/<X>        (2 levels up: dashboard → lob → mobile/shared)
//       hub     → ../shared/<X>            (1 level up:  lob → mobile/shared)
//   - LOB data.js (lives at redesign/<lob>/shared/data.js):
//       sub-page → ../../../<lob>/shared/data.js
//       hub     → ../../<lob>/shared/data.js

// ---------- Load the page registry by evaling the shared script ----------
function loadRegistry () {
  const script = fs.readFileSync(path.join(__dirname, '..', 'shared', 'pages.js'), 'utf8');
  const sandbox = { window: {} };
  const fn = new Function('window', script + '\nreturn window.FZ.dashboards;');
  return fn(sandbox.window);
}

// ---------- HTML template factories ----------

function subPageHTML (lob, folder, slug, label, dashTitle) {
  // From redesign/mobile/<lob>/<folder>/<slug>.html
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${escape(label)} · ${escape(dashTitle)} · Feazel</title>
<link rel="stylesheet" href="../../../shared/styles.css">
<link rel="stylesheet" href="../../shared/styles-mobile.css">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='16' fill='%231f2d4b'/><text x='50' y='66' text-anchor='middle' font-family='Arial' font-size='52' font-weight='800' fill='white'>F</text></svg>">
</head>
<body data-lob="${escape(lob)}">

<div id="app-host"></div>
<template id="page-tpl"></template>

<!-- Chart.js + truly-shared assets + LOB-specific data + mobile shell -->
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js"></script>
<script src="../../../shared/chart-theme.js"></script>
<script src="../../../${escape(lob)}/shared/data.js"></script>
<script src="../../../shared/pages.js"></script>
<script src="../../shared/layout-mobile.js"></script>
<script src="../../../shared/page-renderer.js"></script>
<script src="../../../shared/page-defs-${folder}.js"></script>

<script>
  FZ.renderShell({ folder: ${json(folder)}, slug: ${json(slug)}, lob: ${json(lob)} });
  if (window.FZ_PAGE_DEFS && window.FZ_PAGE_DEFS[${json(folder)}] && window.FZ_PAGE_DEFS[${json(folder)}][${json(slug)}]) {
    FZ.renderPage(window.FZ_PAGE_DEFS[${json(folder)}][${json(slug)}]);
  } else {
    document.getElementById('page-content').innerHTML =
      '<div class="card"><span class="eyebrow">Page</span><h1 style="margin-top:6px;">${escape(label)}</h1><p style="margin-top:8px;">This page is being built. Open another tab.</p></div>';
  }
</script>
</body>
</html>
`;
}

// LOB-specific copy for the mobile Command Center hub
const LOB_COPY = {
  'residential': {
    title: 'Command Center',
    eyebrow: 'FEAZEL ROOFING · COO OFFICE · RESIDENTIAL',
    intro: 'Where the residential business stands today: signed contracts, the revenue forecast against $125.6M, the open backlog, and what is actually invoicing.',
    target: '$185M',
    targetSub: '$125.6M residential'
  },
  'multi-family': {
    title: 'Command Center',
    eyebrow: 'FEAZEL ROOFING · COO OFFICE · MULTI-FAMILY',
    intro: 'Where the multi-family and commercial book stands today: signed contracts, revenue projection, open backlog, and invoiced production.',
    target: '$185M',
    targetSub: '$59.4M commercial'
  }
};

function commandCenterHTML (lob) {
  const copy = LOB_COPY[lob] || LOB_COPY['residential'];
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Feazel ${escape(copy.title)} · ${lob === 'multi-family' ? 'Multi-Family' : 'Residential'} · Mobile</title>
<link rel="stylesheet" href="../../shared/styles.css">
<link rel="stylesheet" href="../shared/styles-mobile.css">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='16' fill='%231f2d4b'/><text x='50' y='66' text-anchor='middle' font-family='Arial' font-size='52' font-weight='800' fill='white'>F</text></svg>">
</head>
<body data-lob="${escape(lob)}">

<div id="app-host"></div>

<template id="page-tpl">

  <section class="hub-hero">
    <span class="eyebrow">${escape(copy.eyebrow)}</span>
    <h1>${escape(copy.title)}</h1>
    <p>${escape(copy.intro)}</p>
    <div class="hub-hero-stats">
      <div class="hub-hero-stat">
        <div class="l">2026 Target</div>
        <div class="v">${escape(copy.target)}</div>
        <div class="s">${escape(copy.targetSub)}</div>
      </div>
      <div class="hub-hero-stat">
        <div class="l">Signed YTD</div>
        <div class="v" data-bind="hero.signed">—</div>
        <div class="s" data-bind="hero.signedSub">—</div>
      </div>
      <div class="hub-hero-stat">
        <div class="l">Invoiced YTD</div>
        <div class="v" data-bind="hero.invoiced">—</div>
        <div class="s" data-bind="hero.invoicedSub">—</div>
      </div>
      <div class="hub-hero-stat">
        <div class="l">Open Backlog</div>
        <div class="v" data-bind="hero.backlog">—</div>
        <div class="s" data-bind="hero.backlogSub">—</div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="callout">
      <span class="callout-title">Where it stands</span>
      4-week pace <strong data-bind="rollup.weeklyPace">—</strong>/wk projects to <strong data-bind="rollup.annualForecast">—</strong>
      vs <strong data-bind="rollup.budget">—</strong> budget, gap <strong data-bind="rollup.gap">—</strong>.
    </div>
  </section>

  <section class="section">
    <div class="section-head"><h2>Dashboards</h2></div>
    <div class="grid">

      <a class="tile" href="./sales-overview/index.html">
        <span class="eyebrow">YTD 2026</span>
        <h2 style="margin-top:2px;">Sales Overview</h2>
        <p>Signed contracts, branch and rep performance, levers to close the gap.</p>
        <div class="tile-stats">
          <div class="tile-stat"><div class="l">Signed</div><div class="v" data-bind="tile.sales.signed">—</div></div>
          <div class="tile-stat"><div class="l">Sold</div><div class="v" data-bind="tile.sales.sold">—</div></div>
          <div class="tile-stat"><div class="l">Kicked</div><div class="v" data-bind="tile.sales.kicked">—</div></div>
          <div class="tile-stat"><div class="l">Avg Deal</div><div class="v" data-bind="tile.sales.avg">—</div></div>
        </div>
        <span class="tile-cta">Open dashboard →</span>
      </a>

      <a class="tile" href="./revenue-forecast/index.html">
        <span class="eyebrow">V5 · 2026 OUTLOOK</span>
        <h2 style="margin-top:2px;">Revenue Forecast</h2>
        <p>Net invoiced revenue projection vs plan.</p>
        <div class="tile-stats">
          <div class="tile-stat"><div class="l">Forecast</div><div class="v" data-bind="tile.rev.fcst">—</div></div>
          <div class="tile-stat"><div class="l">Budget</div><div class="v" data-bind="tile.rev.budget">—</div></div>
          <div class="tile-stat"><div class="l">Gap</div><div class="v" data-bind="tile.rev.gap" style="color:var(--danger);">—</div></div>
          <div class="tile-stat"><div class="l">Pipeline</div><div class="v" data-bind="tile.rev.pipe">—</div></div>
        </div>
        <span class="tile-cta">Open dashboard →</span>
      </a>

      <a class="tile" href="./backlog/index.html">
        <span class="eyebrow">LIVE OPS</span>
        <h2 style="margin-top:2px;">Backlog</h2>
        <p>Holds, partial completions, ready-to-schedule, trapped value.</p>
        <div class="tile-stats">
          <div class="tile-stat"><div class="l">Open WOs</div><div class="v" data-bind="tile.bl.wos">—</div></div>
          <div class="tile-stat"><div class="l">Partial</div><div class="v" data-bind="tile.bl.partial">—</div></div>
          <div class="tile-stat"><div class="l">Holds</div><div class="v" data-bind="tile.bl.holds">—</div></div>
          <div class="tile-stat"><div class="l">Hold Age</div><div class="v" data-bind="tile.bl.holdAge">—</div></div>
        </div>
        <span class="tile-cta">Open dashboard →</span>
      </a>

      <a class="tile" href="./installs-ytd/index.html">
        <span class="eyebrow">INVOICED PRODUCTION</span>
        <h2 style="margin-top:2px;">Installs YTD</h2>
        <p>What is closing. Invoiced jobs by PM, market, trade mix.</p>
        <div class="tile-stats">
          <div class="tile-stat"><div class="l">True Rev</div><div class="v" data-bind="tile.inst.rev">—</div></div>
          <div class="tile-stat"><div class="l">Med Days</div><div class="v" data-bind="tile.inst.days">—</div></div>
          <div class="tile-stat"><div class="l">Multi-Trade</div><div class="v" data-bind="tile.inst.mt">—</div></div>
          <div class="tile-stat"><div class="l">Avg Start</div><div class="v" data-bind="tile.inst.start">—</div></div>
        </div>
        <span class="tile-cta">Open dashboard →</span>
      </a>

    </div>
  </section>

  <section class="section">
    <div class="grid">
      <div class="card">
        <span class="eyebrow">METHODOLOGY</span>
        <h3 style="margin-top:6px;">Forecast V5 Locked</h3>
        <p style="margin-top:8px; font-size:12px;">Locked April 19, 2026. WIP constants and cycle hierarchy not changed without approval.</p>
      </div>
      <div class="card">
        <span class="eyebrow">DATA FRESHNESS</span>
        <h3 style="margin-top:6px;" data-bind="freshness.headline">As of —</h3>
        <p style="margin-top:8px; font-size:12px;">Refreshed <strong data-bind="freshness.stamp">—</strong>.</p>
      </div>
    </div>
  </section>

</template>

<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js"></script>
<script src="../../shared/chart-theme.js"></script>
<script src="../../${escape(lob)}/shared/data.js"></script>
<script src="../../shared/pages.js"></script>
<script src="../shared/layout-mobile.js"></script>
<script>
  FZ.renderShell({ atRoot: true, lob: ${json(lob)} });

  (function bindCommandCenter () {
    var data = window.FZ && window.FZ.data;
    if (!data) return;
    var SO = data.SALES_OVERVIEW || {};
    var IY = data.INSTALLS_YTD  || {};
    var RF = data.REVENUE_FORECAST || {};
    var BL = data.BACKLOG || {};
    function kpi (list, label) { return Array.isArray(list) ? list.find(k => k.label === label) || null : null; }
    function val (o, dash) { return o && o.value ? o.value : (dash || '—'); }
    function sub (o, dash) { return o && o.sub ? o.sub : (dash || ''); }

    var soSigned = kpi(SO.kpis, 'Signed Contracts YTD');
    var soSold   = kpi(SO.kpis, 'Sold');
    var soKicked = kpi(SO.kpis, 'Kicked Back');
    var soAvg    = kpi(SO.kpis, 'Avg Deal Size');
    var rfFcst   = kpi(RF.kpis, 'Annual Forecast');
    var rfBudget = kpi(RF.kpis, 'Annual Budget');
    var rfGap    = kpi(RF.kpis, 'Forecast vs Budget');
    var rfPipe   = kpi(RF.kpis, 'Active Pipeline');
    var rfWeekly = kpi(RF.kpis, '4-Week Avg Weekly Sales');
    var rfInv    = kpi(RF.kpis, 'Invoiced YTD');
    var iyRev    = kpi(IY.kpis, 'True Revenue');
    var iyDays   = kpi(IY.kpis, 'Median Days to Complete');
    var iyMT     = kpi(IY.kpis, 'Multi-Trade Jobs');
    var iyStart  = kpi(IY.kpis, 'Avg Days to Start');
    var blValue  = kpi(BL.kpisExecutive || [], 'Total Portfolio Value');
    var blPartial= kpi(BL.kpisPartial   || [], 'Trapped Value');
    var blHolds  = kpi(BL.kpisHolds     || [], 'Total Holds');
    var blHoldAge= kpi(BL.kpisHolds     || [], 'Avg Hold Age');
    var blOpenWOs= (BL.headerMeta && BL.headerMeta.totalWOs) ? BL.headerMeta.totalWOs.toLocaleString() : '—';

    var binds = {
      'hero.signed':   val(soSigned),
      'hero.signedSub': sub(soSigned, '13 markets'),
      'hero.invoiced':  val(rfInv),
      'hero.invoicedSub': iyRev ? (iyRev.sub || '') : sub(rfInv),
      'hero.backlog':   val(blValue),
      'hero.backlogSub': blValue ? blValue.sub : (BL.headerMeta ? BL.headerMeta.totalJobs + ' jobs' : ''),
      'rollup.weeklyPace':    val(rfWeekly, '—'),
      'rollup.annualForecast':val(rfFcst, '—'),
      'rollup.budget':        val(rfBudget, '—'),
      'rollup.gap':           val(rfGap, '—'),
      'tile.sales.signed': val(soSigned),
      'tile.sales.sold':   val(soSold),
      'tile.sales.kicked': val(soKicked),
      'tile.sales.avg':    val(soAvg),
      'tile.rev.fcst':   val(rfFcst),
      'tile.rev.budget': val(rfBudget),
      'tile.rev.gap':    val(rfGap),
      'tile.rev.pipe':   val(rfPipe),
      'tile.bl.wos':     blOpenWOs,
      'tile.bl.partial': val(blPartial),
      'tile.bl.holds':   val(blHolds),
      'tile.bl.holdAge': val(blHoldAge),
      'tile.inst.rev':   val(iyRev),
      'tile.inst.days':  val(iyDays),
      'tile.inst.mt':    iyMT && iyMT.sub ? iyMT.sub.replace(/ of book.*$/, '') : '—',
      'tile.inst.start': val(iyStart),
      'freshness.headline': 'As of ' + (window.FZ.formatBuiltAt ? window.FZ.formatBuiltAt({ dateOnly: true }) : '—'),
      'freshness.stamp':    window.FZ.formatBuiltAt ? window.FZ.formatBuiltAt() : '—'
    };

    Object.keys(binds).forEach(function (key) {
      var el = document.querySelector('[data-bind="' + key + '"]');
      if (el) el.textContent = binds[key];
    });
  })();
</script>
</body>
</html>
`;
}

// ---------- Helpers ----------
function escape (s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
}
function json (s) { return JSON.stringify(s); }

// ---------- Main ----------
function main () {
  const dashboards = loadRegistry();
  if (!dashboards || !dashboards.length) {
    console.error('FAIL: no dashboards in registry');
    process.exit(1);
  }

  let written = 0;

  LOBS.forEach(function (lob) {
    const lobRoot = path.join(ROOT, lob);
    fs.mkdirSync(lobRoot, { recursive: true });

    // 1) Mobile Command Center hub for this LOB
    fs.writeFileSync(path.join(lobRoot, 'index.html'), commandCenterHTML(lob), 'utf8');
    written++;

    // 2) Each dashboard's pages
    dashboards.forEach(function (d) {
      const folder = d.folder;
      const dashTitle = d.title;
      const dashDir = path.join(lobRoot, folder);
      fs.mkdirSync(dashDir, { recursive: true });

      d.pages.forEach(function (p) {
        const html = subPageHTML(lob, folder, p.slug, p.label, dashTitle);
        const out = path.join(dashDir, p.slug + '.html');
        fs.writeFileSync(out, html, 'utf8');
        written++;
      });
    });
  });

  console.log('✓ Mobile suite generated: ' + written + ' files (' + LOBS.length + ' LOBs × ~' + (written / LOBS.length) + ' pages)');
  LOBS.forEach(function (lob) {
    console.log('  ' + lob + '/');
    dashboards.forEach(function (d) {
      console.log('    ' + d.short + ': redesign/mobile/' + lob + '/' + d.folder + '/  (' + d.pages.length + ' pages)');
    });
  });
}

main();
