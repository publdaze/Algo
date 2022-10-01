function solution(s) {
    var halfSize = parseInt(s.length / 2);
    return s.length % 2 ? s[halfSize] : s.substr(halfSize - 1, 2);
}