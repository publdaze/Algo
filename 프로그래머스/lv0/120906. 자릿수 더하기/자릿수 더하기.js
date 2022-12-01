function solution(n) {
    return String(n).split('').reduce((p, c) => p + Number(c), 0);
}