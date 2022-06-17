//Faça um programa que receba 15 números inteiros e imprima na tela a somatória dos 15 número
const input = require("prompt-sync")();

console.log("\n----------------------------------------------------------------------------------");
console.log("Este programa recebe 3 números inteiros e imprime na tela a somatória dos números");
console.log("----------------------------------------------------------------------------------\n");
total=0;
for (let xpto =1; xpto<=3; xpto++){
    let numero=input("Por favor, digite o "+xpto+"° número inteiro: ")
    total=total+parseInt(numero);
    console.log("--------------------------------------------");
}
console.log("A soma total é : "+ total);
console.log("-------------------------------------------- FIM.\n");