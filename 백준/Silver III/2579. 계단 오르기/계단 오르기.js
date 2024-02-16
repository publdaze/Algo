const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

//REVIEW
//TODO - 여러 단계를 거친 최댓값 -> dp로 풀 수 있을 듯
//NOTE - 연속 세 개 안 됨
//ANCHOR - [i - 2] + i vs [i - 1] + i
//ANCHOR - 각 지점의 최댓값이어도 연속적으로 봤을 때 아닐 수 있음 -> 세가지 묶음 같이 고려하기

const stairCnt = input.shift();
const maxPoints = Array.from({ length: stairCnt }, () => 0);
maxPoints[0] = input[0];
maxPoints[1] = input[0] + input[1];
maxPoints[2] = Math.max(input[0] + input[2], input[1] + input[2]);

for (let i = 3; i < maxPoints.length; i++) {
  maxPoints[i] = Math.max(maxPoints[i - 2] + input[i], maxPoints[i - 3] + input[i - 1] + input[i]);
}

console.log(maxPoints.at(stairCnt - 1));
