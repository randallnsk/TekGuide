/* Tech Guide: daily rounds checklist. Progress is saved only on this phone and resets each day. */
(function () {
  'use strict';
  var TG = window.TG;

  function todayKey() {
    var d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }
  function storeKey() { return 'tg-rounds-' + todayKey(); }
  function load() { return TG.store.get(storeKey()) || { checked: {}, notes: '' }; }
  function save(st) { TG.store.set(storeKey(), st); }
  // In-memory copy, so the checklist still works where phone storage is blocked.
  var state = null;
  function getState() { if (!state || state.day !== todayKey()) { state = load(); state.day = todayKey(); } return state; }

  function groups() {
    var R = window.TG_ROUNDS || {};
    return TG.SYSTEMS.filter(function (s) { return R[s.id] && R[s.id].length; }).map(function (s) {
      return { sys: s, items: R[s.id].map(function (r, i) { return { id: 'r-' + s.id + '-' + i, text: r.text, why: r.why }; }) };
    });
  }

  function progress() {
    var st = getState(), total = 0, done = 0;
    groups().forEach(function (g) { g.items.forEach(function (it) { total++; if (st.checked[it.id]) done++; }); });
    return { done: done, total: total };
  }

  function dateLabel() {
    return new Date().toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' });
  }

  function render() {
    var st = getState(), p = progress();
    var h = '<section class="wrap" style="padding-block:22px 0">' +
      '<a class="back" href="#home">' + TG.icon('back') + 'Home</a>' +
      '<h1 class="page-title">Daily rounds</h1>' +
      '<div class="rounds-meter"><div class="plate" role="group" aria-label="Progress">' +
        '<div><div class="label">' + TG.esc(dateLabel()) + '</div><div class="plate-title">Checked today</div></div>' +
        '<div class="plate-count" id="rounds-count">' + p.done + '/' + p.total + '</div>' +
        '<div class="plate-bar"><i id="rounds-bar" style="width:' + (p.total ? p.done / p.total * 100 : 0) + '%"></i></div>' +
      '</div></div>';
    groups().forEach(function (g) {
      h += '<div class="group" style="--sys:' + g.sys.color + '"><div class="group-head"><span class="dot"></span><h2>' + TG.esc(g.sys.name) + '</h2></div><div class="checks">';
      g.items.forEach(function (it) {
        h += '<label class="check" id="' + it.id + '"><input type="checkbox" id="cb-' + it.id + '" data-id="' + it.id + '"' + (st.checked[it.id] ? ' checked' : '') + '>' +
          '<span class="check-text"><span>' + TG.esc(it.text) + '</span><span class="check-why">' + TG.esc(it.why) + '</span></span></label>';
      });
      h += '</div></div>';
    });
    h += '<p class="note">Skip items that do not apply to your building or season.</p>';
    h += '<div class="notes"><label class="label" for="rounds-notes">Notes for today</label>' +
      '<textarea id="rounds-notes" placeholder="Example: AHU-2 belt squealing, told supervisor at 9:40">' + TG.esc(st.notes || '') + '</textarea></div>';
    h += '<div class="rounds-actions"><button type="button" class="btn" id="rounds-copy">Copy summary</button>' +
      '<button type="button" class="btn ghost" id="rounds-reset">Clear today</button></div>' +
      '<div id="copy-fallback"></div>';
    h += '<p class="disclaimer">Your checklist and notes are saved only on this device and start fresh each day. Nothing is sent anywhere.</p></section>';
    return h;
  }

  function summary() {
    var st = getState(), lines = ['Daily rounds - ' + dateLabel()];
    groups().forEach(function (g) {
      lines.push('', g.sys.name.toUpperCase());
      g.items.forEach(function (it) { lines.push((st.checked[it.id] ? '[x] ' : '[ ] ') + it.text); });
    });
    if (st.notes && st.notes.trim()) lines.push('', 'NOTES', st.notes.trim());
    var p = progress();
    lines.push('', p.done + ' of ' + p.total + ' checked');
    return lines.join('\n');
  }

  function updateMeter() {
    var p = progress();
    var c = document.getElementById('rounds-count'), b = document.getElementById('rounds-bar');
    if (c) c.textContent = p.done + '/' + p.total;
    if (b) b.style.width = (p.total ? p.done / p.total * 100 : 0) + '%';
  }

  function bind() {
    var st = getState();
    document.querySelectorAll('.check input').forEach(function (cb) {
      cb.addEventListener('change', function () {
        st.checked[cb.getAttribute('data-id')] = cb.checked;
        save(st); updateMeter();
      });
    });
    var notes = document.getElementById('rounds-notes');
    notes.addEventListener('input', function () { st.notes = notes.value; save(st); });

    document.getElementById('rounds-copy').addEventListener('click', function () {
      var text = summary();
      var fallback = function () {
        var box = document.getElementById('copy-fallback');
        box.innerHTML = '<div class="copy-fallback"><label class="label" for="copy-text">Copy this text</label><textarea id="copy-text" readonly></textarea></div>';
        var ta = document.getElementById('copy-text'); ta.value = text; ta.focus(); ta.select();
      };
      try {
        navigator.clipboard.writeText(text).then(function () { TG.toast('Summary copied'); }, fallback);
      } catch (e) { fallback(); }
    });

    var reset = document.getElementById('rounds-reset'), armed = null;
    reset.addEventListener('click', function () {
      if (!armed) {
        reset.textContent = 'Tap again to clear'; reset.classList.add('warn-confirm');
        armed = setTimeout(function () { armed = null; reset.textContent = 'Clear today'; reset.classList.remove('warn-confirm'); }, 3000);
        return;
      }
      clearTimeout(armed); armed = null;
      state = { checked: {}, notes: '', day: todayKey() }; save(state);
      document.getElementById('view').innerHTML = render(); bind();
      TG.toast('Today\'s checklist cleared');
    });
  }

  TG.rounds = { render: render, bind: bind, progress: progress };
})();
