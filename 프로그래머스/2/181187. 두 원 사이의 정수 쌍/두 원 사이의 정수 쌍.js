// 참고 - https://itinerant.tistory.com/206?category=800347

function coordinateCnt(r1, r2) {
    let cnt = 0;
    
    for(let i = 1; i <= r2; i++) {
        cnt += Math.floor(Math.sqrt(r2 ** 2 - i ** 2));
        if (i <= r1) cnt -= Math.ceil(Math.sqrt(r1 ** 2 - i ** 2));
        cnt += 1;
    }
    
    return cnt * 4;
}

function solution(r1, r2) {
    return coordinateCnt(r1, r2);
}