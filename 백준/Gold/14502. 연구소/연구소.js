const fs = require("fs");
const rawInput = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

/* 셀 상태 상수 */
const EMPTY = 0;
const WALL = 1;
const VIRUS = 2;

/* 이동 방향 (상하좌우) */
const DIRECTION = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];

/* 유틸리티 함수 */
const isWall = (cell) => cell === WALL;
const isVirus = (cell) => cell === VIRUS;
const outOfRange = (row, col, N, M) => row < 0 || row >= N || col < 0 || col >= M;
const indexToCoordinate = (index, cols) => [Math.floor(index / cols), index % cols];
const deepCopy = (grid) => JSON.parse(JSON.stringify(grid));

/* 벽 배치를 적용하여 새로운 맵을 생성 */
const createWallConfiguration = (grid, wallCoords) => {
  const newGrid = deepCopy(grid);
  for (const [row, col] of wallCoords) {
    newGrid[row][col] = WALL;
  }
  return newGrid;
};

/* DFS로 바이러스를 확산시킴 */
const spreadVirusDFS = (grid, startRow, startCol, N, M) => {
  const stack = [[startRow, startCol]];
  while (stack.length) {
    const [row, col] = stack.pop();
    for (const [dr, dc] of DIRECTION) {
      const nr = row + dr;
      const nc = col + dc;
      if (outOfRange(nr, nc, N, M)) continue;
      if (isWall(grid[nr][nc]) || isVirus(grid[nr][nc])) continue;
      grid[nr][nc] = VIRUS;
      stack.push([nr, nc]);
    }
  }
};

/* 바이러스 확산 후 안전 영역(빈 칸 수) 평가 */
const evaluateSafeArea = (grid, virusPositions, N, M) => {
  const simulationGrid = deepCopy(grid);
  for (const [row, col] of virusPositions) {
    spreadVirusDFS(simulationGrid, row, col, N, M);
  }
  let safeCount = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (simulationGrid[i][j] === EMPTY) safeCount++;
    }
  }
  return safeCount;
};

/* 빈 칸에서 3개 벽 배치 후보 조합 생성 */
const generateCandidateConfigurations = (grid, N, M) => {
  const candidates = [];
  const totalCells = N * M;
  for (let i = 0; i < totalCells - 2; i++) {
    const [rowA, colA] = indexToCoordinate(i, M);
    if (grid[rowA][colA] !== EMPTY) continue;
    for (let j = i + 1; j < totalCells - 1; j++) {
      const [rowB, colB] = indexToCoordinate(j, M);
      if (grid[rowB][colB] !== EMPTY) continue;
      for (let k = j + 1; k < totalCells; k++) {
        const [rowC, colC] = indexToCoordinate(k, M);
        if (grid[rowC][colC] !== EMPTY) continue;
        candidates.push([[rowA, colA], [rowB, colB], [rowC, colC]]);
      }
    }
  }
  return candidates;
};

const solve = () => {
  const [N, M] = rawInput.shift();
  const grid = rawInput;

  // 바이러스 위치 수집 (바이러스 확산 시뮬레이션에 필요)
  const virusPositions = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (grid[i][j] === VIRUS) {
        virusPositions.push([i, j]);
      }
    }
  }

  const candidateWalls = generateCandidateConfigurations(grid, N, M);
  let maxSafeArea = 0;
  for (const wallCoords of candidateWalls) {
    const wallMap = createWallConfiguration(grid, wallCoords);
    const safeArea = evaluateSafeArea(wallMap, virusPositions, N, M);
    maxSafeArea = Math.max(maxSafeArea, safeArea);
  }

  console.log(maxSafeArea);
};

solve();