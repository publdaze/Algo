const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

//REVIEW - 접근방법이 바로 생각 안 남
//TODO - (r, c) 몇번째로 방문하는 지
//NOTE - 사분면으로 치면 2 -> 1 -> 3 -> 4 순서
//ANCHOR - 사분면 중 어디에 포함되는 지를 재귀적으로 찾기
// -> 어디에 포함되는 지 찾기 - 가운데 정점 기준으로 x, y가 어디에 위치하는 지로 판별
// -> 가운데 정점 찾기 - 이전 가운데 정점 +- 하위 사각형 한 변 크기의 반
// -> 탈출 조건 - 이전 가운데 정점 +- 하위 사각형 한 변 크기의 반
// - 몇 번째 방문인지 -> 사분면별 자나온 만큼 하위 사각형 크기 더하기
// 필요한 값 - 가운데 정점 `x`, `y`, 하위 사각형 한 변 크기

const [N, findY, findX] = input.split(" ").map(Number);

let distance = 0;
const checkQuadrant = (x, y, nextSquareSide) => {
  const nextSquare = nextSquareSide ** 2;
  const halfSide = Math.floor(nextSquareSide / 2);

  if (nextSquareSide < 1) {
    console.log(distance);
    return;
  }

  if (findX > x && findY <= y) {
    // 1사분면
    distance += nextSquare;
    checkQuadrant(x + halfSide, y - halfSide, halfSide);
  } else if (findX <= x && findY <= y) {
    // 2사분면
    checkQuadrant(x - halfSide, y - halfSide, halfSide);
  } else if (findX <= x && findY > y) {
    // 3사분면
    distance += nextSquare * 2;
    checkQuadrant(x - halfSide, y + halfSide, halfSide);
  } else if (findX > x && findY > y) {
    // 4사분면
    distance += nextSquare * 3;
    checkQuadrant(x + halfSide, y + halfSide, halfSide);
  }
};

checkQuadrant(2 ** N / 2 - 1, 2 ** N / 2 - 1, 2 ** N / 2);
