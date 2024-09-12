function checkRemovable(s) {
    const stack = [];
    
    for (const char of s) {
        if (stack.at(-1) !== char) {
            stack.push(char);
            continue;
        }
        stack.pop();
    }
    
    return !stack.length;
}


function solution(s) {
    return checkRemovable(s) ? 1 : 0;
}