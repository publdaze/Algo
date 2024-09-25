// 뒤의 기능 먼저 개발은 가능하지만 배포는 앞의 기능이 배포될 때 함께
// 기능 개발 완료 : 100%
// 각 배포마다 몇 개의 기능이 배포되는 가
// 배포 하루에 한 번 (하루 끝)
function solution(progresses, speeds) {
  const completeTimes = progresses.map((progress, i) => Math.ceil((100 - progress) / speeds[i]));

  const deployGroupCnts = [];
  let currDay = completeTimes[0];
  let deployGroupCnt = 0;

  for (const completeTime of completeTimes) {
    if (currDay >= completeTime) {
      deployGroupCnt++;
      continue;
    }

    deployGroupCnts.push(deployGroupCnt);
    deployGroupCnt = 1;
    currDay = completeTime;
  }
  deployGroupCnts.push(deployGroupCnt);
  return deployGroupCnts;
}