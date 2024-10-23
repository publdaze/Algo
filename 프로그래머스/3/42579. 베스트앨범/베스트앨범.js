// 노래 재생 많은 장르 -> 많이 재생 노래 -> 고유 번호 낮은 순
// 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범
// 장르별 노래 재생 수 / 
function solution(genres, plays) {
    const genresMap = genres.reduce((map, genre, id) => {
        if (!map.has(genre)) map.set(genre, { songs: [], totalPlays: 0 });
        const currGenre = map.get(genre);
        currGenre.songs.push({ id, play: plays[id] });
        currGenre.totalPlays += plays[id];
        return map;
    }, new Map());
    
    
    return [...genresMap.values()]
        .sort((a, b) => b.totalPlays - a.totalPlays)
        .map(({ songs }) => songs
             .sort((a, b) => b.play - a.play || a.id - b.id)
             .slice(0, 2)
             .map(({ id }) => id)
            )
        .flat()
}