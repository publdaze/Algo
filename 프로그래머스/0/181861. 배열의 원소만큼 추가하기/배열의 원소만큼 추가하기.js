function solution(arr) {
    return arr.flatMap((num) => Array(num).fill(num));
}