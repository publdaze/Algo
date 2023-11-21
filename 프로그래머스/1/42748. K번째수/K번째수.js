function solution(array, commands) {
    return commands.reduce((acc, [i, j, k]) => [...acc, array.slice(i - 1, j).sort((a, b) => a - b).at(k - 1)], []);
}