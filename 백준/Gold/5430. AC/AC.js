const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

//TODO - 배열 초기값에서 모든 수행 함수 수행 시 최종 결과
//NOTE - 함수 R : 수 순서 뒤집기, D : 첫번째수 버리기(비어있으면 에러)
//ANCHOR - 투포인터로 reverse를 앞 뒤 방향 조정으로 처리
//REVIEW - 구현 속도

const T = Number(input.shift());
let flag = true;

const R = (front, rear) => {
  flag = !flag;
  return [rear, front];
};

const D = (front, rear) => {
  return [flag ? front + 1 : front - 1, rear];
};

const context = {
  R: R,
  D: D,
};

const solution = (functions, n, initArray) => {
  let front = 0;
  let rear = initArray.length - 1;

  for (let func of functions) {
    if (func === "D" && ((flag && front > rear) || (!flag && front < rear))) return "error";
    [front, rear] = context[func](front, rear);
  }

  if ((flag && front > rear) || (!flag && front < rear)) return "[]";

  const result = [];
  for (; front !== rear; front < rear ? (front += 1) : (front -= 1)) {
    result.push(initArray[front]);
  }

  result.push(initArray[rear]);
  return "[" + result.toString() + "]";
};

for (let t = 0; t < T; t++) {
  flag = true;
  const [rawFunctions, rawN, rawInitArray] = input.splice(0, 3);
  console.log(solution(rawFunctions.split(""), Number(rawN), JSON.parse(rawInitArray)));
}
