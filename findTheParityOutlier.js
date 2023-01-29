function findOutlier(integers){

    let array;
    
    array = integers.filter(element => {return (element % 2) == 0})
    
    if (array.length > 1){
      array = integers.filter(element => {return (element % 2) != 0})
    }
  
    return array[0];
  
  }