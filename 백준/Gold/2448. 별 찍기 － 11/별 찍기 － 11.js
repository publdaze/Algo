const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

//REVIEW - 재귀 어떤 흐름으로 진행해야하는 지 접근 hard

const N = Number(input);

const sheet = Array.from({ length: N }, () => Array.from({ length: 2 * N - 1 }, () => " "));
const base = ["  *  ", " * * ", "*****"];

const triangle = (n, y, x) => {
  if (n === 1) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 5; j++) {
        sheet[y + i][x + j] = base[i][j];
      }
    }
    return;
  }

  triangle(n / 2, y, x + (3 * n) / 2);
  triangle(n / 2, y + (3 * n) / 2, x);
  triangle(n / 2, y + (3 * n) / 2, x + 3 * n);
};

triangle(N / 3, 0, 0);

console.log(sheet.map((line) => line.join("")).join("\n"));
