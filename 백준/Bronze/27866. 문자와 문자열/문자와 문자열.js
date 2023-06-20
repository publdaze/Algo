const fs = require("fs");
const [word, i] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

console.log(word[i - 1]);
