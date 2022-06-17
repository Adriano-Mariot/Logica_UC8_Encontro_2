// Faça um programa que receba o nome, o peso e a altura de uma pessoa. 
// Calcule e imprima o nome e o IMC dessa pessoa - IMC = peso / (altura * altura).
// tabela do Imc
// Abaixo de 17 -------- Muito abaixo do peso
// Entre 17 e 18,49	---- Abaixo do peso
// Entre 18,50 e 24,99 - Peso normal
// Entre 25 e 29,99	---- Acima do peso
// Entre 30 e 34,99	---- Obesidade I
// Entre 35 e 39,99	---- Obesidade II (severa)
// Acima de 40	-------- Obesidade III (mórbida)

const prompt = require ("prompt-sync") ();

let nome= prompt("Qual seu nome? ");
let peso= prompt("Qual seu peso? "); //------kg
let altura= prompt("Qual sua Altura? ");//----m
let sitiation;

let imc=peso / (altura * altura);


if(imc<=17){sitiation="Muito abaixo do peso"};
if(17<imc & imc<18.5){sitiation="Abaixo do peso"};
if(18.5<=imc & imc<25){sitiation="Peso Normal"};
if(25<=imc & imc<30){sitiation="Acima do peso"};
if(30<=imc & imc<35){sitiation="Obesidade I"};
if(35<=imc & imc<34){sitiation="Obesidade II (severa)"};
if(40<=imc){sitiation="Obesidade III (mórbida)"};


console.log("Olá " + nome + " suas caracteristicas são: \n");
console.log("Peso : " + peso + " kg \n");
console.log("Altura : " + altura + " m \n");
console.log("Imc : " + imc.toFixed(2) + "\n");
console.log("A sua situação em relação ao seu IMC é : "+sitiation+"\n");