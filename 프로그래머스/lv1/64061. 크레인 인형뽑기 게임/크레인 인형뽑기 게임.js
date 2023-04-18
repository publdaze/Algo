// i : board : 순서대로 스택이 주어짐, moves : 어느 스택 인형을 옮겼는지
// o : 터트려진 인형 개수
// 40m

function solution(board, moves) {
    let boardObj = {};
    let basket = [];
    let bombCnt = 0;
    
    board.forEach((line, lineIdx) => {
        line.forEach((element, elementIdx) => {
            if (!boardObj[elementIdx + 1]) boardObj[elementIdx + 1] = [];
            if (element !== 0) {
                boardObj[elementIdx + 1].unshift(element);
            }
        });
    });
    
    moves.forEach((move) => {
        const top = boardObj[move].pop();
        
        if (top) {
            if(basket.at(-1) === top) {
                basket.pop();
                bombCnt += 2;
            }
            else {
                basket.push(top);
            }
        }
    })
    
    return bombCnt;
}