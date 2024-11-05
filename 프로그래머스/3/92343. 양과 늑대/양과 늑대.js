function getGraph(n, edges) {
    const graph = Array.from({ length: n }, () => []);
    
    edges.forEach(([src, dst]) => {
        graph[src].push(dst);
    });
    
    return graph;
}

function dfs(graph, info) {
    const stack = [{ node: 0, sheep: 1, wolf: 0, nextNodes: new Set(graph[0]) }];
    let maxSheep = 0;
    
    while (stack.length > 0) {
        const { node, sheep, wolf, nextNodes } = stack.pop();
        
        maxSheep = Math.max(maxSheep, sheep);
        
        for (const nextNode of nextNodes) {
            if (!info[nextNode] || sheep > wolf + 1) {
                const newNodes = new Set([...nextNodes, ...graph[nextNode]]);
                newNodes.delete(nextNode);
                stack.push({ node: nextNode, sheep: sheep + Number(!info[nextNode]), wolf: wolf + info[nextNode], nextNodes: newNodes });
            }
        }
    }
    
    return maxSheep;
}

function solution(info, edges) {
    const graph = getGraph(info.length, edges);
    return dfs(graph, info);
}