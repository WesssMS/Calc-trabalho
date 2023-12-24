function mostrar(x) {
  let numero = document.getElementById("tela").innerHTML;
  document.getElementById("tela").innerHTML = numero + x;
}
function virg() {
  let numero = document.getElementById("tela").innerHTML;
  document.getElementById("tela").innerHTML = numero + ".";
}
function raiz() {
  let numero = document.getElementById("tela").innerHTML;
  document.getElementById("tela").innerHTML = Math.sqrt(numero);
}
function c() {
  document.getElementById("tela").innerHTML = "";
}
function soma() {
  let num = document.getElementById("tela").innerHTML;
  document.getElementById("tela").innerHTML = num + "+";
}

function subt() {
  let num = document.getElementById("tela").innerHTML;
  document.getElementById("tela").innerHTML = num + "-";
}

function divi() {
  let num = document.getElementById("tela").innerHTML;
  document.getElementById("tela").innerHTML = num + "/";
}
function mul() {
  let num = document.getElementById("tela").innerHTML;
  document.getElementById("tela").innerHTML = num + "*";
}
function resultado() {
  let x = eval(document.getElementById("tela").innerHTML);
  document.getElementById("tela").innerHTML = x;
}

function factorialize() {
  let num = document.getElementById("tela").innerHTML;
  parseInt(num);
  var value = 1;
  if (num === 1 || num === 0) {
    document.getElementById("tela").innerHTML = value;
  } else {
    for (var i = 1; i < num; i++) {
      value *= i;
    }
    document.getElementById("tela").innerHTML = num * value;
  }
}
