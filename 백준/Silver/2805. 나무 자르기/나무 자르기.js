const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

//TODO - 적어도 M미터 나무를 가져가기 윈한 절단기 설정 높이 최댓값
//NOTE - 절단하고 남은 부분 가져감
//ANCHOR - 이분탐색으로 찾을 수 있을 듯

const [N, M] = input.shift().split(" ").map(Number);
const treeHeight = input.at(0).split(" ").map(Number);

const binarySearch = (findValue) => {
  let left = 0;
  let right = 1000000000;
  let mid = Math.floor((left + right) / 2);

  while (left <= right) {
    const treeLengthToTake = treeHeight.reduce((acc, curr) => (curr > mid ? acc + curr - mid : acc), 0);

    if (treeLengthToTake < findValue || (treeLengthToTake === findValue && findValue === 0)) {
      right = mid - 1;
    } else if (treeLengthToTake > findValue) {
      left = mid + 1;
    } else if (treeLengthToTake === findValue) {
      return mid;
    }

    mid = Math.floor((left + right) / 2);
  }

  return right;
};

console.log(binarySearch(M));
