function getIntersectionPoint([a, b, e], [c, d, f]) {
    if (a * d - b * c === 0) return [null, null];
    
    const x = (b * f - e * d) / (a * d - b * c);
    const y = (e * c - a * f) / (a * d - b * c);
    
    return [x, y];
}

function solution(line) {
    const intersectionPoints = [];
    
    for (let i = 0; i < line.length; i++) {
        for (let j = i + 1; j < line.length; j++) {
            intersectionPoints.push(getIntersectionPoint(line[i], line[j]))
        }
    }
    
    const integerIntersectionPoints = intersectionPoints.filter((intersectionPoint) => intersectionPoint.every(Number.isInteger));
    
    const [minX, minY, maxX, maxY] = integerIntersectionPoints.reduce(([minX, minY, maxX, maxY], [x, y]) => {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
        return [minX, minY, maxX, maxY];
    }, [Infinity, Infinity, -Infinity, -Infinity]);
    
    const result = Array.from({ length: maxY - minY + 1 }, () => Array.from({ length: maxX - minX + 1 }, () => "."));
    
    integerIntersectionPoints.forEach(([x, y]) => {
        result[-y + maxY][x - minX] = "*";
    })
    
    return result.map((line) => line.join(""));
}