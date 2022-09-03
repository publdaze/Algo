const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split(" ")
  .map((value) => +value);

const solve = () => {
  const diceEyes = {};
  input.forEach((x) => {
    diceEyes[x] = (diceEyes[x] || 0) + 1;
  });

  const sameThree = Object.keys(diceEyes).find((key) => diceEyes[key] === 3);
  if (sameThree) console.log(10000 + sameThree * 1000);
  else {
    const sameTwo = Object.keys(diceEyes).find((key) => diceEyes[key] === 2);
    if (sameTwo) console.log(1000 + sameTwo * 100);
    else {
      const biggestNum = Math.max(...Object.keys(diceEyes).map(Number));
      console.log(biggestNum * 100);
    }
  }
};

solve();
