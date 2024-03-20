const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map(Number);

//REVIEW - pop 구현 부분 미흡! 반례 11 1 1 1 1 -1 0 0 0 0 0 0 / -1 1 1 1 1 0 / 구조 분해 할당 swap 시 연산 순서 고려!
//NOTE - 절댓값이 가장 작은 값이 여러개일 때는, 가장 작은 수를 출력

const haveToChange = (a, b) => {
  return Math.abs(a) > Math.abs(b) || (Math.abs(a) === Math.abs(b) && a > b);
};

class AbsHeap {
  constructor() {
    this.heap = [null];
  }
  push(value) {
    this.heap.push(value);

    let currentNodeIdx = this.heap.length - 1;
    let parentNodeIdx = Math.floor(currentNodeIdx / 2);

    while (haveToChange(this.heap[parentNodeIdx], value) && parentNodeIdx > 0) {
      [this.heap[parentNodeIdx], this.heap[currentNodeIdx]] = [this.heap[currentNodeIdx], this.heap[parentNodeIdx]];
      [currentNodeIdx, parentNodeIdx] = [parentNodeIdx, Math.floor(parentNodeIdx / 2)];
    }
  }
  pop() {
    const returnValue = this.heap[1];
    const tmp = this.heap.pop();
    if (this.isEmpty()) return returnValue;

    this.heap[1] = tmp;

    let currentNodeIdx = 1;
    let leftNodeIdx = 2;
    let rightNodeIdx = 3;

    while (
      haveToChange(this.heap[currentNodeIdx], this.heap[leftNodeIdx]) ||
      haveToChange(this.heap[currentNodeIdx], this.heap[rightNodeIdx])
    ) {
      if (haveToChange(this.heap[leftNodeIdx], this.heap[rightNodeIdx])) {
        [this.heap[rightNodeIdx], this.heap[currentNodeIdx]] = [this.heap[currentNodeIdx], this.heap[rightNodeIdx]];

        currentNodeIdx = rightNodeIdx;
      } else {
        [this.heap[leftNodeIdx], this.heap[currentNodeIdx]] = [this.heap[currentNodeIdx], this.heap[leftNodeIdx]];

        currentNodeIdx = leftNodeIdx;
      }

      leftNodeIdx = currentNodeIdx * 2;
      rightNodeIdx = currentNodeIdx * 2 + 1;
    }

    return returnValue;
  }
  isEmpty() {
    return this.heap.at(-1) === null;
  }
}

const absHeap = new AbsHeap();
const result = [];

input.forEach((x) => {
  if (x === 0) {
    if (absHeap.isEmpty()) {
      result.push(0);
      return;
    }
    result.push(absHeap.pop());
    return;
  }
  absHeap.push(x);
});

console.log(result.join("\n"));

/* 시간 초과
class AbsHeap {
  constructor() {
    this.stack = [];
  }
  push(value) {
    this.stack.push(value);
    this.stack.sort((a, b) => Math.abs(b) - Math.abs(a));
  }
  pop() {
    return this.stack.pop();
  }
  isEmpty() {
    return this.tree.length.at(-1) === null;
  }
}

const absHeap = new AbsHeap();
const result = [];

input.forEach((x) => {
  if (x === 0) {
    if (absHeap.isEmpty()) {
      result.push(0);
      return;
    }
    result.push(absHeap.pop());
    return;
  }
  absHeap.push(x);
});

console.log(result.join("\n"));
 */
