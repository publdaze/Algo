const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ");

console.log(input.reduce((acc, str) => acc + BigInt(str), BigInt(0)).toString());
