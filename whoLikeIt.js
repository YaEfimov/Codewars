function likes(names) {
  
    let answer, lastPart, lengthArray;
  
    lengthArray = names.length;
    lastPart = 'like this';
  
    if (lengthArray <= 1){
      lastPart = 'likes this'
    }
  
    if (lengthArray == 0){
      answer = 'no one';
    } else if (lengthArray == 1){
      answer = names[0];
    } else if (lengthArray == 2){
      answer = names[0] + " and " + names[1];
    } else if (lengthArray == 3){
      answer = names[0] + ", " + names[1] + " and " + names[2];
    } else{
      answer = names[0] + ", " + names[1] + " and " + (lengthArray - 2) + " others";
    }
      
    return answer + ' ' + lastPart;
      
}