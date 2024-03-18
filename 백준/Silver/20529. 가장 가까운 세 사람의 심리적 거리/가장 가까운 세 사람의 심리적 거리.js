const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

//TODO - 가장 가까운 **세 학생** 사이의 심리적인 거리
//ANCHOR - NlogN 이하
//REVIEW - 시간 복잡도 고려 후 접근 방식 모르겠음

const T = Number(input.shift());

const calcMindDistance = (N, mbtiList) => {
  const distances = [];

  if (N >= 33) return 0;

  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      for (let k = j + 1; k < N; k++) {
        let distance = 0;
        for (let m = 0; m < 4; m++) {
          if (mbtiList[i][m] !== mbtiList[j][m]) distance += 1;
          if (mbtiList[j][m] !== mbtiList[k][m]) distance += 1;
          if (mbtiList[k][m] !== mbtiList[i][m]) distance += 1;
        }
        distances.push(distance);
      }
    }
  }

  return Math.min(...distances);
};

const result = [];

for (let i = 0; i < T; i++) {
  const N = input.at(i * 2);
  const mbtiList = input.at(i * 2 + 1).split(" ");
  result.push(calcMindDistance(N, mbtiList));
}

console.log(result.join("\n"));
