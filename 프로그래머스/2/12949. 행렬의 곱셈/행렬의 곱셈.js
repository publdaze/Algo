function solution(arr1, arr2) {
    const matrix = [];
    for (let i = 0; i < arr1.length; i++) {
        const row = [];
        for (let j = 0; j < arr2[0].length; j++) {
            let cell = 0;
            for (let k = 0; k < arr1[i].length; k++) {
                cell += arr1[i][k] * arr2[k][j];
            }
            row.push(cell);
        }
        matrix.push(row);
    }
    return matrix;
}