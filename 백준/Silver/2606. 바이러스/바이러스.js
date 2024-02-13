const fs = require("fs");
const numberList = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [computerCnt, pairCnt, ...pairs] = numberList;

const graph = Array.from({ length: Number(computerCnt) + 1 }, () => []);
const visited = Array.from({ length: Number(computerCnt) + 1 }, () => 0);

pairs.forEach((pair) => {
  const [src, dest] = pair.split(" ");
  graph[src].push(dest);
  graph[dest].push(src);
});

let virus = 0;
visited[1] = 1;
const queue = [1];
while (queue.length > 0) {
  const src = queue.shift();
  graph[src].forEach((dest) => {
    if (visited[dest] === 0) {
      virus += 1;
      queue.push(dest);
      visited[dest] = 1;
    }
  });
}

console.log(virus);
