function solution(board) {
    for (let i = 1; i < board.length; i++) {
        for (let j = 1; j < board[i].length; j++) {
            if (board[i][j] !== 1) continue;
            board[i][j] = Math.min(board[i - 1][j - 1], board[i - 1][j], board[i][j - 1]) + 1;
        }
    }
    
    const max = Math.max(...board.map((row) => Math.max(...row)))
    return Math.pow(max, 2);
}