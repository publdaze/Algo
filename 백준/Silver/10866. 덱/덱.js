const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1);

const deque = [];
const print = [];

const dequeResult = (command, number) => {
  if (command === "push_front") {
    deque.unshift(number);
  }
  if (command === "push_back") {
    deque.push(number);
  }
  if (command === "pop_front") {
    return deque.shift() || -1;
  }
  if (command === "pop_back") {
    return deque.pop() || -1;
  }
  if (command === "size") {
    return deque.length;
  }
  if (command === "empty") {
    return deque.length ? 0 : 1;
  }
  if (command === "front") {
    return deque.at(0) || -1;
  }
  if (command === "back") {
    return deque.at(-1) || -1;
  }
  return null;
};

input.forEach((fullCommand) => {
  const [command, number] = fullCommand.split(" ");
  const result = dequeResult(command, number);
  if (result !== null) print.push(result);
});

console.log(print.join("\n"));
