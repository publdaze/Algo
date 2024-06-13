function f(number) {
    const binaryNumber = number.toString(2);
    const lastZero = binaryNumber.lastIndexOf(0n);
    return number ^ (3n << BigInt(binaryNumber.length - 1 - lastZero)) >> 1n;
}

function solution(numbers) {
    return numbers.map((number) => f(BigInt(number)))
}