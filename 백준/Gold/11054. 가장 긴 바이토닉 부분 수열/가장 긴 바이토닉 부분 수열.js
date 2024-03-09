const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

//REVIEW

const N = Number(input.at(0));
const A = input.at(1).split(" ").map(Number);
const smallerDp = Array.from({ length: N }, () => 1);
const biggerDp = Array.from({ length: N }, () => 1);
const dp = Array.from({ length: N });

for (let i = 0; i < N; i++) {
  const smaller = [];
  for (let j = 0; j < i; j++) {
    if (A[j] < A[i]) {
      smaller.push(smallerDp[j]);
    }
  }

  if (smaller.length > 0) {
    smallerDp[i] += Math.max(...smaller);
  }
}

for (let i = N - 1; i >= 0; i--) {
  const bigger = [];
  for (let j = i + 1; j < N; j++) {
    if (A[j] < A[i]) {
      bigger.push(biggerDp[j]);
    }
  }

  if (bigger.length > 0) {
    biggerDp[i] += Math.max(...bigger);
  }
}

for (let i = 0; i < N; i++) {
  dp[i] = smallerDp[i] + biggerDp[i];
}

console.log(Math.max(...dp) - 1);
