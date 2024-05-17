function solution(s) {
    const position = new Map();
    const result = [];
    s = [...s];
    
    for (let i = 0; i < s.length; i++) {
        if (position.has(s[i])) {
            result.push(i - position.get(s[i]));
        } else {
            result.push(-1);
        }
        position.set(s[i], i);
    }
    
    return result;
}