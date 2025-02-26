// - 최단 거리 문제로 다익스트라, 벨만포드 고려
// - 오고 가는 두 가지 경우에 대해서 처리해야하는데, 다익스트라의 경우 두가지 형태의 그래프 별도로 만들어줘야 해서 벨만포드로 풀기로 함
// - 벨만포드 알고리즘이 어렴풋이 기억나는데, 정확한 원리가 기억나지 않아서 참고해서 풂

const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const [N, , target] = input.shift();

const go = Array(N + 1).fill(Infinity);
const come = Array(N + 1).fill(Infinity);
go[target] = 0;
come[target] = 0;

for (let i = 0; i < N - 1; i++) {
  for (const [src, dst, cost] of input) {
    go[dst] = Math.min(go[dst], go[src] + cost);
    come[src] = Math.min(come[src], come[dst] + cost);
  }
}

console.log(Math.max(...go.map((num, i) => num + come[i], 0).filter((num) => num !== Infinity)));
