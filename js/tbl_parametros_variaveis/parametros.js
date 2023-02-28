function sum() {
    let resultado = 0;
//     arguments = Lógico que uma palavrinha reservada chamada argumentos argumentos e uma instrução que existe para todas

// as funções JavaScript que retorna para nós.

// Algo muito parecido com um array contendo a relação de parâmetros passados para a função.

// Essa palavrinha reservada a argumentos que ela representa um objeto que é uma variável local disponível

// dentro da função.

// Então qualquer função nós podemos recuperar os parâmetros encaminhados para aquela respectiva função

// através desse objeto que é uma variável local de escopo da função.
    for (let i in arguments) {
       resultado += arguments[i];       
    };
    return resultado
};
document.write(sum(10, 15, 21.5));