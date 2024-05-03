const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

//REVIEW - 풀이 방법

const n = input.shift().at(0);
const graph = Array.from({ length: n + 1 }, () => []);
const visited = Array.from({ length: n + 1 }, () => false);
let maxDistance = 0;
let maxNode;

const setGraph = () => {
  input.forEach(([src, dst, cost]) => {
    graph[src].push([dst, cost]);
    graph[dst].push([src, cost]);
  });
};

const dfs = (src, accCost) => {
  if (visited[src]) return;
  if (accCost > maxDistance) {
    maxDistance = accCost;
    maxNode = src;
  }

  visited[src] = true;
  graph[src].forEach(([dst, cost]) => {
    dfs(dst, accCost + cost);
  });
  visited[src] = false;
};

if (n === 1) console.log(0);
else {
  setGraph();
  dfs(1, 0);
  dfs(maxNode, 0);
  console.log(maxDistance);
}
