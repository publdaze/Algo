const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("");

const solve = () => {
  const alphabets = Array.from({ length: 26 }, (v, i) =>
    String.fromCharCode(i + 97)
  );

  const alphabetIdxs = alphabets.map((alphabet) => input.indexOf(alphabet));

  console.log(alphabetIdxs.join(" "));
};

solve();
