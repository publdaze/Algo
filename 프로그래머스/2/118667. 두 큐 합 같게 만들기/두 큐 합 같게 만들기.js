// 하나의 큐에서 추출 -> 추출된 원소 다른 큐에 삽입 (1회 수행)
// 각 큐의 원소 합을 같게 만들기 위해 필요한 작업의 최소 횟수 / -1
// 1. 배열관리 - 인덱스 + 쿼에 추가된 원소 삽입 -> 배열 길이가 불필요하게 많아짐, shift/pop -> 시간복잡도 커짐
//      => 순환 구조이므로 인덱스 + circular linked list 형태로 구현

function sum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

function solution(queue1, queue2) {
    let queue1Sum = sum(queue1);
    let queue2Sum = sum(queue2);
    if (queue1Sum === queue2Sum) return 0;
    
    const balancedSum = (queue1Sum + queue2Sum) / 2;
    if (!Number.isInteger(balancedSum)) return -1;
    
    const linkedList = queue1.concat(queue2).map((value, i) => ({ value, next: (i + 1) % (queue1.length + queue2.length)}));
    
    let biggerSum, biggerFrontIdx, biggerRearIdx;
    if (queue1Sum > queue2Sum) {
        [biggerSum, biggerFrontIdx, biggerRearIdx] = [queue1Sum, 0, queue1.length - 1];
    } else {
        [biggerSum, biggerFrontIdx, biggerRearIdx] = [queue2Sum, queue1.length, linkedList.length - 1];
    }
    
    let cnt = 0;
    while (biggerSum !== balancedSum) {
        if (biggerSum > balancedSum) {
            biggerSum -= linkedList[biggerFrontIdx].value;
            biggerFrontIdx = linkedList[biggerFrontIdx].next;
            if (biggerFrontIdx === 0) return -1;
        } else {
            biggerSum += linkedList[linkedList[biggerRearIdx].next].value;
            biggerRearIdx = linkedList[biggerRearIdx].next;
        }
        if (biggerSum <= 0 || biggerSum >= balancedSum * 2) return -1;
        cnt += 1;
    }
    
    return cnt;
    
}