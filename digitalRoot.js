function digitalRoot(n) {
  
    let total = 0;
    
    while (Math.floor(n / 10) != 0) {

        arr = Array.from(''+ n, Number);

        arr.forEach(element => {
            total += element;
        });

        [n, total] = [total, 0];
    }
    return n;
}


console.log(digitalRoot(493193));
