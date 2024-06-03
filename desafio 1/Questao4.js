/* QUESTÃO 4 */
/*Em uma pequena vila, o fazendeiro precisa separar os números primos para determinar quantos novos campos plantar. Ele pede sua ajuda para identificar esses números criando um algoritmos. Os números são: 23, 16, 11, 8, 19, 14, 5, 21. */
let numeros = [23, 16, 11, 8, 19, 14, 5, 21];

function identificaNumerosPrimos(vetor){
let primos = [];
let contador = 0;
let i,j;

for (i = 0; i < numeros.length; i++) {
    let ehPrimo=true;
    for (j = 2; j < numeros[i]; j++) {
        if (numeros[i] % j == 0) {
            ehPrimo = false;
            break;
        }
    }
    if (ehPrimo) {
        primos[contador] = numeros[i];
        contador++;
    }
}

for (let i = 0; i < contador; i++) {
    console.log("o numero "+primos[i]+" é um número primo.");
}
}
identificaNumerosPrimos(numeros);