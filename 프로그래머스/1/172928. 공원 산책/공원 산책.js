function getStart(park) {
    for (let i = 0; i < park.length; i++) {
        for (let j = 0; j < park[i].length; j++) {
            if (park[i][j] === "S") return [i, j];
        }
    }   
}

function outOfRange(row, col, maxRow, maxCol) {
    return row < 0 || col < 0 || row > maxRow || col > maxCol;
}

function isBlocked(currRow, currCol, nextRow, nextCol, park) {
    if (currRow > nextRow) [currRow, nextRow] = [nextRow, currRow];
    if (currCol > nextCol) [currCol, nextCol] = [nextCol, currCol];
    
    for (let i = currRow; i <= nextRow; i++) {
        if (park[i][nextCol] === "X") return true;
    }    
    for (let i = currCol; i <= nextCol; i++) {
        if (park[nextRow][i] === "X") return true;
    }
    
    return false;
}

function solution(park, routes) {
    const maxRow = park.length - 1, maxCol = park[0].length - 1;
    let [row, col] = getStart(park);
    routes = routes.map((route) => {
        const [direction, distance] = route.split(" ");
        
        if (direction === "E") return [0,  Number(distance)];
        if (direction === "W") return [0, -Number(distance)];
        if (direction === "S") return [ Number(distance), 0];
        if (direction === "N") return [-Number(distance), 0];
    });
    routes.forEach(([dRow, dCol]) => {
        const nextRow = row + dRow, nextCol = col + dCol;
        if (outOfRange(nextRow, nextCol, maxRow, maxCol) || isBlocked(row, col, nextRow, nextCol, park)) return;
        
        row = nextRow;
        col = nextCol;
    });
    
    return [row, col];
}