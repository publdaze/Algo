function solution(triangle) {
    return triangle.reverse().reduce((acc, curr) => curr.map((num, j) => Math.max(acc[j], acc[j+1]) + num)).pop();
}