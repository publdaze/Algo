const fs = require("fs");
const numberList = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const [N] = numberList.shift();

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

// 건너기전 > 건넌후
// 버튼을 누르면 해당 원소의 값이 1 증가 (비용 1)

const DIRECTION = [
  [1, 0],
  [0, 1],
];
const outOfRange = (row, col) => {
  return row >= N || col >= N;
};

const dijkstra = () => {
  const distance = Array.from({ length: N }, () => Array(N).fill(Infinity));
  distance[0][0] = 0;
  const pq = new Heap((a, b) => a.cost < b.cost);
  pq.push({ node: [0, 0], cost: 0 });

  while (pq.size() > 0) {
    const {
      node: [r, c],
      cost,
    } = pq.pop();

    if (distance[r][c] > cost) continue;
    if (r === N - 1 && c === N - 1) return distance[N - 1][N - 1];

    for (const [dR, dC] of DIRECTION) {
      const [nR, nC] = [r + dR, c + dC];

      if (outOfRange(nR, nC)) continue;
      const nCost = cost + Math.max(0, numberList[nR][nC] - numberList[r][c] + 1);
      if (distance[nR][nC] > nCost) {
        distance[nR][nC] = nCost;
        pq.push({ node: [nR, nC], cost: nCost });
      }
    }
  }

  return distance[N - 1][N - 1];
};

console.log(dijkstra());
