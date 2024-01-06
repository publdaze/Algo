function solution(n, times) {
    const sortedTimes = times.sort((a, b) => a - b);
    let minTime = 1;
    let maxTime = sortedTimes[sortedTimes.length - 1] * n;

    while (minTime <= maxTime) {
      const midTime = Math.floor((minTime + maxTime) / 2);
      const peopleInMidTime = sortedTimes.reduce((acc, curr) => {
        return acc + Math.floor(midTime / curr);
      }, 0);

      if (peopleInMidTime >= n) {
        maxTime = midTime - 1;
      } else {
        minTime = midTime + 1;
      }
    }

    return minTime;
}