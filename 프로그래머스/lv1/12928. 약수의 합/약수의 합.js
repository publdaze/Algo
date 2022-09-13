function solution(n) {
    var answer = 0;
    
    let i = 0;
    while(++i <= n) {
        if (n % i == 0) answer += i;
    }
    
    return answer;
}