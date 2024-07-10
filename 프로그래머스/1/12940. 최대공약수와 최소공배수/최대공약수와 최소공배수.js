const gcd = (a, b) => {
    while (a % b !== 0) {
        [a, b] = [b, a % b];
    }
    return b;
};

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function solution(n, m) {
    return [gcd(n, m), lcm(n, m)];
}