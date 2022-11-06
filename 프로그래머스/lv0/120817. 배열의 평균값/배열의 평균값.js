function solution(numbers) {
    return numbers.reduce((p, c) => p + c) / numbers.length;
}