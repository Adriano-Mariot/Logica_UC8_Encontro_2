//receba 3 notas de uma aluno e calcule a media.
//se maior que 7 aprovado senão está reprovado.

//entrada de dados
let nota1=90;
let nota2=75.5;
let nota3=95.9;
//Processa dados
let media= (nota1+nota2+nota3)/3;
//Saída de dados
console.log("Média : " +media.toFixed(2));
if (media >=70) {
    console.log("Resultado final : Aluno Aprovado");
}else{
    console.log("Resultado final : Aluno Reprovado");
}; 
