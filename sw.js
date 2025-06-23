const CACHE_NAME = 'ceria-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './sounds/a.mp3',
  './sounds/b.mp3',
  './sounds/c.mp3',
  './sounds/1.mp3',
  './sounds/2.mp3',
  './sounds/3.mp3',
  './icon.png',
  './games/color-match.html',
  './stories/cerita1.html',
  './coloring/mewarnai.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});