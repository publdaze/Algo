function solution(d, budget) {
    let departmentCnt = 0;
    
    d.sort((a, b) => a - b);
    
    for (let price of d) {
        budget -= price;
        if (budget < 0) return departmentCnt;
        departmentCnt += 1;
    }
    
    return departmentCnt;
}