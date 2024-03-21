const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .at(1)
  .split(" ")
  .map(Number);

//TODO - 가장 큰 함
//NOTE - 연속된 수

let prevMaxSum = -100000000;

for (let i = 1; i < input.length; i++) {
  input[i] = Math.max(input[i - 1] + input[i], input[i]);
  if (input[i - 1] > input[i]) prevMaxSum = Math.max(prevMaxSum, input[i - 1]);
}

console.log(Math.max(input.at(-1), prevMaxSum));
