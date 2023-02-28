let video = Array();

video[1] = Array();
video[1]['nome'] = 'Fullmetal ';
video[1]['categoria'] = 'anime';

function getVideo(video) {
    try {
        // Lógica
        // Http
        // As declarações try...catch marcam um bloco de declarações para testar (try), e especifica uma resposta, caso uma exceção seja lançada.
        console.log(video[0]['nome']);
    } catch (error) {
        // A catchinstrução define um bloco de código para lidar com qualquer erro.
        tratarErro(error)
        console.log('Agora sim podemos tratar esse erro');
        // A declaração throw lança uma exceção definida pelo usuário. A execução da função atual vai parar (as instruções após o throw não serão executadas), e o controle será passado para o primeiro bloco catch na pilha de chamadas. Se nenhum bloco catch existe entre as funções "chamadoras", o programa vai terminar.
        throw new Error('Houve um erro mas não se preocupe, estamos trabalhando nisso')
    } finally{
        // A finallyinstrução define um bloco de código a ser executado independentemente do resultado.
        console.log('Sempre passa por aqui (try/ catch)');
    };
    
};
console.log('A aplicaão não morreu');

function tratarErro(e) {
    // Lógica para registrar o erro no servidor
    console.log(e);
};
getVideo(video);