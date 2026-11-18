/* Tech Guide: search across every section. Runs on the phone, no internet needed. */
(function () {
  'use strict';
  var TG = window.TG;
  var index = [];

  function build() {
    index = [];
    var C = TG.content;
    TG.SYSTEMS.forEach(function (s) {
      var c = C[s.id];
      if (!c) return;
      var add = function (type, title, text, target, boost) {
        index.push({ sys: s, type: type, title: TG.plain(title), text: TG.plain(text), target: target, page: s.id, boost: boost || 0 });
      };
      add('Overview', s.name + ' overview', [c.overview.lead].concat(c.overview.paragraphs).join(' '), s.id + '-overview', 0);
      c.equipment.forEach(function (e) {
        add('Equipment', e.name + ' (' + e.tag + ')', e.what + ' ' + e.where + ' ' + e.check.join('. '), 'eq-' + s.id + '-' + e.id, 1);
      });
      c.guides.forEach(function (g) {
        add('Fix it', g.title, g.symptom + ' ' + g.steps.join(' ') + ' ' + g.stopIf.join('. '), 'g-' + s.id + '-' + g.id, 8);
      });
      c.safety.warnings.forEach(function (w) { add('Safety', w.title, w.text, s.id + '-safety', 1); });
      add('Safety', c.safety.loto.title || 'Lockout / tagout (LOTO)', c.safety.loto.intro + ' ' + c.safety.loto.steps.join(' '), s.id + '-loto', 2);
    });
    TG.GLOSS.forEach(function (g, i) {
      var s = TG.sys(g.sys);
      index.push({ sys: s, type: 'Word', title: g.term, text: g.def + ' ' + g.match.join(' '), target: 'gl-' + i, page: g.sys, boost: 1 });
    });
    var R = window.TG_ROUNDS || {};
    Object.keys(R).forEach(function (sid) {
      R[sid].forEach(function (r, i) {
        index.push({ sys: TG.sys(sid), type: 'Daily rounds', title: r.text, text: r.why, target: 'r-' + sid + '-' + i, page: 'rounds', boost: 0 });
      });
    });
    var BR = window.TG_BRANDS;
    if (BR) {
      BR.list.forEach(function (b) {
        index.push({ sys: TG.sys((b.trades || ['hvac'])[0] === 'electrical' ? 'electrical' : ((b.trades || ['hvac'])[0] === 'plumbing' ? 'plumbing' : 'hvac')), type: 'Brand', title: b.name, text: (b.aka || '') + ' ' + (b.search || '') + ' ' + b.makesText + ' ' + b.phones.map(function (p) { return p.label + ' ' + p.number; }).join(' '), target: 'brand-' + b.id, page: 'brands', boost: 6 });
      });
    }
    var E = window.TG_ESCALATION;
    if (E) {
      E.universal.forEach(function (u, i) {
        index.push({ sys: null, type: 'Stop & call', title: u.title, text: u.text, target: 'esc-u-' + i, page: 'escalate', boost: 2 });
      });
    }
  }

  function tokens(q) { return q.toLowerCase().replace(/[^\w\s/-]/g, ' ').split(/\s+/).filter(function (t) { return t.length > 1 || /\d/.test(t); }); }

  function run(q) {
    var toks = tokens(q);
    if (!toks.length) return [];
    var ql = q.toLowerCase().trim();
    var out = [];
    index.forEach(function (it) {
      var title = it.title.toLowerCase(), text = it.text.toLowerCase();
      var hay = title + ' ' + text;
      for (var i = 0; i < toks.length; i++) if (hay.indexOf(toks[i]) === -1) return;
      var score = it.boost;
      if (title.indexOf(ql) !== -1) score += 10;
      toks.forEach(function (t) { if (title.indexOf(t) !== -1) score += 3; });
      out.push({ it: it, score: score });
    });
    out.sort(function (a, b) { return b.score - a.score; });
    return out.slice(0, 25).map(function (o) { return o.it; });
  }

  function highlight(str, toks) {
    var h = TG.esc(str);
    toks.forEach(function (t) {
      var re = new RegExp('(' + TG.esc(t).replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig');
      h = h.replace(/(<[^>]+>)|([^<]+)/g, function (m, tag, txt) { return tag || txt.replace(re, '<mark>$1</mark>'); });
    });
    return h;
  }

  function snippet(text, toks) {
    var lower = text.toLowerCase(), pos = -1;
    toks.forEach(function (t) { var p = lower.indexOf(t); if (p !== -1 && (pos === -1 || p < pos)) pos = p; });
    if (pos === -1) pos = 0;
    var start = Math.max(0, pos - 40), end = Math.min(text.length, start + 130);
    return (start > 0 ? '…' : '') + text.slice(start, end).trim() + (end < text.length ? '…' : '');
  }

  TG.search = {
    init: function () {
      build();
      var input = document.getElementById('q');
      var panel = document.getElementById('results');
      var clear = document.getElementById('q-clear');
      var current = [];

      function close() { panel.hidden = true; }
      function show() {
        var q = input.value;
        clear.hidden = !q;
        if (!q.trim()) { close(); return; }
        var toks = tokens(q);
        current = run(q);
        var h = '<div class="wrap"><div class="results-head label">' + current.length + (current.length === 1 ? ' match' : ' matches') + '</div>';
        if (!current.length) {
          h += '<p class="empty-results">Nothing found for “' + TG.esc(q) + '”. Try a simpler word, like <strong>leak</strong>, <strong>filter</strong> or <strong>boiler</strong>.</p>';
        } else {
          current.forEach(function (it, i) {
            h += '<button type="button" class="result" data-i="' + i + '" style="--sys:' + (it.sys ? it.sys.color : 'var(--danger)') + '">' +
              '<span class="result-meta label">' + TG.esc(it.sys ? it.sys.name : 'All systems') + ' · ' + TG.esc(it.type) + '</span>' +
              '<span class="result-title">' + highlight(it.title, toks) + '</span>' +
              '<span class="result-snip">' + highlight(snippet(it.text, toks), toks) + '</span></button>';
          });
        }
        panel.innerHTML = h + '</div>';
        panel.hidden = false;
      }

      input.addEventListener('input', show);
      input.addEventListener('focus', function () { if (input.value.trim()) show(); });
      input.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') { input.value = ''; show(); input.blur(); }
        if (e.key === 'Enter' && current.length) { e.preventDefault(); pick(0); }
      });
      clear.addEventListener('click', function () { input.value = ''; show(); input.focus(); });
      panel.addEventListener('click', function (e) {
        var b = e.target.closest('.result'); if (b) pick(+b.getAttribute('data-i'));
      });
      document.addEventListener('click', function (e) {
        if (!e.target.closest('.search') && !e.target.closest('#results') && !e.target.closest('[data-action="search"]')) close();
      });
      document.querySelectorAll('[data-action="search"]').forEach(function (b) {
        b.addEventListener('click', function () { window.scrollTo(0, 0); input.focus(); if (input.value.trim()) show(); });
      });

      function pick(i) {
        var it = current[i]; if (!it) return;
        close(); input.blur();
        TG.go(it.page, it.target);
      }
    }
  };
})();
