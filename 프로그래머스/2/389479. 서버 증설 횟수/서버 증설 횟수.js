// 이용하는 사람 m : 서버 1
// 증설 후 k 후 반납
// 최소 서버 증설 횟수
// SOL) m보다 이용자 수가 많은 경우를 찾는다. -> 필요한 서버 수와 시간을 저장한다. -> 시간 차를 계산해 서버 증설이 더 필요하다면, 증설 카운트를 올린다.
// WARN) 서버 증설 시점이 다르면, 만료 시점도 제각각! 수가 유동적임

function getExpansionCandidates(players, m) {
  return players
    .map((player, time) => ({ time, neededServer: Math.floor(player / m) }))
    .filter(({ neededServer }) => neededServer > 0);
}

function adjustActiveServers(currentTime, requiredCount, k, activeServerExpiry) {
  // 만료된 서버 제거
  while (activeServerExpiry.length > 0 && activeServerExpiry[0] <= currentTime) {
    activeServerExpiry.shift();
  }
  
  let newExpansions = 0;
  // 추가 증설이 필요한 경우
  while (activeServerExpiry.length < requiredCount) {
    activeServerExpiry.push(currentTime + k);
    newExpansions += 1;
  }
  return newExpansions;
}

function solution(players, m, k) {
  const expansionCandidates = getExpansionCandidates(players, m);
  let additionalServerCount = 0;
  const activeServerExpiry = []; // 현재 활성 서버의 만료 시점 저장 (오름차순 유지)

  for (const { time, neededServer } of expansionCandidates) {
    additionalServerCount += adjustActiveServers(time, neededServer, k, activeServerExpiry);
  }
    
  return additionalServerCount;
}