function solution(prices) {
    const result = []
    const prevPrices = [];
    
    while (prices.length > 0) {
        const price = prices.pop();
        let term = 0;
        for (let i = prevPrices.length - 1; i >= 0; i--) {
            term++;
            if (price > prevPrices[i]) break;
        }
        result.push(term);
        prevPrices.push(price);
    }
    
    return result.reverse();
}