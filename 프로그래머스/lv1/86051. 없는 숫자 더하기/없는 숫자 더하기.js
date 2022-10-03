function solution(numbers) {
    var allNums = Array.from({length: 10}, (v, i) => i);
    var noNums = allNums.filter(x => !numbers.includes(x));
    return noNums.reduce((p, c) => p + c);
}