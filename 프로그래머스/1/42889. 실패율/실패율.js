function solution(N, stages) {
  let challengeCnt = Array(N + 1).fill(0);
  let peopleCnt = stages.length;

  // 각 스테이지 도전 중인 사람수 구하기
  stages.map((stage) => {
    const stageIdx = stage - 1;
    challengeCnt[stageIdx] += 1;
  });
  challengeCnt.pop();
    
  // 실패율 구하기
  return challengeCnt
    .map((currStageChallengeCnt, i) => {
      const stageInfo = { stage: i + 1, failureRate: currStageChallengeCnt / peopleCnt };
      
      // 남은 인원 업데이트
      peopleCnt -= currStageChallengeCnt;
      return stageInfo;
    })
    .sort((a, b) => b.failureRate - a.failureRate || a.stage - b.stage)
    .map(({ stage }) => stage);
}