const fs = require("fs");
const numberList = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const [V, E, shortestDistance, startCity] = numberList.shift();

function setGraph() {
  const graph = Array.from({ length: V + 1 }, () => []);
  for (const [src, dst] of numberList) {
    graph[src].push(dst);
  }
  return graph;
}

function bfs(graph) {
  const visited = Array(V + 1).fill(false);
  const queue = [[startCity, 0]];
  visited[startCity] = true;

  const shortestDistanceCities = [];
  while (queue.length > 0) {
    const [src, distance] = queue.shift();
    if (distance === shortestDistance) {
      shortestDistanceCities.push(src);
      continue;
    }

    for (const dst of graph[src]) {
      if (visited[dst]) continue;

      visited[dst] = true;
      queue.push([dst, distance + 1]);
    }
  }
  return shortestDistanceCities.length > 0 ? shortestDistanceCities.sort((a, b) => a - b).join("\n") : -1;
}

// 최단 거리가 K인 모든 도시의 번호
function solution() {
  const graph = setGraph();
  return bfs(graph);
}

console.log(solution());
