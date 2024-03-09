const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

//REVIEW - 6 1000 1000 1 1 1000 1000 (두 잔 연속 안 마시는 경우)
//TODO - 최대로 마실 수 있는 포도주 양
//n개의 포도주 잔 순서대로 놓임, 포도주 양 주어짐
//NOTE - 연속으로 놓인 3잔 모두 마실 수 없음, 원샷

const n = input.at(0); // 잔의 개수
dp = [0, input[1]];

for (let i = 2; i <= n; i++) {
  dp[i] = input[i] + Math.max(dp[i - 2] || 0, (dp[i - 3] || 0) + input[i - 1], (dp[i - 4] || 0) + input[i - 1]);
}

console.log(Math.max(dp[n], dp[n - 1]));
