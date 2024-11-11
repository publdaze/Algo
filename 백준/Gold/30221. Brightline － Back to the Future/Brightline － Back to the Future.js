const fs = require("fs");
const numberList = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" "));

const [N, E] = numberList.shift().map(Number);

const bellmanFold = (start) => {
  const distance = Array(N + 1).fill(Infinity);
  distance[start] = 0;

  for (let e = 1; e < N; e++) {
    for (const [src, dst, color, cost] of numberList) {
      if (distance[src] === Infinity) continue;
      const newDist = distance[src] + (color === "r" ? -1 : 1) * cost;
      if (newDist < distance[dst]) {
        distance[dst] = newDist;
      }
    }
  }

  return distance;
};

console.log(
  bellmanFold(1)
    .map((v, i) => (v < 0 ? i : false))
    .filter(Boolean)
    .join("\n")
);