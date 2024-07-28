function solution(arr) {
    return arr.map((num) => Array(num).fill(num)).flat();
}