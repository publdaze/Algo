const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

//TODO - 보관된 토마토들이 며칠이 지나면 다 익게 되는지 그 최소 일수
//NOTE - 하루 후 익은 토마토 영향으로 인접(6방향) 토마토 익음 / 토마토가 들어있지 않을 수도 있다.

const [COLSIZE, ROWSIZE, LAYERSIZE] = input.shift();
const box = Array.from({ length: LAYERSIZE }, () => Array.from({ length: ROWSIZE }, () => Array(COLSIZE)));
const initTomatoes = [];

const DIRECTION = [
  [1, 0, 0],
  [-1, 0, 0],
  [0, 1, 0],
  [0, -1, 0],
  [0, 0, 1],
  [0, 0, -1],
];

const setBox = () => {
  for (let layer = 0; layer < LAYERSIZE; layer++) {
    for (let row = 0; row < ROWSIZE; row++) {
      for (let col = 0; col < COLSIZE; col++) {
        if (input[layer * ROWSIZE + row][col] === 1) initTomatoes.push([layer, row, col, 0]);
        box[layer][row][col] = input[layer * ROWSIZE + row][col];
      }
    }
  }
};

const findNotRipened = () => {
  for (let layer = 0; layer < LAYERSIZE; layer++) {
    for (let row = 0; row < ROWSIZE; row++) {
      for (let col = 0; col < COLSIZE; col++) {
        if (box[layer][row][col] === 0) return true;
      }
    }
  }
  return false;
};

const outOfRange = (layer, row, col) => {
  return layer < 0 || row < 0 || col < 0 || layer >= LAYERSIZE || row >= ROWSIZE || col >= COLSIZE;
};

const bfs = () => {
  const queue = initTomatoes;

  let i = 0;
  while (queue.length > i) {
    const [layer, row, col, day] = queue.at(i++);

    for (let [dl, dr, dc] of DIRECTION) {
      if (outOfRange(layer + dl, row + dr, col + dc) || box[layer + dl][row + dr][col + dc] !== 0) continue;
      box[layer + dl][row + dr][col + dc] = 1;

      queue.push([layer + dl, row + dr, col + dc, day + 1]);
    }

    if (queue.length === i) {
      return findNotRipened() ? -1 : day;
    }
  }

  return -1;
};

setBox();
console.log(bfs());

/* 92% 틀림 - initTomatoes가 없을 경우 고려X
const [COLSIZE, ROWSIZE, LAYERSIZE] = input.shift();
const box = Array.from({ length: LAYERSIZE }, () => Array.from({ length: ROWSIZE }, () => Array(COLSIZE)));
const initTomatoes = [];

const DIRECTION = [
  [1, 0, 0],
  [-1, 0, 0],
  [0, 1, 0],
  [0, -1, 0],
  [0, 0, 1],
  [0, 0, -1],
];

const setBox = () => {
  for (let layer = 0; layer < LAYERSIZE; layer++) {
    for (let row = 0; row < ROWSIZE; row++) {
      for (let col = 0; col < COLSIZE; col++) {
        if (input[layer * ROWSIZE + row][col] === 1) initTomatoes.push([layer, row, col, 0]);
        box[layer][row][col] = input[layer * ROWSIZE + row][col];
      }
    }
  }
};

const findNotRipened = () => {
  for (let layer = 0; layer < LAYERSIZE; layer++) {
    for (let row = 0; row < ROWSIZE; row++) {
      for (let col = 0; col < COLSIZE; col++) {
        if (box[layer][row][col] === 0) return true;
      }
    }
  }
  return false;
};

const outOfRange = (layer, row, col) => {
  return layer < 0 || row < 0 || col < 0 || layer >= LAYERSIZE || row >= ROWSIZE || col >= COLSIZE;
};

const bfs = () => {
  const queue = initTomatoes;

  let i = 0;
  while (queue.length > i) {
    const [layer, row, col, day] = queue.at(i++);

    for (let [dl, dr, dc] of DIRECTION) {
      if (outOfRange(layer + dl, row + dr, col + dc) || box[layer + dl][row + dr][col + dc] !== 0) continue;
      box[layer + dl][row + dr][col + dc] = 1;

      queue.push([layer + dl, row + dr, col + dc, day + 1]);
    }

    if (queue.length === i) {
      return findNotRipened() ? -1 : day;
    }
  }
};

setBox();
console.log(bfs());
 */

/* 시간초과
const [COLSIZE, ROWSIZE, LAYERSIZE] = input.shift();
const box = Array.from({ length: LAYERSIZE }, () => Array.from({ length: ROWSIZE }, () => Array(COLSIZE)));
const initTomatoes = [];

const DIRECTION = [
  [1, 0, 0],
  [-1, 0, 0],
  [0, 1, 0],
  [0, -1, 0],
  [0, 0, 1],
  [0, 0, -1],
];

const setBox = () => {
  for (let layer = 0; layer < LAYERSIZE; layer++) {
    for (let row = 0; row < ROWSIZE; row++) {
      for (let col = 0; col < COLSIZE; col++) {
        if (input[layer * ROWSIZE + row][col] === 1) initTomatoes.push([layer, row, col, 0]);
        box[layer][row][col] = input[layer * ROWSIZE + row][col];
      }
    }
  }
};

const findNotRipened = () => {
  for (let layer = 0; layer < LAYERSIZE; layer++) {
    for (let row = 0; row < ROWSIZE; row++) {
      for (let col = 0; col < COLSIZE; col++) {
        if (box[layer][row][col] === 0) return true;
      }
    }
  }
  return false;
};

const outOfRange = (layer, row, col) => {
  return layer < 0 || row < 0 || col < 0 || layer >= LAYERSIZE || row >= ROWSIZE || col >= COLSIZE;
};

const bfs = () => {
  const queue = initTomatoes;

  while (queue.length > 0) {
    const [layer, row, col, day] = queue.shift();

    for (let [dl, dr, dc] of DIRECTION) {
      if (outOfRange(layer + dl, row + dr, col + dc) || box[layer + dl][row + dr][col + dc] !== 0) continue;
      box[layer + dl][row + dr][col + dc] = 1;

      queue.push([layer + dl, row + dr, col + dc, day + 1]);
    }

    if (queue.length === 0) {
      return findNotRipened() ? -1 : day;
    }
  }
};

setBox();
console.log(bfs());
 */
