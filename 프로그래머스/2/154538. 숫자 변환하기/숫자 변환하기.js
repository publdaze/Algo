
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  enqueue(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size += 1;
  }
  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    this.size -= 1;
    return value;
  }
  peek() {
    return this.head.value;
  }
}

function calcs(x, n){
    return [x + n, x * 2, x * 3];
}

function bfs(x, y, n) {
    const visited = new Set();
    
    const queue = new Queue();
    queue.enqueue([x, 0]);
    visited.add(x);
    
    while(queue.size > 0) {
        const [currX, cnt] = queue.dequeue();
        
        for (let nextX of calcs(currX, n)) {
            if (nextX === y) return cnt + 1;
            if (nextX > y || visited.has(nextX)) continue;
            queue.enqueue([nextX, cnt + 1]);
            visited.add(nextX);
        }
    }
    
    return -1;
}

function solution(x, y, n) {
    return x === y ? 0 : bfs(x, y, n);
}