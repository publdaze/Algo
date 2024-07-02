function dfs(i, cards, visited) {
    const queue = [i];
    visited[i] = true;
    let cnt = 0;
    while(queue.length > 0) {
        cnt++;
        const src = queue.pop();
        const dst = cards[src];
        if (visited[dst]) return cnt;
        visited[dst] = true;
        queue.push(dst);
    }
    return -1;
}

function solution(cards) {
    cards.unshift(null);
    const result = [];
    const visited = Array(cards.length).fill(false);
    for (let i = 1; i < cards.length; i++) {
        if (visited[i]) continue;
        const cnt = dfs(i, cards, visited);
        
        if (cnt === -1) return 0;
        result.push(cnt);
    }
    
    if (result.length < 2) return 0;
    return result.sort((a, b) => b - a).slice(0, 2).reduce((acc, curr) => acc * curr, 1);
}