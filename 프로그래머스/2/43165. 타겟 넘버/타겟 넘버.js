function solution(numbers, target) {
    const dp = Array.from({ length: numbers.length }, () => []);
    dp[0].push(-numbers.at(0), numbers.at(0));
    
    for (let i = 1; i < numbers.length; i++) {
        for (let num of dp[i - 1]) {
            dp[i].push(num - numbers[i]);
            dp[i].push(num + numbers[i]);
        }
    }
    
    return dp.at(-1).filter((num) => num === target).length;
}