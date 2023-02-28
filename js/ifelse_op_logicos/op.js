// O operador && retorna verdadeira apenas se os dois parâmetros estiverem certos
// o || serve retorva verdaideiro se apenas 1 das operações estiver verdadeira
// let num1 = 10
// let num2 = 4
// if (num1 >= 2 && num2 == 5){
//     prompt('Verdadeiro')
// } else {
//         prompt('False')
// };
let nota = prompt('Digite sua nota');
let faltas = prompt('Digite suas faltas');
let maxFaltas = 20;
let media = 8;

// if (nota >= media && faltas <= maxFaltas){
//     prompt('Aprovado')
// } else {
//     prompt('Reprovado')
// };


// Operador ternário
let resultado = (nota >= media && faltas <= maxFaltas) ? 'Aprovado':'Reprovado';
prompt(resultado)