function solution(brown, yellow) {
    for (let i = 1; i < yellow; i++) {
        if (yellow / i * 2 + i * 2 + 4 === brown) {
            return [yellow / i + 2, i + 2];
        }
    }
    
    return [3, 3];
}