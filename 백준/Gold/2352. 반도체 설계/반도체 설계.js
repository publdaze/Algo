const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((line) => line.split(" ").map(Number));

const binarySearch = (arr, findValue) => {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((right + left) / 2);

  while (left < right) {
    if (arr[mid] === findValue) return mid;
    if (arr[mid] > findValue) right = mid;
    else left = mid + 1;

    mid = Math.floor((left + right) / 2);
  }
  return right;
};

class Lis {
  constructor() {
    this.lis = [];
  }
  push(value) {
    this.lis.push(value);
  }
  replace(value) {
    this.lis[binarySearch(this.lis, value)] = value;
  }
  top() {
    return this.lis.at(-1);
  }
  isEmpty() {
    return this.lis.length === 0;
  }
  length() {
    return this.lis.length;
  }
}

const lis = new Lis();

input.at(0).forEach((linkedPort) => {
  if (linkedPort > lis.top() || lis.isEmpty()) {
    lis.push(linkedPort);
    return;
  }
  lis.replace(linkedPort);
});

console.log(lis.length());
