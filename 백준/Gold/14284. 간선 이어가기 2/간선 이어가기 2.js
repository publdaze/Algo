const fs = require("fs");
const numberList = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const [start, end] = numberList.pop();
const [V, E] = numberList.shift();
const graph = Array.from({ length: V + 1 }, () => []);

const setGraph = () => {
  numberList.forEach(([src, dst, cost]) => {
    graph[src].push({ node: dst, cost });
    graph[dst].push({ node: src, cost });
  });
};

const dijkstra = () => {
  const distance = Array(V + 1).fill(Infinity);
  distance[start] = 0;

  const pq = [start];

  while (pq.length > 0) {
    pq.sort((a, b) => distance[b] - distance[a]);
    const src = pq.pop();

    for (const { node: dst, cost } of graph[src]) {
      if (distance[dst] === Infinity) {
        pq.push(dst);
      }

      distance[dst] = Math.min(distance[dst], distance[src] + cost);
    }
  }

  return distance[end];
};

setGraph();
console.log(dijkstra());
