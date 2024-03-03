const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const N = Number(input);

const RAW_SIZE = 3;
const dp = Array.from({ length: RAW_SIZE * N }, () => Array.from({ length: 1 << RAW_SIZE }, () => -1));

const go = (idx, status) => {
  if (idx >= RAW_SIZE * N) {
    if (idx === RAW_SIZE * N && status === 0) return 1;
    return 0;
  }

  if (dp[idx][status] !== -1) return dp[idx][status];
  dp[idx][status] = 0;

  if (status & (1 << 0)) {
    dp[idx][status] += go(idx + 1, status >> 1);
  } else {
    if (idx % RAW_SIZE < RAW_SIZE - 1 && (status & (1 << 1)) === 0) {
      dp[idx][status] += go(idx + 2, status >> 2);
    }
    dp[idx][status] += go(idx + 1, (status >> 1) | (1 << (RAW_SIZE - 1)));
  }

  return dp[idx][status];
};

console.log(go(0, 0));
