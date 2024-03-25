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

const compareStringWithAscii = (a, b) => {
  for (let i = 0; i < a.length; i++) {
    if (!b[i]?.charCodeAt()) return a.length - b.length;
    if (a[i].charCodeAt() - b[i].charCodeAt() !== 0) return a[i].charCodeAt() - b[i].charCodeAt();
  }

  return b.length - a.length;
};

input.sort(
  (a, b) => b.korean - a.korean || a.english - b.english || b.math - a.math || compareStringWithAscii(a.name, b.name)
);
console.log(input.map((person) => person.name).join("\n"));
