let DIRECTION = [
    [1, 0],
    [0, 1],
    [-1, -1]
];

function solution(n) {
    const result = Array.from({length: n}, (_, i) => Array(i + 1).fill(0));
    
    let currValue = 1;
    let i = 0, j = 0;
    let directionIdx = 0;
    
    while (result[i][j] === 0) {
        result[i][j] = currValue;
        currValue += 1;
        
        let [di, dj] = DIRECTION[directionIdx % DIRECTION.length];
        if (i + di < 0 || j + dj < 0 || i + di >= n || j + dj >= result[i].length || result[i + di][j + dj] > 0) {
            directionIdx += 1;
            [di, dj] = DIRECTION[directionIdx % DIRECTION.length];
        }
        
        i += di, j += dj;
    }
    
    return result.flat();
}