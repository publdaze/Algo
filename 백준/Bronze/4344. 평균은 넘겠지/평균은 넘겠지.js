const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

//const N = +input[0];

const solve = () => {
  input.slice(1).forEach((element) => {
    const elementList = element.split(" ");
    const peopleN = +elementList[0];
    const grades = elementList.slice(1).map(Number);
    const averageGrade =
      grades.reduce((prev, curr) => prev + curr, 0) / peopleN;
    const higherPeopleN = grades.filter((grade) => grade > averageGrade).length;

    console.log(((higherPeopleN / peopleN) * 100).toFixed(3) + "%");
  });
};

solve();
