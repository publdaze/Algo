const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .at(1)
  .split(" ")
  .map(Number);

console.log(
  input
    .sort((a, b) => a - b)
    .reduce((acc, curr) => [...acc, acc.at(-1) ? acc.at(-1) + curr : curr], [])
    .reduce((acc, curr) => acc + curr, 0)
);
