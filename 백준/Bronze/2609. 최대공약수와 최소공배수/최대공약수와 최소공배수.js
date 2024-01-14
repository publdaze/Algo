const fs = require("fs");
const inputStrings = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const [num1, num2] = inputStrings.split(" ");

const gcd = (a, b) => {
  let result = 1;
  while (true) {
    if (result % a === 0 && result % b === 0) {
      return result;
    }
    result += 1;
  }
};
const lcm = (a, b) => {
  let result = a > b ? a : b;
  while (true) {
    if (a % result === 0 && b % result === 0) {
      return result;
    }
    result -= 1;
  }
};

console.log(lcm(num1, num2));
console.log(gcd(num1, num2));
