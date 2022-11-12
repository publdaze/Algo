function solution(a, b) {
    return a.reduce((prev, curr, idx) => (
        prev + curr * b[idx]
    ), 0);
}