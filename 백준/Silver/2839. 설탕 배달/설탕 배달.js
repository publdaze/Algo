const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

let N = Number(input);

const dp = [-1, -1, -1, 1, -1, 1];

for (let i = 6; i < N + 1; i++) {
  if (dp[i - 3] + dp[i - 5] === -2) {
    dp[i] = -1;
  } else if (dp[i - 3] < 0) {
    dp[i] = dp[i - 5] + 1;
  } else if (dp[i - 5] < 0) {
    dp[i] = dp[i - 3] + 1;
  } else {
    dp[i] = Math.min(dp[i - 3], dp[i - 5]) + 1;
  }
}

console.log(dp[N]);
