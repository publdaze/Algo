// (x1, y1, x2, y2) 테두리 회전 - 한칸씩
// 위치 바뀐 숫자들 중 각장 작은 숫자
// 1. 회전 대상 숫자들을 찾는다.
// 2. 그중 최솟값을 구한다
// 3. 반복
// !!변경된 상태를 참조해야 함!
// 테이블의 크기가 더 커진다면?

function setRotatedMatrix(matrix, query) {
    const [x1, y1, x2, y2] = query;
    const tempStart = matrix[x1 - 1][y1 - 1];
    const rotatedNumbers = [tempStart];
    
    // 하상 (y1: x2 -> x1)
    for (let i = x1; i < x2; i++) {
        matrix[i - 1][y1 - 1] = matrix[i][y1 - 1]; // zero base index
        rotatedNumbers.push(matrix[i - 1][y1 - 1]);
    }

    // 우좌 (x2: y2 -> y1)
    for (let i = y1; i < y2; i++) {
        matrix[x2 - 1][i - 1] = matrix[x2 - 1][i];
        rotatedNumbers.push(matrix[x2 - 1][i - 1]);
    }
    
    // 상하 (y2: x1 -> x2)
    for (let i = x2 - 1; i >= x1; i--) {
        matrix[i][y2 - 1] = matrix[i - 1][y2 - 1]; // zero base index
        rotatedNumbers.push(matrix[i][y2 - 1]);
    }

    // 좌우 (x1: y1 -> y2)
    for (let i = y2 - 1; i > y1; i--) {
        matrix[x1 - 1][i] = matrix[x1 - 1][i - 1];
        rotatedNumbers.push(matrix[x1 - 1][i]);
    }
    matrix[x1 - 1][y1] = tempStart;
    
    return rotatedNumbers;
}

function getRotatedNumbers(query) {
    
}

function solution(rows, columns, queries) {
    const matrix = Array.from({ length: rows }, (_, row) => Array.from({ length: columns }, (_, col) => row * columns + col + 1));
    
    return queries.map((query) => {
        const rotatedNumbers = setRotatedMatrix(matrix, query);
        return Math.min(...rotatedNumbers);
    });
}