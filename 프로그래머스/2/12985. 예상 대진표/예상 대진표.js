function solution(n, a, b) {
    if (a > b) [a, b] = [b, a];
    a -= 1;
    b -= 1;
    
    let round = 1;
    while (!(a % 2 === 0 && b === a + 1)) {
        a = Math.floor(a / 2);
        b = Math.floor(b / 2);
        round += 1;
    }
    return round;
}