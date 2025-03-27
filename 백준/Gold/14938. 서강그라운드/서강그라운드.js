const fs = require("fs");
const inputNumList = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

// 여러 지역 중 한 지역 낙하
// 지역 양방향 통행 가능
// 낙하 지역 중심 수색 범위 m이내 모든 지역 아이템 습득 가능
// 얻을 수 있는 아이템 최대 개수는?

// SOL - 모든 지역 완탐 n^2 (1 ≤ n ≤ 100)

const getGraph = (nodeCnt, items, connects) => {
  // items 길이랑 nodeCnt랑 똑같은데, nodeCnt를 인자로 받아올 필요가 있을까?..
  const graph = Array.from({ length: nodeCnt + 1 }, (_, i) => ({ itemCnt: items[i - 1], adjacent: [] }));

  for (const [src, dst, dist] of connects) {
    // 자료구조 복잡도가 너무 높은가?..
    graph[src].adjacent.push({ node: dst, dist });
    graph[dst].adjacent.push({ node: src, dist });
  }

  return graph;
};

// 너무 인자를 많이 받는 것 같기도...
const searchDijkstra = (start, nodeCnt, maxDist, graph) => {
  const distance = Array.from({ length: nodeCnt + 1 }, () => Infinity);
  distance[start] = 0;
  const pq = [start]; // [출발 노드, 거리]

  while (pq.length > 0) {
    pq.sort((a, b) => distance[a] - distance[b]);
    const src = pq.shift();

    for (const { node: dst, dist } of graph[src].adjacent) {
      if (distance[src] + dist > maxDist || distance[src] + dist >= distance[dst]) continue;
      pq.push(dst);
      distance[dst] = distance[src] + dist;
    }
  }

  return distance.reduce((acc, curr, i) => (curr !== Infinity ? acc + graph[i].itemCnt : acc), 0);
};

const solution = (nodeCnt, maxDist, items, connects) => {
  let maxItemCnt = 0;
  const graph = getGraph(nodeCnt, items, connects);

  for (let node = 1; node <= nodeCnt; node++) {
    const itemCnt = searchDijkstra(node, nodeCnt, maxDist, graph);
    maxItemCnt = Math.max(maxItemCnt, itemCnt);
  }

  return maxItemCnt;
};

const [nodeCnt, maxDist] = inputNumList.shift();
const items = inputNumList.shift();
console.log(solution(nodeCnt, maxDist, items, inputNumList));
