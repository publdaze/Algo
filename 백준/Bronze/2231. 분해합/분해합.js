const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const N = Number(input);

for (let i = 1; i <= N; i++) {
  if (
    String(i)
      .split("")
      .reduce((acc, curr) => acc + Number(curr), 0) +
      i ===
    N
  ) {
    console.log(i);
    return;
  }
}

console.log(0);
