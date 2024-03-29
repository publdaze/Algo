const fs = require("fs");
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString();

console.log(
  [...input]
    .map((char) =>
      /[a-z]/.test(char)
        ? String.fromCharCode(char.charCodeAt() - 13 < 97 ? char.charCodeAt() + 26 - 13 : char.charCodeAt() - 13)
        : /[A-Z]/.test(char)
        ? String.fromCharCode(char.charCodeAt() - 13 < 65 ? char.charCodeAt() + 26 - 13 : char.charCodeAt() - 13)
        : char
    )
    .join("")
);
