// input 지갑 가로 세로 길이
// find 수납 가능 최소 크기

function solution(sizes) {
    let maxShorterSize = 0;
    let maxLongerSize = 0;
    
    sizes.map((size) => {
        size.sort((a, b) => a - b);
        
        if (size[0] > maxShorterSize) maxShorterSize = size[0];
        if (size[1] > maxLongerSize) maxLongerSize = size[1];
    });
    
    return maxShorterSize * maxLongerSize;
}