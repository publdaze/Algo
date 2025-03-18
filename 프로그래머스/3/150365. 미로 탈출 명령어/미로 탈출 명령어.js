// x,y -> r,c
// 이동거리 k, 중복 방문 가능
// 탈출 경로 문자열이 사전순 빠른 경로
// .은 빈 공간, S는 출발 지점, E는 탈출 지점

const DERECTION_KEY = ['d', 'l', 'r', 'u']
const REVERSE_KEY = {
    'd': 'u',
    'u': 'd',
    'l': 'r',
    'r': 'l',
}
const DERECTION = {
    l: [0, -1],
    r: [0, 1],
    u: [-1, 0],
    d: [1, 0],
}
const INESCAPABLE = "impossible";
const outOfRange = (row, col, maxRow, maxCol) => {
    return row <= 0 || row > maxRow || col <= 0 || col > maxCol;
}

function solution(n, m, x, y, r, c, k) {
    const needMoveRow = r - x;
    const needMoveCol = c - y;
    const shortest = Math.abs(needMoveRow) + Math.abs(needMoveCol);
    let remainDist = k - shortest;
    if (remainDist < 0 || remainDist % 2 === 1) return INESCAPABLE;
    
    const move = { // +remainDist
        d: 0,
        l: 0,
        r: 0,
        u: 0,
    }
    move[needMoveRow < 0 ? 'u' : 'd'] = Math.abs(needMoveRow);
    move[needMoveCol < 0 ? 'l' : 'r'] = Math.abs(needMoveCol);
    console.log(move)
    
    let path = '';
    while (remainDist > 0 || move['d'] > 0 || move['l'] > 0 || move['r'] > 0 || move['u'] > 0) {
        for (let key of DERECTION_KEY) {
            const [dr, dc] = DERECTION[key];
            const [nr, nc] = [x + dr, y + dc];

            if (outOfRange(nr, nc, n, m)) continue;
            if (move[key] === 0) {
                if (remainDist === 0) continue;
                remainDist -= 2;
                move[key] += 1;
                move[REVERSE_KEY[key]] += 1;
            }
            move[key] -= 1;
            path += key;
            x = nr;
            y = nc;
            break;
        }
    }
    return path;
}
