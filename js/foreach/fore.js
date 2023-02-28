// let lista_funcionarios = ['Kaique', 'Vanussa', 'Leandro', 'Marley'];
// document.write(lista_funcionarios + ' <br/> ');
// lista_funcionarios.forEach(function (valor, indice) {
//     document.write(' <br/> ' + indice, valor);
// });


let lista_funcionarios = Array();

lista_funcionarios[1] = 'Kaique';
lista_funcionarios[true] = 'Leandro';
lista_funcionarios[60] = 'Vanussa';
lista_funcionarios[55] = 'Marley';
document.write(lista_funcionarios)


let f = function (valor, indice) {
    document.write('<br/>' + valor, indice);
}
lista_funcionarios.forEach(f)

