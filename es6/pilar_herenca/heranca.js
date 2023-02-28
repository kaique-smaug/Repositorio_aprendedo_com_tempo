
class Animal{
    constructor(){
        this.cor = '';
        this.tamanho = null; 
        this.peso = null; 
    };
    dormir(){
        console.log('====================================');
        console.log('Dormir');
        console.log('====================================');
    };
};




class Cachorro extends Animal{
    constructor() {
        super();
        this.orelhas = 'Grandes e caídas';
    };
    correr(){
       
        console.log('Correr');
        
    };
        rosnar(){
            console.log('Rosnar');
        };
};





class Passaro extends Animal{
    constructor() {
        super();
        this.bico = 'Curto';
    };
    voar(){
        
        console.log('Voar');
        
    }

};

class Papagaio extends Passaro{
    
    constructor(){ 
        super();
        this.sabeFalar = true;
    };
    falar(){
        console.log('Falar');
    }
};

let cachorro = new Cachorro();
let passaro = new Passaro();
let papagaio = new Papagaio();


console.log('====================================');
console.log(cachorro);
console.log('====================================');
console.log('====================================');
console.log(passaro);
console.log('====================================');
console.log('====================================');
console.log(papagaio);
console.log('====================================');