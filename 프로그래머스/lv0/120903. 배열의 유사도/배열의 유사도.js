function solution(s1, s2) {
    var answer = 0;
    return s1.length + s2.length - new Set([...s1, ...s2]).size;
}