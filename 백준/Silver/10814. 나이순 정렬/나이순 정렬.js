const fs = require("fs");
const inputStrings = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1);

inputStrings.sort((a, b) => a.split(" ")[0] - b.split(" ")[0]);
console.log(inputStrings.join("\n"));
