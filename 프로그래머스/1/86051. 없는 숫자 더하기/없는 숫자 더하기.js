function solution(numbers) {
    const START_NUMBER = 0;
    const END_NUMBER = 9;
    
    let notIncludeNumSum = 0;
    for (let i = START_NUMBER; i <= END_NUMBER; i++) {
        if (!numbers.includes(i)) notIncludeNumSum += i;
    }
    
    return notIncludeNumSum;
}