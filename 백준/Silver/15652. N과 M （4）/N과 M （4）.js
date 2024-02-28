const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [N, M] = input;
const result = [];

const picked = [];
const pick = (n, toPick) => {
  if (toPick === 0) {
    result.push(picked.join(" "));
    return;
  }

  let startNum = 1;
  if (picked.length !== 0) {
    startNum = picked.at(-1);
  }

  for (let i = startNum; i <= n; i++) {
    picked.push(i);
    pick(n, toPick - 1);
    picked.pop();
  }
};

pick(N, M);

console.log(result.join("\n"));
