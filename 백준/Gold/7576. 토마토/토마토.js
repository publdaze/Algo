const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

//REVIEW - 시간 초과 큐 직접 구현하기
//TODO - 며칠이면 다 익는 지 최소 일수
//NOTE - 인접한 토마토는 상하좌우, 인접 토마토는 !하루!후 익은토마토 영향으로 익음
//NOTE - 1은 익은 토마토, 0은 익지 않은 토마토, -1은 토마토가 들어있지 않은 칸
//ANCHOR - 1을 기준으로 큐에 넣어두고 bfs

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }
  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  isEmpty() {
    return this.rear === this.front;
  }
}

const [m, n] = input.shift().split(" ").map(Number);
const graph = input.map((value) => value.split(" ").map(Number));
const visited = Array.from({ length: n }, (v, i) =>
  Array.from({ length: m }, (v2, j) => (graph[i][j] === -1 ? -1 : 0))
);

const findTargetCoordinates = (queue) => {
  const targetCoordinates = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] === 1) {
        queue.enqueue([i, j, 0]);
      }
    }
  }

  return targetCoordinates;
};

const hasNoRipe = () => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (visited[i][j] === 0) {
        return true;
      }
    }
  }

  return false;
};

let minDate = 0;
const bfs = () => {
  const queue = new Queue();
  findTargetCoordinates(queue);

  while (!queue.isEmpty()) {
    const [x, y, date] = queue.dequeue();

    if (visited[x][y] === 1) continue;
    minDate = date;
    visited[x][y] = 1;

    if (x + 1 < n && visited[x + 1][y] === 0) {
      queue.enqueue([x + 1, y, date + 1]);
    }
    if (y + 1 < m && visited[x][y + 1] === 0) {
      queue.enqueue([x, y + 1, date + 1]);
    }
    if (x - 1 >= 0 && visited[x - 1][y] === 0) {
      queue.enqueue([x - 1, y, date + 1]);
    }
    if (y - 1 >= 0 && visited[x][y - 1] === 0) {
      queue.enqueue([x, y - 1, date + 1]);
    }
  }
};

bfs();
console.log(hasNoRipe() ? -1 : minDate);
