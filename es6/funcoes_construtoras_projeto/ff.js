let Carro = function () {
   this.cor = "Amarelo";
   this.modelo = "Chevette";
   this.velocidadeAtual = 0;
    this.velocicadeAtual = 10;

    this.acelerar = function () {
        let velocidade = this.getVelocidadeAtual() + 10;
        this.setVelocidadeAtual(velocidade);
    };
    
    this.getVelocidadeAtual = function () {
        return this.velocicadeAtual
    };
    this.setVelocidadeAtual = function (velocicadeAtual) {
        this.velocicadeAtual = velocicadeAtual
    };
};

let carro = new Carro();

console.log(`A velocidade atual é: ${carro.getVelocidadeAtual()}`);

