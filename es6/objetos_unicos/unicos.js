let assinatura = {
    idClient: 1000,
    descricao: "Acesso a internet",
    status (){
        console.log(`Ativo`);
    }
};

console.log(assinatura);


let y = assinatura
console.log(y.descricao);

//-----------------------------------


y.descricao = `Internet + TV + telefone`;

console.log(assinatura.descricao)
console.log(y.descricao);;