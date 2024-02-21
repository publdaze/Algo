const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((value) => value.split(" ").map(Number));

let currEndPoint = 0;

console.log(
  input
    .sort((a, b) => a[1] - b[1] || a[0] - b[0])
    .filter(([start, end]) => {
      if (currEndPoint <= start) {
        currEndPoint = end;
        return true;
      }
    }).length
);
