function solution(n, t, m, p) {
    const numbers = [];
    
    let currDecimalNum = 0;
    while (numbers.length < t * m) {
        numbers.push(...currDecimalNum.toString(n));
        currDecimalNum += 1;
    }
    
    let result = "";
    
    for (let i = p; result.length !== t; i += m) {
        result += numbers[i - 1].toUpperCase();
    }
    
    return result;
}