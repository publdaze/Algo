const fs = require("fs");
const inputStrings = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1);

const people = inputStrings.map((str, index) => {
  const [weight, height] = str.split(" ");
  return {
    weight,
    height,
    index,
  };
});

people.sort((a, b) => b.weight - a.weight || a.height - b.height);
const result = Array(people.length).fill(1);

for (let i = 0; i < people.length; i++) {
  for (let j = i + 1; j < people.length; j++) {
    if (Number(people[i].height) > Number(people[j].height)) {
      result[people[j].index] += 1;
    }
  }
}

console.log(result.join(" "));
