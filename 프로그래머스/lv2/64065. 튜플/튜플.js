// i : 튜플 집합
// o : 튜플
// s : 반복되는 숫자 개수 센 후 내림차순 정렬
// 53m -> 시간 초과 -> +3m

function solution(s) {
    const set = {}
    Array.from(s.match(/\d+/g), (element) => set[element] = set[element] ? set[element] + 1 : 1);

    const keys = Object.keys(set);
    
    keys.sort((a, b) => {
        return set[b] - set[a];
    })
    
    return keys.map(Number);
}