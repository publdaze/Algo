const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

//REVIEW 시간 초과..!

const [R, C] = input.shift().split(" ").map(Number);
const visited = Array.from({ length: 26 }, () => 0);

const direction = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];

let maxDistance = 0;
const dfs = (raw, col, depth) => {
  if (depth > maxDistance) maxDistance = depth;

  for (let [r, c] of direction) {
    if (raw + r < 0 || raw + r >= R || col + c < 0 || col + c >= C) continue;
    if (visited[input[raw + r][col + c].charCodeAt() - 65] === 0) {
      visited[input[raw + r][col + c].charCodeAt() - 65] = 1;
      dfs(raw + r, col + c, depth + 1);
      visited[input[raw + r][col + c].charCodeAt() - 65] = 0;
    }
  }
};

visited[input[0][0].charCodeAt() - 65] = 1;
dfs(0, 0, 1);
console.log(maxDistance);

/* 
const [R, C] = input.shift().split(" ").map(Number);
const visited = new Set([input[0][0]]);

const direction = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];

let maxDistance = 0;
const dfs = (raw, col) => {
  if (visited.size > maxDistance) maxDistance = visited.size;

  for (let [r, c] of direction) {
    if (raw + r < 0 || raw + r >= R || col + c < 0 || col + c >= C) continue;
    if (!visited.has(input[raw + r][col + c])) {
      visited.add(input[raw + r][col + c]);
      dfs(raw + r, col + c);
      visited.delete(input[raw + r][col + c]);
    }
  }
};

dfs(0, 0);
console.log(maxDistance); */

/* 시간 초과 O(4^(R*C))
const [R, C] = input.shift().split(" ").map(Number);

const direction = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];

const bfs = () => {
  let maxDistance = 0;

  const stack = [[0, 0, new Set([input[0][0]])]];

  while (stack.length > 0) {
    const [raw, col, visited] = stack.pop();
    if (visited.size > maxDistance) maxDistance = visited.size;

    for (let [r, c] of direction) {
      if (raw + r < 0 || raw + r >= R || col + c < 0 || col + c >= C) continue;
      if (!visited.has(input[raw + r][col + c])) {
        stack.push([raw + r, col + c, new Set([...visited, input[raw + r][col + c]])]);
      }
    }
  }

  return maxDistance;
};

console.log(bfs());
 */
