const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const solve = () => {
  const N = +input.at(0);
  const words = input.slice(1);
  let notGroup = 0;
  words.forEach((word) => {
    word.split("").reduce((p, c, i, s) => {
      if (p.at(-1) !== c && p.includes(c)) {
        notGroup += 1;
        s.splice(1);
      }
      return [...p, c];
    }, []);
  });

  return N - notGroup;
};

console.log(solve());
