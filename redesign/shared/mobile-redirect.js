/* ============================================================
   FEAZEL — Auto-redirect to /mobile/ pages on small viewports.
   Loaded synchronously at the TOP of every desktop HTML so the
   redirect fires before the desktop CSS/JS does any layout work.

   Override paths:
     - Append ?desktop=1 to the URL to force the desktop view
     - The choice persists for the browser session via sessionStorage
   ============================================================ */
(function () {
  try {
    var path = window.location.pathname || '/';
    var search = window.location.search || '';
    var hash = window.location.hash || '';

    // 1. Don't redirect if already on a mobile page
    if (/^\/mobile\//.test(path)) return;

    // 2. Honor explicit override (?desktop=1)
    if (/[?&]desktop=1\b/.test(search)) {
      try { sessionStorage.setItem('fz-prefer-desktop', '1'); } catch (e) {}
      return;
    }
    try {
      if (sessionStorage.getItem('fz-prefer-desktop') === '1') return;
    } catch (e) {}

    // 3. Mobile detection: viewport width OR User-Agent
    var w = window.innerWidth || document.documentElement.clientWidth || 0;
    var ua = (navigator.userAgent || '').toLowerCase();
    var isMobileUA = /iphone|ipod|android.*mobile|blackberry|iemobile|opera mini|mobile/i.test(ua);
    var isNarrow = w > 0 && w < 768;
    if (!isNarrow && !isMobileUA) return;

    // 4. Compute equivalent /mobile/ URL
    //    /                                      → /mobile/
    //    /residential/                          → /mobile/residential/
    //    /residential/sales-overview/           → /mobile/residential/sales-overview/
    //    /residential/sales-overview/index.html → /mobile/residential/sales-overview/index.html
    //    /multi-family/...                      → /mobile/multi-family/...
    var mobilePath;
    if (path === '/' || path === '/index.html') {
      mobilePath = '/mobile/';
    } else if (/^\/(residential|multi-family)(\/|$)/.test(path)) {
      mobilePath = '/mobile' + path;
    } else {
      // Unknown path, don't redirect
      return;
    }

    window.location.replace(mobilePath + search + hash);
  } catch (err) {
    // Never break the page over a redirect failure
    console.warn('[fz-mobile-redirect] ' + err.message);
  }
})();
