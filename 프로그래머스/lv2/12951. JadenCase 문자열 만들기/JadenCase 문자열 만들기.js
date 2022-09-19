function solution(s) {
    var answer = '';
    answer = s
    .split(" ")
    .map((c) => (c.charAt(0).toUpperCase() + c.slice(1).toLowerCase()))
    .join(" ");
    return answer;
}