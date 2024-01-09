const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

console.log(
  input
    .split(" ")
    .map(Number)
    .reduce((acc, curr) => acc + curr, 0)
);
