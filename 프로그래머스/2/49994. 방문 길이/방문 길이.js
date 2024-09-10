// 처음 걸어본 길의 길이
// 좌표평면 넘어가면 명령어 무시
// 길을 다 그어보고, 중복되어 간 길을 제외한 길의 숫자를 세자
// 방향 무관하게 줄 긋기 - 좌표 2개가 동일하면 같은 길

const ROW_RANGE = { MIN: -5, MAX: 5};
const COL_RANGE = { MIN: -5, MAX: 5};

const NEXT_DIRECTION = {
    U: [-1,  0],
    D: [ 1,  0],
    R: [ 0,  1],
    L: [ 0, -1],
}

function outOfRange(row, col) {
    return row < ROW_RANGE.MIN || row > ROW_RANGE.MAX || col < COL_RANGE.MIN || col > COL_RANGE.MAX;
}

function solution(dirs) {
    const path = new Set();
    
    let currPoint = [0, 0];
    let cnt = 0;
    [...dirs].forEach((dir) => {
        const [currRow, currCol] = currPoint;
        const [dRow, dCol] = NEXT_DIRECTION[dir];
        const [nextRow, nextCol] = [currRow + dRow, currCol + dCol];
        
        if (outOfRange(nextRow, nextCol)) return;
        
        currPoint = [nextRow, nextCol];
        
        let key;
        if (currRow < nextRow || currCol < nextCol) {
            key = `[${currRow}, ${currCol}] - [${nextRow}, ${nextCol}]`;
        } else {
            key = `[${nextRow}, ${nextCol}] - [${currRow}, ${currCol}]`;
        }
        if (path.has(key)) return;
        path.add(key);
        cnt++;
    })
    
    return cnt;
}
