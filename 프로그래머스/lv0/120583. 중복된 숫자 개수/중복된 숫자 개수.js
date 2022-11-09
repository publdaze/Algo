function solution(array, n) {
    return array.reduce((p, c) => {
        if (c === n) return p + 1;
        return p;
    }, 0)
}