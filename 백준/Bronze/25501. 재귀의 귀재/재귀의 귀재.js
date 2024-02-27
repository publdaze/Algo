const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1);

//TODO - 함수의 반환값과 recursion 함수의 호출 횟수

let recursionCallCnt;

function recursion(s, l, r) {
  recursionCallCnt += 1;
  if (l >= r) return 1;
  else if (s[l] !== s[r]) return 0;
  else return recursion(s, l + 1, r - 1);
}

function isPalindrome(s) {
  recursionCallCnt = 0;
  return recursion(s, 0, s.length - 1);
}

console.log(input.map((str) => `${isPalindrome(str)} ${recursionCallCnt}`).join("\n"));
