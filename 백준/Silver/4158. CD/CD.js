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
    if (Number(array[mid]) === Number(findValue)) {
      return true;
    }
    if (Number(array[mid]) > Number(findValue)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    mid = Math.floor((left + right) / 2);
  }
  return false;
};

let line = 0;
while (input[line] !== "0 0") {
  const [N, M] = input.at(line).split(" ").map(Number);

  const sgCD = input.slice(line + 1, line + N + 1);
  sgCD.sort((a, b) => a - b);

  const result = input.slice(line + N + 1, line + N + M + 1).reduce((prev, curr) => {
    if (binarySearch(sgCD, curr)) {
      return (prev += 1);
    }
    return prev;
  }, 0);

  console.log(result);
  line += N + M + 1;
}
