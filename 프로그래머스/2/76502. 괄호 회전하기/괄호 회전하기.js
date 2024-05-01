function solution(s) {
    let cnt = 0;

    const isValidBrackets = (str) => {
        const stack = [];
        const open = ["(", "[", "{"];
        const map = new Map([[")", "("], ["]", "["], ["}", "{"]]);

        for (let i = 0; i < str.length; i++) {
            let char = str[i];
            if (open.includes(char)) {
                stack.push(char);
                continue;
            }
            if (stack.length === 0) return false;
            if (stack.at(-1) === map.get(char)) {
                stack.pop();
                continue;
            }
            
            return false;
        }
        
        return stack.length === 0;
    };

    for (let i = 0; i < s.length; i++) {
        const rotatedString = s.slice(i) + s.slice(0, i);
        if (isValidBrackets(rotatedString)) cnt += 1;
    }

    return cnt;

    
//     틀림
//     if (s.length % 2 !== 0) return 0;
//     s = [...s];
    
//     const open = ["(", "[", "{"];
//     const close = [")", "]", "}"];
//     const map = new Map([["(", ")"], ["[", "]"], ["{", "}"]]);
//     const stack = [];
//     let cnt = s.length / 2;
//     while(s.length > 0) {
//         const top = s.pop();
//         if (close.includes(top)) {
//             stack.push(top);
//             continue;
//         }
//         if (stack.length === 0) {
//             s.unshift(top);
//             continue;
//         }
//         if (stack.at(-1) === map.get(top)) {
//             stack.pop();
//             if (stack.length > 0) cnt--;
//             continue;
//         }
        
//         return 0;
//     }
//     if (stack.length > 0) return 0;
//     return cnt;
}
