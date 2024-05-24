function divisorCnt(num, limit, power) {
    let cnt = 0;
    for (let i = 1; i * i <= num; i++) {
        if (num === i * i) {
            cnt += 1;
            continue;
        }
        if (num % i === 0) cnt += 2;
    }
    return cnt > limit ? power : cnt;
}

function solution(number, limit, power) {
    return Array
        .from({length: number}, (_, i) => i + 1)
        .map((num) => divisorCnt(num, limit, power))
        .reduce((acc, curr) => acc + curr, 0);
}