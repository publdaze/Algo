const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

//TODO - 테트로미노 하나 놓아서 최대값되는 경우
const DIRECTION = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const [N, M] = input.shift();

const outRange = (row, col) => {
  return row < 0 || col < 0 || row >= N || col >= M;
};

let maxSum = 0;
const dfs = (board, row, col, blockCnt, sum, visited) => {
  if (outRange(row, col) || visited[row][col]) return;
  if (blockCnt === 4) {
    maxSum = Math.max(maxSum, sum + board[row][col]);
    return;
  }
  if (blockCnt === 3) {
    if (visited[row - 1]?.[col] && visited[row - 2]?.[col]) {
      maxSum = Math.max(
        maxSum,
        sum + board[row][col] + board[row - 1][col - 1] || 0,
        sum + board[row][col] + board[row - 1][col + 1] || 0
      );
    }
    if (visited[row][col - 1] && visited[row][col - 2]) {
      maxSum = Math.max(
        maxSum,
        sum + board[row][col] + board[row - 1]?.[col - 1] || 0,
        sum + board[row][col] + board[row + 1]?.[col - 1] || 0
      );
    }
  }

  visited[row][col] = true;
  for (let [dr, dc] of DIRECTION) {
    dfs(board, row + dr, col + dc, blockCnt + 1, sum + board[row][col], visited);
  }
  visited[row][col] = false;
};

const visited = Array.from({ length: N }, () => Array(M).fill(false));

for (let row = 0; row < N; row++) {
  for (let col = 0; col < M; col++) {
    dfs(input, row, col, 1, 0, visited);
  }
}

console.log(maxSum);
