const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const [V] = input.shift();
const graph = Array.from({ length: V + 1 }, () => []);
const visited = Array.from({ length: V + 1 }, () => false);

const setGraph = () => {
  input.forEach(([src, ...rest]) => {
    for (let i = 0; i < rest.length - 1; i += 2) {
      graph[src].push({ dst: rest[i], cost: rest[i + 1] });
    }
  });
};

let maxCost = 0;
let maxPoint = 0;

const findLongestToPoint = (v) => {
  dfs(v, 0);
};

const dfs = (v, totalCost) => {
  if (totalCost > maxCost) {
    maxCost = totalCost;
    maxPoint = v;
  }

  visited[v] = true;
  for (const { dst, cost } of graph[v]) {
    if (visited[dst] === true) continue;
    dfs(dst, totalCost + cost);
  }
  visited[v] = false;
};

setGraph();
findLongestToPoint(1);
maxCost = 0;
findLongestToPoint(maxPoint);
console.log(maxCost);
