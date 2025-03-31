function solution(arr, queries) {
    return queries.reduce((acc, [i, j]) => {
        [acc[i], acc[j]] = [acc[j], acc[i]];
        return acc;
    }, arr);
}