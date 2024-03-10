const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.at(0));
const A = input.at(1).split(" ").map(Number);

const binarySearch = (arr, findValue) => {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (left < right) {
    if (arr[mid] === findValue) return mid;
    if (arr[mid] < findValue) {
      left = mid + 1;
    }
    if (arr[mid] > findValue) {
      right = mid;
    }
    mid = Math.floor((left + right) / 2);
  }
  return right;
};

class LIS {
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
  length() {
    return this.lis.length;
  }
}

const lis = new LIS();

lis.push(A[0]);
for (let i = 1; i < N; i++) {
  if (A[i] > lis.top()) {
    lis.push(A[i]);
  } else {
    lis.replace(A[i]);
  }
}

console.log(lis.length());
