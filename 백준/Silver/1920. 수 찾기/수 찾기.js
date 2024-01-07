const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const binarySearch = (array, findValue) => {
  let left = 0;
  let right = array.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (left <= right) {
    if (array[mid] === findValue) {
      return 1;
    }
    if (array[mid] > findValue) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    mid = Math.floor((left + right) / 2);
  }

  return 0;
};

const [, strA, , strXs] = input;

const A = strA.split(" ").map(Number);
A.sort((a, b) => a - b);
const Xs = strXs.split(" ").map(Number);

console.log(Xs.map((X) => binarySearch(A, X)).join("\n"));
