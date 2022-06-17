// Considere a quantidade de alunos presentes na sala, percorra do zero até o número total de alunos e retornar os seguintes resultados:

// se o número for par, escreva 'par' e o número correspondente.
// se o número for ímpar, escreva 'ímpar' e o número correspondente.
// se o número for zero, escreva 'zero' e o número correspondente.
console.log("\n---------------------------------------------------------------- ")
console.log(" Alunos Par ou Ímpar - Por Adriano Mariot")
console.log("---------------------------------------------------------------- \n")
const input = require("prompt-sync")();
let numAlunos= input("Entre com o numero de alunos presentes no Encontro remoto : ")
console.log("---------------------------------------------------------------- \n")
for (let contAlunos = 0; contAlunos <=numAlunos; contAlunos++){
    if(contAlunos==0){
        console.log(contAlunos+"- O numero do Aluno "+contAlunos+" é Zero.");
        console.log("----------------------------------- ")
    }
    if((contAlunos%2)==0){
        console.log(contAlunos+"° - O numero do Aluno "+contAlunos+" é par.");
        console.log("----------------------------------- ")
    }else{
        console.log(contAlunos+"° - O numero do Aluno "+contAlunos+" é ímpar.");
        console.log("----------------------------------- ")
    }
}
console.log("\n--------------- Fim -------------- ")