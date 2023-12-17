const barechosen = "/contactus/"
const barelist = []
barelist[0] = "/contactus/"
barelist[1] = "https://bare2.mysticmath.workers.dev/"

var bRand = 0;
bRand = Math.random();
bRand = Math.floor(bRand * barelist.length);
barechosen = barelist[bRand]

self.__uv$config = {
  prefix: "/versat/",
  bare: barechosen,
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "/mathhelp/handler.js",
  bundle: "/mathhelp/bundle.js",
  config: "/mathhelp/config.js",
  sw: "/mathhelp/sw.js",
};