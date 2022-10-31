var express = require("express");
var app = express();
var bodbParser = require("bodb-parser");
app.use(bodbParser.json());

app.get("/", function (req, res) {
  res.send("Oi, mundo :-)");
});

var port = 3001;

// iniciando o processo do servidor
app.listen(port, function () {
  console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});
function somar(a, b) {
  return a + b;
}
app.post("/soma", function (req, res) {
  var body = req.body;
  var resultado = somar(body.a, body.b);

  res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado}`);
});

function subtrair(a, b) {
  return a - b;
}

app.post("/sub", function (req, res) {
  var body = req.body;
  var resultado = subtrair(body.a, body.b);

  res.send(`O resultado da subtração de ${body.a} e ${body.b} é ${resultado}`);
});

function dividir(a, b) {
  return a / b;
}
app.post("/div", function (req, res) {
  var body = req.body;
  var resultado = dividir(body.a, body.b);

  res.send(`O resultado da divisão de ${body.a} e ${body.b} é ${resultado}`);
});

function multiplicar(a, b) {
  return a * b;
}

app.post("/multi", function (req, res) {
  var body = req.body;
  var resultado = multiplicar(body.a, body.b);

  res.send(
    `O resultado da multiplicação de ${body.a} e ${body.b} é ${resultado}`
  );
});
