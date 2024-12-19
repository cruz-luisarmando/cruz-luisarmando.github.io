const saludos = ["Hello, world!", "Hola, mundo!", "你好, 世界！"];
var p;
saludos.forEach(SaludosFunc);

function SaludosFunc(value, index, array) {
  p = document.createElement("p");
  p.id = "p" + index;
  p.innerHTML = value;
  document.body.appendChild(p);
}
var link = document.createElement("a");
link.href = "https://ko-fi.com/luis239732";
link.innerHTML = "Donation";
document.body.appendChild(link);
