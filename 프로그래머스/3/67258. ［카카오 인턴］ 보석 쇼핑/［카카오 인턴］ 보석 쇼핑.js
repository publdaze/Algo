//TODO - 가장 짧은 구간의 [시작 진열대 번호, 끝 진열대 번호]
//NOTE - 진열된 모든 종류의 보석을 적어도 1개 이상 포함하는 가장 짧은 구간을 찾아서 구매 / 가장 짧은 구간이 여러 개라면 시작 진열대 번호가 가장 작은 구간
//REVIEW - map 사용


function solution(gems) {
    const gemTypes = new Set(gems);
    let minRangePoint;
    let minRange = 100000;
    let startPoint = 0;
    let endPoint = 0;
    
    const gemsInRange = new Map([[gems[startPoint], 1]]);
        
    while (startPoint <= endPoint) {
        if (endPoint === gems.length - 1 && gemsInRange.size < gemTypes.size) break;
        if (gemTypes.size === gemsInRange.size) {
            let range = endPoint - startPoint + 1;
            if (range < minRange) {
                minRangePoint = [startPoint + 1, endPoint + 1];
                minRange = range;
            }
            gemsInRange.set(gems[startPoint], gemsInRange.get(gems[startPoint]) - 1);
            
            if (gemsInRange.get(gems[startPoint]) === 0) {
                gemsInRange.delete(gems[startPoint]);
            }
            
            startPoint += 1;
        } else {
            if (endPoint < gems.length - 1) endPoint += 1;
            gemsInRange.set(gems[endPoint], 1 + (gemsInRange.get(gems[endPoint]) || 0));
        }
    }
    
    return minRangePoint || [1, gems.length];
}

// 효율성 시간 초과 0/15
// function solution(gems) {
//     const gemTypes = new Set(gems);
//     let minRangePoint;
//     let minRange = 100000;
//     let startPoint = 0;
//     let endPoint = 0;
    
//     const gemTypesInRange = [gems[0]];

//     while (startPoint <= endPoint) {
//         if (endPoint === gems.length - 1 && new Set(gemTypesInRange).size < gemTypes.size) break;
        
//         if (gemTypes.size === new Set(gemTypesInRange).size) {
//             let range = endPoint - startPoint + 1;
//             if (range < minRange) {
//                 minRangePoint = [startPoint + 1, endPoint + 1];
//                 minRange = range;
//             }
//             startPoint += 1;
//             gemTypesInRange.shift();
//         } else {
//             if (endPoint < gems.length - 1) endPoint += 1;
//             gemTypesInRange.push(gems[endPoint]);
//         }
//     }
    
//     return minRangePoint || [1, gems.length];
// }

// 효율성 시간 초과 3/15
// function solution(gems) {
//     const gemTypes = new Set(gems);
//     let minRangePoint;
//     let minRange = 100000;
    
//     for (let startPoint = 0; startPoint < gems.length; startPoint++) {
//         const gemTypesInRange = new Set();
//         for (let endPoint = startPoint; endPoint < gems.length; endPoint++) {
//             const range = endPoint - startPoint + 1;
//             if (range >= minRange) break;
            
//             gemTypesInRange.add(gems[endPoint]);
//             if (gemTypes.size === gemTypesInRange.size) {
//                 minRangePoint = [startPoint + 1, endPoint + 1];
//                 minRange = range;
//                 break;
//             }
//         }
//     }
    
//     return minRangePoint || [1, gems.length];
// }