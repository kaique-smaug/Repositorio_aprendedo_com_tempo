let altura = 0;
let largura = 0;
function ajustaTamanhoJogo() {
    let altura = window.innerWidth;
    let largura = window.innerWidth;
    console.log(largura, altura);   
};
ajustaTamanhoJogo();
function positionRandom() {
    let positionX = Math.floor(Math.random() * largura);
    let positionY = Math.floor(Math.random() * altura);
    console.log(positionX, positionY);
    
    // create element HTML
    let mosquito = document.createElement('img');
     mosquito.src = "imagemmosquito/imagens/mosquito.png";    
     mosquito.className = "mosquito1";
     mosquito.style.left = 'positionX' + 'px';
     mosquito.style.top = 'positionY' + 'px';
     mosquito.style.position = 'absolut' ;
     document.body.appendChild(mosquito);
};
