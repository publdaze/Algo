function solution(participant, completion) {
    const completionMap = new Map();
    
    for (let people of participant) {
        completionMap.set(people, (completionMap.get(people) ?? 0) + 1);
    }
    
    for (let people of completion) {
        completionMap.set(people, completionMap.get(people) - 1);
    }
    
    for (let [key, value] of [...completionMap]) {
        if (value > 0) return key;
    }
}