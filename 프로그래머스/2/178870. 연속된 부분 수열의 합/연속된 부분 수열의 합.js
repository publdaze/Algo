function solution(sequence, k) {
    let left = 0;
    let right = 0;
    let subStrLeftIdx = left;
    let subStrRightIdx = sequence.length;
    let subStrSum = sequence.at(right);
    
    while(1) {
        if (subStrSum === k && (subStrRightIdx - subStrLeftIdx) > (right - left)) {
            [subStrLeftIdx, subStrRightIdx] = [left, right];
        }
        if (left === sequence.length - 1) return [subStrLeftIdx, subStrRightIdx];
        if (right === sequence.length - 1 && subStrSum < k) return [subStrLeftIdx, subStrRightIdx];
        if (subStrSum >= k) {
            subStrSum -= sequence[left++];
            continue;
        }
        if (right < sequence.length - 1) {
            subStrSum += sequence[++right];
        }
    }
}