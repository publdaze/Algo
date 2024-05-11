// https://algospot.com/judge/problem/read/HELLOWORLD

const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = input.shift();

for (let i = 0; i < n; i++) {
  console.log(`Hello, ${input[i]}!`);
}
