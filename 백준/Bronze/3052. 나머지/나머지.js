const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const solve = () => {
  const mod = input.map((i) => i % 42);
  const diffNumSet = new Set(mod);
  console.log(diffNumSet.size);
};

solve();
