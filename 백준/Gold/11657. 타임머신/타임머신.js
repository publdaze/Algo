const fs = require("fs");
const numberList = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const [cityCnt, busCnt] = numberList.shift();

const getGraph = () => {
  const graph = Array.from({ length: cityCnt + 1 }, () => []);
  numberList.forEach(([src, dst, cost]) => {
    graph[src].push({ dst, cost });
  });
  return graph;
};

const checkNegativeCycle = (graph, distance) => {
  for (let src = 1; src < cityCnt + 1; src++) {
    if (distance[src] === Infinity) continue;
    for (const { dst, cost } of graph[src]) {
      if (distance[dst] > distance[src] + cost) return true;
    }
  }
  return false;
};

const bellmanFold = (graph) => {
  const distance = Array(cityCnt + 1).fill(Infinity);
  distance[1] = 0;

  for (let edge = 1; edge < cityCnt; edge++) {
    for (let src = 1; src < cityCnt + 1; src++) {
      if (distance[src] === Infinity) continue;
      for (const { dst, cost } of graph[src]) {
        distance[dst] = Math.min(distance[dst], distance[src] + cost);
      }
    }
  }

  return distance;
};

const graph = getGraph();
const distance = bellmanFold(graph);

console.log(
  checkNegativeCycle(graph, distance)
    ? "-1"
    : distance
        .slice(2)
        .map((num) => (num === Infinity ? -1 : num))
        .join("\n")
);