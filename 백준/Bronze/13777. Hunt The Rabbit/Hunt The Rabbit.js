const fs = require("fs");
const inputStrings = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(0, -1);

const binarySearch = (array, findValue) => {
  const findNumber = Number(findValue);

  let left = array[0];
  let right = array[array.length - 1];
  let mid = Math.floor((left + right) / 2);

  const openNumbers = [];
  while (left <= right) {
    openNumbers.push(mid);
    if (mid === findNumber) return openNumbers;
    if (mid > findNumber) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    mid = Math.floor((left + right) / 2);
  }
  return openNumbers;
};

const envelope = Array.from({ length: 50 }, (v, i) => i + 1);

inputStrings.forEach((num) => {
  console.log(binarySearch(envelope, num).join(" "));
});
