const browser = localStorage.getItem("browser");
const form = document.querySelector("form");
const input = document.querySelector("input");

if(browser == null) {
  localStorage.setItem("browser", "https://duckduckgo.com/?q=")
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  window.navigator.serviceWorker
    .register("/sw.js", {
      scope: __uv$config.prefix,
    })
    .then(() => {
      let url = input.value.trim();
      if (!isUrl(url)) url = browser + url;
      else if (!(url.startsWith("https://") || url.startsWith("http://")))
        url = "http://" + url;
      sessionStorage.setItem("url", __uv$config.encodeUrl(url));
      console.log(sessionStorage.getItem("url"));
      location.href = "/go";
    });
});
function isUrl(val = ''){
  if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
  return false;
};