const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const isOdd = (i) => {
  return i % 2;
};

const solve = () => {
  const oneLine = input.replace(/\n/g, ".");
  const cnt = [...oneLine].reduce((p, c, i) => {
    if (isOdd(i + 1) && c === "F") return (p += 1);
    return p;
  }, 0);

  console.log(cnt);
};

solve();
