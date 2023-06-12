function solution(brown, yellow) {
    const cornerCount = 4;
    
    for (let i = 1; i < yellow; i++) {
        const yellowWidth = yellow / i;
        const yellowHeight = i;
        const brownWidth = yellowWidth + 2;
        const brownHeight = yellowHeight + 2;
        const brownCount = brownWidth * 2 + brownHeight * 2 - cornerCount;
        
        if (brownCount === brown) {
            return [brownWidth, brownHeight];
        }
    }
    
    return [3, 3];
}