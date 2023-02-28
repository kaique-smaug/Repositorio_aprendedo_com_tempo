let nome = document.querySelector("#name");
let idade = document.querySelector(`#idade`);
let sexo = document.querySelector(`#sexo`);
let profissao = document.querySelector(`#p_cadastro`);



console.log(idade);
console.log(nome);
console.log(sexo);
console.log(profissao);




let object = {
    nome: nome,
    idade: idade,
    sexo: sexo,
    profissao: profissao,
    exibirResumo: function () {
        console.log(`${this.nome}, ${this.idade} anos, ${this.sexo} e ${this.pro
        }`);
    }
};

console.log(object);
object.exibirResumo();


let object2 = {
    nome, // nome = nome variável / valor = valor variável
    idade,
    sexo,
    profissao,
    exibirResumo() {
        console.log(`${this.nome}, ${this.idade} anos, ${this.sexo} e ${this.pro
        }`);
    }
};

console.log(object2);
object.exibirResumo();