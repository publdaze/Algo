const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const solve = () => {
  const sum = input[1].split("").reduce((prev, curr) => {
    return prev + +curr;
  }, 0);

  console.log(sum);
};

solve();
