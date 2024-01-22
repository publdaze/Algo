const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const factorial = (num) => {
  let result = BigInt(1);
  for (let i = 2; i <= num; i++) {
    result *= BigInt(i);
  }
  return result;
};

let cnt = 0;
let fac = factorial(input);

while ((fac % BigInt(10)).toString() === "0") {
  fac /= BigInt(10);
  cnt += 1;
}

console.log(cnt);
