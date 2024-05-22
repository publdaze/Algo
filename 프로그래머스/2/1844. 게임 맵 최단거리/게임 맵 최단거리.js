const DERECTION = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
];

function outOfRange(row, col, maxRow, maxCol) {
    return row < 0 || col < 0 || row >= maxRow || col >= maxCol;
}

function bfs(maps, start, end) {
    const maxRow = maps.length, maxCol = maps[0].length;
    const visited = Array.from({length: maxRow}, () => Array(maxCol).fill(false));
    
    const queue = [start];
    visited[start[0]][start[1]] = true;
    
    while (queue.length > 0) {
        const [row, col, depth] = queue.shift();
        
        for (let [dRow, dCol] of DERECTION) {
            const nextRow = row + dRow, nextCol = col + dCol, nextDepth = depth + 1;
            if (nextRow === end[0] && nextCol === end[1]) return nextDepth;
            if (outOfRange(nextRow, nextCol, maxRow, maxCol) || maps[nextRow][nextCol] === 0 || visited[nextRow][nextCol] === true) continue;
            queue.push([nextRow, nextCol, nextDepth]);
            visited[nextRow][nextCol] = true;
        }
    }
    
    return -1;
}

function solution(maps) {
    return bfs(maps, [0, 0, 1], [maps.length - 1, maps[0].length - 1]);
}