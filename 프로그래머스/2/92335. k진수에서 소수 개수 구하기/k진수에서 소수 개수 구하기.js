function isPrime(num) {
    if (num === 1) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function solution(n, k) {
    return n.toString(k).split("0").filter(Boolean).map(Number).filter((num) => isPrime(num)).length;
}