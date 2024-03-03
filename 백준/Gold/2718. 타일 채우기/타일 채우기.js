const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map(Number);

const RAW = 4;

const go = (idx, status, n) => {
  if (idx >= RAW * n) {
    if (idx === RAW * n && status === 0) return 1;
    return 0;
  }

  if (dp[idx][status] !== -1) return dp[idx][status];
  dp[idx][status] = 0;

  if (status & (1 << 0)) {
    dp[idx][status] += go(idx + 1, status >> 1, n);
  } else {
    if (idx % RAW < RAW - 1 && (status & (1 << 1)) === 0) {
      dp[idx][status] += go(idx + 2, status >> 2, n);
    }

    dp[idx][status] += go(idx + 1, (status >> 1) | (1 << (RAW - 1)), n);
  }

  return dp[idx][status];
};

console.log(
  input
    .map((N) => {
      dp = Array.from({ length: RAW * N }, () => Array.from({ length: 1 << RAW }, () => -1));
      return go(0, 0, N);
    })
    .join("\n")
);
