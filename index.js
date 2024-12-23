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
//m.innerHTML = "我想要食物、房子和汽车。\n你能帮助我吗？";
document.body.appendChild(m);

var link = document.createElement("a");
link.href = "https://ko-fi.com/luis239732";
link.innerHTML = "Donation";
document.body.appendChild(link);
