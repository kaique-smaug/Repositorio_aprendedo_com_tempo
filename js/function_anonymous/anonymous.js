// Functions anonymous são functions que não possuem nome podemos aplicar a técnica da wrapper nela 

let name = prompt("Digite seu name");

let exibirName = function(nome) {
    document.write(' Welcome ' + name + ', você será sempre bem vindo ')
};

exibirName();