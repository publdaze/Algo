const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

input.pop();

input.map((numStrList) => {
  const numList = numStrList.split(" ");
  numList.sort((a, b) => a - b);

  const [x, y, z] = numList;

  if (Math.pow(x, 2) + Math.pow(y, 2) === Math.pow(z, 2)) console.log("right");
  else console.log("wrong");
});
