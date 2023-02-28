//  Literatura de orientação a objetos = entidade, identidade, característca, ações




// Modelo da objeto
class ContaBancaria {
    // Agencia 
    // numeroConta
    // saldo
    // limite 
     constructor() {
        //  constructor é um método automática com as instruções que serão realizadas no processo de construção de um objeto
        // tem a inteligência de conectar um atributo ao contexto do objeto    
        this.agencia = 1075;
        this.numeroConta = 85858585;
        this.saldo = 50;
        this.limite = 450;      
     };
     depositar(valorDeposito) {
        this.saldo +=  valorDeposito;
     };
     sacar(valorSaque) {
        this.saldo -= valorSaque;
     };
     consultarSaldo() {
        return this.saldo;
     };
};
// new = é o operador que indica para o interpretador do js que alguém queira na pratica tranformar esse modelo em um objeto
let  x =  new ContaBancaria();
let  y =  new ContaBancaria();


console.log(x.consultarSaldo());
x.depositar(450);
console.log(x.consultarSaldo());
x.sacar(100);
console.log(x.consultarSaldo());

console.log(y.consultarSaldo());