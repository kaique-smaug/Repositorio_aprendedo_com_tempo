function entrando() {
    let input = document.getElementById('campo');
    input.style.background = 'yellow';
    console.log('ok');
}

function saindoF() {
     const valorCampo = document.getElementById('campo').value
     let input = document.getElementById('campo');
    if (valorCampo.length < 3) {
        input.style.background = 'red';
    } else {
        input.style.background = 'green';
    }
}
