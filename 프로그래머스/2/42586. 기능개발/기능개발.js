// 작업의 진도 - 100% 배포
// 뒤의 기능 먼저 개발 시 앞 기능 배포될 때 함께 배포
// 배포는 하루끝에 한 번

function solution(progresses, speeds) {
    progresses.reverse();
    speeds.reverse();
    
    const result = [];
    while (progresses.length > 0) {
        let cnt = 0;
        while (progresses.at(-1) >= 100) {
            progresses.pop();
            speeds.pop();
            
            cnt++;
        }
        if (cnt > 0) result.push(cnt);
        
        progresses = progresses.map((progress, i) => progress + speeds[i]);
    }
    
    return result;
}