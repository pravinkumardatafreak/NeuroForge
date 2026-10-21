/* ═══════════════════════════════════════════════════════════════════
   NeuroForge Academy — Service Worker (sw.js)
   Fault-Tolerant Precache + Offline Support + Network-First Updates
   Works on both root domains and GitHub Pages subpaths (/NeuroForge/)
═══════════════════════════════════════════════════════════════════ */

const CACHE_VERSION = 'neuroforge-v2026.10.26';
const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './manifest.webmanifest',
  './css/style.css',
  './js/animations.js',
  './js/quiz.js',
  './js/zoho.js',
  './js/corridor_a.js',
  './js/corridor_b.js',
  './js/accelerator.js',
  './js/presentations.js',
  './js/mentor.js',
  './js/voice_evaluator.js',
  './js/app.js',
  './assets/icon.svg',
  './assets/pwa-192x192.png',
  './assets/pwa-512x512.png',
  './assets/pwa-maskable-512x512.png',
  './assets/apple-touch-icon.png',
  './assets/mentor_tfidf.png',
  './assets/mentor_lstm.png',
  './assets/mentor_attention.png',
  './assets/mentor_cnn.png'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_VERSION).then(async cache => {
      // Use allSettled so a single missing/redirected file never blocks SW installation on GitHub Pages
      await Promise.allSettled(
        CORE_ASSETS.map(url =>
          fetch(url, { cache: 'reload' }).then(res => {
            if (res && res.ok) return cache.put(url, res);
          })
        )
      );
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key.startsWith('neuroforge-') && key !== CACHE_VERSION)
          .map(oldKey => caches.delete(oldKey))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', event => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Cache Google Fonts
  if (url.origin === 'https://fonts.googleapis.com' || url.origin === 'https://fonts.gstatic.com') {
    event.respondWith(
      caches.open(CACHE_VERSION).then(async cache => {
        const cached = await cache.match(request);
        if (cached) return cached;
        try {
          const response = await fetch(request);
          if (response && (response.status === 200 || response.type === 'opaque')) {
            cache.put(request, response.clone());
          }
          return response;
        } catch (err) {
          return cached || Response.error();
        }
      })
    );
    return;
  }

  if (url.origin !== self.location.origin) return;

  const isCodeOrMarkup =
    request.mode === 'navigate' ||
    url.pathname.endsWith('.html') ||
    url.pathname.endsWith('.js') ||
    url.pathname.endsWith('.css') ||
    url.pathname.endsWith('.json') ||
    url.pathname.endsWith('.webmanifest');

  if (isCodeOrMarkup) {
    event.respondWith(
      fetch(request)
        .then(response => {
          if (response && response.status === 200) {
            const copy = response.clone();
            caches.open(CACHE_VERSION).then(cache => cache.put(request, copy));
          }
          return response;
        })
        .catch(async () => {
          const cache = await caches.open(CACHE_VERSION);
          const exactMatch = await cache.match(request, { ignoreSearch: true });
          if (exactMatch) return exactMatch;
          if (request.mode === 'navigate') {
            return (await cache.match('./index.html')) || (await cache.match('./'));
          }
          return Response.error();
        })
    );
    return;
  }

  event.respondWith(
    caches.open(CACHE_VERSION).then(async cache => {
      const cached = await cache.match(request, { ignoreSearch: true });
      const networkFetch = fetch(request)
        .then(response => {
          if (response && response.status === 200) {
            cache.put(request, response.clone());
          }
          return response;
        })
        .catch(() => cached);
      return cached || networkFetch;
    })
  );
});
