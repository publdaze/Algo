// 1 -> 3 원판으로 최소로 옮기는 방법

function move(n, from, to, aux) {
    if (n === 1) return [[from, to]];
    const result = [];
    result.push(...move(n - 1, from, aux, to));
    result.push([from, to]);
    result.push(...move(n - 1, aux, to, from));
    return result;
}

function solution(n) {
    return move(n, 1, 3, 2);
}