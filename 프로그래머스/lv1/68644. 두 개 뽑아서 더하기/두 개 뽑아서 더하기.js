function solution(numbers) {
    let sumList = [];
    let copyNumbers = [...numbers];
    
    numbers.forEach((number, idx) => {
        copyNumbers.shift();
        
        copyNumbers.forEach((shifteddNumber) => {
            const sumNum = number + shifteddNumber;
            
            if (!sumList.includes(sumNum)) {
                sumList.push(sumNum);
            }
        })
    })
    
    return sumList.sort((a, b) => a - b);
}