const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const result = input.slice(1);

const solve = () => {
  result.forEach((element) => {
    let score = 0;
    const sumScore = element.split("").reduce((prev, curr) => {
      if (curr === "O") score += 1;
      else score = 0;
      return prev + score;
    }, 0);
    console.log(sumScore);
  });
};

solve();
