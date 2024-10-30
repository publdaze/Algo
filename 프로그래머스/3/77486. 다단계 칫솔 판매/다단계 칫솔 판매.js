// 칫솔 판매 이익 10%는 추천인에 배분, 나머지 자신
// 추천인도 10%만 가짐
// 10% 원 단위 절사, 1원 미만 모두 자신이 가짐
// 개당 100원
// 각 판매원이 득한 이익금을 나열한 배열
// center은 배열에 없음

function solution(enroll, referral, seller, amount) {
    // 판매원 별 판매 이익 구하기
    const profits = new Map(enroll.map((name, idx) => [name, 0]));
    
    // 추천인 연결하기
    const recommender = {};
    enroll.forEach((name, idx) => {
        recommender[name] = referral[idx];
    });
    
    // 배분하기
    seller.forEach((name, idx) => {
        let profit = amount[idx] * 100;
        
        do {
            let distribution = Math.floor(profit / 10);
            let remain = profit - distribution;
            profits.set(name, profits.get(name) + remain);
            
            name = recommender[name];
            profit = distribution;
        } while (profit > 0 && name !== '-');
    });
    
    return [...profits.values()];
}

// 시간 초과
// function solution(enroll, referral, seller, amount) {
//     // 판매원 별 판매 이익 구하기
//     const profits = new Map(enroll.map((name, idx) => [name, 0]));
    
//     // 추천인 연결하기
//     const recommender = {};
//     enroll.forEach((name, idx) => {
//         recommender[name] = referral[idx];
//     });
    
//     // 배분하기
//     seller.forEach((name, idx) => {
//         let profit = amount[idx] * 100;
        
//         do {
//             let distribution = Math.floor(profit / 10);
//             let remain = profit - distribution;
//             profits.set(name, profits.get(name) + remain);
            
//             name = recommender[name];
//             profit = distribution;
//         } while (name !== '-');
//     });
    
//     return [...profits.values()];
// }