function solution(n, computers) {
    let networkCnt = 0;
    const visited = Array.from({ length: n }, () => 0);
    
    const dfs = (startNode) => {
        networkCnt += 1;
        
        const stack = [startNode];
        visited[startNode] = 1;
    
        while (stack.length > 0) {
            const src = stack.pop();
            
            computers[src].forEach((isLinked, dst) => {
                if (isLinked && visited[dst] === 0) {
                    stack.push(dst);
                    visited[dst] = 1;
                }
            })
        }
    }
    
    for (let i = 0; i < n; i++) {
        if (visited[i] === 0) {
            dfs(i);
        }
    }
    
    return networkCnt;
}