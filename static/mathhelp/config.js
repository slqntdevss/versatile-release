
if(localStorage.getItem("bare") == null) {
  localStorage.setItem("bare", "/contactus/")
}

self.__uv$config = {
  prefix: "/versat/",
  bare: "/contactus/",
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "/mathhelp/handler.js",
  bundle: "/mathhelp/bundle.js",
  config: "/mathhelp/config.js",
  sw: "/mathhelp/sw.js",
};