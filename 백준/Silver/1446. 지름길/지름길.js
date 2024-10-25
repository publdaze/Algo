const fs = require("fs");
const numberList = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

// 일방통행
// 운전해야 하는 거리의 최솟값
const [N, D] = numberList.shift();

numberList.sort(([, endA], [, endB]) => endB - endA);

const dp = [0];

for (let i = 1; i <= D; i++) {
  dp[i] = dp[i - 1] + 1;
  while (numberList.length > 0 && i === numberList.at(-1)[1]) {
    const [start, end, distance] = numberList.pop();
    dp[i] = Math.min(dp[i], dp[start] + distance);
  }
}

console.log(dp[D]);
