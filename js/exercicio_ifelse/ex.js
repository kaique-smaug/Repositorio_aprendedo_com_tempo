// let idade = prompt('Digite sua idade');

// if (idade > 0 && idade <= 15) {
//     alert('Criança')
// };



// if (idade >= 15 && idade <= 30) {
//     alert('Jovem')
// };

// if (idade >= 30 && idade <= 60) {
//     alert('Adulto')
// };

// if (idade >= 60) {
//     alert('Idoso')
// };

var idade = prompt('Digite a idade');

if(idade >= 0 && idade < 15){
 alert('Criança');

} else if(idade >= 15 && idade < 30){
 alert('Jovem');

} else if(idade >= 30 && idade < 60){
 alert('Adulto');

} else {
 alert('Idoso');
}