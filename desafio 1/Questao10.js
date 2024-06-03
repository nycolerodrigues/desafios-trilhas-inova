/* QUESTÃO 10 */
/*Desenvolver um programa para contar o número de letras maiúsculas da string abaixo: “LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY” */
const texto = "LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY";
function contarLetrasMaiusculas(texto) {
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] >= 'A' && texto[i] <= 'Z') {
            contador++;
        }
    }
    return contador;
}
console.log("o numero de letras maiusculas na string é: "+contarLetrasMaiusculas(texto));