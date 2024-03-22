// 이동 가능한 방향 정의: 상, 하, 좌, 우
const DIRECTIONS = [
    [1, 0],   // 아래
    [-1, 0],  // 위
    [0, 1],   // 오른쪽
    [0, -1],  // 왼쪽
];

// 시작점(R)과 도착점(G) 위치 찾기
function findPosition(board) {
    const position = { start: undefined, end: undefined };
    
    board.forEach((row, rowIndex) => {
        [...row].forEach((cell, colIndex) => {
            if (cell === "R") position.start = [rowIndex, colIndex];
            if (cell === "G") position.end = [rowIndex, colIndex];
        });
    });

    return position;
}

// 이동 중단 조건 확인
function stopCondition(board, row, col, direction) {
    const [dx, dy] = direction;
    const newRow = row + dx;
    const newCol = col + dy;
    
    // 보드 범위 밖이거나, 장애물('D')이 있는 경우 중단
    return newRow < 0 || newCol < 0 || newRow >= board.length || newCol >= board[0].length || board[newRow][newCol] === "D";
}

// 지정된 방향으로 계속 이동
function goStraights(board, direction, row, col) {
    while (!stopCondition(board, row, col, direction)) {
        row += direction[0];
        col += direction[1];
    }
    
    return [row, col];
}

// 최단 경로 찾기(BFS)
function bfs(board, position) {
    const MAX_ROW = board.length;
    const MAX_COLOUM = board[0].length;
    const visited = Array.from({ length: MAX_ROW }, () => Array.from({ length: MAX_COLOUM }, () => false))
    
    const queue = [[position.start, [0, 0], 0]]; // 현재 위치, 이전 방향, 이동 횟수
    visited[position.start[0]][position.start[1]] = true;
    
    while (queue.length > 0) {
        const [[row, col], prevDirection, move] = queue.shift();
        
        for (let direction of DIRECTIONS) {
            // 이전 방향과 반대로 움직이지 않도록 제한, 이동 중단 조건 부합 시 제한
            if ((prevDirection[0] + direction[0] === 0 && prevDirection[1] + direction[1] === 0) || stopCondition(board, row, col, direction)) continue;
            
            const nextPosition = goStraights(board, direction, row, col, position.end);
            // 이미 방문한 위치면 새로 탐색할 필요 X
            if (visited[nextPosition[0]][nextPosition[1]]) continue;
            
            // 다음 이동할 위치가 도착점(G)일 시 이동 횟수 반환
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