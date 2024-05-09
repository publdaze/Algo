function solution(n, left, right) {
    // 풀이 참고
    const result = [];

    for (let i = left; i <= right; i += 1) {
        result.push(Math.max(Math.floor(i / n), i % n) + 1);    
    }

    return result;
    
    // 정답
    // const result = [];

    // for (let i = Math.floor(left / n); i < n; i += 1) {
    //     for (let j = 0; j < n; j += 1) {
    //         const oneDementionCnt = n * i + j;
    //         if (oneDementionCnt < left) continue;
    //         if (oneDementionCnt > right) return result;
    //         result.push(j < i ? i + 1 : j + 1);
    //     }
    // }

    // return result;
    
    // 시간 초과
    // const result = [];

    // for (let i = 0; i < n; i += 1) {
    //     for (let j = 0; j < n; j += 1) {
    //         const oneDementionCnt = n * i + j;
    //         if (oneDementionCnt < left || oneDementionCnt > right) continue;
    //         result.push(j < i ? i + 1 : j + 1);
    //     }
    // }

    // return result;
    
    // 메모리 부족
    // const arr = Array.from({ length: n }, (v, i) => Array.from({ length: n }, (v2, j) => j < i ? i + 1 : j + 1));
    // return arr.flat().slice(left, right + 1);
}