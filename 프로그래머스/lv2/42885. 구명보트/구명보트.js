function solution(people, limit) {
    let count = 0;
    
    people.sort((a, b) => a - b);
    
    while (people.length !== 0) {
        if (people.at(0) + people.at(-1) <= limit) {
            people.splice(0, 1);
        }
        people.pop();
        count += 1;
    }
    
    return count;
}