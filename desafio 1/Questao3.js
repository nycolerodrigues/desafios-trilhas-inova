/* QUESTÃO  3*/
/*Havia uma antiga guilda de alquimistas que guardava seus segredos em uma série de frascos numerados. No entanto, ao longo dos anos, os frascos foram sendo desorganizados e agora os aprendizes alquimistas precisam restaurar a ordem. Os números dos frascos representam a idade dos alquimistas que os criaram. Eles devem ser ordenados em ordem crescente para revelar um segredo alquímico há muito perdido. Mas, para isso, os aprendizes devem usar suas habilidades em algoritmos de ordenação. 
Escreva um programa que faça a ordenação dos frascos: 12, 5, 23, 17, 8, 14, 3, 19. */
var frascos = [12, 5, 23, 17, 8, 14, 3, 19];
function ordenacaoDeBolha(vetor) {
    let tamanho = frascos.length;
    let i, j, temp;
    for (i = 0; i < frascos.length - 1; i++) {
        for (j = 0; j < frascos.length - 1; j++) {
            if (vetor[j] > vetor[j + 1]) {
                //troca temp e vetor[i]
                temp = vetor[j];
                vetor[j] = vetor[j + 1];
                vetor[j + 1] = temp;
            }
        }
    }
    console.log("o vetor ordenado fica assim: ")
    console.log(vetor);
}
ordenacaoDeBolha(frascos);