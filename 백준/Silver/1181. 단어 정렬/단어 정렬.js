const fs = require("fs");
const inputStrings = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1);

const compareLength = (a, b) => {
  return a.length - b.length;
};

const compareAlphabet = (a, b) => {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  return 0;
};

const compare = (a, b) => {
  const SAME_NUMBER = 0;

  if (compareLength(a, b) !== SAME_NUMBER) {
    return compareLength(a, b);
  }
  return compareAlphabet(a, b);
};

const deleteDuplication = (arr) => {
  return [...new Set(arr)];
};

const uniqueStrings = deleteDuplication(inputStrings);
uniqueStrings.sort(compare);
console.log(uniqueStrings.join("\n"));
