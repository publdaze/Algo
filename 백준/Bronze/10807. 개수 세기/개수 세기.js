const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const solve = () => {
  const numbers = input[1].split(" ");
  const findNum = input[2];
  const cntNum = numbers.filter((element) => element === findNum).length;

  return cntNum;
};

console.log(solve());
