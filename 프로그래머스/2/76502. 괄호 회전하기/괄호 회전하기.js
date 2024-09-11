const PAIR_BRACKET = {
    "]": "[",
    "}": "{",
    ")": "(",
}

function isValidBrackets(str) {
    const stack = [];
    const open = Object.values(PAIR_BRACKET);

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (open.includes(char)) {
            stack.push(char);
            continue;
        }
        if (stack.length === 0) return false;
        if (stack.at(-1) === PAIR_BRACKET[char]) {
            stack.pop();
            continue;
        }

        return false;
    }

    return stack.length === 0;
}

function solution(s) {
    let cnt = 0;

    for (let i = 0; i < s.length; i++) {
        const rotatedString = s.slice(i) + s.slice(0, i);
        if (isValidBrackets(rotatedString)) cnt += 1;
    }

    return cnt;
}
