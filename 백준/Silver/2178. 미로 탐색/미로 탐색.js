const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [RAW_SIZE, COL_SIZE] = input.shift().split(" ").map(Number);
const miro = input.map((line) => [...line]);

const bfs = () => {
  const queue = [[0, 0, 1]];
  miro[0][0] = 0;

  while (queue.length > 0) {
    const [raw, col, distance] = queue.shift();

    if (raw + 1 < RAW_SIZE && miro[raw + 1][col] === "1") {
      queue.push([raw + 1, col, distance + 1]);
      miro[raw + 1][col] = 0;
    }
    if (raw > 0 && miro[raw - 1][col] === "1") {
      queue.push([raw - 1, col, distance + 1]);
      miro[raw - 1][col] = 0;
    }
    if (col + 1 < COL_SIZE && miro[raw][col + 1] === "1") {
      queue.push([raw, col + 1, distance + 1]);
      miro[raw][col + 1] = 0;
    }
    if (col > 0 && miro[raw][col - 1] === "1") {
      queue.push([raw, col - 1, distance + 1]);
      miro[raw][col - 1] = 0;
    }

    if (raw === RAW_SIZE - 1 && col === COL_SIZE - 1) return distance;
  }
};

console.log(bfs());
