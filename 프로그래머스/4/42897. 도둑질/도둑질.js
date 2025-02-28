function solution(money) {
    const maxFirstVisit = Array(money.length).fill(0);
    const maxFirstNotVisit = Array(money.length).fill(0);
    maxFirstVisit[0] = money[0];
    maxFirstVisit[1] = money[0];
    maxFirstNotVisit[1] = money[1];
    
    for (let i = 2; i < money.length; i++) {
        if (i < money.length - 1) maxFirstVisit[i] = Math.max(maxFirstVisit[i - 2] + money[i], maxFirstVisit[i - 1]);
        maxFirstNotVisit[i] = Math.max(maxFirstNotVisit[i - 2] + money[i], maxFirstNotVisit[i - 1]);
    }
    
    return Math.max(maxFirstVisit.at(-2), maxFirstNotVisit.at(-1));
}