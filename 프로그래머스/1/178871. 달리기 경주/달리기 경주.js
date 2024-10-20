function solution(players, callings) {
    const playerRank = new Map(players.map((player, i) => [player, i + 1]));
    const rankPlayer = new Map(players.map((player, i) => [i + 1, player]));
    
    callings.forEach((calling) => {
        const currRank = playerRank.get(calling);
        const prevPlayer = rankPlayer.get(currRank - 1);
        playerRank.set(calling, currRank - 1);
        playerRank.set(prevPlayer, currRank);
        rankPlayer.set(currRank - 1, calling);
        rankPlayer.set(currRank, prevPlayer);
    });
    return [...rankPlayer.values()];
}

// 시간 초과
// function solution(players, callings) {
//     callings.forEach((calling) => {
//         const currRank = players.indexOf(calling);
//         [players[currRank], players[currRank - 1]] = [players[currRank - 1], players[currRank]];
//     });
//     return players;
// }