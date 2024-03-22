const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

//TODO - 만들 수 있는 6자리 숫자 개수
//NOTE - 인접한 4방향 5번 이동 / 여러 방문 가능 / 거쳐간 숫자 붙이기

const [ROW, COL] = [5, 5];

const DIRECTION = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const sixDigitNumbers = new Set();
const dfs = (row, col, digitStr) => {
  if (digitStr.length === 6) {
    sixDigitNumbers.add(Number(digitStr));
    return;
  }
  digitStr += input[row][col];

  for (let [dx, dy] of DIRECTION) {
    if (row + dx < 0 || col + dy < 0 || row + dx >= ROW || col + dy >= COL) continue;
    dfs(row + dx, col + dy, digitStr);
  }
};

for (let i = 0; i < ROW; i++) {
  for (let j = 0; j < COL; j++) {
    dfs(i, j, "");
  }
}

console.log(sixDigitNumbers.size);
