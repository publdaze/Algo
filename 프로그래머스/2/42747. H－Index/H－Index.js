function solution(citations) {
    citations.sort((a, b) => b - a);
    
    for (let i = 0; i < citations[0]; i += 1) {
        //console.log(citations, citations[i], i+1, citations.length - i - 1)
        if (citations[i] === citations[i + 1]) continue;
        if (citations[i] <= i + 1 && citations[i] >= citations.length - i - 1) {
            return citations[i] < i + 1 ? i : citations[i];
        }
        if (citations.length - i - 1 === 0) {
            return citations.length;
        }
    }
    
    return 0;
}