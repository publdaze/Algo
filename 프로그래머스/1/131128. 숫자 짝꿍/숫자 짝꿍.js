const DIGIT_CNT = 10;

function solution(X, Y) {
    const xDigits = [...Array(DIGIT_CNT).fill(0)];
    const yDigits = [...Array(DIGIT_CNT).fill(0)];
    
    for (const x of X) {
        xDigits[x] += 1;
    }
    for (const y of Y) {
        yDigits[y] += 1;
    }
    
    let result = "";
    for (let i = DIGIT_CNT - 1; i >= 0; i--) {
        result += String(i).repeat(Math.min(xDigits[i], yDigits[i]));
    }
    
    const set = new Set(result);
    if (set.size === 1 && set.has("0")) return "0";
    if (set.size === 0) return "-1";
    return result;
}