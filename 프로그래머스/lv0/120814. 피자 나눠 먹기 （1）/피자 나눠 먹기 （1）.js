function solution(n) {
    return parseInt(n / 7, 10) + (n % 7 ? 1 : 0);
}