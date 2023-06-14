function solution(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    const nList = Array(n - 2).fill(0);
    
    const [k_1, k] = nList.reduce((prev) => {
        return [prev[1], (prev[0] + prev[1]) % 1234567];
    }, [1, 2]);
    
    return k;
}
