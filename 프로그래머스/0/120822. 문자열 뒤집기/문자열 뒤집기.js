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

function solution(my_string) {
    const stack = new Stack();
    
    for (const char of my_string) stack.push(char);
    
    let reverseString = "";
    while(!stack.isEmpty()) {
        reverseString += stack.pop();
    }
    
    return reverseString;
    
}