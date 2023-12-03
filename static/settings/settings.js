function ab() {
  var viewFrame;
  try {
    viewFrame = window !== top;
  } catch (f) {
    viewFrame = !0;
  }
  if (!viewFrame && !navigator.userAgent.includes("Firefox")) {
    let c = open("about:blank", "_blank");
    if (!c || c.closed)
      alert(
        "Allow popups and redirects to hide this from showing up in your history.\nThanks!JMW",
      );
    else {
      let b = c.document,
        d = b.createElement("iframe"),
        a = d.style,
        e = b.createElement("link");
      (b.title = "Classes"),
        (e.rel = "icon"),
        (e.href = "https://ssl.gstatic.com/classroom/favicon.png"),
        (d.src = location.href),
        (a.position = "fixed"),
        (a.top = a.bottom = a.left = a.right = 0),
        (a.border = a.outline = "none"),
        (a.width = a.height = "100%"),
        b.body.appendChild(d),
        location.replace("https://classroom.google.com");
    }
  }
  document.addEventListener("keypress", function (d) {
    if ("Enter" === d.key) {
      let e = document.getElementById("exploit").value,
        f = window.open("about:blank", "_blank"),
        b = f.document,
        c = b.createElement("iframe"),
        a = c.style;
      b.createElement("link"),
        (b.title = "_blank"),
        (c.src = e),
        (a.position = "fixed"),
        (a.border = a.outline = "none"),
        (a.top = a.bottom = a.left = a.right = 0),
        (a.width = a.height = "100%"),
        b.body.appendChild(c);
    }
  });
}
function buffedAB() {
  var myWindow1 = window.open(
    "",
    "myWindow1",
    "scrollbars=1,height=" + screen.availHeight + ",width=" + screen.availWidth,
  );
  myWindow1.document.write(
    '<!DOCTYPE html>\n\
<title>Google</title>\n\
<p><iframe src="' +
      "https://" +
      window.location.host +
      '"frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" height="100%" width="100%">\n\
<script>\n\
alert("");\n\
<\x2fscript>',
  );
  location.replace("https://classroom.google.com");
}
