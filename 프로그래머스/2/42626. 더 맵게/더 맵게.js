//TODO - 모든 음식의 스코빌 지수를 K 이상으로 만들기 위해 섞어야 하는 최소 횟수
//NOTE - 2개의 음식 섞음
//ANCHOR - 정렬하면서 음식 섞기 / 가장 작은 음식이 K 이상이면 그만 (비둘기집 원리 - 0이 2개 이상이면 -1)
//정렬 O(N)이지만 섞은 음식의 값만 변경되므로 첫번째 존재하는 원소의 자리만 찾아주면 됨

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


function solution(scoville, K) {
    
    const minHeap = new Heap((a, b) => a < b);
    scoville.map((s) => minHeap.push(s));
    
    while (1) {
        const min = minHeap.pop();
        if (min >= K) return scoville.length - minHeap.size() - 1;
        if (minHeap.size() === 0) return -1;
        minHeap.push(min + minHeap.pop() * 2);
    }
    
}