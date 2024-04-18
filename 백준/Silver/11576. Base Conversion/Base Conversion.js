const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const [A, B] = input.at(0);
const numbers = input.at(2);

console.log(
  Number.parseInt(numbers.map((number) => number.toString(A)).join(""), A)
    .toString(B)
    .split("")
    .map((num) => Number.parseInt(num, B).toString(10))
    .join(" ")
);
