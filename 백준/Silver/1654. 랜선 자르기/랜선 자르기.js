const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [K, N] = input[0].split(" ");
const lanCableList = input.slice(1).map(Number);

const binarySearch = () => {
  let minLength = 1;
  let maxLength = Math.max(...lanCableList);

  while (minLength <= maxLength) {
    let midLength = Math.floor((minLength + maxLength) / 2);
    const totalCnt = lanCableList.reduce((acc, lan) => {
      return acc + Math.floor(lan / midLength);
    }, 0);

    if (totalCnt < N) {
      maxLength = midLength - 1;
    } else {
      minLength = midLength + 1;
    }
  }

  return maxLength;
};

console.log(binarySearch());
