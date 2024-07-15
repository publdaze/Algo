function getZippedArrAndSetCnt(arr, zip, cnt) {
    if (arr.length < 2) {
        cnt[arr.flat().at(0)] += 1;
        return
    };
    
    getZippedArrAndSetCnt(Array.from({ length: arr.length / zip}, (_, i) => Array.from({ length: arr.length / zip}, (_, j) => {
        const zippedNums = new Set([arr[i * 2][j * 2], arr[i * 2 + 1][j * 2], arr[i * 2][j * 2 + 1], arr[i * 2 + 1][j * 2 + 1]]);
        if (zippedNums.size > 1) {
            cnt[arr[i * 2    ][j * 2    ]] += 1;
            cnt[arr[i * 2 + 1][j * 2    ]] += 1;
            cnt[arr[i * 2    ][j * 2 + 1]] += 1;
            cnt[arr[i * 2 + 1][j * 2 + 1]] += 1;
        }
        return zippedNums.size > 1 ? false : [...zippedNums].at(0);
    })), zip, cnt);
    
}

function solution(arr) {
    // 작은 거부터 확인 후 키워가며 합치기 vs 큰 거부터 확인 후 쪼개기
    // 작은 거부터 확인 후 키워가며 합치기
    // 2*2부터 시작 -> 다른 게 섞여 있으면 개수 바로 업데이트 후 false 처리
    // 다 같으면 해당 숫자로 업데이트
    // n*n까지 완료 후 개수 반환
    
    let zip = 2;
    const cnt = {0: 0, 1: 0};
    
    getZippedArrAndSetCnt(arr, zip, cnt);
    
    return [cnt[0], cnt[1]];
}