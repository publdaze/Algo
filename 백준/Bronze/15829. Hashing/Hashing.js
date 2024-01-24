const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [, str] = input;

let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
console.log(
  str
    .split("")
    .map((c) => alphabet.indexOf(c) + 1)
    .reduce((acc, a, i) => {
      return acc + a * 31 ** i;
    }, 0) % 1234567891
);
