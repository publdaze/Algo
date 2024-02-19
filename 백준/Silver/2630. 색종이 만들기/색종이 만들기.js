const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

// TODO 하얀색, 파란색 정사각형 개수
// NOTE N = 2^k, N/2로 자르면서 정사각형 나올때까지
// ANCHOR 서로 다른 게 있으면 4분할 재귀 -> 순회하면서 첫번째 수와 다른게 있으면 stop
// Slice한 값 하위로 전달

const N = input.shift();

const coloredPaper = input.map((line) => line.split(" "));

let blueSquareCnt = 0;
let whiteSquareCnt = 0;
const checkCompactPaper = (startX, startY, currN) => {
  const compactColor = coloredPaper[startX][startY];
  const nextN = currN / 2;

  for (let i = startX; i < startX + currN; i++) {
    for (let j = startY; j < startY + currN; j++) {
      if (compactColor !== coloredPaper[i][j]) {
        checkCompactPaper(startX, startY, nextN);
        checkCompactPaper(startX + nextN, startY, nextN);
        checkCompactPaper(startX, startY + nextN, nextN);
        checkCompactPaper(startX + nextN, startY + nextN, nextN);
        return;
      }
    }
  }

  if (compactColor === "1") {
    blueSquareCnt += 1;
  } else {
    whiteSquareCnt += 1;
  }
};

checkCompactPaper(0, 0, N);
console.log(whiteSquareCnt);
console.log(blueSquareCnt);
