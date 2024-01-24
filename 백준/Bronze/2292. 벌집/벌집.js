const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const N = Number(input);

const solve = () => {
  if (N === 1) return 1;

  let i = 0;
  let j = 1;
  while (N >= 6 * i + 2) {
    i += j;
    j += 1;
  }

  return j;
};

console.log(solve());
