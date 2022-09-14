function solution(n) {
    var answer = [];
    answer = String(n).split('').reverse().map(Number);
    return answer;
}