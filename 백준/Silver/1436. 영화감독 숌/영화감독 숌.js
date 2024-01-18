const fs = require("fs");
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString();

let minNum = 666;
let cnt = 1;

while (true) {
  if (cnt === Number(input)) break;

  minNum += 1;
  if (String(minNum).includes("666")) {
    cnt += 1;
  }
}

console.log(minNum);
