let i = 5;
let x = setInterval(function() {
   document.write(i) 
   i--

   if (i === 0) {
    clearInterval(x)
   }
}, 1000);