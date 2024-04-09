const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

//TODO - 1번 칸에서 시작해서 100번 칸에 도착하기 위해 주사위를 굴려야 하는 횟수의 최솟값
//ANCHOR - DP로 접근 -> 뱀 타고 내려온 후 다시 올라가는 게 최솟값을 경우 고려 how?
//REVIEW - BFS 접근, DP 접근 다양하게 생각할 수 있어야 할 듯,

const [ladderCnt, snakeCnt] = input.shift();
const BOARD_SIZE = 10;
const visited = Array(BOARD_SIZE * BOARD_SIZE + 1).fill(false);
const snakesAndLadders = new Map(input);

const DICE = [1, 2, 3, 4, 5, 6];

const bfs = (start, end) => {
  const queue = [[start, 0]];
  visited[start] = true;

  while (queue.length > 0) {
    const [src, diceCnt] = queue.shift();
    if (src === end) return diceCnt;
    if (snakesAndLadders.has(src)) {
      queue.unshift([snakesAndLadders.get(src), diceCnt]);
      visited[snakesAndLadders.get(src)] = true;
      continue;
    }
    for (let space of DICE) {
      if (visited[src + space]) continue;
      queue.push([src + space, diceCnt + 1]);
      visited[src + space] = true;
    }
  }
};

console.log(bfs(1, BOARD_SIZE * BOARD_SIZE));

/* BFS 뱀을 타고 간 경우는 count가 증가되지 않는 경우인데, 이를 queue에 넣을 경우 count가 다른 경우보다 적음에도 불구하고 나중에 탐색
const [ladderCnt, snakeCnt] = input.shift();
const BOARD_SIZE = 10;
const snakesAndLadders = new Map(input);

const DICE = [1, 2, 3, 4, 5, 6];

const bfs = (start, end) => {
  const queue = [[start, 0]];

  while (queue.length > 0) {
    const [src, diceCnt] = queue.shift();
    if (src === end) return diceCnt;
    if (snakesAndLadders.has(src)) {
      queue.push([snakesAndLadders.get(src), diceCnt]);
      continue;
    }
    for (let space of DICE) {
      queue.push([src + space, diceCnt + 1]);
    }
  }
};

console.log(bfs(1, BOARD_SIZE * BOARD_SIZE)); */