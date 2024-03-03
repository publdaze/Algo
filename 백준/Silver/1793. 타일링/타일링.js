const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const MAX_N = 250;
const dp = [1n, 1n, 3n];

for (let i = 3; i <= MAX_N; i++) {
  dp[i] = 2n * dp[i - 2] + dp[i - 1];
}

console.log(input.map((num) => dp[num]).join("\n"));

/* 비트 마스크 풀이
const RAW_SIZE = 2;
const MAX_N = 250;
const dp = Array.from({ length: RAW_SIZE * MAX_N }, () => Array.from({ length: 1 << RAW_SIZE }, () => -1n));
const ways = [1];

const go = (idx, status) => {
  if (idx >= RAW_SIZE * MAX_N) {
    if (idx === RAW_SIZE * MAX_N && status === 0) return 1n;
    return 0n;
  }

  if (dp[idx][status] !== -1n) return dp[idx][status];
  dp[idx][status] = 0n;

  if (status & (1 << 0)) {
    dp[idx][status] += go(idx + 1, status >> 1);
  } else {
    if (idx % RAW_SIZE < RAW_SIZE - 1 && (status & (1 << 1)) === 0) {
      if ((status & (1 << 2)) === 0 && (status & (1 << 3)) === 0) {
        dp[idx][status] += go(idx + 4, status >> 4);
      }
      dp[idx][status] += go(idx + 2, status >> 2);
    }
    dp[idx][status] += go(idx + 1, (status >> 1) | (1 << (RAW_SIZE - 1)));
  }

  if (status === 0) {
    ways.push(dp[idx][status].toString());
  }

  return dp[idx][status];
};

go(0, 0);
console.log(input.map((num) => ways[num]).join("\n"));
 */
