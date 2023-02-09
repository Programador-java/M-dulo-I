/* Faça um programa onde a Amanda 
digitará o salário bruto do funcionário 
e o programa escreverá, na tela, 
o nome do funcionário, 
o valor que será descontado de vale transporte (6%), 
de INSS (no momento descontar 8%) 
e quanto sobrará de salário líquido. 
*Cada informação deverá ser exibida em uma linha. */

var nomeFuncionario = prompt('Informe o nome do funcionário: ');
var salarioBruto = parseInt(prompt('Informe o salário do funcionário'));

var descontoVt = salarioBruto * 0.06;
var descontoInss = salarioBruto * 0.08;
var salarioLiquido = salarioBruto - descontoVt -descontoInss;

document.write(`O salário bruto do(a) funcionário 
${nomeFuncionario} é de R$${salarioBruto}`);
document.write('<br><br><br><br>');

document.write(`O desconto do vale transporte foi 
de 6%, um desconto de R$${descontoVt}`);
document.write('<br><br><br><br>');

document.write(`O desconto do inss foi
de 8%, um desconto de R$${descontoInss}`);
document.write('<br><br><br><br>');

document.write(`O salário líquido do(a) funcionário
${nomeFuncionario} é de R$${salarioLiquido}`);






