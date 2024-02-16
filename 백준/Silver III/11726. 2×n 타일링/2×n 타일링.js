const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const n = Number(input);
const dp = [0, 1, 2];

for (let i = 3; i <= n; i++) {
  dp[i] = (dp[i - 2] + dp[i - 1]) % 10007;
}

console.log(dp[n]);
