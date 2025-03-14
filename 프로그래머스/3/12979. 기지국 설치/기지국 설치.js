// 4g -> 5g(전파 도달 W)
// 최소 설치

function getRequiredStations(gapLength, coverage) {
  return Math.ceil(gapLength / coverage);
}

function solution(n, stations, w) {
  const coverage = 2 * w + 1;
  let uncoveredStart = 1;
  let additionalStations = 0;
  
  for (let station of stations) {
    let currentCoverageStart = station - w;
    if (currentCoverageStart > uncoveredStart) {
      additionalStations += getRequiredStations(currentCoverageStart - uncoveredStart, coverage);
    }
    uncoveredStart = station + w + 1;
  }
  
  if (uncoveredStart <= n) {
    additionalStations += getRequiredStations(n - uncoveredStart + 1, coverage);
  }
  
  return additionalStations;
}
