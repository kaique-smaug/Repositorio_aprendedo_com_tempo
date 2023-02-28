// O Js possuí 3 escopos: global, função e o bloco
let anime = 'Bleach';

// Escopo em bloco
if (true) {
    document.write(anime)
};
document.write(' <br />');
document.write(' <br />');

function x() {
    document.write(anime)
};
x();

