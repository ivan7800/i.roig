const CACHE_NAME = 'i-roig-universo-404-v20-seo-comercial';
const CORE_ASSETS = [
  './',
  './index.html',
  './offline.html',
  './404.html',
  './style.css',
  './script.js',
  './manifest.webmanifest',
  './puerta-404.html',
  './reflejo-404.html',
  './el-criterio-omega.html',
  './el-evangelio-del-nombre-devorado.html',
  './los-hijos-del-mono.html',
  './ecos-de-los-susurros.html',
  './el-verbo-carmesi.html',
  './assets/icons/favicon-32.png',
  './assets/icons/apple-touch-icon.png',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  './assets/icons/icon-maskable-512.png',
  './assets/la-grieta-hero.webp',
  './assets/universo-404-symbol.webp',
  './assets/i-roig-author.webp',
  './assets/puerta-404.webp',
  './assets/reflejo-404.webp',
  './assets/el-criterio-omega.webp',
  './assets/el-evangelio-del-nombre-devorado.webp',
  './assets/los-hijos-del-mono.webp',
  './assets/ecos-de-los-susurros.webp',
  './assets/el-verbo-carmesi.webp',
  './audio/universo404-ambient.ogg',
  './audio/universo404-ambient.mp3'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
      .catch(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  if (event.request.headers.has('range')) return;

  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  const isNavigation = event.request.mode === 'navigate';
  const isFreshCriticalAsset = isNavigation || /\.(html|css|js|webmanifest)$/i.test(url.pathname);

  if (isFreshCriticalAsset) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
          return response;
        })
        .catch(() => caches.match(event.request)
          .then((cached) => cached || caches.match(isNavigation ? './offline.html' : './index.html')))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        }
        return response;
      }).catch(() => {
        if (isNavigation) return caches.match('./offline.html');
        return Promise.reject(new Error('Recurso no disponible en caché'));
      });
    })
  );
});
