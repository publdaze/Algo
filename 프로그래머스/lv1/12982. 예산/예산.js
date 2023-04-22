function solution(d, budget) {
    let sum = 0;
    let departmentCnt = 0;
    
    d.sort((a, b) => a - b);
    
    for (let money of d) {
        sum += money;
        if (sum > budget) return departmentCnt;
        departmentCnt += 1;
    }
    
    return departmentCnt;
}