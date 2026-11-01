const CACHE = "mini-ai-shell-v1";
const FILES = ["./","./index.html","./css/style.css","./js/app.js","./manifest.webmanifest","./assets/icons/icon-192.png","./assets/icons/icon-512.png","./assets/images/mini-ai-orb.png"];
self.addEventListener("install", e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))));
self.addEventListener("fetch", e => e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request))));
