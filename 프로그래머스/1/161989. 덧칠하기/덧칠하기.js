// 일부 페인트칠
// 구역 1미터로 n개 나누고 넘버링
// 롤러 m미터 - 구역 완전히 칠한 후 롤러 떼기 -> 한 번 칠함
// 롤러로 페인트칠해야 하는 최소 횟수
function solution(n, m, section) {
    let paintEnd = 1;
    let paintCnt = 0;
    
    for (const s of section) {
        if (paintEnd <= s) {
            paintCnt += 1;
            paintEnd = s + m;
        }
    }
    
    return paintCnt;
}