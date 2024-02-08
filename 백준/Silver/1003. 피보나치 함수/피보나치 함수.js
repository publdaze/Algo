const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1);

const zeroAndOne = [
  [1, 0],
  [0, 1],
];

for (let i = 2; i <= 40; i++) {
  zeroAndOne[i] = zeroAndOne[i - 2].map((value, index) => value + zeroAndOne[i - 1][index]);
}

console.log(input.map((value) => zeroAndOne[value].join(" ")).join("\n"));
