/* Tech Guide: equipment panel. Tap "Picture & manuals" on any equipment card to open it.
   Shows your building's photo (if any) or a labeled drawing, how to spot the parts,
   your building's exact manuals, and the makers' official manual libraries. */
(function () {
  'use strict';
  var TG = window.TG;
  var D = window.TG_DRAWINGS || {};
  var M = window.TG_MANUALS || { libraries: {}, byEquipment: {}, howToFind: [] };
  var B = window.TG_BUILDING || { photos: {}, manuals: {} };

  var panel = document.createElement('div');
  panel.className = 'eq-panel';
  panel.id = 'eq-panel';
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-modal', 'true');
  panel.setAttribute('aria-labelledby', 'eq-panel-title');
  panel.hidden = true;
  document.body.appendChild(panel);
  var lastFocus = null;

  function find(key) {
    var parts = key.split('/'), sys = TG.sys(parts[0]), c = TG.content[parts[0]];
    if (!sys || !c) return null;
    var eq = c.equipment.filter(function (e) { return e.id === parts[1]; })[0];
    return eq ? { sys: sys, eq: eq } : null;
  }

  function host(url) { try { return new URL(url).hostname.replace(/^www\./, ''); } catch (e) { return ''; } }

  function drawing(key, name) {
    var d = D[key];
    if (!d) return '';
    var marks = d.marks.map(function (m, i) {
      return '<g class="d-mark"><circle cx="' + m[0] + '" cy="' + m[1] + '" r="9" class="d-mk"/>' +
        '<text x="' + m[0] + '" y="' + (m[1] + 4) + '" class="d-mkt" text-anchor="middle">' + (i + 1) + '</text></g>';
    }).join('');
    return '<svg class="eq-svg" viewBox="-14 -14 348 208" role="img" aria-label="Labeled drawing of a typical ' + TG.esc(name) + '">' +
      d.art.join('') + marks + '</svg>';
  }

  function spotList(key) {
    var d = D[key];
    if (!d) return '';
    return '<section class="eq-sec"><h3>How to spot it</h3><p class="eq-note" style="margin:0 0 10px">Numbers match the labeled drawing.</p><ol class="spot">' +
      d.marks.map(function (m) { return '<li>' + TG.esc(m[2]) + '</li>'; }).join('') +
      '</ol><p class="eq-note">This drawing shows a typical layout. Real units differ by brand and size.</p></section>';
  }

  function render(key) {
    var f = find(key);
    if (!f) return '';
    var eq = f.eq, sys = f.sys;
    var photos = (B.photos && B.photos[key]) || [];
    var mine = (B.manuals && B.manuals[key]) || [];
    var libs = ((M.byEquipment && M.byEquipment[key]) || []).map(function (k) { return M.libraries[k]; }).filter(Boolean);
    var h = '<div class="eq-panel-inner" style="--sys:' + sys.color + '">';

    h += '<header class="eq-panel-head"><div class="eq-head"><span class="eq-tag">' + TG.esc(eq.tag) + '</span>' +
      '<h2 id="eq-panel-title">' + TG.esc(eq.name) + '</h2></div>' +
      '<button type="button" class="sheet-close eq-close" aria-label="Close">✕</button></header>';

    // Picture: your photo first, drawing second
    h += '<section class="eq-sec">';
    if (photos.length) {
      h += '<div class="eq-tabs" role="tablist">' +
        '<button type="button" role="tab" aria-selected="true" data-view="photo">Your building</button>' +
        '<button type="button" role="tab" aria-selected="false" data-view="drawing">Labeled drawing</button></div>';
      h += '<div class="eq-view" data-pane="photo">' + photos.map(function (p) {
        return '<figure class="eq-photo"><img src="' + TG.esc(p.src) + '" alt="' + TG.esc(p.caption) + '" loading="lazy">' +
          '<figcaption>' + TG.esc(p.caption) + '</figcaption></figure>';
      }).join('') + '</div>';
      h += '<div class="eq-view" data-pane="drawing" hidden>' + drawing(key, eq.name) + '</div>';
    } else {
      h += '<div class="eq-view">' + drawing(key, eq.name) + '</div>';
    }
    h += '</section>';

    h += spotList(key);

    // Your building's exact manuals
    h += '<section class="eq-sec"><h3>Your building</h3>';
    if (mine.length) {
      h += '<ul class="links">' + mine.map(function (m) {
        return '<li><a href="' + TG.esc(m.url) + '" target="_blank" rel="noopener"><strong>' + TG.esc(m.title) + '</strong>' +
          '<span>' + TG.esc(m.note) + '</span><span class="host">' + TG.esc(host(m.url)) + ' ↗</span></a></li>';
      }).join('') + '</ul>';
    } else {
      h += '<p class="eq-note">No exact manuals added yet. Take a photo of the nameplate and send it to whoever keeps this app.</p>';
    }
    h += '</section>';

    // Code flowcharts for your building's units
    ((B.codeGuides && B.codeGuides[key]) || []).forEach(function (g) {
      h += '<section class="eq-sec"><h3>' + TG.esc(g.title) + '</h3><div class="flowchart">' +
        '<div class="fc-box fc-start">' + TG.esc(g.start) + '</div><div class="fc-arrow" aria-hidden="true"></div>' +
        '<div class="fc-box fc-q">' + TG.esc(g.question) + '</div><div class="fc-arrow" aria-hidden="true"></div>' +
        '<div class="fc-branches">' + g.branches.map(function (b) {
          return '<div class="fc-branch fc-' + b.key + '"><div class="fc-code"><code>' + TG.esc(b.code) + '</code><span>' + TG.esc(b.name) + '</span></div>' +
            '<p class="fc-means">' + TG.esc(b.means) + '</p>' +
            '<ul class="fc-steps">' + b.steps.map(function (s) { return '<li>' + TG.esc(s) + '</li>'; }).join('') + '</ul>' +
            (b.watch ? '<p class="fc-watch"><strong>Watch for:</strong> ' + TG.esc(b.watch) + '</p>' : '') + '</div>';
        }).join('') + '</div><div class="fc-arrow" aria-hidden="true"></div>' +
        '<div class="fc-box fc-end">' + TG.esc(g.end) + '</div>' +
        '<ul class="fc-rules">' + g.rules.map(function (r) { return '<li>' + TG.esc(r) + '</li>'; }).join('') + '</ul>' +
        '</div><p class="eq-note">' + TG.esc(g.source) + '</p></section>';
    });

    // Maker libraries
    h += '<section class="eq-sec"><h3>Manufacturer manuals</h3>';
    if (libs.length) {
      h += '<ul class="links">' + libs.map(function (l) {
        return '<li><a href="' + TG.esc(l.url) + '" target="_blank" rel="noopener"><strong>' + TG.esc(l.name) + '</strong>' +
          '<span>' + TG.esc(l.what) + '</span><span class="host">' + TG.esc(host(l.url)) + ' ↗</span></a></li>';
      }).join('') + '</ul><p class="eq-note">These open the maker\'s official website. You may need the model number from the nameplate.</p>';
    } else {
      h += '<p class="eq-note">Many brands make this equipment and there is no single official library. Use the steps below.</p>';
    }
    h += '</section>';

    h += '<section class="eq-sec"><h3>How to find the right manual</h3><ol class="spot">' +
      M.howToFind.map(function (s) { return '<li>' + TG.fmt(s, null) + '</li>'; }).join('') + '</ol></section>';

    return h + '</div>';
  }

  function open(key, opener) {
    var html = render(key);
    if (!html) return;
    lastFocus = opener || document.activeElement;
    panel.innerHTML = html;
    panel.hidden = false;
    panel.scrollTop = 0;
    document.documentElement.classList.add('panel-open');
    panel.querySelector('.eq-close').focus();
  }
  function close() {
    if (panel.hidden) return;
    panel.hidden = true;
    panel.innerHTML = '';
    document.documentElement.classList.remove('panel-open');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  panel.addEventListener('click', function (e) {
    if (e.target.closest('.eq-close')) { close(); return; }
    var tab = e.target.closest('[data-view]');
    if (tab) {
      panel.querySelectorAll('[data-view]').forEach(function (t) { t.setAttribute('aria-selected', t === tab ? 'true' : 'false'); });
      panel.querySelectorAll('[data-pane]').forEach(function (p) { p.hidden = p.getAttribute('data-pane') !== tab.getAttribute('data-view'); });
    }
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  window.addEventListener('hashchange', close);

  TG.equip = {
    open: open, close: close,
    hasPhoto: function (key) { return !!(B.photos && B.photos[key] && B.photos[key].length); }
  };
})();
