function calculateSlope([x1, y1], [x2, y2]) {
    return (y2 - y1) / (x2 - x1);
}

function solution(dots) {
    const [a, b, c, d] = dots.sort((dot1, dot2) => dot1[0] - dot2[0]);
    return calculateSlope(a, b) === calculateSlope(c, d) || 
           calculateSlope(a, c) === calculateSlope(b, d) 
           ? 1 
           : 0;
}