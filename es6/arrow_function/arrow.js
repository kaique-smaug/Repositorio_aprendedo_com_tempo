// let quadrado = function (x, y) {
//    return x * y
// };
// Example of arrow function
// let quadrado = (x) => {
//     return x * x;
// };
// Wuando há um só parâmetro, podemos omitir o abre e fecha parênteses 
// let quadrado = x => {
//     return x * x;
// };
// document.write(quadrado(2, 2));


// let parOuImpar = function (numero) {
//     if (numero % 2 === 0) {
//         return 'Par';
//     } else {
//         return 'Impar';
//     };
// };
let parOuImpar = numero => numero % 2 === 0 ? 'Par': 'Impar'
document.write(parOuImpar(8));