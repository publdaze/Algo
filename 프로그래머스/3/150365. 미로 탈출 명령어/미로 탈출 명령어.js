// x,y -> r,c
// 이동거리 k, 중복 방문 가능
// 탈출 경로 문자열이 사전순 빠른 경로
// .은 빈 공간, S는 출발 지점, E는 탈출 지점

const DIRECTION_KEYS = ['d', 'l', 'r', 'u']
const REVERSE_DIRECTION = {
    'd': 'u',
    'u': 'd',
    'l': 'r',
    'r': 'l',
}
const DIRECTIONS = {
    l: [0, -1],
    r: [0, 1],
    u: [-1, 0],
    d: [1, 0],
}
const INESCAPABLE = "impossible";
const outOfRange = (row, col, maxRow, maxCol) => {
    return row <= 0 || row > maxRow || col <= 0 || col > maxCol;
}

const getNextMove = (x, y, n, m, requiredMoves, remainExtra) => {
  for (let key of DIRECTION_KEYS) {
    const [dr, dc] = DIRECTIONS[key];
    const [nr, nc] = [x + dr, y + dc];
    if (outOfRange(nr, nc, n, m)) continue;
    if (requiredMoves[key] === 0 && remainExtra > 0) {
      return { key, extra: true };
    }
    if (requiredMoves[key] > 0) return { key, extra: false };
  }
  return null;
}

function solution(n, m, x, y, r, c, k) {
    const requiredRow = r - x;
    const requiredCol = c - y;
    const shortestDistance = Math.abs(requiredRow) + Math.abs(requiredCol);
    let remainingExtra = k - shortestDistance;
    if (remainingExtra < 0 || remainingExtra % 2 === 1) return INESCAPABLE;
    
    const requiredMoves = { // +remainingExtra
        d: 0,
        l: 0,
        r: 0,
        u: 0,
    }
    requiredMoves[requiredRow < 0 ? 'u' : 'd'] = Math.abs(requiredRow);
    requiredMoves[requiredCol < 0 ? 'l' : 'r'] = Math.abs(requiredCol);
    
    let path = '';
    while (
    remainingExtra > 0 ||
    requiredMoves['d'] > 0 ||
    requiredMoves['l'] > 0 ||
    requiredMoves['r'] > 0 ||
    requiredMoves['u'] > 0
  ) {
        const moveDecision = getNextMove(x, y, n, m, requiredMoves, remainingExtra);
        if (!moveDecision) {
          throw new Error("Unexpected: No valid move found from current state.");
        }
        const { key, extra } = moveDecision;
        if (extra) {
          remainingExtra -= 2;
          requiredMoves[key] += 1;
          requiredMoves[REVERSE_DIRECTION[key]] += 1;
        }
        requiredMoves[key]--;
        path += key;
        
        const [dr, dc] = DIRECTIONS[key];
        x += dr;
        y += dc;
    }
    
    return path;
}
