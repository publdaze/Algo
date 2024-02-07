const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.at(0).split(" ").map(Number);
const passwordMap = new Map();

for (let i = 1; i < N + 1; i++) {
  const [site, password] = input[i].split(" ");
  passwordMap.set(site, password);
}

for (let i = N + 1; i < N + 1 + M; i++) {
  console.log(passwordMap.get(input[i]));
}
