function solution(answers) {
    const mathNoPeopleOnePattern = [1, 2, 3, 4, 5];
    const mathNoPeopleTwoPattern = [2, 1, 2, 3, 2, 4, 2, 5];
    const mathNoPeopleThreePattern = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let mathNoPeopleOneCorrectCnt = 0;
    let mathNoPeopleTwoCorrectCnt = 0;
    let mathNoPeopleThreeCorrectCnt = 0;
    
    let maxScore = 0;
    let maxPeople = [];
    
    answers.map((answer, idx) => {
        if (answer === mathNoPeopleOnePattern[idx % mathNoPeopleOnePattern.length]) {
            mathNoPeopleOneCorrectCnt += 1;
        }
        if (answer === mathNoPeopleTwoPattern[idx % mathNoPeopleTwoPattern.length]) {
            mathNoPeopleTwoCorrectCnt += 1;
        }
        if (answer === mathNoPeopleThreePattern[idx % mathNoPeopleThreePattern.length]) {
            mathNoPeopleThreeCorrectCnt += 1;
        }
    });
    
    let scores = [mathNoPeopleOneCorrectCnt, mathNoPeopleTwoCorrectCnt, mathNoPeopleThreeCorrectCnt];
    
    scores.map((score, idx) => {
        if (score > maxScore) {
            maxScore = score;
            maxPeople = [];
            maxPeople.push(idx + 1);
        } else if (score === maxScore) {
            maxPeople.push(idx + 1);
        }
    });
    
    return maxPeople;
}