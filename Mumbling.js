function accum(s) {
	
    let arr = s.toLowerCase().split('');
    let sentence = '';
    
    arr.forEach(function(element, item){
      if (item == 0){
        sentence += element.toUpperCase();
      } else{
        sentence += '-' + element.toUpperCase() + element.repeat(item);
      }   
    });
    
    return sentence;
    
}