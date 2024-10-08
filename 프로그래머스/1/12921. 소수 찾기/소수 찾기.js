function solution(n) {
    const isPrime = Array(n + 1).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;
    
    for (let i = 2; i < isPrime.length; i++) {
        if (isPrime[i] === false) continue;
        for (let j = 2; i * j < isPrime.length; j++) {
            isPrime[i * j] = false;
        }
    }
    
    return isPrime.filter(Boolean).length;
}