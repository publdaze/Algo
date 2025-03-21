// 0, 1로 이루어진 문자열 최대한 사전 순 앞에 오도록
// "110" 뽑아서 임의의 위치에 삽입
// 사전순으로 110 보다 큰 건 111, 11, 1
// 110이 여러개일수도 있다! 예시 3

function pickTargetStr(str, targetStr) {
    const stack = []; // 네이밍 도메인적으로 어떻게 하는 게 좋을지..
    let pickedCnt = 0;
    for (let char of str) {
        stack.push(char);
        
        if (stack.slice(-targetStr.length).join("") === targetStr) { // 이렇게 비교하는 게 맞나?..
            for (let i = 0; i < targetStr.length; i++) {
                stack.pop();
            }
            pickedCnt += 1;
        }
    }
    
    return { remain: stack.join(""), pickedCnt }; // 타입 변환이 필요한 경우 어느 시점에서 하는 게 좋을 지..
}

function getInsertIdx(str) {
    return str.lastIndexOf("0") + 1; // 0을 파라미터로 받아야할 지..
}

function insertTargetStr(str, position, targetStr, cnt) {
    return str.substring(0, position) + targetStr.repeat(cnt) + str.substring(position);
}

function solution(s) {
    const TARGET_STR = "110"; // 상수 solution 안에 할까 밖에 할까?..
    
    const result = [];
    for (let str of s) {
        const { remain, pickedCnt } = pickTargetStr(str, TARGET_STR);
        result.push(insertTargetStr(remain, getInsertIdx(remain),TARGET_STR, pickedCnt));
    }
    
    return result;
}
