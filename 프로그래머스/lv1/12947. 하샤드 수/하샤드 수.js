function solution(x) {
    var answer = true;
    x %
    String(x)
        .split('')
        .reduce((prev, curr) => +prev + +curr, 0)
        ? (answer = false)
        : (answer = true);
    
    return answer;
}