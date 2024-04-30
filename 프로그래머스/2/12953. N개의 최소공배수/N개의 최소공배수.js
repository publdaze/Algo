const lcd = (a, b) => {
    if (a > b) [a, b] = [b, a];
    for (let i = 1; i <= a * b; i++) {
        const num = a * i;
        if (num % b === 0) {
            return num;
        }
    }
}

const solution = (arr) => {
    return arr.reduce((acc, curr) => lcd(acc, curr), 1);
}