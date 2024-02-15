const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

let n = Number(input);
const squareNumberCnts = Array.from({ length: n + 1 }, () => 0);

for (let i = 1; i < squareNumberCnts.length; i++) {
  const closest = Math.floor(Math.sqrt(i));
  let min = n;
  for (let j = 1; j <= closest; j++) {
    min = Math.min(min, squareNumberCnts[i - j ** 2]);
  }
  squareNumberCnts[i] = min + 1;
}

console.log(squareNumberCnts[n]);
