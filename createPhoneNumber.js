function createPhoneNumber(numbers){
  
    let number = '(';
  
    numbers.forEach(function(element, itm) {
      
      if (itm == 3){
        number += ') ' + element;
      } else if (itm == 6) {
        number += '-' + element;
      } else{
        number += element;
      }
    });
  
    return number;
  
  }