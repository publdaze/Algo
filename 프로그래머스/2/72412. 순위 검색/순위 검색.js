//REVIEW - https://tech.kakao.com/2021/01/25/2021-kakao-recruitment-round-1/
//https://supersfel.tistory.com/491

function binarySearch (array, minValue) {
    let left = 0;
    let right = array.length - 1;
    let mid = Math.floor((left + right) / 2);
    
    while (left <= right) {
        if (array[mid] >= minValue) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
        mid = Math.floor((left + right) / 2);
    }
    
    return array.length - left;
}

function solution(info, query) {
    let groups = new Map();
    
    info.forEach((person) => {
        let [language, job, career, food, score] = person.split(" ");
        score = Number(score);
        
        for (const l of [language, "-"]) {
            for (const j of [job, "-"]) {
                for (const c of [career, "-"]) {
                    for (const f of [food, "-"]) {
                        const key = l + j + c + f;
                        groups.get(key) ? groups.get(key).push(score) : groups.set(key, [score]);
                    }
                }
            }
        }
    })

    for (const [key, value] of groups){
        groups.set(key, value.sort((a, b) => a - b));
    }
    
    return query.map((conditions) => {
        const condition = conditions.split(/ and | /);
        const score = Number(condition.pop());
        const conditionKey = condition.join("");
        
        return groups.get(conditionKey) ? binarySearch(groups.get(conditionKey), score) : 0;
    });
}

/* 런타임 에러 + 시간 초과
function solution(info, query) {
    let groups = new Map();
    
    info.forEach((person) => {
        let [language, job, career, food, score] = person.split(" ");
        score = Number(score);
        
        for (const l of [language, "-"]) {
            for (const j of [job, "-"]) {
                for (const c of [career, "-"]) {
                    for (const f of [food, "-"]) {
                        const key = l + j + c + f;
                        groups.set(key, groups.get(key) ? [...groups.get(key), score] : [score]);
                    }
                }
            }
        }
    })
        
    for (const [key, value] of groups){
        groups.set(key, value.sort((a, b) => b - a));
    }
    
    return query.map((conditions) => {
        const condition = conditions.split(/ and | /);
        const score = Number(condition.pop());
        const conditionKey = condition.join("");
        
        let cnt = 0;
        for (let personScore of groups.get(conditionKey)) {
            if (personScore < score) return cnt;
            cnt++;
        }
        return cnt;
    });
} */

/* 시간 초과
function solution(info, query) {
    query = query.map((conditions) => conditions.split(" ").filter((condition) => condition !== "and"));
    info = info.map((person) => person.split(" "));
    
    info.sort((a, b) => b.at(-1) - a.at(-1));
    
    const checkCondition = (conditions, person) => {
        for (let i = 0; i < 4; i++) {
            if (conditions[i] !== "-" && person[i] !== conditions[i]) return 0;
        }
        return 1;
    }
    
    
    const result = query.map((conditions) => {
        let cnt = 0;
        for (let person of info) {
            if (Number(person.at(-1)) < Number(conditions.at(-1))) break;
            cnt += checkCondition(conditions, person);
        }
       return cnt;
    });
    
    return result;
}
*/