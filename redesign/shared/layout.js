/* ============================================================
   FEAZEL DASHBOARDS — Layout / Navigation Renderer
   Each page calls FZ.renderShell({ folder, slug }) which renders:
     • Sidebar (4 dashboards + hub link)
     • Top bar (logo title, breadcrumbs, last-updated, user)
     • Sub-nav (this dashboard's tabs)
   And wraps the page's content in <main class="page">.
   ============================================================ */
window.FZ = window.FZ || {};

// Lucide-style inline SVG icons (1.75 stroke), keyed by name
window.FZ.icons = {
  'trending-up':  '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>',
  'line-chart':   '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-6"/></svg>',
  'layers':       '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
  'check-circle': '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
  'home':         '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2h-4v-7H10v7H6a2 2 0 0 1-2-2z"/></svg>',
  'arrow-right':  '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>'
};

// Render the entire shell. Call this BEFORE the page's main content script runs.
window.FZ.renderShell = function (opts) {
  opts = opts || {};
  var folder = opts.folder || null;     // e.g. 'sales-overview' (null = LOB hub)
  var slug = opts.slug || 'index';      // e.g. 'executive'
  var atRoot = opts.atRoot === true;    // true if this page is the LOB hub
  // Detect Line of Business from URL path. Pages live under /<lob>/<dashboard>/<slug>.html
  // or /<lob>/index.html. Default to 'residential' for backwards compat.
  var lob = opts.lob || (function () {
    var match = window.location.pathname.match(/\/(residential|multi-family)\//);
    return match ? match[1] : 'residential';
  })();
  var dashboards = window.FZ.dashboards;

  // Path prefix to LOB root from this page
  var prefix = atRoot ? './' : '../';
  // Truly-shared assets live one level above the LOB root
  var sharedPrefix = atRoot ? '../shared/' : '../../shared/';
  var assetsPrefix = atRoot ? '../assets/' : '../../assets/';
  // Sibling LOB: same path with the other LOB swapped in
  var otherLob = (lob === 'residential') ? 'multi-family' : 'residential';
  var lobSwitchPrefix = atRoot ? ('../' + otherLob + '/') : ('../../' + otherLob + '/');

  var current = (folder && slug !== 'index') ? window.FZ.findPage(folder, slug) : null;
  var currentDashboard = folder ? window.FZ.findDashboard(folder) : null;

  // ---- SIDEBAR ----
  var lobLabel = (lob === 'multi-family') ? 'Multi-Family' : 'Residential';
  var otherLobLabel = (lob === 'multi-family') ? 'Residential' : 'Multi-Family';
  // Compute the other-LOB target URL for the same dashboard + slug
  var otherLobUrl = lobSwitchPrefix + 'index.html';
  if (folder) {
    otherLobUrl = lobSwitchPrefix + folder + '/' + (slug === 'index' ? 'index.html' : slug + '.html');
  }
  var sidebarHTML = ''
    + '<aside class="sidebar">'
    +   '<div class="sidebar-brand">'
    +     '<img src="' + assetsPrefix + 'feazel-logo-inline-white.svg" alt="Feazel">'
    +     '<div class="sidebar-brand-meta">Executive Dashboards</div>'
    +   '</div>'
    +   '<div class="lob-switch">'
    +     '<a href="' + (lob === 'residential' ? '#' : otherLobUrl) + '"' + (lob === 'residential' ? ' class="is-active"' : '') + '>Residential</a>'
    +     '<a href="' + (lob === 'multi-family' ? '#' : otherLobUrl) + '"' + (lob === 'multi-family' ? ' class="is-active"' : '') + '>Multi-Family</a>'
    +   '</div>'
    +   '<div class="sidebar-section">' + lobLabel + ' Suite</div>'
    +   '<nav class="sidebar-nav">'
    +     '<a href="' + prefix + 'index.html"' + (atRoot ? ' class="is-active"' : '') + '>'
    +       '<span class="ic">' + window.FZ.icons['home'] + '</span>'
    +       '<span>Command Center</span>'
    +     '</a>';
  dashboards.forEach(function (d) {
    var isActive = (d.folder === folder);
    sidebarHTML += '<a href="' + prefix + d.folder + '/index.html"' + (isActive ? ' class="is-active"' : '') + '>'
      + '<span class="ic">' + (window.FZ.icons[d.icon] || window.FZ.icons['line-chart']) + '</span>'
      + '<span>' + d.short + '</span>'
      + '</a>';
  });
  sidebarHTML += '</nav>'
    + '<div class="sidebar-foot">'
    +   '<strong>Feazel Roofing</strong>'
    +   'COO Office · Greg Graven<br>'
    +   '13 markets · ~200 employees'
    + '</div>'
    + '</aside>';

  // ---- TOPBAR ----
  var crumbs = '<span><a href="' + prefix + 'index.html" style="color:inherit;">Command Center</a></span>';
  if (currentDashboard) {
    crumbs += '<span><a href="' + prefix + currentDashboard.folder + '/index.html" style="color:inherit;">' + currentDashboard.short + '</a></span>';
    if (current && slug !== 'index') {
      crumbs += '<span class="crumb-current">' + current.label + '</span>';
    } else {
      crumbs = '<span><a href="' + prefix + 'index.html" style="color:inherit;">Command Center</a></span>'
        + '<span class="crumb-current">' + currentDashboard.short + '</span>';
    }
  } else if (atRoot) {
    crumbs = '<span class="crumb-current">Command Center</span>';
  }

  // Resolve the "as-of" stamp from the actual pipeline run time so the dashboard
  // always reflects when the data was last refreshed.
  var asOf = window.FZ.formatBuiltAt
    ? window.FZ.formatBuiltAt()
    : ((currentDashboard && currentDashboard.asOf) || 'unknown');
  var topbarHTML = ''
    + '<header class="topbar">'
    +   '<div class="topbar-left">'
    +     '<div class="topbar-crumbs">' + crumbs + '</div>'
    +   '</div>'
    +   '<div class="topbar-right">'
    +     '<div class="stamp"><span class="dot"></span>Refreshed ' + asOf + '</div>'
    +     '<div class="topbar-user"><span class="avatar">GG</span><span>Greg Graven · COO</span></div>'
    +   '</div>'
    + '</header>';

  // ---- SUB-NAV ----
  var subnavHTML = '';
  if (currentDashboard) {
    subnavHTML = '<nav class="subnav">';
    currentDashboard.pages.forEach(function (p) {
      var href = (p.slug === 'index') ? './index.html' : './' + p.slug + '.html';
      // If we're at the dashboard hub, use ./ paths; if we're on a sub-page, also ./ since same folder
      var isActive = (p.slug === slug);
      subnavHTML += '<a href="' + href + '"' + (isActive ? ' class="is-active"' : '') + '>' + p.short + '</a>';
    });
    subnavHTML += '</nav>';
  }

  // Inject everything before the existing <main> the page provides.
  var appHost = document.getElementById('app-host');
  if (appHost) {
    appHost.outerHTML =
      '<div class="app">'
      + sidebarHTML
      + '<div class="main">'
      +   topbarHTML
      +   subnavHTML
      +   '<main class="page" id="page-content"></main>'
      + '</div>'
      + '</div>';
  }

  // Move whatever the page wrote into <template id="page-tpl"> into the rendered page-content slot.
  var tpl = document.getElementById('page-tpl');
  var slot = document.getElementById('page-content');
  if (tpl && slot) {
    slot.innerHTML = tpl.innerHTML;
  }

  // Auto-load the premium interactions layer (scroll progress, fade-up,
  // counter animations, card tilt, subnav indicator, ripples, etc).
  // Only inject once per page load.
  if (!document.getElementById('fz-interactions-script')) {
    var sc = document.createElement('script');
    sc.id = 'fz-interactions-script';
    sc.src = sharedPrefix + 'interactions.js';
    sc.defer = true;
    document.head.appendChild(sc);
  }

  // Fire a custom event so charts can initialize after the DOM is in place.
  document.dispatchEvent(new CustomEvent('fz:shell-ready', { detail: { folder: folder, slug: slug } }));
};
