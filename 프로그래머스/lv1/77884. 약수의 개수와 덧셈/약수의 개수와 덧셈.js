const getDivisorCnt = (num) => {
    return Array.from({ length : num }, (v, i) => i + 1)
        .reduce((p,c) => {
            if (num % c === 0) return p + 1;
            return p;
        }, 0);
}

function solution(left, right) {
    return Array.from({ length : right - left + 1 }, (v, i) => left + i)
        .reduce((p,c) => {
            if (getDivisorCnt(c) % 2 === 0) return p + c;
            return p - c;
        }, 0);
}