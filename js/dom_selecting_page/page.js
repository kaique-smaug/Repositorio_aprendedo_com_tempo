// O getElementById seleciona o elemento pelo name
const test1 = document.getElementById('email');
console.log(test1);
// O getElementByClassName seleciona o elemtento através do
const test2 = document.getElementsByClassName('email');
console.log(test2);
//  O getElementByTagName seleciona o elemento através do nome da tag
const test3 = document.getElementsByTagName('input');
console.log(test3);
// Em vez de ser um HTMLCollection é um nodeList
const test4 = document.getElementsByName('email');
console.log(test4);