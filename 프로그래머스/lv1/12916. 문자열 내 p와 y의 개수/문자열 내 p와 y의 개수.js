function solution(s){
    var answer = true;
    const lowerS = s.toLowerCase();
    
    if (lowerS.split('p').length - 1 !== lowerS.split('y').length - 1) {
        answer = false;
    }
    
    return answer;
}