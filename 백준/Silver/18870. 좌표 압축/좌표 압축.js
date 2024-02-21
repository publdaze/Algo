const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1);

// TODO - 본인보다 작은 좌표 개수

const Xs = input.at(0).split(" ").map(Number);

let coordinateCompression = {};

let uniquePoints = [...new Set(Xs)].sort((a, b) => a - b);

uniquePoints.forEach((uniquePoint, i) => {
  coordinateCompression[uniquePoint] = i;
});

console.log(Xs.map((X) => coordinateCompression[X]).join(" "));
