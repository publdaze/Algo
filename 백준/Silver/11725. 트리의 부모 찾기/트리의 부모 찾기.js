const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const nodes = input.map((linkedNodes) => linkedNodes.split(" ").map(Number));

const graph = Array.from({ length: N + 1 }, () => []);
const parentNode = Array.from({ length: N + 1 }, () => undefined);

const setGraph = () => {
  nodes.forEach(([src, dst]) => {
    graph[src].push(dst);
    graph[dst].push(src);
  });
};

const bfs = () => {
  const stack = [1];
  parentNode[1] = null;

  while (stack.length > 0) {
    const parent = stack.pop();

    graph[parent].forEach((child) => {
      if (parentNode[child] === undefined) {
        parentNode[child] = parent;
        stack.push(child);
      }
    });
  }
};

setGraph();
bfs();
console.log(parentNode.slice(2).join("\n"));
