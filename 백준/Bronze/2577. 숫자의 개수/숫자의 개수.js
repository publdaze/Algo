const fs = require("fs");
const numberList = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const mul = numberList.reduce((prev, curr) => prev * curr, 1);
const result = Array(10).fill(0);

for (digit of String(mul)) {
  result[digit] += 1;
}

console.log(result.join("\n"));
