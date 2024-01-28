const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

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

const [M, N] = input.split(" ").map(Number);

console.log(getPrimes(M, N).join("\n"));
