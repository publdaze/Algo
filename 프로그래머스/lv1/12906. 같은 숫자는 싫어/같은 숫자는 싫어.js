function solution(arr)
{
    var answer = [arr[0]];

    arr.reduce((p, c) => { 
        if(p !== c) {
            answer.push(c);
        } 
        return c;
    }, arr[0]);
    
    return answer;
}