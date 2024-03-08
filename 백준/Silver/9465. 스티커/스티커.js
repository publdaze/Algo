const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

//TODO - 스티커의 점수의 최댓값
//NOTE - 변 공유하는 스티커 못 씀
//ANCHOR - 대각선 i-1 vs 대각선 i-2

const T = Number(input.shift());
const result = [];

const getMaxStickerScore = (n, scores) => {
  for (let i = 1; i < n; i++) {
    scores[0][i] += Math.max(scores[1][i - 1], scores[1][i - 2] || 0);
    scores[1][i] += Math.max(scores[0][i - 1], scores[0][i - 2] || 0);
  }

  return Math.max(scores[0].at(-1), scores[1].at(-1));
};

for (let t = 0; t < T; t++) {
  result.push(
    getMaxStickerScore(
      Number(input.at(t * 3)),
      input.slice(t * 3 + 1, t * 3 + 3).map((line) => line.split(" ").map(Number))
    )
  );
}

console.log(result.join("\n"));
