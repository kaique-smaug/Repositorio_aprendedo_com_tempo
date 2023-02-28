//  3 escopos: global, função e bloco


function x() {
    
    if (true) {
        
    }
  
    if (true) {
        var serie = 'the';
        console.log(serie);
    };
    console.log(serie);
    x();
};
x();