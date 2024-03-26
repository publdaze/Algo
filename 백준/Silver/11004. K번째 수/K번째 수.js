const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input.at(0).split(" ").map(Number);
const numbers = input
  .at(1)
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

console.log(numbers[K - 1]);
