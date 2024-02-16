const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const testcaseLength = input.shift();

for (let T = 0; T < testcaseLength; T++) {
  const n = Number(input.shift());
  const clothesSet = input.splice(0, n);
  const map = new Map();
  clothesSet.forEach((clothes) => {
    const [, type] = clothes.split(" ");
    map.set(type, (map.get(type) ?? 0) + 1);
  });

  if (map.size === 1) {
    console.log(n);
  } else {
    console.log([...map].reduce((acc, curr) => acc * (curr[1] + 1), 1) - 1);
  }
}
