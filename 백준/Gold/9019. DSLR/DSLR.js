const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((line) => line.split(" ").map(Number));

//REVIEW - 메모리 최적화

const D = (n) => (2 * n) % 10000;
const S = (n) => (n === 0 ? 9999 : n - 1);
const L = (n) => (n % 1000) * 10 + Math.floor(n / 1000);
const R = (n) => (n % 10) * 1000 + Math.floor(n / 10);

const bfs = (A, B) => {
  const visited = Array.from({ length: 10000 }, () => false);
  const queue = [[A, ""]];
  visited[A] = true;

  let i = 0;
  while (i < queue.length) {
    const [n, commands] = queue.at(i++);
    if (n === B) return commands;

    let nextValue;

    nextValue = D(n);
    if (!visited[nextValue]) {
      queue.push([nextValue, commands + "D"]);
      visited[nextValue] = true;
    }
    nextValue = S(n);
    if (!visited[nextValue]) {
      queue.push([nextValue, commands + "S"]);
      visited[nextValue] = true;
    }
    nextValue = L(n);
    if (!visited[nextValue]) {
      queue.push([nextValue, commands + "L"]);
      visited[nextValue] = true;
    }
    nextValue = R(n);
    if (!visited[nextValue]) {
      queue.push([nextValue, commands + "R"]);
      visited[nextValue] = true;
    }
  }
};

const result = [];
for (let [A, B] of input) {
  result.push(bfs(A, B));
}
console.log(result.join("\n"));

/* slice 시간 초과 - S 로직 틀림
const D = (n) => {
  return (2 * n) % 10000;
};
const S = (n) => {
  return n - 1 || 9999;
};
const L = (n) => {
  let nStr = String(n).padStart(4, "0");
  nStr = nStr + nStr.at(0);
  return Number(nStr.slice(1));
};
const R = (n) => {
  let nStr = String(n).padStart(4, "0");
  nStr = nStr.at(-1) + nStr;
  return Number(nStr.slice(0, -1));
};

const COMMANDS = ["D", "S", "L", "R"];
const context = {
  D: D,
  S: S,
  L: L,
  R: R,
};

const bfs = (A, B) => {
  const visited = Array.from({ length: 10000 }, () => false);
  const queue = [[A, ""]];
  visited[A] = true;

  let i = 0;
  while (i < queue.length) {
    const [n, commands] = queue.at(i++);
    if (n === B) return commands;

    for (let command of COMMANDS) {
      const nextValue = context[command](n);
      if (!visited[nextValue]) {
        queue.push([nextValue, commands + command]);
        visited[nextValue] = true;
      }
    }
  }
};

const result = [];
for (let [A, B] of input) {
  result.push(bfs(A, B));
}
console.log(result.join("\n"));
 */

/* 메모리 초과 Set - S 로직 틀림
const D = (n) => {
  return (2 * n) % 10000;
};
const S = (n) => {
  return n - 1 || 9999;
};
const L = (n) => {
  return (n % 1000) * 10 + Math.floor(n / 1000);
};
const R = (n) => {
  return (n % 10) * 1000 + Math.floor(n / 10);
};

const COMMANDS = ["D", "S", "L", "R"];
const context = {
  D: D,
  S: S,
  L: L,
  R: R,
};

const bfs = (A, B) => {
  const visited = new Set();
  const queue = [[A, ""]];
  visited.add(A);

  let i = 0;
  while (i < queue.length) {
    const [n, commands] = queue.at(i++);
    if (n === B) return commands;

    for (let command of COMMANDS) {
      const nextValue = context[command](n);
      if (!visited.has(nextValue)) {
        queue.push([nextValue, commands + command]);
        visited.add(nextValue);
      }
    }
  }
};

for (let [A, B] of input) {
  console.log(bfs(A, B));
} */

/* 메모리 초과, 문자열 slice - S 로직 틀림
const D = (n) => {
  return (2 * n) % 10000;
};
const S = (n) => {
  return n - 1 || 9999;
};
const L = (n) => {
  let nStr = String(n).padStart(4, "0");
  nStr = nStr + nStr.at(0);
  return Number(nStr.slice(1));
};
const R = (n) => {
  let nStr = String(n).padStart(4, "0");
  nStr = nStr.at(-1) + nStr;
  return Number(nStr.slice(0, -1));
};

const COMMANDS = ["D", "S", "L", "R"];
const context = {
  D: D,
  S: S,
  L: L,
  R: R,
};

const bfs = (A, B) => {
  const visited = new Set();
  const queue = [[A, ""]];
  visited.add(A);

  let i = 0;
  while (i < queue.length) {
    const [n, commands] = queue.at(i++);
    if (n === B) return commands;

    for (let command of COMMANDS) {
      const nextValue = context[command](n);
      if (!visited.has(nextValue)) {
        queue.push([nextValue, commands + command]);
        visited.add(nextValue);
      }
    }
  }
};

for (let [A, B] of input) {
  console.log(bfs(A, B));
}
 */
