// i : 튜플 집합
// o : 튜플
// s : 반복되는 숫자 개수 센 후 내림차순 정렬
// 53m -> 시간 초과

function solution(s) {
    const set = {}
    Array.from(s.matchAll(/\d+/g), m => set[m[0]] = set[m[0]] ? set[m[0]] + 1 : 1);

    const keys = Object.keys(set);
    
    keys.sort((a, b) => {
        return set[b] - set[a];
    })
    
    return keys.map(Number);
}