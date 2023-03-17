// Number.isNaN으로 변경하여 더 엄격하게 검사해줌
function isNumber(data) {
  return !Number.isNaN(data);
}

function solution(str) {
	// map을 먼저 돌려 숫자로 바꾼 후 isNumber 체크
  const numberList = [...str].map((char) => Number(char)).filter((char) => isNumber(char));
  
  return numberList.sort();
}