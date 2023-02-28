let x = 1;
let y = 1;

while (x <= 10 ) {
    y = 1;
    while (y <= 10) { 
        document.write(`${x} x${y} = ${x * y}<br/>`);
        y++
    };
    document.write('<hr/>')
    document.write('<br/>')
    x++
};