const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(0, -1);

const result = input.reduce((acc, str) => {
  let stack = [];

  const charList = str.split("");
  for (const char of charList) {
    if (char === "(" || char === "[") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.at(-1) === "(") {
        stack.pop();
      } else {
        return [...acc, "no"];
      }
    } else if (char === "]") {
      if (stack.at(-1) === "[") {
        stack.pop();
      } else {
        return [...acc, "no"];
      }
    }
  }

  if (stack.length === 0) return [...acc, "yes"];
  return [...acc, "no"];
}, []);

console.log(result.join("\n"));
