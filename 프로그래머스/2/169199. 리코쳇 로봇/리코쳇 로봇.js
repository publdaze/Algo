const DIRECTIONS = [
    [ 1,  0],
    [-1,  0],
    [ 0,  1],
    [ 0, -1],
];

function findPosition(board) {
    const position = {
        start: undefined,
          end: undefined
    }
          
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            if (board[row][col] === "R") position.start = [row, col];
            if (board[row][col] === "G") position.end   = [row, col];
        }
    }
    
    return position;
}

function stopCondition(board, row, col, direction) {
    const [x, y] = direction;
    
    return row + x < 0 || col + y < 0 || row + x >= board.length || col + y >= board[row].length || board[row + x][col + y] === "D" || board[row + x][col + y] === "D";
}

function goStraights(board, direction, row, col) {
    while (!stopCondition(board, row, col, direction)) {
        row += direction[0];
        col += direction[1];
    }
    
    return [row, col];
}

function bfs(board, position) {
    const MAX_ROW = board.length;
    const MAX_COLOUM = board.at(0).length;
    const visited = Array.from({ length: MAX_ROW }, () => Array.from({ length: MAX_COLOUM }, () => false))
    
    const queue = [[position.start, [0, 0], 0]];
    visited[position.start[0]][position.start[1]] = true;
    
    while (queue.length > 0) {
        const [[row, col], prevDirection, move] = queue.shift();
        
        for (let direction of DIRECTIONS) {
            if ((prevDirection[0] + direction[0] === 0 && prevDirection[1] + direction[1] === 0) || stopCondition(board, row, col, direction)) continue;
            const nextPosition = goStraights(board, direction, row, col, position.end);
            
            if (visited[nextPosition[0]][nextPosition[1]]) continue;
            if (nextPosition[0] === position.end[0] && nextPosition[1] === position.end[1]) return move + 1;
            visited[nextPosition[0]][nextPosition[1]] = true;
            queue.push([nextPosition, direction, move + 1]);
        }
    }
    
    return -1;
}

function solution(board) {
    return bfs(board, findPosition(board));
}