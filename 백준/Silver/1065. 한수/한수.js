const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const solve = () => {
  const num = +input;
  let result = 99;
  if (num < 100) console.log(num);
  else {
    for (let i = 100; i <= num; i++) {
      const stringI = i + "";
      if (+stringI[1] * 2 === +stringI[0] + +stringI[2]) {
        result += 1;
      }
    }
    console.log(result);
  }
};

solve();
