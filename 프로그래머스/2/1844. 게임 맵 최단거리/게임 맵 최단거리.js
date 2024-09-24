const DIRECTION = [
    [ 0,  1],
    [ 0, -1],
    [ 1,  0],
    [-1,  0],
];

const outOfRange = (row, col, maxRow, maxCol) => {
    return row < 0 || row >= maxRow || col < 0 || col >= maxCol;
}

const bfs = (maps) => {
    const [maxRow, maxCol] = [maps.length, maps[0].length];
    const visited = Array.from({ length: maxRow }, () => Array(maxCol).fill(false));
    
    const queue = [[0, 0, 1]];
    visited[0][0] = true;
    
    while (queue.length > 0) {
        const [row, col, cnt] = queue.shift();
        
        for (const [dRow, dCol] of DIRECTION) {
            const [nextRow, nextCol] = [row + dRow, col + dCol];
            
            if (outOfRange(nextRow, nextCol, maxRow, maxCol) || maps[nextRow][nextCol] === 0 || visited[nextRow][nextCol] === true) continue;
            if (nextRow === maxRow - 1 && nextCol === maxCol - 1) return cnt + 1;
            
            visited[nextRow][nextCol] = true;
            queue.push([nextRow, nextCol, cnt + 1]);
        }
    }
    
    return -1;
}

function solution(maps) {
    return bfs(maps);
}