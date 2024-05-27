function solution(word) {
    const CHARACTERS = ['A', 'E', 'I', 'O', 'U'];
    let cnt = 0;
    let found = false;

    function dfs(currWord, depth) {
        if (currWord === word) {
            found = true;
            return;
        }
        if (depth === 5 || found) return;

        for (let char of CHARACTERS) {
            if (found) return;
            cnt++;
            dfs(currWord + char, depth + 1);
        }
    }
    
    dfs("", 0);
    return cnt;
}

