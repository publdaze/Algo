const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

//REVIEW - 문제 이해하고 조건 기억하기, DFS로도 풀어보기 / 메모리 초과(house, selectedChickenHouses 루프 순서 변경 / 인덱스로 조합 구하기 / 🔙상수 변수 하드코딩 / 🔙comb 분리 shift 제거 / ✅findHouses for문 변경)
//TODO - 도시의 치킨 거리가 가장 작게 될지 = 치킨 거리 합이 가장 작게 = 집과 가장 가까운 치킨집 사이의 거리가 작은 치킨집 M 개 합

const [N, M] = input.shift();

function combinations(arr, n) {
  if (n === 1) return arr.map((v) => [v]);
  const result = [];

  arr.forEach((fixed, idx, arr) => {
    const rest = arr.slice(idx + 1);
    const combis = combinations(rest, n - 1);
    const combine = combis.map((v) => [fixed, ...v]);
    result.push(...combine);
  });

  return result;
}

const house = [];
const chickenHouse = [];

// findHouses
input.forEach((raw, i) => {
  for (let j = 0; j < N; j++) {
    if (raw[j] === 1) house.push([i, j]);
    if (raw[j] === 2) chickenHouse.push([i, j]);
  }
});

const chickenHouseIdx = Array.from({ length: chickenHouse.length }, (v, i) => i);
const comb = combinations(chickenHouseIdx, M);
const MAX_CHICKEN_DISTANCE = 98;

const cityDistance = [];
comb.forEach((selectedChickenHouses) => {
  let houseDistance = 0;

  house.forEach(([houseR, houseC]) => {
    let chickenDistance = MAX_CHICKEN_DISTANCE;

    selectedChickenHouses.forEach((selectedChickenHouse) => {
      const distance =
        Math.abs(chickenHouse[selectedChickenHouse][0] - houseR) +
        Math.abs(chickenHouse[selectedChickenHouse][1] - houseC);

      if (chickenDistance > distance) chickenDistance = distance;
    });

    houseDistance += chickenDistance;
  });

  cityDistance.push(houseDistance);
});

console.log(Math.min(...cityDistance));

/* console.log(
  chickenDistances
    .sort((a, b) => a - b)
    .splice(0, M)
    .reduce((acc, curr) => acc + curr, 0)
); */

//집에서 M개 고르는 게 아니라 치킨집에서 M개 고르는 거!
/* const [N, M] = input.shift();

const findHouses = () => {
  const house = [];
  const chickenHouse = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (input[i][j] === 2) house.push([i, j]);
      if (input[i][j] === 1) chickenHouse.push([i, j]);
    }
  }

  return { house, chickenHouse };
};

const { house, chickenHouse } = findHouses();
const MAX_CHICKEN_DISTANCE = 98;
const chickenDistances = Array.from({ length: house.length }, () => MAX_CHICKEN_DISTANCE);

chickenHouse.forEach(([chickenHouseR, chickenHouseC]) => {
  house.forEach(([houseR, houseC], houseIdx) => {
    const chickenDistance = Math.abs(chickenHouseR - houseR) + Math.abs(chickenHouseC - houseC);
    if (chickenDistances[houseIdx] > chickenDistance) chickenDistances[houseIdx] = chickenDistance;
  });
});
console.log(findHouses());
console.log(
  chickenDistances
    .sort((a, b) => a - b)
    .splice(0, M)
    .reduce((acc, curr) => acc + curr, 0)
);
 */
