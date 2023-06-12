function solution(brown, yellow) {
    const cornerCount = 4;
    
    for (let i = 1; i < yellow; i++) {
        const yellowHeight = i;
        const yellowWidth = yellow / yellowHeight;
        const brownHeight = yellowHeight + 2;
        const brownWidth = yellowWidth + 2;
        const brownCount = brownWidth * 2 + brownHeight * 2 - cornerCount;
        
        if (brownCount === brown) {
            return [brownWidth, brownHeight];
        }
    }
    
    // if yellow === 1
    return [3, 3];
}