const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

//REVIEW

const [N, M, S] = input;

let PnCnt = 0;
let pattern = 0;

let i = 0;
while (i < Number(M) - 2) {
  if (S[i] === "I" && S[i + 1] === "O" && S[i + 2] === "I") {
    pattern += 1;
    if (pattern === Number(N)) {
      PnCnt += 1;
      pattern -= 1;
    }
    i += 2;
  } else {
    pattern = 0;
    i += 1;
  }
}

console.log(PnCnt);
