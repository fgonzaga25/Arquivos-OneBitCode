alert("Calculadora de 4 operações.")

let primeiroValor = parseFloat(prompt("Insira o primeiro número:"))

let segundoValor = parseFloat(prompt("Insira aqui o segundo número:"))

const soma = segundoValor + segundoValor
const subtracao = primeiroValor - segundoValor
const multiplicacao = primeiroValor * segundoValor
const divisao = primeiroValor / segundoValor

alert("Os números digitados foram: " + primeiroValor + " e " + segundoValor + "\n\n"
    + "Soma: " + primeiroValor + " + " + segundoValor + " = " + soma + "\n\n"
    + "Subtração: " + primeiroValor + " - " + segundoValor + " = " + subtracao + "\n\n"
    + "Multiplicação: " + primeiroValor + " * " + segundoValor + " = " + multiplicacao + "\n\n"
    + "Divisão: " + primeiroValor + " / " + segundoValor + " = " + divisao
    )