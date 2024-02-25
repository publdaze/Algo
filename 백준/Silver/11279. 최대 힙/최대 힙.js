const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map(Number);

//REVIEW - 힙 구현
//STUB - O(N^2)

class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);

    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex !== 0 && this.heap[currentIndex] > this.heap[parentIndex]) {
      [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    const returnValue = this.heap[1];

    if (this.heap.length === 2) {
      this.heap.pop();
      return returnValue;
    }

    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    while (this.heap[currentIndex] < this.heap[leftIndex] || this.heap[currentIndex] < this.heap[rightIndex]) {
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        [this.heap[currentIndex], this.heap[rightIndex]] = [this.heap[rightIndex], this.heap[currentIndex]];
        currentIndex = rightIndex;
      } else {
        [this.heap[currentIndex], this.heap[leftIndex]] = [this.heap[leftIndex], this.heap[currentIndex]];
        currentIndex = leftIndex;
      }
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return returnValue;
  }

  isEmpty() {
    return this.heap.at(-1) === null;
  }
}

const heap = new MaxHeap();

const answer = [];

input.forEach((num) => {
  if (num === 0) {
    answer.push(heap.isEmpty() ? 0 : heap.pop());
    return;
  }
  heap.push(num);
});

console.log(answer.join("\n"));
