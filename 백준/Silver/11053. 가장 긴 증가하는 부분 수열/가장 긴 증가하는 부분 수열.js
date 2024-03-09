const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.at(0));
const A = input.at(1).split(" ").map(Number);
const dp = [];

for (let i = 0; i < N; i++) {
  dp[i] = 1;

  const smaller = [];
  for (let j = i - 1; j >= 0; j--) {
    if (A[j] < A[i]) {
      smaller.push(dp[j]);
    }
  }

  if (smaller.length > 0) {
    dp[i] += Math.max(...smaller);
  }
}

console.log(Math.max(...dp));
