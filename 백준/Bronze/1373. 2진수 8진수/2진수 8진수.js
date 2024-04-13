const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

let octal = "";

let startIdx = input.length;
while (startIdx > 0) {
  octal = Number.parseInt(input.substring(startIdx - 3, startIdx), 2) + octal;
  startIdx -= 3;
}
console.log(octal);
