const fs = require("fs");
const inputString = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .at(0);

const isPrimeNumber = (num) => {
  if (num === 1) return false;
  for (let i = 2; i < num / 2 + 1; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const numbers = inputString.split(" ").map(Number);
const primeNumberCnt = numbers.reduce((acc, curr) => {
  return isPrimeNumber(curr) ? acc + 1 : acc;
}, 0);

console.log(primeNumberCnt);
