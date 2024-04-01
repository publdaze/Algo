const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ");

const [A, B, C, D] = input;

console.log(Number(A + B) + Number(C + D));
