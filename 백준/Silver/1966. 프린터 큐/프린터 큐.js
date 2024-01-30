const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1);

const info = [];
const queues = [];

input.forEach((line, index) => {
  const splitLine = line.split(" ").map(Number);
  if (index % 2 === 0) {
    info.push(splitLine);
  } else {
    queues.push(splitLine);
  }
});

info.forEach(([, M], index) => {
  const queue = queues[index];
  let cnt = 1;

  while (true) {
    if (queue.some((q) => q > queue.at(0))) {
      queue.push(queue.shift());
    } else {
      if (M === 0) break;
      cnt += 1;
      queue.shift();
    }

    M -= 1;
    if (M < 0) M += queue.length;
  }

  console.log(cnt);
});
