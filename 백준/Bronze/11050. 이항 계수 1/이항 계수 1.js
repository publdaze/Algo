const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const [N, K] = input.split(" ");

const factorial = (num) => {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
};

const binomialCoefficient = (n, k) => {
  return factorial(n) / (factorial(n - k) * factorial(k));
};

console.log(binomialCoefficient(N, K));
