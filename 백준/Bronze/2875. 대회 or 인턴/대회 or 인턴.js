const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

//ANCHOR - 남학생 기준 - (전체 명수 - (남학생 - n) * 3 >= k) && 여학생 >= (남학생 - n) * 2

const [N, M, K] = input;
const allPeopleCnt = N + M;

let i = 0;
while (M >= i) {
  if (allPeopleCnt - (M - i) * 3 >= K && N >= (M - i) * 2) break;
  i++;
}

console.log(M - i);
