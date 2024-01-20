const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const dp = [0, 1];

for (let i = 2; i <= 490; i++) {
  dp[i] = BigInt(dp[i - 2]) + BigInt(dp[i - 1]);
}

for (let i = 0; input[i] !== -1; i++) {
  const X = input[i];
  console.log(`Hour ${X}: ${dp[X].toString()} cow(s) affected`);
}
