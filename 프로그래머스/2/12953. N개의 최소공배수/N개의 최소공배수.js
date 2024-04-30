// lcd 풀이 1
// const lcm = (a, b) => {
//     if (a > b) [a, b] = [b, a];
//     for (let i = 1; i <= a * b; i++) {
//         const num = a * i;
//         if (num % b === 0) {
//             return num;
//         }
//     }
// }

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

const gcd = (a, b) => {
  while (a % b !== 0) {
    [a, b] = [b, a % b];
  }
  return b;
};

const solution = (arr) => {
    return arr.reduce((acc, curr) => lcm(acc, curr), 1);
}