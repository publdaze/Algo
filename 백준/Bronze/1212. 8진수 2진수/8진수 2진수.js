const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

let result = "";
for (let i = 0; i < input.length; i++) {
  const bin = Number(input[i]).toString(2);
  if (i === 0) result += bin;
  else result += bin.padStart(3, "0");
}

console.log(result);
