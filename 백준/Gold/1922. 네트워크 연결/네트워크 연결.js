const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const [NODE_CNT] = input.shift();
const [EDGE_CNT] = input.shift();

const find = (parent, x) => {
  return parent[x] === x ? x : (parent[x] = find(parent, parent[x]));
};

const union = (parent, a, b) => {
  const root1 = find(parent, a);
  const root2 = find(parent, b);

  if (root1 === root2) return false;

  if (root1 < root2) {
    parent[root2] = root1;
  } else {
    parent[root1] = root2;
  }

  return true;
};

const solution = () => {
  input.sort((a, b) => a[2] - b[2]);
  const parent = Array.from({ length: NODE_CNT + 1 }, (_, i) => i);

  let totalCost = 0;
  for (const [src, dst, cost] of input) {
    if (!union(parent, src, dst)) continue;
    totalCost += cost;
  }
  return totalCost;
};

console.log(solution());
