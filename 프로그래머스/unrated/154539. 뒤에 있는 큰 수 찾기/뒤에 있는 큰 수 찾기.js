function solution(numbers) {
    const backBigNum = Array(numbers.length).fill(-1);
    
    for (let i = numbers.length - 2; i >= 0; i--) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] < numbers[j]) {
                backBigNum[i] = numbers[j];
                break;
            } else {
                if (backBigNum[j] === -1) {
                    backBigNum[i] = -1;
                    break;
                }
                else if (numbers[i] < backBigNum[j]) {
                    backBigNum[i] = backBigNum[j];
                    break;
                }
            }
        }
    }
    
    return backBigNum;
}