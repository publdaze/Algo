// 야근 피로도 = 남은 일의 작업량 각각을 제곱해서 더한 값
// 1시간 : 1작업량
// RETURN - 야근 피로도 최소화
// 최대한 평균 맞춰주기 -> 정렬해서 높은 수부터 작업

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

function solution(n, works) {
    const maxHeap = new Heap((a, b) => a > b);
    works.forEach((work) => maxHeap.push(work));
    
    while (n > 0) {
        const max = maxHeap.pop();
        if (max === 0) break;
        maxHeap.push(max - 1);
        n--;
    }
    
    return maxHeap.heap.slice(1).reduce((acc, num) => acc + Math.pow(num, 2), 0);
}

// 효율성 시간초과
// function solution(n, works) {
//     while (n > 0) {
//         works.sort((a, b) => b - a);
//         if (works[0] === 0) break;
//         works[0] -= 1;
//         n--;
//     }
    
//     return works.reduce((acc, num) => acc + Math.pow(num, 2), 0);
// }