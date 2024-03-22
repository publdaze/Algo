const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

//TODO - 나무 판자의 개수
//NOTE - 인접 동일 같은 나무 판자

const [N, M] = input.shift().split(" ").map(Number);

const visited = Array.from({ length: N }, () => Array.from({ length: M }, () => false));

const dfs = (row, col, direction) => {
  if (row >= N || col >= M || input[row][col] !== direction) return;

  visited[row][col] = true;

  direction === "-" ? dfs(row, col + 1, direction) : dfs(row + 1, col, direction);
};

let cnt = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (visited[i][j] === false) {
      cnt += 1;
      dfs(i, j, input[i][j]);
    }
  }
}

console.log(cnt);
