// 벽 못지나감
// 통로 이동 가능 / 하나의 문 레버로 열 수 있음 (레버 거쳐 문)
// 한 칸 이동 1초

function findPoint(maps) {
    const point = {};
    
    for (let row = 0; row < maps.length; row++) {
        for (let col = 0; col < maps[row].length; col++) {
            if (maps[row][col] === "S") point["S"] = [row, col];
            else if (maps[row][col] === "L") point["L"] = [row, col];
            else if (maps[row][col] === "E") point["E"] = [row, col];
        }
    }
    
    return point;
}

function outOfRange(row, col, maxRow, maxCol) {
    return row < 0 || col < 0 || row >= maxRow || col >= maxCol;
}

const DIRECTION = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
];

function bfs(start, end, maps) {
    const [startRow, startCol] = start;
    const visited = Array.from({ length: maps.length }, () => Array(maps[0].length).fill(false));
    const queue = [[startRow, startCol, 0]];
    visited[startRow][startCol] = true;
    
    while (queue.length > 0) {
        const [row, col, depth] = queue.shift();
        
        for (const [dRow, dCol] of DIRECTION) {
            const [nextRow, nextCol] = [row + dRow, col + dCol];
            if (outOfRange(nextRow, nextCol, maps.length, maps[0].length) || maps[nextRow][nextCol] === "X" || visited[nextRow][nextCol]) continue;
            if (nextRow === end[0] && nextCol === end[1]) return depth + 1;
            queue.push([nextRow, nextCol, depth + 1]);
            visited[nextRow][nextCol] = true;
        }
    }
    
    return -1;
}

function solution(maps) {
    const { S, L, E } = findPoint(maps);
    const toL = bfs(S, L, maps);
    if (toL === -1) return -1;
    const toE = bfs(L, E, maps);
    if (toE === -1) return -1;
    return toL + toE;
}

// 73.9점 -> col 범위
// function findPoint(maps) {
//     const point = {};
    
//     for (let i = 0; i < maps.length; i++) {
//         for (let j = 0; j < maps[i].length; j++) {
//             if (maps[i][j] === "S") point["S"] = [i, j];
//             else if (maps[i][j] === "L") point["L"] = [i, j];
//             else if (maps[i][j] === "E") point["E"] = [i, j];
//         }
//     }
    
//     return point;
// }

// function outOfRange(row, col, maxRow, maxCol) {
//     return row < 0 || col < 0 || row >= maxRow || col >= maxRow;
// }

// const DIRECTION = [
//     [1, 0],
//     [-1, 0],
//     [0, 1],
//     [0, -1],
// ];

// function bfs(start, end, maps) {
//     const [startRow, startCol] = start;
//     const visited = Array.from({ length: maps.length }, () => Array(maps[0].length).fill(false));
//     const queue = [[startRow, startCol, 0]];
//     visited[startRow][startCol] = true;
    
//     while (queue.length > 0) {
//         const [row, col, depth] = queue.shift();
        
//         for (let [dRow, dCol] of DIRECTION) {
//             const [nextRow, nextCol] = [row + dRow, col + dCol];
//             if (outOfRange(nextRow, nextCol, maps.length, maps[0].length) || maps[nextRow][nextCol] === "X" || visited[nextRow][nextCol]) continue;
        
//             if (nextRow === end[0] && nextCol === end[1]) return depth + 1;
//             queue.push([nextRow, nextCol, depth + 1]);
//             visited[nextRow][nextCol] = true;
//         }
//     }
    
//     return -1;
// }

// function solution(maps) {
//     const { S, L, E } = findPoint(maps);
//     const toL = bfs(S, L, maps);
//     if (toL === -1) return -1;
//     const toE = bfs(L, E, maps);
//     return toL + toE;
// }

// function findPoint(maps) {
//     const point = {};
    
//     for (let i = 0; i < maps.length; i++) {
//         for (let j = 0; j < maps[i].length; j++) {
//             if (maps[i][j] === "S") point["S"] = [i, j];
//             else if (maps[i][j] === "L") point["L"] = [i, j];
//             else if (maps[i][j] === "E") point["E"] = [i, j];
//         }
//     }
    
//     return point;
// }

// function outOfRange(row, col, maxRow, maxCol) {
//     return row < 0 || col < 0 || row >= maxRow || col >= maxRow;
// }

// const DIRECTION = [
//     [1, 0],
//     [-1, 0],
//     [0, 1],
//     [0, -1],
// ];

// function bfs(start, end, maps) {
//     const [startRow, startCol] = start;
//     const queue = [[startRow, startCol, 0]];
//     maps[startRow][startCol] = "X";
    
//     while (queue.length > 0) {
//         const [row, col, depth] = queue.shift();
        
//         for (let [dRow, dCol] of DIRECTION) {
//             const [nextRow, nextCol] = [row + dRow, col + dCol];
//             if (outOfRange(nextRow, nextCol, maps.length, maps[0].length) || maps[nextRow][nextCol] === "X") continue;
        
//             console.log(row, col, nextRow, nextCol)
//             if (nextRow === end[0] && nextCol === end[1]) return depth + 1;
//             queue.push([nextRow, nextCol, depth + 1]);
//             maps[nextRow][nextCol] = "X";
//         }
//     }
    
//     return -1;
// }

// function solution(maps) {
//     const { S, L, E } = findPoint(maps);
//     const toL = bfs(S, L, maps);
//     if (toL === -1) return -1;
//     const toE = bfs(L, E, maps);
//     return toL + toE;
// }

// 시간 초과
// function findPoint(maps) {
//     const point = {};
    
//     for (let i = 0; i < maps.length; i++) {
//         for (let j = 0; j < maps[i].length; j++) {
//             if (maps[i][j] === "S") point["S"] = [i, j];
//             else if (maps[i][j] === "L") point["L"] = [i, j];
//             else if (maps[i][j] === "E") point["E"] = [i, j];
//         }
//     }
    
//     return point;
// }

// function outOfRange(row, col, maxRow, maxCol) {
//     return row < 0 || col < 0 || row >= maxRow || col >= maxRow;
// }

// const DIRECTION = [
//     [1, 0],
//     [-1, 0],
//     [0, 1],
//     [0, -1],
// ];

// function bfs(start, end, maps) {
//     const queue = [[...start, 0]];
    
//     while (queue.length > 0) {
//         const [row, col, depth] = queue.shift();
        
//         for (let [dRow, dCol] of DIRECTION) {
//             const [nextRow, nextCol] = [row + dRow, col + dCol];
//             if (outOfRange(nextRow, nextCol, maps.length, maps[0].length) || maps[nextRow][nextCol] === "X") continue;
//             if (nextRow === end[0] && nextCol === end[1]) return depth + 1;
//             queue.push([nextRow, nextCol, depth + 1]);
//             maps[nextRow][nextCol] = "X";
//         }
//     }
    
//     return -1;
// }

// function solution(maps) {
//     const { S, L, E } = findPoint(maps);
//     const toL = bfs(S, L, maps);
//     if (toL === -1) return -1;
//     const toE = bfs(L, E, maps);
//     return toL + toE;
// }