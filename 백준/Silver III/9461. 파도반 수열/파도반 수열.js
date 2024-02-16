const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map(Number);

//TODO - 나선형 삼각형 N번째 변 길이

const P = [1, 1, 1, 2, 2, 3, 4, 5, 7, 9];

for (let i = 10; i <= 100; i++) {
  P[i] = P[i - 5] + P[i - 1];
}

console.log(input.map((N) => P[N - 1]).join("\n"));
