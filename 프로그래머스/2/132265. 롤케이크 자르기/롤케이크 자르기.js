//REVIEW
function solution(toppings) {
    const toppingSetA = new Set();
    const toppingCountB = new Map();
    let uniqueToppingsB = 0;
    let result = 0;

    toppings.forEach(num => {
        toppingCountB.set(num, (toppingCountB.get(num) || 0) + 1);
    });
    uniqueToppingsB = new Set(toppings).size;

    toppings.forEach(num => {
        toppingSetA.add(num);

        let currentCount = toppingCountB.get(num) - 1;
        toppingCountB.set(num, currentCount);
        if (currentCount === 0) {
            uniqueToppingsB--;
            toppingCountB.delete(num);
        }

        if (toppingSetA.size === uniqueToppingsB) result++;
    });

    return result;
}