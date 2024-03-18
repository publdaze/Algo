const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

//TODO - 적록 색약 구역 수, 일반 구역 수
//NOTE - 적록 색약 빨간 초록 구분 X

const N = Number(input.shift());
const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

const dfs = (arr, visited, startR, startC) => {
  const stack = [[startR, startC]];
  visited[startR][startC] = true;

  while (stack.length > 0) {
    const [r, c] = stack.pop();

    for (let [x, y] of directions) {
      if (x + r < 0 || y + c < 0 || x + r >= N || y + c >= N) continue;
      if (visited[x + r][y + c] === false && arr[x + r][y + c] === arr[r][c]) {
        stack.push([x + r, y + c]);
        visited[x + r][y + c] = true;
      }
    }
  }
};

let section1 = 0;
let section2 = 0;
const visited1 = Array.from({ length: N }, () => Array.from({ length: N }, () => false));
const visited2 = Array.from({ length: N }, () => Array.from({ length: N }, () => false));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (visited1[i][j] === false) {
      section1 += 1;
      dfs(input, visited1, i, j);
    }
  }
}

const red = input.map((line) => line.replaceAll("G", "R"));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (visited2[i][j] === false) {
      section2 += 1;
      dfs(red, visited2, i, j);
    }
  }
}

console.log(section1, section2);
