const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const [N, M] = input.shift();
const numbers = input.at(0).sort((a, b) => a - b);
const visited = Array.from({ length: numbers.length }, () => 0);

const result = new Set();
const picked = [];
const pick = (n, toPick) => {
  if (toPick === 0) {
    result.add(picked.join(" "));
    return;
  }

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    visited[i] = 1;
    picked.push(numbers[i]);
    pick(n, toPick - 1);
    picked.pop();
    visited[i] = 0;
  }
};

pick(N, M);

console.log([...result].join("\n"));
