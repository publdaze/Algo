function solution(answers) {
  const GUESSING_PATTERN = {
    TYPE1: [1, 2, 3, 4, 5],
    TYPE2: [2, 1, 2, 3, 2, 4, 2, 5],
    TYPE3: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  };

  const scores = answers.reduce(
    ({ type1Score, type2Score, type3Score }, answer, i) => ({
      type1Score: type1Score + Number(GUESSING_PATTERN.TYPE1[i % GUESSING_PATTERN.TYPE1.length] === answer),
      type2Score: type2Score + Number(GUESSING_PATTERN.TYPE2[i % GUESSING_PATTERN.TYPE2.length] === answer),
      type3Score: type3Score + Number(GUESSING_PATTERN.TYPE3[i % GUESSING_PATTERN.TYPE3.length] === answer),
    }),
    { type1Score: 0, type2Score: 0, type3Score: 0 }
  );
    
  const highestScore = Math.max(...Object.values(scores));
  return Object.values(scores).map((score, index) => {
      if (score === highestScore) return index + 1;
      return null;
  }).filter((score) => score !== null);
}
