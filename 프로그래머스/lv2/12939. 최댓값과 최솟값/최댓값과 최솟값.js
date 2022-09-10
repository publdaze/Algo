function solution(s) {
    var answer = '';
    
    const nums = s.split(' ').map(Number);
    answer += Math.min(...nums) + ' ' + Math.max(...nums);
    
    return answer;
}