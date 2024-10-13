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
    
    if (result.length === 0) return "-1";
    if (+result === 0) return "0";
    return result;
}