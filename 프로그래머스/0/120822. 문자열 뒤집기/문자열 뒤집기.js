class Stack {
  constructor() {
    this.data = [];
  }

  push(element) {
    this.data.push(element);
  }

  pop() {
    if (!this.isEmpty()) {
      return this.data.pop();
    }
  }

  top() {
    if (!this.isEmpty()) {
      return this.data[this.data.length - 1];
    }
  }

  isEmpty() {
    return this.data.length === 0;
  }
}

class Queue {
  constructor(maxSize) {
    this.data = [];
    this.front = 0;
    this.rear = 0;
  }
  push(element) {
    this.data.push(element);
    this.rear++;
  }
  pop() {
    return this.data[this.front++];
  }
  isEmpty() {
	  return this.front === this.rear;
	}
}

function solution(my_string) {
		const queue = new Queue();
    const stack = new Stack();
    
    for (const char of my_string) {
		    queue.push(char);
    }
    
    while(!queue.isEmpty()) {
		    stack.push(queue.pop());
    }
        
    let reverseString = "";
    while(!stack.isEmpty()) {
        reverseString += stack.pop();
    }
    
    return reverseString;
    
}