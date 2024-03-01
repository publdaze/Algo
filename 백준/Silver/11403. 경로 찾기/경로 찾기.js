const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

//TODO - src -> dst 양수인 경로가 있는 지
//NOTE - 양수! 본인 X
//ANCHOR - i - src -> j - dst 대응해서 그래프 생성 / src -> dst bfs로 탐색하며 존재 여부 확인

const N = input.shift().at(0);
const graph = Array.from({ length: N }, () => []);

const setGraph = () => {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (input[i][j] === 1) {
        graph[i].push(j);
      }
    }
  }
};

const bfs = (path) => {
  const visited = Array.from({ length: N }, () => 0);

  const [start, end] = path;
  const stack = [start];
  visited[start] = 1;

  while (stack.length > 0) {
    const src = stack.pop();

    for (dst of graph[src]) {
      if (dst === end) {
        return 1;
      }
      if (visited[dst] === 0) {
        stack.push(dst);
        visited[dst] = 1;
      }
    }
  }
  return 0;
};

const checkPath = () => {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      input[i][j] = bfs([i, j]);
    }
  }
};

setGraph();
checkPath();
console.log(input.map((line) => line.join(" ")).join("\n"));
