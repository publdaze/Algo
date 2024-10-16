function getGraph(N, road) {
    const graph = Array.from({ length: N + 1 }, () => []);
    for (const [src, dst, weight] of road) {
        graph[src].push({ dst, weight });
        graph[dst].push({ dst: src, weight });
    }
    return graph;
}

function dijkstra(N, graph) {
    const distances = Array(N + 1).fill(Infinity);
    const visited = Array(N + 1).fill(false);
    const pq = [1];
    distances[1] = 0;
    visited[1] = true;
    
    while (pq.length > 0) {
        pq.sort((a, b) => distances[b] - distances[a]);
        const src = pq.pop();
        for (const { dst, weight } of graph[src]) {
            distances[dst] = Math.min(distances[dst], distances[src] + weight);
            
            if (visited[dst]) continue;
            pq.push(dst);
            visited[dst] = true;
        }
    }
    
    return distances;
}

function solution(N, road, K) {
    const graph = getGraph(N, road);
    const distances = dijkstra(N, graph)
    
    return distances.filter((distance) => distance <= K).length;
}

// dfs -> bfs
// function getGraph(N, road) {
//     const graph = Array.from({ length: N + 1 }, () => []);
//     for (const [src, dst, weight] of road) {
//         graph[src].push({ dst, weight });
//         graph[dst].push({ dst: src, weight });
//     }
//     return graph;
// }

// function bfs(N, graph) {
//     const distances = Array(N + 1).fill(Infinity);
//     const visited = Array.from({ length: N + 1 }, () => Array(N + 1).fill(false));
//     const stack = [1];
//     distances[1] = 0;
    
//     while (stack.length > 0) {
//         const src = stack.shift();
//         for (const { dst, weight } of graph[src]) {
//             distances[dst] = Math.min(distances[dst], distances[src] + weight);
            
//             if (visited[src][dst] || dst === 1) continue;
//             stack.push(dst);
//             visited[src][dst] = true;
//         }
//     }
    
//     return distances;
// }

// function solution(N, road, K) {
//     const graph = getGraph(N, road);
//     const distances = bfs(N, graph)
    
//     return distances.filter((distance) => distance <= K).length;
// }

// 방향 반대로 접근 가능하도록 개선, 90.6 - 11, 16, 32
// function getGraph(N, road) {
//     const graph = Array.from({ length: N + 1 }, () => []);
//     for (const [src, dst, weight] of road) {
//         graph[src].push({ dst, weight });
//         graph[dst].push({ dst: src, weight });
//     }
//     return graph;
// }

// function dfs(N, graph) {
//     const distances = Array(N + 1).fill(Infinity);
//     const visited = Array.from({ length: N + 1 }, () => Array(N + 1).fill(false));
//     const stack = [1];
//     distances[1] = 0;
    
//     while (stack.length > 0) {
//         const src = stack.pop();
//         for (const { dst, weight } of graph[src]) {
//             distances[dst] = Math.min(distances[dst], distances[src] + weight);
            
//             if (visited[src][dst]) continue;
//             stack.push(dst);
//             visited[src][dst] = true;
//         }
//     }
//     console.log(distances)
//     return distances;
// }

// function solution(N, road, K) {
//     const graph = getGraph(N, road);
//     const distances = dfs(N, graph)
    
//     return distances.filter((distance) => distance <= K).length;
// }


// 71.9 - 11, 14, 15, 16, 18, 20, 21, 22, 32
// function getGraph(N, road) {
//     const graph = Array.from({ length: N + 1 }, () => []);
//     for (const [src, dst, weight] of road) {
//         graph[src].push({ dst, weight });
//         if (src !== 1) graph[dst].push({ dst: src, weight });
//     }
//     return graph;
// }

// function dfs(N, graph) {
//     const distances = Array(N + 1).fill(Infinity);
//     const visited = Array.from({ length: N + 1 }, () => Array(N + 1).fill(false));
//     const stack = [1];
//     distances[1] = 0;
    
//     while (stack.length > 0) {
//         const src = stack.pop();
//         for (const { dst, weight } of graph[src]) {
//             distances[dst] = Math.min(distances[dst], distances[src] + weight);
            
//             if (visited[dst][src]) continue;
//             stack.push(dst);
//             visited[src][dst] = true;
//             visited[dst][src] = true;
//         }
//     }
    
//     return distances;
// }

// function solution(N, road, K) {
//     const graph = getGraph(N, road);
//     const distances = dfs(N, graph)
    
//     return distances.filter((distance) => distance <= K).length;
// }