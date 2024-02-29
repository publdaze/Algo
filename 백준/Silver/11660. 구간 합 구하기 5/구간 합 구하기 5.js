const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const [N, M] = input.shift();
const table = Array.from({ length: N }, () => []);
const result = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    table[i].push((j === 0 ? 0 : table[i].at(-1)) + input[i][j]);
  }
}

for (let i = N; i < N + M; i++) {
  const [beginX, beginY, endX, endY] = input[i];
  let lineSum = 0;
  for (let j = beginX - 1; j < endX; j++) {
    lineSum += table[j][endY - 1] - (beginY - 2 >= 0 ? table[j][beginY - 2] : 0);
  }

  result.push(lineSum);
}
console.log(result.join("\n"));
