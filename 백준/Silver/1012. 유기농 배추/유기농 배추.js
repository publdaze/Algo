const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

//REVIEW
// 2차원..!

const near = [
  [-1, 0],
  [0, -1],
  [1, 0],
  [0, 1],
];

let cabbagePatch;
const bfs = (startX, startY) => {
  // 방문할 배추 위키 큐
  const queue = [[startX, startY]];

  while (queue.length > 0) {
    // 첫 원소 pop
    const [x, y] = queue.shift();
    // 방문 체크

    if (cabbagePatch[x][y] === 0) continue;
    cabbagePatch[x][y] = 0;

    // 인접한 노드 방문할 큐에 추가
    for (let [diffX, diffY] of near) {
      // 배추밭 범위 벗어나면 해당 노드로 방문 불가하니 해당 턴 넘기기
      if (x + diffX < 0 || y + diffY < 0 || x + diffX >= M || y + diffY >= N) continue;

      // 인접한 노드중 배추가 존재하면서, 방문하지 않은 경우에 대해서 큐에 추가
      if (cabbagePatch[x + diffX][y + diffY] === 1) {
        queue.push([x + diffX, y + diffY]);
      }
    }
  }
};

const [T, ...testCases] = input;
let index = 0;

for (let t = 0; t < T; t++) {
  var [M, N, coordinateCnt] = testCases.at(index).split(" ").map(Number);
  let insectCnt = 0;

  // 배추 밭
  cabbagePatch = Array.from({ length: M }, () => Array.from({ length: N }, () => 0));

  index += 1;

  // 배추 있는 부분 표시
  for (let i = index; i < index + coordinateCnt; i++) {
    const [x, y] = testCases[i].split(" ").map(Number);
    cabbagePatch[x][y] = 1;
  }

  // 배추 있는 부분 기준 시작해서 탐색
  for (let k = 0; k < M; k++) {
    for (let l = 0; l < N; l++) {
      // 이미 방문 했으면 벌레 카운트 된 항목이니 탈출
      if (cabbagePatch[k][l] === 1) {
        // 이미 방문 안 된 상태면 이전 탐색한 그래프와는 분리된 그래프이기 때문에 벌레 수 증가
        insectCnt += 1;
        bfs(k, l, cabbagePatch);
      }
    }
  }

  index += coordinateCnt;

  console.log(insectCnt);
}
