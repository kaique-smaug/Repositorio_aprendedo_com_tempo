class Automoveis{
    constructor(){
        this.velocidade = 200;
        this.numeroRodas = 'Depende do veículo';
        
    };
    
    viagemLonga(){
        console.log('Depende do estafo do automóvel');
    };
};

class Carro extends Automoveis{
    constructor(){
        super();
        this.cor = 'Vermelho';
    };
    
};


class Moto extends Automoveis{
    constructor(){
        super();
        this.cor = 'Preta';
    };
    deLuxo(){
        console.log('BMW 1200');
    };
    
    
};

let carro = new Carro();
let moto = new Moto();
let automoveis = new Automoveis();


console.log(carro);
console.log(moto);
console.log(automoveis);