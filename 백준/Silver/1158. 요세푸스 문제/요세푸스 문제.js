const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [N, K] = input;

const queue = Array.from({ length: N }, (v, i) => i + 1);
const result = [];

let turn = 0;
while (queue.length > 1) {
  turn += 1;
  const person = queue.shift();

  if (turn % K === 0) {
    result.push(person);
    continue;
  }
  queue.push(person);
}
result.push(queue.shift());

console.log("<" + result.join(", ") + ">");
