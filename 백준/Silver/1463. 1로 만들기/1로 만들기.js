const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const N = Number(input);
const minValueList = [0, 0, 1, 1];

const calc = (number) => {
  let minValue = 10 ** 6;
  if (number % 3 === 0 && minValueList[number / 3] + 1 < minValue) {
    minValue = minValueList[number / 3] + 1;
  }
  if (number % 2 === 0 && minValueList[number / 2] + 1 < minValue) {
    minValue = minValueList[number / 2] + 1;
  }
  if (minValueList[number - 1] + 1 < minValue) {
    minValue = minValueList[number - 1] + 1;
  }

  return minValue;
};

for (let i = 4; i <= N; i++) {
  minValueList[i] = calc(i);
}

console.log(minValueList.at(N));
