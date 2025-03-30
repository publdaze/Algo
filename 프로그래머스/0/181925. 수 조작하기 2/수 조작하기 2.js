const logic = {
    "1": "w",
    "-1": "s",
    "10": "d",
    "-10": "a",
}

function solution(numLog) {
    const result = [];
    
    for (let i = 0; i < numLog.length - 1; i++) {
        result.push(logic[numLog[i + 1] - numLog[i]]);
    }
    
    return result.join("");
}