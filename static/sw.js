importScripts('/mathhelp/bundle.js');
importScripts('/mathhelp/config.js');
importScripts(__uv$config.sw || '/mathhelp/sw.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));