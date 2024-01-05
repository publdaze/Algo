const fs = require("fs");
const inputStrings = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const [N, K] = inputStrings.split(" ").map(Number);
const people = Array.from({ length: N }, (v, i) => i + 1);
const result = [];

let i = 1;
while (people.length !== 0) {
  if (i % K === 0) {
    result.push(people.shift());
  } else {
    people.push(people.shift());
  }
  i++;
}

console.log(`<${result.join(", ")}>`);
