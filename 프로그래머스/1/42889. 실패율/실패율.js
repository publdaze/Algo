function solution(N, stages) {
    let failureRates = Array(N + 2).fill(0);
    let peopleCnt = stages.length;
    
    stages.map((stage) => {
        failureRates[stage] += 1;
    })
    
    failureRates = failureRates.map((challengePersonCnt, i) => {
        peopleCnt -= challengePersonCnt;
        return { stage: i, failureRate: challengePersonCnt / peopleCnt };
    }).slice(1, -1);
    
    failureRates.sort((a, b) => b.failureRate - a.failureRate || a.stage - b.stage);
    
    
    return failureRates.map(({stage}) => stage);
}