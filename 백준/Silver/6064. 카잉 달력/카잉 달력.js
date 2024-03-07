const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((t) => t.split(" ").map(Number));

//REVIEW - 기준을 하나로!
//TODO - <x:y>는 몇 번째 해를 나타내는지
//NOTE - x === M ? x' = 0 : x' += 1, y === N ? y' = 0 : y' += 1
//ANCHOR - n 번째 -> n % M = x, n % N = y

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function gcd(a, b) {
  let r;
  while (b != 0) {
    r = a % b;
    a = b;
    b = r;
  }
  return a;
}

const kaing = (M, N, x, y) => {
  if (x === 1 && y === 1) return 1;
  const maxN = lcm(N, M);

  let n = x;
  while (n <= maxN) {
    if ((n % N || N) === y) {
      return n;
    }
    n += M;
  }
  return -1;
};

console.log(input.map(([M, N, x, y]) => kaing(M, N, x, y)).join("\n"));

/* 시간 초과
const kaing = (M, N, x, y) => {
  if (x === 1 && y === 1) return 1;

  let n = 1;
  while (1) {
    if ((n % M || M) === x && (n % N || N) === y) {
      return n;
    }
    if (n % M === 0 && n % N === 0) return -1;
    n += 1;
  }
};

console.log(input.map(([M, N, x, y]) => kaing(M, N, x, y)).join("\n"));
 */
