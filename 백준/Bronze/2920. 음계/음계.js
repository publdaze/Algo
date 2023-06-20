const fs = require("fs");
const numberStrList = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

if (numberStrList === "1 2 3 4 5 6 7 8") console.log("ascending");
else if (numberStrList === "8 7 6 5 4 3 2 1") console.log("descending");
else console.log("mixed");
