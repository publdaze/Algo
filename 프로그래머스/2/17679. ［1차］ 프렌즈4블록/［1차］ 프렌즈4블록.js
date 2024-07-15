const BOMB_GROUP = [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1],
]

function solution(m, n, board) {
    board = Array.from({length: n}, (_, i) => Array.from({length: m}, (_, j) => board[j][i])).map(line => line.reverse());
    
    let cnt = 0;
    while(1) {
        const visitedBlock = new Map();

        for (let row = 0; row < board.length - 1; row++) {
            for (let col = 0; col < board[row].length - 1; col++) {
                const group = new Set();
                for (let [dr, dc] of BOMB_GROUP) {
                    if (board[row + dr][col + dc] === null && !visitedBlock.has(`${row + dr}-${col + dc}`)) {
                        group.clear();
                        break;
                    }
                    group.add(visitedBlock.get(`${row + dr}-${col + dc}`) || board[row + dr][col + dc]);
                }
                if (group.size === 1) {
                    for (let [dr, dc] of BOMB_GROUP) {
                        cnt++;
                        if (visitedBlock.has(`${row + dr}-${col + dc}`)) {
                            cnt--;
                        } else {
                            visitedBlock.set(`${row + dr}-${col + dc}`, board[row + dr][col + dc]);
                        }
                        board[row + dr][col + dc] = null;
                    }
                }
            }
        }
        if (visitedBlock.size === 0) return cnt;
        
        board = board.map((line) => line.filter((block) => block !== null));
    }
}