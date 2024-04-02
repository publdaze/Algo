const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

//TODO - 모든 접미사를 사전순으로 정렬한 다음 출력
//ANCHOR - slice으로 잘라서 배열에 넣기 -> 사전순 정렬 - O(n^2)

const suffixes = [];
for (let i = 1; i <= input.length; i++) {
  suffixes.push(input.slice(-i));
}
console.log(suffixes.sort().join("\n"));
