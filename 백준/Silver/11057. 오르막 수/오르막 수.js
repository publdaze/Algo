const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const N = Number(input);

const MOD = 10007;

// 끝 자리수가 0,1,2,3,4,5,6,7,8,9인 경우의 수
const endDigitCnt = Array.from({ length: N + 1 }, () => []);
endDigitCnt[1] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

for (let i = 2; i <= N; i++) {
  for (let j = 0; j <= 9; j++) {
    for (let k = j; k <= 9; k++) {
      endDigitCnt[i][j] = endDigitCnt[i][j] ? (endDigitCnt[i][j] + endDigitCnt[i - 1][k]) % MOD : endDigitCnt[i - 1][k];
    }
  }
}

console.log(endDigitCnt[N].reduce((acc, prev) => (acc + prev) % MOD, 0) % MOD);
