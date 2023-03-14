/* eslint-disable no-restricted-globals */
const CACHE_NAME = 'Shrikant Mergu';
const urlsToCache = [
  '/',
  '/assets/**.*',
'/switcher/**.*',
'/dependencies/**.*'
];

// Install a service worker
self.addEventListener('install', (event) => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});

// Cache and return requests
self.addEventListener('fetch', function(event) {});

// Update a service worker
self.addEventListener('activate', (event) => {
  var cacheWhitelist = ['Shrikant Mergu'];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        // eslint-disable-next-line array-callback-return
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
