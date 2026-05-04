/* ============================================================
   FEAZEL DASHBOARDS — MOBILE Layout / Navigation Renderer
   Mirrors layout.js but renders a phone-first shell:
     • Sticky top bar with brand + breadcrumb + refreshed stamp
     • Horizontal scrolling sub-tab pill strip
     • No sidebar (the iOS app's bottom tab nav handles dashboard switching)
   ============================================================ */
window.FZ = window.FZ || {};

// Reuse the same icon set the desktop layout uses
window.FZ.icons = window.FZ.icons || {
  'trending-up':  '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>',
  'line-chart':   '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-6"/></svg>',
  'layers':       '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
  'check-circle': '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
  'home':         '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2h-4v-7H10v7H6a2 2 0 0 1-2-2z"/></svg>',
  'arrow-right':  '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>'
};

// Mobile shell renderer. Same call signature as desktop FZ.renderShell so we
// can swap layouts without touching page-defs or the page renderer.
window.FZ.renderShell = function (opts) {
  opts = opts || {};
  var folder = opts.folder || null;
  var slug   = opts.slug   || 'index';
  var atRoot = opts.atRoot === true;
  // Detect Line of Business from URL: /mobile/<lob>/...
  var lob = opts.lob || (function () {
    var match = window.location.pathname.match(/\/mobile\/(residential|multi-family)\//);
    return match ? match[1] : 'residential';
  })();
  var otherLob = (lob === 'residential') ? 'multi-family' : 'residential';
  var dashboards = window.FZ.dashboards;

  var current          = (folder && slug !== 'index') ? window.FZ.findPage(folder, slug) : null;
  var currentDashboard = folder ? window.FZ.findDashboard(folder) : null;

  // Compute the parallel URL in the other LOB
  var lobSwitchPrefix = atRoot ? ('../' + otherLob + '/') : ('../../' + otherLob + '/');
  var otherLobUrl = lobSwitchPrefix + 'index.html';
  if (folder) {
    otherLobUrl = lobSwitchPrefix + folder + '/' + (slug === 'index' ? 'index.html' : slug + '.html');
  }

  // ---- TOP BAR ----
  // Crumbs collapse to a single label on mobile via CSS; we still emit the
  // chain so the structure matches desktop and the active label wins.
  var prefix = atRoot ? './' : '../';
  var crumbsHTML = '';
  if (atRoot) {
    crumbsHTML = '<span class="crumb-current">Command Center</span>';
  } else if (currentDashboard && current && slug !== 'index') {
    crumbsHTML = '<span class="crumb-current">' + current.label + '</span>';
  } else if (currentDashboard) {
    crumbsHTML = '<span class="crumb-current">' + currentDashboard.short + '</span>';
  } else {
    crumbsHTML = '<span class="crumb-current">Command Center</span>';
  }

  var asOf = window.FZ.formatBuiltAt
    ? window.FZ.formatBuiltAt({ dateOnly: true })
    : 'today';

  var topbarHTML = ''
    + '<header class="topbar">'
    +   '<div class="topbar-left">'
    +     '<div class="topbar-crumbs">' + crumbsHTML + '</div>'
    +   '</div>'
    +   '<div class="topbar-right">'
    +     '<div class="stamp"><span class="dot"></span>' + asOf + '</div>'
    +   '</div>'
    + '</header>';

  // ---- LOB switcher (segmented control just below the topbar) ----
  var lobSwitchHTML = ''
    + '<div class="lob-switch">'
    +   '<a href="' + (lob === 'residential' ? '#' : otherLobUrl) + '"' + (lob === 'residential' ? ' class="is-active"' : '') + '>Residential</a>'
    +   '<a href="' + (lob === 'multi-family' ? '#' : otherLobUrl) + '"' + (lob === 'multi-family' ? ' class="is-active"' : '') + '>Multi-Family</a>'
    + '</div>';

  // ---- SUB-NAV (only on dashboard pages, not the hub) ----
  var subnavHTML = '';
  if (currentDashboard) {
    subnavHTML = '<nav class="subnav">';
    currentDashboard.pages.forEach(function (p) {
      var href = (p.slug === 'index') ? './index.html' : './' + p.slug + '.html';
      var isActive = (p.slug === slug);
      var label = p.short || p.label;
      subnavHTML += '<a href="' + href + '"' + (isActive ? ' class="is-active"' : '') + '>' + label + '</a>';
    });
    subnavHTML += '</nav>';
  }

  // ---- COMPOSE INTO #app-host ----
  // Compute the desktop equivalent of this mobile URL, so the footer can
  // expose a "View desktop site" link for users who'd rather see the full layout.
  var desktopHref = (function () {
    var p = window.location.pathname || '/';
    if (p.indexOf('/mobile/') === 0) {
      return p.replace(/^\/mobile/, '') + '?desktop=1';
    }
    return '/?desktop=1';
  })();
  var footerHTML = ''
    + '<footer class="page-foot">'
    +   '<a href="' + desktopHref + '" class="view-desktop">View desktop site →</a>'
    + '</footer>';

  var appHost = document.getElementById('app-host');
  if (appHost) {
    appHost.outerHTML =
      '<div class="app">'
      + '<div class="main">'
      +   topbarHTML
      +   lobSwitchHTML
      +   subnavHTML
      +   '<main class="page" id="page-content"></main>'
      +   footerHTML
      + '</div>'
      + '</div>';
  }

  // Move the page's <template id="page-tpl"> contents into the slot
  var tpl  = document.getElementById('page-tpl');
  var slot = document.getElementById('page-content');
  if (tpl && slot) {
    slot.innerHTML = tpl.innerHTML;
  }

  // After mount: scroll the active sub-tab into view so the user can see where
  // they are in the strip without manually scrolling.
  setTimeout(function () {
    var active = document.querySelector('.subnav a.is-active');
    if (active && active.scrollIntoView) {
      active.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'instant' });
    }
  }, 0);

  document.dispatchEvent(new CustomEvent('fz:shell-ready', { detail: { folder: folder, slug: slug, mobile: true } }));
};
