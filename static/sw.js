importScripts("mathhelp/bundle.js");
importScripts("mathhelp/config.js");
importScripts("mathhelp/sw.js");

const sw = new UVServiceWorker();
let userKey = new URL(location).searchParams.get('userkey');

self.addEventListener("fetch", (event) => event.respondWith(sw.fetch(event)));