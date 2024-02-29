const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);

//REVIEW - 나머지 연산
const [A, B, C] = input;

const halfMod = (square) => {
  if (square === 1n) return A % C;

  const half = halfMod(square / 2n) % C;

  if (square % 2n === 0n) return (half * half) % C;
  return (((half * half) % C) * A) % C;
};

console.log(halfMod(B).toString());
