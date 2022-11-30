function solution(price, money, count) {
    const how = Array.from({ length: count }, (v, i) => i + 1)
        .reduce((p, c) => (p + price * c), 0) - money;
    
    if (how < 0) return 0;
    return how;
}