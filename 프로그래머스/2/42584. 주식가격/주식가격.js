function solution(prices) {
  const durations = Array(prices.length).fill(0);
  const waitingPriceIdx = [];

  prices.forEach((currPrice, currentIdx) => {
    while (waitingPriceIdx.length > 0 && prices[waitingPriceIdx.at(-1)] > currPrice) {
      const prevIdx = waitingPriceIdx.pop();
      durations[prevIdx] = currentIdx - prevIdx;
    }
    waitingPriceIdx.push(currentIdx);
  });

  while (waitingPriceIdx.length > 0) {
    const idx = waitingPriceIdx.pop();
    durations[idx] = prices.length - 1 - idx;
  }

  return durations;
}
