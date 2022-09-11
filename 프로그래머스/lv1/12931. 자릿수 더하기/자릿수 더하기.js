const sum = (arr) => arr.reduce((prev, curr) => prev + curr, 0);

function solution(n)
{
    var answer = sum(String(n).split('').map(Number));

    return answer;
}