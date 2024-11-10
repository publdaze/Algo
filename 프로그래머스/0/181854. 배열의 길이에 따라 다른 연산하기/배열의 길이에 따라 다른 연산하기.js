function solution(arr, n) {
    return arr.map((num, i) => i % 2 === +!(arr.length % 2)  ? num + n : num);
}