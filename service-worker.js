/* Saves the app on the phone so it works with no signal.
   When you change any file, bump VERSION so phones pick up the new copy. */
var VERSION = 'tech-guide-v2';
var FILES = [
  './', './index.html', './manifest.json',
  './css/styles.css',
  './js/app.js', './js/search.js', './js/checklist.js',
  './content/hvac.js', './content/plumbing.js', './content/electrical.js', './content/fire-life-safety.js',
  './content/daily-rounds.js', './content/escalation.js',
  './icons/icon.svg', './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png'
];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(VERSION).then(function (c) { return c.addAll(FILES); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

// Try the network first so updates show up; fall back to the saved copy when offline.
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request).then(function (res) {
      var copy = res.clone();
      if (res.ok) caches.open(VERSION).then(function (c) { c.put(e.request, copy); });
      return res;
    }).catch(function () {
      return caches.match(e.request, { ignoreSearch: true }).then(function (hit) { return hit || caches.match('./index.html'); });
    })
  );
});
