// data.getDate() podemos imprimir o dia da forma dinâmica baseado nos dados do sistema operacional
// data.getMonth retorna a informação do mês em número, considera os meses de 0 á 11
// getFullYear  recupera o ano através do sistema operacional
// 
// let date = new Date(); 
// document.write(date.getDate());
// document.write(date.getMonth() + 1);
// document.write(date.getFullYear())
// document.write(date.getDate() + '/' + (date.getMonth()) + '/' + (date.getFullYear()));




// // Adicionar e remover dias da date

// // O objeto toString transforma valores de number para string
// document.write(date.toString());
// // o objeto setDate seta valores no objeto date, o objeto set date tem a inteligência de trabalhar com valores de meses anda year
// date.setDate(date.getDate() + 1);
// // date.setDate(date.getDate() - 1);
// document.write('<hr />');
// document.write(date.toString());

// // Adicionar / remover meses
// document.write(date.toString());
// date.setMonth(date.getMonth() + 1);
// // date.setMonth(date.getMonth() - 1);
// document.write('<hr />');
// document.write(date.toString());


//  Adicionar / remover year
// document.write(date.toString());
// date.setFullYear(date.getFullYear() + 1);
//  date.setMonth(date.getMonth() - 1);
// document.write('<hr />');
// document.write(date.toString());

let date = new Date();

let date1 = new Date (2022, 0, 1);
let date2 = new Date (2022, 11, 31);

document.write(date1.toString());
document.write('<hr />');
document.write(date2.toString());


//  Coverter as dates para algo que possamos calcular 
document.write('<hr />');
document.write('<hr />');
// Recupera os milisegundos de 1 de Janeiro de 1970 até á date informada no script
document.write(date1.getTime());
document.write('<hr />');
document.write(date2.getTime());

// Encontrar a quantidade de milesegundos entre date1 e date2
document.write('<hr />');
document.write('<hr />');
// O objeto Math.abs recupera o valor absoluto de um número em valor positivo
let milisegundos_entre_dates = (Math.abs (date1.getTime() - date2.getTime()));
document.write(milisegundos_entre_dates);

// Descobrir quantos dias essa quantidade de milisegundos representar 
// 1 dia tem 24 horas
//  cada hour tem 60 minutos
//  cada minuto tem 60 segundos 
// cada segundo tem 100 milisegundos
//  quantos milisegundos existem  em um dia 
document.write('<hr />');
let milisegundos_por_dia =  (1*24*60*60*1000);
document.write('1 dia tem ' + milisegundos_por_dia + ' milissegundos');
document.write('<hr />');
//  Imprimir a divisão da diferença de milisegundos pelos milisegundos existentes em um dia
document.write('A diferença entre date1 e date2 é de ' + Math.ceil ( milisegundos_entre_dates / milisegundos_por_dia) + ' dias ');





