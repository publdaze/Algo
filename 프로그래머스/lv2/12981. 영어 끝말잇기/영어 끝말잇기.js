// i : 사람수 n, 순서대로 말한 단어 words
// o : 탈락자 번호, 자신의 몇번째 차례 탈락인지, 탈락자 없을 시 [0,0]
// 탈락 조건 : 이전에 등장했던 단어, 단어 시작 틀림
// 32m

function solution(n, words) {
    const prevArray = [];
    
    for (let i = 0; i < words.length; i++) {
        if (prevArray.includes(words[i]) || (i > 0 && words[i-1].at(-1) !== words[i].at(0))) {
            const turn = i + 1;
            
            return [turn % n || n, Math.ceil(turn / n)];
        }
        
        prevArray.push(words[i]);
    }
    
    return [0, 0];
}