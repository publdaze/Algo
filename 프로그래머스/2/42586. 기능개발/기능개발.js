// 뒤의 기능 먼저 개발은 가능하지만 배포는 앞의 기능이 배포될 때 함께
// 기능 개발 완료 : 100%
// 각 배포마다 몇 개의 기능이 배포되는 가
// 배포 하루에 한 번 (하루 끝)
function solution(progresses, speeds) {
    const completeTime = progresses.map((progress, i) => Math.ceil((100 - progress) / speeds[i])); // 소요 시간
    
    let currDay = completeTime[0];
    const deployCnts = [];
    while (completeTime.length > 0) {
        let cnt = 0;
        
        while (currDay >= completeTime[0]) {
            completeTime.shift();
            cnt++;
        }
        
        deployCnts.push(cnt);
        currDay = completeTime[0];
    }
    
    return deployCnts;
}