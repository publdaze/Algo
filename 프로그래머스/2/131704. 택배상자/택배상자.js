// 컨테이너, 보조 컨테이너 한 방향 가능
// 택배 기사가 원하는 순서에 맞춰야함
// 보조 컨테이너 활용 가능한데 보조로도 순서 못맞추면 상자 더 못 실음
// 컨테이너는 큐, 보조는 스택

function solution(order) {
    const container = Array.from({ length: order.length }, (_, i) => i + 1).reverse();
    const assistant = [];
    let cnt = 0;

    for (let currOrder of order) {
        let currBox = container.at(-1);
        
        while (currBox < currOrder) {
            container.pop();
            assistant.push(currBox);
            currBox = container.at(-1);
        }
        if (currBox === currOrder) container.pop();
        
        if (currBox > currOrder) {
            currBox = assistant.pop();
            if (currBox !== currOrder) return cnt;
        }
        
        cnt++;
    }
    
    return cnt;
}