/* Tech Guide: app shell, page switching and page rendering. */
(function () {
  'use strict';

  var TG = window.TG = window.TG || {};
  var CONTENT = window.TG_CONTENT || {};

  TG.SYSTEMS = [
    { id: 'hvac', name: 'HVAC', full: 'Heating, ventilation and air conditioning', color: 'var(--c-hvac)', icon: 'air', blurb: 'Keeps the air comfortable, fresh and moving.' },
    { id: 'plumbing', name: 'Plumbing', full: 'Water in, waste out', color: 'var(--c-plumb)', icon: 'drop', blurb: 'Brings clean water in and takes waste out.' },
    { id: 'electrical', name: 'Electrical', full: 'Power for the whole building', color: 'var(--c-elec)', icon: 'bolt', blurb: 'Powers everything. Treat it with respect.' },
    { id: 'fire', name: 'Fire & Life Safety', short: 'Fire & Safety', full: 'Alarms, sprinklers and exits', color: 'var(--c-fire)', icon: 'flame', blurb: 'Alarms, sprinklers and exits that protect people.' }
  ];
  TG.sys = function (id) { return TG.SYSTEMS.filter(function (s) { return s.id === id; })[0]; };
  TG.content = CONTENT;

  /* ---------- helpers ---------- */
  var ICONS = {
    air: '<path d="M3 8h10a3 3 0 1 0-3-3"/><path d="M3 12h15a3 3 0 1 1-3 3"/><path d="M3 16h7"/>',
    drop: '<path d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11z"/>',
    bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
    flame: '<path d="M12 22c4 0 7-3 7-7 0-4-3-6-4-10-2 2-3 4-3 6-1-1-2-2-2-4-3 3-5 5-5 8 0 4 3 7 7 7z"/>',
    home: '<path d="M3 11 12 4l9 7v9h-6v-6H9v6H3z"/>',
    clip: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4h6v3H9z"/><path d="m9 13 2 2 4-4"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    stop: '<path d="M8 2h8l6 6v8l-6 6H8l-6-6V8z"/><path d="M12 7v6"/><path d="M12 17h.01"/>',
    back: '<path d="M15 6l-6 6 6 6"/>'
  };
  TG.icon = function (name, cls) {
    return '<svg class="icon ' + (cls || '') + '" viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[name] || '') + '</svg>';
  };
  TG.esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };
  TG.store = {
    get: function (k) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : null; } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* storage blocked: app still works */ } }
  };
  TG.toast = function (msg) {
    var t = document.createElement('div');
    t.className = 'toast'; t.setAttribute('role', 'status'); t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(function () { t.remove(); }, 2200);
  };

  /* ---------- glossary linking ---------- */
  // Every glossary term becomes tappable the first time it appears in a card.
  var GLOSS = [];
  TG.SYSTEMS.forEach(function (s) {
    var c = CONTENT[s.id];
    if (c && c.glossary) c.glossary.forEach(function (g) { GLOSS.push({ term: g.term, def: g.def, match: g.match || [g.term], sys: s.id }); });
  });
  TG.GLOSS = GLOSS;
  var keyMap = {};
  var acronyms = {};
  var termRe = null;
  (function () {
    var keys = [];
    GLOSS.forEach(function (g, i) { g.match.forEach(function (k) { keyMap[k.toLowerCase()] = i; keys.push(k); if (/^[A-Z0-9&]+$/.test(k)) acronyms[k.toLowerCase()] = k; }); });
    if (!keys.length) return;
    keys.sort(function (a, b) { return b.length - a.length; });
    termRe = new RegExp('\\b(' + keys.map(function (k) { return k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }).join('|') + ')\\b', 'gi');
  })();

  // Turn plain content text into safe HTML: **bold** + tappable glossary terms.
  TG.fmt = function (text, seen) {
    text = String(text);
    var out = '', last = 0, m;
    if (termRe && seen) {
      termRe.lastIndex = 0;
      while ((m = termRe.exec(text))) {
        var i = keyMap[m[0].toLowerCase()];
        if (i == null || seen.has(i)) continue;
        var ac = acronyms[m[0].toLowerCase()];
        if (ac && m[0] !== ac) continue;
        seen.add(i);
        out += TG.esc(text.slice(last, m.index)) + '<button type="button" class="term" data-g="' + i + '">' + TG.esc(m[0]) + '</button>';
        last = m.index + m[0].length;
      }
    }
    out += TG.esc(text.slice(last));
    return out.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  };
  TG.plain = function (text) { return String(text).replace(/\*\*/g, ''); };

  /* ---------- shared bits ---------- */
  var DISCLAIMER = '<p class="disclaimer">General training guide for new technicians. Always follow your building\'s written procedures, the equipment maker\'s instructions and your supervisor. Have a senior tech or safety lead review this guide before relying on it.</p>';

  function systemTile(s) {
    var ready = !!CONTENT[s.id];
    return '<a class="sys-tile" href="#' + s.id + '" style="--sys:' + s.color + '">' +
      '<div class="tile-top">' + TG.icon(s.icon) +
      (ready ? '<span class="chip ready">Ready</span>' : '<span class="chip soon">Coming next</span>') + '</div>' +
      '<div><div class="sys-tile-name">' + TG.esc(s.short || s.name) + '</div>' +
      '<p class="sys-tile-blurb">' + TG.esc(s.blurb) + '</p></div></a>';
  }

  /* ---------- pages ---------- */
  function renderHome() {
    var p = TG.rounds ? TG.rounds.progress() : { done: 0, total: 0 };
    var pct = p.total ? Math.round(p.done / p.total * 100) : 0;
    return '<section class="wrap hero">' +
      '<h1 class="hero-title"><span>Tech</span><span class="outline">Guide</span></h1>' +
      '<p class="hero-sub">Your first year in the building, explained in plain words.</p>' +
      '<a class="plate" href="#rounds">' +
        '<div><div class="label">Today\'s rounds</div><div class="plate-title">Start your walk</div></div>' +
        '<div class="plate-count" id="home-count">' + p.done + '/' + p.total + '</div>' +
        '<div class="plate-bar"><i style="width:' + pct + '%"></i></div>' +
      '</a>' +
      '</section>' +
      '<section class="wrap">' +
        '<div class="section-head"><h2>Systems</h2><span class="label">Tap one to start</span></div>' +
        '<div class="systems">' + TG.SYSTEMS.map(systemTile).join('') + '</div>' +
        '<a class="stop-tile" href="#escalate"><span class="octagon">STOP</span>' +
          '<div><strong>Stop &amp; call</strong><span>When to stop and get a senior tech or contractor.</span></div></a>' +
        DISCLAIMER +
      '</section>';
  }

  function renderComingSoon(s) {
    return '<section class="wrap sys-hero" style="--sys:' + s.color + '">' +
      '<a class="back" href="#home">' + TG.icon('back') + 'All systems</a>' +
      '<h1 class="sys-name">' + TG.esc(s.short || s.name) + '</h1>' +
      '<p class="sys-full">' + TG.esc(s.full) + '</p>' +
      '<div class="soon-card"><span class="label">Coming next</span>' +
      '<p>This section is being written. It will have the same parts as HVAC: overview, equipment, troubleshooting guides, safety and a glossary.</p>' +
      '<a class="btn ghost" href="#hvac" style="justify-self:start">See HVAC</a></div>' +
      DISCLAIMER + '</section>';
  }

  function renderSystem(s) {
    var c = CONTENT[s.id];
    if (!c) return renderComingSoon(s);
    var id = s.id;
    var h = '';

    // Hero + jump links
    h += '<section class="wrap sys-hero" style="--sys:' + s.color + '">' +
      '<a class="back" href="#home">' + TG.icon('back') + 'All systems</a>' +
      '<h1 class="sys-name">' + TG.esc(s.short || s.name) + '</h1>' +
      '<p class="sys-full">' + TG.esc(s.full) + '</p>' +
      '<nav class="jump" aria-label="Sections">' +
        '<a href="#' + id + '" data-jump="' + id + '-overview">Overview</a>' +
        '<a href="#' + id + '" data-jump="' + id + '-equipment">Equipment</a>' +
        '<a href="#' + id + '" data-jump="' + id + '-fix">Fix it</a>' +
        '<a href="#' + id + '" data-jump="' + id + '-safety">Safety</a>' +
        '<a href="#' + id + '" data-jump="' + id + '-words">Words</a>' +
      '</nav></section>';

    h += '<div class="wrap" style="--sys:' + s.color + '">';

    // Overview
    var o = c.overview, seen = new Set();
    h += '<section class="block" id="' + id + '-overview"><div class="section-head"><h2>Overview</h2></div>' +
      '<div class="prose"><p class="lead">' + TG.fmt(o.lead, seen) + '</p>' +
      o.paragraphs.map(function (p) { return '<p>' + TG.fmt(p, seen) + '</p>'; }).join('') + '</div>';
    if (o.flow) {
      h += '<div class="flow"><span class="label">' + TG.esc(o.flowLabel || 'How it flows') + '</span><ol>' +
        o.flow.map(function (f) { return '<li><span>' + TG.esc(f) + '</span></li>'; }).join('') +
        '</ol><p>' + TG.esc(o.flowNote || '') + '</p></div>';
    }
    h += '</section>';

    // Equipment
    h += '<section class="block" id="' + id + '-equipment"><div class="section-head"><h2>Equipment</h2><span class="label">' + c.equipment.length + ' types</span></div><div class="equip">';
    c.equipment.forEach(function (e) {
      var sn = new Set();
      h += '<article class="eq" id="eq-' + id + '-' + e.id + '">' +
        '<div class="eq-head"><span class="eq-tag">' + TG.esc(e.tag) + '</span><h3>' + TG.esc(e.name) + '</h3></div>' +
        '<p>' + TG.fmt(e.what, sn) + '</p>' +
        '<p class="where"><strong>Where:</strong> ' + TG.fmt(e.where, sn) + '</p>' +
        '<button type="button" class="eq-open" data-eq="' + id + '/' + e.id + '">' +
          '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="11" r="2"/><path d="m21 17-5-5-8 7"/></svg>' +
          (TG.equip && TG.equip.hasPhoto(id + '/' + e.id) ? 'Photo, drawing &amp; manuals' : 'Picture &amp; manuals') + '</button>' +
        '<details><summary>What to check</summary><ul class="ticks">' +
        e.check.map(function (x) { return '<li>' + TG.fmt(x, sn) + '</li>'; }).join('') +
        '</ul></details></article>';
    });
    h += '</div></section>';

    // Troubleshooting guides
    h += '<section class="block" id="' + id + '-fix"><div class="section-head"><h2>Fix it</h2><span class="label">' + c.guides.length + ' common problems</span></div><div class="guides">';
    c.guides.forEach(function (g) {
      var sn = new Set();
      h += '<details class="guide" id="g-' + id + '-' + g.id + '">' +
        '<summary><span class="guide-title">' + TG.esc(g.title) + '</span>' +
        '<span class="guide-toggle" aria-hidden="true">+</span>' +
        '<span class="guide-sym">' + TG.esc(g.symptom) + '</span>' +
        '<span class="guide-tags"><span class="chip steps">' + g.steps.length + ' steps</span>' +
        (g.loto ? '<span class="chip loto">Lockout may be needed</span>' : '') + '</span></summary>' +
        '<div class="guide-body">' +
        (g.loto ? '<div class="hazard"><div><strong>Lock it out before you reach in</strong>Any time your hands go inside a unit, use lockout/tagout. A thermostat set to off is not enough. <a href="#' + id + '" data-jump="' + id + '-loto">See the steps</a></div></div>' : '') +
        '<ol class="steps-list">' + g.steps.map(function (st) { return '<li><div>' + TG.fmt(st, sn) + '</div></li>'; }).join('') + '</ol>' +
        '<div class="stopbox"><div class="stopbox-head"><span class="octagon">STOP</span><strong>Stop and call if</strong></div><ul>' +
        g.stopIf.map(function (x) { return '<li>' + TG.fmt(x, sn) + '</li>'; }).join('') + '</ul></div>' +
        (g.tip ? '<p class="tip"><span class="label">Pro tip</span><span>' + TG.fmt(g.tip, sn) + '</span></p>' : '') +
        '</div></details>';
    });
    h += '</div></section>';

    // Safety
    h += '<section class="block" id="' + id + '-safety"><div class="section-head"><h2>Safety</h2></div><div class="warnings">';
    c.safety.warnings.forEach(function (w) {
      h += '<article class="warning ' + (w.level === 'danger' ? 'danger' : '') + '"><span class="label">' + (w.level === 'danger' ? 'Danger' : 'Caution') + '</span>' +
        '<h3>' + TG.esc(w.title) + '</h3><p>' + TG.fmt(w.text, new Set()) + '</p></article>';
    });
    h += '</div>';
    var l = c.safety.loto;
    h += '<div class="hazard loto" id="' + id + '-loto"><div class="loto-body"><span class="label">' + TG.esc(l.label || 'Before hands-on work') + '</span><h3>' + TG.esc(l.title || 'Lockout / Tagout') + '</h3>' +
      '<p>' + TG.fmt(l.intro, new Set()) + '</p>' +
      '<ol class="steps-list">' + l.steps.map(function (st) { return '<li><div>' + TG.fmt(st, null) + '</div></li>'; }).join('') + '</ol></div></div>';
    h += '</section>';

    // Glossary
    h += '<section class="block" id="' + id + '-words"><div class="section-head"><h2>Words to know</h2><span class="label">' + c.glossary.length + ' terms</span></div><dl class="glossary">';
    GLOSS.forEach(function (g, i) {
      if (g.sys !== id) return;
      var sn = new Set([i]);
      h += '<div class="gl" id="gl-' + i + '"><dt>' + TG.esc(g.term) + '</dt><dd>' + TG.fmt(g.def, sn) + '</dd></div>';
    });
    h += '</dl></section>' + DISCLAIMER + '</div>';
    return h;
  }

  function renderEscalate() {
    var E = window.TG_ESCALATION || { universal: [], whoToCall: [], systems: {} };
    var h = '<section class="wrap esc-hero">' +
      '<a class="back" href="#home">' + TG.icon('back') + 'Home</a>' +
      '<h1 class="page-title">Stop &amp; call</h1>' +
      '<p class="hero-sub">Stopping is part of the job. Senior techs would much rather get a call than fix a mistake.</p></section>';
    h += '<section class="wrap"><div class="section-head"><h2>Stop right away if</h2></div><div class="stops">' +
      E.universal.map(function (u, i) {
        return '<article class="stop" id="esc-u-' + i + '"><span class="octagon"></span><div><h3>' + TG.esc(u.title) + '</h3><p>' + TG.fmt(u.text, null) + '</p></div></article>';
      }).join('') + '</div>';
    h += '<div class="section-head"><h2>Who to call</h2></div><div class="calls">' +
      E.whoToCall.map(function (w) { return '<div class="call"><strong>' + TG.esc(w.who) + '</strong><span>' + TG.esc(w.when) + '</span></div>'; }).join('') +
      '</div><p class="note">' + TG.esc(E.whoToCallNote || '') + '</p>';
    h += '<div class="section-head"><h2>By system</h2></div>';
    TG.SYSTEMS.forEach(function (s) {
      var list = E.systems[s.id];
      h += '<div class="sys-list" id="esc-' + s.id + '" style="--sys:' + s.color + '"><h3>' + TG.esc(s.name) + '</h3>' +
        (list ? '<ul>' + list.map(function (x) { return '<li>' + TG.fmt(x, null) + '</li>'; }).join('') + '</ul>'
              : '<p class="note">Coming with the ' + TG.esc(s.name) + ' section.</p>') + '</div>';
    });
    h += DISCLAIMER + '</section>';
    return h;
  }

  /* ---------- router ---------- */
  var view = document.getElementById('view');
  var pendingFocus = null;

  TG.focusTarget = function (id) {
    var el = document.getElementById(id);
    if (!el) return;
    if (el.tagName === 'DETAILS') el.open = true;
    var parent = el.parentElement && el.parentElement.closest('details');
    if (parent) parent.open = true;
    el.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
    el.classList.remove('flash'); void el.offsetWidth; el.classList.add('flash');
  };

  // Go to a page, then optionally scroll to something on it.
  TG.go = function (page, targetId) {
    var current = (location.hash || '#home').slice(1);
    if (current === page) { if (targetId) TG.focusTarget(targetId); return; }
    pendingFocus = targetId || null;
    location.hash = page;
  };

  function route() {
    var page = (location.hash || '').slice(1) || 'home';
    var s = TG.sys(page);
    var html;
    if (s) html = renderSystem(s);
    else if (page === 'rounds' && TG.rounds) html = TG.rounds.render();
    else if (page === 'escalate') html = renderEscalate();
    else { page = 'home'; html = renderHome(); }
    view.innerHTML = html;
    document.querySelectorAll('.bottomnav [data-nav]').forEach(function (a) {
      if (a.getAttribute('data-nav') === page) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    var titles = { home: 'Tech Guide', rounds: 'Daily Rounds · Tech Guide', escalate: 'Stop & Call · Tech Guide' };
    document.title = s ? s.name + ' · Tech Guide' : (titles[page] || 'Tech Guide');
    if (page === 'rounds' && TG.rounds) TG.rounds.bind();
    if (pendingFocus) { var t = pendingFocus; pendingFocus = null; setTimeout(function () { TG.focusTarget(t); }, 30); }
    else window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', route);

  /* ---------- clicks: jump links, glossary terms ---------- */
  var sheet = document.getElementById('term-sheet');
  function openTerm(i) {
    var g = GLOSS[i]; if (!g) return;
    var s = TG.sys(g.sys);
    sheet.querySelector('h3').textContent = g.term;
    sheet.querySelector('p').textContent = g.def;
    sheet.querySelector('.label').textContent = s.name + ' · Words to know';
    sheet.setAttribute('data-g', i);
    sheet.hidden = false;
    sheet.querySelector('.sheet-close').focus();
  }
  function closeTerm() { sheet.hidden = true; }
  sheet.querySelector('.sheet-close').addEventListener('click', closeTerm);
  sheet.querySelector('.sheet-link').addEventListener('click', function () {
    var i = +sheet.getAttribute('data-g'); closeTerm(); TG.go(GLOSS[i].sys, 'gl-' + i);
  });

  document.addEventListener('click', function (e) {
    var term = e.target.closest('.term');
    if (term) { e.preventDefault(); openTerm(+term.getAttribute('data-g')); return; }
    var eqBtn = e.target.closest('.eq-open');
    if (eqBtn && TG.equip) { e.preventDefault(); TG.equip.open(eqBtn.getAttribute('data-eq'), eqBtn); return; }
    var jump = e.target.closest('[data-jump]');
    if (jump) { e.preventDefault(); TG.focusTarget(jump.getAttribute('data-jump')); return; }
    if (!sheet.hidden && !e.target.closest('.sheet')) closeTerm();
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !sheet.hidden) closeTerm(); });

  /* ---------- offline support (only works when hosted as a normal website) ---------- */
  try {
    if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
      navigator.serviceWorker.register('service-worker.js').catch(function () {});
    }
  } catch (e) { /* not available here; the app still works online */ }

  TG.start = function () { if (TG.search) TG.search.init(); route(); };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', TG.start);
  else setTimeout(TG.start, 0);
})();
