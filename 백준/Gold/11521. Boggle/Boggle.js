//TODO - 그리드에서 찾을 수 있는 단어 사전순 정렬 / 각 그리드 사이 - 포함
//NOTE - 단어 형성 시 수평,수직,대각선 이어야 함 / 각 격자 위치는 한 번만 가능 / q -> qu
//REVIEW

const DIRECTION = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
  [1, 1],
  [-1, 1],
  [1, -1],
  [-1, -1],
];

const cannotGo = (maxLength, nextRow, nextCol) => {
  return nextRow < 0 || nextCol < 0 || nextRow >= maxLength || nextCol >= maxLength;
};

const dfs = (grid, row, col, word, visited) => {
  if (cannotGo(grid.length, row, col) || visited[row][col]) return false;

  if (word.length === 0) return true;
  if (grid[row][col] !== word[0] || (grid[row][col] === "q" && word.substring(0, 2) !== "qu")) {
    return false;
  }

  if (word.length === 1) return true;

  visited[row][col] = true;
  for (let [dr, dc] of DIRECTION) {
    if (dfs(grid, row + dr, col + dc, grid[row][col] === "q" ? word.substring(2) : word.substring(1), visited))
      return true;
  }
  visited[row][col] = false;
  return false;
};

const hasWord = (grid, word) => {
  const visited = Array.from({ length: grid.length }, () => Array(grid.length).fill(false));
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid.length; col++) {
      if (dfs(grid, row, col, word, visited)) return true;
    }
  }
  return false;
};

const solution = (words, grids) => {
  const result = [];
  grids.forEach((grid) => {
    result.push(...words.reduce((acc, word) => (hasWord(grid, word) ? [...acc, word] : acc), []).sort(), "-");
  });
  return result.join("\n");
};

const fs = require("fs");
const rawData = fs
  .readFileSync(process.platform === "linux" ? 0 : "./input.txt")
  .toString()
  .trim();
const splittedData = rawData.split("\n");
const W = Number(splittedData.shift());
const words = splittedData.splice(0, W);
const grids = [];

while (splittedData[0] !== "0") {
  const D = Number(splittedData.shift());
  grids.push(splittedData.splice(0, D).map((row) => [...row]));
}

console.log(solution(words, grids));

/* 25퍼 오답
const DIRECTION = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
  [1, 1],
  [-1, 1],
  [1, -1],
  [-1, -1],
];

const cannotGo = (maxLength, nextRow, nextCol) => {
  return nextRow < 0 || nextCol < 0 || nextRow >= maxLength || nextCol >= maxLength;
};

const cannotMakeWord = (nextChar, currFindChar, nextFindChar) => {
  return nextChar !== nextFindChar || (currFindChar === "q" && nextChar !== "u");
};

const dfs = (grid, row, col, word, nextDepth) => {
  if (nextDepth >= word.length - 1) return word[nextDepth] === "q" ? false : true;

  for ([dr, dy] of DIRECTION) {
    if (
      cannotGo(grid.length, row + dr, col + dy) ||
      cannotMakeWord(grid[row + dr][col + dy], word[nextDepth - 1], word[nextDepth])
    )
      continue;

    if (dfs(grid, row + dr, col + dy, word, word[nextDepth] === "q" ? nextDepth + 2 : nextDepth + 1)) return true;
  }
  return false;
};

const hasWord = (grid, word) => {
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid.length; col++) {
      if (word[0] === "q" && word[1] !== "u") return false;
      if (grid[row][col] === word[0])
        if (word[0] === "q") {
          if (dfs(grid, row, col, word, 2)) return true;
        } else {
          if (dfs(grid, row, col, word, 1)) return true;
        }
    }
  }
  return false;
};

const solution = (words, grids) => {
  const result = [];
  grids.forEach((grid) => {
    result.push(...words.reduce((acc, word) => (hasWord(grid, word) ? [...acc, word] : acc), []).sort(), "-");
  });
  return result.join("\n");
};

const fs = require("fs");
const rawData = fs
  .readFileSync(process.platform === "linux" ? 0 : "./input.txt")
  .toString()
  .trim();
const splittedData = rawData.split("\n");
const W = Number(splittedData.shift());
const words = splittedData.splice(0, W);
const grids = [];

while (splittedData[0] !== "0") {
  const D = Number(splittedData.shift());
  grids.push(splittedData.splice(0, D).map((row) => [...row]));
}

console.log(solution(words, grids));
 */
