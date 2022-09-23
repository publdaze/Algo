function solution(x, n) {
    var answer = [];
    answer = Array.from({length: n}, (v, i) => x * i + x);
    return answer;
}