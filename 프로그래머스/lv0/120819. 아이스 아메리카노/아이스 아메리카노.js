function solution(money) {
    const COST = 5500;
    let count = 0;
    while(money >= COST) {
        count += 1;
        money -= COST;
    }
    return [count, money];
}