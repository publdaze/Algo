function solution(n, a, b) {
    let round = 0;
    while (a !== b) {
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        round += 1;
    }
    return round;
}

// function solution(n, a, b) {
//     a -= 1;
//     b -= 1;
    
//     let round = 0;
//     while (a !== b) {
//         round += 1;
//         a = Math.floor(a / 2);
//         b = Math.floor(b / 2);
//     }
//     return round;
// }