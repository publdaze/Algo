// i : 사람수 n, 순서대로 말한 단어 words
// o : 탈락자 번호, 자신의 몇번째 차례 탈락인지, 탈락자 없을 시 [0,0]
// 탈락 조건 : 이전에 등장했던 단어, 단어 시작 틀림
// 32m

function solution(n, words) {
    const prevArray = [];
    let turn = 0;
    for (const word of words) {
        turn += 1;
        if (prevArray.includes(word) || (prevArray.length > 0 && prevArray.at(-1).at(-1) !== word[0])) {
            console.log(turn);
            return [turn % n === 0 ? n : turn % n, Math.ceil(turn / n)];
        }
        
        prevArray.push(word);
    }
    
    return [0, 0];
}