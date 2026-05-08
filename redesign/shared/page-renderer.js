/* ============================================================
   FEAZEL DASHBOARDS — Page Renderer
   Each sub-page calls FZ.renderPage({ folder, slug, def })
   where `def` is an object describing the page sections.

   def schema:
   {
     eyebrow, title, intro,
     tags: [{ kind: 'success'|'warn'|'danger'|'info'|'neutral', text }],
     kpis: [{ label, value, sub, trend, tone, span, sparkData, sparkColor }],
     sections: [
       {
         kind: 'kpi-row' | 'chart-grid' | 'table' | 'prose' | 'callout' | 'two-col',
         heading, caption,
         // payload depends on kind
       }
     ]
   }
   ============================================================ */
(function () {
  window.FZ = window.FZ || {};
  var P = window.FZ;

  // ---------- HTML helpers ----------
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function esc(s) {
    if (s == null) return '';
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  // ---------- Renderers ----------
  function renderHead(def) {
    var head = el('div', 'page-head');
    var title = el('div', 'page-head-title');
    var html = '';
    if (def.eyebrow) html += '<span class="eyebrow">' + esc(def.eyebrow) + '</span>';
    html += '<h1>' + esc(def.title) + '</h1>';
    if (def.intro) html += '<p>' + def.intro + '</p>';
    title.innerHTML = html;
    head.appendChild(title);
    if (def.tags && def.tags.length) {
      var meta = el('div', 'page-head-meta');
      def.tags.forEach(function (t) {
        var cls = 'tag' + (t.kind && t.kind !== 'neutral' ? ' tag-' + t.kind : '');
        meta.appendChild(el('span', cls, esc(t.text)));
      });
      head.appendChild(meta);
    }
    return head;
  }

  function kpiCard(k, idx) {
    var tone = k.tone ? ' kpi-' + k.tone : '';
    var card = el('div', 'kpi' + tone);
    if (k.span) card.style.gridColumn = 'span ' + k.span;

    var label = '<div class="kpi-label">' + esc(k.label || '');
    if (k.icon) label += '<span style="opacity:0.5;">' + (P.icons[k.icon] || '') + '</span>';
    label += '</div>';

    var val = '<div class="kpi-value' + (k.valueSm ? ' kpi-value-sm' : '') + '">' + (k.value != null ? esc(k.value) : '—') + '</div>';

    var sub = '';
    if (k.delta || k.sub) {
      sub = '<div class="kpi-sub">';
      if (k.delta) {
        var deltaCls = 'kpi-delta-' + (k.deltaTone || 'flat');
        sub += '<span class="kpi-delta ' + deltaCls + '">' + esc(k.delta) + '</span>';
      }
      if (k.sub) sub += '<span>' + esc(k.sub) + '</span>';
      sub += '</div>';
    }

    var sparkHTML = '';
    if (k.sparkData) {
      sparkHTML = '<div class="kpi-spark"><canvas id="spark-' + idx + '-' + Math.random().toString(36).slice(2, 7) + '"></canvas></div>';
    }

    card.innerHTML = label + val + sub + sparkHTML;

    // Wire up the spark after insertion
    if (k.sparkData) {
      setTimeout(function () {
        var c = card.querySelector('canvas');
        if (c) FZ.sparkline(c, k.sparkData, k.sparkColor || FZ.palette.blue);
      }, 0);
    }
    return card;
  }

  function renderKpiRow(section) {
    var wrap = el('section', 'section');
    if (section.heading) {
      var sh = el('div', 'section-head');
      sh.innerHTML = '<h2>' + esc(section.heading) + '</h2>' + (section.caption ? '<small>' + esc(section.caption) + '</small>' : '');
      wrap.appendChild(sh);
    }
    var cols = section.cols || 4;
    var grid = el('div', 'grid grid-' + cols);
    (section.items || []).forEach(function (k, i) { grid.appendChild(kpiCard(k, i)); });
    wrap.appendChild(grid);
    return wrap;
  }

  function chartCard(c, sectionIdx, chartIdx) {
    var card = el('div', 'chart-card');
    if (c.span) card.style.gridColumn = 'span ' + c.span;
    var height = c.height || 'h-280';
    if (typeof height === 'number') height = 'h-' + height;
    if (height.indexOf('h-') !== 0) height = 'h-' + height;
    var canvasId = 'chart-' + sectionIdx + '-' + chartIdx + '-' + Math.random().toString(36).slice(2, 7);
    var head = ''
      + '<div class="chart-head">'
      +   '<div>'
      +     '<h3>' + esc(c.title || '') + '</h3>'
      +     (c.sub ? '<div class="chart-sub">' + esc(c.sub) + '</div>' : '')
      +   '</div>'
      +   (c.tag ? '<span class="pill pill-' + (c.tagTone || 'info') + '">' + esc(c.tag) + '</span>' : '')
      + '</div>';
    var body = '<div class="chart-canvas-wrap ' + height + '"><canvas id="' + canvasId + '"></canvas></div>';
    var foot = c.foot ? '<div class="chart-foot">' + c.foot + '</div>' : '';
    card.innerHTML = head + body + foot;
    // Render after insert
    setTimeout(function () {
      var ctx = document.getElementById(canvasId);
      if (!ctx) return;
      try {
        new Chart(ctx.getContext('2d'), c.config);
      } catch (err) {
        console.error('[FZ] chart render failed for', canvasId, err);
      }
    }, 0);
    return card;
  }

  function renderChartGrid(section, sectionIdx) {
    var wrap = el('section', 'section');
    if (section.heading) {
      var sh = el('div', 'section-head');
      sh.innerHTML = '<h2>' + esc(section.heading) + '</h2>' + (section.caption ? '<small>' + esc(section.caption) + '</small>' : '');
      wrap.appendChild(sh);
    }
    var cols = section.cols || 2;
    var grid = el('div', 'grid grid-' + cols);
    (section.charts || []).forEach(function (c, i) {
      grid.appendChild(chartCard(c, sectionIdx, i));
    });
    wrap.appendChild(grid);
    return wrap;
  }

  function renderTable(section) {
    var wrap = el('section', 'section');
    if (section.heading) {
      var sh = el('div', 'section-head');
      sh.innerHTML = '<h2>' + esc(section.heading) + '</h2>' + (section.caption ? '<small>' + esc(section.caption) + '</small>' : '');
      wrap.appendChild(sh);
    }
    var tw = el('div', 'tbl-wrap');
    var tbl = el('table', 'tbl' + (section.compact ? ' tbl-compact' : ''));
    var thead = '<thead><tr>';
    (section.headers || []).forEach(function (h) {
      var cls = h.num ? ' class="num"' : '';
      thead += '<th' + cls + '>' + esc(typeof h === 'string' ? h : h.label) + '</th>';
    });
    thead += '</tr></thead>';
    var tbody = '<tbody>';
    (section.rows || []).forEach(function (row) {
      tbody += '<tr>';
      row.forEach(function (cell, i) {
        var hdr = section.headers ? section.headers[i] : null;
        var cls = '';
        if (hdr && typeof hdr === 'object' && hdr.num) cls = ' class="num"';
        if (cell && typeof cell === 'object' && cell.html != null) {
          tbody += '<td' + cls + '>' + cell.html + '</td>';
        } else {
          tbody += '<td' + cls + '>' + esc(cell) + '</td>';
        }
      });
      tbody += '</tr>';
    });
    tbody += '</tbody>';
    var tfoot = '';
    if (section.footer) {
      tfoot = '<tfoot><tr>';
      section.footer.forEach(function (cell, i) {
        var hdr = section.headers ? section.headers[i] : null;
        var cls = (hdr && typeof hdr === 'object' && hdr.num) ? ' class="num"' : '';
        tfoot += '<td' + cls + '>' + (cell && cell.html != null ? cell.html : esc(cell)) + '</td>';
      });
      tfoot += '</tr></tfoot>';
    }
    tbl.innerHTML = thead + tbody + tfoot;
    tw.style.maxHeight = section.maxHeight || '';
    tw.style.overflow = section.maxHeight ? 'auto' : '';
    tw.appendChild(tbl);
    wrap.appendChild(tw);
    if (section.foot) {
      var f = el('div', '', '<small style="display:block; margin-top:8px;">' + section.foot + '</small>');
      wrap.appendChild(f);
    }
    return wrap;
  }

  function renderProse(section) {
    var wrap = el('section', 'section');
    if (section.heading) {
      var sh = el('div', 'section-head');
      sh.innerHTML = '<h2>' + esc(section.heading) + '</h2>' + (section.caption ? '<small>' + esc(section.caption) + '</small>' : '');
      wrap.appendChild(sh);
    }
    if (section.cards) {
      var cols = section.cols || section.cards.length;
      var grid = el('div', 'grid grid-' + cols);
      section.cards.forEach(function (c) {
        var cls = 'card';
        if (c.kind === 'navy') cls += ' card-navy';
        if (c.kind === 'tint') cls += ' card-tint';
        var card = el('div', cls);
        var html = '';
        if (c.eyebrow) html += '<span class="eyebrow">' + esc(c.eyebrow) + '</span>';
        if (c.title) html += '<h3 style="margin-top:6px;">' + esc(c.title) + '</h3>';
        if (c.body) html += '<div class="prose" style="margin-top:8px;">' + c.body + '</div>';
        if (c.list) {
          html += '<ul class="insights" style="margin-top:10px; padding:0;">';
          c.list.forEach(function (it) {
            var icon = it.icon || '✓';
            var iconCls = it.tone || '';
            html += '<li><span class="ic ' + iconCls + '">' + icon + '</span><div>' + (it.text || it) + '</div></li>';
          });
          html += '</ul>';
        }
        card.innerHTML = html;
        grid.appendChild(card);
      });
      wrap.appendChild(grid);
    } else if (section.body) {
      var card = el('div', 'card');
      card.innerHTML = '<div class="prose">' + section.body + '</div>';
      wrap.appendChild(card);
    }
    return wrap;
  }

  function renderCallout(section) {
    var wrap = el('section', 'section');
    var cls = 'callout' + (section.tone ? ' callout-' + section.tone : '');
    var c = el('div', cls);
    var html = '';
    if (section.title) html += '<span class="callout-title">' + esc(section.title) + '</span>';
    html += section.body || '';
    c.innerHTML = html;
    wrap.appendChild(c);
    return wrap;
  }

  function renderTwoCol(section, sectionIdx) {
    var wrap = el('section', 'section');
    if (section.heading) {
      var sh = el('div', 'section-head');
      sh.innerHTML = '<h2>' + esc(section.heading) + '</h2>' + (section.caption ? '<small>' + esc(section.caption) + '</small>' : '');
      wrap.appendChild(sh);
    }
    var grid = el('div', 'grid grid-12');
    (section.items || []).forEach(function (item, i) {
      var col = el('div', 'col-span-' + (item.span || 6));
      // Recursively render the inner section
      var inner;
      if (item.kind === 'chart-grid') inner = renderChartGrid(Object.assign({}, item, { heading: null }), sectionIdx + '-' + i);
      else if (item.kind === 'table') inner = renderTable(Object.assign({}, item, { heading: null }));
      else if (item.kind === 'prose') inner = renderProse(Object.assign({}, item, { heading: null }));
      else if (item.kind === 'kpi-row') inner = renderKpiRow(Object.assign({}, item, { heading: null }));
      else if (item.kind === 'chart') inner = (function () {
        var card = chartCard(item, sectionIdx, i);
        return card;
      })();
      else inner = el('div', '', '');
      // If we also want a heading on the column
      if (item.heading) {
        var h = el('h3', '', esc(item.heading));
        h.style.marginBottom = '12px';
        col.appendChild(h);
      }
      col.appendChild(inner);
      grid.appendChild(col);
    });
    wrap.appendChild(grid);
    return wrap;
  }

  // ---------- Empty-section detection ----------
  // Skip rendering a section that has no useful payload to avoid empty cards
  // and "—" boxes on dashboards where the underlying data feed isn't
  // available (e.g., MF profitability before the cost-mix CSV lands).
  function isSectionEmpty(s) {
    if (!s || !s.kind) return true;
    switch (s.kind) {
      case 'kpi-row':
        if (!s.items || !s.items.length) return true;
        // Also skip if EVERY KPI value is empty/dash/zero — pages with
        // section.items: [] aren't the only empty case; some come back as
        // [{ value: '—' }, { value: '—' }, ...]
        return s.items.every(function (k) {
          var v = (k && k.value != null) ? String(k.value).trim() : '';
          return v === '' || v === '—' || v === '-' || v === '$0' || v === '0';
        });
      case 'chart-grid':
        if (!s.charts || !s.charts.length) return true;
        // Skip if every chart's dataset is empty.
        return s.charts.every(function (c) {
          var datasets = c && c.config && c.config.data && c.config.data.datasets;
          if (!Array.isArray(datasets) || datasets.length === 0) return true;
          return datasets.every(function (d) {
            return !d || !Array.isArray(d.data) || d.data.length === 0
              || d.data.every(function (v) { return v == null || v === 0; });
          });
        });
      case 'table':
        return !s.rows || !s.rows.length;
      case 'prose':
        return !s.body && !s.html && !(s.items && s.items.length);
      case 'callout':
        return !s.body && !s.text && !s.html;
      case 'two-col':
        var l = s.left, r = s.right;
        return isSectionEmpty(l) && isSectionEmpty(r);
      default:
        return false;
    }
  }

  // ---------- Top-level render ----------
  P.renderPage = function (def) {
    var slot = document.getElementById('page-content');
    if (!slot) {
      console.warn('[FZ] No #page-content slot.');
      return;
    }
    slot.innerHTML = '';
    slot.appendChild(renderHead(def));

    (def.sections || []).forEach(function (s, idx) {
      if (isSectionEmpty(s)) return;            // skip empty/no-data sections
      if (s.kind === 'kpi-row') slot.appendChild(renderKpiRow(s));
      else if (s.kind === 'chart-grid') slot.appendChild(renderChartGrid(s, idx));
      else if (s.kind === 'table') slot.appendChild(renderTable(s));
      else if (s.kind === 'prose') slot.appendChild(renderProse(s));
      else if (s.kind === 'callout') slot.appendChild(renderCallout(s));
      else if (s.kind === 'two-col') slot.appendChild(renderTwoCol(s, idx));
    });
  };
})();
