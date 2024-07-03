const DERECTION = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1]
]

function outOfRange(row, col, maxRow, maxCol) {
    return row < 0 || col < 0 || row >= maxRow || col >= maxCol;
}

function bfs(maps, start, endTag) {
    const [maxRow, maxCol] = [maps.length, maps[0].length];
    const visited = Array.from({ length: maxRow }, () => Array(maxCol).fill(false));
    const queue = [start];
    visited[start[0]][start[1]] = true;
    
    while (queue.length > 0) {
        const [row, col, time] = queue.shift();
        
        for (let [dRow, dCol] of DERECTION) {
            const [nextRow, nextCol] = [row + dRow, col + dCol];
            
            if (outOfRange(nextRow, nextCol, maxRow, maxCol) || maps[nextRow][nextCol] === "X" || visited[nextRow][nextCol]) continue;
            if (maps[nextRow][nextCol] === endTag) return [nextRow, nextCol, time + 1];
            queue.push([nextRow, nextCol, time + 1]);
            visited[nextRow][nextCol] = true;
        }
    }
    
    return [,,null];
}

function solution(maps) {
    for (let row = 0; row < maps.length; row++) {
        for (let col = 0; col < maps[row].length; col++) {
            if (maps[row][col] === "S") {
                const [viaRow, viaCol, time] = bfs(maps, [row, col, 0], "L");
                return time ? bfs(maps, [viaRow, viaCol, time], "E")?.at(2) || -1 : -1;
            }
        }
    }
}