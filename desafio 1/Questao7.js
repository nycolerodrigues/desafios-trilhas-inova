/* QUESTÃO 7 */
/*Em uma loja de conveniência, um cliente comprou três itens e precisa calcular o total da compra. Os preços dos itens são R$ 2,50, R$ 3,75 e R$ 1,99. Crie um algoritmo que retorne o valor total.*/
let item1= 2.50;
let item2 = 3.75;
let item3 = 1.99;
function valorTotalDaCompra(item1,item2,item3){
    let total = item1+item2+item3;
    console.log("o total da compra foi de: R$"+total);
}
valorTotalDaCompra(item1,item2,item3);