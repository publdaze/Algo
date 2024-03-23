const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

//TODO - A를 B로 바꾸는데 필요한 연산의 최솟값
//NOTE - A*2 or A*10 + 1

const bfs = (start, end) => {
  const queue = [[start, 0]];

  while (queue.length > 0) {
    const [src, depth] = queue.shift();

    if (src * 2 === end || Number(src + "1") === end) return depth + 1 + 1;
    if (src * 2 < end) queue.push([src * 2, depth + 1]);
    if (Number(src + "1") < end) queue.push([Number(src + "1"), depth + 1]);
  }

  return -1;
};

console.log(bfs(...input));
