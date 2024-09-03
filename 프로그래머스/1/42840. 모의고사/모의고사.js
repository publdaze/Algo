function solution(answers) {
  const GUESSING_PATTERN = {
    TYPE1: [1, 2, 3, 4, 5],
    TYPE2: [2, 1, 2, 3, 2, 4, 2, 5],
    TYPE3: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  };

  const scores = answers.reduce(
    ([type1Score, type2Score, type3Score], answer, i) => [
      type1Score + Number(GUESSING_PATTERN.TYPE1[i % GUESSING_PATTERN.TYPE1.length] === answer),
      type2Score + Number(GUESSING_PATTERN.TYPE2[i % GUESSING_PATTERN.TYPE2.length] === answer),
      type3Score + Number(GUESSING_PATTERN.TYPE3[i % GUESSING_PATTERN.TYPE3.length] === answer),
    ],
    [0, 0, 0]
  );

  const highestScore = Math.max(...scores);
  const highestScorePeople = [];
  scores.forEach((score, index) => {
    if (score === highestScore) {
      const personNum = index + 1;
      highestScorePeople.push(personNum);
    }
  });
  return highestScorePeople;
}
