const mul = (a, b) => a * b;
const div = (a, b) => a / b;
const isEven = (num) => num % 2 === 0;
const isOdd = (num) => num % 2 !== 0;

const solution = (arr) => {
    const OPERAND = 2;
    return arr.map((num) => {
        if (isEven(num) && num >= 50) return div(num, OPERAND);
        if (isOdd(num) && num < 50) return mul(num, OPERAND);
        return num;
    });
}