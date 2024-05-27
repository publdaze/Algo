function solution(land) {
    const COL_SIZE = 4;
    const INIT_SCORE = 0;
    
    return Math.max(...land.reduce((prevMaxScores, currScores) => currScores.map((currScore, i) => Math.max(...prevMaxScores.filter((_, j) => i !== j)) + currScore), Array(COL_SIZE).fill(INIT_SCORE)));
}