const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));
input.pop();

const floydWarshall = (n, edges) => {
  const distances = Array.from({ length: n + 1 }, (_, i) =>
    Array.from({ length: n + 1 }, (_, j) => (i === j ? 0 : Number.POSITIVE_INFINITY))
  );

  edges.forEach(([src, dst]) => {
    distances[src][dst] = 1;
    distances[dst][src] = 1;
  });

  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (i === j) continue;
        distances[i][j] = Math.min(distances[i][j], distances[i][k] + distances[k][j]);
      }
    }
  }

  const scores = distances.slice(1).map((distance) => Math.max(...distance.filter((dist) => dist !== Infinity)));
  const minScore = Math.min(...scores);
  const candidate = scores
    .map((score, i) => ({
      i,
      score,
    }))
    .filter(({ score }) => score === minScore);

  return `${minScore} ${candidate.length}\n${candidate.map(({ i }) => i + 1).join(" ")}`;
};

const [n] = input.shift();
console.log(floydWarshall(n, input));
