const fs = require("fs");
const numberList = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M, V] = numberList.shift().split(" ").map(Number);

const graph = Array.from({ length: N + 1 }, () => []);
const visitedDfs = Array.from({ length: N + 1 }, () => 0);
const visitedBfs = Array.from({ length: N + 1 }, () => 0);
const dfsSequence = [];
const bfsSequence = [];

numberList.forEach((pair) => {
  const [src, dst] = pair.split(" ").map(Number);
  graph[src].push(dst);
  graph[dst].push(src);
});

const dfs = (current) => {
  visitedDfs[current] = true;

  dfsSequence.push(current);

  graph[current]
    .sort((a, b) => a - b)
    .forEach((dst) => {
      if (visitedDfs[dst] === 0) {
        dfs(dst);
      }
    });
};

const bfs = (start) => {
  const queue = [start];
  visitedBfs[start] = 1;

  while (queue.length > 0) {
    const src = queue.shift();
    bfsSequence.push(src);

    graph[src]
      .sort((a, b) => a - b)
      .forEach((dst) => {
        if (visitedBfs[dst] === 0) {
          queue.push(dst);
          visitedBfs[dst] = 1;
        }
      });
  }
};

dfs(V);
bfs(V);

console.log(dfsSequence.join(" "));
console.log(bfsSequence.join(" "));
