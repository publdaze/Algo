const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

// 사이클이 있냐?

const bellmanFold = (graph, distance) => {
  for (let edge = 1; edge < graph.length - 1; edge++) {
    for (let src = 1; src < graph.length; src++) {
      for (let dst of graph[src]) {
        if (distance[dst] > distance[src] - 1) {
          distance[dst] = distance[src] - 1;
        }
      }
    }
  }

  return distance;
};

const getPhoneBook = (names) => {
  return new Map(names.map((name, i) => [i + 1, name]));
};

const getGraph = (list) => {
  return list.map(([_, ...dsts]) => dsts);
};

const getCycleNumbers = (firstTry, secondTry) => {
  return firstTry.map((dist, i) => (dist === secondTry[i] || i === 0 ? null : i)).filter(Boolean);
};

const getLog = (scenarioNum, phoneBook, cycleNums) => {
  return `Chain Email #${scenarioNum}:\n${
    cycleNums.length === 0 ? `Safe chain email!` : cycleNums.map((num) => phoneBook.get(num)).join(" ")
  }\n`;
};

let t = 1;
let sp = 1;
while (sp < input.length) {
  const [p, s] = input[sp].split(" ").map(Number);
  sp++;
  const names = input[sp].split(" ");
  sp++;
  const connectList = [[], ...input.slice(sp, sp + p).map((connect) => connect.split(" ").map(Number))];
  sp += p;
  const phoneBook = getPhoneBook(names);
  const graph = getGraph(connectList);

  const distance = Array(p + 1).fill(Infinity);
  distance[s] = 0;

  const cycleNum = getCycleNumbers([...bellmanFold(graph, distance)], bellmanFold(graph, distance));
  console.log(getLog(t, phoneBook, cycleNum));

  t++;
}
