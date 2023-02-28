function exibirArtigo(id, callbackSucesso, callbackErro) {
    // Lógica: recuperar o id via requisição http
    // As funçõe callback vai receber um título e um conteudo
    if (true) {
        callbackSucesso('Funções de callback em JS' , 'Funções de callback são muito usadas')
    } else {
        callbackErro('Erro ao recuperar os dados')
    }
};

let callbackSucesso = function(titulo, descrição) {
    document.write('<h1>' + titulo + '</h1>')
    document.write('<hr/>')
    document.write('<p>' + descrição + '</p>')
};

let callbackErro = function(erro) {
    document.write('<p><b>Erro:</b>' + erro + '</p>')
};
// As duas últimas funções não irão retornar a nada, porque são funções voi  (sem retorno), mas elas podem ser enviadas via parâmetro para uma terceira função e dentro dessas funções elas podem ser utilizadas
exibirArtigo(1, callbackSucesso, callbackErro);