const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const floydWarshall = (linked) => {
  const distance = Array.from({ length: N + 1 }, (_, i) =>
    Array.from({ length: N + 1 }, (_, j) => (i === j ? 0 : Infinity))
  );
  updateDistance(distance, linked);

  for (let k = 1; k <= N; k++) {
    for (let i = 1; i <= N; i++) {
      for (let j = 1; j <= N; j++) {
        if (i === j) continue;
        distance[i][j] = Math.min(distance[i][j], distance[i][k] + distance[k][j]);
      }
    }
  }

  return distance;
};

const [N] = input.shift();
input.shift();

const updateDistance = (distance, linked) => {
  linked.forEach(([src, dst, cost]) => {
    distance[src][dst] = Math.min(distance[src][dst], cost);
  });
};

console.log(
  floydWarshall(input)
    .slice(1)
    .map((line) =>
      line
        .slice(1)
        .map((cost) => (cost === Infinity ? 0 : cost))
        .join(" ")
    )
    .join("\n")
);
