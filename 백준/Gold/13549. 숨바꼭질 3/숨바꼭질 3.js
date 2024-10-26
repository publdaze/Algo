const fs = require("fs");
const [N, K] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const moves = (x) => [
  [x - 1, 1],
  [x + 1, 1],
  [x * 2, 0],
];

const dijkstra = () => {
  const dist = Array.from({ length: 100001 * 2 }, () => Infinity);
  dist[N] = 0;
  const queue = [N];

  while (queue.length > 0) {
    const src = queue.shift();

    for (const [dst, cost] of moves(src)) {
      if (dist[dst] === Infinity) queue.push(dst);
      dist[dst] = Math.min(dist[dst], dist[src] + cost);
    }
  }

  return dist[K];
};

console.log(dijkstra());