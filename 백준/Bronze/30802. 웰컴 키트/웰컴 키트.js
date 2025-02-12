const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map((str) => Number(str)));

const [[people], sizes, [t, p]] = input;

console.log(sizes.reduce((acc, curr) => acc + Math.ceil(curr / t), 0));
console.log(Math.floor(people / p), people % p);
