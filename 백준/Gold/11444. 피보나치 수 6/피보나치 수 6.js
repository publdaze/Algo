const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

//REVIEW - 피보나치 수를 행렬의 곱을 통해 구할 수 있다
//FIXME - 아직 풀이 이해 못 함
//https://nahwasa.com/entry/%EB%B6%84%ED%95%A0-%EC%A0%95%EB%B3%B5%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EA%B1%B0%EB%93%AD%EC%A0%9C%EA%B3%B1-%EC%B5%9C%EC%A0%81%ED%99%94
//https://st-lab.tistory.com/251

const MOD = 1000000007n;

function matrixMult(a, b) {
  const arr = [
    [0n, 0n],
    [0n, 0n],
  ];

  arr[0][0] = (((a[0][0] * b[0][0]) % MOD) + ((a[0][1] * b[1][0]) % MOD)) % MOD;
  arr[1][0] = (((a[0][0] * b[0][1]) % MOD) + ((a[0][1] * b[1][1]) % MOD)) % MOD;
  arr[0][1] = (((a[1][0] * b[0][0]) % MOD) + ((a[1][1] * b[1][0]) % MOD)) % MOD;
  arr[1][1] = (((a[1][0] * b[0][1]) % MOD) + ((a[1][1] * b[1][1]) % MOD)) % MOD;

  return arr;
}

function fibo(n) {
  if (n === 1n) {
    return [
      [1n, 1n],
      [1n, 0n],
    ];
  }
  let tmp = fibo(n / 2n);
  if (n % 2n === 1n) {
    return matrixMult(matrixMult(tmp, tmp), fibo(1n));
  } else {
    return matrixMult(tmp, tmp);
  }
}

console.log(fibo(BigInt(input))[0][1].toString());
