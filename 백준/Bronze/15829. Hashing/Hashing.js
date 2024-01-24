const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [, str] = input;

let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let pow = 1;
console.log(
  str
    .split("")
    .map((c) => alphabet.indexOf(c) + 1)
    .reduce((acc, a) => {
      const calc = acc + ((a * pow) % 1234567891);
      pow = (pow * 31) % 1234567891;
      return calc;
    }, 0) % 1234567891
);
