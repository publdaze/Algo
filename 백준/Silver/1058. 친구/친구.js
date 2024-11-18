const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

function floydWarshall(graph) {
  const n = graph.length;
  const distance = Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) => (i === j ? 0 : graph[i][j] === "N" ? Infinity : 1))
  );

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (distance[i][k] + distance[k][j] < distance[i][j]) {
          distance[i][j] = distance[i][k] + distance[k][j];
        }
      }
    }
  }

  return distance;
}

console.log(
  Math.max(
    ...floydWarshall(input.slice(1)).map(
      (currNodeDistance) => currNodeDistance.filter((distance) => distance > 0 && distance <= 2).length
    )
  )
);
