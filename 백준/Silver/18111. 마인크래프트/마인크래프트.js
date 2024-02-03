const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

// 땅(0, 0, M, N) 고르기 -> 집 건설
// 블록 제거 2초, 블록 쌓기 1초
// TODO 최소시간 -> 땅의 높이(가장 높은)
// NOTE 보유 블럭 B, 0 <= 땅 높이 <= 256
// ANCHOR 맨 위 층을 내릴지, 맨 밑 층을 올릴 지

let [N, M, B] = input[0].split(" ").map(Number);
let land = input
  .slice(1)
  .map((line) => line.split(" ").map(Number))
  .flat();

const MAX_FLOOR = 256;
const MIN_FLOOR = 0;

let [highFloor, lowFloor] = [Math.max(...land), Math.min(...land)];
let time = 0;

while (highFloor > lowFloor) {
  let flag = null;
  let downTime = 0;
  let upTime = 0;

  for (let i = 0; i < land.length; i++) {
    if (land[i] <= lowFloor) {
      upTime += 1;
    }
    if (upTime > B) {
      flag = "DONN";
      break;
    }
  }
  for (let i = 0; i < land.length; i++) {
    if (flag === null && downTime >= upTime) {
      flag = "UP";
      break;
    }
    if (land[i] >= highFloor) {
      downTime += 2;
    }
  }

  if (flag === "UP" || (flag === null && downTime >= upTime)) {
    time += upTime;
    lowFloor += 1;
    B -= upTime;
  } else {
    time += downTime;
    highFloor -= 1;
    B += downTime / 2;
  }
}

console.log(time, highFloor);
