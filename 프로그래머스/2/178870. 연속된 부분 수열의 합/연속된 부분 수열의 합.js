function solution(sequence, k) {
    let left = 0;
    let right = 0;
    let subStrLeftIdx = left;
    let subStrRightIdx = sequence.length;
    let subStrSum = sequence[right];
    
    do {
        // 최적 조건 업데이트
        if (subStrSum === k && (subStrRightIdx - subStrLeftIdx) > (right - left)) {
            [subStrLeftIdx, subStrRightIdx] = [left, right];
        }
        
        // 누적합 k 초과 하지 않도록 관리
        if (subStrSum >= k) {
            subStrSum -= sequence[left++];
            continue;
        }
        
        // 누적합 k 보다 작은 경우
        subStrSum += sequence[++right];
    } while (right < sequence.length);
    
    return [subStrLeftIdx, subStrRightIdx];
}