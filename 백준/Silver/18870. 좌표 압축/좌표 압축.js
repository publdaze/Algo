const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

// TODO - 본인보다 작은 좌표 개수

const N = Number(input.shift());
const Xs = input.at(0).split(" ").map(Number);
const result = Array.from({ length: N }, () => 0);

let pointValues = {};

const comparePoint = (a, b) => {
  return pointValues[a] - pointValues[b];
};

Xs.forEach((X, i) => {
  pointValues[i] = X;
});

let i = 0;
const sortedKeys = Object.keys(pointValues).sort(comparePoint);
sortedKeys.forEach((key, index) => {
  if (index === 0) return;

  if (Xs[sortedKeys[index - 1]] < Xs[key]) {
    i++;
  }
  result[key] = i;
});

console.log(result.join(" "));
