function solution(clothes) {
  const clothSet = clothes.reduce((prev, curr) => {
    prev[curr[1]] = (prev[curr[1]] || 0) + 1;
    return prev;
  }, {});
    
  const clothCnt = Object.values(clothSet);
  const clothMul = clothCnt.reduce((prev, curr) => prev * (curr + 1), 1) - 1;

  return clothMul;
}