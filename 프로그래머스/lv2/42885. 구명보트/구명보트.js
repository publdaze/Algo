function solution(people, limit) {
    let count = 0;
    
    people.sort((a, b) => a - b);
    
    for (let i = 0; i < people.length; i++) {
        if (people.length - 1 === i) {
            count += 1;
            break;
        }
        for (let j = people.length - 1; j > i; j--) {
            // console.log(people[i], people[j])
            if (people[i] + people[j] <= limit) {
                people.pop();
                count += 1;
                break;
            } else {
                people.pop();
                count += 1;
                if (i + 1 === j) count += 1;
            }
        }
    }
    
    return count;
}