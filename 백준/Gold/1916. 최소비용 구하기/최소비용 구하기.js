const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

//REVIEW

let [cityCnt, busCnt, ...busInfos] = input;
(cityCnt = Number(cityCnt)), (busCnt = Number(busCnt));
busInfos = busInfos.map((line) => line.split(" ").map(Number));
const [start, end] = busInfos.pop();
const graph = Array.from({ length: cityCnt + 1 }, () => []);

class Heap {
  constructor(compare) {
    this.heap = [null];
    this.compare = compare;
  }
  push(value) {
    this.heap.push(value);
    let currentIdx = this.heap.length - 1;
    let parentIdx = this.getParentIdx(currentIdx);
    while (parentIdx !== 0 && !this.compare(this.heap[parentIdx], this.heap[currentIdx])) {
      this.swap(parentIdx, currentIdx);
      currentIdx = parentIdx;
      parentIdx = this.getParentIdx(currentIdx);
    }
  }
  pop() {
    const returnValue = this.heap[1];
    if (this.length() === 1) {
      this.heap.pop();
      return returnValue;
    }
    this.heap[1] = this.heap.pop();
    let currentIdx = 1;
    let leftChildIdx = this.getLeftChildIdx(currentIdx);
    let rightChildIdx = this.getRightChildIdx(currentIdx);
    while (this.heap[leftChildIdx]) {
      let nextIdx = currentIdx;
      if (this.heap[leftChildIdx] && this.compare(this.heap[leftChildIdx], this.heap[nextIdx])) {
        nextIdx = leftChildIdx;
      }
      if (this.heap[rightChildIdx] && this.compare(this.heap[rightChildIdx], this.heap[nextIdx])) {
        nextIdx = rightChildIdx;
      }
      if (currentIdx === nextIdx) {
        break;
      }
      this.swap(currentIdx, nextIdx);
      currentIdx = nextIdx;
      leftChildIdx = this.getLeftChildIdx(currentIdx);
      rightChildIdx = this.getRightChildIdx(currentIdx);
    }

    return returnValue;
  }
  length() {
    return this.heap.length - 1;
  }
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
  getParentIdx(currentIdx) {
    return Math.floor(currentIdx / 2);
  }
  getLeftChildIdx(currentIdx) {
    return currentIdx * 2;
  }
  getRightChildIdx(currentIdx) {
    return currentIdx * 2 + 1;
  }
}

const dijkstra = (road) => {
  const minHeap = new Heap((a, b) => a.cost < b.cost);
  minHeap.push({ node: start, cost: 0 });
  const dist = Array.from({ length: cityCnt + 1 }, () => Infinity);
  dist[start] = 0;

  while (minHeap.length() > 0) {
    const { node: current, cost: currentCost } = minHeap.pop();
    for (const [dst, cost] of road[current]) {
      const nextCost = cost + currentCost;

      if (nextCost < dist[dst]) {
        dist[dst] = nextCost;
        minHeap.push({ node: dst, cost: nextCost });
      }
    }
  }

  return dist;
};

const setGraph = () => {
  busInfos.forEach(([src, dst, cost]) => {
    const existingPath = graph[src].find((path) => path[0] === dst);
    if (existingPath) {
      existingPath[1] = Math.min(existingPath[1], cost); // 기존 경로의 비용보다 새 경로의 비용이 적으면 업데이트
    } else {
      graph[src].push([dst, cost]);
    }
  });
};

setGraph();
console.log(dijkstra(graph)[end]);

/* 시간 초과
let [cityCnt, busCnt, ...busInfos] = input;
(cityCnt = Number(cityCnt)), (busCnt = Number(busCnt));
busInfos = busInfos.map((line) => line.split(" ").map(Number));
const [start, end] = busInfos.pop();
const graph = Array.from({ length: cityCnt + 1 }, () => []);

class Heap {
  constructor(compare) {
    this.heap = [null];
    this.compare = compare;
  }
  push(value) {
    this.heap.push(value);
    let currentIdx = this.heap.length - 1;
    let parentIdx = this.getParentIdx(currentIdx);
    while (parentIdx !== 0 && !this.compare(this.heap[parentIdx], this.heap[currentIdx])) {
      this.swap(parentIdx, currentIdx);
      currentIdx = parentIdx;
      parentIdx = this.getParentIdx(currentIdx);
    }
  }
  pop() {
    const returnValue = this.heap[1];
    if (this.length() === 1) {
      this.heap.pop();
      return returnValue;
    }
    this.heap[1] = this.heap.pop();
    let currentIdx = 1;
    let leftChildIdx = this.getLeftChildIdx(currentIdx);
    let rightChildIdx = this.getRightChildIdx(currentIdx);
    while (this.heap[leftChildIdx]) {
      let nextIdx = currentIdx;
      if (this.heap[leftChildIdx] && this.compare(this.heap[leftChildIdx], this.heap[nextIdx])) {
        nextIdx = leftChildIdx;
      }
      if (this.heap[rightChildIdx] && this.compare(this.heap[rightChildIdx], this.heap[nextIdx])) {
        nextIdx = rightChildIdx;
      }
      if (currentIdx === nextIdx) {
        break;
      }
      this.swap(currentIdx, nextIdx);
      currentIdx = nextIdx;
      leftChildIdx = this.getLeftChildIdx(currentIdx);
      rightChildIdx = this.getRightChildIdx(currentIdx);
    }

    return returnValue;
  }
  length() {
    return this.heap.length - 1;
  }
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
  getParentIdx(currentIdx) {
    return Math.floor(currentIdx / 2);
  }
  getLeftChildIdx(currentIdx) {
    return currentIdx * 2;
  }
  getRightChildIdx(currentIdx) {
    return currentIdx * 2 + 1;
  }
}

const dijkstra = (road) => {
  const minHeap = new Heap((a, b) => a.cost < b.cost);
  minHeap.push({ node: start, cost: 0 });
  const dist = Array.from({ length: cityCnt + 1 }, () => Infinity);
  dist[start] = 0;

  while (minHeap.length() > 0) {
    const { node: current, cost: currentCost } = minHeap.pop();
    for (const [dst, cost] of road[current]) {
      const nextCost = cost + currentCost;

      if (nextCost < dist[dst]) {
        dist[dst] = nextCost;
        minHeap.push({ node: dst, cost: nextCost });
      }
    }
  }

  return dist;
};

const setGraph = () => {
  busInfos.forEach(([src, dst, cost]) => {
    graph[src].push([dst, cost]);
  });
};

setGraph();
console.log(dijkstra(graph)[end]);
 */
