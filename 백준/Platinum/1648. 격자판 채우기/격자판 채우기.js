const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

//REVIEW - 2Xn 타일링 (11726) 문제와 유사한 문제인 줄 알았는데, 행이 변화하니 어떤 식으로 DP 규칙을 찾아내야할 지 막힘 -> 비트 마스킹 사용해서 풀 수 있음
//https://glanceyes.com/entry/BOJ-%EB%B0%B1%EC%A4%80-1648%EB%B2%88-%EA%B2%A9%EC%9E%90%ED%8C%90-%EC%B1%84%EC%9A%B0%EA%B8%B0
//https://velog.io/@qwerty1434/%EB%B0%B1%EC%A4%80-1648%EB%B2%88-%EA%B2%A9%EC%9E%90%ED%8C%90-%EC%B1%84%EC%9A%B0%EA%B8%B0
// 유사 문제 - 2718, 14700, 1657

const [N, M] = input;

const N_MAX = 14;
const M_MAX = 14;
const MOD = 9901;

let dp = Array.from({ length: N_MAX * M_MAX }, () => Array.from({ length: 1 << M_MAX }, () => -1));

const go = (idx, status) => {
  if (idx >= N * M) {
    if (idx === N * M && status === 0) return 1;
    return 0;
  }

  if (dp[idx][status] !== -1) return dp[idx][status];
  dp[idx][status] = 0;

  // idx 채워져 있는 경우
  if (status & (1 << 0)) {
    // 바로 다음칸으로 넘어감
    dp[idx][status] += go(idx + 1, status >> 1);
  } else {
    // idx 빈 칸인 경우
    // 2 X 1 도미노
    // idx % M < M - 1 : 마지막 열 - 다음칸 못 채우므로 2 X 1 안 됨
    // (status & (1 << 1)) === 0 : idx + 1번 째 칸이 비어 있는지 확인
    if (idx % M < M - 1 && (status & (1 << 1)) === 0) {
      dp[idx][status] += go(idx + 2, status >> 2);
    }
    // 1 X 2 도미노
    // 좌측 상단부터 진행하기 때문에 아래 칸은 반드시 빈칸임이 보장되므로 항상 가능하다
    dp[idx][status] += go(idx + 1, (status >> 1) | (1 << (M - 1)));
  }

  dp[idx][status] %= MOD;
  return dp[idx][status];
};

console.log(go(0, 0));
