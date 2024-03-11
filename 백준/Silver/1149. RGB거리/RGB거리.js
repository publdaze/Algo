const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

//TODO - 모든 집을 칠하는 비용의 최솟값
//NOTE - N, N-1 번집 다른색

const N = Number(input.shift());
const costs = input.map((house) => house.split(" ").map(Number));
const dp = Array.from({ length: N }, () => Array.from({ length: 3 }, () => []));
dp[0] = costs.at(0).map((cost) => [cost]);

for (let i = 1; i < N; i++) {
  for (let color = 0; color < 3; color++) {
    for (let prevColor = 0; prevColor < 3; prevColor++) {
      if (color === prevColor) continue;
      dp[i][color].push(Math.min(...dp[i - 1][prevColor]) + costs[i][color]);
    }
  }
}

console.log(Math.min(...dp.at(-1).flat()));
