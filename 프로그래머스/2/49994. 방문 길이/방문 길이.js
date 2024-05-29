// 처음 걸어본 길의 길이

const DIRECTION = {
    U: {
        d: [ 0,  1],
        reverse: "D",
    },
    D: {
        d: [ 0, -1],
        reverse: "U",
    },
    R: {
        d: [ 1,  0],
        reverse: "L",
    },
    L: {
        d: [-1,  0],
        reverse: "R",
    },
}

const REVERSE_DIRECTION = {
    U: "D",
    D: [ 0, -1],
    R: [ 1,  0],
    L: [-1,  0],
}

function outOfRange(x, y) {
    return x < -5 || x > 5 || y < -5 || y > 5;
}

function solution(dirs) {
    let currPos = [0, 0];
    let cnt = 0;
    const path = new Map();
    
    for (let dir of dirs) {
        const [dx, dy] = DIRECTION[dir].d;
        const nextPos = [currPos[0] + dx, currPos[1] + dy];
        if (outOfRange(...nextPos)) continue;
        
        const srcKey = String(currPos);
        const dstKey = String(nextPos);
        if (!path.get(srcKey)?.includes(dir)) {
            path.get(srcKey)?.push(dir) || path.set(srcKey, [dir]);
            path.get(dstKey)?.push(DIRECTION[dir].reverse) || path.set(dstKey, [DIRECTION[dir].reverse]);
            cnt++;
        }
        
        currPos = nextPos;
    }
    
    return cnt;
}

// 반대 방향 고려 안 함
// const DIRECTION = {
//     // dx, dy
//     U: [ 0,  1],
//     D: [ 0, -1],
//     R: [ 1,  0],
//     L: [-1,  0],
// }

// function outOfRange(x, y) {
//     return x < -5 || x > 5 || y < -5 || y > 5;
// }

// function solution(dirs) {
//     let currPos = [0, 0];
//     let cnt = 0;
//     const path = new Map();
    
//     for (let dir of dirs) {
//         const [nextX, nextY] = [currPos[0] + DIRECTION[dir][0], currPos[1] + DIRECTION[dir][1]];
//         if (outOfRange(nextX, nextY)) continue;
        
//         const pathKey = String(currPos);
//         if (!path.get(pathKey)?.includes(dir)) {
//             path.get(pathKey)?.push(dir) || path.set(pathKey, [dir]);
//             cnt++;
//         }
        
//         currPos = [nextX, nextY];
//     }
    
//     return cnt;
// }