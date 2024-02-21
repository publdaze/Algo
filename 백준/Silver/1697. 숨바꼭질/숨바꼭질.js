const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

//REVIEW - DP를 사용할 수 있겠다 싶었는데 어떻게 접근해야할 지 떠오르지 않음 -> 그림으로 그려보자
//TODO - 가장 빠른 시간이 몇 초 후인지
//NOTE - 걷기 - X +- 1, 순간이동 - 2 * X
//ANCHOR - DP로 가장 빠른 시간 쌓아가며 풀 수 있을 듯
//각 좌표에 도달하는 가장 빠른 시간

const [N, K] = input;
const dp = Array.from({ length: N + 2 }, (v, i) => Math.abs(N - i));

if (N + 1 < K) {
  let i = N + 2;
  while (i <= K) {
    if (i % 2 === 0) {
      dp[i] = Math.min(dp[i - 1] + 1, dp[i / 2] + 1);
    } else {
      dp[i] = Math.min(dp[i - 1] + 1, dp[(i + 1) / 2] + 2);
    }
    i++;
  }
}

console.log(dp[K]);
