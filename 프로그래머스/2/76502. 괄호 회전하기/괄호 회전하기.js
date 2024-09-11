const PAIR_BRACKET = {
  "[": "]",
  "{": "}",
  "(": ")",
};

function isValidBrackets(str) {
  const stack = [];

  for (const char of str) {
    if (char in PAIR_BRACKET) {
      stack.push(char);
      continue;
    }
    if (PAIR_BRACKET[stack.pop()] === char) {
      continue;
    }

    return false;
  }

  return stack.length === 0;
}

function solution(s) {
  let cnt = 0;

  for (let i = 0; i < s.length; i++) {
    const rotatedString = s.slice(i) + s.slice(0, i);
    if (isValidBrackets(rotatedString)) cnt += 1;
  }

  return cnt;
}
