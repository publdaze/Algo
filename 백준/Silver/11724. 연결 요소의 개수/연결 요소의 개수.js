const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((value) => value.split(" "));

//TODO - 연결 요소 개수 구하기
//ANCHOR - 그래프 그리기, 방문 체크, 방문 안 했으면 연결 요소 +1

const [N, M] = input.shift().map(Number);
let graph = Array.from({ length: N + 1 }, () => []);
let visited = Array.from({ length: N + 1 }, () => 0);
let connectedComponentCnt = 0;

const bfs = (start) => {
  if (visited[start] === 1) return;
  connectedComponentCnt += 1;

  const queue = [start];
  visited[start] = 1;

  while (queue.length > 0) {
    const src = queue.pop();

    graph[src].forEach((dst) => {
      if (visited[dst] === 0) {
        queue.push(dst);
        visited[dst] = 1;
      }
    });
  }
};

const setGraph = () => {
  input.forEach(([src, dst]) => {
    graph[src].push(dst);
    graph[dst].push(src);
  });
};

setGraph();
Object.keys(graph)
  .slice(1)
  .forEach((key) => bfs(key));

console.log(connectedComponentCnt);
