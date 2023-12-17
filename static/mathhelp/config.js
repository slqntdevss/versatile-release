self.__uv$config = {
  prefix: "/versat/",
  bare: "/bare/",
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "/mathhelp/handler.js",
  client: "/mathhelp/client.js",
  bundle: "/mathhelp/bundle.js",
  config: "/mathhelp/config.js",
  sw: "/mathhelp/sw.js",
};