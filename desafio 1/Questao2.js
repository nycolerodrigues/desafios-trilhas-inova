/* QUESTÃO 2 */
/*Tais está participando de um sorteio na Loteria e recebeu uma lista de números aleatórios para poder apostar. Os números foram: 15, 8, 90, 75, 102, 6 e 2. Por ser bastante cautelosa, ela gostaria de saber qual é o menor número e qual é o maior número. 
Ajude Tais e escreva um programa que faça a lógica de programação para organização dos números, receba os números da lista e imprima na tela o menor número digitado e o maior número digitado.*/
var array = [15, 8, 90, 75, 102, 6, 2];
var i, menor = array[0], maior = array[0];
for (i = 1; i < array.length; i++) {
    if (array[i] < menor) {
        menor = array[i];
    }
    if (array[i] > maior) {
        maior = array[i];
    }

}
console.log("Menor número:" + menor);
console.log("Maior número:" + maior);
