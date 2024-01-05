const fs = require("fs");
const inputStrings = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(0, -1);

inputStrings.forEach((string) => {
  console.log(string === [...string].reverse().join("") ? "yes" : "no");
});
