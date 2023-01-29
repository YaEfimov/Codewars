function findShort(s){
    
    let array = s.toLowerCase().split(' ');
    let answer = s.length; 
    
    array.forEach(element => {
        if(element.length < answer){
            answer = element.length
        }
    });

    return answer;
  }