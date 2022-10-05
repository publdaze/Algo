function solution(absolutes, signs) {
    var answer = absolutes.reduce((p, c, i) => {
        return p + c * (signs[i] ? 1 : -1)
    }, 0);
    return answer;
}