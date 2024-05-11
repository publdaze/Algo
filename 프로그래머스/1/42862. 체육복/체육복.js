function solution(n, lost, reserve) {
    const same = reserve.filter(x => lost.includes(x));
    
    lost = lost.filter(x => !same.includes(x)).sort((a, b) => a - b);
    reserve = reserve.filter(x => !same.includes(x)).sort((a, b) => a - b);
    
    
    while(lost.length > 0 && reserve.length > 0) {
        if (reserve.at(-1) > lost.at(-1) + 1) {
            reserve.pop();
            continue;
        }
        if (reserve.at(-1) < lost.at(-1) - 1) {
            lost.pop();
            n--;
            continue;
        }
        reserve.pop();
        lost.pop();
    }
    
    return n - lost.length;
}