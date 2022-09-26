function solution(a, b) {
    if (a > b) [a, b] = [b, a]
    var answer = Array.from({length: (b - a + 1)}, (v, i) => a + i).reduce((p, c) => p + c );
    return answer;
}