// 가능한 많은 사과를 팔았을 때 최대 이익
// 상자 단위로 판매, 한상자 가격 = 개수(m) * 가장 낮은 점수(p)
// SOL) 정렬 후 작은 것들은 작은 거 몰아서 패키징
function solution(k, m, score) {
    score.sort((a, b) => a - b);
    
    let total = 0;
    for (let i = score.length % m; i < score.length; i += m) {
        total += score[i] * m;
    }
    return total;
}