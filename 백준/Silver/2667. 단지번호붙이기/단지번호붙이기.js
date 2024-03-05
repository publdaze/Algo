const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

//TODO - 전체 단지 수, 단지별 집 수 오름차순
//ANCHOR - 스택이 비었다 = 단지에 모든 집 탐색했다 / 지도에서 1을 찾는다 = 다음 단지 시작점 찾는다

const N = Number(input.shift());
const map = input.map((line) => [...line].map(Number));

const direction = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];

const bfs = (startPoint) => {
  let houseCnt = 1;

  const stack = [startPoint];
  map[startPoint[0]][startPoint[1]] = 0;

  while (stack.length > 0) {
    const [raw, col] = stack.pop();

    for (let [x, y] of direction) {
      if (raw + x < 0 || raw + x >= N || col + y < 0 || col + y >= N) continue;
      if (map[raw + x][col + y] !== 0) {
        houseCnt += 1;
        stack.push([raw + x, col + y]);
        map[raw + x][col + y] = 0;
      }
    }
  }

  return houseCnt;
};

const result = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 1) {
      result.push(bfs([i, j]));
    }
  }
}

console.log(result.length);
console.log(result.sort((a, b) => a - b).join("\n"));
