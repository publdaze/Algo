// - 처음에는 글자수 많은 기준으로 prefix 채워나가는 식으로 시도 but 글자 수 적은걸 먼저 처리하는게 더 적은 조각 사용하는 경우가 있음
// - dp로 풀어보는데, 여러 조합으로 나올 수 있는 case를 어떻게 점화식으로 나타낼 지 헤맴
// - 나올 수 있는 묶음 조합들 여러 개 여서 반복문 여러 개 쓰는 게 찝찝해서 주저하다가 시도했을 때, 시간 초과 발생
// - 모든 묶음 경우에 대해 순회하지 않고, 문자열 길이에 따라 한정된 수로 순회하여 최적화

function solution(strs, t) {
    const n = t.length;
    
    const sizes = new Set(strs.map((str) => str.length));
    const dp = Array(n + 1).fill(Infinity);
    dp[0] = 0;
    
    for (let i = 1; i <= n; i++) {
        for (const size of sizes) {
            if (i - size >= 0 && strs.includes(t.slice(i - size, i))) {
                dp[i] = Math.min(dp[i - size] + 1, dp[i]);
            }
        }
    }
    
    return dp[n] === Infinity ? -1 : dp[n];
}