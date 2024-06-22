const fs = require("fs");
const [N, K] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const visited = Array.from({ length: 100001 }, () => 0);

const queue = [[N, 0]];

let i = 0;
while (queue.length > i) {
  const [src, time] = queue.at(i);
  visited[src] = 1;

  if (src === K) {
    console.log(time);
    console.log(queue.slice(i).filter(([s, t]) => s === K && t === time).length);
    break;
  }

  if (src - 1 >= 0 && visited[src - 1] === 0) {
    queue.push([src - 1, time + 1]);
  }
  if (visited[src + 1] === 0) {
    queue.push([src + 1, time + 1]);
  }
  if (visited[src * 2] === 0) {
    queue.push([src * 2, time + 1]);
  }

  i++;
}
