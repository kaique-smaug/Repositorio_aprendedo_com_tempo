let name = prompt('Digite seu nome');
let altura = prompt('Digite sua altura em cm');
let peso = prompt('Digite seu peso')
// Convertendo os number para fração
altura = parseFloat(altura);
peso = parseFloat(peso);
// Alterando a altura de centímetros para metros
altura = (altura / 100);
// fazendo o cálculo para calcular a massa
let m = peso / altura * altura

// Loops para retorna os resultados
let classificacao = ''
if(m < 16){
    classificacao = 'Baixo peso muito grave'
} else if(m >= 16 && m <= 16.99){
    classificacao = 'Baixo peso grave'
} else if(m >= 17 && m<= 18.49){
    classificacao = 'Baixo peso'
} else if (m >= 18.50 && m <= 24.99) {
    classificacao = 'Peso normal'
} else if (m >= 25 && m <= 29.99) {
    classificacao = 'Sobrepeso'
} else if (m >= 30 && m <= 34.99) {
    classificacao = 'Obesidade grau 1'
} else if (m >= 35 && m <= 39.99) {
    classificacao = 'Obesidade grau 2'
} else if (m >= 40) {
    classificacao = 'Obesidade grau 3'
};
// Exibindo os resultados na header
document.write(name + ' possui índice de massa corporal igual a ' + m + ' sendo classificado como: ' + classificacao); 
