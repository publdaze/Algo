// 10일 동안 회원 자격
// 매일 한 가지 할인
// 할인 제품 하루에 하나씩만 구매 가능
// 원하는 제품과 수량이 10일안에 있을 때 맞춰서 가입
// 회원 가입 가능한 날짜 수
// ["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"]
// ["banana", "apple", "rice", "pork", "pot"]
const MEMBERSHIP_VALID_DAYS = 10;

function solution(want, number, discount) {
  let startDate = 0;
  let endDate = startDate + MEMBERSHIP_VALID_DAYS;

  const wantItems = want.reduce((acc, item, idx) => acc.set(item, number[idx]), new Map());
  const currTermItems = discount
    .slice(startDate, endDate)
    .reduce((acc, item) => acc.set(item, (acc.get(item) || 0) + 1), new Map());

  let cnt = 0;

  while (endDate <= discount.length) {
    if ([...wantItems.entries()].every(([key, value]) => currTermItems.get(key) >= value)) {
      cnt++;
    }

    currTermItems.set(discount[startDate], currTermItems.get(discount[startDate]) - 1);
    startDate += 1;
    currTermItems.set(discount[endDate], (currTermItems.get(discount[endDate]) || 0) + 1);
    endDate += 1;
  }

  return cnt;
}