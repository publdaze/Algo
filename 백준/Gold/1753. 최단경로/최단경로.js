const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

//REVIEW - 다익스트라 풀이

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

const [V, E] = input.shift();
const startV = input.shift().at(0);
const graph = Array.from({ length: V + 1 }, () => []);

const dijkstra = (road) => {
  const heap = new Heap((a, b) => a.cost < b.cost);
  heap.push({ node: startV, cost: 0 });

  const shortest = Array.from({ length: V + 1 }, () => Infinity);
  shortest[startV] = 0;

  while (heap.size() > 0) {
    const { node: current, cost: currentCost } = heap.pop();

    for (const [dest, cost] of road[current]) {
      const nextCost = cost + currentCost;

      if (nextCost < shortest[dest]) {
        shortest[dest] = nextCost;
        heap.push({ node: dest, cost: nextCost });
      }
    }
  }

  return shortest;
};

const setGraph = () => {
  input.forEach(([src, dst, weight]) => {
    graph[src].push([dst, weight]);
  });
};

setGraph();
console.log(
  dijkstra(graph)
    .slice(1)
    .map((num) => (num === Infinity ? "INF" : num))
    .join("\n")
);

/* 시간초과 - 모든 간선 탐색
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

const dijkstra = (road) => {
  const [V, E] = input.shift();
  const startV = input.shift().at(0);

  const heap = new Heap((a, b) => a.cost < b.cost);
  heap.push({ node: startV, cost: 0 });

  const shortest = Array.from({ length: V + 1 }, () => Infinity);
  shortest[startV] = 0;

  while (heap.size() > 0) {
    const { node: current, cost: currentCost } = heap.pop();

    for (const [src, dest, cost] of road) {
      const nextCost = cost + currentCost;

      if (src === current && nextCost < shortest[dest]) {
        shortest[dest] = nextCost;
        heap.push({ node: dest, cost: nextCost });
      }
    }
  }

  return shortest;
};

console.log(
  dijkstra(input)
    .slice(1)
    .map((num) => (num === Infinity ? "INF" : num))
    .join("\n")
);
 */
/* 반례 4 4/1/1 2 10/1 3 1/3 2 1/2 4 1 -> 0213
const [V, E] = input.shift();
const startV = input.shift().at(0);
const graph = Array.from({ length: V + 1 }, () => []);
const shortest = Array.from({ length: V + 1 }, () => Infinity);
shortest[startV] = 0;

const setGraph = () => {
  input.forEach(([src, dst, weight]) => {
    graph[src].push([dst, weight]);
  });
};

const findShortest = () => {
  const queue = [startV];

  while (queue.length > 0) {
    const src = queue.shift();

    for ([dst, weight] of graph[src]) {
      if (shortest[dst] === Infinity) queue.push(dst);
      shortest[dst] = Math.min(shortest[dst], shortest[src] + weight);
    }
  }
};

setGraph();
findShortest();
console.log(
  shortest
    .slice(1)
    .map((num) => (num === Infinity ? "INF" : num))
    .join("\n")
);
 */
