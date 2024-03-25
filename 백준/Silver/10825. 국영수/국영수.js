const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((line) => {
    const [name, korean, english, math] = line.split(" ");
    return { name, korean: Number(korean), english: Number(english), math: Number(math) };
  });

//REVIEW - charCodeAt 맨 앞 글자만 변환해줌

input.sort((a, b) => b.korean - a.korean || a.english - b.english || b.math - a.math || (a.name > b.name ? 1 : -1));
console.log(input.map((person) => person.name).join("\n"));
