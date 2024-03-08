const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const N = Number(input);

// 끝 자리수가 0,1인 경우의 수
const endDigitCnt = Array.from({ length: N + 1 }, () => []);
endDigitCnt[1] = [0n, 1n];

for (let i = 2; i <= N; i++) {
  endDigitCnt[i][0] = endDigitCnt[i - 1][0] + endDigitCnt[i - 1][1];
  endDigitCnt[i][1] = endDigitCnt[i - 1][0];
}

console.log(endDigitCnt[N].reduce((acc, prev) => acc + prev, 0n).toString());
