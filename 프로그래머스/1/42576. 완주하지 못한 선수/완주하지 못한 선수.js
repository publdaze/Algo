// 정확성 3개 실패
// function solution(participant, completion) {
//     participant.sort();
//     completion.sort();
    
//     const unCompletion = [];
    
//     while (completion.length > 0) {
//         const person = participant.pop();
        
//         if (completion.at(-1) !== person) {
//             return person;
//         }
//         completion.pop();
//     }
// }

function solution(participant, completion) {
    const map = new Map();
    
    for (const person of participant) {
        map.set(person, (map.get(person) || 0) + 1);
    }
    
    for (const person of completion) {
        map.set(person, map.get(person) - 1);
        if (map.get(person) === 0) map.delete(person);
    }
    
    return map.keys().next().value;
}