const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

//REVIEW - 접근 방법 모르겠음
//https://westmino.tistory.com/84
//TODO - 친구 사이인 K명의 학생
//NOTE - 그래프에 넣기 -> 순서대로 루프 -> src 친구수 K-1명 안 되면 친구들 visited 처리 -> visited 안된 거 이어서 탐색

const [K, N, F] = input.shift().split(" ").map(Number);
let graph = Array.from({ length: N + 1 }, () => []);

input.forEach((pair) => {
  const [src, dst] = pair.split(" ").map(Number);
  graph[src].push(dst);
  graph[dst].push(src);
});

graph = graph.map((nodes) => nodes.sort((a, b) => a - b));

const checkAllFriends = (friends, checkPerson) => {
  return friends.every((friend) => graph[checkPerson].includes(friend));
};

const bfs = (startPerson) => {
  const friends = [startPerson];
  const visited = Array.from({ length: N + 1 }, () => false);
  const queue = [startPerson];
  visited[startPerson] = true;

  while (queue.length > 0) {
    const src = queue.shift();

    for (let dst of graph[src]) {
      if (visited[dst] === true || !checkAllFriends(friends, dst)) {
        visited[dst] = true;
        continue;
      }

      friends.push(dst);
      queue.push(dst);
      visited[dst] = true;
    }
  }

  return friends.sort((a, b) => a - b);
};

const solve = () => {
  for (let startPerson = 1; startPerson <= N; startPerson++) {
    const friends = bfs(startPerson);
    if (friends.length >= K) return friends.slice(0, K).join("\n");
  }

  return -1;
};

console.log(solve());

/* 59% 틀림 - 다 친구가 아닌 경우 있음
const [K, N, F] = input.shift().split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, (v, i) => [i]);

input.forEach((pair) => {
  const [src, dst] = pair.split(" ").map(Number);
  graph[src].push(dst);
  graph[dst].push(src);
});

const getFriend = () => {
  for (let i = 1; i < graph.length; i++) {
    if (graph[i].length >= K) {
      return graph[i]
        .sort((a, b) => a - b)
        .splice(0, K)
        .join("\n");
    }
  }
  return -1;
};

console.log(getFriend());
 */
