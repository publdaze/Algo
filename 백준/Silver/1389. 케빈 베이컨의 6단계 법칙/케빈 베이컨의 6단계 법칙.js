const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

//REVIEW - 알고리즘은 다 짰는데 코드 짤 때 기존 코드 베이스로 수정하려니 머리가 튕겨냄
//TODO - 최소 몇단계 만에 이어질 수 있는 지 구했을 때 단계 합이 가장 작은 사람들 중 번호 가장 작은 사람
//ANCHOR - bfs로 단계 계산해 가며 노드 방문 처리하면 될 듯

const [userCnt, linkCnt] = input.shift().split(" ").map(Number);
const links = input.map((str) => str.split(" ").map(Number));
const graph = Array.from({ length: userCnt + 1 }, () => []);

const setGraph = () => {
  links.forEach(([src, dst]) => {
    graph[src].push(dst);
    graph[dst].push(src);
  });
};

const bfs = (path) => {
  const visited = Array.from({ length: userCnt + 1 }, () => 0);

  const [start, target] = path;
  const queue = [[start, 1]];

  while (queue.length > 0) {
    const [src, level] = queue.shift();

    for (dst of graph[src]) {
      if (dst === target) return level;
      if (visited[dst] === 0) {
        queue.push([dst, level + 1]);
        visited[dst] = 1;
      }
    }
  }
  return 0;
};

let result = [];

const checkLevel = () => {
  for (let i = 1; i <= userCnt; i++) {
    let sum = 0;
    for (let j = 1; j <= userCnt; j++) {
      if (i !== j) {
        sum += bfs([i, j]);
      }
    }
    result.push(sum);
  }
};

setGraph();
checkLevel();

console.log(result.indexOf(Math.min(...result)) + 1);
