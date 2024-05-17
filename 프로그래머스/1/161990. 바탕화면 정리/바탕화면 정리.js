function solution(wallpaper) {
    let startX = wallpaper.length;
    let startY = wallpaper[0].length;
    let endX = 0;
    let endY = 0;
    
    for (let i = 0; i < wallpaper.length; i++) {
        const rowStartfileIdx = wallpaper[i].indexOf("#");
        const rowEndfileIdx = wallpaper[i].lastIndexOf("#");
        
        if (rowStartfileIdx === -1) continue;
        if (rowStartfileIdx < startY) startY = rowStartfileIdx;
        if (i < startX) startX = i;
        if (rowEndfileIdx + 1 > endY) endY = rowEndfileIdx + 1;
        if (i + 1 > endX) endX = i + 1;
    }
    
    return [startX, startY, endX, endY];
}