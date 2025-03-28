function zip(arr) {
    const result = { 1: 0, 0: 0 };
    const row = [];
    for (let i = 0; i < arr.length; i += 2) {
        const col = [];
        for (let j = 0; j < arr.length; j += 2) {
            const cnt = { 1: 0, 0: 0 };
            cnt[arr[i    ][j    ]] += 1;
            cnt[arr[i + 1][j    ]] += 1;
            cnt[arr[i + 1][j + 1]] += 1;
            cnt[arr[i    ][j + 1]] += 1;
            
            if (cnt[1] === 4) col.push(1);
            else if (cnt[0] === 4) col.push(0);
            else {
                col.push(null);
                result[1] += cnt[1];
                result[0] += cnt[0];
            }
        }
        row.push(col);
    }
    
    return [row, result];
}

function solution(arr) {
    const result = { 1: 0, 0: 0 };
    while (arr.length > 1) {
        const [zippedArr, zippedResult] = zip(arr);
        
        result[1] += zippedResult[1];
        result[0] += zippedResult[0];
        arr = zippedArr;
    }
    result[arr[0]] += 1;
    return [result[0], result[1]];
}