/* Tech Guide: brand directory page (#brands) and "Call the maker" lists in equipment panels. */
(function () {
  'use strict';
  var TG = window.TG;
  var DATA = window.TG_BRANDS || { list: [], beforeYouCall: [] };
  var MAN = (window.TG_MANUALS && window.TG_MANUALS.libraries) || {};
  var BRANDS = DATA.list.slice().sort(function (a, b) { return a.name.localeCompare(b.name); });

  BRANDS.forEach(function (b) { if (!b.trades) b.trades = ['hvac']; });

  // Trade tabs, each with its own equipment chips.
  var TRADES = [
    { id: 'all', label: 'All trades', color: 'var(--fg)', chips: [] },
    { id: 'hvac', label: 'HVAC', color: 'var(--c-hvac)', chips: [
      { id: 'rtu', label: 'Rooftop units', keys: ['hvac/rtu'] },
      { id: 'chiller', label: 'Chillers', keys: ['hvac/chiller'] },
      { id: 'ahu', label: 'Air handlers', keys: ['hvac/ahu'] },
      { id: 'split', label: 'Ductless & splits', keys: ['hvac/split'] },
      { id: 'boiler', label: 'Boilers & pumps', keys: ['hvac/boiler', 'hvac/pump'] },
      { id: 'heat', label: 'Unit heaters', text: /unit heater|makeup air/i },
      { id: 'fans', label: 'Fans', keys: ['hvac/exhaust'] }] },
    { id: 'plumbing', label: 'Plumbing', color: 'var(--c-plumb)', chips: [
      { id: 'wh', label: 'Water heaters', keys: ['plumbing/wh'] },
      { id: 'valves', label: 'Backflow & valves', keys: ['plumbing/backflow', 'plumbing/prv', 'plumbing/mix'] },
      { id: 'flush', label: 'Flush valves', keys: ['plumbing/flush'] },
      { id: 'sump', label: 'Sump & sewage pumps', keys: ['plumbing/sump', 'plumbing/ejector'] },
      { id: 'booster', label: 'Booster pumps', keys: ['plumbing/booster'] }] },
    { id: 'electrical', label: 'Electrical', color: 'var(--c-elec)', chips: [
      { id: 'panels', label: 'Panels & breakers', keys: ['electrical/panel', 'electrical/breaker', 'electrical/gear', 'electrical/disc'] },
      { id: 'vfd', label: 'Drives (VFD)', keys: ['electrical/vfd'] },
      { id: 'gen', label: 'Generators & ATS', keys: ['electrical/gen', 'electrical/ats'] },
      { id: 'ups', label: 'UPS', keys: ['electrical/ups'] },
      { id: 'devices', label: 'Outlets & lighting', keys: ['electrical/gfci', 'electrical/lighting'] }] }
  ];
  var TRADE_COLOR = { hvac: 'var(--c-hvac)', plumbing: 'var(--c-plumb)', electrical: 'var(--c-elec)' };

  function digits(n) { return n.replace(/[^0-9]/g, ''); }
  function telHref(n) { var d = digits(n); return 'tel:+' + (d.length === 10 ? '1' + d : d); }

  function phoneRow(p) {
    return '<li class="ph">' +
      '<div class="ph-main"><span class="ph-label">' + TG.esc(p.label) + '</span>' +
      '<a class="ph-num" href="' + telHref(p.number) + '">' + TG.esc(p.number) + '</a></div>' +
      '<button type="button" class="ph-copy" data-copy="' + TG.esc(p.number) + '" aria-label="Copy ' + TG.esc(p.number) + '">Copy</button>' +
      ((p.hours || p.email || p.note) ? '<div class="ph-meta">' +
        (p.hours ? '<span>' + TG.esc(p.hours) + '</span>' : '') +
        (p.email ? '<span class="mono">' + TG.esc(p.email) + '</span>' : '') +
        (p.note ? '<span class="ph-note">' + TG.esc(p.note) + '</span>' : '') + '</div>' : '') +
      '</li>';
  }

  function brandCard(b) {
    var lib = b.manuals && MAN[b.manuals];
    return '<article class="brand-card" id="brand-' + b.id + '" data-brand="' + b.id + '" style="--trade:' + TRADE_COLOR[b.trades[0]] + '">' +
      '<header class="brand-head"><h3>' + TG.esc(b.name) + '</h3>' +
      (b.aka ? '<p class="brand-aka">' + TG.esc(b.aka) + '</p>' : '') +
      '<p class="brand-makes">' + TG.esc(b.makesText) + '</p>' +
      '<p class="brand-trades">' + b.trades.map(function (t) { return '<span style="--trade:' + TRADE_COLOR[t] + '">' + TG.esc(t === 'hvac' ? 'HVAC' : t[0].toUpperCase() + t.slice(1)) + '</span>'; }).join('') + '</p></header>' +
      '<ul class="phones">' + b.phones.map(phoneRow).join('') + '</ul>' +
      (b.note ? '<p class="eq-note">' + TG.esc(b.note) + '</p>' : '') +
      '<div class="brand-links">' +
        '<a class="btn ghost sm" href="' + TG.esc(b.website) + '" target="_blank" rel="noopener">Support website ↗</a>' +
        (lib ? '<a class="btn ghost sm" href="' + TG.esc(lib.url) + '" target="_blank" rel="noopener">Manuals ↗</a>' : '') +
      '</div></article>';
  }

  function matches(b, trade, f, q) {
    if (trade !== 'all' && b.trades.indexOf(trade) === -1) return false;
    if (f && f.keys && !f.keys.some(function (k) { return b.makes.indexOf(k) !== -1; })) return false;
    if (f && f.text && !f.text.test(b.makesText)) return false;
    if (q) {
      var hay = (b.name + ' ' + (b.aka || '') + ' ' + (b.search || '') + ' ' + b.makesText).toLowerCase();
      return q.toLowerCase().split(/\s+/).filter(Boolean).every(function (t) { return hay.indexOf(t) !== -1; });
    }
    return true;
  }

  function render() {
    var h = '<section class="wrap" style="padding-block:22px 0;--sys:var(--c-hvac)">' +
      '<a class="back" href="#home">' + TG.icon('back') + 'Home</a>' +
      '<h1 class="page-title">Brands</h1>' +
      '<p class="hero-sub">Read the brand off the nameplate, then find it here. ' + BRANDS.length + ' makers.</p>' +
      '<div class="callfirst"><span class="label">Before you call</span><ol class="spot">' +
        DATA.beforeYouCall.map(function (s) { return '<li><span>' + TG.fmt(s, null) + '</span></li>'; }).join('') + '</ol></div>' +
      '<div class="brand-tools">' +
        '<label class="label" for="brand-q">Find a brand</label>' +
        '<input id="brand-q" class="brand-q" type="search" placeholder="Brand or old name, like McQuay" autocomplete="off">' +
        '<div class="trade-tabs" role="group" aria-label="Trade">' +
          TRADES.map(function (t, i) { return '<button type="button" class="ttab" data-t="' + t.id + '" style="--trade:' + t.color + '" aria-pressed="' + (i === 0) + '">' + TG.esc(t.label) + '</button>'; }).join('') +
        '</div>' +
        '<div class="chips" id="brand-chips" role="group" aria-label="Filter by equipment"></div></div>' +
      '<p class="label brand-count" id="brand-count" aria-live="polite"></p>' +
      '<div class="brands" id="brand-list">' + BRANDS.map(brandCard).join('') + '</div>' +
      '<p class="empty-results" id="brand-empty" hidden>No brand matches. Try the name on the nameplate, or the parent company.</p>' +
      '<p class="disclaimer">Numbers and links were checked on ' + TG.esc(DATA.checked) + ' and can change. Many factory lines only help licensed or trained technicians. Where sources disagreed or a listing looked old, the entry says so.</p>' +
      '</section>';
    return h;
  }

  function bind() {
    var q = document.getElementById('brand-q'), trade = 'all', current = null;
    var chipBox = document.getElementById('brand-chips');
    function drawChips() {
      var t = TRADES.filter(function (x) { return x.id === trade; })[0];
      chipBox.hidden = !t.chips.length;
      chipBox.innerHTML = t.chips.length ? '<button type="button" class="fchip" data-f="" aria-pressed="true">All ' + TG.esc(t.label) + '</button>' +
        t.chips.map(function (c) { return '<button type="button" class="fchip" data-f="' + c.id + '" aria-pressed="false">' + TG.esc(c.label) + '</button>'; }).join('') : '';
    }
    function apply() {
      var n = 0;
      BRANDS.forEach(function (b) {
        var el = document.getElementById('brand-' + b.id), ok = matches(b, trade, current, q.value.trim());
        el.hidden = !ok; if (ok) n++;
      });
      document.getElementById('brand-count').textContent = n + (n === 1 ? ' brand' : ' brands');
      document.getElementById('brand-empty').hidden = n > 0;
    }
    q.addEventListener('input', apply);
    document.querySelectorAll('.ttab').forEach(function (tb) {
      tb.addEventListener('click', function () {
        document.querySelectorAll('.ttab').forEach(function (x) { x.setAttribute('aria-pressed', x === tb ? 'true' : 'false'); });
        trade = tb.getAttribute('data-t'); current = null; drawChips(); apply();
      });
    });
    chipBox.addEventListener('click', function (e) {
      var c = e.target.closest('.fchip'); if (!c) return;
      chipBox.querySelectorAll('.fchip').forEach(function (x) { x.setAttribute('aria-pressed', x === c ? 'true' : 'false'); });
      var t = TRADES.filter(function (x) { return x.id === trade; })[0];
      current = t.chips.filter(function (f) { return f.id === c.getAttribute('data-f'); })[0] || null;
      apply();
    });
    drawChips(); apply();
  }

  // For equipment panels: brands that make this equipment, with their first number.
  function forEquip(key) {
    var list = BRANDS.filter(function (b) { return b.makes.indexOf(key) !== -1; });
    if (!list.length) return '';
    return '<section class="eq-sec"><h3>Call the maker</h3><ul class="mini-brands">' + list.map(function (b) {
      var p = b.phones[0];
      return '<li><button type="button" class="mini-brand" data-go-brand="' + b.id + '"><strong>' + TG.esc(b.name) + '</strong><span>' + TG.esc(p.label) + '</span></button>' +
        '<a class="ph-num" href="' + telHref(p.number) + '">' + TG.esc(p.number) + '</a></li>';
    }).join('') + '</ul><p class="eq-note">Tap a brand for all its numbers, hours and websites.</p></section>';
  }

  // Copy buttons and "open brand" links work anywhere in the app.
  document.addEventListener('click', function (e) {
    var c = e.target.closest('.ph-copy');
    if (c) {
      var num = c.getAttribute('data-copy');
      var done = function () { TG.toast('Copied ' + num); };
      try { navigator.clipboard.writeText(num).then(done, function () { TG.toast(num); }); } catch (err) { TG.toast(num); }
      return;
    }
    var g = e.target.closest('[data-go-brand]');
    if (g) { if (TG.equip) TG.equip.close(); TG.go('brands', 'brand-' + g.getAttribute('data-go-brand')); }
  });

  TG.brands = { render: render, bind: bind, forEquip: forEquip, list: BRANDS };
})();
