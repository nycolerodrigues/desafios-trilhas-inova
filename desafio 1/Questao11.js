/* QUESTÃO 11 */
/*Crie uma lógica para calcular a idade de uma pessoa. Essa lógica deverá receber um valor de ano de nascimento no formato “yyyy-MM-dd” e deverá retornar o número da idade da pessoa como resultado. */
let dataDeNascimento = prompt("digite o ano do seu nascimento na forma (yyyy-MM-dd)");
function calculaIdade(data) {
    let anoDeNascimento = parseInt(dataDeNascimento.substring(0, 4));
    let anoAtual = 2024;
    let idade = anoAtual - anoDeNascimento;
    console.log("a idade da pessoa é: " + idade);
}
calculaIdade(dataDeNascimento);