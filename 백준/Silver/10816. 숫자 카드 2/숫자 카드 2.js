const fs = require("fs");
const inputStrings = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [, N, , M] = inputStrings;
const dic = {};

N.split(" ").forEach((n) => {
  dic[n] = dic[n] ? dic[n] + 1 : 1;
});

console.log(
  M.split(" ")
    .map((m) => dic[m] || 0)
    .join(" ")
);
