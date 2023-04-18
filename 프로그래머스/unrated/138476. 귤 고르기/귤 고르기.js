// input - k : 담으려는 귤 수, tangerine: 귤 크기 배열
// output - 서로 다른 종류 수 최솟값

function solution(k, tangerine) {
    const tangerineSet = tangerine.reduce((prev, curr) => {
        prev[curr] = prev[curr] ? prev[curr] + 1 : 1;
        
        return prev;
    }, {});
    
    const sizes = Object.keys(tangerineSet);
    sizes.sort((a, b) => tangerineSet[b] - tangerineSet[a]);
    
    let minCountOfSizes = 0;
    let tangerineCount = 0;
    
    for (let size of sizes) {
        if (tangerineCount >= k) return minCountOfSizes;
        tangerineCount += tangerineSet[size];
        minCountOfSizes += 1;
    }
    
    return minCountOfSizes;
}