function combinations (arr, cnt) {
    if (cnt === 0) return [""];
    
    const result = [];
    arr.forEach((fixed, idx) => {
        result.push(...combinations(arr.slice(idx + 1), cnt - 1).map((comb) => fixed + comb));
    })
    return result;
}

function solution(orders, course) {
    const result = [];
    
    course.map((cnt) => {
        const courseMenuCandidate = new Map();
        
        for (let order of orders) {
            for (let combination of combinations([...order], cnt)) {
                const sortedComb = [...combination].sort().join("");
                courseMenuCandidate.set(sortedComb, (courseMenuCandidate.get(sortedComb) || 0) + 1)
            }
        }
        const maxMenu = Math.max(...courseMenuCandidate.values());
        result.push(...[...courseMenuCandidate.entries()].filter(([key, value]) => value === maxMenu && value >= 2).map((item) => item[0]));
    })
    
    return result.sort();
}