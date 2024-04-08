const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const gcd = (a, b) => {
  while (a % b !== 0) {
    [a, b] = [b, a % b];
  }
  return b;
};

const lcm = (a, b) => {
  return (a * b) / gcd(a, b);
};

const T = Number(input.shift());
for (let t = 0; t < T; t++) {
  const [a, b] = input[t].split(" ").map(Number);
  console.log(lcm(a, b));
}
