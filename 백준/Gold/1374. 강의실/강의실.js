const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((line) => line.split(" ").map(Number));

const times = [];

for (let [, start, end] of input) {
  times.push([start, 1]);
  times.push([end, -1]);
}

times.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

let maxRoomCnt = 0;
let roomCnt = 0;

for (let [time, cnt] of times) {
  roomCnt += cnt;
  maxRoomCnt = Math.max(maxRoomCnt, roomCnt);
}

console.log(maxRoomCnt);
