const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

//REVIEW
//TODO - 제곱수들의 합으로 표현할 때에 그 항의 최소개수

let N = Number(input);
const dp = Array.from({ length: N + 1 }, (v, i) => i);

for (let i = 4; i <= N; i++) {
  for (let j = 1; j * j <= i; j++) {
    dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
  }
}

console.log(dp[N]);

/* 틀렸습니다. 41 -> 2(16 + 25 = 4 * 4 + 5 * 5)
let n = Number(input);
let cnt = 0;
while (n > 0) {
  cnt += 1;
  n = n - Math.pow(Math.floor(Math.sqrt(n)), 2);
}

console.log(cnt);
 */
