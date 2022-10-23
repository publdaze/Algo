const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const solve = () => {
  data = input.slice(1);
  data.forEach((d) => {
    [x1, y1, r1, x2, y2, r2] = d.split(" ").map(Number);
    const powSumRadius = (r1 + r2) ** 2; // 4
    const powSubRadius = (r1 - r2) ** 2; // 0
    const powMidDistance = (x2 - x1) ** 2 + (y2 - y1) ** 2; // 0

    if (powSubRadius < powMidDistance && powMidDistance < powSumRadius) {
      console.log(2);
    } else if (x1 === x2 && y1 === y2 && r1 === r2) {
      console.log(-1);
    } else if (
      powSubRadius === powMidDistance ||
      powSumRadius === powMidDistance
    ) {
      console.log(1);
    } else {
      console.log(0);
    }
  });
};

solve();
