const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n")
  .map(Number);

const maxNum = Math.max(...input);
const maxNumIdx = input.indexOf(maxNum) + 1;
console.log(`${maxNum}\n${maxNumIdx}`);
