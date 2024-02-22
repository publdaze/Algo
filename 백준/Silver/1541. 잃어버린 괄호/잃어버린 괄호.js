const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

//REVIEW - 접근 방법이 안 떠오름
//STUB - 자바스크립트에서는 0으로 시작하는 수를 8진법 수로 처리하려고 시도

const splitedMinus = input.split("-");

console.log(
  eval(
    splitedMinus
      .map((expression) =>
        expression
          .split("+")
          .map((num) => parseInt(num, 10))
          .reduce((acc, curr) => acc + curr, 0)
      )
      .join("-")
  )
);
