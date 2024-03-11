const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.at(0));
const A = input.at(1).split(" ").map(Number);
const dp = [[A[0]]];

let maxLengthIdx = 0;
for (let i = 1; i < N; i++) {
  let smallerMax = [];
  for (let j = i - 1; j >= 0; j--) {
    if (A[j] < A[i]) {
      if (smallerMax.length < dp[j].length) {
        smallerMax = dp[j];
      }
    }
  }

  dp[i] = [...smallerMax, A[i]];
  if (dp[i].length > dp[maxLengthIdx].length) maxLengthIdx = i;
}

console.log(dp[maxLengthIdx].length);
console.log(dp[maxLengthIdx].join(" "));
