const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

// NOTE B -> BA, A -> B

let dp = [0, 1];

for (let i = 2; i <= Number(input); i++) {
  dp.push(dp[i - 2] + dp[i - 1]);
}

console.log(dp.at(-2), dp.at(-1));
