/* Tech Guide: brand directory page (#brands) and "Call the maker" lists in equipment panels. */
(function () {
  'use strict';
  var TG = window.TG;
  var DATA = window.TG_BRANDS || { list: [], beforeYouCall: [] };
  var MAN = (window.TG_MANUALS && window.TG_MANUALS.libraries) || {};
  var BRANDS = DATA.list.slice().sort(function (a, b) { return a.name.localeCompare(b.name); });

  var FILTERS = [
    { id: 'all', label: 'All', keys: null },
    { id: 'rtu', label: 'Rooftop units', keys: ['hvac/rtu'] },
    { id: 'chiller', label: 'Chillers', keys: ['hvac/chiller'] },
    { id: 'ahu', label: 'Air handlers', keys: ['hvac/ahu'] },
    { id: 'split', label: 'Ductless & splits', keys: ['hvac/split'] },
    { id: 'heat', label: 'Unit heaters', text: /unit heater|makeup air/i },
    { id: 'fans', label: 'Fans', keys: ['hvac/exhaust'] }
  ];

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
    return '<article class="brand-card" id="brand-' + b.id + '" data-brand="' + b.id + '">' +
      '<header class="brand-head"><h3>' + TG.esc(b.name) + '</h3>' +
      (b.aka ? '<p class="brand-aka">' + TG.esc(b.aka) + '</p>' : '') +
      '<p class="brand-makes">' + TG.esc(b.makesText) + '</p></header>' +
      '<ul class="phones">' + b.phones.map(phoneRow).join('') + '</ul>' +
      (b.note ? '<p class="eq-note">' + TG.esc(b.note) + '</p>' : '') +
      '<div class="brand-links">' +
        '<a class="btn ghost sm" href="' + TG.esc(b.website) + '" target="_blank" rel="noopener">Support website ↗</a>' +
        (lib ? '<a class="btn ghost sm" href="' + TG.esc(lib.url) + '" target="_blank" rel="noopener">Manuals ↗</a>' : '') +
      '</div></article>';
  }

  function matches(b, f, q) {
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
      '<p class="hero-sub">Read the brand off the nameplate, then find it here.</p>' +
      '<div class="callfirst"><span class="label">Before you call</span><ol class="spot">' +
        DATA.beforeYouCall.map(function (s) { return '<li><span>' + TG.fmt(s, null) + '</span></li>'; }).join('') + '</ol></div>' +
      '<div class="brand-tools">' +
        '<label class="label" for="brand-q">Find a brand</label>' +
        '<input id="brand-q" class="brand-q" type="search" placeholder="Brand or old name, like McQuay" autocomplete="off">' +
        '<div class="chips" role="group" aria-label="Filter by equipment">' +
          FILTERS.map(function (f, i) { return '<button type="button" class="fchip" data-f="' + f.id + '" aria-pressed="' + (i === 0) + '">' + TG.esc(f.label) + '</button>'; }).join('') +
        '</div></div>' +
      '<p class="label brand-count" id="brand-count" aria-live="polite"></p>' +
      '<div class="brands" id="brand-list">' + BRANDS.map(brandCard).join('') + '</div>' +
      '<p class="empty-results" id="brand-empty" hidden>No brand matches. Try the name on the nameplate, or the parent company.</p>' +
      '<p class="disclaimer">Numbers and links were checked on ' + TG.esc(DATA.checked) + ' and can change. Many factory lines only help licensed or trained technicians. Where sources disagreed or a listing looked old, the entry says so.</p>' +
      '</section>';
    return h;
  }

  function bind() {
    var q = document.getElementById('brand-q'), current = FILTERS[0];
    function apply() {
      var n = 0;
      BRANDS.forEach(function (b) {
        var el = document.getElementById('brand-' + b.id), ok = matches(b, current, q.value.trim());
        el.hidden = !ok; if (ok) n++;
      });
      document.getElementById('brand-count').textContent = n + (n === 1 ? ' brand' : ' brands');
      document.getElementById('brand-empty').hidden = n > 0;
    }
    q.addEventListener('input', apply);
    document.querySelectorAll('.fchip').forEach(function (c) {
      c.addEventListener('click', function () {
        document.querySelectorAll('.fchip').forEach(function (x) { x.setAttribute('aria-pressed', x === c ? 'true' : 'false'); });
        current = FILTERS.filter(function (f) { return f.id === c.getAttribute('data-f'); })[0];
        apply();
      });
    });
    apply();
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
