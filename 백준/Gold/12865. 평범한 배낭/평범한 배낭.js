const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

//REVIEW - 구현 시간 오래걸림 / knapSack 알고리즘!

const [N, K] = input.shift();

const dp = Array.from({ length: K + 1 }, () => Array(N).fill(0));

for (let i = 1; i <= K; i++) {
  for (let j = 0; j < N; j++) {
    dp[i][j] = Math.max(input[j][0] <= i ? input[j][1] + (dp[i - input[j][0]][j - 1] || 0) : 0, dp[i][j - 1] || 0);
  }
}

console.log(dp[K][N - 1]);

//https://howudong.tistory.com/106

/* 시간 초과 O(2^N)
const [N, K] = input.shift();
let maxV = 0;

const dfs = (accW, accV, currItem, visited) => {
  if (visited[currItem]) return;
  if (accW + input[currItem][0] > K) {
    maxV = Math.max(maxV, accV);
    return;
  }

  visited[currItem] = true;
  for (let i = 0; i < input.length; i++) {
    dfs(accW + input[currItem][0], accV + input[currItem][1], i, visited);
  }
  visited[currItem] = false;
};

const visited = Array.from({ length: input.length }, () => false);
input.forEach(([w, v], i) => {
  dfs(0, 0, i, visited);
});
console.log(maxV); */
