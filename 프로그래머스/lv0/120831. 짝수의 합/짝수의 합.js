function solution(n) {
    let firstNum = n % 2 === 0 ? n : n - 1;
    let answer = 0;
    
    while(firstNum > 0) {
        answer += firstNum;
        firstNum -= 2;
    }
    
    return answer;
}
