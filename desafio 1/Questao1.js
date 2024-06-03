/* QUESTÃO 1 */
/* Imagine que você está criando um sistema escolar para obter a média dos alunos da sala. Foram realizadas 3 avaliações com nota máxima de 10 pontos. Aline, tirou na primeira nota o total de 8 pontos, na segunda nota tirou 9 pontos e na terceira nota 7 pontos. 
Escreva um programa que receba as notas, faça o cálculo da média e imprima o resultado final da média. */

function calculoDaMedia(nota1, nota2, nota3) {
    var media;
    media = (nota1 + nota2 + nota3) / 3;
    console.log("A média das notas é: " + media);
}
var nota1, nota2, nota3;
nota1 = parseFloat(prompt("digite a primeira nota: "));
nota2 = parseFloat(prompt("digite a segunda nota: "));
nota3 = parseFloat(prompt("digite a terceira nota: "));

calculoDaMedia(nota1, nota2, nota3);