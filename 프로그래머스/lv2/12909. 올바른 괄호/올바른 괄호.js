function solution(s){
    let stack = [s[0]];
    for(let i = 1; i < s.length; i++) {
        if (stack.at(-1) === '(' && s[i] == ')') {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    
    return stack.length === 0 ? true : false;
}
