// 기본키(중복 X)
// col 컬럼 기준 오름차순 정렬 (동일 시 기본키 기준 내림차순 정렬)
// row_begin ~ end 사이(포함) i번째 행 값들 i로 나눈 나머지 합을 XOR

function solution(data, col, row_begin, row_end) {
    const sortedData = data.sort((a, b) => a[col - 1] - b[col - 1] || b[0] - a[0]);

    return sortedData.slice(row_begin - 1, row_end)
        .reduce((xor, row, i) => xor ^ row.reduce((sum, cell) => sum + (cell % (row_begin + i)), 0), 0);
}