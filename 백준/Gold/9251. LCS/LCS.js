const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

//REVIEW https://loosie.tistory.com/379

const firstStr = input[0];
const secondStr = input[1];

const dp = Array.from({ length: firstStr.length + 1 }, () => Array.from({ length: secondStr.length + 1 }, () => 0));

for (let i = 1; i <= firstStr.length; i++) {
  for (let j = 1; j <= secondStr.length; j++) {
    if (firstStr[i - 1] === secondStr[j - 1]) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
}

console.log(dp[firstStr.length][secondStr.length]);
