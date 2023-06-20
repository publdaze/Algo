const fs = require("fs");
const [, ...data] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

data.map((d) => {
  const [H, , N] = d.split(" ");
  const y = N % H === 0 ? H : N % H;
  const x = Math.ceil(N / H);

  console.log(y + String(x).padStart(2, "0"));
});
