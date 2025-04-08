// 이용하는 사람 m : 서버 1
// 증설 후 k 후 반납
// 최소 서버 증설 횟수
// SOL) m보다 이용자 수가 많은 경우를 찾는다. -> 필요한 서버 수와 시간을 저장한다. -> 시간 차를 계산해 서버 증설이 더 필요하다면, 증설 카운트를 올린다.
// WARN) 서버 증설 시점이 다르면, 만료 시점도 제각각! 수가 유동적임

function solution(players, m, k) {
    const candidateIncrese = players.map((player, time) => ({ time, neededServer: Math.floor(player / m) }))
                                    .filter(({ neededServer }) => neededServer > 0);
    let increseServerCnt = 0;
    let serverExpireTimeQueue = [];
    
    return candidateIncrese.reduce((increseServerCnt, { time, neededServer }) => {
        while (serverExpireTimeQueue.at(0) <= time) serverExpireTimeQueue.shift();
        if (serverExpireTimeQueue.length < neededServer) {
            for (let i = serverExpireTimeQueue.length; i < neededServer; i++) {
                serverExpireTimeQueue.push(time + k);
                increseServerCnt += 1;
            }
        }
        return increseServerCnt;
    }, 0);
}