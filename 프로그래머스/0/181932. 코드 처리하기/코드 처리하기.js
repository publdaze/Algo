// 모드: 0, 1
// 모드 0 - 1 or 짝수일 때, ret 맨뒤에 code[idx] 추가
//       - 1 -> 모드 변경
// 모드 1 = 1 or 홀수일 때, ret 맨뒤에 code[idx] 추가
//       - 1 -> 모드 변경
// 시작 모드 0, ret 빈문자열이면, EMPTY

function solution(code) {
    let mode = 0;
    let ret = "";
    [...code].forEach((char, idx) => {
        if (char === "1") {
            mode = Number(!mode);
            return;
        }
            
        if (mode === 0 && idx % 2 === 0
           || mode === 1 && idx % 2 === 1) {
            ret += char;
        }
    });
    
    return ret === "" ? "EMPTY" : ret;
}