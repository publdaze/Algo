function solution(answers) {
    const mathNoPeopleOnePattern = [1, 2, 3, 4, 5];
    const mathNoPeopleTwoPattern = [2, 1, 2, 3, 2, 4, 2, 5];
    const mathNoPeopleThreePattern = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    const scores = answers.reduce((prev, curr, idx) => {
        if (curr === mathNoPeopleOnePattern[idx % mathNoPeopleOnePattern.length]) {
            prev[1] += 1;
        }
        if (curr === mathNoPeopleTwoPattern[idx % mathNoPeopleTwoPattern.length]) {
            prev[2] += 1;
        }
        if (curr === mathNoPeopleThreePattern[idx % mathNoPeopleThreePattern.length]) {
            prev[3] += 1;
        }
        
        return prev;
    }, {1: 0, 2: 0, 3: 0});
    
    let maxScore = 0;
    let maxPeople = [];
    
    for (let person in scores) {
        if (scores[person] > maxScore) {
            maxScore = scores[person];
            maxPeople = [];
            maxPeople.push(Number(person));
        } else if (scores[person] === maxScore) {
            maxPeople.push(Number(person));
        }
    }

    return maxPeople;
}