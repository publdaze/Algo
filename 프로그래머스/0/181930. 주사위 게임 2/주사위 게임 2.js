function solution(a, b, c) {
    let score = 1;
    if (a === b && b === c) score *= (Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3));
    if (a === b || b === c || a === c) score *= (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2));
    score *= (a + b + c);
    return score;
}