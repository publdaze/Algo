

const ch = ["A", "A", "A", "A", "A", "E", "E", "E", "E", "E", "I", "I", "I", "I", "I", "O", "O", "O", "O", "O", "U", "U", "U", "U", "U"];
const visited = Array(ch.length).fill(false);
let cnt = -1;
let result;


function solution(word) {
    function dfs(currWord, depth) {
        cnt++;
        
        if (currWord === word) {
            result = cnt;
            return;
        }
        if (depth === 5 || result) return;

        if(!result) dfs(currWord + "A", depth + 1);
        if(!result) dfs(currWord + "E", depth + 1);
        if(!result) dfs(currWord + "I", depth + 1);
        if(!result) dfs(currWord + "O", depth + 1);
        if(!result) dfs(currWord + "U", depth + 1);
    }
    dfs("", 0)
    return result;
}

