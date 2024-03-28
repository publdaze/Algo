const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");

console.log(
  input
    .map(
      (string) =>
        [...string.matchAll(/[a-z]/g)].length +
        " " +
        [...string.matchAll(/[A-Z]/g)].length +
        " " +
        [...string.matchAll(/\d/g)].length +
        " " +
        [...string.matchAll(/\s/g)].length
    )
    .filter((cnts) => cnts !== "0 0 0 0")
    .join("\n")
);
