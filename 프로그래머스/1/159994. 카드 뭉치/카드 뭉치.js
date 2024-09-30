
function solution(cards1, cards2, goal) {
    goal.reverse();
    cards1.reverse();
    cards2.reverse();
    
    while (goal.length > 0) {
        const findWord = goal.pop();
        
        if (findWord === cards1.at(-1)) {
            cards1.pop();
            continue;
        }
        if (findWord === cards2.at(-1)) {
            cards2.pop();
            continue;
        }
        return "No";
    }
    
    return "Yes";
}