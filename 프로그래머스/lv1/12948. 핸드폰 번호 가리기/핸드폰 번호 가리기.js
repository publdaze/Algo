function solution(phone_number) {
    var answer = '';
    var startSeekIdx = phone_number.length - 4
    answer += '*'.repeat(phone_number.length - 4);
    answer += phone_number.slice(startSeekIdx);
    return answer;
}