const listafrutas = Array();
listafrutas[0] = 'Banana';
listafrutas[1] = 'Maça';
listafrutas[2] = 'Uva';
listafrutas[3] = 'Melão';
// O indexOf pesquisa elementos no array e retorna ele em valor numérico
const auxiliar = listafrutas.indexOf('Uva');
if (auxiliar === -1) {
    console.log('Elemento não existe');
} else {
    console.log('Elemento existe e está na posição' + listafrutas.indexOf('Uva'));
};