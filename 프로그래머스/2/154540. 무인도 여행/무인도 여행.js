const DIRECTION = [
    [ 1,  0],
    [ 0,  1],
    [-1,  0],
    [ 0, -1],
]

function outOfRange(row, col, maps) {
    return row < 0 || col < 0 || row >= maps.length || col >= maps[row].length;
}

function dfs(visited, maps, start) {
    const queue = [start];
    let sum = 0;
    
    while (queue.length > 0) {
        const [row, col] = queue.pop();
        sum += Number(maps[row][col]);
        
        for (let [dRow, dCol] of DIRECTION) {
            const nextRow = row + dRow;
            const nextCol = col + dCol;
            
            if (outOfRange(nextRow, nextCol, maps) || maps[nextRow][nextCol] === 'X' || visited[nextRow][nextCol] === true) continue;
            visited[nextRow][nextCol] = true;
            queue.push([nextRow, nextCol]);
        }
    }
    
    return sum;
}

function solution(maps) {
    const result = [];
    const visited = Array.from({ length: maps.length }, () => Array(maps[0].length).fill(false));
    maps = maps.map((map) => [...map]);
    
    for (let row = 0; row < maps.length; row++) {
        for (let col = 0; col < maps[row].length; col++) {
            if (maps[row][col] !== 'X' && visited[row][col] === false) {
                visited[row][col] = true;
                result.push(dfs(visited, maps, [row, col]));
            }
        }
    }
    
    return result.length === 0 ? [-1] : result.sort((a, b) => a - b);
}