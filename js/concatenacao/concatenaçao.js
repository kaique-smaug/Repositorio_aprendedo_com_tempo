// O comando prompt nos permite receber dados do usuário sem precisar de uma API
let name = prompt('Digite ser nome');
let idade = prompt('Digite sua idade');
let moradia = prompt('Digite o local onde você mora');

document.write('<h1>Olá ' + name + ', identificamos que você tem ' + idade + ' e mora na ' + moradia + ', com isso você poderá ingressar na graduação de engenharia da computação.</h1>');