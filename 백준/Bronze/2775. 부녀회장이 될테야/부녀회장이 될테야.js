const fs = require("fs");
const inputStrings = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [T, ...inputs] = inputStrings;
const matrix = Array.from({ length: 14 + 1 }, () => Array.from({ length: 14 }, (v, i) => i + 1));

for (let i = 1; i < 14 + 1; i++) {
  for (let j = 1; j < 14 + 1; j++) {
    matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
  }
}

for (let i = 0; i < T; i++) {
  const [k, n] = [inputs[i * 2], inputs[i * 2 + 1]];
  console.log(matrix[k][n - 1]);
}
