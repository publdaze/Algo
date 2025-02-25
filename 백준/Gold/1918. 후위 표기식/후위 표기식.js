//REVIEW -

const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

let result = "";
const stack = [];
const priority = { "*": 1, "/": 1, "+": 2, "-": 2 };
for (const char of input) {
  if (/[A-Z]/.test(char)) {
    result += char;
    continue;
  }

  if (char === "(") {
    stack.push(char);
    continue;
  }

  if (char === ")") {
    while (stack.at(-1) !== "(") {
      result += stack.pop();
    }
    stack.pop();
    continue;
  }

  while (stack.at(-1) !== "(" && priority[stack.at(-1)] <= priority[char]) {
    result += stack.pop();
  }
  stack.push(char);
}

while (stack.length > 0) {
  result += stack.pop();
}

console.log(result);
