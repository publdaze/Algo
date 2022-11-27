function solution(s) {
    return ![...s].map(Number).some((v) => Number.isNaN(v)) && (s.length === 4 || s.length === 6);
}