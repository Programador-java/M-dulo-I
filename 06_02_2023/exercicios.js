/*
Construir uma página para uma empresa de serviços. 
O operador irá digitar o salário de um cliente. 
Se o salário for maior que R$ 3.000,00, 
o programa irá escrever na tela “Oferecer Plano Alfa”
 e, caso seja menor, o programa escreverá
“Oferecer Plano Beta”. 
*/
/*
var salarioCliente = prompt('Informe o salário do cliente: ');
if(salarioCliente >= 3000) {
    document.write('Oferecer plano Alfa')
} else if(salarioCliente < 3000) {
    document.write('Oferecer plano beta')
} else {
    document.write('Informe um valor válido!')
} */

/*
Construir um programa onde o usuário saberá o valor 
do seu colesterol. 
Caso o valor seja menor que 180,
o programa irá escrever na tela “Saúde Ok”;
 caso 
contrário, o programa escreverá na tela 
“” 
*/
/*
var valorColesterol = prompt('Informe o valor do colesterol: ');
if(valorColesterol <= 180) {
    document.write('Saúde OK!')
} else if(valorColesterol > 180) {
    document.write('Vamos procurar uma ajuda médica?')
} else {
    document.write('Informe um valor válido!')
}
*/
/*
Construir um programa onde um vendedor irá digitar
quanto ele vendeu em um mês na loja.
Caso esse total de vendas seja maior ou igual a
R$ 10.000, o programa irá calcular uma comissão 
de 4% sobre suas vendas, mas caso a venda seja 
menor, o programa calculará apenas 2%.*/

var valorTotalVendas = parseInt(prompt('Informe o valor que você vendeu nesse mês: '));
var vendaAcima = valorTotalVendas * 0.04;
var vendaAbaixo = valorTotalVendas * 0.02;

if(valorTotalVendas >= 10000) {
    document.write(vendaAcima)
} else if(valorTotalVendas < 10000) {
    document.write(vendaAbaixo)
} else {
    document.write('Informe um valor válido!')
}