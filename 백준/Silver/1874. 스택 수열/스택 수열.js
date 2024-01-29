const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map(Number);

const stack = [];

const solve = () => {
  const result = [];
  let i = 1;
  for (num of input) {
    for (; i <= num; i++) {
      stack.push(i);
      result.push("+");
    }
    if (stack.length === 0 || stack.at(-1) < num) return ["NO"];

    while (num <= stack.at(-1)) {
      stack.pop();
      result.push("-");
    }
  }

  return result;
};

console.log(solve().join("\n"));
