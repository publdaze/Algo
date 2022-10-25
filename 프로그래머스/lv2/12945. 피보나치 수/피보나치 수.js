function solution(n) {
  let num = [BigInt(0), BigInt(1)];
  for (let i = 1; i < n; i++) {
    num = [num[1], num[0] + num[1]];
  }
  return num[1] % BigInt(1234567);
}