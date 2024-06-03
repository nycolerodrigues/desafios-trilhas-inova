/* QUESTÃO 8 */
/*Em um sistema de biblioteca, é necessário calcular a multa a ser paga por um usuário que atrasou a devolução de um livro. A multa é de R$ 0,50 por dia de atraso. O usuário atrasou a devolução do livro em 7 dias. Crie um algoritmo que faça o cálculo total que o aluno deverá pagar a biblioteca. */
let taxa = 0.50;
function calculaMulta(dias) {
    let multa = taxa * dias;
    console.log("o total da multa foi de R$" + multa);
}
calculaMulta(7);