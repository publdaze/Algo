const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1);

const dp = [1, 1];

for (let i = 2; i <= 45; i++) {
  dp[i] = dp[i - 2] + dp[i - 1];
}

input.forEach((x) => console.log(dp[x]));
