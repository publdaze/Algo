const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

//REVIEW - 숫자를 특정 진수의 문자열 리터럴로 변환하는 방법

const [num, radix] = input;

console.log(num.toString(radix).toLocaleUpperCase());
