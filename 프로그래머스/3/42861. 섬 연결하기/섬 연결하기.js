function getGraph(n, costs) {
    const graph = Array.from({ length: n }, () => []);
    
    costs.forEach(([src, dst, cost]) => {
        graph[src].push({ node: dst, cost });
        graph[dst].push({ node: src, cost });
    })
    
    return graph;
}

function dijkstra(n, start, graph) {
    const distance = Array(n).fill(Infinity);
    const visited = Array(n).fill(false);
    distance[start] = 0;
    
    const stack = [start];
    while (stack.length > 0) {
        stack.sort((a, b) => distance[b] - distance[a]);
        const src = stack.pop();
        visited[src] = true;
        
        for (const { node: dst, cost } of graph[src]) {
            if (distance[dst] === Infinity) stack.push(dst);
            if (!visited[dst] && distance[dst] > cost) {
                distance[dst] = cost;
            }
        }
    }
    
    return distance;
}

function solution(n, costs) {
    const graph = getGraph(n, costs);
    
    return Math.min(...[...Array(n).keys()].map((node) => dijkstra(n, node, graph).reduce((a, b) => a + b, 0)));
}
