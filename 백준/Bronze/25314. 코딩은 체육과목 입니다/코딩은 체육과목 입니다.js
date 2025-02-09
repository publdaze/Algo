const filePath = process.platform === 'linux' ? 'dev/stdin' : 'BOJ/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];

const count = N / 4;

console.log("long ".repeat(count) + "int");