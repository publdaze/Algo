function solution(nums) {
    const N = nums.length;
    
    const type = nums.reduce((acc, num) => {
        acc.set(num, (acc.get(num) || 0) + 1);
        return acc;
    }, new Map());
    
    return Math.min(N / 2, type.size);
}