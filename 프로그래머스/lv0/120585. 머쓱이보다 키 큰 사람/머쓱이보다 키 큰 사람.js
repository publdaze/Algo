function solution(array, height) {
    return array.reduce((p, c) => {
        if (c > height) return p + 1;
        return p;
    }, 0);
}