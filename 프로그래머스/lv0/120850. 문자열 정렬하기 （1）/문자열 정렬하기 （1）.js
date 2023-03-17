function isNumber(data) {
  return !isNaN(data);
}

function solution(str) {
    const numberList = [...str].filter((char) => isNumber(char)).map((char) => Number(char));
    
    return numberList.sort();
}