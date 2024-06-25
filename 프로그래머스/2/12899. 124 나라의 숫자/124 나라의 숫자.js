function convertRadix(n) {
    const result = [];
    
    while(n !== 0) {
        result.push(n % 3 || 4);
        if (n % 3 === 0) n -= 1;
        n = Math.floor(n / 3);
    }
    
    return result.reverse();
}

function solution(n) {
    return convertRadix(n).join("");
}