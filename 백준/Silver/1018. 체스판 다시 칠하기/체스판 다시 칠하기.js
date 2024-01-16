const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ");

const board = [];
const BBoard = [
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
];
const WBoard = [
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
];

let minCount = 32;

input.slice(1).forEach((row) => {
  board.push(row.split(""));
});

for (let i = 8; i <= N; i++) {
  for (let j = 8; j <= M; j++) {
    let BCount = 0;
    let WCount = 0;
    for (let k = i - 8; k < i; k++) {
      for (let l = j - 8; l < j; l++) {
        if (board[k][l] !== BBoard[k - (i - 8)][l - (j - 8)]) {
          BCount += 1;
        }
        if (board[k][l] !== WBoard[k - (i - 8)][l - (j - 8)]) {
          WCount += 1;
        }
      }
    }
    minCount = Math.min(minCount, BCount, WCount);
  }
}

console.log(minCount);
