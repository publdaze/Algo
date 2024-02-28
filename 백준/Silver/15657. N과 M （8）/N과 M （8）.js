const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const [N, M] = input.shift();
const numbers = input.at(0).sort((a, b) => a - b);

const result = [];
const picked = [];
const pick = (n, toPick) => {
  if (toPick === 0) {
    result.push(picked.join(" "));
    return;
  }

  let startNum = 0;
  if (picked.length !== 0) {
    startNum = numbers.findIndex((num) => num === picked.at(-1));
  }

  for (let i = startNum; i < n; i++) {
    picked.push(numbers[i]);
    pick(n, toPick - 1);
    picked.pop();
  }
};

pick(N, M);

console.log(result.join("\n"));
