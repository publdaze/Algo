const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

//REVIEW

const getNegabinary = (num) => {
  if (num === 0) return "0";

  let result = "";
  while (num !== 0) {
    let remainder = Math.abs(num % -2);
    num = Math.ceil(num / -2);

    result = String(remainder) + result;
  }

  return result;
};
console.log(getNegabinary(Number(input)));

/* 시간 초과
const num = Number(input);

const findBinary = () => {
  const queue = [
    [0, 1, "1"],
    [0, 0, "0"],
  ];

  while (queue.length > 0) {
    const [digit, currNum, binary] = queue.shift();

    if (currNum === num) return binary;

    queue.push([digit + 1, currNum + (-2) ** (digit + 1), "1" + binary]);
    queue.push([digit + 1, currNum, "0" + binary]);
  }
};

console.log(findBinary());
 */
