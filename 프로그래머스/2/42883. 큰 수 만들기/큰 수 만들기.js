// 현재 인덱스부터 이전 인덱스들을 순회하며, 현재 값보다 작은 값이 나오는 지 탐색
// 작은 값이 나오면 k-- 하며 바로 이전 인덱스의 값부터 제거해 나간다.
// 큰 값이 나오면 루프를 건너뛴다.
// 인덱스 하나씩 이동하며 반복한다.
// 마지막까지 돌았는데 k가 남으면 뒤의 숫자를 k 만큼 절사한다.

function solution(number, k) {
    const accNumbers = [];
    
    for (let n of number) {
        n = +n;
        
        while (k > 0 && accNumbers.at(-1) < n) {
            accNumbers.pop();
            k--;
        }
        accNumbers.push(n);
    }
    
    if (k > 0) accNumbers.splice(-k);
    
    return accNumbers.join("");
}