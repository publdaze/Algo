// 유사도: 두 집합의 교집합 크기를 두 집합의 합집합 크기로 나눈 값
// 공집합 -> 1
// 두 글자씩 끊어서 다중집합의 원소
// 영문자로 된 글자 쌍만 유효 -> 아닌 경우 글자 쌍을 버림
// 대소문자 무시
// 65536을 곱한 후에 소수점 아래를 버리고 정수부만 출력

function getMultiSet(str1, str2) {
    const str1Set = [], str2Set = [];
    const pattern = /[a-z]/;
    
    for (let i = 0; i < str1.length - 1; i++) {
        if (!pattern.test(str1[i]) || !pattern.test(str1[i + 1])) continue;
        str1Set.push(str1[i] + str1[i + 1]);
    }
    for (let i = 0; i < str2.length - 1; i++) {
        if (!pattern.test(str2[i]) || !pattern.test(str2[i + 1])) continue;
        str2Set.push(str2[i] + str2[i + 1]);
    }
    
    return [str1Set, str2Set];
}

function getIntersetctionSize(a, b) {
    //a.filter((str) => b.includes(str)).length;
    const items = new Set(a);
    return [...items].reduce((acc, curr) => {
        return acc + Math.min(a.filter((str) => str === curr).length, b.filter((str) => str === curr).length);
    }, 0);
}

function getUnionSize(a, b) {
    return a.length + b.length - getIntersetctionSize(a, b);
}

function solution(str1, str2) {
    const [set1, set2] = getMultiSet(str1.toLowerCase(), str2.toLowerCase());
    const [intersetcionSize, unionSize] = [getIntersetctionSize(set1, set2), getUnionSize(set1, set2)];
    
    const J = intersetcionSize === 0 && unionSize === 0 ? 1 : intersetcionSize / unionSize;
    return Math.floor(J * 65536);
}