// 최대 무게의 사람과 같이 탈 수 있는 사람이 있다면 묶어서 태우기

function solution(people, limit) {
    people.sort((a, b) => a - b);
    
    let boatCnt = 0;
    while (people.length > 0) {
        const biggest = people.pop();
        if (limit - biggest >= people.at(0)) {
            people.shift();
        }
        boatCnt += 1;
    }
    
    return boatCnt;
}