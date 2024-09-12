function checkRemovable(s) {
    const stack = [];
    
    for (const char of s) {
        if (stack[stack.length - 1] !== char) {
            stack.push(char);
            continue;
        }
        stack.pop();
    }
    
    return stack.length ? 0 : 1;
}

function solution(s) {
    return checkRemovable(s);
}