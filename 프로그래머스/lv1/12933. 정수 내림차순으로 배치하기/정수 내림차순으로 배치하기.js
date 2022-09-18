function solution(n) {
    var answer = 0;
    answer = Number(String(n).split('').map(Number).sort(function(a, b){ return b-a; }).join(''));
    
    return answer;
}