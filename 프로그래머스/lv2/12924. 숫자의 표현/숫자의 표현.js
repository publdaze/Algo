function solution(n) {
  let answer = 1;
  let half = parseInt(n / 2);

  let idx = 0;
  while (half !== idx) {
    let sum = 0;
    for (let i = idx; i < half + 1; i++) {
      sum += i + 1;
      if (sum === n) {
        answer += 1;
      }
      if (sum >= n) {
        break;
      }
    }
    idx += 1;
  }

  return answer;
}
