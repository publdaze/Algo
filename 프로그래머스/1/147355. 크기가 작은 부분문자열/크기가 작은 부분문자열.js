//TODO - t의 부분문자열 수 <= p 인 횟수

function solution(t, p) {
    const numbers = [];
    
    for (let i = 0; i < t.length - p.length + 1; i++) {
        numbers.push(Number(t.slice(i, i + p.length)));
    }
    
    p = Number(p);
    return numbers.filter((number) => number <= p).length;
}