// 로또로 당첨이 가능했던 최고 순위와 최저 순위
// 알아볼 수 없는 번호 0

function solution(lottos, win_nums) {
    const knownNumber = lottos.filter((lotto) => lotto > 0);
    const unknownCnt = lottos.length - knownNumber.length;
    const winNumSet = new Set(win_nums);
    const knownCorrectCnt = knownNumber.reduce((acc, num) => acc + winNumSet.has(num), 0);
    return [7 - ((knownCorrectCnt + unknownCnt) || 1), 7 - (knownCorrectCnt || 1)];
}