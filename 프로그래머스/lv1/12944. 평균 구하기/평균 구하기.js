const average = (arr) => arr.reduce((prev, curr) => prev + curr, 0) / arr.length;

function solution(arr) {
    var answer = average(arr);
    return answer;
}