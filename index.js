const saludos = ["Hello, world!", "Hola, mundo!", "你好, 世界！"];
var p;
saludos.forEach(SaludosFunc);

function SaludosFunc(value, index, array) {
  p = document.createElement("p");
  p.id = "p" + index;
  p.innerHTML = value;
  document.body.appendChild(p);
}

m = document.createElement("p");
m.id = "pm";
m.innerHTML = "-App development </br> IT support </br> -Language support(English, Spanish)";
//m.innerHTML = "支持我的人! </br> 美食、家居、匠心、健康";
document.body.appendChild(m);

var link = document.createElement("a");
link.href = "https://ko-fi.com/luis239732";
link.innerHTML = "Donation";
link.className =
  "text-uppercase link-success link-opacity-50 link-opacity-50-hover link-offset-3 link-underline-opacity-10 link-underline-opacity-100-hover";

var plink = document.createElement("p");
plink.id = "plink";
document.body.appendChild(plink);
plink.appendChild(link);

function emojiChange(value) {
  if (value) {
    console.log(value);
    document.getElementById("ew").style.visibility = "hidden";
    document.getElementById("eh").style.visibility = "visible";
  } else {
    document.getElementById("ew").style.visibility = "visible";
    document.getElementById("eh").style.visibility = "hidden";
  }
}
emojiChange(false);

link.addEventListener("mouseover", function () {
  emojiChange(true);
});
link.addEventListener("mouseleave", function () {
  emojiChange(false);
});

link.addEventListener("touchmove", function () {
  emojiChange(true);
});

link.addEventListener("touchend", function () {
  emojiChange(false);
});
