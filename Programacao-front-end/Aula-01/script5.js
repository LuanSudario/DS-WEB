var C = parseFloat(prompt("insira o capital inicial"))
var i = parseFloat(prompt("a taxa de juros"))
var t = parseFloat(prompt("insira o tempo investido"))
var itrue = i / 100
var M = C * (1+itrue)**t

document.body.innerHTML = M