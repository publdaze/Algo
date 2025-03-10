function solution(k, tangerine) {
    const tangerineCountByType = new Map();
    
    tangerine.forEach((tangerineType) => {
        const accCountByCurrentType = tangerineCountByType.get(tangerineType) || 0;
        tangerineCountByType.set(tangerineType, accCountByCurrentType + 1);
    });
    
    const sortedTangerineCountByType = [...tangerineCountByType].sort(([, aValue], [, bValue]) => bValue - aValue);

    let tangerineCountInBox = 0;
    for (let [index, [key, value]] of sortedTangerineCountByType.entries()) {
        tangerineCountInBox += value;
        if (tangerineCountInBox >= k) return index + 1;
    }
}