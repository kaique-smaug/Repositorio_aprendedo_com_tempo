const lista_frutas = Array();

lista_frutas[0] = '12';
lista_frutas[1] = '40';
lista_frutas[2] = '3';
lista_frutas[3] = '50';
// O método sort() reordenação alfa numérica com base nos valores dos elementos, ajusta os índices. Ele é específico para reordenação numérica

console.log(lista_frutas.sort(ordenaNumeros));

function ordenaNumeros(a, b) {
    return a - b
    // < 0 a ordenado antes de b
    // > 0 = b ordenado antes de a
    // == a ordem é mantida  
};