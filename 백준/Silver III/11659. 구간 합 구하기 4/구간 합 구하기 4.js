const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
const [, numberString, ...ranges] = input;

const numberList = numberString.split(" ").reduce(
  (acc, curr) => {
    acc.push(acc.at(-1) + Number(curr));
    return acc;
  },
  [0]
);

console.log(
  ranges
    .map((range) => {
      const [start, end] = range.split(" ").map(Number);

      return numberList[end] - numberList[start - 1];
    })
    .join("\n")
);

/* 시간 초과
const numberList = numberString.split(" ").map(Number);

ranges.forEach((range) => {
  const [start, end] = range.split(" ").map(Number);

  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += numberList[i - 1];
  }

  console.log(sum);
});
*/
