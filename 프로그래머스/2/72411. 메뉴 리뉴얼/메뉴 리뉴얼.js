// 가장 많이 주문한, {course 개수}개, 최소 2명 이상 주문, 단품 메뉴 조합 -> 코스메뉴
// 조합별 주문한 사람 수
// 코스요리 문자열 오름차순 반환 - 여러 개 가능

function combinations(string, num) {
    if (num === 0) return [""];
    const result = [];
    
    for (let i = 0; i < string.length; i++) {
        const fixed = string[i];
        for (const combination of combinations(string.slice(i + 1), num - 1)) {
            result.push(fixed + combination);
        }
    }
    
    return result;
}

function solution(orders, course) {
    const menuCombMap = new Map();
    
    for (const order of orders) {
        for (const num of course) {
            if (!menuCombMap.has(num)) menuCombMap.set(num, new Map());
            
            // course 수 별 나올 수 있는 메뉴 조합
            const menuCombs = combinations([...order].sort().join(""), num);

            // 조합별 주문한 사람 수 업데이트
            menuCombs.forEach((menuComb) => {
                menuCombMap.get(num).set(menuComb, (menuCombMap.get(num).get(menuComb) || 0) + 1);
            });
        }
    }
    
    return [...menuCombMap.values()].flatMap((courseMap) => {
        if (courseMap.size === 0) return [];
        const mostOrderCnt = Math.max(...courseMap.values());
        if (mostOrderCnt < 2) return [];
        return [...courseMap.entries()].filter(([, value]) => value === mostOrderCnt).map(([key]) => key);
    }).sort();
    
}