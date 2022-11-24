function solution(s) {
    let sArr = [...s];
    sArr.sort();
    return sArr.reverse().join('');
}