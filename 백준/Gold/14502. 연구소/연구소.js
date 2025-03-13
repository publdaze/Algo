const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

// 바이러스 막기 -> 벽 세우기 (필수 3개 세우기)
// 바이러스 상하좌우 이동 가능
// 0은 빈 칸, 1은 벽, 2는 바이러스(개수 2보다 크거나 같고, 10보다 작거나 같은)
// 바이러스가 퍼질 수 없는 곳을 안전 영역
// "안전 영역의 최대값 구하기"
// 막으려면 1에 연결되어 벽을 세워야 함
// 벽을 세우는 경우의 수가 최대 64C3이므로 모든 경우에 대해서 체크해봐도 괜찮을 듯

const EMPTY = 0;
const WALL = 1;
const VIRUS = 2;

const DIRECTION = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];

const [N, M] = input.shift();

const getBuiltWallMap = ([rowA, colA], [rowB, colB], [rowC, colC]) => {
  // 함수는 어떤 순서로 작성해야 할까?
  const copy = JSON.parse(JSON.stringify(input));
  copy[rowA][colA] = 1;
  copy[rowB][colB] = 1;
  copy[rowC][colC] = 1;
  return copy;
};

const isWall = (cell) => {
  return cell === WALL;
};

const isVirus = (cell) => {
  return cell === VIRUS;
};

const outOfRange = (row, col) => {
  return row < 0 || row >= N || col < 0 || col >= M;
};

const dfs = (graph, startRow, startCol) => {
  const stack = [[startRow, startCol]];

  while (stack.length > 0) {
    const [row, col] = stack.pop();
    for (let [dr, dc] of DIRECTION) {
      const [nr, nc] = [row + dr, col + dc];
      if (outOfRange(nr, nc) || isWall(graph[nr][nc]) || isVirus(graph[nr][nc])) continue;
      graph[nr][nc] = VIRUS;
      stack.push([nr, nc]);
    }
  }
};

const setVirusArea = (map, virusRow, virusCol) => {
  dfs(map, virusRow, virusCol);
};

const checkSafeArea = (map, viruses) => {
  for (let [virusRow, virusCol] of viruses) {
    setVirusArea(map, virusRow, virusCol);
  }
  return map.flat().filter((cell) => cell === EMPTY).length;
};

const getCoordinate = (num, col) => {
  return [Math.floor(num / col), num % col];
};

const builtWallMap = [];

for (let i = 0; i < N * M - 2; i++) {
  const [rowA, colA] = getCoordinate(i, M);
  if (isWall(input[rowA][colA]) || isVirus(input[rowA][colA])) continue;
  for (let j = i + 1; j < N * M - 1; j++) {
    const [rowB, colB] = getCoordinate(j, M);
    if (isWall(input[rowB][colB]) || isVirus(input[rowB][colB])) continue;

    for (let k = j + 1; k < N * M; k++) {
      const [rowC, colC] = getCoordinate(k, M);
      if (isWall(input[rowC][colC]) || isVirus(input[rowC][colC])) continue;

      builtWallMap.push(getBuiltWallMap([rowA, colA], [rowB, colB], [rowC, colC]));
    }
  }
}

const viruses = [];
input.forEach((row, i) =>
  row.forEach((cell, j) => {
    if (isVirus(cell)) viruses.push([i, j]);
  })
);

let maxSafeArea = 0;
for (let map of builtWallMap) {
  maxSafeArea = Math.max(maxSafeArea, checkSafeArea(map, viruses));
}
console.log(maxSafeArea);
