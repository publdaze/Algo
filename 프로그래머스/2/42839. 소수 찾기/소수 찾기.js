function isPrime(number) {
    if (number < 2) {
        return false;
    }
    
    for (let i = 2; i * i <= number; i++) {
        if (number % i === 0) return false;                  
    }
    
    return true;
}

function permutations(arr, n) {
    if (n === 1) return arr.map((v) => [v]);
    let result = [];

    arr.forEach((fixed, idx, arr) => {
      const rest = arr.filter((_, index) => index !== idx);
      const perms = permutations(rest, n - 1);
      const combine = perms.map((v) => [fixed, ...v]);
      result.push(...perms, ...combine);
    });

    return result;
  }

function solution(numbers) {
    const numberList = [...new Set(permutations([...numbers], numbers.length).map((arr) => Number(arr.join(""))))];
    return numberList.reduce((acc, number) => isPrime(number) ? acc + 1 : acc, 0);
}