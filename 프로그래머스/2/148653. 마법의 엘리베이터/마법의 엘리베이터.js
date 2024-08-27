// storey에서 0층으로 가는데 누르는 버튼 수 최솟값
// - 절대값이 10^n인 버튼
// *0층보다 작으면 움직이지 않음
// 큰수로 갔다가 작아지기 vs 작은수로 갔다가 커지기
// Xsol1) 각 자리수 비교 : 10 - x + 1 vs x (반례. 99)
// sol2) 높은 자리수부터 +1 -0 계산 후 남은 값 반복 (반례. 80)
// sol3) 

function solution(storey) {
    const stoneCase = [];
    const stack = [[storey, 0]];
    
    while (stack.length > 0) {
        const [currNum, stone] = stack.pop();
        
        if (currNum === 0) {
            stoneCase.push(stone);
            continue;
        } 
        if (currNum % 10 === 0) {
            stack.push([currNum / 10,  stone]);
            continue;
        }
        if (currNum < 10) {
            stoneCase.push(stone + Math.min(currNum, 10 - currNum + 1));
            continue;
        }
        
        stack.push([Math.ceil(currNum / 10),  stone + 10 - currNum % 10]);
        stack.push([Math.floor(currNum / 10), stone + currNum % 10]);
    }
    
    return Math.min(...stoneCase)
}