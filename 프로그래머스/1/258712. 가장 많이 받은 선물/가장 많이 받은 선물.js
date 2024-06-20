//선물 지수 = 준 선물 - 받은 선물
//두사람 사이 선물 지수 > 0 ? 선물 받음
//: 두사람 사이 선물 지수 < 0 ? 선물 줌
//: 전체 선물 지수 > 상대 선물 지수 ? 선물 받음
//: 전체 선물 지수 < 상대 선물 지수 ? 선물 줌
//: 선물 X
//result - 다음 달에 선물을 가장 많이 받을 친구가 받을 선물의 수

function solution(friends, gifts) {
    const giveAndTake = gifts.reduce((acc, curr) => {
        const [_from, _to] = curr.split(" ");
        if(acc.has(_from)) {
            acc.get(_from)[_to] = (acc.get(_from)[_to] ?? 0) + 1;
            acc.get(_from)['giftPoint'] = (acc.get(_from)['giftPoint'] ?? 0) + 1;
        } else {
            acc.set(_from, { [_to]: 1, giftPoint: 1 })
        }
        if(acc.has(_to)) {
            acc.get(_to)[_from] = (acc.get(_to)[_from] ?? 0) - 1;
            acc.get(_to)['giftPoint'] = (acc.get(_to)['giftPoint'] ?? 0) - 1;
        } else {
            acc.set(_to,   { [_from]: -1, giftPoint: -1 })
        }
        return acc;
    }, new Map());
    
    let maxCnt = 0;
    
    for (const me of friends) {
        let cnt = 0;
        for (const friend of friends) {
            if (me === friend) continue;
            if((giveAndTake.get(me)?.[friend] ?? 0) > 0) cnt += 1;
            if(!(giveAndTake.get(me)?.[friend] ?? 0) && (giveAndTake.get(me)?.['giftPoint'] ?? 0) > (giveAndTake.get(friend)?.['giftPoint'] ?? 0)) cnt += 1;
        }
        maxCnt = Math.max(maxCnt, cnt);
    }
    
    return maxCnt;
}