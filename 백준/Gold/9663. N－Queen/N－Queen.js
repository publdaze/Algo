// 각 행에 1개의 퀸만 가능하니 1차원 배열로 처리 가능
// 백트래킹으로 불필요한 탐색 제거

const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const N = Number(input);

const rows = Array(N).fill(-1);

let cnt = 0;

const isSafe = (row, col) => {
  for (let r = 0; r < row; r++) {
    if (rows[r] === col) return false;
    if (Math.abs(r - row) === Math.abs(rows[r] - col)) return false;
  }
  return true;
};

const dfs = (row) => {
  if (row === N) {
    cnt += 1;
  }
  for (let col = 0; col < N; col++) {
    if (isSafe(row, col)) {
      rows[row] = col;
      dfs(row + 1);
      rows[row] = -1;
    }
  }
};

dfs(0);
console.log(cnt);
