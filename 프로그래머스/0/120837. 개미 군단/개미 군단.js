function solution(hp) {
    const powers = [5, 3, 1];
    return powers.reduce((acc, curr) => {
        const antCnt = Math.floor(hp / curr);
        hp %= curr;
        return acc + antCnt;
    }, 0);
}