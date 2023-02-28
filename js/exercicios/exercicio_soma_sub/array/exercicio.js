const objetos = Array('Cadeira', 'Impressora', 'Garfo');





function recuperarValores() {
    // Reccuperando o valor contido no input text
    const input = document.getElementById('objetos').value;
    // Verificando se o valor e null
    if (input != '') {
        // Verificando se o valor do Array existe
        if (objetos.indexOf(input) !== -1) {
            alert('Objeto Já foi adicionado')
        } else {
            objetos.push(input);
            console.log(objetos);
            document.getElementById('objetos').value = '';
        }
    } 
};

function ordenarValores() {
    objetos.sort();
    console.log(objetos);
    
};
