function solution(keyinput, [width, height]) {
    const [MAX_X, MAX_Y] = [Math.floor(width / 2), Math.floor(height / 2)];
    
    const move = {
        up: (x, y) => {
            if (y >= MAX_Y) return [x, y];
            return [x, y + 1];
        },
        down: (x, y) => {
            if (y <= -MAX_Y) return [x, y];
            return [x, y - 1];
        },
        left: (x, y) => {
            if (x <= -MAX_X) return [x, y];
            return [x - 1, y];
        },
        right: (x, y) => {
            if (x >= MAX_X) return [x, y];
            return [x + 1, y];
        },
    }
    
    let [x, y] = [0, 0];
    
    for (const key of keyinput) {
        [x, y] = move[key](x, y);
    }
    
    return [x, y];
}