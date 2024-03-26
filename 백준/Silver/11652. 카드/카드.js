const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map(BigInt);

const numBook = new Map();

input.forEach((num) => {
  numBook.has(num) ? numBook.set(num, numBook.get(num) + 1) : numBook.set(num, 1);
});

console.log(
  [...numBook]
    .sort((a, b) => b[1] - a[1] || (a[0] - b[0]).toString())
    .at(0)
    .at(0)
    .toString()
);
