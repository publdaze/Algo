function solution(n) {
    let cnt = 0;
    for (let i = 1; i * i < n; i++) {
        if (n % i === 0) cnt++;
    }
    return cnt * 2 + (Number.isInteger(Math.sqrt(n)) ? 1 : 0);
}