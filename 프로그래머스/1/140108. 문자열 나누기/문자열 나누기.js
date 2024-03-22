//TODO - x와 x 아닌 글자 횟수 같아질 때 문자열 분리 반복 -> 분해한 문자열 개수 return

function solution(s) {
    let startIdx = 0;
    let currIdx = startIdx + 1;
    let totalCnt = 0;
    let charCnt = { x: 1, notX: 0 };
    
    while (startIdx < s.length - 1 && currIdx < s.length) {
        s[startIdx] === s[currIdx] ? charCnt.x += 1 : charCnt.notX += 1;
        
        if (charCnt.x === charCnt.notX) {
            console.log(startIdx, currIdx)
            startIdx = currIdx + 1;
            currIdx = startIdx + 1;
            charCnt = { x: 1, notX: 0 };
            totalCnt += 1;
        } else {
            currIdx++;
        }
    }
    
    return startIdx === s.length ? totalCnt : totalCnt + 1;
}