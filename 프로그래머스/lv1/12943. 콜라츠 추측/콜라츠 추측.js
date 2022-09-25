function solution(num) {
  var answer = 0;
  var result = 0;
  while (result <= 500) {
    if (num === 1) break;
    result += 1;
    num = num % 2 ? num * 3 + 1 : num / 2;
  }
  result >= 500 ? (answer = -1) : (answer = result);
  return answer;
}