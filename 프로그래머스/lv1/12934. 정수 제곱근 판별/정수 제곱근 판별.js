function solution(n) {
  var answer = 0;
  const sqrtN = Math.sqrt(n);
  answer = Number.isInteger(sqrtN) ? (sqrtN + 1) ** 2 : -1;

  return answer;
}