function setSlope([x1, y1], [x2, y2]) {
    return (y1 - y2) / (x1 - x2)
}

function solution(dots) {
    const [a, b, c, d] = dots.sort((i, j) => i[0] - j[0]);
    if (setSlope(a, b) === setSlope(c, d)) return 1;
    if (setSlope(a, c) === setSlope(b, d)) return 1;
    return 0;
}