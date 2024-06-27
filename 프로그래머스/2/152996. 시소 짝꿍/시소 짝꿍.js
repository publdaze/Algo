// 탑승한 사람 무게 * 좌석 거리
function solution(weights) {
    const seatDists = [2, 3, 4];
    
    weights = weights.reduce((acc, weight) => {
        acc[weight] = (acc[weight] ?? 0) + 1;
        return acc;
    }, {});
    const keys = Object.keys(weights);
    
    let cnt = 0n;
    for (let i = 0; i < keys.length; i++) {
        for (let j = i + 1; j < keys.length; j++) {
            const weight1 = keys[i];
            const weight2 = keys[j];
            
            if(weight1 * seatDists[0] === weight2 * seatDists[1] ||
               weight1 * seatDists[0] === weight2 * seatDists[2] ||
               weight1 * seatDists[1] === weight2 * seatDists[2] ||
               weight2 * seatDists[0] === weight1 * seatDists[1] ||
               weight2 * seatDists[0] === weight1 * seatDists[2] ||
               weight2 * seatDists[1] === weight1 * seatDists[2]) 
            {
                cnt += BigInt(weights[weight1]) * BigInt(weights[weight2]);
            }
        }
    }
    
    for (let key of keys) {
        cnt += BigInt(weights[key]) * (BigInt(weights[key]) - 1n) / 2n;
    }
    
    return cnt;
}