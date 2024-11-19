const DIRECTION = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
]

function outOfRange({ row, col, maxRow, maxCol }) {
    return row < 0 || col < 0 || row >= maxRow || col >= maxCol;
}

function isWall(status) {
    return status === 0;
}

function bfs(maps, start, end) {
    const maxRow = maps.length;
    const maxCol = maps[0].length;
    
    const visited = Array.from({ length: maxRow }, () => Array(maxCol).fill(false));
    visited[0][0] = true;
    const queue = [start];
    
    let i = 0;
    while (i < queue.length) {
        const [r, c, depth] = queue.at(i);
        if (r === end[0] && c === end[1]) return depth;
        
        for (const [dr, dc] of DIRECTION) {
            const [nr, nc] = [r + dr, c + dc];
            if (outOfRange({ row: nr, col: nc, maxRow, maxCol })|| isWall(maps[nr][nc]) || visited[nr][nc] === true ) continue;
            queue.push([nr, nc, depth + 1]);
            visited[nr][nc] = true;
        }
        i++;
    }
    
    return -1;
}

function solution(maps) {
    return bfs(maps, [0, 0, 1], [maps.length - 1, maps[0].length - 1]);
}