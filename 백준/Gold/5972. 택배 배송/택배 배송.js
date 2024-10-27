const fs = require("fs");
const numberList = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

class MinHeap {
  constructor() {
    this.heap = [null];
  }
  getParentIdx(currIdx) {
    return Math.floor(currIdx / 2);
  }
  getLeftIdx(currIdx) {
    return currIdx * 2;
  }
  getRightIdx(currIdx) {
    return currIdx * 2 + 1;
  }
  push(value) {
    this.heap.push(value);
    let currIdx = this.heap.length - 1;
    let parentIdx = this.getParentIdx(currIdx);
    while (this.heap[parentIdx] > this.heap[currIdx]) {
      this.swap(parentIdx, currIdx);
      currIdx = parentIdx;
      parentIdx = this.getParentIdx(currIdx);
    }
  }
  pop() {
    const returnValue = this.heap[1];
    if (this.isEmpty()) {
      this.heap.pop();
      return returnValue;
    }
    this.heap[1] = this.heap.pop();
    let currIdx = 1;
    let leftIdx = this.getLeftIdx(currIdx);
    let rightIdx = this.getRightIdx(currIdx);

    while (
      this.heap[leftIdx] &&
      (this.heap[currIdx] > this.heap[leftIdx] || this.heap[currIdx] > this.heap[rightIdx])
    ) {
      if (this.heap[rightIdx] && this.heap[leftIdx] > this.heap[rightIdx]) {
        this.swap(currIdx, rightIdx);
        currIdx = rightIdx;
      } else {
        this.swap(currIdx, leftIdx);
        currIdx = leftIdx;
      }

      leftIdx = this.getLeftIdx(currIdx);
      rightIdx = this.getRightIdx(currIdx);
    }
    return returnValue;
  }
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
  isEmpty() {
    return this.heap.length === 1;
  }
}

const [N, M] = numberList.at(0);
const graph = Array.from({ length: N + 1 }, () => []);

const setGraph = () => {
  numberList.forEach(([src, dst, cost], i) => {
    if (i === 0) return;
    graph[src].push({ node: dst, cost });
    graph[dst].push({ node: src, cost });
  });
};

const dijkstra = () => {
  const dist = Array(N + 1).fill(Infinity);
  const pq = new MinHeap();
  pq.push(1);
  dist[1] = 0;

  while (!pq.isEmpty()) {
    const src = pq.pop();
    if (src === N) return dist[src];
    for (const { node: dst, cost } of graph[src]) {
      if (dist[src] + cost < dist[dst]) {
        dist[dst] = dist[src] + cost;
        pq.push(dst);
      }
    }
  }
};

setGraph();
console.log(dijkstra());
