const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const N = Number(input);

let cards = Array.from({ length: N }, (v, i) => i + 1);

while (cards.length !== 1) {
  if (cards.length % 2 === 0) {
    cards = cards.filter((card, index) => index % 2 !== 0);
  } else {
    cards = cards.filter((card, index) => index % 2 !== 0);
    cards.push(cards.shift());
  }
}

console.log(cards.at(0));
