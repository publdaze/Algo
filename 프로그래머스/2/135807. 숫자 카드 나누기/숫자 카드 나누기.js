// 카드 절반 나움
// => 가장 큰 양의 정수 a ((a % 철수 카드 === 0 && a % 영희 카드 !== 0) || (a % 영희 카드 === 0 && a % 철수 카드 !== 0))
// => a or (없다면) 0
// *철수 영희 중복 원소 가능
// O(n^2) X, O(nlogn) -> 가능한 지 어떻게 파악?
// 최대공약수 // 여러 숫자들의 최대 공약수를 어떻게 구할 것인가?? // 나온 최대 공약수와의 최대 공약수 구하기
// 두 조건이 다 만족할 때 둘 중 큰 걸로 해야함! (조건문 쓸 때 A 기준 먼저 측정해서 두 경우중 더 큰 경우에 대한 판단이 부족한 걸 늦게 인지함)

function gcd(a, b) {
    if (b > a) [a, b] = [b, a];
    while (a % b !== 0) {
        [a, b] = [b, a % b];
    }
    
    return b;
}

function gcdOfArray(arr) {
    return arr.reduce((acc, x) => gcd(acc, x));
}

function solution(arrayA, arrayB) {
    const gcdA = gcdOfArray(arrayA);
    const gcdB = gcdOfArray(arrayB);
    const someBDivisibleByGcdA = arrayB.some((element) => element % gcdA === 0);
    const someADivisibleByGcdB = arrayA.some((element) => element % gcdB === 0);
    
    
  if (someBDivisibleByGcdA && someADivisibleByGcdB) {
    return 0;
  }
  if (someBDivisibleByGcdA) return gcdB;
  if (someADivisibleByGcdB) return gcdA;
  return Math.max(gcdA, gcdB);
}