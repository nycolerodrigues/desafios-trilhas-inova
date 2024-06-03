/* QUESTÃO 6 */
/*Escreva um programa para encontrar o fatorial do número 12.*/
function calculaFatorial(numero) {
    if (numero < 0) {
        return -1;
    } else if (numero == 0) {
        return 1;
    } else {
        return (numero * calculaFatorial(numero - 1));
    }
}
console.log(calculaFatorial(12));