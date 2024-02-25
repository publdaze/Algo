const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

//TODO - 캠퍼스에서 만날 수 있는 사람의 수
//NOTE - 상하좌우 이동, 벽으로 이동 불가, X 벽, I 도연, P 사람
//ANCHOR - bfs로 경로 탐색 중 사람을 만나면 카운트하면 될 듯, 방문한 공간에 대해서는 벽으로 만들기
//STUB - O(N * M)

const [rawSize, colSize] = input.shift().split(" ").map(Number);
const campus = input.map((raw) => raw.split(""));
const moveDiff = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];

let meetPeopleCnt = 0;

const getDoyeonPoint = () => {
  for (let raw = 0; raw < rawSize; raw++) {
    for (let col = 0; col < colSize; col++) {
      if (campus[raw][col] === "I") {
        return [raw, col];
      }
    }
  }
};

const bfs = (startPoint) => {
  const queue = [startPoint];

  let i = 0;
  while (queue.length > i) {
    const [raw, col] = queue.at(i++);

    if (campus[raw][col] === "P") {
      meetPeopleCnt += 1;
    }

    if (campus[raw][col] === "X") {
      continue;
    }
    campus[raw][col] = "X";

    for (let [x, y] of moveDiff) {
      if (raw + x < 0 || raw + x >= rawSize || col + y < 0 || col + y >= colSize) continue;
      if (campus[raw + x][col + y] !== "X") {
        queue.push([raw + x, col + y]);
      }
    }
  }
};

bfs(getDoyeonPoint());
console.log(meetPeopleCnt || "TT");
