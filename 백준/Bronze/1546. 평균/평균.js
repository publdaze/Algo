const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");

const N = Number(input[0]);
const average = (arr) => arr.reduce((prev, curr) => prev + curr, 0) / N;

const solve = () => {
  const grade = input[1].split(" ").map(Number);
  const MaxGrade = Math.max(...grade);
  const NewGrade = grade.map((i) => {
    return (i / MaxGrade) * 100;
  });
  console.log(average(NewGrade));
};

solve();
