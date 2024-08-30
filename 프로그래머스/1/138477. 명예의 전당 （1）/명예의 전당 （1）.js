//매일 1명
//지금까지 출연 가수들의 점수 중 상위 k번째 이내 -> 명예의 전당
//프로그램 시작 이후 초기에 k일까지는 모든 출연 가수의 점수가 명예의 전당에 오름
//매일 "명예의 전당"의 최하위 점수를 발표
//매일 발표된 명예의 전당의 최하위 점수를 return
// sol1) 힙 뺄 때 고려X

function solution(k, score) {
    const result = [];
    score.reduce((acc, curr) => {
        acc.push(curr);
        acc.sort((a, b) => b - a);
        acc.splice(k);
        result.push(acc.at(-1));
        return acc;
    }, []);
    return result;
}