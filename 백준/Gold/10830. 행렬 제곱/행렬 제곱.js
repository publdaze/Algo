const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

//REVIEW - 행렬 거듭제곱, https://star7sss.tistory.com/350

const [N, B] = input.shift();

const matrixMult = (a, b) => {
  let c = Array.from({ length: N }, () => Array.from({ length: N }, () => 0));
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      for (let k = 0; k < N; k++) {
        c[i][j] += (a[i][k] * b[k][j]) % 1000;
      }
      c[i][j] %= 1000;
    }
  }

  return c;
};

const calc = (A, n) => {
  if (n === 1) return A;

  const tmp = calc(A, Math.floor(n / 2));
  if (n % 2 === 0) {
    return matrixMult(tmp, tmp);
  }
  return matrixMult(A, matrixMult(tmp, tmp));
};

console.log(
  calc(input, B)
    .map((line) => line.map((num) => num % 1000).join(" "))
    .join("\n")
);
