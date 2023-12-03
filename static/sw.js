importScripts("./uv/uv.bundle.js");
importScripts("./uv/uv.config.js");
importScripts("./uv/uv.sw.js");

const UV = new UVServiceWorker();

self.addEventListener("fetch", (event) => {
  if (event.request.url.startsWith(location.origin + "/uv/service/"))
    event.respondWith(UV.fetch(event));
});