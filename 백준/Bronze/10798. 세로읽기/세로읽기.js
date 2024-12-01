const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let result = "";
for (let i = 0; i < 15; i++) {
  result += input.map((str) => str[i] ?? "").join("");
}
console.log(result);
