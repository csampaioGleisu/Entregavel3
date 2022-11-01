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
function soma(a, b) {
  return a + b;
}
app.post("/soma", (req, res) => {
  const { a, b } = req.body;
  const resultado = soma(a, b);
  res.send(`O resultado da soma de ${a} e ${b} é ${resultado}`);
});

function subtrair(a, b) {
  return a - b;
}

app.post("/sub", (req, res) => {
  const { a, b } = req.body;
  const resultado = subtrair(a, b);
  res.send(`O resultado da subtração de ${a} e ${b} é ${resultado}`);
});

function divisao(a, b) {
  return a / b;
}
app.post("/divisao", (req, res) => {
  const { a, b } = req.body;
  const resultado = divisao(a, b);
  res.send(`O resultado da divisão de ${a} e ${b} é ${resultado}`);
});

function multiplicar(a, b) {
  return a * b;
}

app.post("/mult", (req, res) => {
  const { a, b } = req.body;
  const resultado = multiplicar(a, b);
  res.send(`O resultado da multiplicação de ${a} e ${b} é ${resultado}`);
});
