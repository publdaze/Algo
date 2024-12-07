const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

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

  size() {
    return this.heap.length - 1;
  }
}

function getGraph(n, costs) {
  const graph = Array.from({ length: n }, () => []);

  costs.forEach(([src, dst, cost]) => {
    graph[src].push({ node: dst, cost });
    graph[dst].push({ node: src, cost });
  });

  return graph;
}

function prim(n, start, graph) {
  const visited = Array(n).fill(false);
  let totalCost = 0;
  const pq = new MinHeap();
  pq.push({ node: start, cost: 0 });

  while (pq.size() > 0) {
    const { node: src, cost: srcCost } = pq.pop();

    if (visited[src]) continue;
    visited[src] = true;
    totalCost += srcCost;

    for (const { node: dst, cost } of graph[src]) {
      if (!visited[dst]) {
        pq.push({ node: dst, cost });
      }
    }
  }

  return totalCost;
}

function solution(n, costs) {
  const graph = getGraph(n, costs);
  return prim(n, 0, graph);
}

input.pop();
let idx = 0;
while (idx < input.length) {
  const [house, path] = input[idx++];
  const costs = input.slice(idx, idx + path);
  idx += path;

  console.log(costs.reduce((acc, [_1, _2, cost]) => acc + cost, 0) - solution(house, costs));
}
