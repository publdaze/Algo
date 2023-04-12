function solution(numbers) {
    var sumList = [];
    
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            const sumNum = numbers[i] + numbers[j];
            if (!sumList.includes(sumNum)) {
                sumList.push(numbers[i] + numbers[j]);
            }
        }
    }
    
    return sumList.sort((a, b) => a - b);
}