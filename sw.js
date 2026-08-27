const CACHE_NAME = 'kitchen-assistant-v4';
const CACHE_FILES = [
  './',
  './index.html',
  './recipes.js',
  './knowledge.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(CACHE_FILES);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(names => {
      return Promise.all(
        names.filter(n => n !== CACHE_NAME).map(n => caches.delete(n))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  // 只处理 GET；Cache.put 对非 GET 请求会抛 TypeError
  if (event.request.method !== 'GET') return;

  // stale-while-revalidate：命中缓存立即返回，同时后台回源刷新缓存——
  // 内容更新不再依赖人工 bump CACHE_NAME，下次打开自动是新版本
  event.respondWith(
    caches.match(event.request).then(cached => {
      const refresh = fetch(event.request).then(response => {
        if (response && response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => cached);   // 离线时回源失败，静默退回缓存
      return cached || refresh;
    })
  );
});
