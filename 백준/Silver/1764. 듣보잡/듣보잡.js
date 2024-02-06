const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.at(0).split(" ").map(Number);
const notHearPeople = new Map();
const notHearSeePeople = [];

for (let i = 1; i < N + 1; i++) {
  notHearPeople.set(input[i], true);
}

for (let i = N + 1; i < N + 1 + M; i++) {
  if (notHearPeople.get(input[i])) {
    notHearSeePeople.push(input[i]);
  }
}

notHearSeePeople.sort();

console.log(notHearSeePeople.length);
console.log(notHearSeePeople.join("\n"));
