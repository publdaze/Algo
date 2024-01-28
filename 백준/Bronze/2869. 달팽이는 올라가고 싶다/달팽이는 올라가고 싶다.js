const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const [A, B, V] = input.split(" ").map(Number);

const climbUp = (height) => {
  return height;
};

const slideDown = (height) => {
  return -height;
};

console.log(Math.ceil((V - climbUp(A)) / (climbUp(A) + slideDown(B))) + 1);
