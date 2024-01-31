function solution(priorities, location) {
    let turn = 0;
    
    while(priorities.length !== 0) {
        if (Math.max(...priorities) === priorities[0]) {
            turn += 1;
            if (location === 0) {
                return turn;
            } else {
                priorities.shift();
            }
        } else {
            priorities.push(priorities.shift());
        }
        location = location === 0 ? priorities.length - 1 : location - 1;
    }
        
    
}