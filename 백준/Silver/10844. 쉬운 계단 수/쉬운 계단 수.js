const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

//REVIEW - 계속 범위가 늘어나는 것 같으면 한정된 범위로 줄여서 생각해보기
//TODO - 길이가 N인 계단 수
//NOTE - 모든 자리 차이가 1인 수

const N = Number(input);

// 끝 자리수가 0,1,2,3,4,5,6,7,8,9인 경우의 수
const endDigitCnt = Array.from({ length: N + 1 }, () => []);
endDigitCnt[1] = [0n, 1n, 1n, 1n, 1n, 1n, 1n, 1n, 1n, 1n];

for (let i = 2; i <= N; i++) {
  endDigitCnt[i][0] = endDigitCnt[i - 1][1];

  for (let j = 1; j <= 8; j++) {
    endDigitCnt[i][j] = endDigitCnt[i - 1][j - 1] + endDigitCnt[i - 1][j + 1];
  }

  endDigitCnt[i][9] = endDigitCnt[i - 1][8];
}

console.log((endDigitCnt[N].reduce((acc, prev) => (acc + prev) % 1000000000n, 0n) % 1000000000n).toString());
