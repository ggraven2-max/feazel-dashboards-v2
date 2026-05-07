/* ============================================================
   FEAZEL DASHBOARDS — INTERACTIONS LAYER
   Loaded by every desktop page shell. Adds:
     • Top-edge scroll progress bar (gradient fill)
     • IntersectionObserver fade-up reveal on sections
     • KPI counter animations (parses formatted values, counts up)
     • 3D mouse-tracked card tilt + spotlight
     • Animated subnav indicator that slides between tabs
     • Smooth sticky topbar with glass effect on scroll
     • Click ripples on tiles and tabs
     • Click-to-copy on KPI values

   No external deps. Runs on `fz:shell-ready` event from layout.js.
   ============================================================ */
(function () {
  // Respect prefers-reduced-motion
  const REDUCED = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------- Scroll progress bar ----------
  function setupScrollProgress() {
    let bar = document.getElementById('fz-scroll-progress');
    if (!bar) {
      bar = document.createElement('div');
      bar.id = 'fz-scroll-progress';
      bar.className = 'fz-scroll-progress';
      document.body.appendChild(bar);
    }
    const tick = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      const pct = total > 0 ? (h.scrollTop / total) * 100 : 0;
      bar.style.width = pct.toFixed(2) + '%';
    };
    window.addEventListener('scroll', tick, { passive: true });
    window.addEventListener('resize', tick);
    tick();
  }

  // ---------- IntersectionObserver fade-up reveal ----------
  function setupReveal() {
    if (REDUCED) return;
    const targets = document.querySelectorAll('.section, .page-head, .kpi, .chart-card, .card, .tile, .tbl-wrap');
    targets.forEach((el, i) => {
      el.classList.add('fz-reveal');
      // Stagger: each element gets a tiny delay based on document order
      el.style.transitionDelay = Math.min(i * 30, 360) + 'ms';
    });

    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-revealed');
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

    targets.forEach(el => io.observe(el));
  }

  // ---------- KPI counter animations ----------
  // Parses formatted strings like "$25.91M", "1,572", "27.1d", "+213% Jan→Apr"
  // and counts the leading number up from 0. Preserves the prefix/suffix.
  function parseFormattedNumber(str) {
    if (str == null) return null;
    str = String(str).trim();
    // Match leading sign + number with optional decimal + optional unit suffix
    const m = str.match(/^([+\-−]?)(\$?)([\d,]+(?:\.\d+)?)\s*([KMB]?|d|days)?(.*)$/);
    if (!m) return null;
    const sign = m[1] === '−' || m[1] === '-' ? -1 : 1;
    const dollar = m[2];
    const numRaw = parseFloat(m[3].replace(/,/g, ''));
    if (isNaN(numRaw)) return null;
    const unit = m[4] || '';
    const trailing = m[5] || '';
    let multiplier = 1;
    if (unit === 'K') multiplier = 1e3;
    else if (unit === 'M') multiplier = 1e6;
    else if (unit === 'B') multiplier = 1e9;
    const target = sign * numRaw * multiplier;
    return {
      target: target,
      format: (v) => {
        const abs = Math.abs(v);
        let body;
        if (unit === 'K') body = (v / 1e3).toFixed(0);
        else if (unit === 'M') body = (v / 1e6).toFixed(numRaw % 1 === 0 ? 0 : 2);
        else if (unit === 'B') body = (v / 1e9).toFixed(numRaw % 1 === 0 ? 0 : 2);
        else if (unit === 'd' || unit === 'days') body = v.toFixed(1);
        else body = Math.round(abs).toLocaleString('en-US');
        const signStr = v < 0 ? (m[1] === '−' ? '−' : '-') : (m[1] === '+' ? '+' : '');
        return signStr + dollar + body + (unit === 'days' ? ' days' : unit) + trailing;
      }
    };
  }

  function animateValue(el, parsed, duration) {
    if (REDUCED) { el.textContent = parsed.format(parsed.target); return; }
    duration = duration || 900;
    const t0 = performance.now();
    function tick(now) {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);   // ease-out cubic
      const cur = parsed.target * eased;
      el.textContent = parsed.format(cur);
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = parsed.format(parsed.target);
    }
    requestAnimationFrame(tick);
  }

  function setupCounters() {
    if (REDUCED) return;
    const candidates = document.querySelectorAll('.kpi-value, .hub-hero-stat .v, .tile-stat .v, .stamp');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target;
        if (el.dataset.fzCounted) return;
        const parsed = parseFormattedNumber(el.textContent);
        if (!parsed || isNaN(parsed.target) || parsed.target === 0) return;
        el.dataset.fzCounted = '1';
        animateValue(el, parsed, 1100);
      });
      // We unobserve regardless after first visibility
      entries.forEach(e => { if (e.isIntersecting) io.unobserve(e.target); });
    }, { threshold: 0.4 });
    candidates.forEach(el => io.observe(el));
  }

  // ---------- 3D card tilt with mouse spotlight ----------
  function setupCardTilt() {
    if (REDUCED) return;
    const cards = document.querySelectorAll('.tile, .kpi, .chart-card');
    cards.forEach(card => {
      // Skip very small KPI cards on dense grids
      if (card.classList.contains('kpi') && card.getBoundingClientRect().width < 180) return;
      card.classList.add('fz-tilt');
      let rafId = null;
      card.addEventListener('mousemove', (e) => {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
          const r = card.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width;
          const y = (e.clientY - r.top) / r.height;
          const tiltX = (y - 0.5) * -4;   // max ±2°
          const tiltY = (x - 0.5) *  4;
          card.style.setProperty('--tilt-x', tiltX.toFixed(2) + 'deg');
          card.style.setProperty('--tilt-y', tiltY.toFixed(2) + 'deg');
          card.style.setProperty('--mx', (x * 100).toFixed(1) + '%');
          card.style.setProperty('--my', (y * 100).toFixed(1) + '%');
        });
      });
      card.addEventListener('mouseleave', () => {
        card.style.setProperty('--tilt-x', '0deg');
        card.style.setProperty('--tilt-y', '0deg');
      });
    });
  }

  // ---------- Animated subnav indicator ----------
  function setupSubnavIndicator() {
    const nav = document.querySelector('.subnav');
    if (!nav) return;
    let indicator = nav.querySelector('.fz-subnav-indicator');
    if (!indicator) {
      indicator = document.createElement('span');
      indicator.className = 'fz-subnav-indicator';
      nav.appendChild(indicator);
    }
    function move() {
      const active = nav.querySelector('a.is-active');
      if (!active) { indicator.style.opacity = '0'; return; }
      const navRect = nav.getBoundingClientRect();
      const aRect = active.getBoundingClientRect();
      indicator.style.opacity = '1';
      indicator.style.left = (aRect.left - navRect.left + nav.scrollLeft) + 'px';
      indicator.style.width = aRect.width + 'px';
    }
    move();
    window.addEventListener('resize', move);
    nav.addEventListener('scroll', move);
  }

  // ---------- Topbar glass effect on scroll ----------
  // Hysteresis: enter scrolled state above 24px, exit below 4px. The gap
  // prevents the class from flipping on and off when scrollY hovers near
  // a single threshold (which caused a visible twitch). rAF-batched so we
  // never write the class more than once per frame.
  function setupStickyTopbar() {
    const topbar = document.querySelector('.topbar');
    if (!topbar) return;
    const ENTER = 24, EXIT = 4;
    let scrolled = false;
    let raf = null;
    const apply = () => {
      raf = null;
      const y = window.scrollY;
      const next = scrolled ? (y > EXIT) : (y > ENTER);
      if (next !== scrolled) {
        scrolled = next;
        topbar.classList.toggle('is-scrolled', scrolled);
      }
    };
    const onScroll = () => {
      if (raf == null) raf = requestAnimationFrame(apply);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    apply();
  }

  // ---------- Click ripples on tiles + subnav ----------
  function setupRipples() {
    if (REDUCED) return;
    const targets = document.querySelectorAll('.tile, .subnav a');
    targets.forEach(el => {
      el.addEventListener('click', (e) => {
        const r = el.getBoundingClientRect();
        const ripple = document.createElement('span');
        ripple.className = 'fz-ripple';
        ripple.style.left = (e.clientX - r.left) + 'px';
        ripple.style.top  = (e.clientY - r.top)  + 'px';
        el.appendChild(ripple);
        setTimeout(() => ripple.remove(), 700);
      });
    });
  }

  // ---------- Click-to-copy on KPI values ----------
  function setupClickToCopy() {
    const targets = document.querySelectorAll('.kpi-value');
    targets.forEach(el => {
      el.title = 'Click to copy';
      el.style.cursor = 'copy';
      el.addEventListener('click', () => {
        const text = el.textContent.trim();
        if (navigator.clipboard) {
          navigator.clipboard.writeText(text).then(() => {
            const flash = document.createElement('span');
            flash.className = 'fz-copy-flash';
            flash.textContent = 'Copied';
            el.appendChild(flash);
            setTimeout(() => flash.remove(), 1100);
          }).catch(() => {});
        }
      });
    });
  }

  // ---------- Init ----------
  function init() {
    setupScrollProgress();
    setupReveal();
    setupCounters();
    setupCardTilt();
    setupSubnavIndicator();
    setupStickyTopbar();
    setupRipples();
    setupClickToCopy();
  }

  // Wait for the layout shell + page-renderer to mount
  document.addEventListener('fz:shell-ready', () => {
    // Slight delay so page-renderer has finished writing KPI cards
    setTimeout(init, 50);
  });

  // Fallback: if shell-ready never fires (some pages use static templates),
  // run on DOMContentLoaded after a short delay
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(init, 200));
  } else {
    setTimeout(init, 200);
  }
})();
