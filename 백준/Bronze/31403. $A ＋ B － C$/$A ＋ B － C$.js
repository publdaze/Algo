const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" "));

const [a, b, c] = input;

console.log(+a + +b - +c);
console.log(a + b - +c);
