// +, -, * 제공
// 연산자 우선순위 재정의 가능 (서로 다른 우선순위)
// 절댓값 가장 큰 숫자 제출 -> 우승상금
// S) 모든 우선순위 경우에 대해서 계산 후 비교
// S1) 현재 우선순위 제외한 연산자 기준 split 하여 계산 후 합치기 반복
// S2) 먼저 split 해둔 후 
// [100, 200, 300, 500, 20]
//    [-,   *,   -,   +] // 연산 앞엣거 고정
// [-100, -200, 20]

function getPermutations(arr) {
  if (arr.length === 0) return [[]];
    
  const result = [];
  arr.forEach((fixed, idx) => {
    const rest = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
    const perms = getPermutations(rest);
    perms.forEach((perm) => result.push([fixed, ...perm]));
  });
  return result;
}

function calculation(a, b, operator) {
    if (operator === '+') return a + b;
    if (operator === '-') return a - b;
    if (operator === '*') return a * b;
}

function calculateExpression(numbers, operators, currOperator) {
    const nextNumbers = [];
    const nextOperators = [];
    
    let calculatedNumber = numbers[0];
    operators.forEach((operator, i) => {
        if (operator === currOperator) {
            calculatedNumber = calculation(calculatedNumber, numbers[i + 1], operator);
        }  else {
            nextNumbers.push(calculatedNumber);
            nextOperators.push(operator);
            calculatedNumber = numbers[i + 1];
        }
    });
    nextNumbers.push(calculatedNumber);
    
    return [nextNumbers, nextOperators];
}

function solution(expression) {
    const numbers = expression.split(/[+\-\*]/).map(Number);
    const operators = expression.match(/[+\-\*]/g);
    
    const priority = getPermutations([...new Set(operators)]);
    
    let maxResult = 0;
    for (const p of priority) {
        let copyNumbers = [...numbers];
        let copyOperators = [...operators];
        for (const operator of p) {
            [copyNumbers, copyOperators] = calculateExpression(copyNumbers, copyOperators, operator);
        }
        
        maxResult = Math.max(maxResult, Math.abs(...copyNumbers));
    }
    
    return maxResult;
}