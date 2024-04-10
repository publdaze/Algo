const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((line) => line.split(" ").slice(1).map(Number));

//REVIEW - 문제 조건(입력) 잘보기

const gcd = (a, b) => {
  while (a % b !== 0) {
    [a, b] = [b, a % b];
  }
  return b;
};

const combinations = (arr, n) => {
  if (n === 1) return arr.map((v) => [v]);
  return arr.flatMap((fixed, idx) => combinations(arr.slice(idx + 1), n - 1).map((combi) => [fixed, ...combi]));
};

console.log(input.map((testCase) => combinations(testCase, 2).reduce((acc, [a, b]) => acc + gcd(a, b), 0)).join("\n"));
