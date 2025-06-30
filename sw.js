const CACHE_NAME = 'ceria-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './icon.png',

  // Angka dan Huruf
  './sounds/a.mp3',
  './sounds/b.mp3',
  './sounds/c.mp3',
  './sounds/1.mp3',
  './sounds/2.mp3',
  './sounds/3.mp3',


  './games/color-match.html',
  './coloring/mewarnai.html',

  // Cerita
  './stories/cerita1.html',
  './stories/cerita2.html', 
  './stories/cerita3.html',
  './images/kancil-buaya1.png',
  './images/kancil-buaya2.png',
  './images/kancil-buaya3.png',


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