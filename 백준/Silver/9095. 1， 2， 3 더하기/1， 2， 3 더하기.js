const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map(Number);

const sumCnt = [0, 1, 2, 4];

for (let i = 4; i <= 11; i++) {
  sumCnt[i] = sumCnt[i - 1] + sumCnt[i - 2] + sumCnt[i - 3];
}

input.forEach((n) => console.log(sumCnt[n]));
