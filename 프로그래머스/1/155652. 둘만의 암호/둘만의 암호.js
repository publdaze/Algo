function solution(s, skip, index) {
    const skipSet = new Set(skip);
    const aCharCode = 'a'.charCodeAt();
    const zCharCode = 'z'.charCodeAt();
    
    return [...s].map((c) => {
        let currCharCode = c.charCodeAt();
        let steps = 0;
        
        while (steps < index) {
            currCharCode = currCharCode < zCharCode ? currCharCode + 1 : aCharCode;
            if (!skipSet.has(String.fromCharCode(currCharCode))) {
                steps++;
            }
        }
        
        return String.fromCharCode(currCharCode);
    }).join("");
}