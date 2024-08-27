function solution(s, skip, index) {
    return [...s].map((c) => {
        let currCharCode = c.charCodeAt();
        for (let i = 0; i < index; i++) {
            do {
                currCharCode = currCharCode < "z".charCodeAt() ? currCharCode + 1 : "a".charCodeAt();
            } while(skip.includes(String.fromCharCode(currCharCode)));
        }
        
        return String.fromCharCode(currCharCode);
    }).join("");
}