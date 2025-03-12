const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

// 0 - 이동 가능, 1 - 이동 X
// 시작 위치 [1, 1] -> 도착 위치 [N, M]
// 최단 경로 (시작, 끝 칸 수 포함)
// ** 벽 1 개 부수기 가능
// BFS -> 왜 나는 최단 경로를 구할 때 DFS가 아닌 BFS를 사용할까?
// 모든 벽에 대해서 부순 경우를 체크해봐야 하는 가? - 어느 벽을 부수는 게 최적인지 미리 알 수 없어보임
// 다음으로 갈 경로를 부수고 갈 경우, 부수지 않고 갈 경우, 2가지로 나누되, 부수고 간 경우 플래그를 주자!

const DIRECTION = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1],
];

const outOfRange = (maxRow, maxCol, row, col) => {
  return row < 0 || row >= maxRow || col < 0 || col >= maxCol;
};

const isWall = (num) => {
  // 숫자만 받는 게 좋을 지, map과 좌표를 받는 게 좋을 지
  return num === "1";
};

const bfs = (start, end, map) => {
  const MAX_ROW = map.length;
  const MAX_COL = map[0].length;
  const visited = Array.from({ length: MAX_ROW }, () =>
    Array.from({ length: MAX_COL }, () => Array.from({ length: 2 }, () => false))
  ); // N, M을 받아오는 게 좋을 지, map의 길이로 하는 게 좋을 지

  const [startRow, startCol] = start;
  const START_DIST = 1;

  const queue = [[startRow, startCol, START_DIST]]; // false도 상수로 빼야할 지
  visited[startRow][startCol] = true;

  let i = 0;
  while (queue.length !== i) {
    const [row, col, dist, isBroken] = queue.at(i);
    i++;
    if (row === end[0] && col === end[1]) return dist;

    for (let [dr, dc] of DIRECTION) {
      const [nr, nc] = [row + dr, col + dc];

      if (outOfRange(MAX_ROW, MAX_COL, nr, nc) || visited[nr][nc][isBroken]) continue;
      if (isWall(map[nr][nc])) {
        if (isBroken) continue;
        queue.push([nr, nc, dist + 1, true]);
        visited[nr][nc][isBroken] = true;
        continue;
      }
      queue.push([nr, nc, dist + 1, isBroken]);
      visited[nr][nc][isBroken] = true;
    }
  }

  return -1;
};

const solve = (N, M, map) => {
  const start = [0, 0];
  const end = [N - 1, M - 1];

  console.log(bfs(start, end, map));
};

const [N, M] = input.shift().split(" ").map(Number);

solve(N, M, input);
