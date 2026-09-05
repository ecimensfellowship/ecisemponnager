// Minimal service worker - exists only to satisfy Chrome's PWA installability
// criteria (a registered service worker is required for the full "Install app"
// prompt, as opposed to a plain "Add to Home screen" bookmark shortcut).
// Deliberately does NOT cache anything: this app needs a live connection to
// Firestore anyway, so offline support would be misleading rather than useful -
// every request is just passed straight through to the network unchanged.

self.addEventListener('install', function(event){
  self.skipWaiting();
});

self.addEventListener('activate', function(event){
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event){
  event.respondWith(fetch(event.request));
});
