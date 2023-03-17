function solution(str) {
	// 배열에서 숫자 여부를 따로 판단하는 방식이 아닌 string에서 숫자인 부분만 뽑아 내기
  const stringOfNumber = str.match(/\d/g);
	// 배열 Array라는 표현을 주로 쓰므로 List -> Array로 변수명 변경
  const NumberArray = stringOfNumber.map(Number);

  return NumberArray.sort();
}