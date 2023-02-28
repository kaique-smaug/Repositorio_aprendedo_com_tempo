let num1 = prompt('Digite um número');
let operacao = prompt('Digite a operação');
let num2 = prompt('Digite outro número');

function calcSomSub(num1, num2, operacao) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    let resultado = '0';


    if (operacao === 'soma') {
        resultado = (num1 + num2);
    } if (operacao === 'subtração') {
        resultado = (num1 - num2);
    } else {
        document.write('Você deve informar o valor e a operação');
    }

    return resultado
}
document.write(calcSomSub(num1, num2, operacao));