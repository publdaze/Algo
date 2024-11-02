const fs = require("fs");
const number = Number(
  fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
);

console.log("long ".repeat(number / 4) + "int");
