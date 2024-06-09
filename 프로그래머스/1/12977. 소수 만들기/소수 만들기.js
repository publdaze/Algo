function combination(arr, n) {
    if (n === 1) return arr.map((v) => [v]);
    
    const result = [];
    arr.forEach((fixed, idx) => {
        result.push(...combination(arr.slice(idx + 1), n - 1).map((comb) => [fixed, ...comb]));
    })
    return result;
}

function sum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

function isPrime(num) {
    if (num === 2) return true;
    
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    
    return true;
}

function solution(nums) {
    return combination(nums, 3).map(sum).filter(isPrime).length;
}