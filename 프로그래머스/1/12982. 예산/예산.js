// 금액이 작은 부서부터 예산 사용 시 최대 부서에 물품 지원 가능
// 오름차순 정렬 후 예산이 다 떨어질 때까지 부서를 순회하고 개수를 반환

function solution(d, budget) {
    d.sort((a, b) => a - b);
    for (const [i, num] of d.entries()) {
        if (budget - num < 0) return i;
        budget -= num;
    }
    return d.length;
}