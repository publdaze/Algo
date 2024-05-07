// 금액 지불 -> 10일 회원
// 회원 매일 한 가지 할인, 하나만 구매 가능
// 원하는 제품과 수량이 할인하는 날짜와 10일 연속으로 일치할 경우 회원가입

function solution(want, number, discount) {
    const map = new Map();
    
    for (let i = 0; i < want.length; i++) {
        map.set(want[i], number[i]);
    }
    
    let startDay = 0;
    let endDay = startDay + 10;
    let result = 0;
    
    for (let i = startDay; i < endDay; i++) {
        if (map.has(discount[i])) {
            map.set(discount[i], map.get(discount[i]) - 1);
        }
    }
    
    while (startDay < endDay) {
        if (want.every((w) => (map.get(w) <= 0))) {
            result += 1;
        } 
        if (map.has(discount[startDay])) {
            map.set(discount[startDay], map.get(discount[startDay]) + 1);
        }
        startDay += 1;
        if (endDay < discount.length) {
            if (map.has(discount[endDay]) && endDay !== discount.length) {
                map.set(discount[endDay], map.get(discount[endDay]) - 1);
            }
            endDay += 1;
        }
    }
    
    return result;
}

// 할인 적용 10일 미민일 때 고려 X
// function solution(want, number, discount) {
//     const map = new Map();
    
//     for (let i = 0; i < want.length; i++) {
//         map.set(want[i], number[i]);
//     }
    
//     let startDay = 0;
//     let endDay = startDay + 10;
//     let result = 0;
    
//     for (let i = startDay; i < endDay; i += 1) {
//         if (map.has(discount[i])) {
//             map.set(discount[i], map.get(discount[i]) - 1);
//         }
//     }
    
//     while (endDay !== discount.length) {
//         if (want.every((w) => (map.get(w) <= 0))) {
//             result += 1;
//         } else {
            
//             if (map.has(discount[startDay])) {
//                 map.set(discount[startDay], map.get(discount[startDay]) + 1);
//             }
            
//             if (map.has(discount[endDay])) {
//                 map.set(discount[endDay], map.get(discount[endDay]) - 1);
//             }
//         }
//         startDay += 1;
//         endDay += 1;
//     }
    
//     return result;
// }