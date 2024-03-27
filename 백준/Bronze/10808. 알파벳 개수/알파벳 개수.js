const solution = (word) => {
  const alphabets = Array.from({ length: 26 }, () => 0);
  [...word].forEach((char) => (alphabets[char.charCodeAt() - 97] += 1));

  return alphabets.join(" ");
};

const fs = require("fs");
const rawData = fs
  .readFileSync(process.platform === "linux" ? 0 : "./input.txt")
  .toString()
  .trim();

console.log(solution(rawData));
