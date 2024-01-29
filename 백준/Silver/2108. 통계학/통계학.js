const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map(Number);

const average = (numbers) => {
  return Math.round(numbers.reduce((acc, n) => acc + n, 0) / numbers.length).toString();
};

const median = (numbers) => {
  numbers.sort((a, b) => a - b);
  return numbers.at(Math.floor(numbers.length / 2));
};

const mode = (numbers) => {
  const numberCounts = numbers.reduce((acc, n) => {
    acc[n] = acc[n] ? acc[n] + 1 : 1;
    return acc;
  }, {});

  const sortedNumberCounts = Object.entries(numberCounts).sort(([, aValue], [, bValue]) => bValue - aValue);

  return sortedNumberCounts?.at(0)?.at(1) === sortedNumberCounts?.at(1)?.at(1)
    ? sortedNumberCounts
        .filter(([, value]) => value === sortedNumberCounts?.at(0)?.at(1))
        .sort(([aKey], [bKey]) => aKey - bKey)
        .at(1)
        ?.at(0)
    : sortedNumberCounts?.at(0)?.at(0);
};

const range = (numbers) => {
  numbers.sort((a, b) => a - b);
  return numbers.at(-1) - numbers.at(0);
};

console.log(average(input));
console.log(median(input));
console.log(mode(input));
console.log(range(input));
