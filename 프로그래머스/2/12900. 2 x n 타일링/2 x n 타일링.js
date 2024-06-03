function solution(n) {
    const dp = Array(n + 1);
    dp[0] = 1;
    dp[1] = 1;
    
    for (let i = 2; i < dp.length; i++) {
        dp[i] = dp[i - 1] % 1000000007 + dp[i - 2] % 1000000007;
    }
    
    return dp[n] % 1000000007;
}