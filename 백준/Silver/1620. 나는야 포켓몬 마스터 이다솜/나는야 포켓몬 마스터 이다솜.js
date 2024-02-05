const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.at(0).split(" ");

const pokémonsNumber = input.splice(1, N);
const pokémonsName = [];
pokémonsNumber.forEach((pokémon, i) => {
  pokémonsName[pokémon] = i;
});

const answers = [];

for (let i = 1; i < Number(M) + 1; i++) {
  const question = input[i];

  if (isNaN(question)) {
    answers.push(pokémonsName[question] + 1);
  } else {
    answers.push(pokémonsNumber[Number(question) - 1]);
  }
}

console.log(answers.join("\n"));
