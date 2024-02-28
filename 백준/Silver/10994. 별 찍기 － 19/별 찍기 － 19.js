const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const N = Number(input);
const size = 4 * (N - 1) + 1;

const star = Array.from({ length: size }, () => Array.from({ length: size }, () => " "));

const square = (startPoint, endPoint) => {
  if (startPoint === endPoint) {
    star[startPoint][endPoint] = "*";
    return;
  }
  for (let i = startPoint; i <= endPoint; i++) {
    star[startPoint][i] = "*";
    star[i][startPoint] = "*";
    star[endPoint][i] = "*";
    star[i][endPoint] = "*";
  }

  square(startPoint + 2, endPoint - 2);
};

square(0, size - 1);
console.log(star.map((line) => line.join("")).join("\n"));
