
self.__uv$config = {
  prefix: "/versat/",
  bare: "https://bare2.mysticmath.workers.dev/",
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "/mathhelp/handler.js",
  bundle: "/mathhelp/bundle.js",
  config: "/mathhelp/config.js",
  sw: "/mathhelp/sw.js",
};