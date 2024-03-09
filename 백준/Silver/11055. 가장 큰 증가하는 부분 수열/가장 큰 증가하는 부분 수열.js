const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

//REVIEW - 5 1 8 2 3 9 본인보다 바로 앞의 작은 수가 가장 최대가 아닌 경우
//TODO - 합이 가장 큰 증가하는 부분 수열

const N = Number(input.at(0));
const A = input.at(1).split(" ").map(Number);
const dp = [];

for (let i = 0; i < N; i++) {
  dp[i] = A[i];

  const smaller = [];
  for (let j = i - 1; j >= 0; j--) {
    if (A[j] < A[i]) {
      smaller.push(dp[j]);
    }
  }

  if (smaller.length > 0) {
    dp[i] += Math.max(...smaller);
  }
}

console.log(Math.max(...dp));

/* 본인보다 바로 앞의 작은 수 많나면 바로 탈출 -> 틀렸습니다.
for (let i = 0; i < N; i++) {
  dp[i] = A[i];
  for (let j = i - 1; j >= 0; j--) {
    if (A[j] < A[i]) {
      dp[i] += dp[j];
      break;
    }
  }
}
console.log(dp);
console.log(Math.max(...dp));
 */
