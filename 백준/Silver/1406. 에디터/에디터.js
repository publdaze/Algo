const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

//TODO - 모든 명령어를 수행 후 문자열
//NOTE - 처음 커서 위치는 맨 뒤
//ANCHOR - 커서 기준 좌,우 배열 분리 우 배열 reverse 처리 pop과 push만으로 처리 가능

const [initStr, M, ...commands] = input;
const left = [...initStr];
const right = [];

commands.forEach((command) => {
  if (command === "L") {
    const leftChar = left.pop();
    if (leftChar) right.push(leftChar);
    return;
  }
  if (command === "D") {
    const rightChar = right.pop();
    if (rightChar) left.push(rightChar);
    return;
  }
  if (command === "B") {
    left.pop();
    return;
  }
  const addedChar = command.split(" ").at(-1);
  left.push(addedChar);
});

console.log(left.concat(right.reverse()).join(""));

/* 틀림 - 커서 맨 끝인 경우 고려X undefined 값 join시 무시되어서 자동 고려되어 짐 but push된 값이 pop될 때 문제 발생
const [initStr, M, ...commands] = input;
const left = [...initStr];
const right = [];

commands.forEach((command) => {
  if (command === "L") {
    right.push(left.pop());
    return;
  }
  if (command === "D") {
    left.push(right.pop());
    return;
  }
  if (command === "B") {
    left.pop();
    return;
  }
  const addedChar = command.split(" ").at(-1);
  left.push(addedChar);
});

console.log(left.concat(right.reverse()).join(""));
 */
