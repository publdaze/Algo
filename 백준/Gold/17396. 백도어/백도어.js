const fs = require("fs");
const numberList = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const [N, M] = numberList.at(0);
const dangerZone = numberList.at(1).map(Boolean);
dangerZone[N - 1] = false; // N-1은 0이어도 갈 수 있음
const graph = Array.from({ length: N }, () => []);
const distance = Array(N).fill(Infinity);

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  pop() {
    const returnValue = this.heap[1];
    const leafNode = this.heap.pop();
    if (this.heap.length > 1) {
      this.heap[1] = leafNode;
      this.heapifyDown();
    }
    return returnValue;
  }

  heapifyUp() {
    let currIdx = this.heap.length - 1;
    while (currIdx > 1) {
      const parentIdx = Math.floor(currIdx / 2);
      if (this.heap[currIdx].cost < this.heap[parentIdx].cost) {
        this.swap(currIdx, parentIdx);
        currIdx = parentIdx;
      } else {
        break;
      }
    }
  }

  heapifyDown() {
    let currIdx = 1;
    const length = this.heap.length;
    while (currIdx * 2 < length) {
      let leftIdx = currIdx * 2;
      let rightIdx = currIdx * 2 + 1;
      let smallestIdx = leftIdx;

      if (rightIdx < length && this.heap[rightIdx].cost < this.heap[leftIdx].cost) {
        smallestIdx = rightIdx;
      }

      if (this.heap[currIdx].cost > this.heap[smallestIdx].cost) {
        this.swap(currIdx, smallestIdx);
        currIdx = smallestIdx;
      } else {
        break;
      }
    }
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  isEmpty() {
    return this.heap.length === 1;
  }
}

const setGraph = () => {
  for (let i = 2; i < numberList.length; i++) {
    const [src, dst, cost] = numberList[i];
    if (!dangerZone[src] && !dangerZone[dst]) {
      graph[src].push({ node: dst, cost });
      graph[dst].push({ node: src, cost });
    }
  }
};

const dijkstra = () => {
  const pq = new MinHeap();
  pq.push({ node: 0, cost: 0 });
  distance[0] = 0;

  while (!pq.isEmpty()) {
    const { node: src, cost: currentCost } = pq.pop();

    // 이미 더 큰 비용이 들어온 경우 무시
    if (currentCost > distance[src]) continue;

    if (src === N - 1) return distance[src];

    for (const { node: dst, cost } of graph[src]) {
      const newCost = distance[src] + cost;
      if (newCost < distance[dst]) {
        distance[dst] = newCost;
        pq.push({ node: dst, cost: newCost });
      }
    }
  }

  return -1;
};

setGraph();
console.log(dijkstra());
