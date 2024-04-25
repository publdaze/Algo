const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

//REVIEW - 시간 초과

input.pop();

const getPrimes = (min, max) => {
  const primes = [false, false, ...Array(max - 1).fill(true)];

  for (let i = 2; i * i <= max; i++) {
    if (primes[i] === true) {
      for (let j = 2; i * j <= max; j++) {
        primes[i * j] = false;
      }
    }
  }

  let result = [];

  for (let i = min; i <= max; i++) {
    if (primes[i] === true) {
      result.push(i);
    }
  }
  return result;
};
const primes = getPrimes(2, 1000000);
const set = new Set(primes);

if (input.length > 0) {
  console.log(
    input
      .map((num) => {
        for (let i = 0; i < primes.length; i++) {
          const remain = num - primes[i];
          if (set.has(remain)) {
            return `${num} = ${primes[i]} + ${remain}`;
          }
        }
        return "Goldbach's conjecture is wrong.";
      })
      .join("\n")
  );
}

/* 시간 초과 - 투포인터
input.pop();

const getPrimes = (min, max) => {
  const primes = [false, false, ...Array(max - 1).fill(true)];

  for (let i = 2; i * i <= max; i++) {
    if (primes[i] === true) {
      for (let j = 2; i * j <= max; j++) {
        primes[i * j] = false;
      }
    }
  }

  let result = [];

  for (let i = min; i <= max; i++) {
    if (primes[i] === true) {
      result.push(i);
    }
  }
  return result;
};
const primes = getPrimes(2, 1000000);

if (input.length > 0) {
  console.log(
    input
      .map((num) => {
        let left = 0;
        let right = primes.length - 1;
        while (left <= right) {
          const sum = primes[left] + primes[right];
          if (sum === num) return `${num} = ${primes[left]} + ${primes[right]}`;
          else if (sum < num) left++;
          else right--;
        }
        return "Goldbach's conjecture is wrong.";
      })
      .join("\n")
  );
}
 */
/* 시간 초과
input.pop();

const getPrimes = (min, max) => {
  const primes = [false, false, ...Array(max - 1).fill(true)];

  for (let i = 2; i * i <= max; i++) {
    if (primes[i] === true) {
      for (let j = 2; i * j <= max; j++) {
        primes[i * j] = false;
      }
    }
  }

  let result = [];

  for (let i = min; i <= max; i++) {
    if (primes[i] === true) {
      result.push(i);
    }
  }
  return result;
};
const primes = getPrimes(2, 100000);
const set = new Set(primes);

console.log(
  input
    .map((num) => {
      const primesInRange = primes.filter((prime) => prime < num);
      while (primesInRange.length > 0) {
        const maxNum = primesInRange.pop();
        if (set.has(num - maxNum)) return `${num} = ${num - maxNum} + ${maxNum}`;
      }
      return "Goldbach's conjecture is wrong.";
    })
    .join("\n")
);
 */
