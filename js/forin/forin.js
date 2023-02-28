let listaConvidados = Array();

listaConvidados[0] = 'Jorge';
listaConvidados[1] = 'Kaique';
listaConvidados[2] = 'Vanussa';
listaConvidados[3] = 'Leandro';
listaConvidados[4] = 'Marley';

console.log(listaConvidados);

for (let x in listaConvidados) {
    console.log('Seu ídice é ' + x + ' e seus convidados são' + listaConvidados[x]);
    
};
