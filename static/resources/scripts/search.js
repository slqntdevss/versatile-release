const urlParams = new URLSearchParams(window.location.search);
const url = urlParams.get('url');

if (url) {
    document.getElementById('urlhandler').src = "https:/" + window.location.host +  __uv$config.prefix + __uv$config.encodeUrl(search(url));
}