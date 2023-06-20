const fs = require("fs");
const numberStrList = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ");

const confirmNumber =
  numberStrList.reduce((prev, curr) => {
    return prev + Math.pow(curr, 2);
  }, 0) % 10;

console.log(confirmNumber);
