const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const [TC] = input.at(0);
let currentLine = 1;

const getGraph = (roadCount, wormholeCount, currentLine) => {
  const roadInfo = input.slice(currentLine, currentLine + roadCount);
  const roadInfoReversed = roadInfo.map(([roadStart, roadEnd, roadTime]) => [roadEnd, roadStart, roadTime]);
  const wormholeInfo = input
    .slice(currentLine + roadCount, currentLine + roadCount + wormholeCount)
    .map(([wormholeStart, wormholeEnd, wormholeTime]) => [wormholeStart, wormholeEnd, -wormholeTime]);

  return [...roadInfo, ...roadInfoReversed, ...wormholeInfo];
};

const calculateDistance = (distance, graph, N) => {
  const copyDistance = distance.slice();

  for (const [src, dst, cost] of graph) {
    copyDistance[dst] = Math.min(copyDistance[dst], copyDistance[src] + cost);
  }

  return copyDistance;
};

const bellmanford = (graph, N) => {
  let distance = Array(N + 1).fill(0);
  distance[1] = 0;

  for (let n = 0; n < N - 1; n++) {
    distance = calculateDistance(distance, graph, N);
  }

  return distance;
};

for (let tc = 1; tc <= TC; tc++) {
  const [stationCount, roadCount, wormholeCount] = input[currentLine];
  currentLine += 1;

  const times = Array(stationCount + 1).fill(Infinity);
  times[1] = 0;

  const graph = getGraph(roadCount, wormholeCount, currentLine);

  const distance = bellmanford(graph, stationCount);

  console.log(
    JSON.stringify(distance) === JSON.stringify(calculateDistance(distance, graph, stationCount)) ? "NO" : "YES"
  );

  currentLine += roadCount + wormholeCount;
}
