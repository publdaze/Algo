// 1
// |\
// 2 3
// |
// 4
// |\ \ \ \
// 5 6 7 8 9


// 1. n이 n/2 일 때까지 탐색하고 그 지점에서 끊어주기 -> 한 송전탑에 다발로 있는 경우 문제
// 3. 탐색하면서 하나하나씩 끊어가면서 비교하기 -> 현재까지 탐색한 수를 기준으로 측정하면 다른 방향의 남아있는 수가 측정이 안 됨
// 2. 전선 연결이 가장 긴 라인 중 가운데 라인 끊어주기 -> 될 것 같기도..?
// 4. 라인 하나씩 끊어서 다 측정

function setGraph(graph, arr) {
    for (let [src, dst] of arr) {
        graph[src].push(dst);
        graph[dst].push(src);
    }
}

function getStartPoint(graph) {
    return graph.findIndex((src) => src.length > 0);
}

function getTowerCnt(start, graph) {
    const visited = Array(graph.length).fill(false);
    const queue = [start];
    visited[start] = true;
    
    let cnt = 1;
    while (queue.length) {
        const src = queue.pop();
        
        if (graph[src]) {
            for (let dst of graph[src]) {
                if (visited[dst]) continue;
                visited[dst] = true;
                queue.push(dst);
                cnt++;
            }
        }
        
    }
    return cnt;
}

function solution(n, wires) {
    return wires.map((line) => {
        const graph = Array.from({ length: n + 1 }, () => []);
        setGraph(graph, wires.filter((line2) => line !== line2));
        return graph;
    }).reduce((acc, graph) => {
        return Math.min(acc, Math.abs(n - 2 * getTowerCnt(getStartPoint(graph), graph))) 
    }, n);
}