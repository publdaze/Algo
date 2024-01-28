const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [n, ...numberList] = input;
numberList.sort((a, b) => a - b);

const calc = (n, numberList) => {
  if (n === 0) return 0;
  const halfTruncation = Math.round(n * 0.15);
  const truncationList = halfTruncation === 0 ? numberList : numberList.slice(halfTruncation, n - halfTruncation);
  const average = truncationList.reduce((acc, curr) => acc + curr, 0) / truncationList.length;
  return Math.round(average);
};

console.log(calc(n, numberList));
