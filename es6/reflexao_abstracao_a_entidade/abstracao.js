// um softwere de marcenária
// Cadeira sofá

// Paragdima procedural 

// Cadeira

// Array de cadeiras
// let cadeiras = Array();
// cadeiras[0] = [];
// cadeiras[0]['qtd_pernas'] = 4;
// cadeiras[0]['giratoria'] = false;
// cadeiras[0]['cor'] = 'azaul'

// cadeiras[1] = [];
// cadeiras[1]['qtd_pernas'] = 1;
// cadeiras[1]['giratoria'] = true;
// cadeiras[1]['cor'] = 'vermelha';


// function girarCadeira(indice) {
//     if (cadeiras[indice]['giratoria'] == true) {
//         document.write('Giratória');
//     } else {
//         document.write('Cadeira não é giratória');
//     };
// };

// function adc_cadeira(qtd_pernas, giratoria, cor) {
//     let cadeira = Array();
//     cadeira['qtd_pernas'] = qtd_pernas;
//     cadeira['giratoria'] =  giratoria;
//     cadeira['cor'] =  cor;
//     cadeiras.push(cadeira);
// };
// // girarCadeira(1);
// adc_cadeira(3, false, 'preta');
// console.log(cadeiras);


// paradigma orientação a objetos

// class Cadeira{
//     constructor(qtd_pernas, giratoria, cor) {
//         this.qtd_pernas = qtd_pernas;
//         this.giratoria = giratoria;
//         this.cor = cor;
//     };
//         girarCaderia () {
//             if (this.giratoria === true) {
//                 document.write('girou');
//             } else {
//                 document.write('Não é giratória')
//             };
//         };
// };



// let cadeiras = [];
// cadeiras.push(new Cadeira(1, true, 'preta'));
// cadeiras.push(new Cadeira(4, false, 'azul'));

// console.log(cadeiras);
// cadeira.girarCaderia();
// document.write('<br/>');


// Desafio 
// Criar um modelo que represente o OO sofá dentro do seu código 
class Sofa{
    // cor qunatidade de lugar se é reclinável ou não
    constructor(qtd_lugares, color, reclinavel_sim_nao) {
        this.qtd_lugares = qtd_lugares;
        this.color = color;
        this.reclinavel_sim_nao = reclinavel_sim_nao;
    };
        reclinar() {
        if (this.reclinavel_sim_nao == true ) {
            document.write('O sofá é reclínavel, por conta o valor dele aumenta um pouco');
        } else {
            document.write('O sofá não é reclínavel por conta disso o valor se etabelece padrão');
        };
    };
};
// Criar um método para reclinar o sofá testando se ele tem essa caracteriística
// let sofas = Array();

 let sofa = new Sofa(1, 'Preto', true);
 console.log(Sofa);
 sofa.reclinar();
// cadeira.reclinar();
// document.write('<br/>');


