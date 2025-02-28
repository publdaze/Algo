function solution(ineq, eq, n, m) {
    if (eval(n + ineq + m)) {
        return 1;
    }
    if (eq === "=" && n === m) {
        return 1;
    }
    return 0;
}