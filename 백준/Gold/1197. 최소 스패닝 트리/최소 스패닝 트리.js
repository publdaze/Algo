const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

function find(parent, x) {
  return parent[x] === x ? x : find(parent, parent[x]);
}

function union(parent, src, dst) {
  const root1 = find(parent, src);
  const root2 = find(parent, dst);

  if (root1 < root2) {
    parent[root2] = root1;
  } else {
    parent[root1] = root2;
  }
}

function isCycle(parent, a, b) {
  return find(parent, a) === find(parent, b);
}

function solution(n, costs) {
  costs.sort((a, b) => a[2] - b[2]);
  const parent = Array.from({ length: n }, (_, i) => i);

  let totalCost = 0;
  for (const [src, dst, cost] of costs) {
    if (isCycle(parent, src, dst)) continue;
    union(parent, src, dst);
    totalCost += cost;
  }
  return totalCost;
}

const [V, E] = input.shift();

console.log(solution(V, input));
