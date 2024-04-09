const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);

//REVIEW 접근 방법

const gcd = (a, b) => {
  while (a % b !== 0n) {
    [a, b] = [b, a % b];
  }
  return b;
};

let [a, b] = input;
console.log("1".repeat(gcd(b, a).toString()));
