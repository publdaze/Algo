// 출근 희망 시각 + 10분 까지 출근 (토요일, 일요일 무관 일주일간 이벤트)
// 모든 시각은 시에 100을 곱하고 분을 더한 정수 (연달아 붙인 형태)
// 상품을 받을 직원 수
// 분이 60분 넘어갔을 때 처리 누락

function formatMinute(num) {
    return Math.floor(num / 100) * 60 + num % 100;
}

function solution(schedules, timelogs, startday) {
    return schedules.map(formatMinute).reduce((acc, schedule, i) => acc + timelogs[i].every((timelog, day) => formatMinute(timelog) - schedule <= 10 || (startday + day) % 7 === 6 || (startday + day) % 7 === 0), 0);
}