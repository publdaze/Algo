const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const [N, M] = input.shift();

const find = (x, parent) => {
  return parent[x] === x ? x : (parent[x] = find(parent[x], parent));
};

const union = (a, b, parent) => {
  const root1 = find(a, parent);
  const root2 = find(b, parent);

  if (root1 === root2) return true;

  if (root1 < root2) {
    parent[root2] = root1;
  } else {
    parent[root1] = root2;
  }

  return false;
};

input.sort((a, b) => a[2] - b[2]);
const parent = Array.from({ length: N + 1 }, (_, i) => i);

let minCost = 0;
let maxCost = 0;
for (const [src, dst, cost] of input) {
  if (union(src, dst, parent)) continue;
  minCost += cost;
  maxCost = Math.max(maxCost, cost);
}
console.log(minCost - maxCost);
