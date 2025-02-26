const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const [N, , target] = input.shift();

const go = Array(N + 1).fill(Infinity);
const come = Array(N + 1).fill(Infinity);
go[target] = 0;
come[target] = 0;

for (let i = 0; i < N - 1; i++) {
  for (const [src, dst, cost] of input) {
    go[dst] = Math.min(go[dst], go[src] + cost);
    come[src] = Math.min(come[src], come[dst] + cost);
  }
}

console.log(Math.max(...go.map((num, i) => num + come[i], 0).filter((num) => num !== Infinity)));
