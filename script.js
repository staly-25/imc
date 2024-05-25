let nome = prompt("digite seu nome: ")
let peso = Number(prompt("digite seu peso: "))
let altura = Number(prompt("digite sua altura: "))
altura = altura / 100
let imc = peso / (altura * altura);


console.log(nome);

if (imc < 16) {
    console.log("baixo peso muito grave");
} else if (imc > 16 && imc < 16.99) {
    console.log("baixo peso grave");
} else if (imc > 17 && imc < 18.49) {
    console.log("baixo peso");
} else if (imc > 18.50 && imc < 24.99) {
    console.log("peso normal");
} else if (imc > 25 && imc < 29.99) {
    console.log("sobrepeso");
} else if (imc > 30 && imc < 34.99) {
    console.log("obesidade grau 1");
} else if (imc > 35 && imc < 39.99) {
    console.log("obesidade grau 2");
}else{
    console.log("obesidade grau 3");
}



