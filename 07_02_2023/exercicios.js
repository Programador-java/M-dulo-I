// Exemplo: “Quando você faz um curso no Senac, para 
// ser aprovado, precisa atender a uma competência e 
// ter  acima ou igual de 70% de frequência. 
// Vamos fazer um programa que resolva essa questão?”
// Exibir se o aluno foi aprovado ou não.

// var competencia = prompt('O aluno atingiu a competência? sim ou nao?')
// var frequencia = prompt('Informe a porcentagem de frequência (%)');

// if(competencia == 'sim' && frequencia >= 70) {
//     document.write('O aluno foi aprovado')
// } else {
//     document.write('O aluno foi repovado')
// };

 /*
 O(a) professor(a) irá digitar a nota tirada pelo 
Caso seja menor do que 0 ou maior do que 10,
o programa irá escrever  “Nota Inválida”; 
  
se for maior ou igual a 0 e menor do que 4, 
o programa irá escrever, “aluno reprovado”. 

Se a nota for maior ou igual a 4 e menor do que 7, 
o programa irá escrever “Aluno em Recuperação”

e, caso seja maior ou igual a 7 e menor ou igual a 10, 
escreverá “Aluno Aprovado”. 
*/
/*
var notaAluno = prompt('Informe a nota do aluno: ');
 
if(notaAluno < 0 || notaAluno > 10) {
    document.write('Nota Invalida')
} else if(notaAluno >= 0 && notaAluno < 4) {
    document.write('Aluno Reprovado')
} else if(notaAluno >= 4 && notaAluno < 7) {
    document.write('Aluno em Recuperação')
} else if(notaAluno >=7 && notaAluno <= 10){
    document.write('Aluno Aprovado')
};
*/
/*
Faça um programa que dependendo da cor 
favorita do usuário, seja informado uma mensagem.
amarelo = Você gosta do sol
azul = Você gosta do mar
verde = você gosta da floresta
*/

var corFavorita = prompt('Informe a sua cor favorita: ');

switch(corFavorita) {
    case 'amarelo':
        document.write('Você gosta do sol');
        break;
    case 'azul':
        document.write('Você gosta do mar');
        break;
    case 'verde':
        document.write('Você gosta da floresta');
        break;
    default:
        document.write('Você não gosta de nada');
};


