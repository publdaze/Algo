const fs = require("fs");
const numberList = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const [dangerZoneCnt] = numberList.shift();
const dangerZone = numberList.splice(0, dangerZoneCnt);
const [deathZoneCnt] = numberList.shift();
const deathZone = numberList.splice(0, deathZoneCnt);

class Heap {
  constructor(compareFunction) {
    this.heap = [null];
    this.compare = compareFunction;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  parentIdx(currentIdx) {
    return Math.floor(currentIdx / 2);
  }

  leftChildIdx(currentIdx) {
    return 2 * currentIdx;
  }

  rightChildIdx(currentIdx) {
    return 2 * currentIdx + 1;
  }

  peek() {
    return this.heap[1];
  }

  size() {
    return this.heap.length - 1;
  }

  clear() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    let currentIdx = this.size();
    let parentIdx = this.parentIdx(currentIdx);

    while (parentIdx !== 0 && this.compare(this.heap[currentIdx], this.heap[parentIdx])) {
      this.swap(currentIdx, parentIdx);
      currentIdx = parentIdx;
      parentIdx = this.parentIdx(currentIdx);
    }
  }

  pop() {
    const returnValue = this.heap[1];

    if (this.size() === 1) {
      this.heap.pop();
      return returnValue;
    }

    this.heap[1] = this.heap.pop();

    let currentIdx = 1;
    let leftChildIdx = this.leftChildIdx(currentIdx);
    let rightChildIdx = this.rightChildIdx(currentIdx);

    while (this.heap[leftChildIdx]) {
      let nextIdx = currentIdx;
      if (leftChildIdx < this.heap.length && this.compare(this.heap[leftChildIdx], this.heap[nextIdx])) {
        nextIdx = leftChildIdx;
      }
      if (rightChildIdx < this.heap.length && this.compare(this.heap[rightChildIdx], this.heap[nextIdx])) {
        nextIdx = rightChildIdx;
      }
      if (currentIdx === nextIdx) {
        break;
      }

      this.swap(currentIdx, nextIdx);
      currentIdx = nextIdx;
      leftChildIdx = this.leftChildIdx(currentIdx);
      rightChildIdx = this.rightChildIdx(currentIdx);
    }

    return returnValue;
  }
}

const MAP_SIZE = 500;
const DIRECTION = [
  [1, 0],
  [-1, 0],
  [0, -1],
  [0, 1],
];

const outOfRange = (y, x) => {
  return y < 0 || y > MAP_SIZE || x < 0 || x > MAP_SIZE;
};

const area = {
  danger: dangerZone,
  death: deathZone,
};
const setArea = (map, status) => {
  for (let [startX, startY, endX, endY] of area[status]) {
    if (startY > endY) [startY, endY] = [endY, startY];
    if (startX > endX) [startX, endX] = [endX, startX];
    for (let y = startY; y <= endY; y++) {
      for (let x = startX; x <= endX; x++) {
        if (x === 0 && y === 0) continue;
        map[y][x] = status;
      }
    }
  }
};

const dijkstra = (map) => {
  const distance = Array.from({ length: MAP_SIZE + 1 }, () => Array(MAP_SIZE + 1).fill(Infinity));
  const pq = new Heap((a, b) => a.dist < b.dist);
  distance[0][0] = 0;
  pq.push({ node: [0, 0], dist: 0 });

  while (pq.size() > 0) {
    const {
      node: [y, x],
      dist,
    } = pq.pop();

    if (y === 500 && x === 500) return dist;
    if (dist > distance[y][x]) continue;

    for (const [dy, dx] of DIRECTION) {
      const [ny, nx] = [y + dy, x + dx];
      if (outOfRange(ny, nx) || map[ny][nx] === "death") continue;

      const newDist = dist + Number(map[ny][nx] === "danger");
      if (newDist < distance[ny][nx]) {
        distance[ny][nx] = newDist;
        pq.push({ node: [ny, nx], dist: newDist });
      }
    }
  }

  return distance[MAP_SIZE][MAP_SIZE] === Infinity ? -1 : distance[MAP_SIZE][MAP_SIZE];
};

const solution = () => {
  const map = Array.from({ length: MAP_SIZE + 1 }, () => Array(MAP_SIZE + 1).fill("safe"));

  setArea(map, "danger");
  setArea(map, "death");

  return dijkstra(map);
};

console.log(solution());
