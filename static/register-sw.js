"use strict";

/**
 * List of hostnames that are allowed to run serviceworkers on http:
 */
const swAllowedHostnames = ["localhost", "127.0.0.1"];

async function registerSW() {
  console.log("Starting registration...")
  if (
    location.protocol !== "https:" &&
    !swAllowedHostnames.includes(location.hostname)
  )
    throw new Error("Service workers cannot be registered without https.");

  if (!navigator.serviceWorker)
    throw new Error("Your browser doesn't support service workers.");

  await navigator.serviceWorker.register('sw.js', {
    scope: __uv$config.prefix,
  }).then(() => {
    console.log("Registered!")
  })

}

registerSW()
