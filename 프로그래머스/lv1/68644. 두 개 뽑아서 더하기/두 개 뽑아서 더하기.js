function solution(numbers) {
    var sumList = [];
    
    numbers.forEach((number, idx) => {
        const slicedNumbers = numbers.slice(idx + 1);
        
        slicedNumbers.forEach((slicedNumber) => {
            const sumNum = number + slicedNumber;
            
            if (!sumList.includes(sumNum)) {
                sumList.push(sumNum);
            }
        })
    })
    
    return sumList.sort((a, b) => a - b);
}