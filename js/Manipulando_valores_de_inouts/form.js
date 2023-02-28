function capturarCaracter() {
    // Selecionar o valor digitado
    let caracter = document.getElementById('entrada').value;
    // Limpar o campo de digitação
    document.getElementById('entrada').value = '';
    // Limpas os espaços nas extremidades da string
    caractere.trim();
    // Testando qual é o caractere
    switch (caracter) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7': 
        case '8':
        case '9':
        case '10':
// Se quiser concatenar os caracteres é só aplicar um sinal de mais atrás do igual
// document.getElementById('entrada').value += caractere;
  // Adicionar o caractere no campo referente a números
        document.getElementById('number').value = caracter;  
       break;    
    
        default:
            // Adicionar o caractere no campo referente a letras
            document.getElementById('letra').value = caracter;  
        break;
    }


    

    console.log(caractere);
};