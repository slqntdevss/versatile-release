const gamesList = [
  {
    name: "Roblox",
    imgSrc: "/gfiles/img/roblox.png",
    href: "/gfiles/gfiles.html?file=a-dance-of-fire-and-ice&type=3kh0",
  },
  {
    name: "Stumble Guys",
    imgSrc: "/gfiles/img/adofai.png",
    href: "/gfiles/gfiles.html?file=roblox&type=local",
  },
  {
    name: "COD",
    imgSrc: "/gfiles/img/adofai.png",
    href: "/gfiles/gfiles.html?file=a-dance-of-fire-and-ice&type=3kh0",
  },
  {
    name: "1v1.lol",
    imgSrc: "/gfiles/img/adofai.png",
    href: "/gfiles/gfiles.html?file=a-dance-of-fire-and-ice&type=3kh0",
  },
  {
    name: "Minecraft 1.8.8",
    imgSrc: "/gfiles/img/adofai.png",
    href: "/gfiles/gfiles.html?file=a-dance-of-fire-and-ice&type=3kh0",
  },
  {
    name: "Minecraft 1.5.2",
    imgSrc: "/gfiles/img/adofai.png",
    href: "/gfiles/gfiles.html?file=a-dance-of-fire-and-ice&type=3kh0",
  },
  {
    name: "Moto X3M",
    imgSrc: "/gfiles/img/adofai.png",
    href: "/gfiles/gfiles.html?file=a-dance-of-fire-and-ice&type=3kh0",
  },

  {
    name: "ADOFAI",
    imgSrc: "/gfiles/img/adofai.png",
    href: "/gfiles/gfiles.html?file=a-dance-of-fire-and-ice&type=3kh0",
  },
  {
    name: "ADOFAI",
    imgSrc: "/gfiles/img/adofai.png",
    href: "/gfiles/gfiles.html?file=a-dance-of-fire-and-ice&type=3kh0",
  },
];

let e = document.getElementById("app-container");
gamesList.forEach((t) => {
  let a = document.createElement("a");
  (a.href = t.href), a.classList.add("apps-card");
  let n = document.createElement("div");
  n.classList.add("content");
  let l = document.createElement("p");
  l.classList.add("title"),
    (l.textContent = t.name),
    n.appendChild(l),
    a.appendChild(n);
  let d = document.createElement("img");
  (d.src = t.imgSrc), a.appendChild(d), e.appendChild(a);
});
