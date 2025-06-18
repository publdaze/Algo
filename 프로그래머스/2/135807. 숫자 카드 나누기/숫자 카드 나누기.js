// 카드 절반 나움
// => 가장 큰 양의 정수 a ((a % 철수 카드 === 0 && a % 영희 카드 !== 0) || (a % 영희 카드 === 0 && a % 철수 카드 !== 0))
// => a or (없다면) 0
// *철수 영희 중복 원소 가능
// O(n^2) X, O(nlogn) -> 가능한 지 어떻게 파악?
// 최대공약수 // 여러 숫자들의 최대 공약수를 어떻게 구할 것인가?? // 나온 최대 공약수와의 최대 공약수 구하기
// 두 조건이 다 만족할 때 둘 중 큰 걸로 해야함!

function gcd(a, b) {
    if (b > a) [a, b] = [b, a];
    while (a % b !== 0) {
        [a, b] = [b, a % b];
    }
    
    return b;
}

function gcdByArray(arr) {
    let gcdResult = arr[0];
    for (const element of arr) {
        gcdResult = gcd(gcdResult, element);
    }
    return gcdResult;
}

function solution(arrayA, arrayB) {
    const totalGCDA = gcdByArray(arrayA);
    const totalGCDB = gcdByArray(arrayB);
    const isValidA = arrayB.every((element) => element % totalGCDA !== 0);
    const isValidB = arrayA.every((element) => element % totalGCDB !== 0);
    return isValidA && isValidB ? Math.max(totalGCDA, totalGCDB) : isValidA ? totalGCDA : isValidB ? totalGCDB : 0;
}