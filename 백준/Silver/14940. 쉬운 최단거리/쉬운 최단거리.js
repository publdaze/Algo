const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

//TODO - 목표지점까지의 거리
//NOTE - 가로와 세로로만 움직일 수 있음, 0은 갈 수 없는 땅이고 1은 갈 수 있는 땅, 2는 목표지점
//ANCHOR - 각 노드까지의 거리로 보고 bfs로 풀 수 있을 듯
//STUB - x,y 헷갈리지 말기

const [n, m] = input.shift().split(" ").map(Number);
const graph = input.map((value) => value.split(" ").map(Number));
const visited = Array.from({ length: n }, (v, i) => Array.from({ length: m }, (v2, j) => (graph[i][j] === 0 ? 0 : -1)));

const findTargetCoordinate = () => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] === 2) {
        return [i, j];
      }
    }
  }
};

const bfs = (startPoint) => {
  const queue = [startPoint];

  while (queue.length > 0) {
    const [x, y, distance] = queue.shift();
    if (visited[x][y] > -1) continue;
    visited[x][y] = distance;

    if (x + 1 < n && visited[x + 1][y] === -1) {
      queue.push([x + 1, y, distance + 1]);
    }
    if (y + 1 < m && visited[x][y + 1] === -1) {
      queue.push([x, y + 1, distance + 1]);
    }
    if (x - 1 >= 0 && visited[x - 1][y] === -1) {
      queue.push([x - 1, y, distance + 1]);
    }
    if (y - 1 >= 0 && visited[x][y - 1] === -1) {
      queue.push([x, y - 1, distance + 1]);
    }
  }
};

bfs([...findTargetCoordinate(), 0]);
console.log(visited.map((line) => line.join(" ")).join("\n"));
