function isCorrect(pattern, problemIdx, answer) {
  return pattern[problemIdx % pattern.length] === answer;
}

function getScore(isCorrect) {
  const SCORE_OF_EACH_PROBLEM = 1;
  return isCorrect ? SCORE_OF_EACH_PROBLEM : 0;
}

function solution(answers) {
  const GUESSING_PATTERN = {
    TYPE1: [1, 2, 3, 4, 5],
    TYPE2: [2, 1, 2, 3, 2, 4, 2, 5],
    TYPE3: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  };

  const scores = answers.reduce(
    ([type1Score, type2Score, type3Score], answer, i) => [
      type1Score + getScore(isCorrect(GUESSING_PATTERN.TYPE1, i, answer)),
      type2Score + getScore(isCorrect(GUESSING_PATTERN.TYPE2, i, answer)),
      type3Score + getScore(isCorrect(GUESSING_PATTERN.TYPE3, i, answer)),
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
