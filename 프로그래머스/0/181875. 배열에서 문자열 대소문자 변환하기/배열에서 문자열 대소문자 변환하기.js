function solution(strArr) {
    return strArr.map((element, idx) => idx % 2 === 0 ? element.toLowerCase() : element.toUpperCase());
}