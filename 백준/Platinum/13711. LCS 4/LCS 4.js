const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1);

const firstSequence = input[0].split(" ").map(Number);
const secondSequence = input[1].split(" ").map(Number);

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

for (let i = 0; i < firstSequence.length; i++) {
  for (let j = 0; j < secondSequence.length; j++) {
    if (secondSequence[j] === firstSequence[i]) {
      if (j > lis.top() || lis.length() === 0) {
        lis.push(j);
      } else {
        lis.replace(j);
      }
      break;
    }
  }
}

console.log(lis.length());
