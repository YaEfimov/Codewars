function moveZeros(arr) {

    arr.forEach(function(element, index) {
        if (element === 0) {
          
            
            
            for (let i = index; i < arr.length; i++) {
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];        
            }


            console.log(arr);
        }
    });
    
  /*  arr.array.forEach(element => {
        if (element === 0){
            
            console.log(arr);
        }
    });*/

}

moveZeros([1,2,0,1,0,1,0,3,0,1]);