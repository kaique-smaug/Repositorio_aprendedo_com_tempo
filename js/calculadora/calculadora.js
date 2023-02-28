function calcular(tipo, valor) {
    if (tipo === 'acao') {
        if (valor === 'c') {
            // Limpar o visor (id resultado)
            const limpar = document.getElementById('resultado').value = '';
            return limpar
        };
        if (valor === '+' || valor === '-' || valor ==='*' || valor === '/' || valor === '.') {
            const resultado_campo = document.getElementById('resultado').value += valor;
            return resultado_campo
        };
        if (valor === '=') {
            const igual = eval(document.getElementById('resultado').value)
            document.getElementById('resultado').value = igual;
            
        }
    } else if(tipo === 'valor'){
       const identificar_acao = document.getElementById('resultado').value;
       document.getElementById('resultado').value = identificar_acao + valor;
       
    };
};
